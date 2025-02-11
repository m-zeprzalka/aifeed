// src/app/api/featured-news/route.js
import { NextResponse } from "next/server";

const NEWS_API_KEY = process.env.NEWS_API_KEY;
const API_URL = "https://newsapi.org/v2/everything";

export async function GET() {
  try {
    const response = await fetch(
      `${API_URL}?${new URLSearchParams({
        q: "sztuczna inteligencja",
        language: "pl",
        sortBy: "publishedAt",
        pageSize: "1",
      })}`,
      {
        headers: {
          "X-Api-Key": NEWS_API_KEY,
        },
      }
    );

    const data = await response.json();

    if (!data.articles || !data.articles[0]) {
      return NextResponse.json(
        {
          status: "error",
          articles: [],
          message: "No articles found",
        },
        { status: 404 }
      );
    }

    const article = data.articles[0];
    return NextResponse.json({
      ...article,
      category: "Nowości",
    });
  } catch (error) {
    console.error("News API Error:", error);
    return NextResponse.json(
      {
        status: "error",
        articles: [],
        message: "Failed to fetch featured news",
      },
      { status: 500 }
    );
  }
}
