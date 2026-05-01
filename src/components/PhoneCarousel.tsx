"use client";

import { useRef, useState } from "react";
import PhoneMockup from "./PhoneMockup";

const slides = [
  { variant: "dashboard" as const, featured: true },
  { variant: "transactions" as const, featured: false },
  { variant: "chart" as const, featured: false },
];

export default function PhoneCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setActive(Math.round(el.scrollLeft / el.clientWidth));
  };

  return (
    <div className="sm:hidden -mx-6">
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide"
      >
        {slides.map(({ variant, featured }) => (
          <div
            key={variant}
            className="snap-center shrink-0 flex justify-center py-2"
            style={{ width: "100vw" }}
          >
            <div className="w-[200px]">
              <PhoneMockup variant={variant} featured={featured} />
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center gap-2 mt-4">
        {slides.map((_, i) => (
          <div
            key={i}
            className="rounded-full transition-all duration-300"
            style={{
              width: i === active ? "20px" : "6px",
              height: "6px",
              background: i === active ? "var(--brand-blue)" : "var(--border)",
            }}
          />
        ))}
      </div>
    </div>
  );
}
