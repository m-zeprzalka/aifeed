// src/components/sections/NewsSection.js
"use client";
import { useState, useEffect } from "react";
import ArticleCard from "../ui/ArticleCard";

export default function NewsSection() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch("/api/news");
        const data = await response.json();

        if (data.articles) {
          setNews(data.articles);
        } else {
          setError("Failed to fetch news");
        }
      } catch (err) {
        setError("Error loading news");
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <section className="py-8 bg-gray-50 dark:bg-slate-950">
      <div>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Ostatnie Newsy
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((article, index) => (
            <ArticleCard key={index} article={article} />
          ))}
        </div>
      </div>
    </section>
  );
}
