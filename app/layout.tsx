import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Saro",
  description: "Saro - Application de suivi de l'élève",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="">{children}</body>
    </html>
  );
}
