import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Documentation Viewer MVP",
  description: "A simple documentation viewer with markdown support",
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
