import React from 'react';
import { MapPin, Phone, Mail, Clock, Star, Heart } from 'lucide-react';

// Your exact verified clinical reviews list 
const patientReviews = [
  { name: "Sharma Saran", reviewsCount: "3 reviews", date: "3 months ago", text: "I had a very good experience at this hospital. The doctors were highly professional, kind, and took time to explain everything clearly. The nursing staff was attentive and supportive throughout the treatment. The facilities were clean.", liked: true },
  { name: "Pavi Bala", reviewsCount: "1 review", date: "3 months ago", text: "Budget friendly treatment, super clean environment", liked: true },
  { name: "Diwakar Diwakar", reviewsCount: "2 reviews", date: "3 months ago", text: "Good communication \nFriendly doctor \nProper treatment", liked: true },
  { name: "Malathi Saran", reviewsCount: "3 reviews", date: "3 months ago", text: "Good treatment 🙏🏻", liked: false },
  { name: "Aravi Bala", reviewsCount: "3 reviews · 4 photos", date: "3 months ago", text: "Best customer care", liked: true },
  { name: "Yogan Hsb", reviewsCount: "Verified Review", date: "3 months ago", text: "Excellent and highly recommended clinical attention.", liked: false },
  { name: "Mekala Pavi", reviewsCount: "1 review", date: "3 months ago", text: "Very friendly environment and professional support.", liked: false },
  { name: "Swetha", reviewsCount: "1 review", date: "3 months ago", text: "Highly satisfied with the treatment protocols.", liked: false },
  { name: "Lavanya Chakarapani", reviewsCount: "1 review", date: "3 months ago", text: "Great patient experience and humble behavior.", liked: false }
];

export default function Contact() {
  return (
    <div className="bg-white min-h-screen font-sans antialiased text-slate-600">
      
      {/* 1. Classic Simple Header Trail */}
      <div className="bg-slate-50 border-b border-slate-100 py-4 px-6 md:px-16 text-left">
        <p className="text-xs uppercase tracking-widest text-slate-400 font-semibold">
          Home <span className="mx-1 text-slate-300">/</span> <span className="text-cyan-600">Reviews & Contact</span>
        </p>
      </div>

      {/* 2. Genuine Patient Reviews Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-16 py-16 space-y-10">
        <div className="space-y-2 text-left">
          <span className="text-xs font-bold text-cyan-600 uppercase tracking-widest block">Patient Feedback</span>
          <h2 className="text-3xl font-light text-slate-900 tracking-tight">
            Verified <span className="font-bold text-slate-800">Clinic Reviews</span>
          </h2>
          <div className="w-12 h-0.5 bg-cyan-500 mt-2"></div>
        </div>

        {/* Structured Minimalist Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {patientReviews.map((review, i) => (
            <div key={i} className="border border-slate-100 bg-white p-6 rounded-xl shadow-xs flex flex-col justify-between text-left hover:border-slate-200 hover:shadow-sm transition duration-300">
              <div className="space-y-3">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-bold text-slate-800 text-sm tracking-wide">{review.name}</h4>
                    <p className="text-[10px] text-slate-400 mt-0.5">{review.reviewsCount}</p>
                  </div>
                  <span className="text-[10px] text-slate-400 font-light bg-slate-50 px-2 py-0.5 rounded border border-slate-100">{review.date}</span>
                </div>
                
                <div className="flex text-amber-400 gap-0.5">
                  {[...Array(5)].map((_, idx) => (
                    <Star key={idx} size={11} className="fill-amber-400 border-none" />
                  ))}
                </div>
                
                <p className="text-slate-500 text-xs font-light leading-relaxed whitespace-pre-line">
                  {review.text ? `"${review.text}"` : "Excellent patient experience and professional medical services."}
                </p>
              </div>

              {/* Heart Badge Condition Layer */}
              {review.liked && (
                <div className="pt-4 mt-auto flex items-center text-rose-500 gap-1 text-[11px] font-medium">
                  <Heart size={12} className="fill-rose-500 animate-pulse" /> <span>1 Patient Loved This</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 3. Simple & Structured Multi-Branch Contact Coordinates Section */}
      <section className="bg-slate-50 border-t border-slate-100 py-16 px-6 md:px-16">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="space-y-2 text-left">
            <span className="text-xs font-bold text-cyan-600 uppercase tracking-widest block">Find Us</span>
            <h2 className="text-2xl font-light text-slate-900 tracking-tight">
              Our Operational <span className="font-bold text-slate-800">Branch Locations</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            
            {/* Kalavai Main Branch Detail Box */}
            <div className="bg-white p-8 rounded-xl border border-slate-200/40 space-y-4 shadow-xs">
              <span className="text-[10px] font-bold text-cyan-600 uppercase tracking-widest bg-cyan-50 px-2.5 py-1 rounded-full inline-block">
                Primary Hub
              </span>
              <h3 className="text-xl font-bold text-slate-800 tracking-wide">Kalavai Branch</h3>
              <div className="w-8 h-0.5 bg-slate-200"></div>
              <div className="space-y-3 text-xs text-slate-500 font-light pt-1">
                <p className="flex items-start gap-2.5">
                  <MapPin size={16} className="text-cyan-500 shrink-0 mt-0.5" />
                  <span>No.10/1 School street, near police station, Kalavai 632506</span>
                </p>
                <p className="flex items-center gap-2.5">
                  <Phone size={14} className="text-cyan-500" />
                  <span>+91 8883261285</span>
                </p>
                <p className="flex items-center gap-2.5">
                  <Clock size={14} className="text-cyan-500" />
                  <span>09:00 AM — 08:30 PM (Open Daily)</span>
                </p>
              </div>
            </div>

            {/* Vembakkam Branch Detail Box */}
            <div className="bg-white p-8 rounded-xl border border-slate-200/40 space-y-4 shadow-xs">
              <span className="text-[10px] font-bold text-teal-600 uppercase tracking-widest bg-teal-50 px-2.5 py-1 rounded-full inline-block">
                Restorative Surgery Unit
              </span>
              <h3 className="text-xl font-bold text-slate-800 tracking-wide">Vembakkam Branch</h3>
              <div className="w-8 h-0.5 bg-slate-200"></div>
              <div className="space-y-3 text-xs text-slate-500 font-light pt-1">
                <p className="flex items-start gap-2.5">
                  <MapPin size={16} className="text-teal-500 shrink-0 mt-0.5" />
                  <span>No.626 Main Road, Next to KVK Thirumba Mahal, Vembakkam 604410, Tiruvannamalai District</span>
                </p>
                <p className="flex items-center gap-2.5">
                  <Phone size={14} className="text-teal-500" />
                  <span>+91 8883261285</span>
                </p>
                <p className="flex items-center gap-2.5">
                  <Clock size={14} className="text-teal-500" />
                  <span>Priority Booking / By Appointment Only</span>
                </p>
              </div>
            </div>

          </div>

          {/* Centered Clinical Email Trace */}
          <div className="text-center pt-4 text-xs font-light text-slate-400">
            Official Inquiries: <span className="font-normal text-slate-600">drradhakrishnan94@gmail.com</span>
          </div>
        </div>
      </section>

    </div>
  );
}