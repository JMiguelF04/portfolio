import type { Metadata } from "next";
import { Sora, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/LanguageContext";
import { getSiteData } from "@/lib/site-data";

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

export async function generateMetadata(): Promise<Metadata> {
  const siteData = await getSiteData();
  const title = `${siteData.profile.name} | ${siteData.profile.headlineEn}`;
  const description =
    siteData.content["hero.description"]?.en ??
    "Computer Engineering portfolio built with Next.js, Prisma and PostgreSQL.";

  return {
    title,
    description,
    keywords: [
      siteData.profile.name,
      "Developer",
      "Next.js",
      "TypeScript",
      "React",
      "Portfolio",
      "Prisma",
      "PostgreSQL",
    ],
    authors: [{ name: siteData.profile.name }],
    icons: {
      icon: "/newfavicon.png",
    },
    openGraph: {
      title,
      description,
      type: "website",
    },
  };
}

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
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
