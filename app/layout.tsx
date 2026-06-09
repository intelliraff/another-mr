"use client";
import "./globals.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/",       label: "FAQ Portal",   icon: "📋" },
  { href: "/ask",    label: "AI Assistant", icon: "🤖" },
  { href: "/raise",  label: "Raise a Query",icon: "✉️"  },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50">

        {/* Top Nav */}
        <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
          <div className="max-w-4xl mx-auto px-4 flex items-center gap-2 h-14">
            {/* Brand */}
            <div className="flex items-center gap-2 mr-6">
              <span className="text-brand-600 text-lg">💬</span>
              <span className="font-semibold text-gray-900 text-sm">Samagama Support</span>
            </div>

            {/* Nav links */}
            <nav className="flex items-center gap-1">
              {navLinks.map((link) => {
                const active = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm transition-all
                      ${active
                        ? "bg-brand-50 text-brand-600 font-medium"
                        : "text-gray-500 hover:text-gray-900 hover:bg-gray-100"
                      }`}
                  >
                    <span>{link.icon}</span>
                    <span>{link.label}</span>
                  </Link>
                );
              })}
            </nav>
          </div>
        </header>

        {/* Page content */}
        <main className="max-w-4xl mx-auto px-4 py-8">
          {children}
        </main>

        <footer className="border-t border-gray-200 mt-16 py-6 text-center text-xs text-gray-400">
          © {new Date().getFullYear()} Samagama · Built by the community, for the community
        </footer>
      </body>
    </html>
  );
}
