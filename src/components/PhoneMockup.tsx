interface PhoneMockupProps {
  variant: "dashboard" | "chart" | "transactions";
  className?: string;
  featured?: boolean;
}

export default function PhoneMockup({ variant, className = "", featured = false }: PhoneMockupProps) {
  return (
    <div
      role="presentation"
      aria-hidden="true"
      className={`relative rounded-2xl overflow-hidden ${className}`}
      style={{
        background: "#16171D",
        border: featured ? "1.5px solid #4E6FD9" : "1px solid #2D2E35",
        boxShadow: featured ? "0 0 40px rgba(78, 111, 217, 0.2)" : "0 4px 20px rgba(0,0,0,0.3)",
      }}
    >
      {/* Status bar */}
      <div className="flex items-center justify-between px-4 pt-3 pb-2">
        <div className="flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full" style={{ background: "#4E6FD9" }} />
          <div className="h-1.5 w-8 rounded-full" style={{ background: "#23242B" }} />
        </div>
        <div className="h-1.5 w-6 rounded-full" style={{ background: "#23242B" }} />
      </div>

      {/* Header gradient bar */}
      <div
        className="h-1.5 mx-3 rounded-full mb-3"
        style={{
          background:
            variant === "dashboard"
              ? "linear-gradient(90deg, #4E6FD9, #6B5BC9)"
              : variant === "chart"
              ? "linear-gradient(90deg, #6B5BC9, #E85D8A)"
              : "linear-gradient(90deg, #00C98B, #00B8D9)",
        }}
      />

      {/* Content area */}
      <div className="px-3 pb-4">
        {variant === "dashboard" && <DashboardContent />}
        {variant === "chart" && <ChartContent />}
        {variant === "transactions" && <TransactionsContent />}
      </div>
    </div>
  );
}

function DashboardContent() {
  return (
    <div className="space-y-3">
      {/* Balance card */}
      <div className="rounded-xl p-3" style={{ background: "linear-gradient(135deg, #4E6FD9, #6B5BC9)" }}>
        <p className="text-[9px] text-white/60 mb-0.5">Total balance</p>
        <p className="text-base font-semibold text-white">$12,458.32</p>
      </div>
      {/* Mini donut */}
      <div className="flex items-center gap-3">
        <svg width="48" height="48" viewBox="0 0 48 48">
          <circle cx="24" cy="24" r="18" fill="none" stroke="#23242B" strokeWidth="6" />
          <circle cx="24" cy="24" r="18" fill="none" stroke="#4E6FD9" strokeWidth="6" strokeDasharray="45 68" strokeDashoffset="0" strokeLinecap="round" />
          <circle cx="24" cy="24" r="18" fill="none" stroke="#E85D8A" strokeWidth="6" strokeDasharray="28 85" strokeDashoffset="-45" strokeLinecap="round" />
          <circle cx="24" cy="24" r="18" fill="none" stroke="#00C98B" strokeWidth="6" strokeDasharray="20 93" strokeDashoffset="-73" strokeLinecap="round" />
        </svg>
        <div className="space-y-1 flex-1">
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#4E6FD9" }} />
            <div className="h-1.5 rounded-full flex-1" style={{ background: "#23242B" }} />
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#E85D8A" }} />
            <div className="h-1.5 rounded-full w-3/4" style={{ background: "#23242B" }} />
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#00C98B" }} />
            <div className="h-1.5 rounded-full w-1/2" style={{ background: "#23242B" }} />
          </div>
        </div>
      </div>
      {/* Transaction rows */}
      {[1, 2, 3].map((i) => (
        <div key={i} className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-lg" style={{ background: "#23242B" }} />
          <div className="flex-1 space-y-1">
            <div className="h-1.5 rounded-full w-2/3" style={{ background: "#23242B" }} />
            <div className="h-1 rounded-full w-1/3" style={{ background: "#1D1E26" }} />
          </div>
          <div className="h-1.5 w-10 rounded-full" style={{ background: "#23242B" }} />
        </div>
      ))}
    </div>
  );
}

function ChartContent() {
  const bars = [60, 80, 45, 90, 55, 70, 85];
  return (
    <div className="space-y-3">
      <div className="flex items-end gap-1.5 h-24 px-1">
        {bars.map((h, i) => (
          <div key={i} className="flex-1 rounded-t" style={{ height: `${h}%`, background: i === 3 ? "#6B5BC9" : "#23242B" }} />
        ))}
      </div>
      <div className="space-y-2">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-md" style={{ background: "#23242B" }} />
            <div className="flex-1 h-1.5 rounded-full" style={{ background: "#23242B" }} />
            <div className="h-1.5 w-8 rounded-full" style={{ background: i % 2 === 0 ? "rgba(0,201,139,0.3)" : "rgba(232,93,138,0.3)" }} />
          </div>
        ))}
      </div>
    </div>
  );
}

function TransactionsContent() {
  const items = [
    { color: "#E85D8A", w: "70%" },
    { color: "#00C98B", w: "55%" },
    { color: "#4E6FD9", w: "80%" },
    { color: "#E67A3D", w: "45%" },
    { color: "#6B5BC9", w: "65%" },
  ];
  return (
    <div className="space-y-2.5">
      {items.map((item, i) => (
        <div key={i} className="flex items-center gap-2.5 p-2 rounded-lg" style={{ background: "#1D1E26" }}>
          <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: `${item.color}20` }}>
            <div className="w-2.5 h-2.5 rounded-sm" style={{ background: item.color }} />
          </div>
          <div className="flex-1 space-y-1">
            <div className="h-1.5 rounded-full" style={{ width: item.w, background: "#2D2E35" }} />
            <div className="h-1 rounded-full w-1/3" style={{ background: "#23242B" }} />
          </div>
          <div className="text-[9px] font-medium" style={{ color: i % 2 === 0 ? "#E85D8A" : "#00C98B" }}>
            {i % 2 === 0 ? "-$" : "+$"}
            {(Math.random() * 200 + 10).toFixed(0)}
          </div>
        </div>
      ))}
    </div>
  );
}
