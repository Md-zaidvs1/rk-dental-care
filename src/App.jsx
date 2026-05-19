import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Calendar, MessageSquare, X, ChevronDown } from 'lucide-react';

// Import all your page components
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Reviews from './pages/Reviews'; // Correctly updated to your new Reviews component
import Contact from './pages/Contact';
import TreatmentDetail from './pages/TreatmentDetail';

import clinicLogo from './assets/logo.png';

// Your doctor's exact 11 clinical services mapped for the dropdown menu links
const menuTreatments = [
  { id: "dental-filling", name: "Dental Filling" },
  { id: "endodontic-treatment", name: "Endodontic Treatment" },
  { id: "root-canal-treatment", name: "Root Canal Treatment" },
  { id: "scaling-and-root-planing", name: "Scaling & Root Planing" },
  { id: "extraction", name: "Tooth Extraction" },
  { id: "replacement-of-missing-teeth", name: "Replacement of Missing Teeth" },
  { id: "pediatric-dentistry", name: "Pediatric Dentistry" },
  { id: "rvg-digital-x-ray", name: "RVG Digital X-Ray" },
  { id: "dental-implants", name: "Dental Implants" },
  { id: "smile-designing", name: "Smile Designing" },
  { id: "orthodontic-treatment", name: "Orthodontic Treatment" }
];

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-white font-sans text-slate-800 flex flex-col">
        
        {/* Top Header Contact Bar */}
        <div className="bg-slate-900 border-b border-slate-800 text-slate-400 text-xs py-2 px-4 hidden md:block">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <div className="flex gap-6">
              <span className="flex items-center gap-2"><Phone size={12} className="text-cyan-400" /> +91 8883261285</span>
              <span className="flex items-center gap-2"><Mail size={12} className="text-cyan-400" /> drradhakrishnan94@gmail.com</span>
            </div>
            <span className="flex items-center gap-2"><Clock size={12} className="text-cyan-400" /> Estd. 2018 | 7 Years of Excellence</span>
          </div>
        </div>

        {/* Global Dark Navigation Bar */}
        <nav className="bg-slate-950 text-white sticky top-0 z-50 shadow-lg">
          <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
            
            <Link to="/" className="flex items-center gap-3">
              <img 
                src={clinicLogo} 
                alt="RK Dental Care Logo" 
                className="h-11 w-auto rounded border border-amber-500/20"
              />
              <div>
                <span className="font-bold text-lg block tracking-wider text-white">DENTACARE</span>
                <span className="text-[10px] text-amber-400 block -mt-1 font-medium tracking-widest uppercase">RK Dental Clinic</span>
              </div>
            </Link>
            
            {/* Desktop Navigation Links Container */}
            <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide uppercase">
              <Link to="/" className="hover:text-cyan-400 transition">Home</Link>
              <Link to="/about" className="hover:text-cyan-400 transition">About Us</Link>
              
              {/* Interactive Hover Dropdown Menu Item Trigger */}
              <div 
                className="relative h-full py-2"
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                <button className="hover:text-cyan-400 transition flex items-center gap-1 cursor-pointer tracking-wide uppercase font-medium text-sm">
                  Our Treatments <ChevronDown size={14} className={`transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                {/* Dropdown Menu Item Container List */}
                {isDropdownOpen && (
                  <div className="absolute left-0 mt-2 w-64 bg-white border border-slate-100 rounded-md shadow-2xl py-2 z-50 animate-fadeIn">
                    {menuTreatments.map((treatment) => (
                      <Link
                        key={treatment.id}
                        to={`/treatment/${treatment.id}`}
                        onClick={() => setIsDropdownOpen(false)}
                        className="block px-4 py-2.5 text-xs font-medium text-slate-700 hover:bg-slate-50 hover:text-cyan-600 border-b border-slate-50 last:border-0 transition"
                      >
                        {treatment.name}
                      </Link>
                    ))}
                    <div className="border-t border-slate-100 mt-1 bg-slate-50/50">
                      <Link
                        to="/services"
                        onClick={() => setIsDropdownOpen(false)}
                        className="block px-4 py-2 text-center text-[10px] font-bold text-cyan-600 hover:text-cyan-700 tracking-wider"
                      >
                        VIEW ALL TREATMENTS ➔
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* Corrected Navigation Item linking straight to the Reviews Dashboard panel */}
              <Link to="/reviews" className="hover:text-cyan-400 transition">Reviews</Link>
              <Link to="/contact" className="hover:text-cyan-400 transition">Contact</Link>
              
              <button 
                onClick={() => setIsModalOpen(true)}
                className="bg-cyan-500 hover:bg-cyan-600 text-white px-5 py-2 rounded-full font-semibold transition tracking-wider text-xs uppercase cursor-pointer shadow-md"
              >
                Make an Appointment
              </button>
            </div>

          </div>
        </nav>

        {/* Dynamic Page Core Body Router Panels */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/reviews" element={<Reviews />} /> {/* Wired perfectly to show Reviews page layout */}
            <Route path="/contact" element={<Contact />} />
            <Route path="/treatment/:id" element={<TreatmentDetail />} />
          </Routes>
        </main>

        {/* Global Footer */}
        <footer className="bg-slate-950 text-slate-400 pt-16 pb-8 px-4 border-t border-slate-900">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div className="space-y-4">
              <h3 className="text-white font-bold text-lg tracking-wider">DentaCare.</h3>
              <p className="text-xs leading-relaxed font-light text-slate-400">
                Providing premium, patient-friendly dental services in Kalavai since 2018. Your smile remains our absolute clinical priority.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-white font-bold text-sm tracking-wider uppercase">Quick Links</h3>
              <ul className="space-y-2.5 text-xs font-light">
                <li><Link to="/" className="hover:text-cyan-400 transition">Home</Link></li>
                <li><Link to="/about" className="hover:text-cyan-400 transition">About Clinic</Link></li>
                <li><Link to="/services" className="hover:text-cyan-400 transition">Treatments Offered</Link></li>
                <li><Link to="/contact" className="hover:text-cyan-400 transition">Contact & Location</Link></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-white font-bold text-sm tracking-wider uppercase">Office Contact</h3>
              <ul className="space-y-3 text-xs font-light text-slate-400">
                <li className="flex items-start gap-2.5"><MapPin size={16} className="text-cyan-400 shrink-0 mt-0.5" /> <span>No.10/1 School street, near police station, Kalavai 632506</span></li>
                <li className="flex items-center gap-2.5"><Phone size={14} className="text-cyan-400" /> +91 8883261285</li>
                <li className="flex items-center gap-2.5"><Mail size={14} className="text-cyan-400" /> drradhakrishnan94@gmail.com</li>
              </ul>
            </div>
          </div>
          <div className="max-w-7xl mx-auto border-t border-slate-900 pt-6 text-center text-xs text-slate-600">
            Copyright &copy; {new Date().getFullYear()} All rights reserved | RK Dental Care template custom built with React.
          </div>
        </footer>

        {/* Global Appointment Booking Form Modal Panel */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 z-[100]">
            <div className="bg-white w-full max-w-md shadow-2xl relative rounded-sm overflow-hidden">
              <button onClick={() => setIsModalOpen(false)} className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition cursor-pointer z-10">
                <X size={20} />
              </button>
              
              <div className="p-8 space-y-6">
                <h3 className="text-xl font-normal text-slate-900 tracking-tight">Make an Appointment</h3>
                
                <form 
                  onSubmit={(e) => { 
                    e.preventDefault(); 
                    const name = e.target.name.value;
                    const email = e.target.email.value;
                    const date = e.target.date.value;
                    const time = e.target.time.value;
                    const msg = e.target.message.value;
                    
                    const text = `Appointment Request Details:%0A*Patient Name:* ${encodeURIComponent(name)}%0A*Email:* ${encodeURIComponent(email)}%0A*Date:* ${encodeURIComponent(date)}%0A*Time:* ${encodeURIComponent(time)}%0A*Message:* ${encodeURIComponent(msg)}`;
                    window.open(`https://wa.me/918883261285?text=${text}`, '_blank');
                    setIsModalOpen(false); 
                  }} 
                  className="space-y-4"
                >
                  <input type="text" name="name" required placeholder="Full Name" className="w-full border-b border-slate-200 py-2.5 text-sm outline-hidden focus:border-cyan-500 transition" />
                  <input type="email" name="email" required placeholder="Email Address" className="w-full border-b border-slate-200 py-2.5 text-sm outline-hidden focus:border-cyan-500 transition" />
                  
                  <div className="grid grid-cols-2 gap-4 pt-2">
                    <input type="date" name="date" required className="w-full border-b border-slate-200 py-1.5 text-sm outline-hidden text-slate-600" />
                    <input type="time" name="time" required className="w-full border-b border-slate-200 py-1.5 text-sm outline-hidden text-slate-600" />
                  </div>
                  
                  <input type="text" name="message" placeholder="Message / Symptoms" className="w-full border-b border-slate-200 py-4 text-sm outline-hidden focus:border-cyan-500 transition" />
                  
                  <div className="pt-4">
                    <button type="submit" className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider shadow-md transition cursor-pointer">
                      Make an Appointment
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}

      </div>
    </Router>
  );
}

export default App;