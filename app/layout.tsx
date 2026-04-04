import type { Metadata, Viewport } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Somil Sharma | Frontend Engineer | React, Next.js, TypeScript",
  description:
    "Somil Sharma is a frontend engineer in Gurgaon building fast web products with React, Next.js, TypeScript, HTML, and CSS. Open to strong frontend roles and product-focused teams.",
  keywords: [
    "Somil Sharma",
    "Frontend Engineer",
    "Frontend Developer",
    "React Developer",
    "Next.js",
    "React",
    "TypeScript",
    "HTML",
    "CSS",
    "Web Performance",
    "Technical SEO",
    "Frontend Engineer for hire",
    "React frontend engineer",
    "Next.js frontend engineer",
    "TypeScript frontend developer",
    "Portfolio",
  ],
  applicationName: "Somil Sharma Portfolio",
  creator: "Somil Sharma",
  authors: [{ name: "Somil Sharma" }],
  category: "technology",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Somil Sharma | Frontend Engineer | React, Next.js, TypeScript",
    description:
      "Frontend engineer building fast, polished web products with React, Next.js, TypeScript, HTML, and CSS.",
    type: "website",
    locale: "en_IN",
    siteName: "Somil Sharma Portfolio",
  },
  twitter: {
    card: "summary",
    title: "Somil Sharma | Frontend Engineer | React, Next.js, TypeScript",
    description:
      "Frontend engineer building fast, polished web products with React, Next.js, TypeScript, HTML, and CSS.",
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
