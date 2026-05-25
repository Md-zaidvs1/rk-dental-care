import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Clock, ShieldAlert, MapPin, Sparkles, Activity, Layers, Calendar, Phone, Syringe, ChevronRight } from 'lucide-react';

// Secure local imports for your background slider assets
import bgSlide1 from '../assets/Royalty.webp';
import bgSlide4 from '../assets/bg-3.avif';
import bgSlide5 from '../assets/bg-5.webp';
import bgSlide6 from '../assets/bg-6.jpg';
import bgSlide7 from '../assets/bg-7.avif';

// Secure local import for your main branding/overview images
import rkDoctor from '../assets/rk.jpeg'; 
import dentalEquipt from '../assets/dental-equipt.jpg';

const homeFourServices = [
  { id: "root-canal-treatment", name: "Root Canal Treatment", icon: Activity, desc: "Painless microscopic root salvages to clear deep interior root complexes." },
  { id: "dental-filling", name: "Dental Filling", icon: Sparkles, desc: "Restores tooth structure cleanly by safely removing minor dental decay channels." },
  { id: "scaling-and-root-planing", name: "Scaling & Root Planing", icon: Syringe, desc: "Deep ultrasonic plaque removals targeting sub-gingival calculus safely." },
  { id: "orthodontic-treatment", name: "Orthodontic Treatment", icon: Layers, desc: "Premium alignment systems and clear aligners to guide crooked teeth." }
];

export default function Home({ openModal }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [hoveredServiceIdx, setHoveredServiceIdx] = useState(null);
  
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
      
      {/* 1. Dynamic Hero Slideshow Area — Fixed top-padding metrics for mobile viewports */}
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
        
        {/* Added responsive pt-24 padding to push content down on mobile views */}
        <div className="max-w-4xl mx-auto w-full relative z-20 text-center space-y-6 pt-24 pb-24 md:pt-16 md:pb-20 px-2">
          <span className="bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 px-3 py-1 md:px-4 md:py-1.5 rounded-full text-[10px] md:text-xs font-semibold uppercase tracking-widest inline-block">
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

      {/* 3. Split Services Section */}
      <section className="max-w-7xl mx-auto px-4 py-8 md:py-16 mb-12">
        <div className="text-center space-y-3 max-w-2xl mx-auto mb-12 md:mb-16">
          <h2 className="text-2xl md:text-4xl font-light text-slate-900 tracking-tight"> Our Service Keeps <span className="font-bold text-cyan-600">You Smile</span></h2>
          <div className="w-14 h-0.5 bg-cyan-500 mx-auto"></div>
          <p className="text-slate-400 text-xs md:text-sm font-light leading-relaxed">RK Dental Care structures premium treatment options through clinical precision and hospital-grade sterilization parameters.</p>
        </div>

        {/* Two-Column Grid Setup */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Left Column: Clinical Equipment splash */}
          <div className="lg:col-span-5 h-[350px] md:h-[500px] w-full rounded-2xl overflow-hidden shadow-xl border border-slate-100 relative group bg-slate-50">
            <img src={dentalEquipt} alt="RK Dental Care Splash Graphic Artwork" className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-102" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent z-10"></div>
            <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 z-20 text-left space-y-1 bg-white/90 backdrop-blur-xs p-3 md:p-4 rounded-xl border border-white/40 shadow-sm">
              <span className="text-[9px] font-bold tracking-widest text-cyan-600 uppercase">Clinical Precision</span>
              <h4 className="text-sm md:text-base font-bold tracking-wide text-slate-800 mt-0.5">State-of-the-Art Operations</h4>
            </div>
          </div>

          {/* Right Column: Premium Interactive Photo-Based Service Block */}
          <div className="lg:col-span-7 rounded-2xl overflow-hidden border border-slate-100/60 shadow-xl relative group min-h-[450px] md:min-h-[500px]">
            <img src={rkDoctor} alt="Dr. V. Radhakrishnan, RK Dental Care Chief Endodontist" className="w-full h-full object-cover" />
            
            {/* Dark vignette overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950/20 via-black/40 to-black/90 z-10 group-hover:scale-101 transition duration-500" />

            {/* Premium Doctor Metadata Badge */}
            <div className="absolute top-4 left-4 md:top-6 md:left-6 z-30 space-y-0.5 text-left">
              <span className="text-[9px] uppercase tracking-widest text-white/70 font-medium">Chief Practitioner</span>
              <h4 className="text-base md:text-lg font-bold text-white tracking-wide">Dr. V. Radhakrishnan BDS., D.Endo.</h4>
            </div>

            {/* Interactive Grid of Service Badges with automated hover popups */}
            <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 z-30 max-w-lg space-y-3 w-[calc(100%-2rem)] md:w-[calc(100%-3rem)]">
              <div className="relative min-h-[60px] hidden md:block">
                {homeFourServices.map((service, i) => {
                  const Icon = service.icon;
                  return (
                    <Link 
                      to={`/treatment/${service.id}`} 
                      key={i} 
                      className="absolute bottom-0 left-0 flex items-center gap-3 p-3 rounded-lg border border-cyan-500/30 bg-cyan-950/90 backdrop-blur-sm shadow-xl transition duration-300 w-full text-left"
                      style={{ 
                        opacity: hoveredServiceIdx === i ? 1 : 0, 
                        visibility: hoveredServiceIdx === i ? 'visible' : 'hidden',
                        transform: hoveredServiceIdx === i ? 'translateY(0)' : 'translateY(10px)',
                        transition: 'opacity 0.3s, transform 0.3s, visibility 0s 0.3s'
                      }}
                    >
                      <div className="w-9 h-9 rounded-lg bg-cyan-500 flex items-center justify-center text-white shrink-0"><Icon className="w-4 h-4" /></div>
                      <p className="text-slate-100 text-xs font-light leading-relaxed">{service.desc}</p>
                      <ChevronRight size={16} className="text-cyan-400 ml-auto shrink-0" />
                    </Link>
                  );
                })}
              </div>

              {/* Menu links triggers */}
              <div className="grid grid-cols-2 gap-2 pt-2 border-t border-white/20 text-left">
                {homeFourServices.map((service, i) => (
                  <Link 
                    key={i} 
                    to={`/treatment/${service.id}`} 
                    className="flex items-center gap-1 md:gap-1.5 text-[11px] md:text-xs text-white hover:text-cyan-400 font-medium tracking-wide transition duration-300 py-1"
                    onMouseEnter={() => setHoveredServiceIdx(i)}
                    onMouseLeave={() => setHoveredServiceIdx(null)}
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                    <span className="truncate">{service.name}</span>
                  </Link>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}