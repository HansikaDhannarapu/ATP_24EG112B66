import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router";
import { pageWrapper, pageTitleClass } from "../styles/common";
import { useAuth } from "../store/authStore";

function Articles() {
  const navigate = useNavigate();
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAllArticles = async () => {
      try {
        const res = await axios.get(`https://atp-24eg112b66.onrender.com/user/articles`, { withCredentials: true });
        setArticles(res.data.payload || []);
      } catch (err) {
        if (err.response?.status === 401) {
          // Token is missing or expired, but Zustand still thinks we are logged in.
          // We must clear the local storage state to force the user back to the login screen.
          useAuth.setState({ isAuthenticated: false, currentUser: null });
          navigate("/login");
        } else {
          setError(err.response?.data?.message || "Failed to fetch articles");
        }
      } finally {
        setLoading(false);
      }
    };
    fetchAllArticles();
  }, []);

  if (loading) return <div className="text-center py-20 text-slate-500">Loading articles...</div>;
  if (error) return <div className="text-center py-20 text-rose-600">{error}</div>;

  return (
  <div className={pageWrapper}>

    <h1 className={`${pageTitleClass} mb-10`}>
      Discover Articles
    </h1>

    {articles.length === 0 ? (

      <p className="text-center text-slate-500 py-10">
        No articles available at the moment.
      </p>

    ) : (

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

        {articles.map((article) => (

          <div
            key={article._id}
            className="bg-white rounded-lg p-6 shadow-sm hover:border-slate-300 transition-colors duration-200 border border-slate-200 flex flex-col justify-between"
          >

            <div>

              <span className="bg-slate-100 text-slate-600 uppercase tracking-wider text-xs font-semibold mb-4 inline-block px-3 py-1 rounded-full">
                {article.category}
              </span>

              <h3 className="text-xl font-semibold text-slate-900 mb-4 leading-tight">
                {article.title}
              </h3>

              <p className="text-slate-600 mb-6 line-clamp-3 leading-relaxed">
                {article.content}
              </p>

            </div>

            <div className="pt-4 border-t border-slate-200 flex justify-between items-center gap-4">

              <span className="text-sm font-medium text-slate-500">
                By {article.author?.firstName || "Author"}
              </span>

              <Link
                to={`/article/${article._id}`}
                className="bg-slate-900 text-white text-sm font-medium px-4 py-2 rounded-md hover:bg-slate-700 transition-colors"
              >
                Read →
              </Link>

            </div>

          </div>
        ))}
      </div>
    )}
  </div>
);
}

export default Articles;
