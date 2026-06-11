"use client";
import { useState } from "react";
import Link from "next/link";

type FormState = {
  description: string;
  file: File | null;
};

export default function RaisePage() {
  const [form, setForm] = useState<FormState>({ description: "", file: null });
  const [fileName, setFileName] = useState("no file selected");
  const [submitted, setSubmitted] = useState(false);
  const [queueOpen, setQueueOpen] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setForm((prev) => ({ ...prev, file: selectedFile }));
      setFileName(selectedFile.name);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.description.trim()) {
      console.log("[v0] Submitting issue with:", form);
      setSubmitted(true);
      setTimeout(() => {
        setForm({ description: "", file: null });
        setFileName("no file selected");
        setSubmitted(false);
      }, 2000);
    }
  };

  const queuedQuestions = [
    {
      id: 1,
      question: "How do I complete my profile setup?",
      askedBy: "Alex Kumar",
      timestamp: "2 hours ago",
    },
    {
      id: 2,
      question: "What's the difference between event tiers?",
      askedBy: "Priya Singh",
      timestamp: "4 hours ago",
    },
    {
      id: 3,
      question: "Can I change my membership plan?",
      askedBy: "Marcus Dev",
      timestamp: "6 hours ago",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F8F9FC]">
      {/* Header with stats */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex gap-8 text-sm flex-wrap">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-gray-900">#questions_raised:</span>
                <span className="text-gray-600">0</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-gray-900">#questions_answered:</span>
                <span className="text-gray-600">0</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-gray-900">#questions_skipped:</span>
                <span className="text-gray-600">5</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-gray-900">#questions_flagged:</span>
                <span className="text-gray-600">0</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Link
                href="/"
                className="px-4 py-2 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors"
              >
                Dashboard
              </Link>
              <button className="px-4 py-2 text-gray-700 hover:text-gray-900 font-medium transition-colors">
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-4xl mx-auto px-8 py-12">
        <Link
          href="/"
          className="inline-flex items-center gap-2 mb-8 text-gray-700 hover:text-gray-900 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back
        </Link>

        <div className="bg-white rounded-2xl border border-gray-100 p-8 card-shadow">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Raise an issue</h1>
          <p className="text-gray-600 mb-8 max-w-2xl">
            Stuck on something? Describe it below. Another intern who&apos;s already navigated this step will answer; a senior reviews every answer before it reaches you.
          </p>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Question textarea */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-3">
                Your question or concern
              </label>
              <textarea
                value={form.description}
                onChange={(e) => setForm((prev) => ({ ...prev, description: e.target.value }))}
                placeholder="Describe what's blocking you. Be specific about the page, the step, what you tried, what happened."
                maxLength={4096}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent resize-none"
                rows={8}
              />
              <div className="text-right text-xs text-gray-500 mt-2">
                {form.description.length}/4096
              </div>
            </div>

            {/* File upload */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-3">
                Snapshot (optional)
              </label>
              <div className="flex items-center gap-4">
                <label className="px-6 py-3 bg-gray-50 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors font-medium text-gray-700 text-sm">
                  Choose File
                  <input
                    type="file"
                    onChange={handleFileChange}
                    className="hidden"
                    accept="image/*,.pdf,.txt,.doc,.docx"
                  />
                </label>
                <span className="text-sm text-gray-600">{fileName}</span>
              </div>
              <p className="text-xs text-gray-500 mt-2">
                Supported formats: Images, PDF, text files, and documents
              </p>
            </div>

            {/* Buttons */}
            <div className="flex gap-4">
              <button
                type="submit"
                disabled={!form.description.trim()}
                className="px-8 py-3 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                {submitted ? "Submitted!" : "Submit issue"}
              </button>
              <button
                type="button"
                onClick={() => {
                  setForm({ description: "", file: null });
                  setFileName("no file selected");
                }}
                className="px-8 py-3 border border-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
            </div>

            {/* Note */}
            <div className="pt-4 border-t border-gray-100">
              <p className="text-xs text-gray-500">
                Note: one issue every 15 minutes per account. A senior reviews every answer before it reaches you, so allow some lead time.
              </p>
            </div>
          </form>

          {/* Help another intern section */}
          <div className="mt-12 pt-12 border-t border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Help another intern</h2>
            <p className="text-gray-600 mb-8">
              Other interns occasionally ask the kind of questions you&apos;ve already figured out. Take one from the queue, answer it, and earn Spurti Points (SP) once a senior approves the answer.
            </p>

            {/* Queue message */}
            {queuedQuestions.length === 0 ? (
              <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-6">
                <p className="text-green-800 font-medium">
                  No questions in the queue right now. Check back in a bit.
                </p>
              </div>
            ) : (
              <div className="mb-6 space-y-3">
                {queuedQuestions.map((q) => (
                  <div key={q.id} className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="font-semibold text-gray-900">{q.question}</p>
                        <p className="text-sm text-gray-600 mt-1">Asked by {q.askedBy} · {q.timestamp}</p>
                      </div>
                      <button className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors text-sm flex-shrink-0">
                        Answer
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* View queue button */}
            <button 
              onClick={() => setQueueOpen(!queueOpen)}
              className="px-8 py-3 bg-gray-900 text-white rounded-xl font-semibold hover:bg-gray-800 transition-all"
            >
              {queueOpen ? "Hide queue" : "Resolve a question"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
