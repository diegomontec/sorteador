import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Missões",
  description: "App de sorteio de missões",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
