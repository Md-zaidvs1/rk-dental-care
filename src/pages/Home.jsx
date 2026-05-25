import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Clock, ShieldAlert, MapPin, Sparkles, Activity, Layers, Calendar, Phone, Syringe, ChevronRight, Mail } from 'lucide-react';

// Secure local imports for your background slider assets
import bgSlide1 from '../assets/Royalty.webp';
import bgSlide4 from '../assets/bg-3.avif';
import bgSlide5 from '../assets/bg-5.webp';
import bgSlide6 from '../assets/bg-6.jpg';
import bgSlide7 from '../assets/bg-7.avif';

// Secure local import for your tooth water splash asset image
import dentalEquipt from '../assets/dental-equipt.jpg';

// The 4 core primary services displayed on the right column of the Home grid
const homeFourServices = [
  { id: "root-canal-treatment", name: "Root Canal Treatment", icon: Activity, desc: "Painless root salvages to clear deep interior root configurations safely." },
  { id: "dental-filling", name: "Dental Filling", icon: Sparkles, desc: "Restores tooth structure cleanly by safely removing minor dental decay channels." },
  { id: "scaling-and-root-planing", name: "Scaling & Root Planing", icon: Syringe, desc: "Deep ultrasonic plaque removals below delicate gum lines." },
  { id: "orthodontic-treatment", name: "Orthodontic Treatment", icon: Layers, desc: "High-quality alignment bracket braces or clear custom aligners to guide crooked teeth." }
];

export default function Home({ openModal }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Array maps your active local files safely
  const localSlides = [
    bgSlide1, 
    bgSlide4, 
    bgSlide5, 
    bgSlide6, 
    bgSlide7
  ];

  useEffect(() => {
    if (localSlides.length === 0) return;
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % localSlides.length);
    }, 5000);
    return () => clearInterval(slideInterval);
  }, [localSlides.length]);

  return (
    <div className="bg-white min-h-screen font-sans antialiased flex flex-col">
      
      {/* 1. Dynamic Hero Slideshow Area */}
      <section className="relative min-h-[580px] md:min-h-[660px] bg-slate-950 flex items-center justify-center px-4 overflow-hidden">
        {localSlides.map((slideAsset, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out bg-cover bg-center ${
              index === currentSlide ? 'opacity-35 scale-100' : 'opacity-0 scale-105'
            }`}
            style={{ backgroundImage: `url(${slideAsset})` }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-900/80 to-transparent z-10"></div>
        
        <div className="max-w-4xl mx-auto w-full relative z-20 text-center space-y-6 pt-12 pb-20">
          <span className="bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest inline-block">
            Estd. 2018 | 7 Years of Dental Excellence
          </span>
          <h1 className="text-4xl md:text-6xl font-light text-white tracking-tight leading-tight">
            Modern Achieve <br />
            <span className="font-bold text-cyan-400 drop-shadow-sm">Your Desired Perfect Smile</span>
          </h1>
          <p className="text-slate-300 text-sm md:text-base max-w-2xl mx-auto font-light leading-relaxed">
            RK Dental Care delivers top-tier clinical accuracy across specialized root canal therapies, cosmetic restorations, and surgical management handled seamlessly under Dr. V. Radhakrishnan.
          </p>
          
          {/* Slide Indicators */}
          <div className="flex justify-center gap-2 pt-4">
            {localSlides.map((_, i) => (
              <button 
                key={i} 
                onClick={() => setCurrentSlide(i)} 
                className={`h-1.5 rounded-full transition-all duration-300 ${i === currentSlide ? 'w-8 bg-cyan-400' : 'w-1.5 bg-white/40 hover:bg-white/70'}`} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* 2. Overlapping Branch Info Blocks Matrix Container */}
      <section className="max-w-6xl mx-auto px-4 -mt-20 relative z-30 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 rounded-xl shadow-2xl overflow-hidden border border-slate-200/10 text-white">
          
          {/* Kalavai Main Branch */}
          <div className="bg-cyan-500 p-8 space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <h3 className="text-xl font-bold tracking-wide flex items-center gap-2"><MapPin size={20} /> Kalavai (Main Branch)</h3>
              <p className="text-cyan-50 text-xs font-light leading-relaxed">No.10/1 School street, near police station, Kalavai 632506. Configured with instant digital RVG scanning equipment.</p>
            </div>
            <div className="pt-3 border-t border-cyan-400/40 text-xs font-medium space-y-1">
              <p className="flex items-center gap-2"><Clock size={14} /> 09:00 AM — 08:30 PM (Daily)</p>
              <p className="flex items-center gap-2"><Phone size={14} /> +91 8883261285</p>
            </div>
          </div>

          {/* Vembakkam Branch */}
          <div className="bg-teal-500 p-8 space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <h3 className="text-xl font-bold tracking-wide flex items-center gap-2"><MapPin size={20} /> Vembakkam Branch</h3>
              <p className="text-teal-50 text-xs font-light leading-relaxed">No.626 Main Road, Next to KVK Thirumba Mahal, Vembakkam 604410, Tiruvannamalai District.</p>
            </div>
            <div className="pt-3 border-t border-teal-400/40 text-xs font-medium space-y-1">
              <p className="flex items-center gap-2"><Clock size={14} /> Priority Treatment / By Appointment Only</p>
            </div>
          </div>

          {/* Booking Utility Access Card */}
          <div className="bg-blue-500 p-8 space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <h3 className="text-xl font-bold tracking-wide flex items-center gap-2"><Calendar size={20} /> Scheduling</h3>
              <p className="text-blue-50 text-xs font-light leading-relaxed">Coordinate your evaluation treatment window with our clinical specialist securely via integrated WhatsApp dispatch.</p>
            </div>
            <div className="pt-3">
              <button onClick={openModal} className="w-full bg-white hover:bg-slate-100 text-blue-600 font-bold py-3 rounded-lg transition text-xs uppercase tracking-wider shadow-md cursor-pointer">
                Book Appointment Form ➔
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Split Services Layout Section */}
      <section className="max-w-7xl mx-auto px-4 py-16 mb-16">
        
        {/* Section Headings */}
        <div className="text-center space-y-3 max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-slate-900 tracking-tight">
            Our Service Keeps <span className="font-bold text-cyan-600">You Smile</span>
          </h2>
          <div className="w-16 h-0.5 bg-cyan-500 mx-auto"></div>
          <p className="text-slate-400 text-sm font-light leading-relaxed">
            RK Dental Care structures premium treatment options through clinical precision and hospital-grade sterilization parameters.
          </p>
        </div>

        {/* Two-Column Grid Setup: Left side Image, Right side Services */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Your Custom Tooth Water Splash Asset Panel */}
          <div className="lg:col-span-5 h-[480px] w-full rounded-2xl overflow-hidden shadow-2xl border border-slate-100 relative group bg-slate-50">
            <img 
              src={dentalEquipt} 
              alt="RK Dental Care Splash Graphic Artwork" 
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-102"
            />
            {/* Elegant text accent overlay badge */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent z-10"></div>
            <div className="absolute bottom-6 left-6 z-20 text-slate-900 text-left space-y-1 bg-white/80 backdrop-blur-xs p-4 rounded-xl border border-white/40 shadow-sm">
              <span className="text-[10px] font-bold tracking-widest text-cyan-600 uppercase">Clinical Precision</span>
              <h4 className="text-base font-bold tracking-wide text-slate-800 mt-0.5">State-of-the-Art Operations</h4>
            </div>
          </div>

          {/* Right Column: Premium Interactive Services List Block */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {homeFourServices.map((service, i) => {
              const IconComponent = service.icon;
              return (
                <Link 
                  to={`/treatment/${service.id}`} 
                  key={i} 
                  className="flex flex-col text-left p-6 border border-slate-100 rounded-xl hover:shadow-xl hover:border-cyan-500/20 transition group duration-300 bg-white shadow-xs relative"
                >
                  <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-cyan-500 group-hover:bg-cyan-500 group-hover:text-white transition duration-300 shadow-xs">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-slate-800 tracking-wide mt-4 group-hover:text-cyan-600 transition flex items-center gap-1">
                    {service.name}
                  </h4>
                  <p className="text-slate-400 text-xs font-light leading-relaxed mt-2">{service.desc}</p>
                  
                  <div className="pt-4 flex items-center text-[10px] font-bold text-cyan-500 uppercase tracking-wider opacity-0 group-hover:opacity-100 transition duration-300 mt-auto">
                    Learn Procedure <ChevronRight size={10} className="mt-px" />
                  </div>
                </Link>
              );
            })}
          </div>

        </div>
      </section>

      {/* 4. Complete Footer with Dual Address Sub-Sections */}
      <footer className="bg-slate-950 text-slate-400 pt-16 pb-8 px-4 border-t border-slate-900 mt-auto">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">
          
          {/* Column 1: Core Branding Context (Width Span 4) */}
          <div className="md:col-span-4 space-y-4">
            <h3 className="text-white font-bold text-lg tracking-wider">DentaCare.</h3>
            <p className="text-xs leading-relaxed font-light text-slate-400">
              Providing premium, patient-friendly dental services in Kalavai since 2018. Your smile remains our absolute clinical priority.
            </p>
            <p className="text-xs text-amber-400 font-medium">Dr. V. Radhakrishnan BDS., D.Endo.</p>
          </div>

          {/* Column 2: Navigation Utilities Link Hub (Width Span 3) */}
          <div className="md:col-span-3 space-y-4">
            <h3 className="text-white font-bold text-sm tracking-wider uppercase">Quick Links</h3>
            <ul className="space-y-2.5 text-xs font-light">
              <li><Link to="/" className="hover:text-cyan-400 transition">Home Layout</Link></li>
              <li><Link to="/about" className="hover:text-cyan-400 transition">About Clinic</Link></li>
              <li><Link to="/services" className="hover:text-cyan-400 transition">Treatments Offered</Link></li>
              <li><Link to="/contact" className="hover:text-cyan-400 transition">Contact & Location</Link></li>
            </ul>
          </div>

          {/* Column 3: Dual Branch Office Addresses Area (Width Span 5) */}
          <div className="md:col-span-5 space-y-5">
            <h3 className="text-white font-bold text-sm tracking-wider uppercase">Our Branch Locations</h3>
            
            <div className="grid grid-cols-1 gap-4 text-xs font-light text-slate-400">
              
              {/* Branch Address Block 1 */}
              <div className="space-y-1 bg-slate-900/40 p-3 rounded border border-slate-800/40">
                <p className="text-cyan-400 font-semibold uppercase text-[10px] tracking-wider">Kalavai Hub (Primary)</p>
                <p className="flex items-start gap-2.5 mt-1">
                  <MapPin size={14} className="text-cyan-400 shrink-0 mt-0.5" />
                  <span>No.10/1 School street, near police station, Kalavai 632506</span>
                </p>
              </div>

              {/* Branch Address Block 2 (Newly Added Branch Details) */}
              <div className="space-y-1 bg-slate-900/40 p-3 rounded border border-slate-800/40">
                <p className="text-teal-400 font-semibold uppercase text-[10px] tracking-wider">Vembakkam Branch</p>
                <p className="flex items-start gap-2.5 mt-1">
                  <MapPin size={14} className="text-teal-400 shrink-0 mt-0.5" />
                  <span>No.626 Main Road, Next to KVK Thirumba Mahal, Vembakkam 604410, Tiruvannamalai District</span>
                </p>
              </div>

              {/* Universal Contact Trace Lines */}
              <div className="pt-2 flex flex-wrap gap-x-6 gap-y-2 border-t border-slate-900/80 text-[11px]">
                <span className="flex items-center gap-1.5"><Phone size={12} className="text-cyan-400" /> +91 8883261285</span>
                <span className="flex items-center gap-1.5"><Mail size={12} className="text-cyan-400" /> drradhakrishnan94@gmail.com</span>
              </div>

            </div>
          </div>

        </div>

        <div className="max-w-7xl mx-auto border-t border-slate-900 pt-6 text-center text-xs text-slate-600">
          Copyright &copy; {new Date().getFullYear()} All rights reserved | RK Dental Care template custom built with React.
        </div>
      </footer>

    </div>
  );
}