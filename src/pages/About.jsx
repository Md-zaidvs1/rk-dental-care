import React, { useState } from 'react';
import { Award, Users, HeartHandshake, ChevronLeft, ChevronRight, Sparkles, Target, ShieldCheck } from 'lucide-react';

// Secure local asset imports for your clinic photographs
import drPhoto from '../assets/rk-sir-1.jpeg';
import facilityBed from '../assets/bed-img.webp';
import facilityChair1 from '../assets/chair-img.webp';
import facilityChair2 from '../assets/chair-img-2.webp';

export default function About() {
  const [activeFacilitySlide, setActiveFacilitySlide] = useState(0);

  const facilitySlides = [
    { src: facilityBed, label: "Clinical Bed Setup", desc: "RK Dental Care Operatory Room Equipment Setup" },
    { src: facilityChair1, label: "Operatory Unit 1", desc: "Chief Doctor Operational Dental Surgery Chair Unit" },
    { src: facilityChair2, label: "Operatory Unit 2", desc: "Secondary Restorative Scaling and Diagnostics Chair Suite" }
  ];

  const nextFacility = () => {
    setActiveFacilitySlide((prev) => (prev + 1) % facilitySlides.length);
  };

  const prevFacility = () => {
    setActiveFacilitySlide((prev) => (prev - 1 + facilitySlides.length) % facilitySlides.length);
  };

  return (
    <div className="bg-white min-h-screen font-sans antialiased text-slate-600">
      
      {/* 1. Classic Sub-Page Header Path Ribbon */}
      <div className="bg-slate-50 border-b border-slate-100 py-4 px-6 md:px-16 text-left">
        <p className="text-xs uppercase tracking-widest text-slate-400 font-semibold">
          Home <span className="mx-1 text-slate-300">/</span> <span className="text-cyan-600">About Us</span>
        </p>
      </div>

      {/* 2. Top Profile Section: Premium Split Columns Featuring Dr. Radhakrishnan */}
      <section className="max-w-7xl mx-auto px-6 md:px-16 py-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Descriptive Profile Text */}
        <div className="lg:col-span-7 space-y-6 text-left">
          <div className="space-y-2">
            <span className="text-xs font-bold text-cyan-600 uppercase tracking-widest block">Chief Practitioner</span>
            <h2 className="text-3xl md:text-5xl font-light text-slate-900 tracking-tight leading-tight">
              Providing Clinical Precision <br />With a <span className="font-bold text-slate-800">Personal Touch</span>
            </h2>
          </div>
          <div className="w-12 h-1 bg-cyan-500 rounded-full"></div>
          
          <p className="text-slate-500 text-sm md:text-base font-light leading-relaxed">
            Since founding the practice in 2018, RK Dental Care has stood as a hallmark of restorative excellence and clinical integrity in Kalavai. Under the specialized command of **Dr. V. Radhakrishnan BDS., D.Endo.**, our facilities focus strictly on microscopic root canals, complex tooth structure salvages, and custom cosmetic transformations.
          </p>
          
          <p className="text-slate-500 text-sm font-light leading-relaxed">
            By eliminating local treatment anxieties through sophisticated anesthetic layouts, our clinic makes safety paramount. Every operatory unit is structured around hospital-grade chemical sterilization protocols to safeguard long-term family outcomes.
          </p>
        </div>

        {/* Right Column: Framed Dr. Radhakrishnan Portrait Image */}
        <div className="lg:col-span-5 flex justify-center relative">
          <div className="absolute -inset-2 bg-gradient-to-tr from-cyan-500/20 to-teal-500/20 rounded-2xl blur-xl opacity-60"></div>
          <div className="relative w-full max-w-[380px] h-[480px] rounded-2xl overflow-hidden shadow-2xl border border-slate-100 group bg-slate-50">
            <img 
              src={drPhoto} 
              alt="Dr. V. Radhakrishnan BDS., D.Endo." 
              className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-101 filter brightness-102"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/70 via-slate-900/20 to-transparent p-5 text-white text-left">
              <h4 className="text-lg font-bold tracking-wide">Dr. V. Radhakrishnan</h4>
              <p className="text-cyan-400 text-xs font-medium uppercase tracking-wider mt-0.5">BDS., D.Endo. — Chief Endodontist</p>
            </div>
          </div>
        </div>

      </section>

      {/* 3. Middle Section: Strategic Values Grid Area (Always Visible) */}
      <section className="bg-slate-50 border-y border-slate-100 py-20 px-6 md:px-16">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Value Block 1: What We Do */}
            <div className="bg-white p-8 rounded-xl border border-slate-200/40 space-y-4 shadow-xs text-left">
              <div className="w-12 h-12 rounded-lg bg-cyan-50 flex items-center justify-center text-cyan-600">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-800 tracking-wide">What We Do</h3>
              <p className="text-slate-500 text-xs font-light leading-relaxed">
                We manage tooth path structural decay complaints through precise composite modifications, intricate root salvages, painless extractions, and corrective brackets that restore healthy alignment occlusion paths.
              </p>
            </div>

            {/* Value Block 2: Our Mission */}
            <div className="bg-white p-8 rounded-xl border border-slate-200/40 space-y-4 shadow-xs text-left">
              <div className="w-12 h-12 rounded-lg bg-cyan-50 flex items-center justify-center text-cyan-600">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-800 tracking-wide">Our Mission</h3>
              <p className="text-slate-500 text-xs font-light leading-relaxed">
                To guarantee equal dental care opportunities by introducing zero-delay digital RVG scanning networks and high-fidelity restorative crown fabrications straight to the surrounding regional community.
              </p>
            </div>

            {/* Value Block 3: Our Goal */}
            <div className="bg-white p-8 rounded-xl border border-slate-200/40 space-y-4 shadow-xs text-left">
              <div className="w-12 h-12 rounded-lg bg-cyan-50 flex items-center justify-center text-cyan-600">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-800 tracking-wide">Our Goal</h3>
              <p className="text-slate-500 text-xs font-light leading-relaxed">
                To simplify and re-engineer patient perspectives toward clinical treatment by providing comfortable pediatric dentistry procedures that eliminate traditional chair anxieties entirely.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Bottom Section: Inside Our Clinical Facility Slider */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <div className="space-y-3 max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-light text-slate-900">
            Inside Our <span className="font-bold text-cyan-600">Clinical Facility</span>
          </h2>
          <div className="w-16 h-0.5 bg-cyan-500 mx-auto"></div>
        </div>

        {/* Real Uploaded Local Asset Equipment Slider */}
        <div className="relative bg-slate-900 rounded-2xl overflow-hidden shadow-2xl group h-[420px] border border-slate-800">
          {facilitySlides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                index === activeFacilitySlide ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
              }`}
            >
              <img src={slide.src} alt={slide.label} className="w-full h-full object-cover brightness-90" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent p-6 text-white text-left">
                <h3 className="text-xl font-bold tracking-wide">{slide.label}</h3>
                <p className="text-slate-300 text-xs mt-1 font-light">{slide.desc}</p>
              </div>
            </div>
          ))}
          
          {/* Navigation Arrows */}
          <button 
            onClick={prevFacility} 
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-slate-900/60 p-2 rounded-full text-white border border-white/10 hover:bg-cyan-500 transition duration-200 cursor-pointer"
          >
            <ChevronLeft size={18} />
          </button>
          <button 
            onClick={nextFacility} 
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-slate-900/60 p-2 rounded-full text-white border border-white/10 hover:bg-cyan-500 transition duration-200 cursor-pointer"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </section>

    </div>
  );
}