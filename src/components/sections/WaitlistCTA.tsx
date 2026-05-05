"use client";

import WaitlistForm from "../WaitlistForm";
import { useScrollReveal } from "../../hooks/useScrollReveal";

export default function WaitlistCTA() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>(0.1);

  return (
    <section ref={ref} id="waitlist" className="py-20 md:py-28 relative overflow-hidden">
      {/* Gradient background, emerald-forward */}
      <div
        className="absolute inset-0 animate-gradient"
        style={{ background: "linear-gradient(135deg, #042820, #084034, #0A6E4D, #11A675, #084034, #042820)" }}
      />

      {/* Atmospheric glows */}
      <div
        className="absolute top-0 left-1/4 w-96 h-96 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(17,166,117,0.35) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-0 right-1/4 w-96 h-96 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(244,184,96,0.18) 0%, transparent 70%)",
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
            Get on the list
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4 text-white">
            Get early access.{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: "linear-gradient(135deg, #6FE9B6, #F4B860)",
              }}
            >
              Take your money back.
            </span>
          </h2>

          <p
            className="text-base mb-10 max-w-sm mx-auto"
            style={{ color: "rgba(255,255,255,0.7)" }}
          >
            Be first when we launch. We won&apos;t spam you. We can&apos;t,
            actually. We don&apos;t keep your data.
          </p>
        </div>

        {/* Form, slides up slightly after text */}
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
