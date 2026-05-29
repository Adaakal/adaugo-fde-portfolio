"use client";

import { useState } from "react";

export default function AskBox() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleAsk() {
    const trimmed = question.trim();
    if (!trimmed || loading) return;

    setLoading(true);
    setError("");
    setAnswer("");

    try {
      const res = await fetch("/api/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: trimmed }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data?.error || "Something went wrong. Try again.");
      } else {
        setAnswer(data.answer);
      }
    } catch {
      setError("Could not reach the server. Try again.");
    } finally {
      setLoading(false);
    }
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      handleAsk();
    }
  }

  return (
    <div className="border border-gray-200 rounded-xl p-6 bg-gray-50">
      <p className="text-sm font-medium text-gray-900 mb-3">
        Ask my portfolio anything
      </p>
      <p className="text-sm text-gray-600 mb-4">
        Powered by the Claude API. Try: &quot;What is her experience with
        Postgres?&quot; or &quot;Walk me through the TikTok caption
        project.&quot;
      </p>

      <div className="flex gap-2">
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Ask a question..."
          maxLength={500}
          disabled={loading}
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-sm bg-white disabled:bg-gray-100"
        />
        <button
          onClick={handleAsk}
          disabled={loading || !question.trim()}
          className="px-4 py-2 bg-gray-900 text-white rounded-lg text-sm font-medium disabled:bg-gray-400"
        >
          {loading ? "Thinking..." : "Ask"}
        </button>
      </div>

      {error && <p className="mt-4 text-sm text-red-600">{error}</p>}

      {answer && (
        <div className="mt-4 p-4 bg-white border border-gray-200 rounded-lg">
          <p className="text-sm text-gray-800 leading-relaxed whitespace-pre-wrap">
            {answer}
          </p>
        </div>
      )}
    </div>
  );
}
