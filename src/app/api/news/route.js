// src/app/api/news/route.js
import { NextResponse } from "next/server";

const NEWS_API_KEY = process.env.NEWS_API_KEY;
const API_URL = "https://newsapi.org/v2/everything";

function determineCategory(text = "") {
  const textLower = text.toLowerCase();

  if (
    textLower.includes("chatgpt") ||
    textLower.includes("bard") ||
    textLower.includes("gemini")
  ) {
    return "Narzędzia";
  }
  if (
    textLower.includes("program") ||
    textLower.includes("developer") ||
    textLower.includes("kod")
  ) {
    return "Programowanie";
  }
  if (textLower.includes("badania") || textLower.includes("naukowcy")) {
    return "Badania";
  }
  if (
    textLower.includes("biznes") ||
    textLower.includes("firma") ||
    textLower.includes("startup")
  ) {
    return "Biznes";
  }
  return "Nowości";
}

export async function GET() {
  try {
    const response = await fetch(
      `${API_URL}?${new URLSearchParams({
        q: "sztuczna inteligencja OR chatgpt OR machine learning OR ai OR rozwój technologii",
        language: "pl",
        sortBy: "publishedAt",
        pageSize: "6",
      })}`,
      {
        headers: {
          "X-Api-Key": NEWS_API_KEY,
        },
      }
    );

    const data = await response.json();

    if (!data.articles) {
      return NextResponse.json(
        {
          status: "error",
          articles: [],
          message: "No articles found",
        },
        { status: 404 }
      );
    }

    // Dodajemy kategorię i źródło do każdego artykułu
    data.articles = data.articles.map((article) => ({
      ...article,
      category: determineCategory(article.title + " " + article.description),
      sourceName: article.source.name,
    }));

    return NextResponse.json(data);
  } catch (error) {
    console.error("News API Error:", error);
    return NextResponse.json(
      {
        status: "error",
        articles: [],
        message: "Failed to fetch news",
      },
      { status: 500 }
    );
  }
}
