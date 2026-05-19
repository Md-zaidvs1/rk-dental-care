import React from 'react';
import { MapPin, Phone, Mail, Globe, Send } from 'lucide-react';

export default function Contact() {
  
  const handleContactSubmit = (e) => {
    e.preventDefault();
    const name = e.target.elements.name.value;
    const subject = e.target.elements.subject.value;
    const message = e.target.elements.message.value;

    const whatsappMessage = `Hi RK Dental Care! I have an inquiry.%0A%0A` +
                            `*From:* ${encodeURIComponent(name)}%0A` +
                            `*Subject:* ${encodeURIComponent(subject)}%0A` +
                            `*Message:* ${encodeURIComponent(message)}`;

    window.open(`https://wa.me/918883261285?text=${whatsappMessage}`, '_blank');
  };

  return (
    <div className="bg-white min-h-screen">
      
      {/* Contact Header Title Presentation */}
      <section className="relative bg-slate-900 text-white py-20 px-4 text-center">
        <div className="absolute inset-0 bg-cyan-950/40 backdrop-blur-xs z-10"></div>
        <div className="relative z-20 space-y-2">
          <p className="text-xs uppercase tracking-widest text-cyan-400 font-bold">HOME ➔ CONTACT</p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-wide">Contact Us</h1>
        </div>
      </section>

      {/* Main Core Content Layout Section Block */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        
        {/* Top Metric Information Horizontal Strip Grid Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-cyan-600 font-medium text-sm tracking-wide">
              <MapPin size={16} /> ADDRESS
            </div>
            <p className="text-slate-600 text-sm font-light leading-relaxed">
              No.10/1 School street, near police station, Kalavai 632506
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2 text-cyan-600 font-medium text-sm tracking-wide">
              <Phone size={16} /> PHONE
            </div>
            <p className="text-slate-600 text-sm font-semibold tracking-wide">
              +91 8883261285
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2 text-cyan-600 font-medium text-sm tracking-wide">
              <Mail size={16} /> EMAIL
            </div>
            <p className="text-slate-600 text-sm font-light break-all">
              drradhakrishnan94@gmail.com
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2 text-cyan-600 font-medium text-sm tracking-wide">
              <Globe size={16} /> CLINIC ESTD
            </div>
            <p className="text-slate-600 text-sm font-light">
              Serving Patients Proudly Since 2018
            </p>
          </div>
        </div>

        {/* Bottom Split Row Form Section Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Block: Clean Input Field Inquiries Form */}
          <div className="lg:col-span-7 bg-slate-50/60 p-8 rounded-xl border border-slate-100">
            <h3 className="text-xl font-bold text-slate-800 mb-6 tracking-wide">Send Us a Message</h3>
            <form onSubmit={handleContactSubmit} className="space-y-5">
              <div>
                <input 
                  type="text" 
                  name="name"
                  required
                  placeholder="Your Name" 
                  className="w-full bg-white border border-slate-200 rounded px-4 py-3 text-sm focus:outline-none focus:border-cyan-500 transition shadow-xs"
                />
              </div>
              <div>
                <input 
                  type="text" 
                  name="subject"
                  required
                  placeholder="Subject Matter" 
                  className="w-full bg-white border border-slate-200 rounded px-4 py-3 text-sm focus:outline-none focus:border-cyan-500 transition shadow-xs"
                />
              </div>
              <div>
                <textarea 
                  name="message"
                  required
                  rows="5"
                  placeholder="Type your clinical question or message here..." 
                  className="w-full bg-white border border-slate-200 rounded px-4 py-3 text-sm focus:outline-none focus:border-cyan-500 transition shadow-xs resize-none"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="bg-cyan-500 hover:bg-cyan-600 text-white font-medium px-8 py-3 rounded transition shadow-md tracking-wider text-xs uppercase flex items-center gap-2 cursor-pointer"
              >
                Send Message <Send size={14} />
              </button>
            </form>
          </div>

          {/* Right Block: Map Display Panel Container Placeholder */}
          <div className="lg:col-span-5 w-full h-[415px] bg-slate-100 rounded-xl border border-slate-200 flex flex-col items-center justify-center p-6 text-center space-y-3 shadow-inner relative overflow-hidden">
            <div className="absolute inset-0 bg-radial from-cyan-500/5 via-transparent to-transparent scale-150"></div>
            <MapPin className="w-12 h-12 text-slate-400 animate-bounce" />
            <h4 className="font-bold text-slate-700 text-base">Kalavai Clinic Location Mapping</h4>
            <p className="text-xs text-slate-400 max-w-xs leading-relaxed font-light">
              Located conveniently near the Kalavai Police Station. Ample motorcycle parking space available outside.
            </p>
          </div>

        </div>

      </section>

    </div>
  );
}