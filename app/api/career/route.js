import { NextResponse } from "next/server";

export async function POST(req) {

  const body = await req.json();
  const question = body.question;

  const apiKey = process.env.GEMINI_API_KEY;

  const response = await fetch(
    "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=" + apiKey,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              {
                text:
                  "You are a senior finance career mentor from India. Give structured career advice.\n\nUser Question: " +
                  question,
              },
            ],
          },
        ],
      }),
    }
  );

  const data = await response.json();

  const answer =
    data.candidates?.[0]?.content?.parts?.[0]?.text ||
    "AI response not available.";

  return NextResponse.json({ answer });
}
