import PhoneMockup from "../PhoneMockup";
import PhoneCarousel from "../PhoneCarousel";
import WaitlistForm from "../WaitlistForm";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-16 pb-20 md:pt-24 md:pb-28">
      {/* Background glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse at center, rgba(78,111,217,0.08) 0%, transparent 70%)" }}
      />
      <div
        className="absolute top-40 right-0 w-[400px] h-[400px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse at center, rgba(107,91,201,0.06) 0%, transparent 70%)" }}
      />

      <div className="section-container relative">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium mb-6 animate-fade-in"
            style={{
              background: "var(--surface-elevated)",
              border: "1px solid var(--border-subtle)",
              color: "var(--text-secondary)",
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent-green animate-pulse" />
            Every transaction leaves a trace
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.1] mb-5 animate-fade-in-up">
            Your finances.{" "}
            <span className="text-gradient">Beautifully traced.</span>
          </h1>

          {/* Sub */}
          <p
            className="text-base md:text-lg leading-relaxed max-w-lg mx-auto mb-8 animate-fade-in-up animate-delay-100"
            style={{ color: "var(--text-secondary)" }}
          >
            Traccia automatically captures every transaction and transforms your
            spending into clear, visual stories, all without ever leaving your
            device.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 animate-fade-in-up animate-delay-200">
            <WaitlistForm />
          </div>
        </div>

        {/* Phone mockups — carousel on mobile, fanned layout on desktop */}
        <PhoneCarousel />
        <div className="hidden sm:flex items-end justify-center gap-4 md:gap-6 animate-slide-up animate-delay-300">
          <div className="w-[140px] md:w-[180px] animate-float" style={{ animationDelay: "0s" }}>
            <PhoneMockup variant="transactions" />
          </div>
          <div className="w-[180px] md:w-[220px] -mb-4 animate-float" style={{ animationDelay: "2s" }}>
            <PhoneMockup variant="dashboard" featured />
          </div>
          <div className="w-[140px] md:w-[180px] animate-float" style={{ animationDelay: "4s" }}>
            <PhoneMockup variant="chart" />
          </div>
        </div>
      </div>
    </section>
  );
}
