// src/app/api/research/route.js
import { NextResponse } from "next/server";

const NEWS_API_KEY = process.env.NEWS_API_KEY;
const API_URL = "https://newsapi.org/v2/everything";

export async function GET() {
  try {
    const response = await fetch(
      `${API_URL}?${new URLSearchParams({
        q: "sztuczna inteligencja badania",
        language: "pl",
        sortBy: "publishedAt",
        pageSize: "2",
      })}`,
      {
        headers: {
          "X-Api-Key": NEWS_API_KEY,
        },
      }
    );

    const data = await response.json();

    // sprawdzamy czy mamy artykuły
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
        message: "Failed to fetch research news",
      },
      { status: 500 }
    );
  }
}
