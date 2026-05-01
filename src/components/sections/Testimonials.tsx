"use client";

import { useScrollReveal } from "../../hooks/useScrollReveal";

const testimonials = [
  {
    quote: "Finally, a finance app that doesn't want my data.",
    author: "Early beta user",
  },
  {
    quote:
      "The charts made me actually understand where my money goes. I had no idea.",
    author: "Beta tester",
  },
  {
    quote:
      "I love that everything stays on my phone. No cloud, no worry. It just works.",
    author: "Waitlist member",
  },
];

export default function Testimonials() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>();

  return (
    <section ref={ref} className="py-20 md:py-28">
      <div className="section-container">
        {/* Header */}
        <div
          className={`text-center mb-14 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          <p className="section-label mb-3">What people say</p>
          <h2 className="section-heading">
            Trusted by{" "}
            <span className="text-gradient">early users</span>
          </h2>
        </div>

        {/* Quote cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`surface-card p-6 transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{
                transitionDelay: `${i * 120}ms`,
                boxShadow: "var(--shadow-sm)",
              }}
            >
              {/* Opening quote mark */}
              <div
                className="text-5xl font-bold leading-none mb-4 select-none"
                style={{ color: "var(--brand-blue)", opacity: 0.4 }}
              >
                &ldquo;
              </div>

              <p
                className="text-sm leading-relaxed mb-5"
                style={{ color: "var(--text-primary)" }}
              >
                {t.quote}
              </p>

              <p className="text-xs font-medium" style={{ color: "var(--text-tertiary)" }}>
                {t.author}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
