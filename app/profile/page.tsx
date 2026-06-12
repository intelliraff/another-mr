"use client";
import Link from "next/link";

export default function ProfilePage() {
  const userProfile = {
    name: "Gordan Ramsey",
    email: "gordan.ramsey@example.com",
    totalSP: 259,
    rank: 558,
    totalRanks: 7747,
    status: "ABOVE AVERAGE",
    spNeeded: 215,
    nextRankSP: 1,
    cohortAvg: 68,
    top50Cutoff: 474
  };

  const spTrend = [45, 52, 48, 61, 55, 58, 62, 70, 68, 75, 78, 82];

  const spBankStatement = [
    {
      date: "11/06/2026, 18:00:00",
      credit: "+10",
      balance: 259,
      reason: "Top Contributor badge bonus points credited → +10 SP"
    },
    {
      date: "11/06/2026, 14:30:00",
      credit: "+18",
      balance: 249,
      reason: "Day 22 (Jun): present 90 of 90 min (100%) & 100% poll correction rate → +18 SP"
    },
    {
      date: "10/06/2026, 11:30:00",
      credit: "+50",
      balance: 231,
      reason: "Research Phase I milestone submission evaluation (A grade) → +50 SP."
    },
    {
      date: "08/06/2026, 14:30:00",
      credit: "+15",
      balance: 181,
      reason: "Discourse bonus for answering student queries on Vicharanashala forum → +15 SP"
    },
    {
      date: "05/06/2026, 14:30:00",
      credit: "+10",
      balance: 166,
      reason: "Day 18 (5 Jun): present 45 of 45 min (100%) within official 09:05 - 09:50 IST window → +10 SP."
    }
  ];

  const whatToDoNext = [
    "Earn 215 more SP to enter Top 50.",
    "Attend at least 75% of upcoming sessions to avoid attendance debit.",
    "Attempt every poll question to avoid poll debit.",
    "Check your SP Bank after each session to verify every credit and debit."
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-8 py-8">
          <Link href="/" className="inline-flex items-center gap-2 mb-6 text-gray-700 hover:text-gray-900 transition-colors">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back
          </Link>
          
          <div className="flex items-start justify-between">
            <div>
              <p className="text-xs font-semibold text-gray-500 uppercase">Student Spurti Rank</p>
              <h1 className="text-3xl font-bold text-gray-900">{userProfile.name}</h1>
              <p className="text-sm text-gray-600">{userProfile.email}</p>
            </div>
            <div className="text-right">
              <p className="text-xs font-semibold text-gray-500 uppercase">Total SP</p>
              <p className="text-4xl font-bold text-gray-900">{userProfile.totalSP}</p>
              <p className="text-sm text-gray-600">Rank {userProfile.rank} of {userProfile.totalRanks}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-8 py-12">
        <div className="grid grid-cols-3 gap-8 mb-12">
          {/* Standing */}
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-xs font-semibold text-gray-500 uppercase mb-4">Standing</h3>
            <p className="text-3xl font-bold text-gray-900 mb-4">Rank {userProfile.rank}</p>
            <div className="space-y-2 text-sm text-gray-600">
              <p>{userProfile.spNeeded} SP needed to enter Top 50.</p>
              <p>{userProfile.nextRankSP} SP needed for next rank.</p>
            </div>
          </div>

          {/* Cohort Comparison */}
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-xs font-semibold text-gray-500 uppercase mb-4">Cohort Comparison</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Your SP:</span>
                <span className="font-semibold text-gray-900">{userProfile.totalSP}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Cohort avg:</span>
                <span className="font-semibold text-gray-900">{userProfile.cohortAvg}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Top 50 cutoff:</span>
                <span className="font-semibold text-gray-900">{userProfile.top50Cutoff}</span>
              </div>
            </div>
          </div>

          {/* Current Status */}
          <div className="border border-gray-200 rounded-lg p-6 flex flex-col items-center justify-center">
            <h3 className="text-xs font-semibold text-gray-500 uppercase mb-4">Current Status</h3>
            <button className="px-6 py-2 bg-gray-900 text-white text-sm font-semibold rounded-full hover:bg-gray-800 transition-colors">
              ↗ {userProfile.status}
            </button>
          </div>
        </div>

        {/* SP Trend */}
        <div className="mb-12">
          <h3 className="text-xs font-semibold text-gray-500 uppercase mb-6">SP Trend</h3>
          <div className="border border-gray-200 rounded-lg p-6 bg-gray-50">
            <div className="h-32 flex items-end justify-center gap-1">
              {spTrend.map((value, idx) => (
                <div
                  key={idx}
                  className="flex-1 bg-gray-900 rounded-sm hover:opacity-80 transition-opacity"
                  style={{ height: `${(value / 100) * 100}%` }}
                  title={`${value} SP`}
                />
              ))}
            </div>
            <div className="flex gap-4 justify-center mt-6 text-xs font-medium text-gray-600">
              <button className="hover:text-gray-900">SP Bank</button>
              <button className="hover:text-gray-900">Polls</button>
              <button className="hover:text-gray-900">Top 50</button>
            </div>
          </div>
        </div>

        {/* What to do next */}
        <div className="mb-12">
          <h3 className="text-xs font-semibold text-gray-500 uppercase mb-6">What to do next</h3>
          <div className="space-y-3">
            {whatToDoNext.map((item, idx) => (
              <div key={idx} className="flex gap-3">
                <span className="text-gray-900">→</span>
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* SP Bank Statement */}
        <div>
          <h3 className="text-xs font-semibold text-gray-500 uppercase mb-6">SP Bank Statement</h3>
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-900">Date & Time</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-900">Credit</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-900">Balance</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-900">Reason</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {spBankStatement.map((row, idx) => (
                  <tr key={idx} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 text-sm text-gray-900">{row.date}</td>
                    <td className="px-6 py-4 text-sm font-semibold text-green-600">{row.credit}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">{row.balance}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{row.reason}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
