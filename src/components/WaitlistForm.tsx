"use client";

import { useState, FormEvent } from "react";
import { submitWaitlist, type WaitlistSource } from "@/app/actions/waitlist";

interface WaitlistFormProps {
  source?: WaitlistSource;
}

type Status = "idle" | "loading" | "success" | "duplicate" | "error";

export default function WaitlistForm({ source = "hero" }: WaitlistFormProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!email || status === "loading") return;

    setStatus("loading");
    const result = await submitWaitlist(email, source);

    if (result.success) {
      setStatus("success");
      setEmail("");
    } else if (result.error === "duplicate") {
      setStatus("duplicate");
    } else {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div
        role="status"
        className="flex items-center gap-2 px-4 py-3 rounded-xl"
        style={{ background: "rgba(0, 201, 139, 0.1)", border: "1px solid rgba(0, 201, 139, 0.2)" }}
      >
        <svg
          aria-hidden="true"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#00C98B"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
        <span className="text-sm font-medium" style={{ color: "#00C98B" }}>
          You&apos;re on the list! We&apos;ll be in touch.
        </span>
      </div>
    );
  }

  return (
    <div className="w-full max-w-md space-y-2">
      <form onSubmit={handleSubmit} className="flex gap-3 w-full">
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          aria-label="Email address"
          required
          disabled={status === "loading"}
          className="flex-1 px-4 py-3 min-h-[44px] rounded-xl text-sm outline-none transition-all duration-200 focus:ring-2 focus:ring-brand-blue/40 disabled:opacity-60"
          style={{
            background: "var(--surface)",
            border: "1px solid var(--border)",
            color: "var(--text-primary)",
          }}
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="btn-primary whitespace-nowrap disabled:opacity-60 min-h-[44px]"
        >
          {status === "loading" ? (
            <>
              <svg
                aria-hidden="true"
                className="animate-spin h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
              >
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              <span className="sr-only">Submitting…</span>
            </>
          ) : (
            "Get early access"
          )}
        </button>
      </form>

      {status === "error" && (
        <p role="alert" className="text-xs" style={{ color: "var(--accent-pink)" }}>
          Something went wrong. Please try again.
        </p>
      )}
      {status === "duplicate" && (
        <p role="alert" className="text-xs" style={{ color: "var(--text-secondary)" }}>
          This email is already on the list.
        </p>
      )}
    </div>
  );
}
