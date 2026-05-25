import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Calendar, MessageSquare, X, ChevronDown } from 'lucide-react';

// Core page layouts
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact'; 
import Video from './pages/Video';     
import TreatmentDetail from './pages/TreatmentDetail';

import clinicLogo from './assets/logo.png';

const menuTreatments = [
  { id: "dental-filling", name: "Dental Filling" },
  { id: "endodontic-treatment", name: "Endodontic Treatment" },
  { id: "root-canal-treatment", name: "Root Canal Treatment" },
  { id: "scaling-and-root-planing", name: "Scaling & Root Planing" },
  { id: "extraction", name: "Extraction" },
  { id: "replacement-of-missing-teeth", name: "Replacement of Missing Teeth" },
  { id: "pediatric-dentistry", name: "Pediatric Dentistry" },
  { id: "rvg-digital-x-ray", name: "RVG Digital X-Ray Available" },
  { id: "dental-implants", name: "Dental Implants" },
  { id: "smile-designing", name: "Smile Designing" },
  { id: "orthodontic-treatment", name: "Orthodontic Treatment" }
];

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Smart Universal WhatsApp Dispatcher with Desktop Fallback Protection
  const handleModalSubmit = (e) => {
    e.preventDefault();
    
    const name = e.target.patientName.value.trim();
    const phone = e.target.patientPhone.value.trim();
    const treatment = e.target.treatment.value;

    // Beautifully formatted text message layout
    const baseMessage = 
      `Hello RK Dental Care! I would like to request a dental appointment.\n\n` +
      `*Patient Name:* ${name}\n` +
      `*Contact Number:* ${phone}\n` +
      `*Requested Treatment:* ${treatment}`;

    const encodedMessage = encodeURIComponent(baseMessage);
    const targetNumber = "918883261285";

    // Detect if the user is browsing on a desktop machine or mobile phone
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    let finalWhatsappUrl = "";

    if (isMobile) {
      // Mobile devices work flawlessly with the crisp wa.me deep-link protocol
      finalWhatsappUrl = `https://wa.me/${targetNumber}?text=${encodedMessage}`;
    } else {
      // Desktops are routed directly to the official web client API to prevent the gray screen lock
      finalWhatsappUrl = `https://web.whatsapp.com/send?phone=${targetNumber}&text=${encodedMessage}`;
    }

    // Securely launch the chat path window channel
    window.open(finalWhatsappUrl, '_blank', 'noopener,noreferrer');
    setIsModalOpen(false);
  };

  return (
    <Router>
      <div className="min-h-screen bg-slate-50 font-sans text-slate-800 flex flex-col">
        
        {/* Top Header Ribbon */}
        <div className="bg-slate-900 text-slate-400 text-xs py-2 px-4 hidden md:block border-b border-slate-800">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <div className="flex gap-6">
              <span className="flex items-center gap-2"><Phone size={12} className="text-cyan-400" /> 8883261285</span>
              <span className="flex items-center gap-2"><Mail size={12} className="text-cyan-400" /> drradhakrishnan94@gmail.com</span>
            </div>
            <span className="flex items-center gap-2"><Clock size={12} className="text-cyan-400" /> Estd. 2018 | 7 Years of Clinical Excellence</span>
          </div>
        </div>

        {/* Global Navigation Bar */}
        <nav className="bg-slate-950 text-white sticky top-0 z-40 shadow-lg">
          <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
            
            <Link to="/" className="flex items-center gap-3 group">
              <img
                src={clinicLogo}
                alt="RK Dental Care Logo"
                className="h-16 w-auto rounded-md shadow-md border border-amber-500/20"
              />
              <div className="text-left">
                <span className="font-bold text-xl block tracking-wider text-white">RK DENTAL CARE</span>
                <span className="text-[10px] text-amber-400 block -mt-1 font-semibold tracking-widest uppercase">General & Cosmetic Dentistry</span>
              </div>
            </Link>
            
            <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide uppercase">
              <Link to="/" className="hover:text-cyan-400 transition">Home</Link>
              <Link to="/about" className="hover:text-cyan-400 transition">About Us</Link>
              
              {/* Treatments Offered Dropdown Menu */}
              <div 
                className="relative py-2"
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                <button className="hover:text-cyan-400 transition flex items-center gap-1 cursor-pointer tracking-wide uppercase font-medium text-sm">
                  Our Treatments <ChevronDown size={14} className={`transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                {isDropdownOpen && (
                  <div className="absolute left-0 mt-2 w-64 bg-white border border-slate-100 rounded-md shadow-2xl py-2 z-50 normal-case">
                    {menuTreatments.map((treatment) => (
                      <Link
                        key={treatment.id}
                        to={`/treatment/${treatment.id}`}
                        onClick={() => setIsDropdownOpen(false)}
                        className="block px-4 py-2 text-xs font-medium text-slate-700 hover:bg-slate-50 hover:text-cyan-600 transition border-b border-slate-50 last:border-0"
                      >
                        {treatment.name}
                      </Link>
                    ))}
                    <div className="border-t border-slate-100 mt-1 pt-1 bg-slate-50">
                      <Link to="/services" onClick={() => setIsDropdownOpen(false)} className="block px-4 py-1.5 text-center text-[10px] font-bold text-cyan-600 hover:text-cyan-700 tracking-wider uppercase">View All Services ➔</Link>
                    </div>
                  </div>
                )}
              </div>

              <Link to="/reviews" className="hover:text-cyan-400 transition">Video Intro</Link>
              <Link to="/contact" className="hover:text-cyan-400 transition">Reviews & Contact</Link>
              
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-cyan-500 hover:bg-cyan-600 text-white px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition shadow-md cursor-pointer"
              >
                Book Appointment
              </button>
            </div>
          </div>
        </nav>

        {/* Viewport Render Panel */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home openModal={() => setIsModalOpen(true)} />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/reviews" element={<Video />} /> 
            <Route path="/contact" element={<Contact />} />
            <Route path="/treatment/:id" element={<TreatmentDetail />} />
          </Routes>
        </main>

        {/* Floating Quick Assistance Tool */}
        <a
          href="https://api.whatsapp.com/send?phone=918883261285&text=Hi%20Doctor%2C%20I%20want%20to%20book%20a%20dental%20consultation%20with%20RK%20Dental%20Care."
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition duration-300 z-50 flex items-center justify-center group"
        >
          <MessageSquare className="w-6 h-6" />
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 ease-out whitespace-nowrap ml-0 group-hover:ml-2 font-medium text-sm">
            Chat with us
          </span>
        </a>

        {/* Global Footer Layout */}
        <footer className="bg-slate-950 text-slate-400 pt-16 pb-8 px-4 border-t border-slate-900 mt-auto">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">
            <div className="md:col-span-4 space-y-3">
              <h3 className="text-white font-bold text-lg tracking-wide">RK DENTAL CARE</h3>
              <p className="text-xs leading-relaxed text-slate-400">Providing premium, patient-friendly dental services in Kalavai since 2018. Your smile is our ultimate priority.</p>
              <p className="text-xs text-amber-400 font-semibold">Dr. V. Radhakrishnan BDS., D.Endo.</p>
            </div>
            <div className="md:col-span-3 space-y-3">
              <h3 className="text-white font-bold text-sm uppercase tracking-wider">Navigation</h3>
              <ul className="space-y-2 text-xs">
                <li><Link to="/" className="hover:text-cyan-400 transition">Home Layout</Link></li>
                <li><Link to="/about" className="hover:text-cyan-400 transition">About Clinic</Link></li>
                <li><Link to="/services" className="hover:text-cyan-400 transition">Treatments Offered</Link></li>
                <li><Link to="/contact" className="hover:text-cyan-400 transition">Reviews & Contact</Link></li>
              </ul>
            </div>
            <div className="md:col-span-5 space-y-4">
              <h3 className="text-white font-bold text-sm uppercase tracking-wider">Our Branch Locations</h3>
              <div className="grid grid-cols-1 gap-4 text-xs font-light text-slate-400">
                <div className="space-y-1 bg-slate-900/50 p-3 rounded-lg border border-slate-800/60">
                  <p className="text-cyan-400 font-bold uppercase text-[10px] tracking-wider">Kalavai Hub (Primary)</p>
                  <p className="flex items-start gap-2 mt-1"><MapPin size={14} className="text-cyan-400 shrink-0 mt-0.5" /><span>No.10/1 School street, near police station, Kalavai 632506</span></p>
                </div>
                <div className="space-y-1 bg-slate-900/50 p-3 rounded-lg border border-slate-800/60">
                  <p className="text-teal-400 font-bold uppercase text-[10px] tracking-wider">Vembakkam Clinic</p>
                  <p className="flex items-start gap-2 mt-1"><MapPin size={14} className="text-teal-400 shrink-0 mt-0.5" /><span>No.626 Main Road, Next to KVK Thirumba Mahal, Vembakkam 604410, Tiruvannamalai District</span></p>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-7xl mx-auto border-t border-slate-900 pt-6 text-center text-xs text-slate-600">
            &copy; {new Date().getFullYear()} RK Dental Care. All Rights Reserved.
          </div>
        </footer>

        {/* Interactive Booking Modal Form Overlay */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4 z-[100]">
            <div className="bg-white rounded-xl shadow-2xl w-full max-w-md overflow-hidden relative">
              <button onClick={() => setIsModalOpen(false)} className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition"><X size={20} /></button>
              
              <div className="bg-cyan-700 text-white p-6">
                <h3 className="text-xl font-bold">Book an Appointment</h3>
                <p className="text-cyan-100 text-xs mt-1">Fill out the fields below and our clinical team will confirm your slot layout directly over WhatsApp.</p>
              </div>
              
              <form onSubmit={handleModalSubmit} className="p-6 space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1 tracking-wider uppercase">Patient Name</label>
                  <input 
                    type="text" 
                    name="patientName" 
                    required 
                    className="w-full border border-slate-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-cyan-500" 
                    placeholder="Your Full Name" 
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1 tracking-wider uppercase">Contact Number</label>
                  <input 
                    type="tel" 
                    name="patientPhone" 
                    required 
                    className="w-full border border-slate-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-cyan-500" 
                    placeholder="Mobile Number" 
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1 tracking-wider uppercase">Preferred Treatment</label>
                  <select 
                    name="treatment" 
                    className="w-full border border-slate-300 rounded px-3 py-2 text-sm bg-white focus:outline-none focus:border-cyan-500 cursor-pointer"
                  >
                    {menuTreatments.map((t, i) => <option key={i} value={t.name}>{t.name}</option>)}
                  </select>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold py-2.5 rounded transition text-sm tracking-wide mt-2 cursor-pointer"
                >
                  SUBMIT RESERVATION
                </button>
              </form>
            </div>
          </div>
        )}

      </div>
    </Router>
  );
}