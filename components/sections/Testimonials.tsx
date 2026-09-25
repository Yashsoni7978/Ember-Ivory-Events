import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Award, Star, Quote } from "lucide-react";

export interface TestimonialItem {
  id: string;
  category: string;
  quote: string;
  author: string;
  role: string;
  event: string;
  venue: string;
  location: string;
  date: string;
  image?: string;
  imageAlt?: string;
  recordNo: string;
}

const testimonialsList: TestimonialItem[] = [
  {
    id: "corporate-summit",
    category: "Diplomatic Summit & Gala",
    quote:
      "Managing one hundred and eighty sovereign wealth trustees and institutional heads along ancient mountain ramparts requires the coordination of a diplomatic embassy. Ember & Ivory delivered broadcast-quality precision, high-security protocol, and flawless culinary pacing without sacrificing an ounce of Rajasthani warmth.",
    author: "Vikramaditya Singhania",
    role: "Managing Trustee & Former Sovereign Wealth Director",
    event: "Apex Horizon Sovereign Forum",
    venue: "Nahargarh Fort Ramparts",
    location: "Jaipur",
    date: "October 2025",
    image: "/images/patron_vikramaditya.jpg",
    imageAlt: "Portrait of distinguished patron Vikramaditya Singhania in formal bandhgala",
    recordNo: "ARCHIVE NO. 2025-C04",
  },
  {
    id: "stepwell-jubilee",
    category: "Milestone Private Soirée",
    quote:
      "When we asked if a candlelit dinner inside a tenth-century stepwell was possible without damaging the stone, other planners hesitated. Ember & Ivory consulted structural conservation architects, hand-carried every single lantern, and gave our family a memory that will outlive us all.",
    author: "Dr. Gayatri & Rajiv Tandon",
    role: "Patrons & Art Collectors",
    event: "Golden Jubilee Soirée",
    venue: "Historic Stepwell Baori",
    location: "Dausa Region",
    date: "November 2024",
    recordNo: "ARCHIVE NO. 2024-S08",
  },
  {
    id: "glasshouse-scenography",
    category: "Spatial Scenography Retrospective",
    quote:
      "Their scenographers understand volume, shadow, and architectural reverence better than most European atelier studios. The forty-meter glasshouse conservatory they fabricated in the shadow of Amber Fort was pure, breathless alchemy.",
    author: "Eléonore Laurent",
    role: "Creative Director, Maison de Soie",
    event: "Heritage Archive Retrospective",
    venue: "Amber Fort Foothills",
    location: "Jaipur",
    date: "January 2025",
    recordNo: "ARCHIVE NO. 2025-D02",
  },
  {
    id: "island-symphony",
    category: "Artist & Orchestra Curation",
    quote:
      "Musicians usually endure chaotic backstage conditions and rushed soundchecks at destination events. Ember & Ivory treated our thirty-five piece folk and classical orchestra like visiting dignitaries. The acoustic frequency calibration across Lake Pichola was absolute perfection.",
    author: "Ustad Rashid Ali Khan",
    role: "Sitar Maestro & Ensemble Director",
    event: "Jagmandir Island Symphony",
    venue: "Jagmandir Island Palace",
    location: "Lake Pichola, Udaipur",
    date: "December 2024",
    recordNo: "ARCHIVE NO. 2024-E11",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-12 sm:py-16 bg-parchment relative border-b border-stone/20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-8 sm:mb-10">
          <div className="flex items-center space-x-3 mb-4">
            <span className="w-8 h-[1px] bg-brass" />
            <p className="text-xs uppercase tracking-[0.25em] font-medium text-stone">
              Letters &amp; Endorsements
            </p>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-ink font-normal tracking-[-0.01em] leading-tight">
            Words from patrons who entrusted once-in-a-lifetime moments to our care.
          </h2>
          <p className="mt-6 text-base sm:text-lg text-ink/80 font-light leading-relaxed">
            Our atelier does not publish transactional reviews. We share excerpts from personal letters sent by the families, trustees, and creators with whom we have shared sacred and historic spaces.
          </p>
        </div>

        {/* Featured Centerpiece Letter: The Royal Samode Commission */}
        <div className="bg-bone border border-stone/30 p-8 sm:p-12 md:p-16 shadow-sm mb-10 relative">
          
          {/* Deckle-edge archival watermark */}
          <div className="absolute top-6 right-6 sm:top-10 sm:right-10 flex items-center space-x-2 text-stone/40 pointer-events-none">
            <span className="text-[10px] font-mono tracking-widest uppercase">
              FOLIO 2024 &bull; REF. MEHTA-09
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            
            {/* Left Portrait: Avantika Mehta */}
            <div className="lg:col-span-4 flex flex-col items-center sm:items-start">
              <div className="relative w-48 sm:w-56 aspect-[3/4] overflow-hidden border border-stone/30 shadow-sm">
                <Image
                  src="/images/patron_avantika.jpg"
                  alt="Portrait of Avantika Mehta in royal ivory wedding couture on a palace balcony"
                  fill
                  sizes="(max-width: 768px) 224px, 256px"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-2 left-3 right-3 text-bone text-[9px] font-mono tracking-widest uppercase text-center">
                  PATRON RECORD &bull; JAIPUR
                </div>
              </div>
              <div className="mt-4 text-center sm:text-left">
                <p className="font-serif text-lg text-ink font-medium">
                  Avantika &amp; Kabir Mehta
                </p>
                <p className="text-xs text-stone tracking-wide mt-0.5">
                  Royal Sunken Courtyard Union
                </p>
                <p className="text-[11px] text-brass uppercase tracking-wider mt-1">
                  Samode Palace, Rajasthan
                </p>
              </div>
            </div>

            {/* Right Quote Content */}
            <div className="lg:col-span-8 flex flex-col justify-between">
              <div>
                <div className="w-8 h-8 rounded-full bg-parchment flex items-center justify-center text-brass mb-6 border border-stone/20">
                  <Quote className="w-4 h-4 text-brass fill-brass/20" />
                </div>

                <blockquote className="font-serif text-xl sm:text-2xl md:text-[1.75rem] text-ink font-normal leading-[1.4] italic mb-8">
                  &ldquo;In Rajasthan, where every stone has a voice, Ember &amp; Ivory gave our union a quiet majesty. They did not overwhelm the palace; they listened to it. Three days, four hundred guests from sixteen countries, and not a single moment of strain. They were invisible until the exact second they were needed.&rdquo;
                </blockquote>

                <div className="pt-6 border-t border-stone/20 flex flex-wrap items-center justify-between gap-4 text-xs">
                  <div className="space-y-1">
                    <p className="text-stone uppercase tracking-wider text-[10px]">
                      Commission Inclusions
                    </p>
                    <p className="text-ink/80 font-light">
                      72h Palace Buyout &bull; Floating Lotus Mandap &bull; Royal Procession
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="px-3 py-1 bg-parchment text-ink/80 text-[11px] border border-stone/20">
                      Verified 3-Day Commission
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Grid of 4 Patron Endorsements Across Verticals */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          {testimonialsList.map((item) => (
            <article
              key={item.id}
              className="bg-bone border border-stone/25 p-8 flex flex-col justify-between transition-all duration-300 hover:border-brass/60 hover:shadow-sm"
            >
              <div>
                {/* Header record */}
                <div className="flex items-center justify-between pb-3 mb-5 border-b border-stone/15 text-[10px] font-mono tracking-widest text-stone uppercase">
                  <span className="text-brass">{item.recordNo}</span>
                  <span>{item.category}</span>
                </div>

                {/* Optional portrait or author metadata */}
                <div className="flex items-center space-x-4 mb-6">
                  {item.image ? (
                    <div className="relative w-14 h-14 rounded-full overflow-hidden border border-stone/30 flex-shrink-0">
                      <Image
                        src={item.image}
                        alt={item.imageAlt || item.author}
                        fill
                        sizes="56px"
                        className="object-cover object-top"
                      />
                    </div>
                  ) : (
                    <div className="w-14 h-14 rounded-full bg-parchment border border-stone/20 flex items-center justify-center text-brass font-serif text-lg font-medium flex-shrink-0">
                      {item.author.charAt(0)}
                    </div>
                  )}

                  <div>
                    <h3 className="font-serif text-lg text-ink font-medium">
                      {item.author}
                    </h3>
                    <p className="text-xs text-stone">
                      {item.role}
                    </p>
                    <p className="text-[11px] text-ink/70 mt-0.5">
                      {item.venue} &bull; {item.location}
                    </p>
                  </div>
                </div>

                {/* Quote */}
                <blockquote className="text-xs sm:text-sm text-ink/85 font-light leading-relaxed mb-6 italic">
                  &ldquo;{item.quote}&rdquo;
                </blockquote>
              </div>

              {/* Card Footer */}
              <div className="pt-4 border-t border-stone/15 flex items-center justify-between text-[11px] text-stone">
                <span>{item.event}</span>
                <span>{item.date}</span>
              </div>
            </article>
          ))}
        </div>

        {/* Patron Trust Metrics Bar */}
        <div className="bg-ink text-bone border border-ink p-8 sm:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-y md:divide-y-0 md:divide-x divide-bone/15">
            <div className="pt-4 md:pt-0 md:pr-6 text-center sm:text-left">
              <p className="font-serif text-3xl sm:text-4xl text-brass font-normal">
                100%
              </p>
              <p className="text-xs uppercase tracking-[0.2em] text-parchment/80 mt-2">
                Discretion Protocol
              </p>
              <p className="text-[11px] text-stone mt-1">
                Strict bilateral non-disclosure agreements on all private commissions.
              </p>
            </div>

            <div className="pt-4 md:pt-0 md:px-6 text-center sm:text-left">
              <p className="font-serif text-3xl sm:text-4xl text-bone font-normal">
                Strictly 12
              </p>
              <p className="text-xs uppercase tracking-[0.2em] text-parchment/80 mt-2">
                Annual Commission Cap
              </p>
              <p className="text-[11px] text-stone mt-1">
                Intentional capacity limits ensuring deep devotion to each celebration.
              </p>
            </div>

            <div className="pt-4 md:pt-0 md:px-6 text-center sm:text-left">
              <p className="font-serif text-3xl sm:text-4xl text-brass font-normal">
                88%
              </p>
              <p className="text-xs uppercase tracking-[0.2em] text-parchment/80 mt-2">
                Patron Referrals
              </p>
              <p className="text-[11px] text-stone mt-1">
                Direct generational recommendations from past families and institutions.
              </p>
            </div>

            <div className="pt-4 md:pt-0 md:pl-6 text-center sm:text-left">
              <p className="font-serif text-3xl sm:text-4xl text-bone font-normal">
                18+
              </p>
              <p className="text-xs uppercase tracking-[0.2em] text-parchment/80 mt-2">
                Heritage Sanctuaries
              </p>
              <p className="text-[11px] text-stone mt-1">
                Certified structural access to Rajasthan&apos;s royal palaces and forts.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
