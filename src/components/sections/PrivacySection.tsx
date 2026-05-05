"use client";

import { useScrollReveal } from "../../hooks/useScrollReveal";

const cards = [
  {
    title: "Nothing leaves your phone",
    detail: "Truly local-first",
    description:
      "Your financial data is never transmitted, never backed up, never stored anywhere outside your device. We physically cannot see it.",
    accentColor: "#11A675",
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="1" y1="1" x2="23" y2="23" />
        <path d="M9.73 9.73A4.5 4.5 0 0 0 7.5 14H4a3 3 0 0 1-.35-5.97A5 5 0 0 1 9.73 9.73z" />
        <path d="M16.8 14H19a3 3 0 0 0 0-6h-.25A5.003 5.003 0 0 0 10.5 5c-.27 0-.53.02-.79.06" />
      </svg>
    ),
  },
  {
    title: "No accounts to hack",
    detail: "Nothing to sign up for",
    description:
      "No email. No password. No profile. There is nothing for an attacker to breach because there is nothing on our end.",
    accentColor: "#00C98B",
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <line x1="17" y1="11" x2="23" y2="17" />
        <line x1="23" y1="11" x2="17" y2="17" />
      </svg>
    ),
  },
  {
    title: "Bank-level encryption",
    detail: "AES-256, on your device",
    description:
      "Your data is encrypted on your phone using AES-256, the same standard banks use to secure their own systems.",
    accentColor: "#0A6E4D",
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
  },
];

export default function PrivacySection() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>();

  return (
    <section
      ref={ref}
      id="privacy"
      className="py-20 md:py-28 relative overflow-hidden"
    >
      {/* Subtle background shift, emerald wash */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 30% 50%, rgba(17,166,117,0.06) 0%, transparent 60%)",
        }}
      />

      <div className="section-container relative">
        {/* Header */}
        <div
          className={`text-center mb-14 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          <p className="section-label mb-3">Privacy by architecture</p>
          <h2 className="section-heading mb-4">
            Your money.{" "}
            <span className="text-gradient">Your business.</span>
          </h2>
          <p
            className="text-base max-w-md mx-auto"
            style={{ color: "var(--text-secondary)" }}
          >
            No accounts. No cloud. No trackers. No compromises.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {cards.map((card, i) => (
            <div
              key={card.title}
              className={`glass rounded-2xl p-6 transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{
                transitionDelay: `${i * 120}ms`,
                borderTop: `2px solid ${card.accentColor}`,
              }}
            >
              <div
                aria-hidden="true"
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                style={{
                  background: `${card.accentColor}18`,
                  color: card.accentColor,
                }}
              >
                {card.icon}
              </div>
              <h3
                className="text-base font-semibold mb-1"
                style={{ color: "var(--text-primary)" }}
              >
                {card.title}
              </h3>
              <p
                className="text-xs font-medium mb-3"
                style={{ color: card.accentColor }}
              >
                {card.detail}
              </p>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
