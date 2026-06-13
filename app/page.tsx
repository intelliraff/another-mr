"use client";
import { useState } from "react";
import { faqs, type FAQ } from "@/lib/data";

const CATEGORIES = ["Internships & NOCs", "Final Year Projects", "Grades & Transcripts", "Campus Community", "Course Enrollment"] as const;

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
  const [activeCategory, setActiveCategory] = useState<string>("Internships & NOCs");

  const filtered = faqs.filter((f) => {
    const matchCat = f.category.toLowerCase() === activeCategory.toLowerCase();
    const matchSearch =
      f.question.toLowerCase().includes(search.toLowerCase()) ||
      f.answer.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Search Bar - Top */}
      <div className="bg-white border-b border-gray-200 sticky top-16 z-30">
        <div className="max-w-6xl mx-auto px-8 py-6">
          <div className="relative max-w-2xl">
            <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
            </svg>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search FAQs..."
              className="w-full pl-10 pr-4 py-2 text-sm border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>
      </div>

      {/* Main Content - Book Layout */}
      <div className="max-w-6xl mx-auto px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Left Sidebar - Categories */}
          <div className="lg:col-span-1">
            <div className="sticky top-32">
              <h3 className="text-sm font-semibold text-gray-600 mb-4 uppercase tracking-wide">POPULAR TOPICS</h3>
              <nav className="space-y-2">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`block w-full text-left px-3 py-2 rounded text-sm transition-colors ${
                      activeCategory === cat
                        ? "bg-blue-50 text-blue-600 font-semibold"
                        : "text-gray-700 hover:text-blue-600"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Center Content - FAQs (Book-like) */}
          <div className="lg:col-span-2">
            {filtered.length > 0 ? (
              <div>
                <h1 className="text-3xl font-bold text-black mb-8 pb-4 border-b border-gray-200">
                  {activeCategory}
                </h1>
                <div className="space-y-0">
                  {filtered.map((faq) => (
                    <FAQItem key={faq.id} faq={faq} />
                  ))}
                </div>
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="text-gray-600 font-medium">No FAQs found</p>
              </div>
            )}
          </div>

          {/* Right Sidebar - Stats */}
          <div className="lg:col-span-1">
            <div className="sticky top-32 space-y-6">
              {/* Trending */}
              <div className="bg-gray-50 rounded-lg border border-gray-200 p-4">
                <h3 className="text-sm font-semibold text-gray-900 mb-4">Trending</h3>
                <div className="space-y-3">
                  {[
                    { q: "How do I register?", views: 892 },
                    { q: "Password reset", views: 756 },
                    { q: "Event policy", views: 642 },
                  ].map((item, idx) => (
                    <button key={idx} className="w-full text-left hover:text-blue-600 transition-colors">
                      <p className="text-xs font-medium text-gray-900">{item.q}</p>
                      <p className="text-xs text-gray-500">{item.views} views</p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Stats */}
              <div className="bg-blue-50 rounded-lg border border-blue-200 p-4">
                <h3 className="text-sm font-semibold text-gray-900 mb-4">Community</h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-xs text-gray-600">Answered Today</p>
                    <p className="text-2xl font-bold text-blue-600">24</p>
                  </div>
                  <div className="h-px bg-blue-200" />
                  <div>
                    <p className="text-xs text-gray-600">Contributors</p>
                    <p className="text-2xl font-bold text-blue-600">847</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
