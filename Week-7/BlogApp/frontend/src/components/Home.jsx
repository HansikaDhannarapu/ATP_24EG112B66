import React from "react";
import { useNavigate } from "react-router";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      
      <div className="bg-white max-w-2xl w-full px-10 py-12 rounded-lg border border-slate-200 shadow-sm text-center">
        
        <h1 className="text-4xl font-semibold text-slate-900 mb-5">Explore Articles That Inspire Innovation</h1>

        <p className="text-slate-600 leading-relaxed text-base">
          A modern blogging platform where users can read articles, share thoughts,
          and engage through comments. Authors can publish and manage articles,
          while users can read all the articles published by authors and can also add/delete comments for the articles.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          
          <button
            className="bg-slate-900 text-white px-6 py-3 rounded-md hover:bg-slate-800 transition"
            onClick={() => navigate("/login")}
          >
            Explore Articles
          </button>

          

        </div>

        <p className="mt-8 text-sm text-slate-400">
          Built with React, Node.js, Express & MongoDB
        </p>

      </div>

    </div>
  );
}

export default Home;
