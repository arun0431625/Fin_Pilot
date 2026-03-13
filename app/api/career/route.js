import { NextResponse } from "next/server";

export async function POST(req) {

  try {

    const { question } = await req.json();

    const apiKey = process.env.GEMINI_API_KEY;

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: `You are a finance career mentor from India.

Give practical advice for finance students and professionals.

Question:
${question}`
                }
              ]
            }
          ]
        })
      }
    );

    const data = await response.json();

    const answer =
      data?.candidates?.[0]?.content?.parts?.[0]?.text ||
      "AI response not available.";

    return NextResponse.json({ answer });

  } catch (error) {

    return NextResponse.json({
      answer: "Error: " + error.message
    });

  }

}
