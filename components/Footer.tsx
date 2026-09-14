import Link from "next/link";
import { Compass, ShieldCheck, ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-ink text-bone relative border-t border-bone/15 overflow-hidden">
      {/* Subtle background grain */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none mix-blend-screen"
        style={{
          backgroundImage: `radial-gradient(#FAF7F0 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
        aria-hidden="true"
      />

      {/* Top Banner: Editorial Philosophy Invitation */}
      <div className="border-b border-bone/15 py-16 sm:py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center space-x-3 mb-3">
              <span className="w-6 h-[1px] bg-brass" />
              <p className="text-[10px] font-mono tracking-widest text-brass uppercase">
                Jaipur &bull; Private Atelier &bull; Est. 2018
              </p>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-bone font-normal leading-tight">
              A gathering is remembered not by its extravagance, but by its stillness, its light, and the dignity of its hosts.
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 flex-shrink-0">
            <Link
              href="#inquiry"
              className="px-8 py-4 bg-oxblood text-bone hover:bg-oxblood-light transition-colors text-xs tracking-[0.22em] uppercase font-medium shadow-sm"
            >
              Reserve A Consultation
            </Link>
          </div>
        </div>
      </div>

      {/* Main 4-Column Directory */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 py-16 sm:py-20 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Column 1: Brand & Atelier Address (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <div>
              <span className="font-serif text-2xl sm:text-3xl tracking-[0.16em] uppercase text-bone block">
                Ember &amp; Ivory
              </span>
              <p className="text-[10px] tracking-[0.3em] text-stone uppercase mt-1">
                Events &amp; Weddings &bull; Jaipur Atelier
              </p>
            </div>

            <p className="text-xs text-parchment/80 font-light leading-relaxed max-w-sm">
              Architects of temporary worlds. We orchestrate private palace buyouts, high-stakes corporate galas, and transcendent scenography across Rajasthan and India.
            </p>

            <div className="space-y-3 pt-2 text-xs text-stone font-light">
              <div>
                <span className="text-[10px] uppercase tracking-wider text-brass block">
                  Jaipur Headquarters
                </span>
                <p className="text-parchment/90">
                  Narain Niwas Heritage Compound, Anandilal Poddar Marg, Jaipur 302004
                </p>
              </div>

              <div>
                <span className="text-[10px] uppercase tracking-wider text-brass block">
                  Udaipur Harbourside Desk
                </span>
                <p className="text-parchment/90">
                  Lake Pichola Historic Quarters, Old City, Udaipur 313001
                </p>
              </div>

              <div className="pt-2 flex flex-col space-y-1">
                <a href="tel:+911412568920" className="hover:text-bone transition-colors">
                  +91 (0141) 256 8920 (Private Desk)
                </a>
                <a href="mailto:atelier@emberandivory.events" className="hover:text-bone transition-colors">
                  atelier@emberandivory.events
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Disciplines (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <p className="text-xs font-mono uppercase tracking-widest text-brass pb-2 border-b border-bone/15">
              Disciplines
            </p>
            <ul className="space-y-2.5 text-xs text-parchment/80 font-light">
              <li>
                <Link href="#services" className="hover:text-bone transition-colors">
                  Heritage Destination Weddings
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-bone transition-colors">
                  Corporate Galas &amp; Leadership Summits
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-bone transition-colors">
                  Private Milestone Soirées
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-bone transition-colors">
                  Spatial Scenography &amp; Floristry
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-bone transition-colors">
                  Artist &amp; Orchestra Curation
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-bone transition-colors">
                  Private Palace Buyout Consulting
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Selected Palaces & Venues (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <p className="text-xs font-mono uppercase tracking-widest text-brass pb-2 border-b border-bone/15">
              Sanctuaries
            </p>
            <ul className="space-y-2.5 text-xs text-parchment/80 font-light">
              <li>
                <Link href="#portfolio" className="hover:text-bone transition-colors">
                  Rambagh Palace
                </Link>
              </li>
              <li>
                <Link href="#portfolio" className="hover:text-bone transition-colors">
                  Samode Palace
                </Link>
              </li>
              <li>
                <Link href="#portfolio" className="hover:text-bone transition-colors">
                  Taj Lake Palace
                </Link>
              </li>
              <li>
                <Link href="#portfolio" className="hover:text-bone transition-colors">
                  Umaid Bhawan
                </Link>
              </li>
              <li>
                <Link href="#portfolio" className="hover:text-bone transition-colors">
                  Alila Fort
                </Link>
              </li>
              <li>
                <Link href="#portfolio" className="hover:text-bone transition-colors">
                  Six Senses Barwara
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Discretion & Navigation (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <p className="text-xs font-mono uppercase tracking-widest text-brass pb-2 border-b border-bone/15">
              Protocol &amp; Access
            </p>
            <ul className="space-y-2.5 text-xs text-parchment/80 font-light">
              <li>
                <Link href="#about" className="hover:text-bone transition-colors">
                  Atelier Philosophy &amp; Creed
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-bone transition-colors">
                  The Principals &amp; Founders
                </Link>
              </li>
              <li>
                <Link href="#testimonials" className="hover:text-bone transition-colors">
                  Patron Letters &amp; Transcripts
                </Link>
              </li>
              <li>
                <Link href="#inquiry" className="hover:text-bone transition-colors">
                  Bilateral NDA &amp; Privacy Charter
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-bone transition-colors">
                  Circular Composting Commitment
                </Link>
              </li>
            </ul>

            {/* Discretion statement */}
            <div className="p-3.5 bg-ink-soft border border-bone/10 mt-4 text-[11px] text-stone leading-relaxed">
              Strict bilateral non-disclosure agreements are executed prior to all creative and budget presentations.
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Hairline & Legal Bar */}
      <div className="border-t border-bone/15 py-8 relative z-10 bg-ink-pure">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-stone">
          
          <div>
            <span>&copy; {new Date().getFullYear()} Ember &amp; Ivory Events Pvt. Ltd. All rights reserved.</span>
          </div>

          {/* Agency Attribution for Siyara Innovations */}
          <div className="flex items-center space-x-2">
            <span>Conceived &amp; Crafted by</span>
            <span className="text-bone font-medium">Siyara Innovations</span>
            <span>(Jaipur, India)</span>
            <span className="text-stone/40">&bull;</span>
            <span className="text-brass">Project #1 of 7</span>
          </div>

          {/* Smooth Scroll Back to Top */}
          <div>
            <a
              href="#"
              className="hover:text-bone transition-colors flex items-center space-x-1 uppercase tracking-wider text-[10px]"
            >
              <span>Return to Top</span>
              <ArrowUp className="w-3 h-3" />
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}
