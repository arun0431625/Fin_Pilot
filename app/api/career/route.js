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

Give clear practical advice.

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

    console.log("Gemini response:", data);

    let answer = "AI response not available.";

    if (data.candidates) {
      const parts = data.candidates[0]?.content?.parts;

      if (parts && parts.length > 0) {
        answer = parts.map(p => p.text).join(" ");
      }
    }

    return NextResponse.json({ answer });

  } catch (error) {

    console.error(error);

    return NextResponse.json({
      answer: "Error: " + error.message
    });

  }

}
