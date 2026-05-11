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

  if (loading) return <div className="text-center py-20 text-[#0066cc]">Loading articles...</div>;
  if (error) return <div className="text-center py-20 text-red-500">{error}</div>;

  return (
  <div className={pageWrapper}>

    <h1 className={`${pageTitleClass} mb-12 text-purple-700`}>
      Discover Articles
    </h1>

    {articles.length === 0 ? (

      <p className="text-center text-purple-400 py-10">
        No articles available at the moment.
      </p>

    ) : (

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        {articles.map((article) => (

          <div
            key={article._id}
            className="bg-white rounded-3xl p-8 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-purple-100 flex flex-col justify-between"
          >

            <div>

              <span className="bg-purple-100 text-purple-700 uppercase tracking-widest text-xs font-bold mb-4 inline-block px-3 py-1 rounded-full">
                {article.category}
              </span>

              <h3 className="text-2xl font-bold text-purple-700 mb-4 leading-tight">
                {article.title}
              </h3>

              <p className="text-gray-500 mb-6 line-clamp-3 leading-relaxed">
                {article.content}
              </p>

            </div>

            <div className="pt-4 border-t border-purple-100 flex justify-between items-center">

              <span className="text-sm font-medium text-purple-500">
                By {article.author?.firstName || "Author"}
              </span>

              <Link
                to={`/article/${article._id}`}
                className="bg-purple-100 text-purple-700 text-sm font-semibold px-4 py-2 rounded-full hover:bg-purple-500 hover:text-white transition-all duration-300"
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
