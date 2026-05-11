import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import { useAuth } from "../store/authStore";

import {
  articleCardClass,
  articleTitle,
  articleExcerpt,
  articleMeta,
  ghostBtn,
  loadingClass,
  errorClass,
  emptyStateClass,
  articleStatusActive,
  articleStatusDeleted,
} from "../styles/common";

function AuthorArticles() {
  const navigate = useNavigate();
  const user = useAuth((state) => state.currentUser);

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  console.log("user in author profile", user);

  useEffect(() => {
    if (!user) return;

    const getAuthorArticles = async () => {
      try {
        setLoading(true);
        //read articles of current author
        let res = await axios.get("https://atp-24eg112b66.onrender.com/author/articles", { withCredentials: true });
        if (res.status === 200) {
          setArticles(res.data.payload);
        }
        //update articles state
      } catch (err) {
        console.log(err);
        setError(err.response?.data?.error || "Failed to fetch articles");
      } finally {
        setLoading(false);
      }
    };

    getAuthorArticles();
  }, [user]);

  const openArticle = (article) => {
    navigate(`/article/${article._id}`, {
      state: article,
    });
  };

  const formatDate = (date) => {
    return new Date(date).toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      dateStyle: "medium",
    });
  };

  if (loading) return <p className={loadingClass}>Loading articles...</p>;
  if (error) return <p className={errorClass}>{error}</p>;

  if (articles.length === 0) {
    return <div className={emptyStateClass}>You haven't published any articles yet.</div>;
  }

  return (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

    {articles.map((article) => (

      <div
        key={article._id}
        className={`${articleCardClass} relative flex flex-col bg-white rounded-3xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-purple-100 p-6`}
      >

        {/* Status Badge */}
        <span
          className={
            article.isArticleActive
              ? "absolute top-4 right-4 bg-green-100 text-green-700 text-[10px] font-bold px-3 py-1 rounded-full tracking-wider"
              : "absolute top-4 right-4 bg-red-100 text-red-600 text-[10px] font-bold px-3 py-1 rounded-full tracking-wider"
          }
        >
          {article.isArticleActive ? "ACTIVE" : "DELETED"}
        </span>

        <div className="flex flex-col gap-3">

          <p className={`${articleMeta} text-purple-500 uppercase tracking-wide`}>
            {article.category}
          </p>

          <p className={`${articleTitle} text-purple-700`}>
            {article.title}
          </p>

          <p className={`${articleExcerpt} text-gray-500 leading-relaxed`}>
            {article.content.slice(0, 60)}...
          </p>

        </div>

        <button
          className={`${ghostBtn} mt-auto pt-6 text-purple-600 hover:text-purple-800 transition-all duration-300 font-medium`}
          onClick={() => openArticle(article)}
        >
          Read Article →
        </button>

      </div>
    ))}
  </div>
);
}

export default AuthorArticles;
