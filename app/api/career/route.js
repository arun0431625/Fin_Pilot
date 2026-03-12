import { NextResponse } from "next/server";

export async function POST(req) {
  try {

    const { question } = await req.json();

    const apiKey = process.env.GEMINI_API_KEY;

    const response = await fetch(
      "https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent?key=" + apiKey,
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
                  text: `You are a finance career mentor from India. Give practical advice.

User Question:
${question}`
                }
              ]
            }
          ]
        })
      }
    );

    const data = await response.json();

    let answer = "AI response not available.";

    if (
      data &&
      data.candidates &&
      data.candidates.length > 0 &&
      data.candidates[0].content &&
      data.candidates[0].content.parts &&
      data.candidates[0].content.parts.length > 0
    ) {
      answer = data.candidates[0].content.parts[0].text;
    }

    return NextResponse.json({ answer });

  } catch (error) {

    return NextResponse.json({
      answer: "Error: " + error.message
    });

  }
}
