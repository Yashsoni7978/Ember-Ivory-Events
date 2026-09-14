"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Sparkles, 
  Building2, 
  Wine, 
  Palette, 
  Mic2, 
  Clock, 
  MapPin, 
  ShieldCheck, 
  Calendar,
  Layers,
  Compass,
  FileText,
  Eye
} from "lucide-react";

export interface ServiceDetail {
  id: string;
  discipline: string;
  title: string;
  subtitle: string;
  description: string;
  editorialQuote: string;
  image: string;
  imageAlt: string;
  imageCaption: string;
  stats: { label: string; value: string }[];
  deliverables: string[];
  locationsOrFormat: string[];
  paletteFocus: string;
  icon: typeof Sparkles;
  runOfShow: { timeOrPhase: string; title: string; detail: string }[];
  venueFeasibility: {
    recommendedVenues: string;
    guestCapacity: string;
    curfewAndAcoustics: string;
    logisticsNote: string;
  };
}

const servicesData: ServiceDetail[] = [
  {
    id: "weddings",
    discipline: "Discipline 01",
    title: "Heritage Weddings & Destination Celebrations",
    subtitle: "Multi-day royal palace buyouts, sacred Vedic rituals, and generational hospitality.",
    description:
      "We orchestrate multi-day destination weddings across Rajasthan's most venerated palaces and secluded private estates. From privatized palace buyouts in Jaipur, Udaipur, and Jodhpur to sacred Vedic ceremony protocol and grand procession (baraat) choreography, our atelier manages every guest liaison, hospitality touchpoint, and structural production with unflinching discretion.",
    editorialQuote:
      "A wedding in Rajasthan is not merely an event; it is the temporary founding of a private kingdom where ancestral dignity and joyous revelry coexist.",
    image: "/images/services_wedding.jpg",
    imageAlt: "Luxury royal Indian wedding mandap ceremony in a heritage palace courtyard at twilight",
    imageCaption: "The Lotus Pool Mandap, Amber Heritage Courtyard, Jaipur",
    stats: [
      { label: "Annual Limit", value: "Strictly 6" },
      { label: "Guest Scale", value: "150 – 1,200" },
      { label: "Lead Time", value: "6 – 14 Months" },
    ],
    deliverables: [
      "Heritage Palace & Royal Fort Buyout Negotiations",
      "Bespoke 24/7 Guest Concierge & Airport Jet Escorts",
      "Vedic Ritual Coordination & Sacred Space Sanctification",
      "High-Production Sangeet Stagecraft & Choreography Support",
      "Artisanal Jaipur Welcome Suites & Curated Keepsakes",
      "Master Banqueting & Royal Thali Protocol Direction",
    ],
    locationsOrFormat: [
      "Jaipur (Rambagh, Samode, Fairmont)",
      "Udaipur (Taj Lake Palace, Oberoi Udaivilas)",
      "Jodhpur (Umaid Bhawan, Mehrangarh)",
      "Aravalli Private Hill Estates",
    ],
    paletteFocus: "Parchment, Bone, and antique Brass with deep Oxblood accents",
    icon: Sparkles,
    runOfShow: [
      {
        timeOrPhase: "Day 01 — Dusk",
        title: "Mehndi & Sufi Qawwali Soirée",
        detail: "Sunset welcome cocktails at the Baradari pavilion, bespoke perfume blending station, followed by acoustic Sufi ensemble under illuminated chhatris.",
      },
      {
        timeOrPhase: "Day 02 — Evening",
        title: "Royal Sangeet & Revelry",
        detail: "Monumental kinetic stagecraft with broadcast-grade audio, family performance direction, curated midnight street-food promenade and after-hours lounge.",
      },
      {
        timeOrPhase: "Day 03 — Twilight",
        title: "Baraat, Vedic Phere & Durbar Banquet",
        detail: "Royal royal procession along palace ramparts, candlelit mandap over reflection pools, followed by a formal 7-course seated silver thali banquet.",
      },
    ],
    venueFeasibility: {
      recommendedVenues: "Rambagh Palace (Jaipur), Taj Lake Palace (Udaipur), Umaid Bhawan (Jodhpur)",
      guestCapacity: "Up to 800 residential guests across combined palace suites",
      curfewAndAcoustics: "Outdoor amplified sound until 22:00 IST; indoor Durbar halls until dawn",
      logisticsNote: "Full structural load-in begins 72 hours prior; dedicated freight lanes required",
    },
  },
  {
    id: "corporate",
    discipline: "Discipline 02",
    title: "Corporate Galas & Leadership Summits",
    subtitle: "High-stakes diplomatic banquets, C-suite retreats, and architectural unveils.",
    description:
      "For institutional leaders, global technology firms, and private equity assemblies requiring precision-timed execution. We marry broadcast-grade audio-visual infrastructure with elevated diplomatic protocol. Every keynote stage, delegate lounge, and seated gala banquet is engineered to facilitate visionary dialogue without logistical friction.",
    editorialQuote:
      "When industry titans convene, the environment must convey calm authority, intellectual clarity, and effortless refinement.",
    image: "/images/services_corporate.jpg",
    imageAlt: "Prestigious corporate gala dinner in a grand gilded palace ballroom with long dark wood tables",
    imageCaption: "Global Leadership Summit, Durbar Hall, Jaipur",
    stats: [
      { label: "AV Standards", value: "Broadcast Grade" },
      { label: "Security Liaison", value: "Diplomatic / Z+" },
      { label: "Turnaround", value: "Rapid Deployment" },
    ],
    deliverables: [
      "Keynote Stage Architecture & Multi-Camera Live Broadcast",
      "C-Suite Delegate Management & Secure Floor Zoning",
      "Diplomatic Protocol & VVIP Government Liaison",
      "Custom Plated Executive Dinners & Sommelier Pairings",
      "Bespoke Digital Signage & Paperless Delegate Systems",
      "Post-Event Media Staging & Embargoed Press Suites",
    ],
    locationsOrFormat: [
      "Jaipur Exhibition & Convention Centre (JECC)",
      "Heritage Hotel Auditoriums & Ballrooms",
      "Private High-Security Pavilions",
      "Executive Desert Retreats",
    ],
    paletteFocus: "Deep Ink, Crisp Bone, and hairline Brass framing",
    icon: Building2,
    runOfShow: [
      {
        timeOrPhase: "08:30 — 10:00",
        title: "Executive Credentialing & Private Breakfast",
        detail: "Biometric and encrypted QR badge validation, private bilateral lounge access, and discreet executive briefing packets.",
      },
      {
        timeOrPhase: "10:00 — 13:30",
        title: "Keynote Addresses & Product Holographic Reveal",
        detail: "Ultra-wide LED cyclorama with low-latency global telepresence broadcast and simultaneous multi-language interpretation.",
      },
      {
        timeOrPhase: "19:30 — 23:00",
        title: "Black-Tie Institutional Gala & Awards Banquet",
        detail: "Five-course seated plated dinner curated by Michelin-awarded guest chefs, accompanied by chamber strings and keynote fireside remarks.",
      },
    ],
    venueFeasibility: {
      recommendedVenues: "Fairmont Ballroom, JECC Convention Centre, Rambagh Maharani Suite",
      guestCapacity: "100 to 2,500 executive delegates with breakout zoning",
      curfewAndAcoustics: "Controlled indoor acoustic isolation with 24-hour operational clearance",
      logisticsNote: "Dedicated redundant fiber-optic lines and uninterruptible dual-grid generator backup",
    },
  },
  {
    id: "social",
    discipline: "Discipline 03",
    title: "Private Soirées & Milestone Celebrations",
    subtitle: "Intimate anniversaries, private art suppers, and landmark jubilees.",
    description:
      "For private patrons celebrating landmark personal moments that demand intimacy, poetic restraint, and singular artistic expression. From an anniversary dinner set within a candlelit 18th-century stepwell to an avant-garde supper club overlooking the Nahargarh ramparts, we craft bespoke gatherings tailored strictly to your personal narrative.",
    editorialQuote:
      "True luxury is felt in the spaces between conversations — the candlelight, the timbre of strings, the warmth of genuine communion.",
    image: "/images/services_social.jpg",
    imageAlt: "Intimate milestone anniversary celebration in a candlelit stone stepwell courtyard under the stars",
    imageCaption: "Private Baori Stepwell Soirée, Chand Baori Region",
    stats: [
      { label: "Intimacy Scale", value: "20 – 120 Guests" },
      { label: "Culinary Direction", value: "Chef Collaborations" },
      { label: "Atmosphere", value: "Poetic & Candlelit" },
    ],
    deliverables: [
      "Bespoke Spatial Concept & Atmospheric Direction",
      "Sommelier & Michelin-Recognized Chef Collaborations",
      "Hand-Lettered Calligraphy & Custom Heavyweight Menus",
      "Stepwell, Courtyard, and Private Terrace Transformations",
      "Acoustic Chamber Ensembles & Curated Vinyl Selectors",
      "Discreet White-Glove Floor Attendants & Valet Staging",
    ],
    locationsOrFormat: [
      "Historic Stepwells (Baoris)",
      "Private Heritage Havelis",
      "Private Orchard Gardens",
      "Palace Rooftop Terraces",
    ],
    paletteFocus: "Warm Parchment, Stone neutrals, and soft Oxblood candlelight tones",
    icon: Wine,
    runOfShow: [
      {
        timeOrPhase: "17:45 — Sunset",
        title: "Arrival Drinks & Architectural Discovery Walk",
        detail: "Chilled vintage champagne served upon arrival; guided private walk through the heritage baori illuminated by 1,200 terracotta brass oil lamps.",
      },
      {
        timeOrPhase: "19:30 — 21:30",
        title: "The Seven-Course Heritage Degustation",
        detail: "Custom hand-lettered parchment menus, wine pairings curated with a visiting sommelier, surrounded by candlelit stone alcoves.",
      },
      {
        timeOrPhase: "21:30 — Late",
        title: "Acoustic Cellos & Nightcap Salon",
        detail: "Cello and sitar duet reverberating off the stepwell stone, single-malt tasting bar, and hand-rolled confectionery hampers.",
      },
    ],
    venueFeasibility: {
      recommendedVenues: "Abhaneri Heritage Stepwell, Samode Haveli Courtyard, private palace pavilions",
      guestCapacity: "20 to 120 private guests",
      curfewAndAcoustics: "Natural acoustic amplification; candlelight fire safety marshals deployed",
      logisticsNote: "All equipment hand-carried to preserve centuries-old stone structures without drilling",
    },
  },
  {
    id: "decor",
    discipline: "Discipline 04",
    title: "Spatial Scenography & Floral Architecture",
    subtitle: "Monumental floral structures, custom drapery, and atmospheric lighting design.",
    description:
      "We reject formulaic event decoration. Our scenography wing operates as an ephemeral architectural studio — sketching, modeling, and fabricating immersive temporary environments. We work with raw sandstone, cast brass, hand-dyed Jaipur linens, and thousands of stems of ethically cultivated marigolds, tuberoses, and imported garden roses.",
    editorialQuote:
      "We do not decorate an empty room. We listen to the architecture of the venue and build a harmonious world inside it.",
    image: "/images/services_decor.jpg",
    imageAlt: "Monumental floral chandeliers and spatial scenography in an opulent palace ballroom",
    imageCaption: "Floral Scenography Installation, Sheesh Mahal Ballroom",
    stats: [
      { label: "Design Process", value: "3D Spatial Renders" },
      { label: "Sourcing Policy", value: "Ethical & Regional" },
      { label: "Floral Care", value: "Zero-Waste Composting" },
    ],
    deliverables: [
      "3D Spatial Blueprints, Floor Plans & Lighting Schematics",
      "Custom Architectural Mandaps & Monumental Canopies",
      "Curated Botanical Sculptures & Rare Imported Florals",
      "Warm Architectural Illuminations & Kinetic Candle Fixtures",
      "Artisan Woodworking & Wrought Iron Framing Fabrications",
      "Responsible Post-Event Dismantling & Green Waste Recycling",
    ],
    locationsOrFormat: [
      "Palace Lawns & Courtyards",
      "Historic Stepwells & Amphitheaters",
      "Pillared Durbar Halls",
      "Custom Glasshouse Pavilions",
    ],
    paletteFocus: "Raw Stone, Aged Brass, Natural Ivory botanicals, and Botanical Greens",
    icon: Palette,
    runOfShow: [
      {
        timeOrPhase: "T-72 Hours",
        title: "Structural Fabrication & Rigging Inspection",
        detail: "Laser-leveled ground framing, non-invasive rigging load tests on historic stone arches, and electrical trunking placement.",
      },
      {
        timeOrPhase: "T-24 Hours",
        title: "Botanical Conditioning & Floral Sculpting",
        detail: "Temperature-controlled floral conditioning of 45,000 seasonal blooms, hand-binding of cascading floral chandeliers.",
      },
      {
        timeOrPhase: "T-4 Hours",
        title: "Atmospheric Lighting Tuning & Candle Choreography",
        detail: "Final color temperature balancing (2200K warm tungsten glow), candle wick priming, and scent dispersion calibration.",
      },
    ],
    venueFeasibility: {
      recommendedVenues: "Applicable to open-air courtyards, heritage durbar halls, and glass pavilions",
      guestCapacity: "Scalable from intimate salons to 2,000-person gala installations",
      curfewAndAcoustics: "Strict structural heritage preservation protocols; zero permanent anchor holes",
      logisticsNote: "All organic botanical waste is processed through our circular composting partnership in Sanganer",
    },
  },
  {
    id: "entertainment",
    discipline: "Discipline 05",
    title: "Artist Curation & Anchor Booking",
    subtitle: "Celebrated maestros, Sufi ensembles, and seasoned bilingual master emcees.",
    description:
      "Sound and spoken word define the emotional cadence of a gathering. We curate and manage distinguished musical talent and anchors who treat an audience with intelligence. From royal Manganiyar folk legends and classical sitar-cello duets to headline Sufi mystics and refined bilingual presenters, we match the performance to your event's rhythm.",
    editorialQuote:
      "Entertainment should never interrupt an evening; it should lift it into an unforgettable collective memory.",
    image: "/images/services_entertainment.jpg",
    imageAlt: "Classical Indian sitar and violin fusion artists performing on an elevated candlelit palace stage",
    imageCaption: "Sufi & Classical Fusion Dusk Concert, Samode Courtyard",
    stats: [
      { label: "Talent Roster", value: "Pan-India & Global" },
      { label: "Audio Director", value: "Dedicated On-Site" },
      { label: "Rider Care", value: "Flawless Backstage" },
    ],
    deliverables: [
      "Curated Artist Roster Tailored to the Event Journey",
      "Bilingual Emcees & Sophisticated Master of Ceremonies",
      "Full Rider, Travel, Hospitality & Greenroom Production",
      "Bespoke Folk-Fusion & Classical Symphony Ensembles",
      "Strict Rehearsal Management & Soundcheck Discipline",
      "Confidentiality & High-Profile Dignitary Management",
    ],
    locationsOrFormat: [
      "Acoustic Durbar Halls",
      "Amphitheater Amphora Stages",
      "Intimate Sangeet Ballrooms",
      "Sunset Desert Campgrounds",
    ],
    paletteFocus: "Ink, Warm Brass, and Oxblood accents",
    icon: Mic2,
    runOfShow: [
      {
        timeOrPhase: "T-4 Hours",
        title: "Acoustic Tuning & Spatial Frequency Sweep",
        detail: "Live multi-point frequency tuning to prevent flutter echoes off palace stone walls, digital mixer rehearsal balancing.",
      },
      {
        timeOrPhase: "Guest Arrival",
        title: "Ambient Acoustic Prelude",
        detail: "Subtle sitar, santoor, and tabla strains welcoming guests as they cross the torchlit torchways, establishing solemn grandeur.",
      },
      {
        timeOrPhase: "Peak Hour",
        title: "Headline Ensemble & Emcee Choreography",
        detail: "Dynamic crescendo featuring acclaimed Sufi vocalists or fusion orchestra, seamlessly punctuated by the Master of Ceremonies.",
      },
    ],
    venueFeasibility: {
      recommendedVenues: "Mehrangarh Fort Courtyard, Alila Fort Amphitheatre, private palace garden stages",
      guestCapacity: "Performances scaled for intimate salons of 30 to open lawns of 2,000",
      curfewAndAcoustics: "Directional line-array speakers to comply with local noise regulations without losing warmth",
      logisticsNote: "Dedicated VIP artist hospitality suites, secure transportation, and strict NDA enforcement",
    },
  },
];

const commissionPhases = [
  {
    phase: "Phase 01",
    duration: "Weeks 1 — 4",
    title: "Archival Inquiry & Vision Charter",
    description:
      "We begin not with vendor catalogs, but with listening. Our creative directors delve into your family lineage, personal aesthetics, or corporate mandate. We cross-reference historical archives, venue blueprints, and seasonal climate patterns across Rajasthan to draft an uncompromising creative charter.",
    inclusions: [
      "Comprehensive aesthetic discovery and patron lifestyle consultation",
      "Palace availability, private estate reconnaissance, and date feasibility",
      "Atmospheric moodboards, color palette chemistry, and initial budget model",
    ],
  },
  {
    phase: "Phase 02",
    duration: "Weeks 5 — 12",
    title: "Spatial Scenography & 3D Engineering",
    description:
      "Every square meter of the chosen venue is digitally surveyed. Our spatial architects develop three-dimensional CAD models showing sightlines, lighting angles, guest movement vectors, and custom structure schematics. Nothing is left to on-site guesswork.",
    inclusions: [
      "To-scale 3D digital renders of mandaps, stages, and banquet halls",
      "Comprehensive structural engineering and fire-safety compliance checks",
      "Curated material swatches (hand-dyed silks, raw sandstone, wrought brass)",
    ],
  },
  {
    phase: "Phase 03",
    duration: "Weeks 13 — 24",
    title: "Purveyors, Master Artisans & Protocol Liaison",
    description:
      "We curate master craftspeople across Rajasthan and beyond — from royal confectioners and Sanganer block-printers to international florists and sound engineers. Guest hospitality logistics, chartered aviation, and governmental liaisons are cemented.",
    inclusions: [
      "Tasting sessions with bespoke culinary masters and guest sommeliers",
      "Direct contracting of celebrated artists, Sufi ensembles, and emcees",
      "VVIP protocol coordination, security zoning, and airport jet logistics",
    ],
  },
  {
    phase: "Phase 04",
    duration: "Production Week",
    title: "On-Site Command, Ritual Protocol & Execution",
    description:
      "Our team arrives 72 hours prior to establish our on-site command post. With dual creative and operations directors leading every minute, your celebration unfolds with effortless serenity, leaving you free to exist entirely in the moment.",
    inclusions: [
      "Rigorous rehearsal protocols for ceremonial rituals and performances",
      "Dedicated bridal and host personal concierges on call 24 hours a day",
      "Circular post-event dismantling and responsible botanical composting",
    ],
  },
];

const heritageVenues = [
  {
    name: "Rambagh Palace",
    city: "Jaipur",
    heritage: "Former Residence of the Maharaja of Jaipur",
    capacity: "Up to 800 Guests",
    vibe: "Regal Rajputana grandeur with sprawling Mughal gardens and marble courtyards",
  },
  {
    name: "Taj Lake Palace",
    city: "Udaipur",
    heritage: "18th-century island palace in Lake Pichola",
    capacity: "Up to 250 Guests",
    vibe: "Floating white marble sanctuary offering total exclusivity and water reflections",
  },
  {
    name: "Umaid Bhawan Palace",
    city: "Jodhpur",
    heritage: "Art Deco and Beaux-Arts royal residence",
    capacity: "Up to 1,000 Guests",
    vibe: "Chittar sandstone monumentality with private subterranean museum spaces",
  },
  {
    name: "Alila Fort Bishangarh",
    city: "Jaipur Hinterlands",
    heritage: "230-year-old warrior fortress atop a granite hill",
    capacity: "Up to 350 Guests",
    vibe: "Raw historic stone arches, dramatic turrets, and open-air amphitheater",
  },
];

export default function Services() {
  const [activeTab, setActiveTab] = useState<string>("weddings");
  const [dossierSubTab, setDossierSubTab] = useState<"creative" | "protocol" | "venues">("creative");

  const selectedService =
    servicesData.find((s) => s.id === activeTab) || servicesData[0];

  return (
    <section
      id="services"
      className="py-24 sm:py-32 bg-parchment relative border-b border-stone/20"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="flex items-center space-x-3 mb-4">
            <span className="w-8 h-[1px] bg-brass" />
            <p className="text-xs uppercase tracking-[0.25em] font-medium text-stone">
              Disciplines &amp; Architecture
            </p>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-ink font-normal tracking-[-0.01em] leading-tight">
            Architected for significance. Produced with absolute precision.
          </h2>
          <p className="mt-6 text-base sm:text-lg text-ink/80 font-light leading-relaxed">
            Our atelier accepts strictly twelve commissions each calendar year. This intentional limitation guarantees uncompromised creative immersion, meticulous logistics, and absolute devotion to each celebration across Jaipur and India.
          </p>
        </div>

        {/* Tab Selector Nav - Editorial styling */}
        <div className="border-b border-stone/25 mb-12 overflow-x-auto scrollbar-none">
          <div className="flex space-x-2 sm:space-x-8 min-w-max pb-1" role="tablist">
            {servicesData.map((service) => {
              const isActive = activeTab === service.id;
              const Icon = service.icon;
              return (
                <button
                  key={service.id}
                  onClick={() => setActiveTab(service.id)}
                  className={`pb-4 px-2 text-left transition-all duration-300 relative group flex items-center space-x-2.5 ${
                    isActive ? "text-oxblood font-medium" : "text-ink/65 hover:text-ink font-normal"
                  }`}
                  aria-selected={isActive}
                  role="tab"
                  id={`tab-${service.id}`}
                >
                  <Icon
                    className={`w-4 h-4 transition-colors ${
                      isActive ? "text-oxblood" : "text-stone group-hover:text-ink"
                    }`}
                  />
                  <span className="text-xs tracking-[0.16em] uppercase">
                    {service.title.split("&")[0].trim()}
                  </span>
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-oxblood" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Master Interactive Dossier for the active service */}
        <div className="bg-bone border border-stone/25 shadow-sm mb-20 overflow-hidden">
          
          {/* Top Panel: Split Editorial Photography & Title Summary */}
          <div className="grid grid-cols-1 lg:grid-cols-12 border-b border-stone/20">
            
            {/* Left Column: Title & Key Credentials */}
            <div className="lg:col-span-7 p-6 sm:p-10 md:p-12 flex flex-col justify-between">
              <div>
                <div className="flex items-center space-x-3 mb-3">
                  <span className="text-[11px] font-mono tracking-widest text-brass uppercase">
                    {selectedService.discipline}
                  </span>
                  <span className="text-stone/40">&bull;</span>
                  <span className="text-[11px] uppercase tracking-[0.2em] text-stone">
                    Jaipur Commission Dossier
                  </span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl text-ink font-normal leading-snug mb-3">
                  {selectedService.title}
                </h3>

                <p className="text-sm sm:text-base font-serif italic text-stone mb-6">
                  &ldquo;{selectedService.subtitle}&rdquo;
                </p>

                <p className="text-sm sm:text-base text-ink/85 font-light leading-relaxed mb-6">
                  {selectedService.description}
                </p>

                <div className="p-5 bg-parchment-light border-l-2 border-oxblood mb-6">
                  <p className="font-serif italic text-ink/90 text-sm sm:text-base leading-relaxed">
                    &ldquo;{selectedService.editorialQuote}&rdquo;
                  </p>
                </div>
              </div>

              {/* Stats Bar */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-stone/20 bg-parchment/40 p-4">
                {selectedService.stats.map((stat, idx) => (
                  <div key={idx}>
                    <p className="font-serif text-base sm:text-lg text-ink font-normal">
                      {stat.value}
                    </p>
                    <p className="text-[9px] uppercase tracking-wider text-stone mt-0.5">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: High-Res Editorial Photography with Archival Caption */}
            <div className="lg:col-span-5 relative min-h-[340px] sm:min-h-[420px] lg:min-h-full border-t lg:border-t-0 lg:border-l border-stone/20">
              <Image
                src={selectedService.image}
                alt={selectedService.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent pointer-events-none" />
              
              <div className="absolute bottom-0 left-0 right-0 p-6 text-bone">
                <p className="text-[10px] font-mono tracking-widest text-brass uppercase mb-1">
                  ARCHIVAL RECORD &bull; {selectedService.discipline.toUpperCase()}
                </p>
                <p className="font-serif text-sm sm:text-base text-bone font-normal">
                  {selectedService.imageCaption}
                </p>
                <p className="text-[11px] text-parchment/80 mt-1 font-light">
                  Atmospheric Palette: {selectedService.paletteFocus}
                </p>
              </div>
            </div>

          </div>

          {/* Sub-Dossier Navigation (Tabs for In-Depth Data) */}
          <div className="bg-parchment-light/80 border-b border-stone/20 px-6 sm:px-10 py-3 flex items-center justify-between overflow-x-auto scrollbar-none">
            <div className="flex items-center space-x-6 min-w-max">
              <button
                type="button"
                onClick={() => setDossierSubTab("creative")}
                className={`flex items-center space-x-2 text-xs uppercase tracking-[0.18em] py-2 border-b-2 transition-all ${
                  dossierSubTab === "creative"
                    ? "border-oxblood text-oxblood font-medium"
                    : "border-transparent text-ink/70 hover:text-ink font-normal"
                }`}
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Scope &amp; Deliverables</span>
              </button>

              <button
                type="button"
                onClick={() => setDossierSubTab("protocol")}
                className={`flex items-center space-x-2 text-xs uppercase tracking-[0.18em] py-2 border-b-2 transition-all ${
                  dossierSubTab === "protocol"
                    ? "border-oxblood text-oxblood font-medium"
                    : "border-transparent text-ink/70 hover:text-ink font-normal"
                }`}
              >
                <Clock className="w-3.5 h-3.5" />
                <span>Run-of-Show Protocol</span>
              </button>

              <button
                type="button"
                onClick={() => setDossierSubTab("venues")}
                className={`flex items-center space-x-2 text-xs uppercase tracking-[0.18em] py-2 border-b-2 transition-all ${
                  dossierSubTab === "venues"
                    ? "border-oxblood text-oxblood font-medium"
                    : "border-transparent text-ink/70 hover:text-ink font-normal"
                }`}
              >
                <MapPin className="w-3.5 h-3.5" />
                <span>Venue Feasibility &amp; Guidelines</span>
              </button>
            </div>

            <Link
              href="#inquiry"
              className="hidden sm:inline-block px-4 py-2 bg-oxblood text-bone hover:bg-oxblood-deep text-[11px] tracking-[0.2em] uppercase font-medium transition-colors"
            >
              Inquire For Date
            </Link>
          </div>

          {/* Sub-Dossier Content Panel (Full SSR Content) */}
          <div className="p-6 sm:p-10 md:p-12">
            
            {/* View A: Scope & Inclusions */}
            <div className={dossierSubTab === "creative" ? "block" : "hidden sm:block"}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xs uppercase tracking-[0.22em] font-medium text-stone mb-5">
                    Core Atelier Deliverables Included
                  </h4>
                  <ul className="space-y-3.5">
                    {selectedService.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-start space-x-3 text-xs sm:text-sm text-ink/85 font-light">
                        <span className="mt-1 w-1.5 h-1.5 rounded-full bg-brass flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-xs uppercase tracking-[0.22em] font-medium text-stone mb-3">
                      Curated Regional Settings
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedService.locationsOrFormat.map((loc, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-parchment text-ink/80 text-xs border border-stone/20"
                        >
                          {loc}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="p-4 bg-parchment-light border border-stone/20">
                    <p className="text-[11px] uppercase tracking-wider text-stone font-medium mb-1">
                      Patron Discretion Standard
                    </p>
                    <p className="text-xs text-ink/75 font-light leading-relaxed">
                      All guest lists, financial expenditures, floor plans, and VIP dignitary movements are governed by bilateral non-disclosure agreements.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* View B: Run-of-Show Protocol */}
            <div className={dossierSubTab === "protocol" ? "block" : "hidden"}>
              <h4 className="text-xs uppercase tracking-[0.22em] font-medium text-stone mb-6">
                Sample Execution Cadence &bull; {selectedService.title}
              </h4>
              <div className="space-y-6">
                {selectedService.runOfShow.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-5 bg-parchment-light border-l-2 border-brass flex flex-col sm:flex-row sm:items-start sm:space-x-6"
                  >
                    <span className="text-xs font-mono tracking-widest text-brass uppercase font-semibold mb-2 sm:mb-0 sm:w-44 flex-shrink-0">
                      {item.timeOrPhase}
                    </span>
                    <div>
                      <h5 className="font-serif text-base sm:text-lg text-ink font-medium mb-1">
                        {item.title}
                      </h5>
                      <p className="text-xs sm:text-sm text-ink/80 font-light leading-relaxed">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* View C: Venue Feasibility */}
            <div className={dossierSubTab === "venues" ? "block" : "hidden"}>
              <h4 className="text-xs uppercase tracking-[0.22em] font-medium text-stone mb-6">
                Heritage Architectural &amp; Logistical Feasibility
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-5 bg-parchment border border-stone/20">
                  <p className="text-[11px] uppercase tracking-wider text-stone font-medium mb-1">
                    Recommended Palaces &amp; Estates
                  </p>
                  <p className="font-serif text-base text-ink font-normal mb-3">
                    {selectedService.venueFeasibility.recommendedVenues}
                  </p>
                  <p className="text-xs text-ink/75 font-light">
                    Guest Capacity: <span className="font-medium text-ink">{selectedService.venueFeasibility.guestCapacity}</span>
                  </p>
                </div>

                <div className="p-5 bg-parchment border border-stone/20">
                  <p className="text-[11px] uppercase tracking-wider text-stone font-medium mb-1">
                    Acoustics, Curfew &amp; Preservation
                  </p>
                  <p className="text-xs text-ink/85 font-light leading-relaxed mb-3">
                    {selectedService.venueFeasibility.curfewAndAcoustics}
                  </p>
                  <p className="text-xs text-stone italic border-t border-stone/15 pt-2">
                    {selectedService.venueFeasibility.logisticsNote}
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Extended Section 1B: The 4-Phase Atelier Commission Protocol */}
        <div className="mb-24 pt-12 border-t border-stone/25">
          <div className="max-w-3xl mb-12">
            <div className="flex items-center space-x-3 mb-3">
              <span className="w-6 h-[1px] bg-brass" />
              <p className="text-xs uppercase tracking-[0.25em] font-medium text-stone">
                Methodology &amp; Standards
              </p>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl text-ink font-normal leading-snug">
              The Four-Phase Commission Protocol
            </h3>
            <p className="mt-4 text-sm sm:text-base text-ink/80 font-light leading-relaxed">
              Every celebration is developed through our architectural lifecycle. We merge artistic vision with forensic production schedules so that beauty is supported by unyielding logistical rigor.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {commissionPhases.map((phase, idx) => (
              <div
                key={idx}
                className="bg-bone border border-stone/20 p-6 flex flex-col justify-between transition-all hover:border-stone/40"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-stone/15">
                    <span className="text-[10px] font-mono tracking-widest text-brass uppercase">
                      {phase.phase}
                    </span>
                    <span className="text-[10px] uppercase tracking-wider text-stone">
                      {phase.duration}
                    </span>
                  </div>

                  <h4 className="font-serif text-lg text-ink font-normal mb-3">
                    {phase.title}
                  </h4>

                  <p className="text-xs text-ink/80 font-light leading-relaxed mb-6">
                    {phase.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-stone/15 space-y-2">
                  <p className="text-[10px] uppercase tracking-wider text-stone font-medium">
                    Deliverable Milestones:
                  </p>
                  {phase.inclusions.map((inc, i) => (
                    <div key={i} className="flex items-start space-x-2 text-[11px] text-ink/75">
                      <span className="text-brass mt-0.5">&bull;</span>
                      <span>{inc}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Extended Section 1C: Curated Heritage Venues Matrix */}
        <div className="mb-24 pt-12 border-t border-stone/25">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-4 border-b border-stone/20">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] font-medium text-stone mb-2">
                Geographic Footprint
              </p>
              <h3 className="font-serif text-2xl sm:text-3xl text-ink font-normal">
                Curated Heritage Venues &amp; Private Palaces
              </h3>
            </div>
            <p className="text-xs text-stone uppercase tracking-wider mt-2 md:mt-0">
              Rajasthan &bull; Delhi NCR &bull; Private Estates
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {heritageVenues.map((venue, idx) => (
              <div
                key={idx}
                className="bg-bone border border-stone/20 p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-start mb-3">
                    <span className="text-[10px] font-mono tracking-widest text-brass uppercase">
                      {venue.city}
                    </span>
                    <span className="text-[10px] text-stone uppercase">
                      {venue.capacity}
                    </span>
                  </div>
                  <h4 className="font-serif text-xl text-ink font-normal mb-1">
                    {venue.name}
                  </h4>
                  <p className="text-xs text-stone italic mb-4">
                    {venue.heritage}
                  </p>
                  <p className="text-xs text-ink/80 font-light leading-relaxed">
                    {venue.vibe}
                  </p>
                </div>
                <div className="pt-4 mt-6 border-t border-stone/15 flex items-center justify-between text-[11px] text-oxblood">
                  <span>Atelier Buyout Liaison</span>
                  <span>&bull;</span>
                  <span>Full Technical Survey</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* All 5 Services Full Catalog Cards (With Bespoke Photography per Card) */}
        <div className="mt-16 pt-12 border-t border-stone/25">
          <div className="flex items-center justify-between mb-8 pb-3 border-b border-stone/20">
            <div>
              <h3 className="font-serif text-xl sm:text-2xl text-ink font-normal">
                The Complete Discipline Catalog
              </h3>
              <p className="text-xs text-stone mt-1">
                Explore all 5 core specializations of the Ember &amp; Ivory atelier
              </p>
            </div>
            <span className="text-xs uppercase tracking-[0.2em] text-stone">
              5 Disciplines &bull; 2026 Season
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service) => {
              const Icon = service.icon;
              return (
                <article
                  key={service.id}
                  className="bg-bone border border-stone/20 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:border-brass/60 hover:shadow-md group"
                >
                  {/* Card Editorial Image Thumbnail */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-stone/20">
                    <Image
                      src={service.image}
                      alt={service.imageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-4 right-4 flex justify-between items-end text-bone">
                      <span className="text-[10px] font-mono tracking-widest text-brass uppercase">
                        {service.discipline}
                      </span>
                      <span className="text-[10px] tracking-wider text-bone/90 uppercase">
                        {service.stats[0].value}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between pb-3 mb-4 border-b border-stone/15">
                        <h4 className="font-serif text-xl text-ink font-normal">
                          {service.title}
                        </h4>
                        <Icon className="w-4 h-4 text-stone flex-shrink-0 ml-2" />
                      </div>

                      <p className="text-xs text-stone italic mb-3">
                        {service.subtitle}
                      </p>

                      <p className="text-xs text-ink/80 font-light leading-relaxed mb-6 line-clamp-3">
                        {service.description}
                      </p>

                      {/* Key Deliverables */}
                      <div className="space-y-2 pt-4 border-t border-stone/15 mb-6">
                        <p className="text-[10px] uppercase tracking-wider text-stone font-medium">
                          Selected Inclusions:
                        </p>
                        {service.deliverables.slice(0, 3).map((d, i) => (
                          <div key={i} className="flex items-start space-x-2 text-[11px] text-ink/80">
                            <span className="text-brass mt-0.5">&bull;</span>
                            <span>{d}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Card action trigger */}
                    <div className="pt-4 border-t border-stone/15 flex items-center justify-between">
                      <button
                        type="button"
                        onClick={() => {
                          setActiveTab(service.id);
                          document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
                        }}
                        className="text-xs uppercase tracking-[0.16em] font-medium text-oxblood hover:text-oxblood-deep"
                      >
                        Inspect Dossier &rarr;
                      </button>
                      <span className="text-[10px] text-stone">
                        Jaipur Atelier
                      </span>
                    </div>
                  </div>
                </article>
              );
            })}

            {/* Atelier Commission Invitation Card */}
            <article className="bg-ink text-bone border border-ink p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-4 mb-5 border-b border-bone/15">
                  <span className="text-[10px] font-mono tracking-widest text-brass uppercase">
                    Direct Commission
                  </span>
                  <Layers className="w-4 h-4 text-brass" />
                </div>
                <h4 className="font-serif text-2xl text-bone font-normal mb-3">
                  Tailored Multi-Discipline Commissions
                </h4>
                <p className="text-xs sm:text-sm text-parchment/80 font-light leading-relaxed mb-6">
                  Most of our patrons require seamless synthesis — pairing full palace buyout management with bespoke scenography and master artist curation under one unified creative hand.
                </p>
                <div className="p-4 bg-ink-soft border border-bone/10 mb-6">
                  <p className="text-xs text-bone/90 font-serif italic leading-relaxed">
                    &ldquo;One single creative hand orchestrates your sacred ceremony, monumental scenography, and guest journey.&rdquo;
                  </p>
                </div>
                <div className="text-[11px] text-stone uppercase tracking-wider space-y-1">
                  <p>&bull; 12 Commissions Maximum Annually</p>
                  <p>&bull; Dual Creative &amp; Logistics Directors</p>
                  <p>&bull; Strict Bilateral Discretion (NDA)</p>
                </div>
              </div>

              <div className="pt-6 border-t border-bone/15 mt-6">
                <Link
                  href="#inquiry"
                  className="inline-block w-full text-center px-4 py-3.5 bg-oxblood text-bone hover:bg-oxblood-light transition-colors text-xs tracking-[0.2em] uppercase font-medium"
                >
                  Request Consultation
                </Link>
              </div>
            </article>
          </div>
        </div>

      </div>
    </section>
  );
}
