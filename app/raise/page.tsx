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
  const [showTracking, setShowTracking] = useState(false);
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
      console.log("[v0] Submitting query with:", form);
      setSubmitted(true);
      setTimeout(() => {
        setForm({ description: "", file: null });
        setFileName("no file selected");
        setSubmitted(false);
      }, 2000);
    }
  };

  const myQueries = [
    { id: 1, question: "How do I complete my profile setup?", status: "answered", date: "2 days ago" },
    { id: 2, question: "What's the difference between event tiers?", status: "pending", date: "1 day ago" },
    { id: 3, question: "Can I change my membership plan?", status: "answered", date: "3 days ago" },
  ];

  const myIssues = [
    { id: 1, title: "Setup Issue", status: "resolved", date: "2 days ago" },
    { id: 2, title: "Payment Not Processing", status: "pending", date: "1 day ago" },
    { id: 3, title: "Profile Picture Upload", status: "resolved", date: "3 days ago" },
  ];

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
    <div className="min-h-screen bg-white">
      {/* Track My Issues/Queries Button */}
      <button
        onClick={() => setShowTracking(!showTracking)}
        className="fixed right-6 bottom-6 z-40 p-3 bg-black text-white rounded-full shadow-lg hover:scale-110 transition-transform"
        title="Track My Queries & Issues"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </button>

      {/* Tracking Modal */}
      {showTracking && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30" onClick={() => setShowTracking(false)}>
          <div className="w-full max-w-3xl bg-white rounded-lg shadow-lg max-h-[80vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="sticky top-0 p-4 border-b border-gray-200 bg-white flex items-center justify-between">
              <h2 className="font-semibold text-black">My Queries & Issues</h2>
              <button onClick={() => setShowTracking(false)} className="text-gray-600 hover:text-black text-xl">✕</button>
            </div>
            
            <div className="p-6 space-y-8">
              {/* My Queries Section */}
              <div>
                <h3 className="font-semibold text-black mb-4 pb-2 border-b border-gray-200">My Queries</h3>
                <div className="space-y-3">
                  {myQueries.map((query) => (
                    <div key={query.id} className="p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex-1">
                          <p className="font-medium text-black text-sm">{query.question}</p>
                          <p className="text-xs text-gray-600 mt-1">{query.date}</p>
                        </div>
                        <span className={`px-2 py-0.5 text-xs font-semibold rounded-full whitespace-nowrap ${
                          query.status === 'answered' 
                            ? 'bg-green-100 text-green-700' 
                            : 'bg-yellow-100 text-yellow-700'
                        }`}>
                          {query.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* My Issues Section */}
              <div>
                <h3 className="font-semibold text-black mb-4 pb-2 border-b border-gray-200">My Issues</h3>
                <div className="space-y-3">
                  {myIssues.map((issue) => (
                    <div key={issue.id} className="p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex-1">
                          <p className="font-medium text-black text-sm">{issue.title}</p>
                          <p className="text-xs text-gray-600 mt-1">{issue.date}</p>
                        </div>
                        <span className={`px-2 py-0.5 text-xs font-semibold rounded-full whitespace-nowrap ${
                          issue.status === 'resolved' 
                            ? 'bg-green-100 text-green-700' 
                            : 'bg-red-100 text-red-700'
                        }`}>
                          {issue.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="max-w-3xl mx-auto px-8 py-12">
        <Link href="/" className="text-blue-600 hover:text-blue-800 text-sm font-medium mb-8 inline-block">
          ← Back to FAQ
        </Link>

        <div className="mb-12">
          <h1 className="text-3xl font-bold text-black mb-2">Raise a Query</h1>
          <p className="text-gray-700 text-sm">Describe your issue and we'll help resolve it.</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-white border border-gray-200 rounded-lg p-8 space-y-6">
          {/* Description */}
          <div>
            <label className="block font-semibold text-black mb-2 text-sm">Describe Your Issue</label>
            <textarea
              value={form.description}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, description: e.target.value }))
              }
              placeholder="Tell us what's going wrong..."
              maxLength={4096}
              rows={6}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none text-sm"
            />
            <p className="text-xs text-gray-600 mt-2">
              {form.description.length} / 4096 characters
            </p>
          </div>

          {/* File Upload */}
          <div>
            <label className="block font-semibold text-black mb-2 text-sm">Attach Screenshot (Optional)</label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-gray-400 transition-colors cursor-pointer">
              <input
                type="file"
                onChange={handleFileChange}
                className="hidden"
                id="file-input"
                accept="image/*"
              />
              <label htmlFor="file-input" className="cursor-pointer block">
                <p className="font-medium text-black text-sm mb-1">Choose file or drag here</p>
                <p className="text-xs text-gray-600">{fileName}</p>
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={submitted}
            className="w-full px-4 py-2.5 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 disabled:opacity-50 transition-colors text-sm"
          >
            {submitted ? "✓ Submitted!" : "Submit Query"}
          </button>
        </form>

        {/* Help Others Section */}
        <div className="mt-12 border-t border-gray-200 pt-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-black">Help Others</h2>
            <button
              onClick={() => setQueueOpen(!queueOpen)}
              className="text-sm font-medium text-blue-600 hover:text-blue-800"
            >
              {queueOpen ? "Hide" : "Show"} Queue
            </button>
          </div>

          {queueOpen && (
            <div className="space-y-3">
              {queuedQuestions.map((q) => (
                <div key={q.id} className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <p className="font-medium text-black text-sm">{q.question}</p>
                      <p className="text-xs text-gray-600 mt-1">{q.askedBy} · {q.timestamp}</p>
                    </div>
                    <button className="px-3 py-1.5 bg-green-600 text-white text-xs font-semibold rounded hover:bg-green-700 transition-colors flex-shrink-0">
                      Answer
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
