"use client";
import { useState, useEffect } from "react";
import { faqs, categoryColors, type FAQ } from "@/lib/data";
import gsap from "gsap";

const CATEGORIES = ["All", "Registration", "Technical", "Events", "General"] as const;

function FAQItem({ faq }: { faq: FAQ }) {
  const [open, setOpen] = useState(false);
  
  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="w-full py-6 px-0 flex items-start justify-between gap-4 text-left hover:text-blue-600 transition-all duration-300 group"
      >
        <div className="flex items-start gap-3 flex-1">
          <svg className="w-5 h-5 text-gray-400 mt-1 flex-shrink-0 group-hover:text-blue-600 transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          <h3 className="text-base font-bold text-black group-hover:text-blue-600 transition-all duration-300 uppercase tracking-tight">
            {faq.question}
          </h3>
        </div>
        <svg
          className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-300 group-hover:text-blue-600 ${
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
        <div className="pb-6 px-0 pl-8 animate-slide-up">
          <p className="text-gray-700 leading-relaxed text-sm font-medium">
            {faq.answer}
          </p>
          <div className="flex items-center gap-6 mt-4 text-xs text-gray-600">
            <button className="flex items-center gap-1 hover:text-blue-600 transition-all duration-300 font-bold uppercase">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.646 7.23a2 2 0 01-1.789 1.106H5a2 2 0 01-2-2V8a2 2 0 012-2h1.657a2 2 0 011.414.586l2.828-2.829a2 2 0 112.828 2.829l-.828.828" />
              </svg>
              Helpful
            </button>
            <span>156 views</span>
          </div>
        </div>
      )}
      
      <div className="border-b border-black/10" />
    </>
  );
}

export default function FAQPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("All");

  useEffect(() => {
    // Animate hero section
    gsap.from(".faq-hero h1", {
      duration: 0.8,
      opacity: 0,
      y: 30,
      ease: "power3.out"
    });
    
    gsap.from(".faq-hero p", {
      duration: 0.8,
      opacity: 0,
      y: 20,
      ease: "power3.out",
      delay: 0.2
    });

    gsap.from(".search-bar", {
      duration: 0.8,
      opacity: 0,
      y: 20,
      ease: "power3.out",
      delay: 0.3
    });

    gsap.from(".category-btn", {
      duration: 0.6,
      opacity: 0,
      y: 10,
      ease: "power3.out",
      delay: 0.4,
      stagger: 0.05
    });
  }, []);

  const filtered = faqs.filter((f) => {
    const matchCat = activeCategory === "All" || f.category.toLowerCase() === activeCategory.toLowerCase();
    const matchSearch =
      f.question.toLowerCase().includes(search.toLowerCase()) ||
      f.answer.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  // Group FAQs by category for display
  const groupedFAQs = filtered.reduce((acc, faq) => {
    const category = faq.category.charAt(0).toUpperCase() + faq.category.slice(1);
    if (!acc[category]) acc[category] = [];
    acc[category].push(faq);
    return acc;
  }, {} as Record<string, FAQ[]>);

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
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="faq-hero bg-white pt-16 pb-12 border-b border-black/10">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-12">
            <h1 className="text-6xl font-bold text-black mb-4 tracking-tight uppercase">
              Find Answers Instantly
            </h1>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto font-medium">
              Search community-driven answers, verified FAQs, and expert solutions all in one place.
            </p>
          </div>

          {/* Search Bar */}
          <div className="search-bar max-w-3xl mx-auto mb-8">
            <div className="relative">
              <svg className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
              </svg>
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="What can we help you with today?"
                className="w-full pl-14 pr-6 py-4 text-lg border border-black/20 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all font-medium"
              />
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex gap-3 justify-center flex-wrap">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`category-btn px-5 py-2.5 rounded-full text-sm font-bold transition-all border uppercase tracking-wide ${
                  activeCategory === cat
                    ? "bg-blue-600 text-white border-blue-600 shadow-lg shadow-blue-500/30"
                    : "bg-white text-black border-black/30 hover:border-black/60 hover:text-blue-600"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* FAQ Stacked List */}
          <div className="lg:col-span-2">
            {filtered.length > 0 ? (
              <div className="bg-white rounded-lg border border-black/10 overflow-hidden">
                {Object.entries(groupedFAQs).length > 0 ? (
                  Object.entries(groupedFAQs).map(([category, items], categoryIdx) => (
                    <div key={category}>
                      {categoryIdx > 0 && <div className="border-t border-black/10" />}
                      
                      {/* Category Header */}
                      <div className="px-8 pt-8 pb-4">
                        <h2 className="text-lg font-bold text-black border-b border-black/10 pb-4 uppercase tracking-wide">
                          {Object.keys(groupedFAQs).filter((_, i) => i <= categoryIdx).reduce((acc, cat, i) => {
                            if (i === categoryIdx) return (Object.values(groupedFAQs).slice(0, categoryIdx).reduce((sum, items) => sum + items.length, 0) + 1);
                            return acc;
                          }, 1)}. {category}
                        </h2>
                      </div>

                      {/* FAQ Items */}
                      <div className="px-8">
                        {items.map((faq, itemIdx) => (
                          <div key={faq.id}>
                            <FAQItem faq={faq} />
                            {itemIdx === items.length - 1 && categoryIdx === Object.entries(groupedFAQs).length - 1 && (
                              <div className="hidden" />
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))
                ) : null}
              </div>
            ) : (
              <div className="text-center py-20">
                <div className="text-5xl mb-4">🔍</div>
                <p className="text-lg font-bold text-black mb-2 uppercase">No FAQs found</p>
                <p className="text-gray-700">Try a different search or category</p>
              </div>
            )}
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-1">
            {/* Trending FAQs */}
            <div className="bg-white rounded-lg border border-black/10 p-6 mb-6">
              <h3 className="font-bold text-black mb-5 flex items-center gap-2 uppercase text-sm tracking-wide">
                <svg className="w-5 h-5 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Trending FAQs
              </h3>
              <div className="space-y-4">
                {trendingFAQs.map((item, idx) => (
                  <button
                    key={idx}
                    className="w-full text-left p-3 rounded-lg hover:bg-black/5 transition-all duration-300 group"
                  >
                    <p className="text-sm font-bold text-black group-hover:text-blue-600 transition-colors line-clamp-2 uppercase">
                      {item.question}
                    </p>
                    <p className="text-xs text-gray-600 mt-1">{item.views} views</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Top Contributors */}
            <div className="bg-white rounded-lg border border-black/10 p-6 mb-6">
              <h3 className="font-bold text-black mb-5 flex items-center gap-2 uppercase text-sm tracking-wide">
                <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 11H9m6 0a3 3 0 11-6 0m6 0H9m6 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Top Contributors
              </h3>
              <div className="space-y-3">
                {topContributors.map((contributor, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                      {contributor.avatar}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-bold text-black truncate">
                        {contributor.name}
                      </p>
                      <p className="text-xs text-gray-600">
                        {contributor.answers} answers
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Community Stats */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-lg border border-blue-200 p-6">
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
