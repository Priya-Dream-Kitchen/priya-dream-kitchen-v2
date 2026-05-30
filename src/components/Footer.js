'use client';

export default function Footer() {
  const handleScrollTo = (e, targetId) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  return (
    <footer className="bg-[#1E1714] text-[#F5EFEB] border-t border-white/5 relative z-10">
      
      {/* Upper Footer Columns */}
      <div className="max-w-7xl mx-auto px-6 py-16 sm:py-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
        
        {/* Col 1: Brand & Bio */}
        <div className="space-y-6">
          <h3 className="font-serif font-bold text-xl sm:text-2xl text-primary tracking-wide">
            Priya Dream Kitchen
          </h3>
          <p className="text-text-muted text-sm leading-relaxed max-w-xs">
            Authentic traditional Sri Lankan cooking classes in Weligama. Learn the art of spices, curries, and hearth-side dining in a warm local family kitchen.
          </p>
        </div>

        {/* Col 2: Quick Links */}
        <div className="space-y-4">
          <h4 className="font-sans font-bold text-sm uppercase tracking-wider text-white">
            Quick Links
          </h4>
          <ul className="space-y-2.5 text-sm text-text-muted">
            <li>
              <a href="#home" onClick={(e) => handleScrollTo(e, 'home')} className="hover:text-primary transition-colors">
                Home / Hero
              </a>
            </li>
            <li>
              <a href="#about" onClick={(e) => handleScrollTo(e, 'about')} className="hover:text-primary transition-colors">
                About Us
              </a>
            </li>
            <li>
              <a href="#services" onClick={(e) => handleScrollTo(e, 'services')} className="hover:text-primary transition-colors">
                Our Services
              </a>
            </li>
            <li>
              <a href="#gallery" onClick={(e) => handleScrollTo(e, 'gallery')} className="hover:text-primary transition-colors">
                Photo Gallery
              </a>
            </li>
            <li>
              <a href="#menu" onClick={(e) => handleScrollTo(e, 'menu')} className="hover:text-primary transition-colors">
                Dishes Menu
              </a>
            </li>
          </ul>
        </div>

        {/* Col 3: Hours & Map */}
        <div className="space-y-4">
          <h4 className="font-sans font-bold text-sm uppercase tracking-wider text-white">
            Opening Hours
          </h4>
          <ul className="space-y-2 text-sm text-text-muted">
            <li className="flex justify-between max-w-[200px]">
              <span>Monday - Sunday:</span>
              <span className="text-accent font-medium">8 AM - 10 PM</span>
            </li>
            <li className="pt-2 text-xs italic">
              *Reservations are recommended at least 24 hours in advance.
            </li>
          </ul>
        </div>

        {/* Col 4: Contact & Socials */}
        <div className="space-y-4">
          <h4 className="font-sans font-bold text-sm uppercase tracking-wider text-white">
            Reach Out
          </h4>
          <ul className="space-y-3 text-sm text-text-muted">
            <li className="flex items-center gap-2">
              <span>📍</span>
              <span>Weligama, Sri Lanka</span>
            </li>
            <li className="flex items-center gap-2">
              <span>📞</span>
              <a href="tel:+94742417308" className="hover:text-primary transition-colors">
                +94 74 241 7308
              </a>
            </li>
            <li className="flex items-center gap-2">
              <span>💬</span>
              <a
                href="https://wa.me/94742417308"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                Whatsapp Chat
              </a>
            </li>
          </ul>
        </div>

      </div>

      {/* Lower Copyright Area */}
      <div className="border-t border-white/5 py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-text-muted">
          <p>© 2026 Priya Dream Kitchen. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="https://nimeshakalanka.github.io/Priya-Dream-Kitchen.github.io" className="hover:underline">
              Official Site
            </a>
            <span>•</span>
            <span className="text-accent">Made with love in Sri Lanka</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
