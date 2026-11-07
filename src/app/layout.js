import { Fraunces, Karla } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../components/ThemeContext";
import { siteUrl, siteName, siteTitle, siteDescription } from "../lib/site";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const karla = Karla({
  variable: "--font-karla",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: siteDescription,
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  keywords: [
    "cooking class Weligama",
    "Sri Lankan cooking class",
    "traditional food Sri Lanka",
    "Priya Dream Kitchen",
    "lessons and workshop Weligama",
    "cooking lessons Weligama",
    "Weligama activities",
    "Sri Lankan curry recipe",
  ].join(", "),
  icons: {
    icon: "/images/logo.png",
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: "/",
    siteName,
    images: [
      {
        url: "/images/og-garden-kitchen.jpg",
        width: 1200,
        height: 630,
        alt: "The garden kitchen at Priya Dream Kitchen, Weligama",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/images/og-garden-kitchen.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${karla.variable} h-full`} data-theme="light" suppressHydrationWarning>
      <body className="min-h-full font-sans antialiased">
        <ThemeProvider>
          <div className="grain-overlay" />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
