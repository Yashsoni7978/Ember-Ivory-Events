import Image from "next/image";
import Link from "next/link";
import { 
  Compass, 
  Layers, 
  Sparkles, 
  ShieldCheck, 
  MapPin, 
  Award,
  BookOpen,
  ArrowUpRight
} from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="py-24 sm:py-32 bg-parchment relative border-b border-stone/20 overflow-hidden"
    >
      {/* Background architectural grid */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-multiply"
        style={{
          backgroundImage: `linear-gradient(to right, #1A1816 1px, transparent 1px), linear-gradient(to bottom, #1A1816 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="flex items-center space-x-3 mb-4">
            <span className="w-8 h-[1px] bg-brass" />
            <p className="text-xs uppercase tracking-[0.25em] font-medium text-stone">
              Atelier &amp; Philosophy
            </p>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-ink font-normal tracking-[-0.01em] leading-tight">
            We are architects of temporary worlds.
          </h2>
          <p className="mt-6 text-base sm:text-lg text-ink/80 font-light leading-relaxed">
            Founded in Jaipur in 2018, Ember &amp; Ivory was conceived as an intentional antidote to the commercial event industry. We approach gatherings not as decoration, but as ephemeral architecture — honoring the proportions of centuries-old stone and curating sensory stillness with the same devotion as spectacle.
          </p>
        </div>

        {/* Master Asymmetric Feature: Atelier Origin & Architectural Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24">
          
          {/* Left Visual: Spatial Scenography & Haveli Atelier Plate */}
          <div className="lg:col-span-6 relative">
            <div className="bg-bone border border-stone/30 p-4 sm:p-5 shadow-sm">
              <div className="relative aspect-[4/3] sm:aspect-[16/11] bg-stone/20 overflow-hidden border border-stone/20">
                <Image
                  src="/images/services_decor.jpg"
                  alt="Spatial scenography and monumental floral architecture inside a Rajasthan palace ballroom"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-transparent to-transparent pointer-events-none" />
                
                <div className="absolute bottom-4 left-5 right-5 text-bone flex justify-between items-end">
                  <div>
                    <span className="text-[9px] font-mono tracking-widest text-brass uppercase block mb-1">
                      JAIPUR ATELIER &bull; ARCHIVAL SURVEY
                    </span>
                    <p className="font-serif text-base text-bone font-normal">
                      The Scenography Studio &amp; Fabrication Guild
                    </p>
                    <p className="text-[11px] text-parchment/80">
                      Narain Niwas Heritage Compound, Jaipur
                    </p>
                  </div>
                  <span className="text-[9px] font-mono tracking-widest text-stone/90 uppercase border border-bone/20 px-2 py-0.5">
                    EST. 2018
                  </span>
                </div>
              </div>
            </div>

            {/* Inset Credential Badge */}
            <div className="mt-4 p-4 bg-bone border border-stone/20 flex items-center justify-between text-xs">
              <div className="flex items-center space-x-2 text-stone">
                <Compass className="w-4 h-4 text-brass" />
                <span className="uppercase tracking-wider text-[10px]">Headquarters:</span>
                <span className="font-serif text-ink font-medium">Jaipur, Rajasthan</span>
              </div>
              <span className="text-stone/40">&bull;</span>
              <div className="text-stone text-[11px]">
                Operating across Jaipur, Udaipur, Jodhpur &amp; Pan-India
              </div>
            </div>
          </div>

          {/* Right Narrative: The Three Pillars */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div className="space-y-8">
              
              <div className="border-l-2 border-oxblood pl-6 py-1">
                <h3 className="font-serif text-xl sm:text-2xl text-ink font-normal mb-2">
                  Architectural Restraint
                </h3>
                <p className="text-xs sm:text-sm text-ink/80 font-light leading-relaxed">
                  We reject the standard practice of concealing historic venues beneath synthetic fabric and plastic trussing. We work with conservation engineers to ensure zero permanent structural anchors, allowing the authentic majesty of sandstone and marble to frame your celebration.
                </p>
              </div>

              <div className="border-l-2 border-brass pl-6 py-1">
                <h3 className="font-serif text-xl sm:text-2xl text-ink font-normal mb-2">
                  Sensory Calibration
                </h3>
                <p className="text-xs sm:text-sm text-ink/80 font-light leading-relaxed">
                  A grand event is not merely visual; it is an acoustic and atmospheric continuum. We tune color temperature (2200K warm candle glow), sound reflection vectors, and natural botanical scents (indigenous tuberoses, vetiver, and temple marigolds) like an orchestral score.
                </p>
              </div>

              <div className="border-l-2 border-stone pl-6 py-1">
                <h3 className="font-serif text-xl sm:text-2xl text-ink font-normal mb-2">
                  The Guild of Master Purveyors
                </h3>
                <p className="text-xs sm:text-sm text-ink/80 font-light leading-relaxed">
                  We do not rely on middleman rental agencies. We directly engage Jaipur&apos;s heritage master craftsmen — stone carvers, brass smiths, block printers, and royal genealogists — keeping ancient artisanal lineages alive through contemporary patronage.
                </p>
              </div>

            </div>

            <div className="pt-8 mt-8 border-t border-stone/20 flex items-center justify-between">
              <span className="text-xs font-serif italic text-stone">
                &ldquo;Beauty without restraint is mere noise.&rdquo;
              </span>
              <Link
                href="#inquiry"
                className="text-xs uppercase tracking-[0.2em] font-medium text-oxblood hover:text-oxblood-deep"
              >
                Inquire With Principals &rarr;
              </Link>
            </div>
          </div>

        </div>

        {/* The Founding Principals */}
        <div className="mb-24 pt-12 border-t border-stone/25">
          <div className="max-w-3xl mb-12">
            <p className="text-xs uppercase tracking-[0.25em] font-medium text-stone mb-2">
              Creative Leadership
            </p>
            <h3 className="font-serif text-2xl sm:text-3xl text-ink font-normal">
              The Principals of the Atelier
            </h3>
            <p className="mt-3 text-xs sm:text-sm text-ink/80 font-light leading-relaxed">
              Every commission is steered directly by our co-founders from initial concept sketch to post-event restoration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Principal 01 */}
            <article className="bg-bone border border-stone/25 p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-stone/15 text-[10px] font-mono tracking-widest text-brass uppercase">
                  <span>Co-Founder &bull; Spatial Architecture</span>
                  <span>14 Years Experience</span>
                </div>
                <h4 className="font-serif text-2xl text-ink font-normal mb-1">
                  Raghavendra Rathore
                </h4>
                <p className="text-xs text-stone italic mb-4">
                  Architectural Conservationist &amp; Technical Director
                </p>
                <p className="text-xs sm:text-sm text-ink/80 font-light leading-relaxed mb-6">
                  Trained in architectural conservation at the School of Planning and Architecture (SPA), Raghavendra spent a decade executing non-invasive structural interventions across Rajasthan&apos;s UNESCO-recognized fortresses and royal palatial estates. He leads all spatial engineering, 3D CAD modeling, rigging safety, and heritage agency compliance.
                </p>
              </div>
              <div className="pt-4 border-t border-stone/15 flex items-center justify-between text-[11px] text-stone">
                <span>Direct Commission Oversight</span>
                <span>SPA Alumni &bull; Heritage Fellow</span>
              </div>
            </article>

            {/* Principal 02 */}
            <article className="bg-bone border border-stone/25 p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-stone/15 text-[10px] font-mono tracking-widest text-brass uppercase">
                  <span>Co-Founder &bull; Creative Direction</span>
                  <span>12 Years Experience</span>
                </div>
                <h4 className="font-serif text-2xl text-ink font-normal mb-1">
                  Ananya Singhania
                </h4>
                <p className="text-xs text-stone italic mb-4">
                  Art Historian, Floral Architect &amp; Protocol Director
                </p>
                <p className="text-xs sm:text-sm text-ink/80 font-light leading-relaxed mb-6">
                  With a background in South Asian decorative arts and textile curation at the National Museum Institute, Ananya oversees the aesthetic soul of every gathering. From sourcing rare heirloom botanicals and designing deckle-edged cotton suites to directing Vedic ceremonial rhythms and culinary storytelling with Michelin-lauded chefs.
                </p>
              </div>
              <div className="pt-4 border-t border-stone/15 flex items-center justify-between text-[11px] text-stone">
                <span>Aesthetic &amp; Sensory Direction</span>
                <span>Decorative Arts Curator</span>
              </div>
            </article>

          </div>
        </div>

        {/* The Heritage Purveyors Guild */}
        <div className="pt-12 border-t border-stone/25">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-4 border-b border-stone/20">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] font-medium text-stone mb-2">
                Regional Preservation
              </p>
              <h3 className="font-serif text-2xl sm:text-3xl text-ink font-normal">
                Our Guild of Master Purveyors
              </h3>
            </div>
            <p className="text-xs text-stone uppercase tracking-wider mt-2 md:mt-0">
              Jaipur &bull; Sanganer &bull; Amber &bull; Mewar
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                craft: "Jaipur Brass & Foundry",
                location: "Tripolia Bazaar Guild",
                description:
                  "Hand-beating solid brass candle sconces, hanging lanterns, and non-invasive cantilever mandap brackets without standard machine screws.",
                provenance: "3rd Generation Artisans",
              },
              {
                craft: "Amber Botanical Guild",
                location: "Amber Valley Cultivators",
                description:
                  "Sourcing fragrant indigenous desi gulab (country roses), white rajnigandha (tuberoses), and temple marigolds harvested at dawn.",
                provenance: "Zero-Pesticide Farms",
              },
              {
                craft: "Sanganer Paper & Linens",
                location: "Sanganer River District",
                description:
                  "Forming raw cotton deckle-edged stationery, place cards, and hand-loomed linen tablecloths dyed with natural madder and pomegranate.",
                provenance: "Heritage Cotton Looms",
              },
              {
                craft: "Royal Culinary Genealogists",
                location: "Mewar & Marwar Archives",
                description:
                  "Reviving forgotten royal thali recipes, silver banquet protocols, and slow wood-fire cooking techniques for discerning guests.",
                provenance: "Historic Court Recipes",
              },
            ].map((guild, idx) => (
              <div
                key={idx}
                className="bg-bone border border-stone/20 p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-center mb-3 text-[10px] font-mono tracking-widest text-brass uppercase">
                    <span>Guild 0{idx + 1}</span>
                    <span className="text-stone">{guild.provenance}</span>
                  </div>
                  <h4 className="font-serif text-lg text-ink font-medium mb-1">
                    {guild.craft}
                  </h4>
                  <p className="text-xs text-stone italic mb-3">
                    {guild.location}
                  </p>
                  <p className="text-xs text-ink/80 font-light leading-relaxed">
                    {guild.description}
                  </p>
                </div>
                <div className="pt-4 mt-6 border-t border-stone/15 text-[10px] uppercase tracking-wider text-stone">
                  Direct Atelier Collaboration
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
