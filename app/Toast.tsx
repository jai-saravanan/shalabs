"use client";

import { useEffect } from "react";

interface ToastProps {
  message: string;
  visible: boolean;
  onDismiss: () => void;
}

export function Toast({ message, visible, onDismiss }: ToastProps) {
  useEffect(() => {
    if (!visible) return;
    const timer = setTimeout(onDismiss, 4000);
    return () => clearTimeout(timer);
  }, [visible, onDismiss]);

  if (!visible) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      style={{
        position: "fixed",
        top: 24,
        right: 24,
        zIndex: 100,
        display: "flex",
        alignItems: "center",
        gap: 11,
        padding: "14px 18px",
        borderRadius: 12,
        background: "#0d1512",
        color: "#fff",
        boxShadow: "0 18px 44px -20px rgba(0,0,0,.45)",
        font: "500 13.5px/1.4 var(--font-dm-sans),sans-serif",
        maxWidth: 340,
        animation: "toastIn .25s ease-out",
      }}
    >
      <span
        style={{
          flex: "none",
          width: 22,
          height: 22,
          borderRadius: "50%",
          background: "#008a76",
          display: "grid",
          placeItems: "center",
          fontSize: 12,
        }}
      >
        ✓
      </span>
      {message}
    </div>
  );
}
