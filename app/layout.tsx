import type { Metadata } from "next";
import { Sora, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Jorge Ferreira | Junior Developer",
  description: "Portfolio de Jorge Ferreira - Desenvolvedor Júnior especializado em Next.js, TypeScript, UX/UI Design e desenvolvimento de APIs.",
  keywords: ["Jorge Ferreira", "Developer", "Next.js", "TypeScript", "React", "Portfolio"],
  authors: [{ name: "Jorge Ferreira" }],
  openGraph: {
    title: "Jorge Ferreira | Junior Developer",
    description: "Portfolio de Jorge Ferreira - Desenvolvedor Júnior",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt" className="scroll-smooth">
      <body
        className={`${sora.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
