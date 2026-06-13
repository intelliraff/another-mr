"use client";
import Link from "next/link";

type Issue = {
  id: number;
  title: string;
  description: string;
  dateRaised: string;
  status: "resolved" | "marked-resolved" | "pending";
  statusLabel: string;
};

export default function IssuesPage() {
  const issues: Issue[] = [
    {
      id: 1,
      title: "ViRe I was penalized for speaking during a video",
      description:
        "I was penalized for speaking during a video, but I was just listening to the video with my EarPods and the AI appears to have wrongly detected the audio from the video playing as my voice or someone speaking to me. I am scared to continue the course as the penalty keeps on increasing with every word spoken in the video. What do I do?",
      dateRaised: "2026-05-19",
      status: "marked-resolved",
      statusLabel: "You marked this resolved",
    },
    {
      id: 2,
      title: "I was asking Yaksha about when I will receive the offer letter...",
      description:
        "I was asking Yaksha about when I will receive the offer letter as it's been 3 days since I uploaded the noc.",
      dateRaised: "2026-05-09",
      status: "resolved",
      statusLabel: "Resolved",
    },
    {
      id: 3,
      title: "Certificate download issue",
      description:
        "I completed my internship but I cannot download the certificate from the platform.",
      dateRaised: "2026-05-01",
      status: "pending",
      statusLabel: "Pending",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-8">
        {/* Back button */}
        <Link
          href="/raise"
          className="inline-flex items-center gap-2 px-3 py-1.5 border border-gray-300 rounded text-sm font-medium hover:bg-gray-50 transition-colors mb-6"
        >
          ← Back
        </Link>

        {/* Title and description */}
        <h1 className="text-2xl font-semibold text-black mb-2">Your raised issues</h1>
        <p className="text-sm text-gray-600 mb-8">
          Track every issue you raised at samagama.in/escalation. Resolved ones link to the FAQ entry that answers them.
        </p>

        {/* Issues list */}
        <div className="space-y-4">
          {issues.map((issue) => (
            <div
              key={issue.id}
              className="p-4 border border-gray-200 rounded bg-white hover:border-gray-300 transition-colors"
            >
              <div className="flex items-start justify-between gap-4 mb-2">
                <p className="text-xs text-gray-500">Raised {issue.dateRaised}</p>
                <span
                  className={`inline-block px-2.5 py-0.5 text-xs font-semibold rounded-full whitespace-nowrap flex-shrink-0 ${
                    issue.status === "marked-resolved" || issue.status === "resolved"
                      ? "bg-green-100 text-green-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {issue.status === "marked-resolved" ? "You marked this resolved" : issue.statusLabel}
                </span>
              </div>
              <h3 className="text-sm font-semibold text-black mb-1">{issue.title}</h3>
              <p className="text-sm text-gray-700 leading-relaxed">{issue.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
