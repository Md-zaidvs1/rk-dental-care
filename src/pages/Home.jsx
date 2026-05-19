import React, { useState, useEffect } from 'react';
import { Clock, ShieldAlert, Calendar, Check, User, Phone, Sparkles, Activity, Layers, HeartPulse } from 'lucide-react';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Premium high-resolution dental care background scenes from a live asset library
  const slides = [
    "https://images.unsplash.com/photo-1629909608135-ca9abc772591?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1579684389782-64d84b5e901a?q=80&w=1600&auto=format&fit=crop"
  ];

  // Automated slider interval engine - transitions background scenes every 5 seconds
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(slideInterval);
  }, [slides.length]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const name = e.target.elements.name.value;
    const phone = e.target.elements.phone.value;
    const treatment = e.target.elements.treatment.value;
    
    const message = `Hello RK Dental Care! I would like to book an appointment.%0A%0A` +
                    `*Patient Name:* ${encodeURIComponent(name)}%0A` +
                    `*Contact Phone:* ${encodeURIComponent(phone)}%0A` +
                    `*Selected Treatment:* ${encodeURIComponent(treatment)}`;
    
    window.open(`https://wa.me/918883261285?text=${message}`, '_blank');
  };

  return (
    <div className="bg-white min-h-screen font-sans">
      
      {/* 1. Dynamic Hero Crossfading Background Slider Section (Owner image removed for maximum background visibility) */}
      <section className="relative min-h-[650px] md:min-h-[750px] bg-slate-950 flex items-center justify-center px-4 overflow-hidden">
        
        {/* Render Carousel Slides dynamically using state transition arrays */}
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out bg-cover bg-center ${
              index === currentSlide ? 'opacity-35 scale-100' : 'opacity-0 scale-105'
            }`}
            style={{ backgroundImage: `url(${slide})` }}
          />
        ))}

        {/* Deep Dark Gradient Mask layer blending into your slate navbar */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/70 to-cyan-950/40 z-10"></div>
        
        {/* Centered single column layouts for high-impact typography visibility */}
        <div className="max-w-4xl mx-auto w-full relative z-20 pt-12 pb-24 lg:pb-36 text-center space-y-6">
          
          <span className="bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest inline-block">
            Estd. 2018 | 7 Years of Excellence
          </span>
          
          <h1 className="text-4xl md:text-6xl font-light text-white tracking-tight leading-tight">
            Modern Achieve <br />
            <span className="font-bold text-cyan-400 drop-shadow-sm">Your Desired Perfect Smile</span>
          </h1>
          
          <p className="text-slate-300 text-sm md:text-base max-w-2xl mx-auto font-light leading-relaxed">
            Experience absolute clinical precision under Dr. V. Radhakrishnan BDS., D.Endo. Providing specialized premium root treatments, cosmetic alignments, and restorative smile redesigns in Kalavai.
          </p>
          
          {/* Carousel Interactive Pagination Indicator Dots */}
          <div className="flex justify-center gap-2.5 pt-4">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  i === currentSlide ? 'w-10 bg-cyan-400' : 'w-2.5 bg-white/40 hover:bg-white/70'
                }`}
              />
            ))}
          </div>

        </div>
      </section>

      {/* 2. Overlapping Triple Feature Card Deck Strip Panel */}
      <section className="max-w-7xl mx-auto px-4 -mt-20 lg:-mt-24 relative z-30 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 rounded-xl shadow-2xl overflow-hidden border border-slate-200/10">
          
          {/* Card A: Emergency Cases */}
          <div className="bg-cyan-500 text-white p-8 space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <ShieldAlert className="w-8 h-8 opacity-90" />
                <h3 className="text-xl font-bold tracking-wide">Emergency Cases</h3>
              </div>
              <p className="text-cyan-50 text-sm font-light leading-relaxed">
                Experiencing acute dental trauma, severe toothaches, or fractures? Contact our quick-response medical line immediately for priority treatment.
              </p>
            </div>
            <div className="pt-4 border-t border-cyan-400/30">
              <p className="text-xs tracking-wider text-cyan-200 font-bold uppercase">Call Emergency Helpline</p>
              <p className="text-2xl font-bold tracking-wide mt-1 text-white">8883261285</p>
            </div>
          </div>

          {/* Card B: Clinic Opening Hours */}
          <div className="bg-cyan-600 text-white p-8 space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Clock className="w-8 h-8 opacity-90" />
                <h3 className="text-xl font-bold tracking-wide">Opening Hours</h3>
              </div>
              <div className="space-y-2.5 text-sm text-cyan-50 font-light pt-2">
                <div className="flex justify-between border-b border-cyan-500/30 pb-1.5">
                  <span>Monday - Friday</span>
                  <span className="font-semibold">09:00 AM - 08:30 PM</span>
                </div>
                <div className="flex justify-between border-b border-cyan-500/30 pb-1.5">
                  <span>Saturday</span>
                  <span className="font-semibold">09:00 AM - 08:30 PM</span>
                </div>
                <div className="flex justify-between text-amber-300 font-medium">
                  <span>Sunday</span>
                  <span className="uppercase tracking-wider">Closed</span>
                </div>
              </div>
            </div>
            <div className="text-xs text-cyan-200 italic">
              *Appointments are recommended to avoid wait times.
            </div>
          </div>

          {/* Card C: Quick Integrated Booking Form Panel */}
          <div className="bg-gradient-to-br from-cyan-600 to-teal-500 text-white p-8">
            <h3 className="text-xl font-bold tracking-wide mb-4">Make an Appointment</h3>
            <form onSubmit={handleFormSubmit} className="space-y-3.5">
              
              <div className="relative">
                <User className="absolute left-3 top-3 w-4 h-4 text-cyan-200" />
                <input 
                  type="text" 
                  name="name"
                  required
                  placeholder="Your Full Name" 
                  className="w-full bg-cyan-700/40 border border-cyan-400/30 rounded px-9 py-2 text-sm text-white placeholder-cyan-200/70 focus:outline-none focus:border-white transition"
                />
              </div>

              <div className="relative">
                <Phone className="absolute left-3 top-3 w-4 h-4 text-cyan-200" />
                <input 
                  type="tel" 
                  name="phone"
                  required
                  placeholder="Contact Mobile Number" 
                  className="w-full bg-cyan-700/40 border border-cyan-400/30 rounded px-9 py-2 text-sm text-white placeholder-cyan-200/70 focus:outline-none focus:border-white transition"
                />
              </div>

              <div>
                <select 
                  name="treatment"
                  className="w-full bg-cyan-700/40 border border-cyan-400/30 rounded px-3 py-2 text-sm text-white focus:outline-none bg-slate-800 cursor-pointer"
                >
                  <option>Root Canal Treatment</option>
                  <option>Dental Filling / Restorations</option>
                  <option>Scaling & Polishing</option>
                  <option>Premium Smile Designing</option>
                </select>
              </div>

              <button 
                type="submit" 
                className="w-full bg-white hover:bg-slate-100 text-cyan-700 font-bold py-2.5 rounded transition text-xs uppercase tracking-wider shadow-md mt-2 cursor-pointer"
              >
                Confirm Appointment via WhatsApp
              </button>

            </form>
          </div>

        </div>
      </section>

      {/* 3. Services Grid Section (With clean line-symbols) */}
      <section className="max-w-7xl mx-auto px-4 py-12 text-center mb-16">
        <div className="space-y-3 max-w-2xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl font-light text-slate-900 tracking-tight">
            Our Service Keeps <span className="font-bold text-cyan-600">You Smile</span>
          </h2>
          <div className="w-16 h-0.5 bg-cyan-500 mx-auto"></div>
          <p className="text-slate-400 text-sm font-light leading-relaxed">
            Providing comprehensive diagnostic oral solutions utilizing high-fidelity sterilization parameters and painless execution maps.
          </p>
        </div>

        {/* 4 Iconic Primary Care Grids matching reference aesthetic */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          
          <div className="flex flex-col items-center p-6 space-y-4 border border-slate-100 rounded-xl hover:shadow-xl transition group duration-300">
            <div className="w-20 h-20 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-cyan-500 group-hover:bg-cyan-500 group-hover:text-white transition duration-300 shadow-xs">
              <Sparkles className="w-7 h-7 font-light" />
            </div>
            <h4 className="text-lg font-bold text-slate-800">Teeth Whitening</h4>
            <p className="text-slate-400 text-xs font-light leading-relaxed">
              Advanced chemical restoration protocols designed to eliminate deep extrinsic multi-layer staining patterns.
            </p>
          </div>

          <div className="flex flex-col items-center p-6 space-y-4 border border-slate-100 rounded-xl hover:shadow-xl transition group duration-300">
            <div className="w-20 h-20 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-cyan-500 group-hover:bg-cyan-500 group-hover:text-white transition duration-300 shadow-xs">
              <Activity className="w-7 h-7 font-light" />
            </div>
            <h4 className="text-lg font-bold text-slate-800">Teeth Cleaning</h4>
            <p className="text-slate-400 text-xs font-light leading-relaxed">
              Meticulous ultrasonic scaling arrays targeted to clear heavy sub-gingival calculus deposits safely.
            </p>
          </div>

          <div className="flex flex-col items-center p-6 space-y-4 border border-slate-100 rounded-xl hover:shadow-xl transition group duration-300">
            <div className="w-20 h-20 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-cyan-500 group-hover:bg-cyan-500 group-hover:text-white transition duration-300 shadow-xs">
              <Layers className="w-7 h-7 font-light" />
            </div>
            <h4 className="text-lg font-bold text-slate-800">Quality Brackets</h4>
            <p className="text-slate-400 text-xs font-light leading-relaxed">
              Custom orthodontic structural maps built to align dental crowding configurations reliably.
            </p>
          </div>

          <div className="flex flex-col items-center p-6 space-y-4 border border-slate-100 rounded-xl hover:shadow-xl transition group duration-300">
            <div className="w-20 h-20 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-cyan-500 group-hover:bg-cyan-500 group-hover:text-white transition duration-300 shadow-xs">
              <HeartPulse className="w-7 h-7 font-light" />
            </div>
            <h4 className="text-lg font-bold text-slate-800">Modern Anesthetic</h4>
            <p className="text-slate-400 text-xs font-light leading-relaxed">
              Localized, painless sensory blocks optimized for an entirely stress-free patient treatment cycle.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
}