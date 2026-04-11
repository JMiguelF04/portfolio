import type { Metadata } from "next";
import { Instrument_Serif, DM_Sans } from "next/font/google";
import "./globals.css";
import { getSiteData } from "@/lib/site-data";

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
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
    <html lang="en" className="scroll-smooth">
      <body
        className={`${instrumentSerif.variable} ${dmSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
