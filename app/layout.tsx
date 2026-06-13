"use client";
import "./globals.css";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/",        label: "FAQ" },
  { href: "/ask",     label: "Yaksha" },
  { href: "/raise",   label: "Queries" },
];

const announcements = [
  {
    id: 1,
    priority: "MEDIUM",
    title: "Live Support Session",
    content: `Dear Learners,

We will be conducting live support sessions for query resolution in Zoom breakout rooms at sharp 4:30 PM.

Kindly join the session if you have any queries or require assistance.

Warm Regards, Team Samagama`,
    postedBy: "Gordan Ramsey",
    date: "12 Jun 2026, 04:28 pm IST"
  },
  {
    id: 2,
    priority: "HIGH",
    title: "Internship Standup - Day 24",
    content: `Please note: This meeting is only applicable to interns whose internship start date is 12th June 2026 or earlier.

Hi there,

You are invited to a Zoom meeting. When: Jun 12, 2026 09:00 AM Mumbai, Kolkata, New Delhi

Register in advance for this meeting:
https://zoom.us/meeting/register/u2JqCMPQQJ-I1Ry_bTaFFg

After registering, you will receive a confirmation email containing information about joining the meeting.`,
    postedBy: "Sudarshan",
    date: "10 Jun 2026, 02:15 pm IST"
  }
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [showNotifications, setShowNotifications] = useState(false);
  const [showUserProfile, setShowUserProfile] = useState(false);

  const userProfile = {
    name: "Gordan Ramsey",
    email: "gordan.ramsey@example.com",
    totalSP: 259,
    rank: 558,
    totalRanks: 7747,
    status: "ABOVE AVERAGE",
    spNeeded: 215,
    nextRankSP: 1
  };

  return (
    <html lang="en" className="bg-white">
      <body className="min-h-screen bg-white">

        {/* Top Nav - Compact Minimal */}
        <header className="fixed top-0 left-0 right-0 z-50 h-16 border-b border-gray-200 bg-white">
          <div className="max-w-7xl mx-auto px-8 flex items-center justify-between h-full">
            {/* Brand */}
            <Link href="/" className="text-sm font-semibold text-black">
              Samagama
            </Link>

            {/* Center Nav links - Minimal */}
            <nav className="flex items-center gap-8">
              {navLinks.map((link) => {
                const active = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`text-sm font-medium transition-colors ${
                      active
                        ? "text-black border-b border-black pb-0.5"
                        : "text-gray-600 hover:text-black"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Right actions */}
            <div className="flex items-center gap-6">
              {/* Notifications */}
              <button 
                onClick={() => setShowNotifications(!showNotifications)}
                className="p-1.5 hover:bg-gray-100 rounded transition-colors relative"
              >
                <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
                {announcements.length > 0 && (
                  <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
                )}
              </button>

              {/* Notifications Modal */}
              {showNotifications && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30" onClick={() => setShowNotifications(false)}>
                  <div className="w-full max-w-2xl bg-white rounded-lg shadow-lg max-h-[80vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
                    <div className="sticky top-0 p-4 border-b border-gray-200 bg-white flex items-center justify-between">
                      <h3 className="font-semibold text-black text-sm">Announcements</h3>
                      <button onClick={() => setShowNotifications(false)} className="text-gray-600 hover:text-black">✕</button>
                    </div>
                    <div className="divide-y divide-gray-200 p-4 space-y-4">
                      {announcements.map((ann) => (
                        <div key={ann.id} className="pb-4 last:pb-0">
                          <div className="flex items-start gap-3">
                            <span className={`px-2 py-0.5 text-xs font-bold rounded ${
                              ann.priority === 'HIGH' 
                                ? 'bg-red-100 text-red-700' 
                                : 'bg-yellow-100 text-yellow-700'
                            }`}>
                              {ann.priority}
                            </span>
                            <div className="flex-1">
                              <h4 className="font-semibold text-black text-sm">{ann.title}</h4>
                              <p className="text-sm text-gray-600 mt-1 whitespace-pre-wrap">{ann.content}</p>
                              <p className="text-xs text-gray-500 mt-2">Posted by {ann.postedBy} · {ann.date}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* User Profile */}
              <button 
                onClick={() => setShowUserProfile(!showUserProfile)}
                className="p-1.5 hover:bg-gray-100 rounded transition-colors"
              >
                <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </button>

              {/* User Profile Dropdown */}
              {showUserProfile && (
                <div className="absolute top-16 right-8 w-64 bg-white rounded-lg shadow-lg border border-gray-200 z-50" onClick={(e) => e.stopPropagation()}>
                  <div className="p-3 border-b border-gray-200">
                    <h3 className="font-semibold text-black text-sm">{userProfile.name}</h3>
                    <p className="text-xs text-gray-600">{userProfile.email}</p>
                  </div>
                  <div className="p-3 space-y-3">
                    <div className="grid grid-cols-2 gap-3">
                      <div className="border border-gray-200 rounded p-2">
                        <p className="text-xs text-gray-600">RANK</p>
                        <p className="text-base font-semibold text-black">{userProfile.rank}</p>
                        <p className="text-xs text-gray-600">of {userProfile.totalRanks}</p>
                      </div>
                      <div className="border border-gray-200 rounded p-2">
                        <p className="text-xs text-gray-600">SP</p>
                        <p className="text-base font-semibold text-black">{userProfile.totalSP}</p>
                        <p className="text-xs text-gray-600">{userProfile.status}</p>
                      </div>
                    </div>
                    <button 
                      onClick={() => {
                        router.push('/profile');
                        setShowUserProfile(false);
                      }}
                      className="w-full px-3 py-1.5 bg-black text-white rounded text-xs font-semibold hover:bg-gray-800 transition-colors"
                    >
                      View Profile
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </header>

        {/* Page content with top padding */}
        <main className="pt-16">
          {children}
        </main>

        <footer className="border-t border-gray-200 py-4 text-center text-xs text-gray-600 bg-white">
          © {new Date().getFullYear()} Samagama
        </footer>
      </body>
    </html>
  );
}
