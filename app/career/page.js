"use client";

import { useState } from "react";

export default function CareerAI() {

  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState([]);

  const askAI = async () => {

    if (!question) return;

    const userMessage = { role: "user", text: question };

    setMessages([...messages, userMessage]);

    const res = await fetch("/api/career", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ question }),
    });

    const data = await res.json();

    const aiMessage = { role: "ai", text: data.answer };

    setMessages(prev => [...prev, aiMessage]);

    setQuestion("");
  };

  return (
    <div style={{padding:"40px"}}>

      <h1>Career Guide AI</h1>
      <p>Ask questions about finance careers.</p>

      <div style={{
        marginTop:"30px",
        border:"1px solid #ddd",
        padding:"20px",
        borderRadius:"10px",
        minHeight:"300px"
      }}>

        {messages.map((m, i) => (
          <p key={i}>
            <b>{m.role === "user" ? "You" : "AI"}:</b> {m.text}
          </p>
        ))}

      </div>

      <div style={{marginTop:"20px"}}>

        <input
          value={question}
          onChange={(e)=>setQuestion(e.target.value)}
          placeholder="Ask your career question..."
          style={{
            width:"70%",
            padding:"10px",
            borderRadius:"6px",
            border:"1px solid #ccc"
          }}
        />

        <button
          onClick={askAI}
          style={{
            marginLeft:"10px",
            padding:"10px 20px",
            background:"#38bdf8",
            border:"none",
            borderRadius:"6px",
            color:"white"
          }}
        >
          Ask AI
        </button>

      </div>

    </div>
  );
}
