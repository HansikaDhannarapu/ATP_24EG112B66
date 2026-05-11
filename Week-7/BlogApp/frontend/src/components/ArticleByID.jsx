import { useParams, useLocation, useNavigate } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../store/authStore";
import {
  articlePageWrapper,
  articleHeader,
  articleCategory,
  articleMainTitle,
  articleAuthorRow,
  authorInfo,
  articleContent,
  articleFooter,
  articleActions,
  editBtn,
  deleteBtn,
  loadingClass,
  errorClass,
  inputClass,
  commentsWrapper,
  commentCard,
  commentHeader,
  commentUserRow,
  avatar,
  commentUser,
  commentTime,
  commentText,
} from "../styles/common.js";
import { useForm } from "react-hook-form";

function ArticleByID() {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const user = useAuth((state) => state.currentUser);
  console.log("user ",user)

  const [article, setArticle] = useState(location.state || null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    //if aticle is transferred, then use it
    if (article) return;

    //otherwise, make api req to read that article by id
    const getArticle = async () => {
      setLoading(true);

      try {
        const res = await axios.get(`https://atp-24eg112b66.onrender.com/user/article/${id}`, { withCredentials: true });

        setArticle(res.data.payload);
      } catch (err) {
        setError(err.response?.data?.error);
      } finally {
        setLoading(false);
      }
    };

    getArticle();
  }, [id]);

  const formatDate = (date) => {
    return new Date(date).toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      dateStyle: "medium",
      timeStyle: "short",
    });
  };

  // delete & restore article
  const toggleArticleStatus = async () => {
    const newStatus = !article.isArticleActive;

    const confirmMsg = newStatus ? "Restore this article?" : "Delete this article?";
    if (!window.confirm(confirmMsg)) return;

    try {
      const res = await axios.patch(
        "https://atp-24eg112b66.onrender.com/author/articles",
        { articleId: article._id, isArticleActive: newStatus },
        { withCredentials: true },
      );

      console.log("SUCCESS:", res.data);

      setArticle(res.data.payload);

      //  toast.success(res.data.message);
    } catch (err) {
      console.log("ERROR:", err.response);

      const msg = err.response?.data?.message;

      if (err.response?.status === 400) {
        toast(msg); // already deleted/active case
      } else {
        setError(msg || "Operation failed");
      }
    }
  };

  //edit article
  const editArticle = (articleObj) => {
    navigate("/edit-article", { state: articleObj });
  };

  //post comment by user
  const addComment = async (commentObj) => {
    //{comment:"user comment"}
    //add artcileId
    commentObj.articleId = article._id;
    console.log(commentObj);
    let res = await axios.put("https://atp-24eg112b66.onrender.com/user/articles", commentObj, { withCredentials: true });
    if (res.status === 200) {
      
      setArticle(res.data.payload);
    }
  };

 // console.log("article",article)


  if (loading) return <p className={loadingClass}>Loading article...</p>;
  if (error) return <p className={errorClass}>{error}</p>;
  if (!article) return null;

  return (
  <div className={`${articlePageWrapper} bg-purple-50 rounded-3xl p-6 shadow-lg`}>

    {/* Header */}
    <div className={`${articleHeader} border-b border-purple-100 pb-6`}>

      <span className={`${articleCategory} bg-purple-100 text-purple-700 px-4 py-1 rounded-full text-sm font-semibold`}>
        {article.category}
      </span>

      <h1 className={`${articleMainTitle} uppercase text-purple-700 mt-4`}>
        {article.title}
      </h1>

      <div className={`${articleAuthorRow} text-purple-400 mt-4`}>

        <div className={authorInfo}>
          ✍️ {user?.role}
        </div>

        <div>
          {formatDate(article.createdAt)}
        </div>

      </div>
    </div>

    {/* Content */}
    <div className={`${articleContent} text-gray-700 leading-relaxed mt-8`}>
      {article.content}
    </div>

    {/* AUTHOR actions */}
    {user?.role === "AUTHOR" && (
      <div className={`${articleActions} mt-8 flex gap-4`}>

        <button
          className={`${editBtn} bg-purple-500 hover:bg-purple-600 text-white px-5 py-2 rounded-2xl transition-all duration-300`}
          onClick={() => editArticle(article)}
        >
          Edit
        </button>

        <button
          className={`${deleteBtn} bg-red-400 hover:bg-red-500 text-white px-5 py-2 rounded-2xl transition-all duration-300`}
          onClick={toggleArticleStatus}
        >
          {article.isArticleActive ? "Delete" : "Restore"}
        </button>

      </div>
    )}

    {/* USER actions */}
    {user?.role === "USER" && (
      <div className={`${articleActions} mt-8`}>

        <form onSubmit={handleSubmit(addComment)}>

          <input
            type="text"
            {...register("comment")}
            className={`${inputClass} bg-white border border-purple-100 rounded-2xl focus:ring-2 focus:ring-purple-300 outline-none`}
            placeholder="Write your comment here..."
          />

          <button
            type="submit"
            className="bg-purple-500 hover:bg-purple-600 text-white px-5 py-2 rounded-2xl mt-5 transition-all duration-300"
          >
            Add comment
          </button>

        </form>
      </div>
    )}

    {/* Comments */}
    <div className={`${commentsWrapper} mt-10`}>

      {article.comments?.length === 0 && (
        <p className="text-purple-300 text-sm text-center">
          No comments yet
        </p>
      )}

      {article.comments?.map((commentObj, index) => {
        const name = commentObj.user?.email || "User";
        const firstLetter = name.charAt(0).toUpperCase();

        return (
          <div
            key={index}
            className={`${commentCard} bg-white rounded-3xl p-5 shadow-md border border-purple-100 mb-5`}
          >

            {/* Header */}
            <div className={commentHeader}>

              <div className={commentUserRow}>

                <div className={`${avatar} bg-purple-100 text-purple-700`}>
                  {firstLetter}
                </div>

                <div>
                  <p className={`${commentUser} text-purple-700 font-semibold`}>
                    {name}
                  </p>

                  <p className={`${commentTime} text-purple-400`}>
                    {formatDate(commentObj.createdAt || new Date())}
                  </p>
                </div>

              </div>
            </div>

            {/* Comment */}
            <p className={`${commentText} text-gray-700 mt-4`}>
              {commentObj.comment}
            </p>

          </div>
        );
      })}
    </div>

    {/* Footer */}
    <div className={`${articleFooter} text-purple-400 border-t border-purple-100 pt-5 mt-8`}>
      Last updated: {formatDate(article.updatedAt)}
    </div>

  </div>
);
}

export default ArticleByID;

// {
//   "user":"6989799b7013502767d3f82b",
//   "articleId":"6989750220ce5bf826ec4f7e",
//   "comment":"good article"

// }
