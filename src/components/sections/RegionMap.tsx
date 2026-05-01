"use client";

import { useScrollReveal } from "../../hooks/useScrollReveal";

const regions = [
  {
    region: "Europe",
    provider: "Tink",
    detail: "PSD2 compliant",
    institutions: "Thousands of banks",
    color: "#4E6FD9",
    flag: "🇪🇺",
  },
  {
    region: "Africa",
    provider: "Mono",
    detail: "CBN Open Banking",
    institutions: "Major African banks",
    color: "#00C98B",
    flag: "🌍",
  },
  {
    region: "North America",
    provider: "Plaid",
    detail: "12,000+ institutions",
    institutions: "US & Canada",
    color: "#6B5BC9",
    flag: "🌎",
  },
];

export default function RegionMap() {
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
          <p className="section-label mb-3">Works where you are</p>
          <h2 className="section-heading">
            Global bank sync,{" "}
            <span className="text-gradient">local storage</span>
          </h2>
        </div>

        {/* Region cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {regions.map((r, i) => (
            <div
              key={r.region}
              className={`surface-card overflow-hidden transition-all duration-700 hover:scale-[1.02] ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{
                transitionDelay: `${i * 120}ms`,
                boxShadow: "var(--shadow-sm)",
              }}
            >
              {/* Accent bar */}
              <div className="h-1 w-full" style={{ background: r.color }} />

              <div className="p-6">
                {/* Flag + provider */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl">{r.flag}</span>
                  <span
                    className="text-xs font-semibold px-2.5 py-1 rounded-full"
                    style={{
                      background: `${r.color}18`,
                      color: r.color,
                    }}
                  >
                    via {r.provider}
                  </span>
                </div>

                {/* Region name */}
                <h3
                  className="text-xl font-semibold mb-1"
                  style={{ color: "var(--text-primary)" }}
                >
                  {r.region}
                </h3>

                {/* Institutions */}
                <p
                  className="text-sm mb-3"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {r.institutions}
                </p>

                {/* Regulatory detail */}
                <div
                  className="flex items-center gap-1.5 text-xs font-medium"
                  style={{ color: r.color }}
                >
                  <svg
                    aria-hidden="true"
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {r.detail}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
