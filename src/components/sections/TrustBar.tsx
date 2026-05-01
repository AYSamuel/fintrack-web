"use client";

import { useScrollReveal } from "../../hooks/useScrollReveal";

const stats = [
  { value: "100%", label: "Local & private", color: "#4E6FD9" },
  { value: "AES-256", label: "Encryption", color: "#00C98B" },
  { value: "3", label: "Regions supported", color: "#6B5BC9" },
  { value: "Zero", label: "Data sent to cloud", color: "#E85D8A" },
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
