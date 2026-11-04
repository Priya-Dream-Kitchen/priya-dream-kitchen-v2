import Image from 'next/image';

const ribbon = ['Ayubowan', 'Grind the spices', 'Scrape the coconut', 'Fire the clay pot', 'Share the feast'];

export default function Hero() {
  return (
    <>
      <section id="home" className="relative overflow-hidden pt-28 pb-14 lg:pt-32 lg:pb-20">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Copy */}
          <div className="lg:col-span-6 relative z-10">
            <p className="eyebrow animate-rise" style={{ animationDelay: '500ms' }}>
              Cooking classes in Weligama
            </p>

            <h1
              className="display mt-6 text-[clamp(3.6rem,min(10vw,14.5vh),8.75rem)] !leading-[0.94] animate-rise"
              style={{ animationDelay: '600ms' }}
            >
              Priya <em className="text-accent font-normal">Dream</em>
              <br />
              Kitchen
            </h1>

            <p
              className="mt-7 max-w-lg text-lg sm:text-xl leading-relaxed text-text-muted animate-rise"
              style={{ animationDelay: '750ms' }}
            >
              Discover the soul of traditional cooking. Cook, taste, and enjoy authentic homemade
              dishes while exploring rich flavors, spices, and cultural stories. Every meal is a memory.
            </p>

            <div
              className="mt-9 flex flex-col sm:flex-row sm:items-center gap-3 animate-rise"
              style={{ animationDelay: '900ms' }}
            >
              <a href="#booking" className="btn btn-primary">
                Book Your Experience
                <svg className="btn-arrow w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a href="#menu" className="btn btn-outline">
                Explore Menu
              </a>
            </div>

            <dl
              className="mt-10 pt-6 border-t border-border-color grid grid-cols-2 gap-4 max-w-sm animate-rise"
              style={{ animationDelay: '1050ms' }}
            >
              {[
                ['5 ★', 'on Google'],
                ['8 AM – 10 PM', 'every day'],
              ].map(([value, label]) => (
                <div key={label}>
                  <dt className="sr-only">{label}</dt>
                  <dd className="font-serif text-base sm:text-xl font-medium whitespace-nowrap">{value}</dd>
                  <dd className="text-sm text-text-muted">{label}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Hearth arches */}
          <div className="lg:col-span-6 relative animate-rise" style={{ animationDelay: '700ms' }}>
            {/* Setting sun behind the hearth */}
            <div
              className="absolute right-[-12%] top-[-6%] w-[78%] aspect-square rounded-full bg-[radial-gradient(circle_at_40%_40%,var(--marigold),var(--primary))] opacity-30"
              aria-hidden="true"
            />
            <div className="relative ml-auto w-[76%] aspect-[3/4.2] max-h-[78vh] arch bg-surface shadow-[0_40px_80px_-40px_rgba(42,26,18,0.55)]">
              <Image
                src="/images/kitchen/priya-scraping-coconut.webp"
                alt="Chef Priya in her kitchen, scraping fresh coconut on a traditional stool scraper"
                fill
                preload
                sizes="(max-width: 1024px) 76vw, 36vw"
                className="object-cover object-top"
              />
            </div>

            <div className="absolute left-0 bottom-[-4%] w-[42%] aspect-[3/4] arch border-[6px] border-bg bg-surface">
              <Image
                src="/images/kitchen/clay-pot-dhal.webp"
                alt="Red lentils, roasted curry powder and curry leaves in a clay pot"
                fill
                sizes="(max-width: 1024px) 42vw, 20vw"
                className="object-cover"
              />
            </div>

            {/* Floating rating card */}
            <div className="float-soft absolute right-[-2%] sm:right-[-4%] bottom-[14%] bg-surface rounded-2xl px-4 py-3 shadow-[0_20px_40px_-20px_rgba(42,26,18,0.5)]">
              <p className="text-primary tracking-[0.2em] text-sm" aria-hidden="true">★★★★★</p>
              <p className="font-serif text-lg leading-tight">Rated 5 on Google</p>
              <p className="text-sm text-text-muted">Cooking classes, Weligama</p>
            </div>

            {/* Turning stamp */}
            <div className="absolute left-[8%] top-[10%] w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-bg" aria-hidden="true">
              <svg viewBox="0 0 120 120" className="w-full h-full animate-spin-slow text-primary">
                <defs>
                  <path id="stamp-circle" d="M60 60m-46 0a46 46 0 1 1 92 0a46 46 0 1 1 -92 0" />
                </defs>
                <text fill="currentColor" fontSize="12.5" fontWeight="700" letterSpacing="2.4">
                  <textPath href="#stamp-circle">COOK • TASTE • ENJOY • REPEAT •</textPath>
                </text>
              </svg>
              <span className="absolute inset-0 flex items-center justify-center font-serif italic text-xl text-accent">
                Priya
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Ribbon */}
      <div className="bg-accent text-cream overflow-hidden" aria-hidden="true">
        <div className="batik-strip" />
        <div className="flex w-max animate-marquee py-4">
          {[...ribbon, ...ribbon, ...ribbon, ...ribbon].map((word, index) => (
            <span key={index} className="font-serif italic text-xl sm:text-2xl px-6 whitespace-nowrap">
              {word} <span className="not-italic text-marigold pl-10">✻</span>
            </span>
          ))}
        </div>
      </div>
    </>
  );
}
