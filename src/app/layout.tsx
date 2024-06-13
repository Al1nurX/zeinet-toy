import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nazira Uzatu",
  description: "kyz uzatu",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[url('/all-bg.jpg')] bg-fixed">{children}</body>
    </html>
  );
}
