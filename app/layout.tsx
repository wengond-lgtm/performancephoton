import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Performance Photon | Light for what's next",
  description: "Explore Performance Photon horticultural lighting. Indoor, under-canopy and greenhouse lighting, with research, engineering and production at the core.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
