import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/context/ThemeProvider";
import { Analytics } from "@vercel/analytics/react"

import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Buddhadeb Koner | FullStack Web Developer",
  description:
    "Discover the personal portfolio of Buddhadeb Koner – a creative FullStack Web Developer producing great software.",
  openGraph: {
    title: "Buddhadeb Koner | FullStack Web Developer",
    description:
      "Discover the personal portfolio of Buddhadeb Koner – a creative FullStack Web Developer producing great software.",
    url: "https://buddhadebkoner.vercel.app/",
    siteName: "Buddhadeb Koner",
    images: [
      {
        url: "https://res.cloudinary.com/dsfztnp9x/image/upload/v1739285469/next-portfolio/xyxj8fdggwypdx2bwdnp.png",
        width: 1200,
        height: 630,
        alt: "Buddhadeb Koner",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Buddhadeb Koner | FullStack Web Developer",
    description:
      "Discover the personal portfolio of Buddhadeb Koner – a creative FullStack Web Developer producing great software.",
    images: "https://res.cloudinary.com/dsfztnp9x/image/upload/v1739285469/next-portfolio/xyxj8fdggwypdx2bwdnp.png",
  },
  alternates: {
    canonical: "https://buddhadebkoner.vercel.app/",
  },
  verification: {
    google: "tIuTbVILH-G_9w4nWpFt1f6Ic9oaKmSLhbReePTbMCA",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Buddhadeb Koner",
              "url": "https://buddhadebkoner.vercel.app/",
              "sameAs": [
                "https://github.com/BuddhadebKoner",
                "https://x.com/buddhadeb_koner",
                "https://www.linkedin.com/in/buddhadeb-koner/",
                "https://www.instagram.com/buddhadeb_koner/",
                "https://www.facebook.com/jeet.koner.36",
                "https://peerlist.io/buddhadeb"
              ],
            }),
          }}
        />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <Navbar />
          <section className="z-10">{children}</section>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
