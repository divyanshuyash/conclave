import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Chanakya Conclave 2026 | Shobhit Singhal",
  description:
    "Chanakya Conclave 2026 is The Transformers Hub's exclusive members-only recognition and networking event at Hyatt Centric Hebbal Bengaluru."
};

export const viewport: Viewport = {
  themeColor: "#0B0B0B",
  width: "device-width",
  initialScale: 1
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
