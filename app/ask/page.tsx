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
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
      {/* Header */}
      <div className="mb-8 animate-fade-in-up">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">AI Assistant</h1>
        <p className="text-slate-300 text-sm">Ask anything — the assistant searches our FAQ knowledge base and answers instantly.</p>
      </div>

      {/* Chat window */}
      <div className="bg-gradient-to-b from-slate-900 to-slate-950 border border-cyan-500/20 rounded-2xl overflow-hidden flex flex-col shadow-2xl animate-fade-in-up" style={{ height: "calc(100vh - 300px)", minHeight: "600px" }}>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-4">
          {messages.map((msg) => (
            <div key={msg.id} className={`flex gap-3 items-start ${msg.role === "user" ? "flex-row-reverse" : ""} animate-slide-in`}>
              {/* Avatar */}
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0
                ${msg.role === "bot" ? "bg-gradient-to-br from-cyan-400 to-blue-600 text-white shadow-lg shadow-cyan-500/50" : "bg-slate-700 text-slate-300"}`}>
                {msg.role === "bot" ? "🤖" : "👤"}
              </div>
              {/* Bubble */}
              <div className={`max-w-[80%] ${msg.role === "user" ? "items-end" : "items-start"} flex flex-col gap-2`}>
                <div className={`px-4 py-3 rounded-2xl text-sm leading-relaxed font-500
                  ${msg.role === "bot"
                    ? "bg-slate-800 text-slate-100 rounded-tl-sm border border-cyan-500/20"
                    : "bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-tr-sm shadow-lg shadow-cyan-500/30"
                  }`}>
                  {msg.text}
                </div>
                {msg.showRaiseLink && (
                  <Link
                    href="/raise"
                    className="text-xs text-cyan-400 hover:text-cyan-300 underline underline-offset-2 transition-colors ml-1"
                  >
                    Raise a query instead →
                  </Link>
                )}
                {msg.suggestions && (
                  <div className="flex flex-wrap gap-2 mt-2">
                    {msg.suggestions.map((s) => (
                      <button
                        key={s}
                        onClick={() => sendMessage(s)}
                        className="text-xs px-3 py-1.5 border border-cyan-500/50 text-cyan-300 rounded-full hover:bg-cyan-500/20 hover:border-cyan-400 transition-all duration-200 bg-slate-800/50"
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
            <div className="flex gap-3 items-start animate-fade-in-up">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-xs flex-shrink-0 shadow-lg shadow-cyan-500/50">🤖</div>
              <div className="bg-slate-800 px-4 py-3 rounded-2xl rounded-tl-sm flex gap-1.5 items-center border border-cyan-500/20">
                <span className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                <span className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                <span className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
              </div>
            </div>
          )}
          <div ref={bottomRef} />
        </div>

        {/* Input */}
        <div className="border-t border-cyan-500/20 p-4 flex gap-3 bg-gradient-to-t from-slate-950 to-slate-900">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage(input)}
            placeholder="Type your question..."
            className="flex-1 text-sm px-4 py-2.5 border border-cyan-500/30 rounded-lg bg-slate-800 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent transition-all"
          />
          <button
            onClick={() => sendMessage(input)}
            disabled={!input.trim() || loading}
            className="px-4 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-bold rounded-lg hover:from-cyan-400 hover:to-blue-500 disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-cyan-500/50"
          >
            <span>Ask</span>
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </button>
        </div>
      </div>

      {/* Bottom hint */}
      <p className="text-xs text-slate-500 text-center mt-4">
        Can&apos;t find what you need?{" "}
        <Link href="/raise" className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2 transition-colors">Raise a query</Link> and our team will respond.
      </p>
    </div>
  );
}
