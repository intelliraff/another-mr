"use client";
import "./globals.css";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import gsap from "gsap";

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

  useEffect(() => {
    // Animate navbar on mount
    gsap.from("header", {
      duration: 0.6,
      y: -80,
      opacity: 0,
      ease: "power3.out"
    });
  }, []);

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

        {/* Top Nav - Minimal Clean Design */}
        <header className="fixed top-0 left-0 right-0 z-50 h-[70px]">
          <div className="h-full border-b border-black/10 bg-white">
            <div className="max-w-7xl mx-auto px-8 flex items-center justify-between h-full">
              {/* Brand */}
              <Link href="/" className="flex items-center gap-3 group">
                <div className="w-8 h-8 bg-black flex items-center justify-center rounded text-white font-bold text-lg group-hover:scale-110 transition-transform">
                  S
                </div>
                <span className="font-bold text-black text-lg tracking-tight">SAMAGAMA</span>
              </Link>

              {/* Center Nav links - Bold, Minimal */}
              <nav className="flex items-center gap-12">
                {navLinks.map((link) => {
                  const active = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`text-sm font-bold uppercase tracking-wide transition-all duration-300 ${
                        active
                          ? "text-black border-b-2 border-black pb-1"
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
                <div className="relative">
                  <button 
                    onClick={() => setShowNotifications(!showNotifications)}
                    className="p-2 hover:bg-black/5 rounded-lg transition-all duration-300 relative group"
                  >
                    <svg className="w-5 h-5 text-black group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                    </svg>
                    {announcements.length > 0 && (
                      <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                    )}
                  </button>

                  {/* Notifications Modal - Clean */}
                  {showNotifications && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30" onClick={() => setShowNotifications(false)}>
                      <div className="w-full max-w-2xl bg-white rounded-lg shadow-2xl max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
                        <div className="sticky top-0 p-6 border-b border-black/10 bg-white flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6m0 6l2.581-7.08a3 3 0 00-5.606-.6M9 7h.008v.008H9V7z" />
                            </svg>
                            <h3 className="font-bold text-black text-lg uppercase">Announcements</h3>
                          </div>
                          <button onClick={() => setShowNotifications(false)} className="text-gray-600 hover:text-black text-2xl transition-colors">
                            ✕
                          </button>
                        </div>
                        <div className="divide-y divide-black/10 p-6 space-y-6">
                          {announcements.map((ann) => (
                            <div key={ann.id} className="pb-6 last:pb-0">
                              <div className="flex items-start gap-4">
                                <span className={`px-3 py-1 text-xs font-bold rounded-full whitespace-nowrap uppercase ${
                                  ann.priority === 'HIGH' 
                                    ? 'bg-red-100 text-red-700 border border-red-300' 
                                    : 'bg-yellow-100 text-yellow-700 border border-yellow-300'
                                }`}>
                                  {ann.priority}
                                </span>
                                <div className="flex-1">
                                  <h4 className="font-bold text-black text-base uppercase">{ann.title}</h4>
                                  <p className="text-sm text-gray-700 mt-3 whitespace-pre-wrap leading-relaxed">{ann.content}</p>
                                  <p className="text-xs text-gray-500 mt-4">Posted by {ann.postedBy} · {ann.date}</p>
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
                    className="flex items-center gap-2 p-2 hover:bg-black/5 rounded-lg transition-all duration-300"
                  >
                    <div className="flex flex-col items-end">
                      <span className="text-xs font-bold text-black">{userProfile.totalSP}</span>
                      <span className="text-xs text-gray-600">SP</span>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center text-white font-bold text-sm hover:scale-110 transition-transform">
                      GR
                    </div>
                  </button>

                  {/* User Profile Dropdown */}
                  {showUserProfile && (
                    <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-black/10 z-50" onClick={(e) => e.stopPropagation()}>
                      <div className="p-4 border-b border-black/10">
                        <h3 className="font-bold text-black uppercase text-sm">{userProfile.name}</h3>
                        <p className="text-xs text-gray-600">{userProfile.email}</p>
                      </div>
                      <div className="p-4 space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="border border-black/10 rounded p-3 bg-black/2 hover:bg-black/5 transition-colors">
                            <p className="text-xs text-gray-600 uppercase font-bold">RANK</p>
                            <p className="text-lg font-bold text-black mt-1">{userProfile.rank}</p>
                            <p className="text-xs text-gray-600">of {userProfile.totalRanks}</p>
                          </div>
                          <div className="border border-black/10 rounded p-3 bg-black/2 hover:bg-black/5 transition-colors">
                            <p className="text-xs text-gray-600 uppercase font-bold">TOTAL SP</p>
                            <p className="text-lg font-bold text-black mt-1">{userProfile.totalSP}</p>
                            <p className="text-xs text-gray-600">{userProfile.status}</p>
                          </div>
                        </div>
                        <button 
                          onClick={() => {
                            router.push('/profile');
                            setShowUserProfile(false);
                          }}
                          className="w-full px-4 py-2 bg-black text-white rounded text-sm font-bold hover:bg-black/80 transition-all duration-300 uppercase tracking-wide"
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
        <main className="pt-[70px]">
          {children}
        </main>

        <footer className="border-t border-black/10 mt-16 py-8 text-center text-sm text-gray-600 bg-white">
          © {new Date().getFullYear()} SAMAGAMA · Built by the community, for the community
        </footer>
      </body>
    </html>
  );
}
