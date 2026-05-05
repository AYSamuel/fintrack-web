/**
 * Realistic phone mockups of the MonieTally Flutter app, theme-aware.
 * Each `variant` mirrors a real screen from the MonieTally codebase:
 *   - dashboard    → features/home/.../home_screen.dart
 *   - chart        → features/analytics/.../analytics_screen.dart
 *   - transactions → features/transactions/.../transactions_screen.dart
 *
 * Brand and accent colors (hero gradient, income green, expense red,
 * brand blue/purple) stay constant, they look the same in both themes
 * in the real Flutter app. Surface, background and text colors swap
 * with the site theme via the existing CSS variables in globals.css.
 */

interface PhoneMockupProps {
  variant: "dashboard" | "chart" | "transactions";
  className?: string;
  featured?: boolean;
}

// ──────────────────────────────────────────────────────────────
// Brand / accent tokens, constant across themes
// (matched to lib/core/theme/app_colors.dart)
// ──────────────────────────────────────────────────────────────
const BRAND = {
  primaryBlue: "#4E6FD9",
  primaryPurple: "#6B5BC9",
  accentPink: "#E85D8A",
  accentOrange: "#E67A3D",
  accentGreen: "#00C98B",
  accentCyan: "#00B8D9",
  // Hero card gradient (hero_summary_card.dart)
  heroFrom: "#4B39EF",
  heroTo: "#2D3E85",
  income: "#00E676",
  expense: "#FF5252",
  onTrack: "#40C4FF",
};

// Theme-aware tokens, read from the site's CSS variables.
// These automatically switch when next-themes toggles the `.dark` class on <html>.
const TOKEN = {
  screen: "var(--mockup-screen)",
  shell: "var(--mockup-shell)",
  bezel: "var(--mockup-bezel)",
  island: "var(--mockup-island)",
  shellShadow: "var(--mockup-shell-shadow)",
  shellShadowFeatured: "var(--mockup-shell-shadow-featured)",
  surface: "var(--surface)",
  surfaceElevated: "var(--surface-elevated)",
  borderSubtle: "var(--border-subtle)",
  textPrimary: "var(--text-primary)",
  textSecondary: "var(--text-secondary)",
  textTertiary: "var(--text-tertiary)",
};

export default function PhoneMockup({
  variant,
  className = "",
  featured = false,
}: PhoneMockupProps) {
  return (
    <DeviceFrame className={className} featured={featured}>
      {variant === "dashboard" && <DashboardScreen />}
      {variant === "chart" && <AnalyticsScreen />}
      {variant === "transactions" && <TransactionsScreen />}
    </DeviceFrame>
  );
}

// ──────────────────────────────────────────────────────────────
// Device frame, iPhone-style outer shell.
// Shell stays dark in both themes (real iPhone bezels are black);
// the screen inside is what swaps light/dark.
// ──────────────────────────────────────────────────────────────
function DeviceFrame({
  children,
  className = "",
  featured = false,
}: {
  children: React.ReactNode;
  className?: string;
  featured?: boolean;
}) {
  return (
    <div
      role="img"
      aria-label="MonieTally mobile app preview"
      className={`relative ${className}`}
      style={{ aspectRatio: "9 / 19" }}
    >
      {/* Outer device shell, theme-aware (silver in light, black in dark) */}
      <div
        className="absolute inset-0 rounded-[2.2rem] p-[2px]"
        style={{
          background: TOKEN.shell,
          boxShadow: featured ? TOKEN.shellShadowFeatured : TOKEN.shellShadow,
        }}
      >
        {/* Inner bezel, theme-aware */}
        <div
          className="relative w-full h-full rounded-[2.05rem] overflow-hidden"
          style={{
            background: TOKEN.bezel,
            boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.04)",
          }}
        >
          {/* Screen, theme-aware background */}
          <div
            className="relative w-full h-full overflow-hidden"
            style={{ background: TOKEN.screen }}
          >
            {/* Dynamic island, theme-aware */}
            <div
              className="absolute left-1/2 -translate-x-1/2 rounded-full z-30"
              style={{
                top: "5px",
                width: "32%",
                height: "11px",
                background: TOKEN.island,
              }}
            />
            {/* Status bar, adapts to theme */}
            <StatusBar />
            {/* Screen content */}
            <div className="relative z-10 px-2 pt-1 pb-2 h-full">
              {children}
            </div>
            {/* Home indicator */}
            <div
              className="absolute left-1/2 -translate-x-1/2 rounded-full z-20"
              style={{
                bottom: "4px",
                width: "30%",
                height: "2.5px",
                background: TOKEN.textTertiary,
                opacity: 0.6,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function StatusBar() {
  // Status bar glyphs use textPrimary so they read on either theme.
  return (
    <div
      className="relative z-20 flex items-center justify-between px-4 pt-1.5 pb-1"
      style={{ color: TOKEN.textPrimary }}
    >
      <span className="text-[7px] font-semibold tracking-tight">9:41</span>
      <div className="flex items-center gap-[2px]">
        <svg width="7" height="5" viewBox="0 0 16 10" fill="currentColor">
          <rect x="0" y="7" width="2.5" height="3" rx="0.5" />
          <rect x="3.5" y="5" width="2.5" height="5" rx="0.5" />
          <rect x="7" y="3" width="2.5" height="7" rx="0.5" />
          <rect x="10.5" y="0" width="2.5" height="10" rx="0.5" />
        </svg>
        <svg width="7" height="5" viewBox="0 0 14 10" fill="none">
          <path
            d="M7 8.5a1 1 0 100-2 1 1 0 000 2zM3.6 5.4a4.8 4.8 0 016.8 0M.7 2.7a8.9 8.9 0 0112.6 0"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
        </svg>
        <div
          className="relative ml-[1px]"
          style={{
            width: "11px",
            height: "5.5px",
            border: "0.5px solid currentColor",
            borderRadius: "1.5px",
            opacity: 0.85,
          }}
        >
          <div
            className="absolute inset-[0.5px] rounded-[0.5px]"
            style={{ background: "currentColor", width: "75%" }}
          />
        </div>
      </div>
    </div>
  );
}

// ──────────────────────────────────────────────────────────────
// 1. Dashboard / Home screen
//    Mirrors features/home/presentation/screens/home_screen.dart
// ──────────────────────────────────────────────────────────────
function DashboardScreen() {
  return (
    <div className="px-1.5 pt-1 space-y-1.5">
      {/* Greeting */}
      <div>
        <p
          className="text-[8.5px] font-extrabold leading-tight"
          style={{ color: TOKEN.textPrimary }}
        >
          Good morning
        </p>
        <p
          className="text-[5.5px] mt-[1px]"
          style={{ color: TOKEN.textSecondary }}
        >
          Here is your financial overview
        </p>
      </div>

      {/* Hero summary card, same vivid gradient in both themes
          (matches HeroSummaryCard widget exactly) */}
      <div
        className="relative rounded-[10px] overflow-hidden p-2"
        style={{
          background: `linear-gradient(135deg, ${BRAND.heroFrom} 0%, ${BRAND.heroTo} 100%)`,
          boxShadow: "0 4px 14px -4px rgba(75,57,239,0.45)",
        }}
      >
        {/* Decorative circles */}
        <div
          className="absolute rounded-full"
          style={{
            top: "-18px",
            right: "-14px",
            width: "44px",
            height: "44px",
            background:
              "radial-gradient(circle, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.02) 70%)",
          }}
        />
        <div
          className="absolute rounded-full"
          style={{
            bottom: "-12px",
            left: "-8px",
            width: "30px",
            height: "30px",
            background: "rgba(255,255,255,0.06)",
          }}
        />
        {/* Top row */}
        <div className="relative flex items-start justify-between mb-1">
          <div className="flex items-center gap-1">
            <div
              className="rounded-[3px] flex items-center justify-center"
              style={{
                width: "10px",
                height: "10px",
                background: "rgba(255,255,255,0.15)",
              }}
            >
              <svg width="6" height="6" viewBox="0 0 24 24" fill="white">
                <path d="M21 8V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2h14a2 2 0 002-2v-2h-9a2 2 0 01-2-2v-4a2 2 0 012-2h9zm-9 2h10v4H12v-4zm3 1.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3z" />
              </svg>
            </div>
            <span
              className="text-[5px] font-medium"
              style={{ color: "rgba(255,255,255,0.8)" }}
            >
              Total Balance
            </span>
          </div>
          {/* On Track pill */}
          <div
            className="flex items-center gap-[2px] px-1 py-[1px] rounded-[4px]"
            style={{
              background: "rgba(255,255,255,0.12)",
              border: "0.5px solid rgba(255,255,255,0.18)",
            }}
          >
            <div
              className="rounded-full flex items-center justify-center"
              style={{
                width: "6px",
                height: "6px",
                background: `${BRAND.onTrack}33`,
              }}
            >
              <div
                className="rounded-full"
                style={{ width: "3px", height: "3px", background: BRAND.onTrack }}
              />
            </div>
            <span className="text-[4.5px] font-semibold text-white">
              On Track
            </span>
          </div>
        </div>
        {/* Balance number */}
        <p
          className="relative text-white font-extrabold tracking-tight leading-none"
          style={{ fontSize: "15px", letterSpacing: "-0.4px" }}
        >
          $12,458<span style={{ color: "rgba(255,255,255,0.65)" }}>.32</span>
        </p>
        {/* Mini stat row */}
        <div className="relative flex gap-1 mt-1.5">
          <MiniStat
            color={BRAND.income}
            label="Income"
            amount="$4,820"
            arrow="down"
          />
          <MiniStat
            color={BRAND.expense}
            label="Expense"
            amount="$2,361"
            arrow="up"
          />
        </div>
      </div>

      {/* Quick actions */}
      <div className="flex justify-between px-0.5 pt-0.5">
        <QuickAction icon="plus" color={BRAND.primaryBlue} label="Add" />
        <QuickAction icon="grid" color={BRAND.primaryPurple} label="Categories" />
        <QuickAction icon="savings" color={BRAND.accentGreen} label="Savings" />
        <QuickAction icon="pie" color={BRAND.accentOrange} label="Budgets" />
      </div>

      {/* Recent Activity header */}
      <div className="flex items-center justify-between px-0.5 pt-0.5">
        <p
          className="text-[6px] font-bold"
          style={{ color: TOKEN.textPrimary }}
        >
          Recent Activity
        </p>
        <p
          className="text-[4.5px] font-semibold"
          style={{ color: BRAND.primaryBlue }}
        >
          View all
        </p>
      </div>

      {/* Stacked transaction rows */}
      <div className="space-y-1 px-0.5">
        <TxRow color={BRAND.accentOrange} name="Coffee" sub="Today" amount="-$5" />
        <TxRow color={BRAND.accentGreen} name="Whole Foods" sub="Today" amount="-$48" />
        <TxRow color={BRAND.primaryBlue} name="Salary" sub="Yesterday" amount="+$1,240" positive />
      </div>
    </div>
  );
}

function MiniStat({
  color,
  label,
  amount,
  arrow,
}: {
  color: string;
  label: string;
  amount: string;
  arrow: "up" | "down";
}) {
  return (
    <div
      className="flex-1 flex items-center gap-1 rounded-[5px] p-1"
      style={{
        background: "rgba(0,0,0,0.18)",
        border: "0.5px solid rgba(255,255,255,0.08)",
      }}
    >
      <div
        className="rounded-[3px] flex items-center justify-center shrink-0"
        style={{
          width: "11px",
          height: "11px",
          background: `linear-gradient(135deg, ${color}, ${color}AA)`,
          boxShadow: `0 1px 3px ${color}55`,
        }}
      >
        <svg width="6" height="6" viewBox="0 0 24 24" fill="none">
          {arrow === "down" ? (
            <path d="M12 5v14m0 0l-6-6m6 6l6-6" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          ) : (
            <path d="M12 19V5m0 0l-6 6m6-6l6 6" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          )}
        </svg>
      </div>
      <div className="min-w-0 flex-1">
        <p
          className="text-[4px] font-medium leading-tight"
          style={{ color: "rgba(255,255,255,0.7)" }}
        >
          {label}
        </p>
        <p className="text-[6px] font-bold text-white leading-tight tabular-nums">
          {amount}
        </p>
      </div>
    </div>
  );
}

function QuickAction({
  icon,
  color,
  label,
}: {
  icon: "plus" | "grid" | "savings" | "pie";
  color: string;
  label: string;
}) {
  return (
    <div className="flex flex-col items-center gap-[2px]">
      <div
        className="rounded-full flex items-center justify-center"
        style={{
          width: "16px",
          height: "16px",
          background: `${color}1F`,
          border: `0.5px solid ${color}33`,
        }}
      >
        <svg width="7" height="7" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          {icon === "plus" && <path d="M12 5v14M5 12h14" />}
          {icon === "grid" && (
            <>
              <rect x="3" y="3" width="7" height="7" rx="1" />
              <rect x="14" y="3" width="7" height="7" rx="1" />
              <rect x="3" y="14" width="7" height="7" rx="1" />
              <rect x="14" y="14" width="7" height="7" rx="1" />
            </>
          )}
          {icon === "savings" && (
            <>
              <path d="M19 12a7 7 0 11-14 0 7 7 0 0114 0z" />
              <path d="M12 8v4l2 2" />
            </>
          )}
          {icon === "pie" && (
            <>
              <path d="M12 2v10l7 7A10 10 0 1112 2z" />
              <path d="M22 12A10 10 0 0012 2v10h10z" />
            </>
          )}
        </svg>
      </div>
      <span
        className="text-[4px] font-medium"
        style={{ color: TOKEN.textSecondary }}
      >
        {label}
      </span>
    </div>
  );
}

function TxRow({
  color,
  name,
  sub,
  amount,
  positive = false,
}: {
  color: string;
  name: string;
  sub: string;
  amount: string;
  positive?: boolean;
}) {
  return (
    <div
      className="flex items-center gap-1 rounded-[4px] p-1"
      style={{
        background: TOKEN.surfaceElevated,
        border: `0.5px solid ${TOKEN.borderSubtle}`,
      }}
    >
      <div
        className="rounded-[3px] flex items-center justify-center shrink-0"
        style={{
          width: "10px",
          height: "10px",
          background: `${color}26`,
        }}
      >
        <div
          className="rounded-[1.5px]"
          style={{ width: "4px", height: "4px", background: color }}
        />
      </div>
      <div className="flex-1 min-w-0">
        <p
          className="text-[5.5px] font-semibold leading-tight truncate"
          style={{ color: TOKEN.textPrimary }}
        >
          {name}
        </p>
        <p
          className="text-[4px] leading-tight"
          style={{ color: TOKEN.textTertiary }}
        >
          {sub}
        </p>
      </div>
      <span
        className="text-[5.5px] font-bold tabular-nums"
        style={{ color: positive ? BRAND.income : TOKEN.textPrimary }}
      >
        {amount}
      </span>
    </div>
  );
}

// ──────────────────────────────────────────────────────────────
// 2. Analytics / Insights screen
//    Mirrors features/analytics/.../analytics_screen.dart
// ──────────────────────────────────────────────────────────────
function AnalyticsScreen() {
  return (
    <div className="px-1.5 pt-1 space-y-1.5">
      <p
        className="text-[8.5px] font-extrabold"
        style={{ color: TOKEN.textPrimary }}
      >
        Insights
      </p>

      {/* Period pill selector */}
      <div className="flex gap-[3px]">
        {["Day", "Week", "Month", "Year"].map((p, i) => (
          <span
            key={p}
            className="text-[4.5px] font-semibold px-1.5 py-[2px] rounded-full"
            style={{
              background: i === 2 ? BRAND.primaryBlue : TOKEN.surfaceElevated,
              color: i === 2 ? "white" : TOKEN.textSecondary,
              border: i === 2 ? "none" : `0.5px solid ${TOKEN.borderSubtle}`,
            }}
          >
            {p}
          </span>
        ))}
      </div>

      {/* Insight callout card */}
      <div
        className="rounded-[6px] p-1.5 flex items-start gap-1"
        style={{
          background: `linear-gradient(135deg, ${BRAND.primaryPurple}26, ${BRAND.primaryBlue}10)`,
          border: `0.5px solid ${BRAND.primaryPurple}44`,
        }}
      >
        <div
          className="rounded-full flex items-center justify-center shrink-0 mt-[1px]"
          style={{
            width: "9px",
            height: "9px",
            background: BRAND.primaryPurple,
          }}
        >
          <svg width="5" height="5" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 18h6M10 22h4M12 2a7 7 0 00-4 12c1 1 1 2 1 3h6c0-1 0-2 1-3a7 7 0 00-4-12z" />
          </svg>
        </div>
        <div className="min-w-0 flex-1">
          <p
            className="text-[5.5px] font-bold leading-tight"
            style={{ color: TOKEN.textPrimary }}
          >
            You spent 12% less on dining
          </p>
          <p
            className="text-[4.5px] leading-tight mt-[1px]"
            style={{ color: TOKEN.textSecondary }}
          >
            Compared with last month
          </p>
        </div>
      </div>

      {/* Spending Trends */}
      <CompactChartCard title="Spending Trends" sub="$1,847 this month">
        <svg viewBox="0 0 200 56" className="w-full" preserveAspectRatio="none" style={{ height: "32px" }}>
          <defs>
            <linearGradient id="trend-fill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={BRAND.primaryBlue} stopOpacity="0.4" />
              <stop offset="100%" stopColor={BRAND.primaryBlue} stopOpacity="0" />
            </linearGradient>
            <linearGradient id="trend-line" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor={BRAND.primaryBlue} />
              <stop offset="100%" stopColor={BRAND.primaryPurple} />
            </linearGradient>
          </defs>
          <path
            d="M0,42 C20,36 35,46 55,32 C75,20 90,30 115,18 C135,8 155,22 175,14 C188,9 200,16 200,12 L200,56 L0,56 Z"
            fill="url(#trend-fill)"
          />
          <path
            d="M0,42 C20,36 35,46 55,32 C75,20 90,30 115,18 C135,8 155,22 175,14 C188,9 200,16 200,12"
            stroke="url(#trend-line)"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
          />
          <circle cx="175" cy="14" r="2" fill="white" stroke={BRAND.primaryBlue} strokeWidth="1" />
        </svg>
      </CompactChartCard>

      {/* Category Breakdown */}
      <CompactChartCard title="Category Breakdown">
        <div className="flex items-center gap-2">
          <svg width="40" height="40" viewBox="0 0 48 48">
            <circle cx="24" cy="24" r="17" fill="none" stroke={TOKEN.borderSubtle} strokeWidth="6" />
            <circle cx="24" cy="24" r="17" fill="none" stroke={BRAND.primaryBlue} strokeWidth="6" strokeDasharray="42 65" strokeDashoffset="0" strokeLinecap="round" transform="rotate(-90 24 24)" />
            <circle cx="24" cy="24" r="17" fill="none" stroke={BRAND.accentPink} strokeWidth="6" strokeDasharray="28 79" strokeDashoffset="-42" strokeLinecap="round" transform="rotate(-90 24 24)" />
            <circle cx="24" cy="24" r="17" fill="none" stroke={BRAND.accentGreen} strokeWidth="6" strokeDasharray="22 85" strokeDashoffset="-70" strokeLinecap="round" transform="rotate(-90 24 24)" />
            <circle cx="24" cy="24" r="17" fill="none" stroke={BRAND.accentOrange} strokeWidth="6" strokeDasharray="15 92" strokeDashoffset="-92" strokeLinecap="round" transform="rotate(-90 24 24)" />
          </svg>
          <div className="flex-1 space-y-[2px]">
            <Legend color={BRAND.primaryBlue} label="Food" pct="32%" />
            <Legend color={BRAND.accentPink} label="Transport" pct="22%" />
            <Legend color={BRAND.accentGreen} label="Bills" pct="17%" />
            <Legend color={BRAND.accentOrange} label="Other" pct="12%" />
          </div>
        </div>
      </CompactChartCard>
    </div>
  );
}

function CompactChartCard({
  title,
  sub,
  children,
}: {
  title: string;
  sub?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className="rounded-[6px] p-1.5"
      style={{
        background: TOKEN.surface,
        border: `0.5px solid ${TOKEN.borderSubtle}`,
      }}
    >
      <div className="flex items-baseline justify-between mb-1">
        <p
          className="text-[5.5px] font-bold"
          style={{ color: TOKEN.textPrimary }}
        >
          {title}
        </p>
        {sub && (
          <p
            className="text-[4.5px] tabular-nums"
            style={{ color: TOKEN.textSecondary }}
          >
            {sub}
          </p>
        )}
      </div>
      {children}
    </div>
  );
}

function Legend({
  color,
  label,
  pct,
}: {
  color: string;
  label: string;
  pct: string;
}) {
  return (
    <div className="flex items-center gap-1">
      <div
        className="rounded-full shrink-0"
        style={{ width: "4px", height: "4px", background: color }}
      />
      <span
        className="flex-1 text-[4.5px] font-medium"
        style={{ color: TOKEN.textPrimary }}
      >
        {label}
      </span>
      <span
        className="text-[4.5px] font-semibold tabular-nums"
        style={{ color: TOKEN.textSecondary }}
      >
        {pct}
      </span>
    </div>
  );
}

// ──────────────────────────────────────────────────────────────
// 3. Transactions screen
//    Mirrors features/transactions/.../transactions_screen.dart
// ──────────────────────────────────────────────────────────────
function TransactionsScreen() {
  return (
    <div className="px-1.5 pt-1 space-y-1.5">
      <div className="flex items-center justify-between">
        <p
          className="text-[8.5px] font-extrabold"
          style={{ color: TOKEN.textPrimary }}
        >
          Transactions
        </p>
        <div
          className="rounded-full flex items-center justify-center"
          style={{
            width: "12px",
            height: "12px",
            background: TOKEN.surfaceElevated,
            border: `0.5px solid ${TOKEN.borderSubtle}`,
          }}
        >
          <svg width="6" height="6" viewBox="0 0 24 24" fill="none" stroke={TOKEN.textSecondary} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="6" y1="12" x2="18" y2="12" />
            <line x1="9" y1="18" x2="15" y2="18" />
          </svg>
        </div>
      </div>

      {/* Search bar */}
      <div
        className="flex items-center gap-1 rounded-full px-1.5 py-1"
        style={{
          background: TOKEN.surface,
          border: `0.5px solid ${TOKEN.borderSubtle}`,
        }}
      >
        <svg width="6" height="6" viewBox="0 0 24 24" fill="none" stroke={TOKEN.textTertiary} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="7" />
          <path d="M20 20l-4.35-4.35" />
        </svg>
        <span
          className="text-[5px]"
          style={{ color: TOKEN.textTertiary }}
        >
          Search transactions
        </span>
      </div>

      {/* Month header */}
      <div className="flex items-center justify-between pt-0.5">
        <p
          className="text-[6px] font-bold"
          style={{ color: TOKEN.textPrimary }}
        >
          May 2026
        </p>
        <p
          className="text-[4.5px] tabular-nums"
          style={{ color: TOKEN.textSecondary }}
        >
          $1,847.12
        </p>
      </div>

      {/* Transactions */}
      <div className="space-y-1">
        <TxFullRow color={BRAND.accentOrange} icon="coffee" name="Blue Bottle" cat="Coffee · 9:14 AM" amount="-$5.40" />
        <TxFullRow color={BRAND.accentGreen} icon="cart" name="Whole Foods" cat="Groceries · 8:02 AM" amount="-$48.21" />
        <TxFullRow color={BRAND.primaryBlue} icon="bolt" name="Stripe payout" cat="Income · Yesterday" amount="+$1,240" positive />
        <TxFullRow color={BRAND.accentPink} icon="bus" name="MTA" cat="Transport · Yesterday" amount="-$2.90" />
        <TxFullRow color={BRAND.primaryPurple} icon="home" name="Rent" cat="Housing · 1 May" amount="-$1,850" />
      </div>
    </div>
  );
}

function TxFullRow({
  color,
  icon,
  name,
  cat,
  amount,
  positive = false,
}: {
  color: string;
  icon: "coffee" | "cart" | "bolt" | "bus" | "home";
  name: string;
  cat: string;
  amount: string;
  positive?: boolean;
}) {
  return (
    <div className="flex items-center gap-1.5 px-0.5">
      <div
        className="rounded-[4px] flex items-center justify-center shrink-0"
        style={{
          width: "12px",
          height: "12px",
          background: `${color}26`,
          border: `0.5px solid ${color}44`,
        }}
      >
        <svg width="6.5" height="6.5" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          {icon === "coffee" && (
            <>
              <path d="M3 8h13v5a5 5 0 01-5 5H8a5 5 0 01-5-5V8z" />
              <path d="M16 9h2a3 3 0 010 6h-2" />
              <path d="M6 4v2M10 4v2M14 4v2" />
            </>
          )}
          {icon === "cart" && (
            <>
              <circle cx="9" cy="20" r="1" />
              <circle cx="18" cy="20" r="1" />
              <path d="M3 3h2l2.4 11.4a2 2 0 002 1.6h9.2a2 2 0 002-1.6L22 7H6" />
            </>
          )}
          {icon === "bolt" && (
            <path d="M13 2L3 14h7l-1 8 11-14h-7l0-6z" />
          )}
          {icon === "bus" && (
            <>
              <rect x="4" y="3" width="16" height="14" rx="2" />
              <circle cx="8" cy="20" r="1.5" />
              <circle cx="16" cy="20" r="1.5" />
              <path d="M4 11h16M9 7h6" />
            </>
          )}
          {icon === "home" && (
            <path d="M3 12l9-9 9 9v9a2 2 0 01-2 2h-4v-7H9v7H5a2 2 0 01-2-2v-9z" />
          )}
        </svg>
      </div>
      <div className="flex-1 min-w-0">
        <p
          className="text-[5.5px] font-semibold leading-tight truncate"
          style={{ color: TOKEN.textPrimary }}
        >
          {name}
        </p>
        <p
          className="text-[4px] leading-tight truncate"
          style={{ color: TOKEN.textTertiary }}
        >
          {cat}
        </p>
      </div>
      <span
        className="text-[5.5px] font-bold tabular-nums"
        style={{ color: positive ? BRAND.income : TOKEN.textPrimary }}
      >
        {amount}
      </span>
    </div>
  );
}
