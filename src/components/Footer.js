const links = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About Us' },
  { id: 'services', label: 'The Class' },
  { id: 'gallery', label: 'Photo Gallery' },
  { id: 'menu', label: 'Dishes Menu' },
  { id: 'reviews', label: 'Guest Reviews' },
  { id: 'booking', label: 'Book a Cooking Class' },
];

export default function Footer() {
  return (
    <footer className="bg-bark text-cream relative z-10">
      <div className="batik-strip" />

      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 pt-16 sm:pt-24">
        {/* Wordmark */}
        <p className="display text-[clamp(2.75rem,10.5vw,10rem)] !leading-none">
          Every meal is a <em className="text-marigold font-normal">memory</em>
        </p>

        {/* Columns */}
        <div className="mt-14 sm:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <h2 className="font-serif text-xl text-marigold">Priya Dream Kitchen</h2>
            <p className="mt-3 text-cream/75 leading-relaxed max-w-xs">
              Authentic traditional Sri Lankan cooking classes in Weligama. Learn the art of spices, curries, and hearth-side dining in a warm local family kitchen.
            </p>
          </div>

          <div>
            <h2 className="font-bold">Quick Links</h2>
            <ul className="mt-3 text-cream/75">
              {links.map((link) => (
                <li key={link.id}>
                  <a href={`#${link.id}`} className="inline-block py-1 hover:text-marigold transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-bold">Opening Hours</h2>
            <p className="mt-3 text-cream/75">
              Monday - Sunday: <span className="text-marigold">8 AM - 10 PM</span>
            </p>
            <p className="mt-2 text-sm text-cream/75">
              *Reservations are recommended at least 24 hours in advance.
            </p>
          </div>

          <div>
            <h2 className="font-bold">Reach Out</h2>
            <ul className="mt-3 text-cream/75">
              <li className="py-1">Weligama, Sri Lanka</li>
              <li>
                <a href="tel:+94742417308" className="inline-block py-1 hover:text-marigold transition-colors">
                  +94 74 241 7308
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/94742417308"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block py-1 hover:text-marigold transition-colors"
                >
                  Whatsapp Chat
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Lower Copyright Area */}
      <div className="mt-14 border-t border-cream/15 py-6">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-cream/75">
          <p>© 2026 Priya Dream Kitchen. All rights reserved.</p>
          <p>
            Made by <a href="https://nimeshakalanka.dev" className="underline hover:text-marigold">Nimesh Akalanka</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
