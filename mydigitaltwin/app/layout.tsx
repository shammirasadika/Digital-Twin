import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Digital Twin - AI Professional Profile",
  description: "AI-Powered Professional Profile Assistant using RAG technology",
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
