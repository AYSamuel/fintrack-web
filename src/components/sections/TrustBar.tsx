"use client";

import { useScrollReveal } from "../../hooks/useScrollReveal";

// Stats arranged for psychological contrast: 100% (yours) vs 0 (ours).
const stats = [
  { value: "100%", label: "On your phone", color: "#11A675" },
  { value: "0", label: "Data on our servers", color: "#0A6E4D" },
  { value: "AES-256", label: "Bank-level encryption", color: "#00C98B" },
  { value: "12K+", label: "Banks supported", color: "#F4B860" },
];

export default function TrustBar() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>(0.1);

  return (
    <section
      ref={ref}
      className="border-y"
      style={{
        background: "var(--surface-elevated)",
        borderColor: "var(--border-subtle)",
      }}
    >
      <div className="section-container py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`text-center transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <p
                className="text-2xl md:text-3xl font-bold mb-1"
                style={{ color: stat.color }}
              >
                {stat.value}
              </p>
              <p className="text-xs" style={{ color: "var(--text-tertiary)" }}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
