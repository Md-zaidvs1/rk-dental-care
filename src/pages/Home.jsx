import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Calendar, Sparkles, Activity, Layers, Syringe } from 'lucide-react';

// Secure local imports for background slider assets
import bgSlide1 from '../assets/Royalty.webp';
import bgSlide4 from '../assets/bg-3.avif';
import bgSlide5 from '../assets/bg-5.webp';
import bgSlide6 from '../assets/bg-6.jpg';
import bgSlide7 from '../assets/bg-7.avif';

// Your classic 4 core features for the home page grid
const homeFourServices = [
  { id: "root-canal-treatment", name: "Root Canal Treatment", icon: Activity, desc: "Painless microscopic root salvages to clear deep interior root complexes." },
  { id: "dental-filling", name: "Dental Filling", icon: Sparkles, desc: "Restores tooth structure cleanly by safely removing minor dental decay channels." },
  { id: "scaling-and-root-planing", name: "Scaling & Root Planing", icon: Syringe, desc: "Deep ultrasonic plaque removals targeting sub-gingival calculus safely." },
  { id: "endodontic-treatment", name: "Endodontic Treatment", icon: Layers, desc: "Specialized root inner mapping to handle advanced underlying tooth pathology." }
];

export default function Home({ openModal }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  
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
    <div className="bg-white min-h-screen font-sans antialiased w-full overflow-x-hidden">
      
      {/* 1. Dynamic Hero Slideshow Area */}
      <section className="relative min-h-[500px] sm:min-h-[580px] md:min-h-[660px] bg-slate-950 flex items-center justify-center px-4 overflow-hidden">
        {localSlides.map((slideAsset, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out bg-cover bg-center ${
              index === currentSlide ? 'opacity-35 scale-100' : 'opacity-0 scale-105'
            }`}
            style={{ backgroundImage: `url(${slideAsset})` }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-900/90 to-transparent z-10"></div>
        
        <div className="max-w-4xl mx-auto w-full relative z-20 text-center space-y-6 pt-24 pb-24 md:pt-16 md:pb-20 px-2">
          <span className="bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 px-4 py-1.5 rounded-full text-[10px] md:text-xs font-semibold uppercase tracking-widest inline-block">
            Estd. 2018 | 7 Years of Dental Excellence
          </span>
          <h1 className="text-3xl md:text-6xl font-light text-white tracking-tight leading-tight">
            Modern Achieve <br />
            <span className="font-bold text-cyan-400 drop-shadow-sm">Your Desired Perfect Smile</span>
          </h1>
          <p className="text-slate-300 text-xs md:text-base max-w-2xl mx-auto font-light leading-relaxed px-2">
            RK Dental Care delivers top-tier clinical accuracy across specialized root canal therapies, cosmetic restorations, and surgical management handled seamlessly under Dr. V. Radhakrishnan.
          </p>
          
          {/* Slide Indicators */}
          <div className="flex justify-center gap-2 pt-2">
            {localSlides.map((_, i) => (
              <button key={i} onClick={() => setCurrentSlide(i)} className={`h-1.5 rounded-full transition-all duration-300 ${i === currentSlide ? 'w-8 bg-cyan-400' : 'w-1.5 bg-white/40'}`} />
            ))}
          </div>
        </div>
      </section>

      {/* 2. Overlapping Branch Info Blocks Matrix */}
      <section className="max-w-6xl mx-auto px-4 -mt-12 md:-mt-20 relative z-30 mb-16 md:mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 rounded-xl shadow-2xl overflow-hidden border border-slate-200/10 text-white gap-0">
          <div className="bg-cyan-500 p-6 md:p-8 space-y-3 text-left">
            <h3 className="text-lg md:text-xl font-bold tracking-wide flex items-center gap-2"><MapPin size={18} /> Kalavai (Main Branch)</h3>
            <p className="text-cyan-50 text-xs font-light leading-relaxed">No.10/1 School street, near police station, Kalavai 632506. Configured with instant digital RVG scanning equipment.</p>
          </div>
          <div className="bg-teal-500 p-6 md:p-8 space-y-3 text-left">
            <h3 className="text-lg md:text-xl font-bold tracking-wide flex items-center gap-2"><MapPin size={18} /> Vembakkam Branch</h3>
            <p className="text-teal-50 text-xs font-light leading-relaxed">No.626 Main Road, Next to KVK Thirumba Mahal, Vembakkam 604410, Tiruvannamalai District.</p>
          </div>
          <div className="bg-blue-500 p-6 md:p-8 space-y-4 flex flex-col justify-between text-left">
            <h3 className="text-lg md:text-xl font-bold tracking-wide flex items-center gap-2"><Calendar size={18} /> Scheduling</h3>
            <button onClick={openModal} className="bg-white text-blue-600 font-bold py-2.5 rounded-lg transition text-xs uppercase tracking-wider shadow-md w-full cursor-pointer hover:bg-slate-50">
              Book Appointment ➔
            </button>
          </div>
        </div>
      </section>

      {/* 3. Simple 4-Grid Services Segment */}
      <section className="max-w-7xl mx-auto px-4 py-8 md:py-16 mb-12">
        <div className="text-center space-y-3 max-w-2xl mx-auto mb-12 md:mb-16">
          <h2 className="text-2xl md:text-4xl font-light text-slate-900 tracking-tight"> Our Service Keeps <span className="font-bold text-cyan-600">You Smile</span></h2>
          <div className="w-14 h-0.5 bg-cyan-500 mx-auto"></div>
          <p className="text-slate-400 text-xs md:text-sm font-light leading-relaxed">RK Dental Care structures premium treatment options through clinical precision and hospital-grade sterilization parameters.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {homeFourServices.map((service) => {
            const IconComponent = service.icon;
            return (
              <Link 
                to={`/treatment/${service.id}`} 
                key={service.id}
                className="bg-white p-8 rounded-2xl border border-slate-100 shadow-xs hover:border-cyan-500/30 hover:shadow-md transition duration-300 space-y-4 group flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-cyan-50 flex items-center justify-center text-cyan-600 group-hover:bg-cyan-500 group-hover:text-white transition">
                    <IconComponent size={22} />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-bold text-slate-800 text-base">{service.name}</h4>
                    <p className="text-slate-400 text-xs font-light leading-relaxed">{service.desc}</p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

    </div>
  );
}