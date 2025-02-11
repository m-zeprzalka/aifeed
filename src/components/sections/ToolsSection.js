// src/components/sections/ToolsSection.js
"use client";
import { useState, useEffect } from "react";
import ToolCard from "../ui/ToolCard";

export default function ToolsSection() {
  const [aiModels, setAiModels] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAiModels = async () => {
      try {
        const response = await fetch("/api/ai-models");
        const data = await response.json();
        if (data.articles) {
          setAiModels(data.articles.slice(0, 4));
        }
      } catch (error) {
        console.error("Error fetching AI models:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAiModels();
  }, []);

  return (
    <section className="py-8 dark:bg-slate-950">
      <div>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Popularne
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {loading
            ? [...Array(4)].map((_, i) => <ToolCard key={i} />)
            : aiModels.map((model, index) => (
                <ToolCard
                  key={index}
                  name={model.title.split(":")[0]}
                  description={model.description}
                  url={model.url}
                  image={model.urlToImage}
                />
              ))}
        </div>
      </div>
    </section>
  );
}
