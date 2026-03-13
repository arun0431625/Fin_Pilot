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
              role: "user",
              parts: [
                {
                  text: `You are a finance career mentor from India.
Give clear structured advice.

User Question:
${question}`
                }
              ]
            }
          ],
          generationConfig: {
            temperature: 0.7,
            maxOutputTokens: 800
          }
        })
      }
    );

    const data = await response.json();

    console.log(data);

    let answer = "AI response not available.";

    if (data?.candidates?.length > 0) {
      const parts = data.candidates[0].content.parts;

      if (parts && parts.length > 0) {
        answer = parts.map(p => p.text).join(" ");
      }
    }

    return NextResponse.json({ answer });

  } catch (error) {

    return NextResponse.json({
      answer: "Error: " + error.message
    });

  }

}
