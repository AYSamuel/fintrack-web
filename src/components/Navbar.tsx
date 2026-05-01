"use client";

import { useState } from "react";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav
      className="sticky top-0 z-50 backdrop-blur-xl transition-colors duration-300"
      style={{
        background: "var(--nav-bg)",
        borderBottom: "1px solid var(--nav-border)",
      }}
    >
      <div className="section-container">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-gradient-card-blue flex items-center justify-center">
              <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
              </svg>
            </div>
            <span className="text-lg font-semibold tracking-tight" style={{ color: "var(--text-primary)" }}>
              Traccia
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/#features" className="text-sm transition-colors duration-200 hover:text-brand-blue" style={{ color: "var(--text-secondary)" }}>
              Features
            </Link>
            <Link href="/#privacy" className="text-sm transition-colors duration-200 hover:text-brand-blue" style={{ color: "var(--text-secondary)" }}>
              Privacy
            </Link>
            <Link href="/about" className="text-sm transition-colors duration-200 hover:text-brand-blue" style={{ color: "var(--text-secondary)" }}>
              About
            </Link>
            <ThemeToggle />
            <Link href="/#waitlist" className="btn-primary text-sm !py-2 !px-4">
              Get early access
            </Link>
          </div>

          {/* Mobile hamburger */}
          <div className="flex items-center gap-3 md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="w-11 h-11 rounded-lg flex items-center justify-center transition-colors"
              style={{ border: "1px solid var(--border-subtle)" }}
              aria-label="Toggle menu"
            >
              <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" style={{ color: "var(--text-secondary)" }}>
                {mobileOpen ? (
                  <>
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </>
                ) : (
                  <>
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <line x1="3" y1="12" x2="21" y2="12" />
                    <line x1="3" y1="18" x2="21" y2="18" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>

      </div>

      {/* Mobile menu — fixed overlay, never pushes content */}
      {mobileOpen && (
        <div
          className="md:hidden fixed left-0 right-0 z-50 animate-fade-in"
          style={{
            top: "64px",
            background: "var(--nav-bg)",
            borderBottom: "1px solid var(--border-subtle)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
          }}
        >
          <div className="section-container py-3 space-y-1">
            <Link href="/#features" onClick={() => setMobileOpen(false)} className="block py-2.5 text-sm" style={{ color: "var(--text-secondary)" }}>
              Features
            </Link>
            <Link href="/#privacy" onClick={() => setMobileOpen(false)} className="block py-2.5 text-sm" style={{ color: "var(--text-secondary)" }}>
              Privacy
            </Link>
            <Link href="/about" onClick={() => setMobileOpen(false)} className="block py-2.5 text-sm" style={{ color: "var(--text-secondary)" }}>
              About
            </Link>
            <Link href="/#waitlist" onClick={() => setMobileOpen(false)} className="btn-primary text-sm !py-2 mt-2 w-full text-center">
              Get early access
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
