"use client";
import { useState } from "react";
import Link from "next/link";

type FormState = {
  name: string;
  email: string;
  category: string;
  question: string;
};

const CATEGORIES = ["Events", "Registration", "Technical", "General"];

export default function RaisePage() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", category: "", question: "" });
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [submitted, setSubmitted] = useState(false);

  function validate() {
    const e: Partial<FormState> = {};
    if (!form.email.trim()) e.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = "Enter a valid email address.";
    if (!form.category) e.category = "Please select a category.";
    if (!form.question.trim()) e.question = "Please describe your question.";
    else if (form.question.trim().length < 20) e.question = "Please provide a bit more detail (min 20 characters).";
    return e;
  }

  function handleSubmit() {
    const e = validate();
    if (Object.keys(e).length > 0) { setErrors(e); return; }
    setSubmitted(true);
    setForm({ name: "", email: "", category: "", question: "" });
    setErrors({});
  }

  function handleChange(field: keyof FormState, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center text-3xl mb-4">✅</div>
        <h2 className="text-xl font-semibold text-gray-900 mb-2">Query submitted!</h2>
        <p className="text-sm text-gray-500 max-w-sm mb-6">
          A peer expert will review your question and respond within 24 hours. We&apos;ll notify you at the email you provided.
        </p>
        <div className="flex gap-3">
          <button
            onClick={() => setSubmitted(false)}
            className="px-4 py-2 text-sm border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-50 transition-all"
          >
            Submit another
          </button>
          <Link
            href="/"
            className="px-4 py-2 text-sm bg-brand-600 text-white rounded-lg hover:bg-brand-800 transition-all"
          >
            Browse FAQs
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-gray-900 mb-1">Raise a query</h1>
        <p className="text-gray-500 text-sm">
          Couldn&apos;t find your answer?{" "}
          <Link href="/ask" className="text-brand-600 underline underline-offset-2">Try the AI assistant first</Link>{" "}
          — or submit here and a peer expert will respond.
        </p>
      </div>

      <div className="bg-white border border-gray-200 rounded-2xl p-6 max-w-2xl">

        {/* Name */}
        <div className="mb-5">
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Your name <span className="text-gray-400 font-normal">(optional)</span>
          </label>
          <input
            type="text"
            value={form.name}
            onChange={(e) => handleChange("name", e.target.value)}
            placeholder="e.g. Ravi Kumar"
            className="w-full px-3.5 py-2.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent"
          />
        </div>

        {/* Email */}
        <div className="mb-5">
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Email address <span className="text-red-400">*</span>
          </label>
          <input
            type="email"
            value={form.email}
            onChange={(e) => handleChange("email", e.target.value)}
            placeholder="you@example.com"
            className={`w-full px-3.5 py-2.5 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent
              ${errors.email ? "border-red-300 bg-red-50" : "border-gray-200"}`}
          />
          {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
          <p className="text-xs text-gray-400 mt-1">We&apos;ll notify you when your query gets answered.</p>
        </div>

        {/* Category */}
        <div className="mb-5">
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Category <span className="text-red-400">*</span>
          </label>
          <select
            value={form.category}
            onChange={(e) => handleChange("category", e.target.value)}
            className={`w-full px-3.5 py-2.5 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent bg-white
              ${errors.category ? "border-red-300 bg-red-50" : "border-gray-200"}`}
          >
            <option value="">Select a category</option>
            {CATEGORIES.map((c) => (
              <option key={c} value={c.toLowerCase()}>{c}</option>
            ))}
          </select>
          {errors.category && <p className="text-xs text-red-500 mt-1">{errors.category}</p>}
        </div>

        {/* Question */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Your question <span className="text-red-400">*</span>
          </label>
          <textarea
            value={form.question}
            onChange={(e) => handleChange("question", e.target.value)}
            placeholder="Describe your question in detail. The more context you give, the faster we can help."
            rows={5}
            className={`w-full px-3.5 py-2.5 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent resize-none leading-relaxed
              ${errors.question ? "border-red-300 bg-red-50" : "border-gray-200"}`}
          />
          {errors.question
            ? <p className="text-xs text-red-500 mt-1">{errors.question}</p>
            : <p className="text-xs text-gray-400 mt-1">{form.question.length} characters</p>
          }
        </div>

        {/* Submit */}
        <button
          onClick={handleSubmit}
          className="w-full py-3 bg-brand-600 text-white text-sm font-medium rounded-lg hover:bg-brand-800 transition-all"
        >
          Submit query
        </button>
      </div>
    </div>
  );
}
