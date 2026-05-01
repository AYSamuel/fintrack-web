import type { Metadata } from "next";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import WaitlistCTA from "../../components/sections/WaitlistCTA";

export const metadata: Metadata = {
  title: "About — Traccia",
  description:
    "Why Traccia exists. Our mission, philosophy, and principles around privacy-first personal finance.",
};

const principles = [
  {
    title: "Privacy by design",
    description:
      "Privacy isn't a feature we added — it's the foundation everything is built on. Every architectural decision starts with: does this keep data on the device?",
    color: "#4E6FD9",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: "Local-first",
    description:
      "Your device, your data, your rules. Traccia works fully offline. No internet required to view your finances — because your finances live on your phone, not our servers.",
    color: "#00C98B",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
        <line x1="12" y1="18" x2="12.01" y2="18" />
      </svg>
    ),
  },
  {
    title: "Beautiful clarity",
    description:
      "Complex financial data deserves better than a spreadsheet. Traccia turns transactions into visual stories — charts and insights that actually make sense.",
    color: "#6B5BC9",
    icon: (
      <svg
        width="20"
        height="20"
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
  {
    title: "Global reach",
    description:
      "Finance is universal. Traccia connects to banks across Europe, Africa, and North America — wherever you are, your money works with Traccia.",
    color: "#E67A3D",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden pt-16 pb-20 md:pt-24 md:pb-24">
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(78,111,217,0.08) 0%, transparent 70%)",
            }}
          />
          <div className="section-container relative text-center max-w-3xl mx-auto">
            <p className="section-label mb-4">Our mission</p>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.1] mb-6">
              Why{" "}
              <span className="text-gradient">Traccia</span>{" "}
              exists
            </h1>
            <p
              className="text-base md:text-lg leading-relaxed"
              style={{ color: "var(--text-secondary)" }}
            >
              Because your financial life is deeply personal — and it has no business living on someone else&apos;s server.
            </p>
          </div>
        </section>

        {/* Mission statement */}
        <section className="py-16 md:py-20">
          <div className="section-container">
            <div
              className="max-w-3xl mx-auto space-y-6 text-base md:text-lg leading-relaxed"
              style={{ color: "var(--text-secondary)" }}
            >
              <p>
                Most finance apps work against you. They harvest your transaction data, profile your spending habits, and sell that insight to advertisers. To use them, you hand over your most sensitive personal information — then hope for the best.
              </p>
              <p>
                We built Traccia on a different belief: your financial data is yours alone. It should never leave your device, never be analyzed by a third party, and never be used to target you with ads.
              </p>
              <p>
                Traccia captures every financial trace locally, encrypts it on your device with AES-256, and gives you the visual clarity you need to understand your money — without any compromise. No accounts. No cloud. No tracking.
              </p>
            </div>
          </div>
        </section>

        {/* Principles */}
        <section className="py-16 md:py-20">
          <div className="section-container">
            <div className="text-center mb-12">
              <p className="section-label mb-3">How we build</p>
              <h2 className="section-heading">
                Our <span className="text-gradient">principles</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
              {principles.map((p) => (
                <div
                  key={p.title}
                  className="surface-card p-6"
                  style={{ boxShadow: "var(--shadow-sm)" }}
                >
                  <div
                    aria-hidden="true"
                    className="feature-icon mb-4"
                    style={{
                      background: `${p.color}18`,
                      color: p.color,
                    }}
                  >
                    {p.icon}
                  </div>
                  <h3
                    className="text-base font-semibold mb-2"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {p.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {p.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Looking ahead */}
        <section className="py-16 md:py-20">
          <div className="section-container">
            <div className="max-w-3xl mx-auto text-center">
              <p className="section-label mb-3">What&apos;s next</p>
              <h2 className="section-heading mb-6">
                Looking <span className="text-gradient">ahead</span>
              </h2>
              <p
                className="text-base md:text-lg leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                We&apos;re working on expanding to more regions, deepening our bank integrations, and building community features — all within the same privacy-preserving architecture. More banks. More insights. Zero compromises.
              </p>
            </div>
          </div>
        </section>

        <WaitlistCTA />
      </main>
      <Footer />
    </>
  );
}
