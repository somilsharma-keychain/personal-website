import type { Metadata, Viewport } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Somil Sharma | Frontend Engineer",
  description:
    "A BITS Pilani graduate working as a frontend engineer at Keychain.",
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
      "A BITS Pilani graduate working as a frontend engineer at Keychain.",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Somil Sharma | Frontend Engineer",
    description:
      "A BITS Pilani graduate working as a frontend engineer at Keychain.",
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
