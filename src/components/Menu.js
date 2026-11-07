import Image from 'next/image';
import Ornament from './Ornament';
import Reveal from './Reveal';

const menuItems = [
  {
    title: 'Sri Lankan Rice & Curry Feast',
    description: 'The heartbeat of our culinary class. Learn to cook red heirloom rice served with 7 seasonal curries (dhal, jackfruit, beetroot, gotukola sambol, chicken or fish curry , and many more).',
    image: '/images/kitchen/feast-table.webp',
    tags: ['Traditional', 'Popular', 'Gluten Free'],
  },
  {
    title: 'Traditional Pol Roti & Lunu Miris',
    description: 'Master the art of kneading coconut-infused flatbread. Cook over an open fire and pair it with a freshly stone-ground spicy onion chili sambol.',
    image: '/images/menu/pol-roti.webp',
    tags: ['Hands-on', 'Spicy', 'Vegetarian'],
  },
  {
    title: 'Kottu Roti & Devilled Chicken',
    description: 'Learn the rhythmic chopping technique of building Kottu Roti. Blend fresh vegetables, shredded roti, and eggs, served with hot devilled chicken.',
    image: '/images/menu/kottu-roti.webp',
    tags: ['Street Food', 'Chef Special'],
  },
];

export default function Menu() {
  return (
    <section id="menu" className="relative bg-secondary mat-weave text-cream py-20 sm:py-32">
      <div className="scallop" aria-hidden="true" />
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8">

        {/* Header */}
        <Reveal className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:items-end">
          <div>
            <p className="eyebrow !text-marigold">Experience Menu</p>
            <h2 className="display mt-5 text-4xl sm:text-5xl lg:text-6xl">
              What you will <em className="text-marigold font-normal">learn</em>
            </h2>
            <Ornament className="mt-5 text-marigold" />
          </div>
          <p className="text-lg text-cream/80 max-w-lg lg:justify-self-end">
            Choose your culinary adventure. Every menu package includes full instruction, ingredients, and a celebratory feast.
          </p>
        </Reveal>

        {/* Menu rows */}
        <div className="mt-14 sm:mt-20">
          {menuItems.map((item, index) => (
            <Reveal
              key={item.title}
              as="article"
              className="group grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-center py-8 md:py-10 border-t border-cream/20"
            >
              <span className="hidden md:block md:col-span-1 font-serif italic text-4xl text-marigold">
                {index + 1}
              </span>

              <div className="md:col-span-5 md:order-3 relative aspect-[3/2] rounded-t-[120px] overflow-hidden bg-bark ring-1 ring-marigold/70 ring-offset-[6px] ring-offset-secondary">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute top-5 left-1/2 -translate-x-1/2 bg-marigold text-bark rounded-full px-4 py-1.5 text-sm font-bold whitespace-nowrap">
                  {item.tags[0]}
                </span>
              </div>

              <div className="md:col-span-6">
                <h3 className="display text-3xl sm:text-4xl">{item.title}</h3>
                <p className="mt-4 text-lg leading-relaxed text-cream/80">{item.description}</p>

                <ul className="mt-5 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <li key={tag} className="text-sm font-medium border border-cream/30 px-3 py-1 rounded-full">
                      {tag}
                    </li>
                  ))}
                </ul>

                <a
                  href="#booking"
                  className="mt-6 inline-flex items-center gap-2 min-h-11 font-bold text-marigold hover:text-cream transition-colors"
                >
                  Book Session
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
