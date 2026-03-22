import type { Metadata, Viewport } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Somil Sharma | Frontend Engineer",
  description:
    "Engineering-forward personal website for a frontend engineer focused on performance, systems thinking, and product craft.",
  keywords: [
    "Somil Sharma",
    "Frontend Engineer",
    "Next.js",
    "React",
    "TypeScript",
    "Portfolio",
  ],
  applicationName: "Somil Sharma Portfolio",
  creator: "Somil Sharma",
  authors: [{ name: "Somil Sharma" }],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Somil Sharma | Frontend Engineer",
    description:
      "Revenue-aware frontend engineering portfolio built with Next.js, React, and TypeScript.",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Somil Sharma | Frontend Engineer",
    description:
      "Frontend engineering portfolio focused on architecture, performance, and product impact.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#111111",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
