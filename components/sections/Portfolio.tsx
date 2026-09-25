"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Sparkles, 
  MapPin, 
  Calendar, 
  Users, 
  ArrowUpRight, 
  X, 
  Layers,
  ChevronRight,
  ShieldCheck,
  Maximize2
} from "lucide-react";

export interface PortfolioProject {
  id: string;
  title: string;
  category: "all" | "weddings" | "corporate" | "social" | "decor" | "entertainment";
  categoryLabel: string;
  patron: string;
  venue: string;
  location: string;
  year: string;
  scale: string;
  duration: string;
  headline: string;
  narrative: string;
  architecturalNotes: string;
  image: string;
  imageAlt: string;
  plateNumber: string;
  palette: string[];
  deliverables: string[];
}

const portfolioData: PortfolioProject[] = [
  {
    id: "samode-wedding",
    title: "The Royal Sunken Courtyard Union",
    category: "weddings",
    categoryLabel: "Heritage Wedding",
    patron: "Avantika & Kabir",
    venue: "Samode Palace",
    location: "Jaipur, Rajasthan",
    year: "2025",
    scale: "420 Residential Guests",
    duration: "3-Day Full Palace Buyout",
    headline: "An 18th-century ancestral celebration framed in white tuberoses and warm candlelit stone.",
    narrative:
      "Staged across the terraced courtyards and mirrored Sheesh Mahal of Samode Palace. The commission required complete architectural harmonization — engineering a floating marble mandap over the central fountain pool without touching the centuries-old masonry, and coordinating a 200-person baraat procession lit entirely by hand-held mashal torches.",
    architecturalNotes:
      "Zero mechanical drilling allowed on site. All 14,000 meters of marigold and tuberose garlands were mounted via custom padded brass tension brackets developed in our Jaipur workshop.",
    image: "/images/portfolio_samode.jpg",
    imageAlt: "High-fashion Indian wedding couple walking down candlelit marble palace steps at golden hour",
    plateNumber: "PLATE 01 / WEDDINGS",
    palette: ["#FAF7F0 (Bone)", "#A6813C (Antique Brass)", "#6B2333 (Oxblood)", "#EFE8DA (Parchment)"],
    deliverables: [
      "Exclusive 72-Hour Palace Buyout Management",
      "Floating Lotus Mandap with Water Reflection Engineering",
      "Royal Baraat Procession with Vintage Automobile Fleet",
      "Acoustic Sufi Night at the Baradari Pavilions",
      "Bespoke Artisanal Jaipur Linen & Paper Suites",
    ],
  },
  {
    id: "nahargarh-gala",
    title: "The Nahargarh Fort Horizon Gala",
    category: "corporate",
    categoryLabel: "Diplomatic Summit",
    patron: "Apex Global Capital & Sovereign Wealth Forum",
    venue: "Nahargarh Fort Ramparts",
    location: "Jaipur, Rajasthan",
    year: "2025",
    scale: "180 C-Suite Delegates",
    duration: "Single Twilight Evening",
    headline: "High-stakes executive diplomacy staged on mountain ramparts overlooking the lit city.",
    narrative:
      "Perched high on the Aravalli ridge, this sunset-to-midnight gala demanded military-grade logistics. We created an open-air banquet pavilion along the stone battlements, marrying antique brass candle sconces with low-profile satellite communications and private security perimeters for attending heads of sovereign funds.",
    architecturalNotes:
      "Hilltop winds required custom aerodynamic glass windbreaks anchored to heavy stone counterweights hidden inside velvet banquet banquettes.",
    image: "/images/portfolio_nahargarh.jpg",
    imageAlt: "Luxury corporate gala banquet table on ancient stone fortress ramparts overlooking an illuminated city",
    plateNumber: "PLATE 02 / CORPORATE",
    palette: ["#1A1816 (Ink)", "#6B2333 (Oxblood)", "#8C8577 (Stone)", "#FAF7F0 (Bone)"],
    deliverables: [
      "Heavy Rigging & Equipment Transit via Narrow Ridge Passes",
      "Z+ Diplomatic Security Zoning & Encrypted Check-In",
      "Five-Course Plated Degustation with Master Sommelier",
      "Redundant Fiber-Optic Global Telepresence Broadcast",
      "Curated Sitar & Double Bass Chamber Duo",
    ],
  },
  {
    id: "abhaneri-baori",
    title: "The Abhaneri Baori Candlelit Milestone",
    category: "social",
    categoryLabel: "Milestone Soirée",
    patron: "The Singhania Family — Golden Jubilee",
    venue: "Historic Stepwell Courtyard",
    location: "Dausa Region, Rajasthan",
    year: "2024",
    scale: "60 Private Guests",
    duration: "Evening Celebration",
    headline: "An intimate 50th jubilee dinner immersed in the geometry of 1,200 terracotta lamps.",
    narrative:
      "To celebrate fifty years of marriage, our patrons desired an experience of sacred stillness. We arranged private access to a sequestered stepwell, lighting every geometric stair with terracotta oil lamps. Guests dined at a single low-slung ivory banquet table beneath the starfield, accompanied by the natural acoustic resonance of chamber cellos.",
    architecturalNotes:
      "All catering service equipment and seating were hand-carried down stone corridors by our 40-person team to eliminate vehicular vibration near fragile stepwell walls.",
    image: "/images/services_social.jpg",
    imageAlt: "Intimate private milestone dinner in a candlelit stone stepwell courtyard under the stars",
    plateNumber: "PLATE 03 / SOCIAL",
    palette: ["#EFE8DA (Parchment)", "#A6813C (Brass)", "#1A1816 (Charcoal Ink)", "#FAF7F0 (Bone)"],
    deliverables: [
      "Monumental 1,200 Diya Candlelight Choreography",
      "Seven-Course Heritage Tasting Menu by Guest Chef",
      "Custom Calligraphed Gold-Foil Family Keepsake Albums",
      "Acoustic Classical Cello Suite Under the Stars",
      "Dedicated Fire & Heritage Preservation Marshals",
    ],
  },
  {
    id: "amber-glasshouse",
    title: "The Amber Glasshouse Botanical Pavilion",
    category: "decor",
    categoryLabel: "Spatial Scenography",
    patron: "Couture Fashion House Retrospective",
    venue: "Amber Fort Foothills",
    location: "Jaipur, Rajasthan",
    year: "2025",
    scale: "280 International Patrons",
    duration: "2-Day Runway & Dinner",
    headline: "A temporary crystal conservatory erected in the shadow of Rajasthan's warrior fort.",
    narrative:
      "For a global luxury fashion house unveiling their heritage textile archive, we conceived and fabricated a 40-meter crystalline glasshouse pavilion. The interior was framed by monumental suspended floral chandeliers crafted from white tuberoses, cascading garden roses, and hand-beaten Jaipur brass lamps, perfectly reflecting the illuminated Amber Fort in the distance.",
    architecturalNotes:
      "Full climate control with silent under-floor displacement air ducts, maintaining 21°C inside despite 34°C external desert temperatures.",
    image: "/images/portfolio_glasshouse.jpg",
    imageAlt: "Monumental luxury glasshouse conservatory pavilion event with illuminated fort in the background",
    plateNumber: "PLATE 04 / SCENOGRAPHY",
    palette: ["#FAF7F0 (Ivory Bone)", "#A6813C (Polished Brass)", "#1A1816 (Deep Ink)", "#8C8577 (Stone)"],
    deliverables: [
      "Custom 40m Steel & Tempered Glass Conservatory Structure",
      "Suspended Botanical Sculptures (60,000 Fresh Stems)",
      "Low-Noise Subterranean HVAC & Power Infrastructure",
      "Hand-Knotted Silk Rug Placement & Velvet Banquettes",
      "100% Circular Organic Waste Composting Post-Event",
    ],
  },
  {
    id: "jagmandir-symphony",
    title: "The Jagmandir Island Symphony & Sangeet",
    category: "entertainment",
    categoryLabel: "Music & Performance",
    patron: "Meera & Vikram",
    venue: "Jagmandir Island Palace",
    location: "Lake Pichola, Udaipur",
    year: "2024",
    scale: "650 International Guests",
    duration: "2 Days (Lake Pichola)",
    headline: "A floating classical fusion orchestra upon Lake Pichola beneath midnight fireworks.",
    narrative:
      "Set on the marble island of Jagmandir in Udaipur. We commissioned a 35-piece fusion symphony pairing royal Manganiyar folk legends with western classical violinists. The stage was cantilevered over the water, framed by illuminated Mughal chhatris and accompanied by floating lotus candle barges that drifted across the lake.",
    architecturalNotes:
      "Acoustic frequency arrays calibrated specifically for water transmission to avoid audio slapback against the surrounding City Palace stone facades.",
    image: "/images/portfolio_jagmandir.jpg",
    imageAlt: "Twilight view of Jagmandir Island Palace with musicians on marble pavilion and fireworks in sky",
    plateNumber: "PLATE 05 / ENTERTAINMENT",
    palette: ["#FAF7F0 (Marble Bone)", "#6B2333 (Oxblood)", "#A6813C (Brass Gold)", "#1A1816 (Night Ink)"],
    deliverables: [
      "35-Piece Royal Folk & Classical Symphony Arrangement",
      "Over-Water Cantilevered Marble Acoustic Stage",
      "Water Taxi & Private Jetty Flotilla Management",
      "Eco-Certified Synchronized Fireworks Display",
      "VIP Celebrity Host & Bilingual Emcee Direction",
    ],
  },
  {
    id: "durbar-banquet",
    title: "The Durbar Hall Leadership Banquet",
    category: "corporate",
    categoryLabel: "Institutional Gala",
    patron: "International Philanthropic Trust",
    venue: "City Palace Durbar Ballroom",
    location: "Jaipur, Rajasthan",
    year: "2024",
    scale: "220 Global Dignitaries",
    duration: "Black-Tie Gala Dinner",
    headline: "Formal black-tie banquet celebrating international cultural restoration milestones.",
    narrative:
      "Held in the hallowed Durbar Hall among heirloom royal chandeliers and monumental silver urns. We choreographed a formal silver-thali royal dining service for 220 dignitaries, accompanied by live chamber strings, discreet dignitary protection protocols, and keynote speech sound reinforcement.",
    architecturalNotes:
      "Strict antiquity protection guidelines: zero floor tape, white-glove setup crews, and laser-monitored humidity controls inside the historic hall.",
    image: "/images/services_corporate.jpg",
    imageAlt: "Prestigious corporate gala dinner in a grand gilded palace ballroom with long dark wood tables",
    plateNumber: "PLATE 06 / CORPORATE",
    palette: ["#1A1816 (Ink)", "#FAF7F0 (Bone)", "#A6813C (Brass)", "#6B2333 (Oxblood)"],
    deliverables: [
      "Royal Silver-Thali Dining Choreography & Sommelier Service",
      "Antiquity-Grade Hall Preservation Liaison & Protection",
      "Broadcast-Grade Sound Reinforcement & Simultaneous Translation",
      "Custom Calligraphed Gold-Embossed Place Cards & Menus",
      "Dignitary Motorcade Coordination & VIP Gate Protocol",
    ],
  },
];

export default function Portfolio() {
  const [selectedFilter, setSelectedFilter] = useState<string>("all");
  const [activeModalProject, setActiveModalProject] = useState<PortfolioProject | null>(null);

  const filteredProjects =
    selectedFilter === "all"
      ? portfolioData
      : portfolioData.filter((p) => p.category === selectedFilter);

  return (
    <section
      id="portfolio"
      className="py-12 sm:py-16 bg-parchment relative border-b border-stone/20"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-8 sm:mb-10">
          <div className="flex items-center space-x-3 mb-4">
            <span className="w-8 h-[1px] bg-brass" />
            <p className="text-xs uppercase tracking-[0.25em] font-medium text-stone">
              Archives &amp; Selected Works
            </p>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-ink font-normal tracking-[-0.01em] leading-tight">
            Historic settings. Transcendent human gatherings.
          </h2>
          <p className="mt-6 text-base sm:text-lg text-ink/80 font-light leading-relaxed">
            Every commission is an unrepeatable archival moment. We operate within Rajasthan&apos;s most venerated palaces and private estates, creating celebrations that honor the soul of the architecture without ever overpowering it.
          </p>
        </div>

        {/* Filter Navigation - Clean editorial style, no rounded SaaS pills */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-6 pb-6 mb-6 border-b border-stone/20 text-xs tracking-[0.18em] uppercase font-medium">
          {[
            { id: "all", label: "All Commissions" },
            { id: "weddings", label: "Weddings" },
            { id: "corporate", label: "Galas & Summits" },
            { id: "social", label: "Private Soirées" },
            { id: "decor", label: "Scenography" },
            { id: "entertainment", label: "Music & Performance" },
          ].map((filter) => {
            const isActive = selectedFilter === filter.id;
            return (
              <button
                key={filter.id}
                onClick={() => setSelectedFilter(filter.id)}
                className={`py-2 px-3 transition-all relative ${
                  isActive
                    ? "text-oxblood font-semibold border-b-2 border-oxblood"
                    : "text-stone hover:text-ink font-normal"
                }`}
              >
                {filter.label}
              </button>
            );
          })}
        </div>

        {/* Portfolio Gallery Grid (All 6 cards rendered in SSR HTML) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.map((project) => {
            const isVisible =
              selectedFilter === "all" || project.category === selectedFilter;

            return (
              <article
                key={project.id}
                className={`bg-bone border border-stone/25 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:border-brass/70 hover:shadow-md group ${
                  isVisible ? "block" : "hidden"
                }`}
              >
                {/* Visual Plate / High-Res Image */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-stone/20">
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent pointer-events-none" />

                  {/* Plate Badge & Category */}
                  <div className="absolute top-3 left-3 right-3 flex justify-between items-center text-[10px] font-mono tracking-widest text-bone uppercase">
                    <span className="bg-ink/70 backdrop-blur-sm px-2.5 py-1 border border-bone/20">
                      {project.plateNumber}
                    </span>
                    <span className="bg-ink/70 backdrop-blur-sm px-2.5 py-1 text-brass border border-brass/30">
                      {project.year}
                    </span>
                  </div>

                  {/* Bottom Caption Overlay */}
                  <div className="absolute bottom-3 left-4 right-4 text-bone">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-parchment/80">
                      {project.venue} &bull; {project.location}
                    </p>
                    <h3 className="font-serif text-lg text-bone font-normal leading-snug">
                      {project.title}
                    </h3>
                  </div>
                </div>

                {/* Card Editorial Information */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Patron & Scale Metadata */}
                    <div className="flex justify-between items-start pb-3 mb-4 border-b border-stone/15 text-[11px]">
                      <div>
                        <span className="text-stone uppercase tracking-wider block text-[9px]">
                          Patron
                        </span>
                        <span className="font-serif text-ink font-medium">
                          {project.patron}
                        </span>
                      </div>
                      <div className="text-right">
                        <span className="text-stone uppercase tracking-wider block text-[9px]">
                          Scale
                        </span>
                        <span className="text-ink/85 font-light">
                          {project.scale}
                        </span>
                      </div>
                    </div>

                    <p className="text-xs text-stone italic mb-3">
                      &ldquo;{project.headline}&rdquo;
                    </p>

                    <p className="text-xs text-ink/80 font-light leading-relaxed mb-6 line-clamp-3">
                      {project.narrative}
                    </p>

                    {/* Key Inclusions Preview */}
                    <div className="space-y-1.5 pt-3 border-t border-stone/15 mb-6">
                      <p className="text-[10px] uppercase tracking-wider text-stone font-medium mb-1">
                        Atelier Inclusions:
                      </p>
                      {project.deliverables.slice(0, 2).map((d, i) => (
                        <div key={i} className="flex items-start space-x-2 text-[11px] text-ink/75">
                          <span className="text-brass mt-0.5">&bull;</span>
                          <span className="line-clamp-1">{d}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Trigger to open Deep Dossier Modal */}
                  <div className="pt-4 border-t border-stone/15 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setActiveModalProject(project)}
                      className="text-xs uppercase tracking-[0.18em] font-medium text-oxblood hover:text-oxblood-deep flex items-center space-x-1"
                    >
                      <span>Read Full Case Study</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                    <span className="text-[10px] text-stone">
                      {project.duration}
                    </span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Archival Note & Consultation Callout */}
        <div className="mt-10 p-8 sm:p-12 bg-bone border border-stone/20 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center space-x-2 mb-2">
              <ShieldCheck className="w-4 h-4 text-brass" />
              <span className="text-[11px] uppercase tracking-[0.2em] font-medium text-stone">
                Patron Discretion Notice
              </span>
            </div>
            <h4 className="font-serif text-2xl text-ink font-normal mb-2">
              Looking for our confidential royal and family archives?
            </h4>
            <p className="text-xs sm:text-sm text-ink/80 font-light leading-relaxed">
              Due to bilateral non-disclosure agreements with royal families and global dignitaries, over forty additional commissions are archived in our private physical folio. Inquire directly for a curated presentation.
            </p>
          </div>
          <Link
            href="#inquiry"
            className="px-8 py-4 bg-oxblood text-bone hover:bg-oxblood-deep transition-colors text-xs tracking-[0.22em] uppercase font-medium flex-shrink-0"
          >
            Request Private Folio
          </Link>
        </div>

      </div>

      {/* Case Study Deep Dossier Modal */}
      {activeModalProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-ink/70 backdrop-blur-sm animate-fadeIn"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-bone max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-stone/30 shadow-2xl relative flex flex-col">
            
            {/* Modal Header Bar */}
            <div className="sticky top-0 z-30 bg-parchment-light/95 backdrop-blur-md px-6 sm:px-8 py-4 border-b border-stone/20 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <span className="text-[10px] font-mono tracking-widest text-brass uppercase">
                  {activeModalProject.plateNumber}
                </span>
                <span className="text-stone/40">&bull;</span>
                <span className="text-xs uppercase tracking-[0.2em] text-stone font-medium">
                  {activeModalProject.categoryLabel}
                </span>
              </div>
              <button
                type="button"
                onClick={() => setActiveModalProject(null)}
                className="p-1.5 text-stone hover:text-ink focus:outline-none"
                aria-label="Close case study modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Hero Visual */}
            <div className="relative aspect-[16/9] w-full bg-stone/20">
              <Image
                src={activeModalProject.image}
                alt={activeModalProject.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 896px"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-6 right-6 text-bone">
                <p className="text-xs uppercase tracking-widest text-parchment/80">
                  {activeModalProject.venue} &bull; {activeModalProject.location}
                </p>
                <h3 className="font-serif text-2xl sm:text-3xl text-bone font-normal mt-1">
                  {activeModalProject.title}
                </h3>
              </div>
            </div>

            {/* Modal Body Content */}
            <div className="p-6 sm:p-10 space-y-8">
              {/* Key Parameters Row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 bg-parchment border border-stone/20 text-xs">
                <div>
                  <span className="text-stone uppercase tracking-wider block text-[9px]">
                    Patron
                  </span>
                  <span className="font-medium text-ink">
                    {activeModalProject.patron}
                  </span>
                </div>
                <div>
                  <span className="text-stone uppercase tracking-wider block text-[9px]">
                    Scale
                  </span>
                  <span className="font-medium text-ink">
                    {activeModalProject.scale}
                  </span>
                </div>
                <div>
                  <span className="text-stone uppercase tracking-wider block text-[9px]">
                    Timeline
                  </span>
                  <span className="font-medium text-ink">
                    {activeModalProject.duration}
                  </span>
                </div>
                <div>
                  <span className="text-stone uppercase tracking-wider block text-[9px]">
                    Year
                  </span>
                  <span className="font-medium text-ink">
                    {activeModalProject.year}
                  </span>
                </div>
              </div>

              {/* The Narrative */}
              <div>
                <h4 className="text-xs uppercase tracking-[0.22em] font-medium text-stone mb-3">
                  The Commission Story
                </h4>
                <p className="font-serif italic text-base sm:text-lg text-ink/90 mb-4 leading-relaxed">
                  &ldquo;{activeModalProject.headline}&rdquo;
                </p>
                <p className="text-xs sm:text-sm text-ink/85 font-light leading-relaxed">
                  {activeModalProject.narrative}
                </p>
              </div>

              {/* Architectural & Structural Restraint */}
              <div className="p-5 bg-parchment-light border-l-2 border-brass">
                <h4 className="text-[11px] uppercase tracking-[0.22em] font-medium text-stone mb-2">
                  Architectural &amp; Structural Notes
                </h4>
                <p className="text-xs sm:text-sm text-ink/80 font-light leading-relaxed">
                  {activeModalProject.architecturalNotes}
                </p>
              </div>

              {/* Inclusions & Palette */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-stone/20">
                <div>
                  <h4 className="text-xs uppercase tracking-[0.22em] font-medium text-stone mb-3">
                    Atelier Deliverables
                  </h4>
                  <ul className="space-y-2">
                    {activeModalProject.deliverables.map((item, i) => (
                      <li key={i} className="flex items-start space-x-2 text-xs text-ink/85 font-light">
                        <span className="text-brass mt-0.5">&bull;</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xs uppercase tracking-[0.22em] font-medium text-stone mb-3">
                    Palette Chemistry
                  </h4>
                  <div className="space-y-2">
                    {activeModalProject.palette.map((color, i) => (
                      <div key={i} className="flex items-center space-x-2 text-xs text-ink/80">
                        <span className="w-3 h-3 rounded-full border border-stone/30 bg-current" style={{ color: color.split(" ")[0] }} />
                        <span>{color}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Modal Footer Action */}
              <div className="pt-6 border-t border-stone/20 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setActiveModalProject(null)}
                  className="text-xs uppercase tracking-[0.18em] text-stone hover:text-ink font-medium"
                >
                  Close Case Study
                </button>
                <Link
                  href="#inquiry"
                  onClick={() => setActiveModalProject(null)}
                  className="px-6 py-3 bg-oxblood text-bone hover:bg-oxblood-deep transition-colors text-xs tracking-[0.2em] uppercase font-medium"
                >
                  Inquire For Your Date
                </Link>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
