"use client";

import { useCallback, useState } from "react";
import { Toast } from "./Toast";

export function WaitlistForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [toastVisible, setToastVisible] = useState(false);
  const dismissToast = useCallback(() => setToastVisible(false), []);

  const cardStyle: React.CSSProperties = {
    flex: "1 1 320px",
    minWidth: 280,
    maxWidth: 440,
    padding: "clamp(22px,3vw,30px)",
    border: "1px solid #dee9e9",
    borderRadius: 14,
    background: "#fff",
    boxShadow: "0 18px 44px -28px rgba(15,45,35,.25)",
  };

  if (submitted) {
    return (
      <>
        <div style={cardStyle}>
          <div style={{ display: "flex", flexDirection: "column", gap: 13 }}>
            <span
              style={{
                width: 34,
                height: 34,
                borderRadius: 9,
                background: "#e4f3f0",
                color: "#00705f",
                display: "grid",
                placeItems: "center",
                font: "500 15px/1 var(--font-dm-sans),sans-serif",
              }}
            >
              ✓
            </span>
            <div style={{ font: "600 19px/1.3 var(--font-outfit),sans-serif" }}>You&apos;re on the early-access list.</div>
            <div style={{ font: "400 14.5px/1.6 var(--font-dm-sans),sans-serif", color: "#4c5a55" }}>
              We&apos;ll email you when the first labs are ready to try. No other mail.
            </div>
          </div>
        </div>
        <Toast message="You're on the early-access list." visible={toastVisible} onDismiss={dismissToast} />
      </>
    );
  }

  return (
    <div style={cardStyle}>
      <div
        style={{
          font: "500 10.5px/1 var(--font-jetbrains-mono),monospace",
          letterSpacing: ".12em",
          color: "#5f6b66",
          marginBottom: 20,
        }}
      >
        JOIN THE WAITLIST
      </div>
      <form
        style={{ display: "flex", flexDirection: "column", gap: 15 }}
        onSubmit={async (e) => {
          e.preventDefault();
          setError(null);
          setSubmitting(true);
          try {
            const res = await fetch("/api/waitlist", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ name, email }),
            });
            if (!res.ok) {
              const data = await res.json().catch(() => null);
              throw new Error(data?.error ?? "request_failed");
            }
            setSubmitted(true);
            setToastVisible(true);
          } catch {
            setError("Something went wrong. Please try again in a moment.");
          } finally {
            setSubmitting(false);
          }
        }}
      >
        <label style={{ display: "flex", flexDirection: "column", gap: 7 }}>
          <span style={{ font: "500 12.5px/1 var(--font-dm-sans),sans-serif", color: "#3c4a45" }}>Name</span>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            className="focus-border"
            style={{
              padding: "12px 13px",
              border: "1px solid #dde8e8",
              borderRadius: 9,
              background: "#f9fcfc",
              color: "#0f1513",
              font: "400 14.5px/1.2 var(--font-dm-sans),sans-serif",
              outline: "none",
              width: "100%",
            }}
          />
        </label>
        <label style={{ display: "flex", flexDirection: "column", gap: 7 }}>
          <span style={{ font: "500 12.5px/1 var(--font-dm-sans),sans-serif", color: "#3c4a45" }}>Email</span>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@company.com"
            className="focus-border"
            style={{
              padding: "12px 13px",
              border: "1px solid #dde8e8",
              borderRadius: 9,
              background: "#f9fcfc",
              color: "#0f1513",
              font: "400 14.5px/1.2 var(--font-dm-sans),sans-serif",
              outline: "none",
              width: "100%",
            }}
          />
        </label>
        <button
          type="submit"
          disabled={submitting}
          className="hover-dark"
          style={{
            marginTop: 4,
            padding: "13px 18px",
            border: "none",
            borderRadius: 9,
            background: "#008a76",
            color: "#fff",
            font: "600 15px/1 var(--font-dm-sans),sans-serif",
            cursor: submitting ? "default" : "pointer",
            opacity: submitting ? 0.7 : 1,
          }}
        >
          {submitting ? "Joining…" : "Join Early Access →"}
        </button>
        {error && (
          <div style={{ font: "500 12.5px/1.4 var(--font-dm-sans),sans-serif", color: "#a5493c" }}>{error}</div>
        )}
        <div style={{ font: "400 11.5px/1.5 var(--font-jetbrains-mono),monospace", color: "#5f6b66" }}>
          We&apos;ll only use your email for launch updates.
        </div>
      </form>
    </div>
  );
}
