import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { HeartPulse, Star, HelpCircle, ArrowLeft, Phone, Sparkles } from 'lucide-react';

// Secure local asset imports
import imgFilling from '../assets/bg-11.jpg';
import imgEndo from '../assets/bg-8.jpg';
import imgRootCanal from '../assets/bg-10.jpg';
import imgScaling from '../assets/dental-equipt.jpg';
import imgExtraction from '../assets/bg-7.avif';
import imgMissingTeeth from '../assets/Royalty.webp';
import imgPediatric from '../assets/bg-12.jpeg';
import imgXray from '../assets/bg-4.avif';
import imgImplants from '../assets/bg-9.webp';
import imgSmileDesign from '../assets/bg-5.webp';

const treatmentsData = {
  "dental-filling": {
    name: "Dental Filling",
    image: imgFilling,
    overview: "Dental filling procedures eliminate decay channels to structural walls cleanly, replacing missing spaces with tooth-colored biocompatible composite resins.",
    phases: [
      "Removing minor structural decay elements cleanly.",
      "Disinfecting the open tooth cavity matrix surface.",
      "Layering custom-tinted composite bonding resins.",
      "Using specialized UV light curing tools to set instantly.",
      "Polishing structural boundaries to match biting occlusion alignment."
    ]
  },
  "endodontic-treatment": {
    name: "Endodontic Treatment",
    image: imgEndo,
    overview: "Endodontic disciplines manage pathology paths localized inside root canals. Early diagnostics prevent secondary tracking lines from manifesting into structural abscess complexes.",
    phases: [
      "High-magnification mapping of inner canal metrics via digital imaging fields.",
      "Isolating the tooth structure cleanly with physical clinical moisture barriers.",
      "Accessing inner root pathways to locate microscopic decay branches.",
      "Clearing bacterial tissue elements safely using micro-endodontic file cycles.",
      "Applying medicinal packing layers to stabilize structural walls gracefully."
    ]
  },
  "root-canal-treatment": {
    name: "Root Canal Treatment",
    image: imgRootCanal,
    overview: "Specialized deep pulp nerve clearing built to completely salvage severely infected or compromised teeth, bypassing extraction routes entirely.",
    phases: [
      "Administering highly localized, completely painless anesthesia layers.",
      "Gaining interior pulp access to expose hidden infected nerve networks.",
      "Extracting necrotic tissues using digital electronic apex locator tracking.",
      "Sealing canal paths permanently with dense biocompatible gutta-percha structures.",
      "Preparing the upper tooth foundation to safely host a permanent structural crown."
    ]
  },
  "scaling-and-root-planing": {
    name: "Scaling & Root Planing",
    image: imgScaling,
    overview: "Advanced ultrasonic deep cleaning that targeting plaque sub-gingivally beneath delicate gumlines, reversing chronic periodontal diseases safely.",
    phases: [
      "Vibrating calcified plaque away using micro-ultrasonic scaling tools.",
      "Decontaminating deep bacterial pockets beneath the soft tissue line.",
      "Smoothing of delicate root surfaces to promote healthy gum re-attachment.",
      "Flushing deep pockets with anti-microbial cooling fluid loops.",
      "Aiding tissues to re-attach securely to pristine root surfaces."
    ]
  },
  "extraction": {
    name: "Surgical Extraction",
    image: imgExtraction,
    overview: "Atraumatic extraction handling designed to remove non-restorable tooth segments or impacted wisdom configurations with absolute surgical precision.",
    phases: [
      "Comprehensive digital X-ray evaluation of the target root structure alignment.",
      "Numbing surrounding periodontal tissues completely for stress-free extraction.",
      "Gently luxating the target tooth root structure to protect bone boundaries.",
      "Clearing the biological socket cleanly and placing stabilizing gauze packs.",
      "Providing clear, structured post-operative recovery guidance profiles."
    ]
  },
  "replacement-of-missing-teeth": {
    name: "Replacement of Missing Teeth",
    image: imgMissingTeeth,
    overview: "Advanced prosthetic tooth replacements using permanent custom bridges or durable dentures to restore original chewing forces cleanly.",
    phases: [
      "Taking highly precise digital or physical crown path impressions.",
      "Preparing neighboring target pillars to support customized fixed bridges.",
      "Fabricating perfect shade-matched ceramic crown matrices in the lab.",
      "Affixing temporary shielding layers to guard vulnerable structures.",
      "Permanently bonding the premium porcelain prosthetic unit into place securely."
    ]
  },
  "pediatric-dentistry": {
    name: "Pediatric Dentistry",
    image: imgPediatric,
    overview: "Compassionate, gentle dental care structured specifically around matching children's mental comfort levels while safeguarding primary teeth layout structures.",
    phases: [
      "Welcoming children into a warm, positive, non-threatening clinical space.",
      "Evaluating initial primary enamel paths with gentle mirror tracking tools.",
      "Applying advanced preventive fluoride coatings or dental sealants.",
      "Treating childhood cavities smoothly using fast restorative bonding layers.",
      "Teaching clear, fun, and easy home-care brushing habits to kids."
    ]
  },
  "rvg-digital-x-ray": {
    name: "RVG Digital X-Ray Available",
    image: imgXray,
    overview: "Real-time, instantaneous digital radiography that prints internal bone and roots data to high-resolution screens while cutting traditional radiation levels by over 80%.",
    phases: [
      "Positioning a comfortable, ultra-thin electronic sensor element inside the mouth.",
      "Targeting the localized area precisely with low-exposure diagnostic beams.",
      "Processing crisp dental x-ray imagery instantly on the main laptop interface.",
      "Zooming in microscopically to spot early inter-proximal decay paths.",
      "Storing dental diagnostic images safely inside the digital patient file layout."
    ]
  },
  "dental-implants": {
    name: "Dental Implants",
    image: imgImplants,
    overview: "The absolute premium standard in tooth replacement: biocompatible titanium roots anchored directly to the bone to provide permanent stability.",
    phases: [
      "Mapping bone density metrics precisely via digital radiographic tracking.",
      "Placing a sterile titanium implant fixture root into the jawbone matrix.",
      "Allowing secure biological osseointegration over a few healing weeks.",
      "Securing a customized structural prosthetic connector abutment piece.",
      "Torquing a beautiful, hand-finished aesthetic porcelain crown into place."
    ]
  },
  "smile-designing": {
    name: "Smile Designing",
    image: imgSmileDesign,
    overview: "A comprehensive cosmetic face makeup that updates tracking metrics across shade, length, alignment, and veneer layouts to craft your ideal perfect smile.",
    phases: [
      "Analyzing facial proportions and color tones under clinical studio lighting.",
      "Performing minor contouring shifts to smooth jagged enamel edges.",
      "Taking micro-layer impressions for custom cosmetic porcelain veneers.",
      "Applying medical-grade bleaching configurations to balance color shades.",
      "Bonding glass-ceramic restorations to achieve flawless visual harmony."
    ]
  }
};

export default function TreatmentDetail() {
  const { id } = useParams();
  const treatment = treatmentsData[id];

  if (!treatment) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-slate-50">
        <h3 className="text-xl font-bold text-slate-700">Treatment Profile Not Found</h3>
        <Link to="/" className="mt-4 text-cyan-600 flex items-center gap-2 text-sm">
          <ArrowLeft size={16} /> Return to Home Platform
        </Link>
      </div>
    );
  }

  const whatsappConsultUrl = `https://api.whatsapp.com/send?phone=918883261285&text=${encodeURIComponent(
    `Hello RK Dental Care! I was reading about your *${treatment.name}* service and have some clinical questions. I would like to book a consultation window.`
  )}`;

  return (
    <div className="bg-slate-50 min-h-screen font-sans antialiased text-slate-600 flex flex-col">
      
      {/* Hero Banner Header */}
      <section className="relative bg-slate-950 text-white py-20 px-6 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20 scale-105 blur-xs"
          style={{ backgroundImage: `url(${treatment.image})` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent z-10"></div>
        
        <div className="max-w-7xl mx-auto w-full relative z-20 text-left space-y-4 md:px-10">
          <Link to="/" className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-cyan-400 bg-cyan-500/10 px-3 py-1.5 rounded-full border border-cyan-500/20 hover:bg-cyan-500 hover:text-white transition duration-300">
            <ArrowLeft size={12} /> Back to Home
          </Link>
          <div className="space-y-1 pt-2">
            <span className="text-xs font-bold text-amber-400 tracking-widest uppercase flex items-center gap-1">
              <Sparkles size={12} /> Speciality Procedure Guide
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              {treatment.name} <span className="font-light text-slate-400">Services</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="max-w-7xl mx-auto w-full px-4 md:px-14 py-16 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start flex-grow">
        
        {/* Left Module Panel */}
        <div className="lg:col-span-8 bg-white border border-slate-200/60 rounded-2xl p-6 md:p-10 shadow-sm space-y-10 text-left">
          
          {/* Overview Statement */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-slate-900 tracking-wide flex items-center gap-2 border-b border-slate-100 pb-3">
              <HeartPulse className="text-cyan-500" size={20} /> Clinical Overview
            </h3>
            <p className="text-slate-500 text-sm md:text-base font-light leading-relaxed">
              {treatment.overview}
            </p>
          </div>

          {/* Phase Grid Framework */}
          <div className="space-y-5">
            <h3 className="text-xl font-bold text-slate-900 tracking-wide flex items-center gap-2 border-b border-slate-100 pb-3">
              <Star className="text-cyan-500 shrink-0" size={18} /> Procedural Framework Phases
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-2 items-stretch">
              
              {/* Left Side: Step Items */}
              <div className="md:col-span-7 space-y-3.5">
                {treatment.phases.map((phase, idx) => (
                  <div key={idx} className="flex items-start gap-3 bg-slate-50/50 p-3.5 rounded-xl border border-slate-100 transition hover:border-cyan-500/20">
                    <div className="w-6 h-6 rounded-full bg-cyan-50 text-cyan-600 border border-cyan-100 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                      {idx + 1}
                    </div>
                    <p className="text-slate-600 text-xs md:text-sm font-light leading-relaxed pt-0.5">
                      {phase}
                    </p>
                  </div>
                ))}
              </div>

              {/* FIXED IMAGE CONTAINER: Smart auto-fit for all photo dimensions */}
              <div className="md:col-span-5 w-full rounded-xl border border-slate-200/60 bg-slate-950 overflow-hidden shadow-md flex items-center justify-center relative p-2 min-h-[320px]">
                <img 
                  src={treatment.image} 
                  alt={`${treatment.name} Clinical Guide Panel`} 
                  className="max-w-full max-h-[380px] object-contain rounded-lg transition-transform duration-300 hover:scale-101"
                />
              </div>

            </div>
          </div>

        </div>

        {/* Right Sticky Sidebar */}
        <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-6">
          <div className="bg-slate-900 text-white rounded-2xl shadow-xl p-8 space-y-6 border border-slate-800 text-left relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-cyan-500/10 blur-2xl pointer-events-none"></div>
            
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
              <HelpCircle size={22} />
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-bold tracking-tight text-white">Have Clinical Questions?</h3>
              <p className="text-slate-400 text-xs font-light leading-relaxed">
                Every patient's dental profile shows structural variations. Arrange an evaluation check directly with Dr. Radhakrishnan to map out your targeted diagnostic timeline.
              </p>
            </div>

            <div className="pt-2">
              <a 
                href={whatsappConsultUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3.5 rounded-xl transition text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg cursor-pointer"
              >
                Consult On Whatsapp ➔
              </a>
            </div>
          </div>

          <p className="text-[11px] text-slate-400 text-center font-light">
            Need primary routing layout assistance? Reach us at <span className="font-medium text-slate-500">+91 8883261285</span>
          </p>
        </div>

      </section>

    </div>
  );
}