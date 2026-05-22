"use client";
import "./globals.css";
import { useEffect, useState } from "react";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setDark(window.matchMedia("(prefers-color-scheme: dark)").matches);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>LegalOS</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans">
        {/* 🌙 Dark mode toggle */}
        <button
          onClick={() => setDark((d) => !d)}
          aria-label="Toggle dark mode"
          className="fixed top-4 right-4 z-50 w-10 h-10 rounded-full
            bg-white/80 dark:bg-slate-800/80 backdrop-blur
            border border-slate-200 dark:border-white/10
            flex items-center justify-center shadow-md
            hover:scale-110 transition-transform"
        >
          {dark ? "☀️" : "🌙"}
        </button>
        {children}
      </body>
    </html>
  );
}