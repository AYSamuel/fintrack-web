"use client";

import { useScrollReveal } from "../../hooks/useScrollReveal";

const features = [
  {
    title: "Auto-sync",
    description:
      "Bank transactions flow in automatically via Plaid, Tink, or Mono. No manual entry needed.",
    iconBg: "var(--feature-icon-blue)",
    iconColor: "#4E6FD9",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 4 23 10 17 10" />
        <polyline points="1 20 1 14 7 14" />
        <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
      </svg>
    ),
  },
  {
    title: "Visual insights",
    description:
      "Beautiful charts and breakdowns that make your spending patterns crystal clear at a glance.",
    iconBg: "var(--feature-icon-green)",
    iconColor: "#00C98B",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
  },
  {
    title: "Device-only storage",
    description:
      "Your financial data never leaves your phone. Everything is encrypted with AES-256 on-device.",
    iconBg: "var(--feature-icon-purple)",
    iconColor: "#6B5BC9",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
  },
  {
    title: "Smart budgets",
    description:
      "Set budgets by category and track them in real time. Get notified before you overspend.",
    iconBg: "var(--feature-icon-pink)",
    iconColor: "#E85D8A",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    title: "Multi-region support",
    description:
      "Works across Europe, Africa, and North America. Connect to 12,000+ financial institutions.",
    iconBg: "var(--feature-icon-orange)",
    iconColor: "#E67A3D",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
  {
    title: "Biometric security",
    description:
      "Face ID, fingerprint, and PIN protection. Your finances are locked behind the same security as your phone.",
    iconBg: "var(--feature-icon-cyan)",
    iconColor: "#00B8D9",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
];

export default function Features() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>();

  return (
    <section ref={ref} id="features" className="py-20 md:py-28">
      <div className="section-container">
        {/* Section header */}
        <div
          className={`text-center mb-14 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          <p className="section-label mb-3">What Traccia does</p>
          <h2 className="section-heading">
            Everything you need to{" "}
            <span className="text-gradient">understand your money</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <div
              key={f.title}
              className={`surface-card p-6 transition-all duration-500 hover:-translate-y-1 hover:border-[rgba(78,111,217,0.35)] hover:shadow-[0_8px_32px_rgba(78,111,217,0.12)] group ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{
                transitionDelay: `${i * 80}ms`,
              }}
            >
              <div
                aria-hidden="true"
                className="feature-icon mb-4"
                style={{ background: f.iconBg, color: f.iconColor }}
              >
                {f.icon}
              </div>
              <h3
                className="text-base font-semibold mb-2"
                style={{ color: "var(--text-primary)" }}
              >
                {f.title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
