"use client";
import { useState, useEffect } from "react";
import ResearchCard from "../ui/ResearchCard";

export default function ResearchSection() {
  const [research, setResearch] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchResearch = async () => {
      try {
        const response = await fetch("/api/research");
        const data = await response.json();
        if (data.articles) {
          setResearch(data.articles);
        }
      } catch (error) {
        console.error("Error fetching research:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchResearch();
  }, []);

  return (
    <section className="py-8 dark:bg-slate-950">
      <div>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Polecane
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {loading
            ? [...Array(2)].map((_, i) => <ResearchCard key={i} />)
            : research.map((paper, index) => (
                <ResearchCard
                  key={index}
                  source={paper.source.name}
                  title={paper.title}
                  description={paper.description}
                  url={paper.url}
                  image={paper.urlToImage}
                />
              ))}
        </div>
      </div>
    </section>
  );
}
