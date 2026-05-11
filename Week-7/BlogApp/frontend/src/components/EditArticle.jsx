import { useForm } from "react-hook-form";
import { useLocation, useNavigate, useParams } from "react-router";
import { useEffect } from "react";
import axios from "axios";


import {
  formCard,
  formTitle,
  formGroup,
  labelClass,
  inputClass,
  submitBtn,
  errorClass,
  articlePageWrapper,
} from "../styles/common";

function EditArticle() {
  const location = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();

  const article = location.state;

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  // prefill form
  useEffect(() => {
    if (!article) return;

     setValue("title", article.title);
     setValue("category", article.category);
     setValue("content", article.content);
  }, [article]);

  const updateArticle = async (modifiedArticle) => {
  
    //add articleId to modified article
    modifiedArticle.articleId=article._id;
    //make PUT req to update article
    let res=await axios.put("https://atp-24eg112b66.onrender.com/author/articles",
      modifiedArticle,
      {withCredentials:true})
    //naviagte to articleById component
   if(res.status===200){
    navigate(`/article/${article._id}`,{state:res.data.payload})
   }
  };

  return (
  <div className={`${formCard} mt-10 bg-white shadow-xl rounded-3xl p-8 border border-purple-100`}>

    <h2 className={`${formTitle} text-purple-700 text-center mb-8`}>
      Edit Article
    </h2>

    <form onSubmit={handleSubmit(updateArticle)}>

      {/* Title */}
      <div className={formGroup}>

        <label className={`${labelClass} text-purple-700`}>
          Title
        </label>

        <input
          className={`${inputClass} bg-purple-50 border border-purple-100 rounded-2xl focus:ring-2 focus:ring-purple-300 outline-none`}
          {...register("title", { required: "Title required" })}
        />

        {errors.title && (
          <p className={errorClass}>{errors.title.message}</p>
        )}

      </div>

      {/* Category */}
      <div className={formGroup}>

        <label className={`${labelClass} text-purple-700`}>
          Category
        </label>

        <select
          className={`${inputClass} bg-purple-50 border border-purple-100 rounded-2xl focus:ring-2 focus:ring-purple-300 outline-none`}
          {...register("category", { required: "Category required" })}
        >
          <option value="">Select category</option>
          <option value="technology">Technology</option>
          <option value="programming">Programming</option>
          <option value="ai">AI</option>
          <option value="web-development">Web Development</option>
        </select>

        {errors.category && (
          <p className={errorClass}>{errors.category.message}</p>
        )}

      </div>

      {/* Content */}
      <div className={formGroup}>

        <label className={`${labelClass} text-purple-700`}>
          Content
        </label>

        <textarea
          rows="14"
          className={`${inputClass} bg-purple-50 border border-purple-100 rounded-2xl focus:ring-2 focus:ring-purple-300 outline-none`}
          {...register("content", { required: "Content required" })}
        />

        {errors.content && (
          <p className={errorClass}>{errors.content.message}</p>
        )}

      </div>

      <button
        className={`${submitBtn} bg-purple-500 hover:bg-purple-600 text-white rounded-2xl transition-all duration-300 shadow-md`}
      >
        Update Article
      </button>

    </form>
  </div>
);
}

export default EditArticle;
