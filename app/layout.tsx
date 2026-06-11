"use client";
import "./globals.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/",       label: "FAQ Portal" },
  { href: "/ask",    label: "AI Assistant" },
  { href: "/raise",  label: "My Questions" },
  { href: "/",       label: "My Issues" },
  { href: "/",       label: "Leaderboard" },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return (
    <html lang="en" className="bg-[#F8F9FC]">
      <body className="min-h-screen bg-[#F8F9FC]">

        {/* Top Nav - Glassmorphism */}
        <header className="fixed top-0 left-0 right-0 z-50 h-[72px]">
          <div className="glass h-full border-b border-white/30 backdrop-blur-xl bg-white/70">
            <div className="max-w-7xl mx-auto px-8 flex items-center justify-between h-full">
              {/* Brand */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">S</span>
                </div>
                <span className="font-semibold text-gray-900">Samagama Support</span>
              </div>

              {/* Center Nav links */}
              <nav className="flex items-center gap-8">
                {navLinks.map((link) => {
                  const active = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`text-sm font-medium transition-colors ${
                        active
                          ? "text-purple-600"
                          : "text-gray-600 hover:text-gray-900"
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </nav>

              {/* Right actions */}
              <div className="flex items-center gap-4">
                <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                </button>
                <button className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center text-white font-semibold text-sm">
                  U
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Page content with top padding for navbar */}
        <main className="pt-[72px]">
          {children}
        </main>

        <footer className="border-t border-gray-200 mt-16 py-8 text-center text-sm text-gray-500 bg-white">
          © {new Date().getFullYear()} Samagama Support · Built by the community, for the community
        </footer>
      </body>
    </html>
  );
}
