import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="border-t"
      style={{
        background: "var(--bg-secondary)",
        borderColor: "var(--border-subtle)",
      }}
    >
      <div className="section-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-card-blue flex items-center justify-center">
                <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                </svg>
              </div>
              <span className="text-lg font-semibold tracking-tight" style={{ color: "var(--text-primary)" }}>
                MonieTally
              </span>
            </div>
            <p className="text-sm max-w-xs leading-relaxed" style={{ color: "var(--text-tertiary)" }}>
              A finance app that forgets you the moment you close it. Your
              money lives on your phone. Not in our database. Not in an ad
              algorithm. Not for sale.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-medium mb-3" style={{ color: "var(--text-primary)" }}>
              Product
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/#features" className="text-sm transition-colors hover:text-brand-blue" style={{ color: "var(--text-secondary)" }}>
                  Features
                </Link>
              </li>
              <li>
                <Link href="/#privacy" className="text-sm transition-colors hover:text-brand-blue" style={{ color: "var(--text-secondary)" }}>
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="/#waitlist" className="text-sm transition-colors hover:text-brand-blue" style={{ color: "var(--text-secondary)" }}>
                  Waitlist
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-3" style={{ color: "var(--text-primary)" }}>
              Company
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm transition-colors hover:text-brand-blue" style={{ color: "var(--text-secondary)" }}>
                  About
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-sm transition-colors hover:text-brand-blue" style={{ color: "var(--text-secondary)" }}>
                  Privacy policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm transition-colors hover:text-brand-blue" style={{ color: "var(--text-secondary)" }}>
                  Terms of service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 border-t"
          style={{ borderColor: "var(--border-subtle)" }}
        >
          <p className="text-xs" style={{ color: "var(--text-tertiary)" }}>
            &copy; {currentYear} MonieTally. All rights reserved.
          </p>
          <p className="text-xs" style={{ color: "var(--text-tertiary)" }}>
            Built for people who&apos;d rather not be the product.
          </p>
        </div>
      </div>
    </footer>
  );
}
