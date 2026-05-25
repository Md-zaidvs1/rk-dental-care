import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ShieldCheck, Activity, Syringe, Trash2, ShieldAlert, Award, Layers, FlameKindling, Zap, Eye } from 'lucide-react';

const allDoctorServices = [
  { id: "dental-filling", name: "Dental Filling", icon: Sparkles, desc: "Restores teeth layers cleanly by safely removing minor decay paths and filling small cavities." },
  { id: "endodontic-treatment", name: "Endodontic Treatment", icon: ShieldCheck, desc: "Advanced root pulp evaluation metrics targeting deep interior nerve infections." },
  { id: "root-canal-treatment", name: "Root Canal Treatment", icon: Activity, desc: "Painless therapeutic procedures to remove infected pulp and salvage natural tooth structures." },
  { id: "scaling-and-root-planing", name: "Scaling & Root Planing", icon: Syringe, desc: "Deep mechanical plaque scaling below gumlines to reverse progressive gum infections." },
  { id: "extraction", name: "Extraction", icon: Trash2, desc: "Safe extraction of severely compromised structures or impacted secondary wisdom teeth." },
  { id: "replacement-of-missing-teeth", name: "Replacement of Missing Teeth", icon: ShieldAlert, desc: "Custom bridges and crowns fabricated cleanly to restore complete biting occlusion paths." },
  { id: "pediatric-dentistry", name: "Pediatric Dentistry", icon: Award, desc: "Gentle, non-intimidating comprehensive preventive primary tooth care for kids." },
  { id: "rvg-digital-x-ray", name: "RVG Digital X-Ray Available", icon: Eye, desc: "Instant low-dose internal radiography imaging with zero chemical processing wait times." },
  { id: "dental-implants", name: "Dental Implants", icon: Layers, desc: "Advanced biocompatible permanent titanium roots surgically anchored into jaw bone regions." },
  { id: "smile-designing", name: "Smile Designing", icon: FlameKindling, desc: "Aesthetic tooth shaping and layer balancing treatments to capture your desired perfect smile." },
  { id: "orthodontic-treatment", name: "Orthodontic Treatment", icon: Zap, desc: "High-quality alignment bracket braces or clear custom aligners to adjust crooked dental columns." }
];

export default function Services() {
  return (
    <div className="bg-white min-h-screen">
      
      {/* Banner */}
      <section className="relative bg-slate-900 text-white py-20 px-4 text-center">
        <div className="absolute inset-0 bg-cyan-950/40 z-10"></div>
        <div className="relative z-20 space-y-2">
          <p className="text-xs uppercase tracking-widest text-cyan-400 font-bold">HOME ➔ CLINIC SERVICES</p>
          <h1 className="text-4xl md:text-5xl font-light text-white">
            Treatments <span className="font-bold">Offered</span>
          </h1>
        </div>
      </section>

      {/* Grid Index */}
      <section className="max-w-7xl mx-auto px-4 py-20 text-center">
        <div className="space-y-3 max-w-2xl mx-auto mb-16">
          <h2 className="text-2xl md:text-3xl font-light text-slate-900">
            Our Service Keeps <span className="font-bold text-cyan-600">You Smile</span>
          </h2>
          <div className="w-16 h-0.5 bg-cyan-500 mx-auto"></div>
          <p className="text-slate-400 text-sm font-light leading-relaxed">
            Click on any clinical category block below to explore detailed definitions and step-by-step diagnostic workflows.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {allDoctorServices.map((item, i) => {
            const IconComp = item.icon;
            return (
              <Link 
                to={`/treatment/${item.id}`} 
                key={i} 
                className="flex flex-col items-center p-6 border border-slate-100 rounded-xl hover:shadow-xl hover:border-cyan-500/20 transition group duration-300 bg-white animate-fadeIn"
              >
                <div className="w-16 h-16 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-cyan-500 group-hover:bg-cyan-500 group-hover:text-white transition duration-300 shadow-xs">
                  <IconComp className="w-6 h-6 font-light" />
                </div>
                <h4 className="text-base font-bold text-slate-800 tracking-wide mt-4 group-hover:text-cyan-600 transition">{item.name}</h4>
                <p className="text-slate-400 text-xs font-light leading-relaxed mt-2 text-center">
                  {item.desc}
                </p>
                <span className="text-[10px] font-bold text-cyan-500 uppercase mt-4 opacity-0 group-hover:opacity-100 transition tracking-wider">
                  Read Details ➔
                </span>
              </Link>
            );
          })}
        </div>
      </section>

    </div>
  );
}