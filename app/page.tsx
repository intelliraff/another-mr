"use client";
import { useState } from "react";
import { faqs, type FAQ } from "@/lib/data";

const CATEGORIES = ["about", "timing", "technical", "general"] as const;

function FAQItem({ faq }: { faq: FAQ }) {
  const [open, setOpen] = useState(false);
  
  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="w-full py-4 px-0 flex items-start justify-between gap-4 text-left hover:text-blue-600 transition-colors group"
      >
        <h3 className="text-base font-semibold text-black group-hover:text-blue-600 transition-colors flex-1">
          {faq.question}
        </h3>
        <svg
          className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform ${
            open ? "rotate-180" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div className="pb-4 px-0">
          <p className="text-gray-700 leading-relaxed text-sm">
            {faq.answer}
          </p>
          <div className="flex items-center gap-6 mt-3 text-xs text-gray-600">
            <button className="flex items-center gap-1 hover:text-blue-600 transition-colors">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.646 7.23a2 2 0 01-1.789 1.106H5a2 2 0 01-2-2V8a2 2 0 012-2h1.657a2 2 0 011.414.586l2.828-2.829a2 2 0 112.828 2.829l-.828.828" />
              </svg>
              Helpful
            </button>
            <span>156 views</span>
          </div>
        </div>
      )}
      
      <div className="border-b border-gray-200" />
    </>
  );
}

export default function FAQPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("about");

  const filtered = faqs.filter((f) => {
    const matchCat = f.category === activeCategory;
    const matchSearch =
      f.question.toLowerCase().includes(search.toLowerCase()) ||
      f.answer.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Search Bar - Top */}
      <div className="bg-white border-b border-gray-200 sticky top-16 z-30">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 py-5">
          <div className="relative">
            <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
            </svg>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search FAQs..."
              className="w-full pl-10 pr-3 py-1.5 text-sm border border-gray-300 rounded bg-white focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
            />
          </div>
        </div>
      </div>

      {/* Main Content - Centered */}
      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-8">
        {/* Category selector */}
        <div className="mb-8 flex items-center gap-2 overflow-x-auto pb-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap transition-colors ${
                activeCategory === cat
                  ? "bg-black text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* FAQs - Centered */}
        {filtered.length > 0 ? (
          <div>
            <h1 className="text-2xl font-semibold text-black mb-6 pb-3 border-b border-gray-200">
              {activeCategory}
            </h1>
            <div className="space-y-0">
              {filtered.map((faq) => (
                <FAQItem key={faq.id} faq={faq} />
              ))}
            </div>
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-sm text-gray-600">No FAQs found</p>
          </div>
        )}
      </div>
    </div>
  );
}
