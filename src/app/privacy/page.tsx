import type { Metadata } from "next";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | Traccia",
  description:
    "Traccia's privacy policy. Learn how we handle your data. The short answer: we mostly don't.",
};

const sections = [
  {
    id: "introduction",
    title: "1. Introduction",
    content: `Traccia ("we", "our", "the app") is a privacy-first personal finance application. This Privacy Policy explains how we handle information in connection with the Traccia app and this website (traccia.app).

Effective date: April 30, 2026.

Our core principle: Traccia is built so that your financial data never leaves your device. The app does not collect, transmit, or store personal financial data on our servers. We never receive it.`,
  },
  {
    id: "what-we-collect",
    title: "2. Information we collect",
    content: `Website only: If you submit your email address via our waitlist form, we receive and store that email address to notify you when Traccia launches. We use Formspree to process this submission — see their privacy policy at formspree.io.

The app: Traccia does not collect any personal data from app users. All financial data (transactions, balances, budgets, and analytics) is stored exclusively on your device, encrypted with AES-256. We have no access to it.`,
  },
  {
    id: "how-we-use",
    title: "3. How we use information",
    content: `Waitlist emails are used solely to send you a launch notification. We will not send marketing emails, share your address with third parties, or contact you for any other reason without your explicit consent.

App data is never used by us — because we never have it.`,
  },
  {
    id: "data-storage",
    title: "4. Data storage",
    content: `App data: All financial data is stored locally on your device using AES-256 encryption. It is never transmitted to our servers or any third-party server, except for the initial read via your bank aggregator (see Section 6).

Waitlist emails: Stored securely via Formspree. We do not maintain our own email database.`,
  },
  {
    id: "third-party",
    title: "5. Third-party services",
    content: `Traccia integrates with the following bank aggregation providers to sync transactions. Each provider has their own privacy policy:

• Plaid (North America): plaid.com/legal/privacy-statement
• Tink (Europe): tink.com/privacy-policy
• Mono (Africa): mono.co/legal/privacy-policy

These providers operate under their respective terms. Traccia uses them only to fetch transaction data, which is then immediately stored on your device. We do not retain copies.`,
  },
  {
    id: "bank-sync",
    title: "6. Bank sync data flow",
    content: `When you connect a bank account, the following happens:

1. You authenticate with your bank via the aggregator's secure flow (Plaid, Tink, or Mono). Your bank credentials are never seen or stored by Traccia.
2. The aggregator returns an access token and your recent transactions to the app.
3. The app stores this data locally on your device — encrypted, never transmitted.
4. Subsequent syncs follow the same pattern: aggregator → app → on-device storage only.

Traccia acts as a relay from aggregator to device. We do not sit in the middle, log transactions, or maintain a copy.`,
  },
  {
    id: "cookies",
    title: "7. Cookies",
    content: `This website does not use cookies or any client-side tracking technology. We do not run analytics, ad tracking, or session recording on traccia.app.`,
  },
  {
    id: "childrens-privacy",
    title: "8. Children's privacy",
    content: `Traccia is not directed at children under 13. We do not knowingly collect information from children. If you believe a child has submitted their email to our waitlist, please contact us and we will delete it promptly.`,
  },
  {
    id: "changes",
    title: "9. Changes to this policy",
    content: `If we make material changes to this policy, we will update the effective date at the top of this page. For significant changes, we will notify waitlist subscribers by email.`,
  },
  {
    id: "contact",
    title: "10. Contact",
    content: `Questions about this policy? Email us at hello@traccia.app.`,
  },
];

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="py-16 md:py-24">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            {/* Header */}
            <div className="mb-12">
              <h1
                className="text-4xl font-bold tracking-tight mb-3"
                style={{ color: "var(--text-primary)" }}
              >
                Privacy Policy
              </h1>
              <p className="text-sm" style={{ color: "var(--text-tertiary)" }}>
                Effective date: April 30, 2026
              </p>
            </div>

            {/* Table of contents */}
            <div
              className="surface-card p-6 mb-12"
              style={{ boxShadow: "var(--shadow-sm)" }}
            >
              <h2
                className="text-sm font-semibold mb-4"
                style={{ color: "var(--text-primary)" }}
              >
                Contents
              </h2>
              <ol className="space-y-2">
                {sections.map((s) => (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      className="text-sm transition-colors hover:text-brand-blue"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {s.title}
                    </a>
                  </li>
                ))}
              </ol>
            </div>

            {/* Sections */}
            <div className="space-y-10">
              {sections.map((s) => (
                <div key={s.id} id={s.id}>
                  <h2
                    className="text-lg font-semibold mb-3"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {s.title}
                  </h2>
                  <div
                    className="text-sm leading-relaxed whitespace-pre-line"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {s.content}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
