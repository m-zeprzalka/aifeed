"use client";
import { useState, useEffect } from "react";

export default function HeroSection() {
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFeaturedNews = async () => {
      try {
        const response = await fetch("/api/featured-news");
        const data = await response.json();

        if (data) {
          setArticle(data);
        } else {
          setError("Failed to fetch featured news");
        }
      } catch (err) {
        setError("Error loading featured news");
      } finally {
        setLoading(false);
      }
    };

    fetchFeaturedNews();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <section className="bg-slate-950 dark:bg-slate-800 text-white  rounded-xl max-w-7xl">
      <div>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-4 p-4 lg:p-6 xl:p-8">
            <span className="inline-block px-3 py-1 bg-green-200 rounded-full text-sm font-medium text-slate-950">
              {article.category || "Nowości"}
            </span>
            <h2 className="text-3xl lg:text-5xl font-bold color-neutral-100 hover:color-sky-700">
              <a href={article.url} target="_blank">
                {article.title}
              </a>
            </h2>
            <div className="flex flex-col gap-1">
              <span className="text-xs text-red-400 dark:text-gray-500">
                {article.sourceName}
              </span>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {new Date(article.publishedAt).toLocaleDateString()}
              </span>
            </div>
            <p className="text-lg text-gray-50">{article.description}</p>
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-200 text-slate-950 px-6 py-3 rounded-md font-medium hover:bg-green-300 transition-colors"
            >
              Przeczytaj
            </a>
          </div>
          <div className="relative aspect-square rounded-r-xl overflow-hidden shadow-xl">
            <img
              src={article.urlToImage || "https://placehold.co/1024x1024/png"}
              alt={article.title}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
