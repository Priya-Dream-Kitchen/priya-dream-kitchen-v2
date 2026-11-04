import Preloader from "../components/Preloader";
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

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen relative bg-bg text-text">
      {/* 1. Page Preloader */}
      <Preloader />

      {/* 2. Header & Sticky Navbar */}
      <Navbar />

      {/* 3. Main content sections */}
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

      {/* 4. Footer and Map Details */}
      <Footer />

      {/* 5. Floating WhatsApp shortcut */}
      <WhatsAppButton />
    </div>
  );
}
