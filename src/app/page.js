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

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen relative overflow-hidden bg-bg text-text">
      {/* 1. Page Preloader */}
      <Preloader />

      {/* 2. Header & Sticky Navbar */}
      <Navbar />

      {/* 3. Subtle Parallax Watermark Background Images (scrolled down) */}
      <div className="absolute inset-0 pointer-events-none select-none z-0">
        {/* Left Side Watermark (Around About / Services area) */}
        <div 
          className="absolute top-[110vh] left-[-150px] md:left-[-100px] w-[350px] md:w-[500px] h-[350px] md:h-[500px] bg-no-repeat bg-contain opacity-[0.04] dark:opacity-[0.015] mix-blend-luminosity filter blur-[1px] transition-opacity duration-1000"
          style={{
            backgroundImage: "url('/images/spices-closeup.png')",
            backgroundPosition: "left center",
          }}
        />

        {/* Right Side Watermark (Around Menu / Reviews area) */}
        <div 
          className="absolute top-[280vh] right-[-150px] md:right-[-100px] w-[380px] md:w-[550px] h-[380px] md:h-[550px] bg-no-repeat bg-contain opacity-[0.04] dark:opacity-[0.015] mix-blend-luminosity filter blur-[1px] transition-opacity duration-1000"
          style={{
            backgroundImage: "url('/images/food-spread.png')",
            backgroundPosition: "right center",
          }}
        />

        {/* Left Side Watermark 2 (Around Booking area) */}
        <div 
          className="absolute top-[450vh] left-[-150px] md:left-[-80px] w-[320px] md:w-[450px] h-[320px] md:h-[450px] bg-no-repeat bg-contain opacity-[0.035] dark:opacity-[0.012] mix-blend-luminosity filter blur-[1.5px] transition-opacity duration-1000"
          style={{
            backgroundImage: "url('/images/srilankan-curries.png')",
            backgroundPosition: "left center",
          }}
        />
      </div>

      {/* 4. Main content sections */}
      <main className="flex-grow relative z-10">
        {/* Hero Banner Section */}
        <Hero />

        {/* Story Section */}
        <About />

        {/* Experience Services */}
        <Services />

        {/* Masonry Image Gallery */}
        <Gallery />

        {/* Experience Dishes & Pricing Menu */}
        <Menu />

        {/* Customer Reviews & Slider */}
        <Reviews />

        {/* Reservation / Booking Form */}
        <Booking />
      </main>

      {/* 5. Footer and Map Details */}
      <Footer />
    </div>
  );
}
