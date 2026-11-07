import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Gallery from "../components/Gallery";
import Menu from "../components/Menu";
import Reviews from "../components/Reviews";
import Booking from "../components/Booking";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import { siteUrl, siteName, siteDescription } from "../lib/site";

// Structured data so Google can show the business (hours, phone, location)
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": `${siteUrl}/#business`,
      name: siteName,
      description: siteDescription,
      url: `${siteUrl}/`,
      logo: `${siteUrl}/images/logo.png`,
      image: [
        `${siteUrl}/images/og-garden-kitchen.jpg`,
        `${siteUrl}/images/kitchen/priya-scraping-coconut.webp`,
        `${siteUrl}/images/kitchen/feast-table.webp`,
      ],
      telephone: "+94742417308",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Weligama",
        addressCountry: "LK",
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          opens: "08:00",
          closes: "22:00",
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: `${siteUrl}/`,
      name: siteName,
      publisher: { "@id": `${siteUrl}/#business` },
    },
  ],
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen relative bg-bg text-text">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />

      {/* 1. Header & Sticky Navbar */}
      <Navbar />

      {/* 2. Main content sections */}
      <main className="flex-grow">
        {/* Hero Banner Section */}
        <Hero />

        {/* Story Section */}
        <About />

        {/* The Class, step by step */}
        <Services />

        {/* Experience Dishes & Pricing Menu */}
        <Menu />

        {/* Filterable Photo Gallery */}
        <Gallery />

        {/* Customer Reviews & Slider */}
        <Reviews />

        {/* Reservation / Booking Form */}
        <Booking />
      </main>

      {/* 3. Footer and Map Details */}
      <Footer />

      {/* 4. Floating WhatsApp shortcut */}
      <WhatsAppButton />
    </div>
  );
}
