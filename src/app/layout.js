import { Fraunces, Karla } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../components/ThemeContext";

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
  title: "Priya Dream Kitchen | Traditional Sri Lankan Cooking Class Weligama",
  description: "Discover the soul of traditional cooking at Priya Dream Kitchen in Weligama, Sri Lanka. Learn authentic recipes, use local spices, cook and eat with expert chefs.",
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
    title: "Priya Dream Kitchen | Traditional Sri Lankan Cooking Class",
    description: "Discover the soul of traditional cooking at Priya Dream Kitchen, Weligama. Cook, taste, and enjoy authentic homemade dishes.",
    url: "https://nimeshakalanka.github.io/Priya-Dream-Kitchen.github.io",
    siteName: "Priya Dream Kitchen",
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
