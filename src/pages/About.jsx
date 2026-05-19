import React, { useState, useEffect } from 'react';
import { Award, Users, HeartHandshake, ShieldCheck, Star, Activity, Sparkles } from 'lucide-react';

// Import your real clinical facility photographs
import facilityBed from '../assets/bed-img.webp';
import facilityChair1 from '../assets/chair-img.webp';
import facilityChair2 from '../assets/chair-img-2.webp';
import docPhoto from '../assets/rk.jpeg';

export default function About() {
  const [activeSlide, setActiveSlide] = useState(0);

  // High-end medical studio imagery for an impressive scrolling sub-hero experience
  const premiumAboutSlides = [
    "https://images.unsplash.com/photo-1629909608135-ca9abc772591?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=1600&auto=format&fit=crop"
  ];

  // Rotate header presentation scenes every 4.5 seconds automatically
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % premiumAboutSlides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [premiumAboutSlides.length]);

  return (
    <div className="bg-white min-h-screen font-sans antialiased text-slate-600">
      
      {/* 1. Dynamic Interactive Header Banner with Crossfading Backgrounds */}
      <section className="relative min-h-[320px] bg-slate-950 flex items-center justify-center px-4 overflow-hidden">
        {premiumAboutSlides.map((bgUrl, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out bg-cover bg-center ${
              idx === activeSlide ? 'opacity-25 scale-100' : 'opacity-0 scale-105'
            }`}
            style={{ backgroundImage: `url(${bgUrl})` }}
          />
        ))}
        {/* Dark theme balancing overlay mask */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-900/80 to-white z-10"></div>

        <div className="relative z-20 text-center space-y-3 pt-12">
          <p className="text-xs uppercase tracking-widest text-cyan-500 font-bold">HOME ➔ CLINIC METRICS</p>
          <h1 className="text-4xl md:text-5xl font-light tracking-tight text-white leading-tight">
            About <span className="font-bold text-cyan-400">Our Professional Practice</span>
          </h1>
          <div className="flex justify-center gap-1.5 pt-2">
            {premiumAboutSlides.map((_, i) => (
              <button 
                key={i} 
                onClick={() => setActiveSlide(i)} 
                className={`h-1.5 rounded-full transition-all duration-300 ${i === activeSlide ? 'w-6 bg-cyan-400' : 'w-1.5 bg-white/30'}`} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* 2. Primary Narrative Row Block Layout */}
      <section className="max-w-7xl mx-auto px-4 py-20 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* Left Informational Column Panel */}
        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-bold text-cyan-600 uppercase tracking-widest block">Clinical Profile</span>
            <h2 className="text-3xl md:text-4xl font-light text-slate-900 tracking-tight leading-tight">
              We Offer <span className="font-bold text-slate-800">High Quality Services</span>
            </h2>
          </div>
          <div className="w-12 h-1 bg-cyan-500 rounded-full"></div>
          
          <p className="text-slate-500 text-sm md:text-base font-light leading-relaxed">
            Since opening our doors in 2018, RK Dental Care has stayed committed to elevating healthcare reliability throughout the Kalavai territory. Led by Chief Endodontist Dr. V. Radhakrishnan BDS., D.Endo., our clinical framework centers entirely on high-accuracy root salvage protocols, stress-free micro-surgery, and custom cosmetic restoration alignments.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 text-slate-700 font-medium text-xs tracking-wide">
            <div className="flex items-center gap-2.5 bg-slate-50 p-3 rounded border border-slate-100"><Activity size={16} className="text-cyan-500" /> Painless Treatment Cycles</div>
            <div className="flex items-center gap-2.5 bg-slate-50 p-3 rounded border border-slate-100"><ShieldCheck size={16} className="text-cyan-500" /> Hospital-Grade Disinfection</div>
          </div>
        </div>

        {/* Right Side Focus Block Panel Layout */}
        <div className="lg:col-span-5 bg-linear-to-br from-cyan-500 to-teal-500 text-white rounded-2xl shadow-2xl relative overflow-hidden group">
          <div className="p-10 space-y-6 relative z-20">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white"><Star className="w-5 h-5 fill-white" /></div>
            <h3 className="text-2xl font-light tracking-wide leading-tight">
              Dentacare with a <br /><span className="font-bold text-white">personal touch</span>
            </h3>
            
            <div className="space-y-5 pt-4 border-t border-white/20 text-xs font-light leading-relaxed">
              <div className="flex gap-3 items-start">
                <div className="w-4 h-4 rounded-full bg-white/20 flex items-center justify-center text-white shrink-0 font-bold mt-0.5 text-[8px]">✓</div>
                <div>
                  <h4 className="font-bold text-sm tracking-wide text-white">Well Experience Dentist</h4>
                  <p className="text-cyan-50 mt-0.5">7+ years of clinical micro-endodontic case expertise handles severe pulp trauma safely.</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <div className="w-4 h-4 rounded-full bg-white/20 flex items-center justify-center text-white shrink-0 font-bold mt-0.5 text-[8px]">✓</div>
                <div>
                  <h4 className="font-bold text-sm tracking-wide text-white">High Technology Facilities</h4>
                  <p className="text-cyan-50 mt-0.5">Equipped with low-radiation RVG digital diagnostics to confirm interior tracking paths immediately.</p>
                </div>
              </div>
            </div>
          </div>
          {/* Subtle abstract glow background elements */}
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-xl group-hover:scale-125 transition duration-500" />
        </div>

      </section>

      {/* 3. Fully Visible Strategic Columns Section (No Clicking Necessary) */}
      <section className="bg-slate-50 border-y border-slate-100 py-20 px-4">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="bg-white p-8 rounded-xl shadow-xs border border-slate-200/40 space-y-4 hover:-translate-y-1 transition duration-300">
              <div className="w-12 h-12 rounded-lg bg-cyan-50 flex items-center justify-center text-cyan-600"><Sparkles className="w-5 h-5" /></div>
              <h3 className="text-lg font-bold text-slate-800 tracking-wide">What We Do</h3>
              <p className="text-slate-500 text-xs font-light leading-relaxed">
                We manage dental path decay problems through targeted direct composite composite fillings, detailed molar path cleaning, safe wisdom extraction layouts, and modern aligners designed to preserve missing occlusion paths gracefully.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-xs border border-slate-200/40 space-y-4 hover:-translate-y-1 transition duration-300">
              <div className="w-12 h-12 rounded-lg bg-cyan-50 flex items-center justify-center text-cyan-600"><Users className="w-5 h-5" /></div>
              <h3 className="text-lg font-bold text-slate-800 tracking-wide">Our Mission</h3>
              <p className="text-slate-500 text-xs font-light leading-relaxed">
                To bridge the gap in healthcare equality by delivering low-dose RVG scanning equipment setups and premium crown fabrications at accessible values directly to the native community profiles across Kalavai.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-xs border border-slate-200/40 space-y-4 hover:-translate-y-1 transition duration-300">
              <div className="w-12 h-12 rounded-lg bg-cyan-50 flex items-center justify-center text-cyan-600"><HeartHandshake className="w-5 h-5" /></div>
              <h3 className="text-lg font-bold text-slate-800 tracking-wide">Our Goal</h3>
              <p className="text-slate-500 text-xs font-light leading-relaxed">
                To transform traditional patient perspectives by providing painless pediatric dentistry operations and detailed microscopic structural alignment systems that eliminate clinic anxiety entirely.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Inside Our Clinical Facility Section (Using your 100% Real Uploaded Images) */}
      <section className="max-w-7xl mx-auto px-4 py-24">
        <div className="space-y-3 max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-light text-slate-900">
            Inside Our <span className="font-bold text-cyan-600">Clinical Facility</span>
          </h2>
          <div className="w-16 h-0.5 bg-cyan-500 mx-auto"></div>
          <p className="text-slate-400 text-sm font-light leading-relaxed">
            Take an authentic look through our clean, fully-operational op units equipped with modern sterilization arrays and digital RVG diagnostics.
          </p>
        </div>

        {/* 4-Grid System holding your 3 personal assets and Dr. Radhakrishnan's profile portrait picture */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="h-68 bg-slate-100 rounded-xl overflow-hidden border border-slate-200/60 shadow-sm group relative">
            <img 
              src={facilityBed} 
              alt="RK Dental Care Operatory Room Equipment Setup" 
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500 filter brightness-102"
            />
            <div className="absolute bottom-0 inset-x-0 bg-slate-950/60 text-white py-2 text-center text-[10px] font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition duration-300">
              Clinical Bed Setup
            </div>
          </div>

          <div className="h-68 bg-slate-100 rounded-xl overflow-hidden border border-slate-200/60 shadow-sm group relative">
            <img 
              src={facilityChair1} 
              alt="Chief Doctor Operational Dental Surgery Chair Unit" 
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500 filter brightness-102"
            />
            <div className="absolute bottom-0 inset-x-0 bg-slate-950/60 text-white py-2 text-center text-[10px] font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition duration-300">
              Operatory Unit 1
            </div>
          </div>

          <div className="h-68 bg-slate-100 rounded-xl overflow-hidden border border-slate-200/60 shadow-sm group relative">
            <img 
              src={docPhoto} 
              alt="Dr. V. Radhakrishnan BDS., D.Endo. Consulting Desk Layout" 
              className="w-full h-full object-cover object-top group-hover:scale-105 transition duration-500"
            />
            <div className="absolute bottom-0 inset-x-0 bg-slate-950/60 text-white py-2 text-center text-[10px] font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition duration-300">
              Dr. V. Radhakrishnan
            </div>
          </div>

          <div className="h-68 bg-slate-100 rounded-xl overflow-hidden border border-slate-200/60 shadow-sm group relative">
            <img 
              src={facilityChair2} 
              alt="Secondary Restorative Scaling and Diagnostics Chair Suite" 
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500 filter brightness-102"
            />
            <div className="absolute bottom-0 inset-x-0 bg-slate-950/60 text-white py-2 text-center text-[10px] font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition duration-300">
              Operatory Unit 2
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}