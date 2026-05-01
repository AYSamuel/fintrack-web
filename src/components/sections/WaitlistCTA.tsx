"use client";

import WaitlistForm from "../WaitlistForm";
import { useScrollReveal } from "../../hooks/useScrollReveal";

export default function WaitlistCTA() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>(0.1);

  return (
    <section ref={ref} id="waitlist" className="py-20 md:py-28 relative overflow-hidden">
      {/* Gradient background */}
      <div
        className="absolute inset-0 animate-gradient"
        style={{ background: "linear-gradient(135deg, #1e3178, #2D3E85, #4A4A92, #6B5BC9, #2D3E85, #1e3178)" }}
      />

      {/* Atmospheric glows */}
      <div
        className="absolute top-0 left-1/4 w-96 h-96 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(78,111,217,0.3) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-0 right-1/4 w-96 h-96 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(107,91,201,0.3) 0%, transparent 70%)",
        }}
      />

      <div className="section-container relative text-center">
        {/* Text block */}
        <div
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <p
            className="section-label mb-4"
            style={{ color: "rgba(255,255,255,0.5)" }}
          >
            Join the waitlist
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4 text-white">
            Be the first to{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: "linear-gradient(135deg, #93B4FF, #C4BAFF)",
              }}
            >
              trace your finances
            </span>
          </h2>

          <p
            className="text-base mb-10 max-w-sm mx-auto"
            style={{ color: "rgba(255,255,255,0.6)" }}
          >
            Get early access when we launch. No spam, ever.
          </p>
        </div>

        {/* Form — slides up slightly after text */}
        <div
          className={`flex justify-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={
            {
              transitionDelay: "200ms",
              "--surface": "rgba(255,255,255,0.12)",
              "--border": "rgba(255,255,255,0.2)",
              "--text-primary": "rgba(255,255,255,0.9)",
            } as React.CSSProperties
          }
        >
          <WaitlistForm />
        </div>
      </div>
    </section>
  );
}
