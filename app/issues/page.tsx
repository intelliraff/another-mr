"use client";
import Link from "next/link";

type Issue = {
  id: number;
  title: string;
  description: string;
  dateRaised: string;
  status: "resolved" | "marked_resolved" | "pending";
  statusLabel: string;
};

export default function IssuesPage() {
  const issues: Issue[] = [
    {
      id: 1,
      title: "ViB I was penalized for speaking during a video",
      description:
        "I was penalized for speaking during a video, but I was just listening to the video with my EarPods and the AI appears to have wrongly detected the audio from the video playing as my voice or someone speaking to me. I am scared to continue the course as the penalty keeps on increasing with every word spoken in the video. What do I do?",
      dateRaised: "2026-05-19",
      status: "marked_resolved",
      statusLabel: "You marked this resolved",
    },
    {
      id: 2,
      title: "Offer letter status",
      description:
        "I was asking Yaksha about when I will receive the offer letter as it's been 3 days since I uploaded the noc.",
      dateRaised: "2026-05-09",
      status: "resolved",
      statusLabel: "Resolved",
    },
    {
      id: 3,
      title: "Event registration not working",
      description:
        "When I try to register for the upcoming event, I get an error message saying 'Server error'. I've tried clearing cache and using different browsers but the issue persists.",
      dateRaised: "2026-05-01",
      status: "resolved",
      statusLabel: "Resolved",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "marked_resolved":
        return "bg-green-50 text-green-700 border-green-200";
      case "resolved":
        return "bg-green-50 text-green-700 border-green-200";
      case "pending":
        return "bg-yellow-50 text-yellow-700 border-yellow-200";
      default:
        return "bg-gray-50 text-gray-700 border-gray-200";
    }
  };

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
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Your raised issues</h1>
          <p className="text-gray-600 mb-8">
            Track every issue you raised at samagama.in/escalation. Resolved ones link to the FAQ entry that answers them.
          </p>

          {issues.length > 0 ? (
            <div className="space-y-6">
              {issues.map((issue) => (
                <div
                  key={issue.id}
                  className="border border-gray-200 rounded-xl p-6 hover:border-purple-300 hover:shadow-md transition-all"
                >
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <p className="text-sm text-gray-500 mb-2">Raised {issue.dateRaised}</p>
                      <h3 className="text-lg font-semibold text-gray-900">{issue.title}</h3>
                    </div>
                    <span
                      className={`inline-block px-3 py-1.5 rounded-full text-sm font-medium border whitespace-nowrap flex-shrink-0 ${getStatusColor(
                        issue.status
                      )}`}
                    >
                      {issue.statusLabel}
                    </span>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{issue.description}</p>
                  {issue.status === "resolved" || issue.status === "marked_resolved" ? (
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <button className="text-sm font-medium text-purple-600 hover:text-purple-700 transition-colors">
                        View resolution in FAQ →
                      </button>
                    </div>
                  ) : null}
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="text-5xl mb-4">📋</div>
              <p className="text-lg font-semibold text-gray-700 mb-2">No issues raised yet</p>
              <p className="text-gray-500 mb-6">
                When you encounter problems, raise them here and our team will help resolve them.
              </p>
              <Link
                href="/raise"
                className="inline-block px-6 py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-colors"
              >
                Raise an issue
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
