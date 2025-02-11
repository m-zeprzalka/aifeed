// src/app/api/ai-models/route.js
import { NextResponse } from "next/server";

const NEWS_API_KEY = process.env.NEWS_API_KEY;
const API_URL = "https://newsapi.org/v2/everything";

export async function GET() {
  try {
    const response = await fetch(
      `${API_URL}?${new URLSearchParams({
        q: "chatgpt OR gemini OR bard",
        language: "pl",
        sortBy: "publishedAt",
        pageSize: "8",
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

    return NextResponse.json(data);
  } catch (error) {
    console.error("News API Error:", error);
    return NextResponse.json(
      {
        status: "error",
        articles: [],
        message: "Failed to fetch AI models news",
      },
      { status: 500 }
    );
  }
}
