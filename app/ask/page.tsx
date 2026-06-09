"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { aiResponses } from "@/lib/data";

type Message = {
  id: number;
  role: "bot" | "user";
  text: string;
  showRaiseLink?: boolean;
  suggestions?: string[];
};

function findAnswer(query: string): { found: boolean; answer?: string } {
  const lower = query.toLowerCase();
  for (const item of aiResponses) {
    if (item.keywords.some((k) => lower.includes(k))) {
      return { found: true, answer: item.answer };
    }
  }
  return { found: false };
}

const INITIAL_MESSAGES: Message[] = [
  {
    id: 0,
    role: "bot",
    text: "Hi! I'm the Samagama support assistant. Ask me anything about events, registration, technical issues, or community guidelines — I'll find the answer instantly.",
    suggestions: [
      "How do I register for an event?",
      "What is Samagama?",
      "I forgot my password",
      "How do I get my membership ID?",
    ],
  },
];

export default function AIPage() {
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  function sendMessage(text: string) {
    if (!text.trim() || loading) return;
    const userMsg: Message = { id: Date.now(), role: "user", text: text.trim() };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    setTimeout(() => {
      const result = findAnswer(text);
      const botMsg: Message = {
        id: Date.now() + 1,
        role: "bot",
        text: result.found
          ? result.answer!
          : "I couldn't find an exact answer for that in our FAQ database. You can raise it as a query and a peer expert will get back to you within 24 hours.",
        showRaiseLink: !result.found,
      };
      setMessages((prev) => [...prev, botMsg]);
      setLoading(false);
    }, 900);
  }

  return (
    <div>
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-900 mb-1">AI assistant</h1>
        <p className="text-gray-500 text-sm">Ask anything — the assistant searches our FAQ knowledge base and answers instantly.</p>
      </div>

      {/* Chat window */}
      <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden flex flex-col" style={{ height: "560px" }}>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-5 flex flex-col gap-4">
          {messages.map((msg) => (
            <div key={msg.id} className={`flex gap-3 items-start ${msg.role === "user" ? "flex-row-reverse" : ""}`}>
              {/* Avatar */}
              <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-medium flex-shrink-0
                ${msg.role === "bot" ? "bg-brand-50 text-brand-600" : "bg-gray-100 text-gray-500"}`}>
                {msg.role === "bot" ? "🤖" : "👤"}
              </div>
              {/* Bubble */}
              <div className={`max-w-[80%] ${msg.role === "user" ? "items-end" : "items-start"} flex flex-col gap-2`}>
                <div className={`px-4 py-2.5 rounded-2xl text-sm leading-relaxed
                  ${msg.role === "bot"
                    ? "bg-gray-100 text-gray-800 rounded-tl-sm"
                    : "bg-brand-600 text-white rounded-tr-sm"
                  }`}>
                  {msg.text}
                </div>
                {msg.showRaiseLink && (
                  <Link
                    href="/raise"
                    className="text-xs text-brand-600 underline underline-offset-2 hover:text-brand-800 ml-1"
                  >
                    Raise a query instead →
                  </Link>
                )}
                {msg.suggestions && (
                  <div className="flex flex-wrap gap-2 mt-1">
                    {msg.suggestions.map((s) => (
                      <button
                        key={s}
                        onClick={() => sendMessage(s)}
                        className="text-xs px-3 py-1.5 border border-brand-200 text-brand-600 rounded-full hover:bg-brand-50 transition-all"
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}

          {/* Typing indicator */}
          {loading && (
            <div className="flex gap-3 items-start">
              <div className="w-7 h-7 rounded-full bg-brand-50 flex items-center justify-center text-xs flex-shrink-0">🤖</div>
              <div className="bg-gray-100 px-4 py-3 rounded-2xl rounded-tl-sm flex gap-1.5 items-center">
                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
              </div>
            </div>
          )}
          <div ref={bottomRef} />
        </div>

        {/* Input */}
        <div className="border-t border-gray-200 p-4 flex gap-3">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage(input)}
            placeholder="Type your question..."
            className="flex-1 text-sm px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent"
          />
          <button
            onClick={() => sendMessage(input)}
            disabled={!input.trim() || loading}
            className="px-4 py-2.5 bg-brand-600 text-white text-sm font-medium rounded-lg hover:bg-brand-800 disabled:opacity-40 disabled:cursor-not-allowed transition-all flex items-center gap-2"
          >
            <span>Ask</span>
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </button>
        </div>
      </div>

      {/* Bottom hint */}
      <p className="text-xs text-gray-400 text-center mt-4">
        Can&apos;t find what you need?{" "}
        <Link href="/raise" className="text-brand-600 underline underline-offset-2">Raise a query</Link> and our team will respond.
      </p>
    </div>
  );
}
