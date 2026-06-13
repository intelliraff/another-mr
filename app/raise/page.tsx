"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import gsap from "gsap";

type FormState = {
  description: string;
  file: File | null;
};

export default function RaisePage() {
  const [form, setForm] = useState<FormState>({ description: "", file: null });
  const [fileName, setFileName] = useState("no file selected");
  const [submitted, setSubmitted] = useState(false);
  const [queueOpen, setQueueOpen] = useState(false);
  const [showIssuesModal, setShowIssuesModal] = useState(false);

  useEffect(() => {
    gsap.from(".raise-container", {
      duration: 0.6,
      opacity: 0,
      y: 20,
      ease: "power3.out"
    });
  }, []);

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

  const myIssues = [
    { id: 1, title: "Setup Issue", status: "resolved", date: "2 days ago" },
    { id: 2, title: "Payment Not Processing", status: "pending", date: "1 day ago" },
    { id: 3, title: "Profile Picture Upload", status: "resolved", date: "3 days ago" },
  ];

  return (
    <div className="raise-container min-h-screen bg-white">
      {/* Side Issues Button */}
      <button
        onClick={() => setShowIssuesModal(true)}
        className="fixed right-6 bottom-6 z-40 p-3 bg-black text-white rounded-full shadow-lg hover:scale-110 transition-transform duration-300"
        title="View My Issues"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </button>

      {/* Issues Modal */}
      {showIssuesModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30" onClick={() => setShowIssuesModal(false)}>
          <div className="w-full max-w-2xl bg-white rounded-lg shadow-2xl max-h-[80vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="sticky top-0 p-6 border-b border-black/10 bg-white flex items-center justify-between">
              <h2 className="font-bold text-black text-lg uppercase">My Issues</h2>
              <button onClick={() => setShowIssuesModal(false)} className="text-gray-600 hover:text-black text-2xl">✕</button>
            </div>
            <div className="p-6 space-y-3">
              {myIssues.map((issue) => (
                <div key={issue.id} className="p-4 border border-black/10 rounded-lg hover:bg-black/2 transition-colors">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-bold text-black">{issue.title}</h3>
                      <p className="text-xs text-gray-600 mt-1">{issue.date}</p>
                    </div>
                    <span className={`px-2 py-1 text-xs font-bold rounded-full ${
                      issue.status === 'resolved' 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-yellow-100 text-yellow-700'
                    }`}>
                      {issue.status.toUpperCase()}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Header with stats */}
      <div className="bg-white border-b border-black/10">
        <div className="max-w-7xl mx-auto px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex gap-8 text-sm flex-wrap">
              <div className="flex items-center gap-2">
                <span className="font-bold text-black uppercase">#Questions Raised:</span>
                <span className="text-gray-700 font-bold">0</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-black uppercase">#Questions Answered:</span>
                <span className="text-gray-700 font-bold">0</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-black uppercase">#Questions Skipped:</span>
                <span className="text-gray-700 font-bold">5</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-black uppercase">#Questions Flagged:</span>
                <span className="text-gray-700 font-bold">0</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Link
                href="/"
                className="px-4 py-2 bg-black text-white rounded font-bold hover:bg-black/80 transition-all duration-300 uppercase text-sm tracking-wide"
              >
                Dashboard
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-4xl mx-auto px-8 py-12">
        <Link
          href="/"
          className="text-blue-600 hover:text-blue-800 text-sm font-bold mb-6 inline-block"
        >
          ← Back
        </Link>

        <div className="mb-12">
          <h1 className="text-4xl font-bold text-black mb-2 uppercase tracking-tight">Raise a Query</h1>
          <p className="text-gray-700">Describe your issue and we'll help resolve it.</p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white border border-black/10 rounded-lg p-8 space-y-6"
        >
          {/* Description */}
          <div>
            <label className="block font-bold text-black mb-3 uppercase text-sm">Describe Your Issue</label>
            <textarea
              value={form.description}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, description: e.target.value }))
              }
              placeholder="Tell us what's going wrong..."
              maxLength={4096}
              rows={6}
              className="w-full p-4 border border-black/10 rounded-lg font-medium resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <p className="text-xs text-gray-600 mt-2">
              {form.description.length} / 4096 characters
            </p>
          </div>

          {/* File Upload */}
          <div>
            <label className="block font-bold text-black mb-3 uppercase text-sm">Attach Screenshot (Optional)</label>
            <div className="border-2 border-dashed border-black/20 rounded-lg p-6 text-center hover:border-black/40 transition-colors cursor-pointer">
              <input
                type="file"
                onChange={handleFileChange}
                className="hidden"
                id="file-input"
                accept="image/*"
              />
              <label htmlFor="file-input" className="cursor-pointer block">
                <p className="font-bold text-black mb-1">Choose file or drag here</p>
                <p className="text-sm text-gray-600">{fileName}</p>
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={submitted}
            className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 disabled:opacity-50 transition-all duration-300 uppercase tracking-wide"
          >
            {submitted ? "✓ Submitted!" : "Submit Query"}
          </button>
        </form>

        {/* Help Another Section */}
        <div className="mt-12 border-t-2 border-black/10 pt-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-black uppercase">Help Others</h2>
            <button
              onClick={() => setQueueOpen(!queueOpen)}
              className="text-sm font-bold text-blue-600 hover:text-blue-800 uppercase"
            >
              {queueOpen ? "Hide" : "Show"} Queue
            </button>
          </div>

          {queueOpen && (
            <div className="space-y-3">
              {queuedQuestions.map((q) => (
                <div
                  key={q.id}
                  className="p-4 border border-black/10 rounded-lg hover:bg-black/2 transition-colors"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <p className="font-bold text-black">{q.question}</p>
                      <p className="text-xs text-gray-600 mt-1">{q.askedBy} • {q.timestamp}</p>
                    </div>
                    <button className="px-3 py-1 bg-green-600 text-white text-xs font-bold rounded hover:bg-green-700 transition-colors uppercase ml-4">
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
