import { NextResponse } from "next/server";

export async function POST(req) {

  try {

    const body = await req.json();
    const question = body.question;

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

User question: ${question}`
                }
              ]
            }
          ]
        })
      }
    );

    const data = await response.json();

    // 🔴 DEBUG RETURN
    return NextResponse.json({
      debug: data
    });

  } catch (error) {

    return NextResponse.json({
      error: error.message
    });

  }

}
