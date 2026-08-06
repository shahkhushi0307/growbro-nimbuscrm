import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NimbusCRM",
  description:
    "A CRM built for small business owners who live on WhatsApp.",
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
