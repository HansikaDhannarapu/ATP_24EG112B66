import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router";
import { pageWrapper, pageTitleClass } from "../styles/common";
import { useAuth } from "../store/authStore";

function Articles() {
  const navigate = useNavigate();
  const logout = useAuth((state) => state.logout);
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAllArticles = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/user/articles`, { withCredentials: true });
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

  if (loading) return <div className="text-center py-20 text-[#0066cc]">Loading articles...</div>;
  if (error) return <div className="text-center py-20 text-red-500">{error}</div>;

  return (
    <div className={pageWrapper}>
      <h1 className={`${pageTitleClass} mb-12`}>Discover Articles</h1>

      {articles.length === 0 ? (
        <p className="text-center text-gray-500 py-10">No articles available at the moment.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <div key={article._id} className="bg-[#f5f5f7] rounded-3xl p-8 hover:bg-[#e8e8ed] transition-colors flex flex-col justify-between">
              <div>
                <span className="text-[#0066cc] uppercase tracking-widest text-xs font-bold mb-3 block">
                  {article.category}
                </span>
                <h3 className="text-2xl font-bold text-[#1d1d1f] mb-4 leading-tight">
                  {article.title}
                </h3>
                <p className="text-[#6e6e73] mb-6 line-clamp-3 leading-relaxed">
                  {article.content}
                </p>
              </div>

              <div className="pt-4 border-t border-[#d2d2d7]/50 flex justify-between items-center">
                <span className="text-sm font-medium text-[#1d1d1f]">
                  By {article.author?.firstName || "Author"}
                </span>
                <Link
                  to={`/article/${article._id}`}
                  className="bg-white text-[#0066cc] text-sm font-semibold px-4 py-2 rounded-full hover:bg-[#0066cc] hover:text-white transition-colors"
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