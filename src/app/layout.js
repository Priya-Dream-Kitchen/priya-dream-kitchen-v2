import { Playfair_Display_SC, Karla } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../components/ThemeContext";

const playfair = Playfair_Display_SC({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "700"],
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
        url: "/images/hero-cooking.png",
        width: 1200,
        height: 630,
        alt: "Priya Dream Kitchen Cooking Experience",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfair.variable} ${karla.variable} h-full`} data-theme="dark" suppressHydrationWarning>
      <body className="min-h-full font-sans antialiased">
        <ThemeProvider>
          <div className="grain-overlay" />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
