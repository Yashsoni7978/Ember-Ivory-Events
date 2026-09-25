"use client";

import { useState } from "react";
import { 
  ShieldCheck, 
  MapPin, 
  Phone, 
  Mail, 
  Calendar, 
  Clock, 
  CheckCircle2, 
  Sparkles,
  Lock
} from "lucide-react";

export default function InquiryFunnel() {
  const [submitted, setSubmitted] = useState(false);
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [formData, setFormData] = useState({
    discipline: "Heritage Wedding",
    location: "Jaipur Heritage Palace",
    season: "Winter 2026 (Nov - Feb)",
    guestCount: "250 – 500 Guests",
    ndaRequired: "Yes — Standard Bilateral NDA",
    budgetScope: "Comprehensive Multi-Day Production",
    patronName: "",
    organizationOrFamily: "",
    email: "",
    phone: "",
    residenceCity: "",
    notes: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="inquiry"
      className="py-12 sm:py-16 bg-parchment relative border-b border-stone/20 overflow-hidden"
    >
      {/* Background texture watermark */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none mix-blend-multiply"
        style={{
          backgroundImage: `radial-gradient(#1A1816 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 relative z-10">
        
        {/* Asymmetric Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: The Atelier Invitation Charter */}
          <div className="lg:col-span-5 flex flex-col justify-between pt-2">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <span className="w-8 h-[1px] bg-brass" />
                <p className="text-xs uppercase tracking-[0.25em] font-medium text-stone">
                  Private Commission Inquiry
                </p>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl md:text-[2.75rem] text-ink font-normal tracking-[-0.01em] leading-tight mb-6">
                Begin a conversation with our principals.
              </h2>

              <p className="text-sm sm:text-base text-ink/85 font-light leading-relaxed mb-8">
                We do not employ intake algorithms, automated bots, or junior liaisons. Every prospective inquiry is personally reviewed by our founding creative and production directors within forty-eight hours.
              </p>

              {/* Season Availability Card */}
              <div className="p-6 bg-bone border border-stone/25 mb-8 shadow-sm">
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-stone/15 text-[11px] font-mono uppercase tracking-widest text-stone">
                  <span>Capacity Tracker</span>
                  <span className="text-oxblood font-semibold">2026 / 2027 Season</span>
                </div>
                <p className="font-serif text-lg text-ink font-normal mb-2">
                  Strictly 12 Commissions Maximum
                </p>
                <div className="w-full bg-parchment h-1.5 rounded-full overflow-hidden mb-3">
                  <div className="bg-oxblood h-full w-2/3" />
                </div>
                <div className="flex justify-between text-xs text-stone">
                  <span>8 Commissions Confirmed</span>
                  <span className="font-medium text-ink">4 Slots Remaining</span>
                </div>
              </div>

              {/* Direct Atelier Contact Information */}
              <div className="space-y-4 pt-4 border-t border-stone/20 text-xs sm:text-sm text-ink/85 font-light">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-4 h-4 text-brass flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-ink">Jaipur Atelier &amp; Studio</p>
                    <p className="text-stone text-xs">
                      Narain Niwas Heritage Precinct, Anandilal Poddar Marg, Jaipur, Rajasthan 302004
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-brass flex-shrink-0" />
                  <div>
                    <span className="text-stone text-xs block">Direct Private Desk</span>
                    <a href="tel:+911412568920" className="hover:text-oxblood transition-colors">
                      +91 (0141) 256 8920
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-brass flex-shrink-0" />
                  <div>
                    <span className="text-stone text-xs block">Patron Communications</span>
                    <a href="mailto:atelier@emberandivory.events" className="hover:text-oxblood transition-colors">
                      atelier@emberandivory.events
                    </a>
                  </div>
                </div>
              </div>

              {/* NDA & Discretion Seal */}
              <div className="mt-8 p-4 bg-parchment-light border border-stone/20 flex items-center space-x-3">
                <Lock className="w-4 h-4 text-stone flex-shrink-0" />
                <p className="text-[11px] text-stone leading-relaxed">
                  All preliminary conversations and project briefs are held under strict bilateral confidentiality.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Commission Funnel */}
          <div className="lg:col-span-7">
            <div className="bg-bone border border-stone/30 p-6 sm:p-10 md:p-12 shadow-sm">
              
              {submitted ? (
                /* Confirmation Screen upon Submission */
                <div className="py-12 px-4 text-center space-y-6 animate-fadeIn">
                  <div className="w-16 h-16 rounded-full bg-parchment border border-brass/40 mx-auto flex items-center justify-center text-oxblood">
                    <CheckCircle2 className="w-8 h-8 text-oxblood" />
                  </div>
                  
                  <div>
                    <span className="text-[10px] font-mono tracking-widest text-brass uppercase block mb-1">
                      INQUIRY CONFIDENTIALITY RECORD
                    </span>
                    <h3 className="font-serif text-3xl sm:text-4xl text-ink font-normal">
                      Your inquiry has been received.
                    </h3>
                  </div>

                  <div className="max-w-md mx-auto p-4 bg-parchment border border-stone/20 text-xs text-ink/80 text-left space-y-2">
                    <div className="flex justify-between pb-2 border-b border-stone/15">
                      <span className="text-stone">Archival Reference:</span>
                      <span className="font-mono text-ink font-medium">EI-2026-INQ-0482</span>
                    </div>
                    <div className="flex justify-between pb-2 border-b border-stone/15">
                      <span className="text-stone">Patron:</span>
                      <span className="font-medium text-ink">{formData.patronName || "Private Patron"}</span>
                    </div>
                    <div className="flex justify-between pb-2 border-b border-stone/15">
                      <span className="text-stone">Discipline:</span>
                      <span className="font-medium text-ink">{formData.discipline}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-stone">Target Setting:</span>
                      <span className="font-medium text-ink">{formData.location}</span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-ink/80 font-light leading-relaxed max-w-lg mx-auto">
                    A principal creative director will review your parameters and initiate a private consultation within forty-eight hours.
                  </p>

                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setCurrentStep(1);
                      }}
                      className="px-6 py-2.5 bg-ink text-bone text-xs uppercase tracking-[0.2em] font-medium hover:bg-oxblood transition-colors"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                /* Multi-Step Commission Funnel Form */
                <form onSubmit={handleSubmit} className="space-y-8">
                  
                  {/* Step Tracker */}
                  <div className="flex items-center justify-between pb-5 border-b border-stone/20 text-xs">
                    <div className="flex items-center space-x-2">
                      <span className="text-[10px] font-mono tracking-widest text-brass uppercase">
                        Step 0{currentStep} of 03
                      </span>
                      <span className="text-stone/40">&bull;</span>
                      <span className="text-xs uppercase tracking-wider text-ink font-medium">
                        {currentStep === 1 && "Commission Parameters"}
                        {currentStep === 2 && "Vision, Scope & Setting"}
                        {currentStep === 3 && "Patron Credentials"}
                      </span>
                    </div>

                    <div className="flex space-x-1">
                      {[1, 2, 3].map((step) => (
                        <div
                          key={step}
                          className={`w-6 h-1 transition-all ${
                            currentStep >= step ? "bg-oxblood" : "bg-stone/20"
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Step 1: Discipline & High-Level Parameters */}
                  {currentStep === 1 && (
                    <div className="space-y-6 animate-fadeIn">
                      <div>
                        <label className="block text-xs uppercase tracking-[0.2em] text-stone font-medium mb-3">
                          Select Gathering Discipline *
                        </label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {[
                            "Heritage Destination Wedding",
                            "Corporate Gala & Leadership Summit",
                            "Private Milestone Soirée / Supper",
                            "Spatial Scenography & Floristry",
                            "Artist Curation & Anchor Booking",
                          ].map((disp) => (
                            <button
                              type="button"
                              key={disp}
                              onClick={() => setFormData({ ...formData, discipline: disp })}
                              className={`p-3 text-left border text-xs tracking-wide transition-all ${
                                formData.discipline === disp
                                  ? "border-oxblood bg-parchment-light font-medium text-oxblood"
                                  : "border-stone/20 bg-parchment/40 text-ink/80 hover:border-stone/40"
                              }`}
                            >
                              {disp}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                        <div>
                          <label
                            htmlFor="season"
                            className="block text-xs uppercase tracking-[0.18em] text-stone font-medium mb-2"
                          >
                            Target Season or Year *
                          </label>
                          <select
                            id="season"
                            name="season"
                            value={formData.season}
                            onChange={handleInputChange}
                            className="w-full bg-parchment border border-stone/25 px-4 py-3 text-xs text-ink focus:outline-none focus:border-oxblood"
                          >
                            <option value="Winter 2026 (Nov - Feb)">Winter 2026 (Nov &ndash; Feb)</option>
                            <option value="Spring 2027 (Mar - Apr)">Spring 2027 (Mar &ndash; Apr)</option>
                            <option value="Monsoon / Autumn 2027 (Jul - Oct)">Monsoon / Autumn 2027 (Jul &ndash; Oct)</option>
                            <option value="Winter 2027 / 2028">Winter 2027 / 2028</option>
                            <option value="Date Undecided / Feasibility Stage">Date Undecided / Feasibility Stage</option>
                          </select>
                        </div>

                        <div>
                          <label
                            htmlFor="guestCount"
                            className="block text-xs uppercase tracking-[0.18em] text-stone font-medium mb-2"
                          >
                            Anticipated Guest Scale *
                          </label>
                          <select
                            id="guestCount"
                            name="guestCount"
                            value={formData.guestCount}
                            onChange={handleInputChange}
                            className="w-full bg-parchment border border-stone/25 px-4 py-3 text-xs text-ink focus:outline-none focus:border-oxblood"
                          >
                            <option value="Intimate: Under 60 Guests">Intimate: Under 60 Guests</option>
                            <option value="Select: 60 – 150 Guests">Select: 60 &ndash; 150 Guests</option>
                            <option value="Grand: 150 – 400 Guests">Grand: 150 &ndash; 400 Guests</option>
                            <option value="Monumental: 400 – 1,200 Guests">Monumental: 400 &ndash; 1,200 Guests</option>
                          </select>
                        </div>
                      </div>

                      <div className="pt-4 flex justify-end">
                        <button
                          type="button"
                          onClick={() => setCurrentStep(2)}
                          className="px-8 py-3.5 bg-ink text-bone hover:bg-oxblood transition-colors text-xs tracking-[0.2em] uppercase font-medium"
                        >
                          Continue to Scope &amp; Setting &rarr;
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Step 2: Setting, Scope & Notes */}
                  {currentStep === 2 && (
                    <div className="space-y-6 animate-fadeIn">
                      <div>
                        <label
                          htmlFor="location"
                          className="block text-xs uppercase tracking-[0.18em] text-stone font-medium mb-2"
                        >
                          Desired Heritage Setting or Region *
                        </label>
                        <select
                          id="location"
                          name="location"
                          value={formData.location}
                          onChange={handleInputChange}
                          className="w-full bg-parchment border border-stone/25 px-4 py-3 text-xs text-ink focus:outline-none focus:border-oxblood"
                        >
                          <option value="Jaipur Heritage Palace (Rambagh, Samode, Alila)">
                            Jaipur Heritage Palace (Rambagh, Samode, Alila)
                          </option>
                          <option value="Udaipur Lake Island Palace (Taj Lake, Jagmandir, Leela)">
                            Udaipur Lake Island Palace (Taj Lake, Jagmandir, Leela)
                          </option>
                          <option value="Jodhpur Royal Residence (Umaid Bhawan, Mehrangarh)">
                            Jodhpur Royal Residence (Umaid Bhawan, Mehrangarh)
                          </option>
                          <option value="Wilderness Fortress (Fort Barwara, Ranthambore)">
                            Wilderness Fortress (Fort Barwara, Ranthambore)
                          </option>
                          <option value="Private Family Estate / Non-Commercial Property">
                            Private Family Estate / Non-Commercial Property
                          </option>
                          <option value="Pan-India / International Destination">
                            Pan-India / International Destination
                          </option>
                        </select>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <label
                            htmlFor="budgetScope"
                            className="block text-xs uppercase tracking-[0.18em] text-stone font-medium mb-2"
                          >
                            Production Scope Benchmark
                          </label>
                          <select
                            id="budgetScope"
                            name="budgetScope"
                            value={formData.budgetScope}
                            onChange={handleInputChange}
                            className="w-full bg-parchment border border-stone/25 px-4 py-3 text-xs text-ink focus:outline-none focus:border-oxblood"
                          >
                            <option value="Full Multi-Day Palace Buyout & Scenography">
                              Full Multi-Day Palace Buyout &amp; Scenography
                            </option>
                            <option value="Single-Evening Architectural Gala / Banquet">
                              Single-Evening Architectural Gala / Banquet
                            </option>
                            <option value="Bespoke Scenography & Floristry Only">
                              Bespoke Scenography &amp; Floristry Only
                            </option>
                            <option value="Artist & Entertainment Programming Only">
                              Artist &amp; Entertainment Programming Only
                            </option>
                          </select>
                        </div>

                        <div>
                          <label
                            htmlFor="ndaRequired"
                            className="block text-xs uppercase tracking-[0.18em] text-stone font-medium mb-2"
                          >
                            Confidentiality / NDA Protocol
                          </label>
                          <select
                            id="ndaRequired"
                            name="ndaRequired"
                            value={formData.ndaRequired}
                            onChange={handleInputChange}
                            className="w-full bg-parchment border border-stone/25 px-4 py-3 text-xs text-ink focus:outline-none focus:border-oxblood"
                          >
                            <option value="Yes — Standard Bilateral NDA Required">
                              Yes &mdash; Standard Bilateral NDA Required
                            </option>
                            <option value="Discretion Expected (No Formal NDA)">
                              Discretion Expected (No Formal NDA)
                            </option>
                            <option value="Public Event / Media Coverage Intended">
                              Public Event / Media Coverage Intended
                            </option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="notes"
                          className="block text-xs uppercase tracking-[0.18em] text-stone font-medium mb-2"
                        >
                          Vision Notes &amp; Special Considerations
                        </label>
                        <textarea
                          id="notes"
                          name="notes"
                          rows={4}
                          value={formData.notes}
                          onChange={handleInputChange}
                          placeholder="Tell us about the emotional cadence, ceremonial protocols, musical desires, or architectural details you envision..."
                          className="w-full bg-parchment border border-stone/25 p-3 text-xs text-ink focus:outline-none focus:border-oxblood placeholder:text-stone/60 leading-relaxed"
                        />
                      </div>

                      <div className="pt-4 flex items-center justify-between">
                        <button
                          type="button"
                          onClick={() => setCurrentStep(1)}
                          className="text-xs uppercase tracking-[0.18em] text-stone hover:text-ink font-medium"
                        >
                          &larr; Back
                        </button>
                        <button
                          type="button"
                          onClick={() => setCurrentStep(3)}
                          className="px-8 py-3.5 bg-ink text-bone hover:bg-oxblood transition-colors text-xs tracking-[0.2em] uppercase font-medium"
                        >
                          Continue to Credentials &rarr;
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Step 3: Patron Identity & Transmission */}
                  {currentStep === 3 && (
                    <div className="space-y-6 animate-fadeIn">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <label
                            htmlFor="patronName"
                            className="block text-xs uppercase tracking-[0.18em] text-stone font-medium mb-2"
                          >
                            Patron / Host Full Name *
                          </label>
                          <input
                            type="text"
                            id="patronName"
                            name="patronName"
                            required
                            value={formData.patronName}
                            onChange={handleInputChange}
                            placeholder="e.g. Avantika Mehta"
                            className="w-full bg-parchment border border-stone/25 px-4 py-3 text-xs text-ink focus:outline-none focus:border-oxblood placeholder:text-stone/60"
                          />
                        </div>

                        <div>
                          <label
                            htmlFor="organizationOrFamily"
                            className="block text-xs uppercase tracking-[0.18em] text-stone font-medium mb-2"
                          >
                            Family Lineage or Organization
                          </label>
                          <input
                            type="text"
                            id="organizationOrFamily"
                            name="organizationOrFamily"
                            value={formData.organizationOrFamily}
                            onChange={handleInputChange}
                            placeholder="e.g. The Mehta Family / Apex Capital"
                            className="w-full bg-parchment border border-stone/25 px-4 py-3 text-xs text-ink focus:outline-none focus:border-oxblood placeholder:text-stone/60"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <label
                            htmlFor="email"
                            className="block text-xs uppercase tracking-[0.18em] text-stone font-medium mb-2"
                          >
                            Direct Confidential Email *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="patron@estate.com"
                            className="w-full bg-parchment border border-stone/25 px-4 py-3 text-xs text-ink focus:outline-none focus:border-oxblood placeholder:text-stone/60"
                          />
                        </div>

                        <div>
                          <label
                            htmlFor="phone"
                            className="block text-xs uppercase tracking-[0.18em] text-stone font-medium mb-2"
                          >
                            Telephone / Private Line *
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            required
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="+91 98290 12345"
                            className="w-full bg-parchment border border-stone/25 px-4 py-3 text-xs text-ink focus:outline-none focus:border-oxblood placeholder:text-stone/60"
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="residenceCity"
                          className="block text-xs uppercase tracking-[0.18em] text-stone font-medium mb-2"
                        >
                          City &amp; Country of Primary Residence
                        </label>
                        <input
                          type="text"
                          id="residenceCity"
                          name="residenceCity"
                          value={formData.residenceCity}
                          onChange={handleInputChange}
                          placeholder="e.g. London / New Delhi / Mumbai / Dubai"
                          className="w-full bg-parchment border border-stone/25 px-4 py-3 text-xs text-ink focus:outline-none focus:border-oxblood placeholder:text-stone/60"
                        />
                      </div>

                      {/* Transmission Button in Signature Oxblood */}
                      <div className="pt-4 border-t border-stone/20 flex items-center justify-between">
                        <button
                          type="button"
                          onClick={() => setCurrentStep(2)}
                          className="text-xs uppercase tracking-[0.18em] text-stone hover:text-ink font-medium"
                        >
                          &larr; Back
                        </button>
                        <button
                          type="submit"
                          className="px-10 py-4 bg-oxblood text-bone hover:bg-oxblood-deep transition-colors text-xs tracking-[0.22em] uppercase font-medium shadow-sm"
                        >
                          Transmit Commission Inquiry
                        </button>
                      </div>
                    </div>
                  )}

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
