import React, { useState } from 'react';
import { Star, MessageSquare } from 'lucide-react';

export default function Reviews() {
  // 100% Exact raw copy of your Google Maps reviews with no extra text added
  const initialReviews = [
    {
      name: "Sharma Saran",
      date: "3 months ago",
      rating: 5,
      text: "I had a very good experience at this hospital. The doctors were highly professional, kind, and took time to explain everything clearly. The nursing staff was attentive and supportive throughout the treatment. The facilities were clean, … More"
    },
    {
      name: "Pavi Bala",
      date: "3 months ago",
      rating: 5,
      text: "Budget friendly treatment, super clean environment"
    },
    {
      name: "Diwakar Diwakar",
      date: "3 months ago",
      rating: 5,
      text: "Good communication\nFriendly doctor\nProper treatment"
    },
    {
      name: "Malathi Saran",
      date: "3 months ago",
      rating: 5,
      text: "Good treatment 🙏🏻 …"
    },
    {
      name: "Aravi Bala",
      date: "3 months ago",
      rating: 5,
      text: "Best customer care"
    },
    {
      name: "Yogan Hsb",
      date: "3 months ago",
      rating: 5,
      text: "" // Rating only - no text
    },
    {
      name: "Mekala Pavi",
      date: "3 months ago",
      rating: 5,
      text: "" // Rating only - no text
    },
    {
      name: "Swetha",
      date: "3 months ago",
      rating: 5,
      text: "" // Rating only - no text
    },
    {
      name: "Lavanya Chakarapani",
      date: "3 months ago",
      rating: 5,
      text: "" // Rating only - no text
    }
  ];

  const [reviewsList, setReviewsList] = useState(initialReviews);
  const [formSubmitted, setFormSubmitted] = useState(false);

  return (
    <div className="bg-slate-50 min-h-screen font-sans antialiased pb-24">
      
      {/* Header Banner */}
      <section className="relative bg-slate-900 text-white py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-light tracking-tight text-white">Patient Reviews</h1>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-10 mt-12 items-start">
        
        {/* LEFT COLUMN: Google Rating Aggregate Display */}
        <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
          <div className="bg-white p-6 rounded-xl border border-slate-200/60 shadow-xs text-center space-y-2">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Google Rating</h3>
            <div className="text-5xl font-black text-slate-900">5.0</div>
            <div className="flex justify-center text-amber-400 gap-0.5">
              {[...Array(5)].map((_, i) => <Star key={i} size={16} className="fill-amber-400 text-amber-400" />)}
            </div>
            <p className="text-slate-400 text-xs font-light">Based on verified client map data</p>
          </div>

          {/* Optional Form to write a review manually */}
          <div className="bg-white p-6 rounded-xl border border-slate-200/60 shadow-xs space-y-4">
            <h4 className="text-xs font-bold text-slate-700 tracking-wider uppercase flex items-center gap-2">
              <MessageSquare size={14} className="text-cyan-500" /> Write a Review
            </h4>
            
            {formSubmitted ? (
              <p className="text-xs text-emerald-600 bg-emerald-50 p-4 rounded text-center font-medium">
                Thank you! Your review has been added.
              </p>
            ) : (
              <form 
                onSubmit={(e) => {
                  e.preventDefault();
                  const name = e.target.pName.value;
                  const text = e.target.pText.value;
                  
                  setReviewsList([{ name, date: "Just now", rating: 5, text }, ...reviewsList]);
                  setFormSubmitted(true);
                }}
                className="space-y-3"
              >
                <input type="text" name="pName" required placeholder="Your Name" className="w-full bg-slate-50 border border-slate-200 rounded p-2.5 text-xs outline-none focus:border-cyan-500" />
                <textarea name="pText" placeholder="Share your experience (Optional)" rows="3" className="w-full bg-slate-50 border border-slate-200 rounded p-2.5 text-xs outline-none focus:border-cyan-500 resize-none" />
                <button type="submit" className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-bold text-xs py-2.5 rounded uppercase tracking-wider transition cursor-pointer">
                  Submit Review
                </button>
              </form>
            )}
          </div>
        </div>

        {/* RIGHT COLUMN: Real Review Feed Stream */}
        <div className="lg:col-span-8 space-y-4">
          {reviewsList.map((rev, index) => (
            <div key={index} className="bg-white p-6 rounded-xl border border-slate-200/60 shadow-2xs space-y-3">
              
              <div className="flex justify-between items-start gap-4">
                <div>
                  <h4 className="font-bold text-slate-800 text-sm tracking-wide">{rev.name}</h4>
                  <p className="text-[10px] text-slate-400 font-light mt-0.5">{rev.date}</p>
                </div>
                {/* 5 Stars display line */}
                <div className="flex text-amber-400 gap-0.5">
                  {[...Array(rev.rating)].map((_, i) => <Star key={i} size={12} className="fill-amber-400 text-amber-400" />)}
                </div>
              </div>

              {/* Renders the background message container block ONLY if text actually exists */}
              {rev.text && (
                <p className="text-slate-600 text-xs md:text-sm font-light leading-relaxed whitespace-pre-line bg-slate-50/50 p-3 rounded border border-slate-100/60">
                  {rev.text}
                </p>
              )}

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}