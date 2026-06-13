"use client";
import Link from "next/link";
import { useState } from "react";

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

  const zoomAttendance = {
    sessionsAttended: 11,
    totalSessions: 11,
    minutesInSession: 1108,
    totalMinutes: 1122,
    pollsAnswered: 226,
    totalPolls: 244,
    breakdown: [
      { date: "2026-06-01 (Mon)", time: "09:05-11:00 (2 joins)", email: "gordan.ramsey@gmail.com", attendance: "65/65 min", attendancePercent: 100, polls: "36/38", pollsPercent: 95 },
      { date: "2026-06-02 (Tue)", time: "09:05-11:00", email: "gordan.ramsey@gmail.com", attendance: "115/115 min", attendancePercent: 100, polls: "10/11", pollsPercent: 91 },
      { date: "2026-06-03 (Wed)", time: "09:05-11:00 (4 joins)", email: "gordan.ramsey@gmail.com", attendance: "62/62 min", attendancePercent: 100, polls: "11/15", pollsPercent: 73 },
      { date: "2026-06-04 (Thu)", time: "09:05-10:45 (5 joins)", email: "gordan.ramsey@gmail.com", attendance: "97/101 min", attendancePercent: 96, polls: "19/19", pollsPercent: 100 },
      { date: "2026-06-05 (Fri)", time: "09:05-11:00", email: "gordan.ramsey@gmail.com", attendance: "114/115 min", attendancePercent: 99, polls: "23/25", pollsPercent: 92 },
      { date: "2026-06-06 (Sat)", time: "09:07-11:00 (2 joins)", email: "gordan.ramsey@gmail.com", attendance: "96/96 min", attendancePercent: 100, polls: "18/21", pollsPercent: 86 },
      { date: "2026-06-08 (Mon)", time: "09:05-11:00 (2 joins)", email: "gordan.ramsey@gmail.com", attendance: "111/111 min", attendancePercent: 100, polls: "14/16", pollsPercent: 88 },
      { date: "2026-06-09 (Tue)", time: "09:05-10:57 (2 joins)", email: "gordan.ramsey@gmail.com", attendance: "106/115 min", attendancePercent: 92, polls: "24/28", pollsPercent: 86 },
      { date: "2026-06-10 (Wed)", time: "09:05-11:00", email: "gordan.ramsey@gmail.com", attendance: "115/115 min", attendancePercent: 100, polls: "22/22", pollsPercent: 100 },
    ]
  };

  const whatToDoNext = [
    "Earn 215 more SP to enter Top 50.",
    "Attend at least 75% of upcoming sessions to avoid attendance debit.",
    "Attempt every poll question to avoid poll debit.",
    "Check your SP Bank after each session to verify every credit and debit."
  ];

  const [showBreakdown, setShowBreakdown] = useState(false);

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
            <button className="px-6 py-2 bg-gray-900 text-white text-sm font-semibold rounded-full hover:bg-gray-800 transition-colors mb-6">
              ↗ {userProfile.status}
            </button>
            <Link href="/leaderboard" className="w-full">
              <button className="w-full px-4 py-2 border border-gray-200 text-gray-700 text-sm font-medium rounded hover:bg-gray-50 transition-colors">
                View Leaderboard
              </button>
            </Link>
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

        {/* My Zoom Attendance */}
        <div className="mb-12">
          <h3 className="text-xs font-semibold text-gray-500 uppercase mb-6">My Zoom Attendance</h3>
          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
            <p className="text-sm text-gray-600 mb-6">Your attendance and poll participation across all mandatory morning sessions since your start date.</p>
            
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="border border-gray-200 rounded-lg p-4">
                <p className="text-xs text-gray-500 mb-2">Sessions attended</p>
                <p className="text-3xl font-bold text-gray-900">{zoomAttendance.sessionsAttended} <span className="text-lg text-gray-500">of {zoomAttendance.totalSessions}</span></p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <p className="text-xs text-gray-500 mb-2">Minutes in session</p>
                <p className="text-3xl font-bold text-gray-900">{zoomAttendance.minutesInSession} <span className="text-lg text-gray-500">of {zoomAttendance.totalMinutes}</span></p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <p className="text-xs text-gray-500 mb-2">Polls answered</p>
                <p className="text-3xl font-bold text-gray-900">{zoomAttendance.pollsAnswered} <span className="text-lg text-gray-500">of {zoomAttendance.totalPolls}</span></p>
              </div>
            </div>

            <button 
              onClick={() => setShowBreakdown(!showBreakdown)}
              className="text-purple-600 hover:text-purple-700 text-sm font-medium flex items-center gap-1 mb-6"
            >
              ▲ Hide day-wise breakdown ({zoomAttendance.breakdown.length} sessions)
            </button>

            {showBreakdown && (
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-gray-50 border-b border-gray-200">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-gray-900">Date</th>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-gray-900">Joined (IST)</th>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-gray-900">Joined from (Email ID)</th>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-gray-900">Attendance</th>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-gray-900">Polls</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {zoomAttendance.breakdown.map((row, idx) => (
                      <tr key={idx} className="hover:bg-gray-50">
                        <td className="px-4 py-3 text-gray-900 font-medium">{row.date}</td>
                        <td className="px-4 py-3 text-gray-600">{row.time}</td>
                        <td className="px-4 py-3 text-gray-600">{row.email}</td>
                        <td className="px-4 py-3">
                          <div>
                            <span className="text-gray-900 font-medium">{row.attendance}</span>
                            <span className="text-green-600 font-medium ml-2">({row.attendancePercent}%)</span>
                          </div>
                        </td>
                        <td className="px-4 py-3">
                          <div>
                            <span className="text-gray-900 font-medium">{row.polls}</span>
                            <span className="text-green-600 font-medium ml-2">({row.pollsPercent}%)</span>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
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
