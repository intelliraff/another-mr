"use client";
import { useState } from "react";
import { faqs, categoryColors, type FAQ } from "@/lib/data";

const CATEGORIES = ["All", "Registration", "Technical", "Events", "General"] as const;

function FAQCard({ faq }: { faq: FAQ }) {
  const [open, setOpen] = useState(false);
  
  return (
    <div 
      className={`bg-white rounded-2xl border border-gray-100 transition-all duration-300 cursor-pointer group card-shadow hover:card-shadow-hover ${
        open ? "ring-2 ring-purple-400/50" : ""
      }`}
      onClick={() => setOpen(!open)}
    >
      <div className="p-6">
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="flex-1">
            <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full mb-3 ${categoryColors[faq.category]}`}>
              {faq.category.charAt(0).toUpperCase() + faq.category.slice(1)}
            </span>
            <h3 className="text-lg font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">
              {faq.question}
            </h3>
          </div>
          <svg
            className={`w-5 h-5 text-purple-500 flex-shrink-0 transition-transform duration-300 ${
              open ? "rotate-180" : ""
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>

        {open && (
          <div className="mt-4 pt-4 border-t border-gray-100">
            <p className="text-gray-600 leading-relaxed text-sm">
              {faq.answer}
            </p>
            <div className="flex items-center gap-6 mt-4 pt-4 border-t border-gray-50 text-xs text-gray-500">
              <button className="flex items-center gap-1 hover:text-purple-600 transition-colors">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.646 7.23a2 2 0 01-1.789 1.106H5a2 2 0 01-2-2V8a2 2 0 012-2h1.657a2 2 0 011.414.586l2.828-2.829a2 2 0 112.828 2.829l-.828.828" />
                </svg>
                Helpful
              </button>
              <span>156 views</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function FAQPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filtered = faqs.filter((f) => {
    const matchCat = activeCategory === "All" || f.category.toLowerCase() === activeCategory.toLowerCase();
    const matchSearch =
      f.question.toLowerCase().includes(search.toLowerCase()) ||
      f.answer.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  const topContributors = [
    { name: "Alex Kumar", answers: 24, avatar: "AK" },
    { name: "Sarah Chen", answers: 19, avatar: "SC" },
    { name: "Marcus Dev", answers: 17, avatar: "MD" },
    { name: "Priya Singh", answers: 15, avatar: "PS" },
  ];

  const trendingFAQs = [
    { question: "How do I register?", views: 892 },
    { question: "Password reset process", views: 756 },
    { question: "Event cancellation policy", views: 642 },
    { question: "Membership benefits", views: 521 },
  ];

  return (
    <div className="min-h-screen bg-[#F8F9FC]">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-white to-[#F8F9FC] pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-900 mb-4 tracking-tight">
              Find Answers Instantly
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Search community-driven answers, verified FAQs, and expert solutions all in one place.
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-3xl mx-auto mb-8">
            <div className="relative">
              <svg className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
              </svg>
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="What can we help you with today?"
                className="w-full pl-14 pr-6 py-4 text-lg border border-gray-200 rounded-2xl bg-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all card-shadow"
              />
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex gap-3 justify-center flex-wrap">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all border ${
                  activeCategory === cat
                    ? "bg-purple-600 text-white border-purple-600 shadow-lg shadow-purple-500/30"
                    : "bg-white text-gray-700 border-gray-200 hover:border-purple-300 hover:text-purple-600"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-8 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* FAQ Grid */}
          <div className="lg:col-span-2">
            {filtered.length > 0 ? (
              <div className="grid gap-5 auto-rows-max">
                {filtered.map((faq, idx) => (
                  <div key={faq.id} className={idx % 2 === 0 ? "" : "lg:pt-8"}>
                    <FAQCard faq={faq} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <div className="text-5xl mb-4">🔍</div>
                <p className="text-lg font-semibold text-gray-700 mb-2">No FAQs found</p>
                <p className="text-gray-500">Try a different search or category</p>
              </div>
            )}
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-1">
            {/* Trending FAQs */}
            <div className="bg-white rounded-2xl border border-gray-100 p-6 card-shadow mb-6">
              <h3 className="font-semibold text-gray-900 mb-5 flex items-center gap-2">
                <svg className="w-5 h-5 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Trending FAQs
              </h3>
              <div className="space-y-4">
                {trendingFAQs.map((item, idx) => (
                  <button
                    key={idx}
                    className="w-full text-left p-3 rounded-lg hover:bg-purple-50 transition-colors group"
                  >
                    <p className="text-sm font-medium text-gray-900 group-hover:text-purple-600 transition-colors line-clamp-2">
                      {item.question}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">{item.views} views</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Top Contributors */}
            <div className="bg-white rounded-2xl border border-gray-100 p-6 card-shadow mb-6">
              <h3 className="font-semibold text-gray-900 mb-5 flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 11H9m6 0a3 3 0 11-6 0m6 0H9m6 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Top Contributors
              </h3>
              <div className="space-y-3">
                {topContributors.map((contributor, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center text-white text-xs font-semibold flex-shrink-0">
                      {contributor.avatar}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate">
                        {contributor.name}
                      </p>
                      <p className="text-xs text-gray-500">
                        {contributor.answers} answers
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Community Stats */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100/50 rounded-2xl border border-purple-200 p-6">
              <h3 className="font-semibold text-gray-900 mb-5">Community Stats</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-xs text-gray-600 mb-1">Questions Answered Today</p>
                  <p className="text-3xl font-bold text-purple-600">24</p>
                </div>
                <div className="h-px bg-gradient-to-r from-purple-200 to-transparent"></div>
                <div>
                  <p className="text-xs text-gray-600 mb-1">Active Contributors</p>
                  <p className="text-3xl font-bold text-purple-600">847</p>
                </div>
                <div className="h-px bg-gradient-to-r from-purple-200 to-transparent"></div>
                <div>
                  <p className="text-xs text-gray-600 mb-1">Total FAQs</p>
                  <p className="text-3xl font-bold text-purple-600">1,243</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
