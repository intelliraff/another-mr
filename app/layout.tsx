"use client";
import "./globals.css";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/",        label: "FAQ Portal" },
  { href: "/ask",     label: "AI Assistant" },
  { href: "/raise",   label: "My Questions" },
  { href: "/issues",  label: "My Issues" },
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
    <html lang="en" className="bg-[#0f1419]">
      <body className="min-h-screen bg-[#0f1419]">

        {/* Top Nav - Modern Glassmorphism */}
        <header className="fixed top-0 left-0 right-0 z-50 h-[72px]">
          <div className="glass h-full border-b border-cyan-500/20 backdrop-blur-xl">
            <div className="max-w-7xl mx-auto px-8 flex items-center justify-between h-full">
              {/* Brand */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center animate-pulse-glow">
                  <span className="text-white font-bold text-lg">S</span>
                </div>
                <span className="font-bold text-white text-lg tracking-tight">Samagama</span>
              </div>

              {/* Center Nav links */}
              <nav className="flex items-center gap-8">
                {navLinks.map((link) => {
                  const active = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`text-sm font-600 transition-all duration-300 ${
                        active
                          ? "text-cyan-400 border-b-2 border-cyan-400 pb-1"
                          : "text-slate-300 hover:text-cyan-300"
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </nav>

              {/* Right actions */}
              <div className="flex items-center gap-4 relative">
                {/* Notifications */}
                <div className="relative">
                  <button 
                    onClick={() => setShowNotifications(!showNotifications)}
                    className="p-2 hover:bg-cyan-500/10 rounded-lg transition-all duration-300 relative group"
                  >
                    <svg className="w-5 h-5 text-cyan-400 group-hover:text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                    </svg>
                    {announcements.length > 0 && (
                      <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-red-500 rounded-full animate-pulse"></span>
                    )}
                  </button>

                  {/* Notifications Modal - Beautiful */}
                  {showNotifications && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
                      <div className="w-full max-w-2xl bg-gradient-to-b from-slate-900 to-slate-950 rounded-2xl shadow-2xl max-h-[90vh] overflow-y-auto border border-cyan-500/20">
                        <div className="sticky top-0 p-6 border-b border-cyan-500/20 bg-gradient-to-r from-slate-900 to-slate-900 flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6m0 6l2.581-7.08a3 3 0 00-5.606-.6M9 7h.008v.008H9V7z" />
                            </svg>
                            <h3 className="font-bold text-white text-lg">Announcements</h3>
                          </div>
                          <button onClick={() => setShowNotifications(false)} className="text-slate-400 hover:text-cyan-400 text-2xl transition-colors">
                            ✕
                          </button>
                        </div>
                        <div className="divide-y divide-cyan-500/10 p-6 space-y-6">
                          {announcements.map((ann) => (
                            <div key={ann.id} className="pb-6 last:pb-0 animate-fade-in-up">
                              <div className="flex items-start gap-4">
                                <span className={`px-3 py-1 text-xs font-bold rounded-full whitespace-nowrap ${
                                  ann.priority === 'HIGH' 
                                    ? 'bg-red-500/20 text-red-400 border border-red-500/30' 
                                    : 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                                }`}>
                                  {ann.priority}
                                </span>
                                <div className="flex-1">
                                  <h4 className="font-bold text-white text-base">{ann.title}</h4>
                                  <p className="text-sm text-slate-300 mt-3 whitespace-pre-wrap leading-relaxed">{ann.content}</p>
                                  <p className="text-xs text-slate-500 mt-4">Posted by {ann.postedBy} · {ann.date}</p>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* User Profile */}
                <div className="relative">
                  <button 
                    onClick={() => setShowUserProfile(!showUserProfile)}
                    className="flex items-center gap-2 p-2 hover:bg-cyan-500/10 rounded-lg transition-all duration-300"
                  >
                    <div className="flex flex-col items-end">
                      <span className="text-xs font-bold text-white">{userProfile.totalSP}</span>
                      <span className="text-xs text-slate-400">SP</span>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-white font-semibold text-sm">
                      GR
                    </div>
                  </button>

                  {/* User Profile Dropdown */}
                  {showUserProfile && (
                    <div className="absolute right-0 mt-2 w-80 bg-gradient-to-b from-slate-900 to-slate-950 rounded-xl shadow-2xl border border-cyan-500/20 z-50 animate-fade-in-up">
                      <div className="p-4 border-b border-cyan-500/20">
                        <h3 className="font-bold text-white">{userProfile.name}</h3>
                        <p className="text-xs text-slate-400">{userProfile.email}</p>
                      </div>
                      <div className="p-4 space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="border border-cyan-500/20 rounded-lg p-3 bg-cyan-500/5">
                            <p className="text-xs text-slate-400">RANK</p>
                            <p className="text-lg font-bold text-cyan-400">{userProfile.rank}</p>
                            <p className="text-xs text-slate-500">of {userProfile.totalRanks}</p>
                          </div>
                          <div className="border border-cyan-500/20 rounded-lg p-3 bg-cyan-500/5">
                            <p className="text-xs text-slate-400">TOTAL SP</p>
                            <p className="text-lg font-bold text-cyan-400">{userProfile.totalSP}</p>
                            <p className="text-xs text-slate-500">{userProfile.status}</p>
                          </div>
                        </div>
                        <button 
                          onClick={() => {
                            router.push('/profile');
                            setShowUserProfile(false);
                          }}
                          className="w-full px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg text-sm font-bold hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 shadow-lg hover:shadow-cyan-500/50"
                        >
                          View Full Profile
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Page content with top padding for navbar */}
        <main className="pt-[72px]">
          {children}
        </main>

        <footer className="border-t border-cyan-500/20 mt-16 py-8 text-center text-sm text-slate-400 bg-gradient-to-t from-slate-900 to-transparent">
          © {new Date().getFullYear()} Samagama Support · Built by the community, for the community
        </footer>
      </body>
    </html>
  );
}
