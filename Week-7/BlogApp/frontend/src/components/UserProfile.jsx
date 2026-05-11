import { useAuth } from "../store/authStore";
import { useNavigate } from "react-router";

import axios from "axios";
import { useEffect, useState } from "react";

import {
  articleGrid,
  articleCardClass,
  articleTitle,
  ghostBtn,
  loadingClass,
  errorClass,
  timestampClass,
} from "../styles/common.js";

function UserProfile() {
  const logout = useAuth((state) => state.logout);
  const currentUser = useAuth((state) => state.currentUser);
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getArticles = async () => {
      setLoading(true);
      try {
        //read articles of all authors
        let res=await axios.get("https://atp-24eg112b66.onrender.com/user/articles",{withCredentials:true})
        //update articles state
        if(res.status===200){
          setArticles(res.data.payload)
        }
      } catch (err) {
        setError(err.response?.data?.error || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    getArticles();
  }, []);

  // convert UTC → IST
  const formatDateIST = (date) => {
    return new Date(date).toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      dateStyle: "medium",
      timeStyle: "short",
    });
  };

  const onLogout = async () => {
    await logout();

    navigate("/login");
  };

  const navigateToArticleByID = (articleObj) => {
    navigate(`/article/${articleObj._id}`, {
      state: articleObj,
    });
  };

  if (loading) {
    return <p className={loadingClass}>Loading articles...</p>;
  }

 return (
  <div className="max-w-5xl mx-auto px-6 py-10">

    {/* ERROR */}
    {error && (
      <p className={`${errorClass} text-center`}>
        {error}
      </p>
    )}

    {/* PROFILE HEADER */}
    <div className="bg-white shadow-lg rounded-3xl p-6 mb-8 flex items-center justify-between border border-purple-100">

      {/* LEFT */}
      <div className="flex items-center gap-4">

        {/* Avatar */}
        {currentUser?.profileImageUrl ? (
          <img
            src={currentUser.profileImageUrl}
            className="w-16 h-16 rounded-full object-cover border-2 border-purple-200 shadow-sm"
            alt="profile"
          />
        ) : (
          <div className="w-16 h-16 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center text-xl font-semibold shadow-sm">
            {currentUser?.firstName?.charAt(0).toUpperCase()}
          </div>
        )}

        {/* Name */}
        <div>
          <p className="text-sm text-purple-400">
            Welcome back
          </p>

          <h2 className="text-xl font-semibold text-purple-700">
            {currentUser?.firstName}
          </h2>
        </div>

      </div>

      {/* LOGOUT */}
      <button
        className="bg-purple-500 text-white text-sm px-5 py-2 rounded-full hover:bg-purple-600 transition-all duration-300 shadow-md"
        onClick={onLogout}
      >
        Logout
      </button>

    </div>

    {/* ARTICLES SECTION */}
    <div className="mt-4">

      <h3 className="text-xl font-semibold text-purple-700 mb-5">
        Latest Articles
      </h3>

      {/* EMPTY STATE */}
      {articles.length === 0 ? (
        <p className="text-purple-300 text-sm text-center py-10">
          No articles available yet
        </p>
      ) : (
        <div className={articleGrid}>
          {articles.map((articleObj) => (
            <div
              className={`${articleCardClass} bg-white rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 border border-purple-100`}
              key={articleObj._id}
            >

              <div className="flex flex-col h-full">

                {/* TOP */}
                <div>

                  <p className={`${articleTitle} text-purple-700`}>
                    {articleObj.title}
                  </p>

                  <p className="text-sm text-gray-500 mt-2 leading-relaxed">
                    {articleObj.content.slice(0, 80)}...
                  </p>

                  <p className={`${timestampClass} mt-3 text-purple-400`}>
                    {formatDateIST(articleObj.createdAt)}
                  </p>

                </div>

                {/* ACTION */}
                <button
                  className={`${ghostBtn} mt-auto pt-4 text-purple-600 hover:text-purple-800 transition-all duration-300`}
                  onClick={() => navigateToArticleByID(articleObj)}
                >
                  Read Article →
                </button>

              </div>

            </div>
          ))}
        </div>
      )}
    </div>
  </div>
);
}

export default UserProfile;
