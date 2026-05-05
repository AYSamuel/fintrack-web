"use client";

import { useScrollReveal } from "../../hooks/useScrollReveal";

const steps = [
  {
    title: "Plug in your bank",
    description:
      "Connect securely through your region's trusted provider. We never see your credentials. Your bank holds them. We don't.",
    highlight: "Plaid · Tink · Mono",
    color: "#11A675",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="5" width="20" height="14" rx="2" />
        <line x1="2" y1="10" x2="22" y2="10" />
      </svg>
    ),
  },
  {
    title: "We do the math",
    description:
      "Transactions flow in and add up automatically. No spreadsheets. No manual entry. Just numbers that finally make sense.",
    color: "#00C98B",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="23 4 23 10 17 10" />
        <polyline points="1 20 1 14 7 14" />
        <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
      </svg>
    ),
  },
  {
    title: "You see clearly",
    description:
      "Charts, budgets, and insights, rendered entirely on your phone. Your money, no longer a mystery.",
    color: "#0A6E4D",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>();

  return (
    <section ref={ref} className="py-20 md:py-28">
      <div className="section-container">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          <p className="section-label mb-3">How it works</p>
          <h2 className="section-heading">
            Three steps.{" "}
            <span className="text-gradient">That&apos;s the whole thing.</span>
          </h2>
        </div>

        {/* Steps grid */}
        <div className="relative">
          {/* Connecting line, desktop, draws in when visible */}
          <div
            className="hidden md:block absolute h-px top-10 z-0"
            style={{
              left: "calc(100% / 6)",
              width: isVisible ? "calc(100% * 2 / 3)" : "0%",
              background: "var(--border-subtle)",
              transition: "width 900ms ease-out",
            }}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-6">
            {steps.map((step, i) => (
              <div
                key={step.title}
                className={`relative flex flex-col items-center text-center z-10 transition-all duration-700 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${300 + i * 200}ms` }}
              >
                {/* Icon circle + badge wrapper */}
                <div className="relative mb-6">
                  <div
                    aria-hidden="true"
                    className="w-20 h-20 rounded-full flex items-center justify-center"
                    style={{
                      background: "var(--surface-elevated)",
                      border: `2px solid ${step.color}`,
                      color: step.color,
                      boxShadow: `0 0 28px ${step.color}22`,
                    }}
                  >
                    {step.icon}
                  </div>
                  {/* Step number badge */}
                  <div
                    className="absolute -top-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold text-white"
                    style={{ background: step.color }}
                  >
                    {i + 1}
                  </div>
                </div>

                <h3
                  className="text-lg font-semibold mb-2"
                  style={{ color: "var(--text-primary)" }}
                >
                  {step.title}
                </h3>
                <p
                  className="text-sm leading-relaxed max-w-[240px]"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {step.description}
                </p>
                {step.highlight && (
                  <p
                    className="text-xs mt-3 font-medium"
                    style={{ color: step.color }}
                  >
                    {step.highlight}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
