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
    <div className="min-h-screen bg-white">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-8">
        {/* Navigation links */}
        <div className="flex items-center justify-between mb-8">
          <Link href="/" className="text-sm font-medium text-gray-600 hover:text-black transition-colors">
            ← Back
          </Link>
          <Link 
            href="/issues"
            className="text-sm font-medium text-gray-600 hover:text-black transition-colors underline"
          >
            Track Your Issues →
          </Link>
        </div>

        {/* Title and description */}
        <div className="mb-8">
          <h1 className="text-2xl font-semibold text-black mb-1">Raise a Query</h1>
          <p className="text-sm text-gray-600">Describe your issue and we'll help resolve it.</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-white border border-gray-200 rounded p-6 space-y-5">
          {/* Description */}
          <div>
            <label className="block font-medium text-black mb-2 text-sm">Describe Your Issue</label>
            <textarea
              value={form.description}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, description: e.target.value }))
              }
              placeholder="Tell us what's going wrong..."
              maxLength={4096}
              rows={6}
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent resize-none text-sm"
            />
            <p className="text-xs text-gray-500 mt-1">
              {form.description.length} / 4096 characters
            </p>
          </div>

          {/* File Upload */}
          <div>
            <label className="block font-medium text-black mb-2 text-sm">Attach Screenshot (Optional)</label>
            <div className="border-2 border-dashed border-gray-300 rounded p-4 text-center hover:border-gray-400 transition-colors cursor-pointer">
              <input
                type="file"
                onChange={handleFileChange}
                className="hidden"
                id="file-input"
                accept="image/*"
              />
              <label htmlFor="file-input" className="cursor-pointer block">
                <p className="font-medium text-black text-sm mb-0.5">Choose file or drag here</p>
                <p className="text-xs text-gray-500">{fileName}</p>
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={submitted}
            className="w-full px-4 py-2 bg-black text-white rounded font-medium text-sm hover:bg-gray-800 disabled:opacity-50 transition-colors"
          >
            {submitted ? "✓ Submitted!" : "Submit Query"}
          </button>
        </form>

        {/* Help Others Section */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-black">Help Others</h2>
            <button
              onClick={() => setQueueOpen(!queueOpen)}
              className="text-xs font-medium text-gray-600 hover:text-black transition-colors underline"
            >
              {queueOpen ? "Hide" : "Show"} Queue
            </button>
          </div>

          {queueOpen && (
            <div className="space-y-2">
              {queuedQuestions.map((q) => (
                <div
                  key={q.id}
                  className="p-3 border border-gray-200 rounded hover:bg-gray-50 transition-colors flex items-start justify-between gap-3"
                >
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-black">{q.question}</p>
                    <p className="text-xs text-gray-500 mt-0.5">{q.askedBy} • {q.timestamp}</p>
                  </div>
                  <button className="px-2.5 py-1 bg-green-600 text-white text-xs font-semibold rounded hover:bg-green-700 transition-colors whitespace-nowrap flex-shrink-0">
                    Answer
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
