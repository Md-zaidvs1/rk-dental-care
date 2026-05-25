import React, { useState } from 'react';
import { Play, Film, CheckCircle2, Eye, Sparkles, Award, Layers, Shield, Tv } from 'lucide-react';

export default function Reviews() {
  // 5 high-impact educational dental demo clip structures
  const demoVideos = [
    {
      id: "v1",
      title: "Microscopic Root Canal Demonstration",
      duration: "03:45",
      views: "1,240+",
      category: "Endodontics",
      desc: "An inside look at how Dr. Radhakrishnan eliminates nerve chamber infections safely using modern apex locator tracking systems.",
      embedId: "dQw4w9WgXcQ" 
    },
    {
      id: "v2",
      title: "Composite Material Tooth Filling Process",
      duration: "02:15",
      views: "980+",
      category: "Restorative",
      desc: "See how customized UV light-polymerized resins match natural structural occlusion matrices completely seamlessly.",
      embedId: "dQw4w9WgXcQ"
    },
    {
      id: "v3",
      title: "Ultrasonic Scaling & Sub-Gingival Cleaning",
      duration: "04:10",
      views: "1,450+",
      category: "Periodontics",
      desc: "A step-by-step look into our deep bacterial decontamination processes designed to safeguard and reverse regional gum loss.",
      embedId: "dQw4w9WgXcQ"
    },
    {
      id: "v4",
      title: "Digital RVG Scanning & Radiography Setup",
      duration: "01:50",
      views: "820+",
      category: "Diagnostics",
      desc: "Demonstrating how our zero-delay internal imaging modules reduce traditional radiation exposure thresholds by over 80%.",
      embedId: "dQw4w9WgXcQ"
    },
    {
      id: "v5",
      title: "Pediatric Patient Chair Comfort Protocol",
      duration: "03:02",
      views: "1,110+",
      category: "Pedodontics",
      desc: "Discover how our clinical staff minimizes anxiety patterns to establish stress-free environments for children.",
      embedId: "dQw4w9WgXcQ"
    }
  ];

  const [activeMainVideo, setActiveMainVideo] = useState("dQw4w9WgXcQ");
  const [mainTitle, setMainTitle] = useState("RK Dental Care Official Clinical Introduction & Infrastructure Walkthrough");

  const swapMainVideo = (embedId, title) => {
    setActiveMainVideo(embedId);
    setMainTitle(title);
    window.scrollTo({ top: 300, behavior: 'smooth' });
  };

  return (
    <div className="bg-slate-950 min-h-screen font-sans antialiased text-slate-300 selection:bg-cyan-500 selection:text-white">
      
      {/* 1. Cinematic Header Hero Banner */}
      <section className="relative overflow-hidden bg-radial from-slate-900 via-slate-950 to-black py-20 px-6 border-b border-slate-900 text-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none opacity-10">
          <div className="absolute top-12 left-10 w-72 h-72 rounded-full bg-cyan-500 blur-3xl"></div>
          <div className="absolute bottom-10 right-20 w-96 h-96 rounded-full bg-teal-500 blur-3xl"></div>
        </div>
        
        <div className="relative z-10 space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-xs font-semibold tracking-widest uppercase">
            <Sparkles size={12} /> INTERACTIVE CLINICAL THEATER
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-none">
            See Our Practice <br className="hidden md:inline"/> In <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400">High Definition</span>
          </h1>
          <p className="text-slate-400 text-sm md:text-base font-light max-w-2xl mx-auto leading-relaxed">
            Explore our state-of-the-art operatory systems, premium diagnostics equipment, and professional sterilization standards virtually through our high-impact video channels.
          </p>
        </div>
      </section>

      {/* 2. Main Selected Theater Screening Framework */}
      <section className="max-w-7xl mx-auto px-4 md:px-16 py-12">
        <div className="bg-slate-900/40 border border-slate-800/80 p-4 md:p-6 rounded-2xl shadow-2xl space-y-4 backdrop-blur-md">
          
          {/* Main Display Player Viewport */}
          <div className="w-full aspect-video bg-black rounded-xl overflow-hidden shadow-inner border border-slate-800 relative group">
            <iframe
              className="w-full h-full object-cover"
              src={`https://www.youtube.com/embed/${activeMainVideo}?rel=0&modestbranding=1&autoplay=0`}
              title="RK Dental Care Main Screening Frame"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          {/* Screening Meta Information Info Row */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pt-2 text-left border-t border-slate-900/60 mt-2">
            <div className="space-y-1">
              <span className="text-[10px] uppercase tracking-widest text-cyan-400 font-bold block">NOW STREAMING</span>
              <h2 className="text-lg md:text-xl font-bold text-white tracking-wide">{mainTitle}</h2>
            </div>
            <div className="flex items-center gap-4 text-xs font-medium text-slate-400 shrink-0 bg-slate-900 px-4 py-2 rounded-xl border border-slate-800">
              <span className="flex items-center gap-1.5"><Tv size={14} className="text-cyan-400" /> Multi-Branch Broadcast</span>
              <span className="w-1 h-1 bg-slate-700 rounded-full"></span>
              <span className="text-teal-400 font-bold">1080p HD Available</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. The 5 Interactive Demo Procedures Presentation Grid */}
      <section className="max-w-7xl mx-auto px-4 md:px-16 py-12 space-y-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-2 border-b border-slate-900 pb-4 text-left">
          <div>
            <span className="text-xs font-bold text-teal-400 uppercase tracking-widest block">EXPLORE SPECIFIC OPERATIONS</span>
            <h3 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight mt-1">
              Clinical <span className="font-light text-slate-400">Demo Videos (5)</span>
            </h3>
          </div>
          <p className="text-slate-500 text-xs font-light max-w-sm">
            Click on any procedure card block underneath to automatically mount that specific lesson video clip inside our primary viewing screen up top.
          </p>
        </div>

        {/* The 5-Column Custom Grid Configuration Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {demoVideos.map((video, idx) => (
            <div 
              key={video.id}
              onClick={() => swapMainVideo(video.embedId, video.title)}
              className="bg-slate-900/30 border border-slate-800/60 rounded-xl overflow-hidden p-5 flex flex-col justify-between space-y-4 shadow-md hover:border-cyan-500/40 hover:bg-slate-900/60 transition duration-300 group cursor-pointer text-left"
            >
              <div className="space-y-3">
                
                {/* Upper Metrics Badges row */}
                <div className="flex justify-between items-center text-[10px] font-bold tracking-wider uppercase">
                  <span className="bg-cyan-950 text-cyan-400 border border-cyan-900/40 px-2.5 py-1 rounded-md">
                    {video.category}
                  </span>
                  <span className="text-slate-500 flex items-center gap-1">
                    <Eye size={12} className="text-slate-600" /> {video.views} Views
                  </span>
                </div>

                {/* Simulated Thumbnail Box with Custom Overlay State */}
                <div className="relative aspect-video rounded-lg bg-slate-950 border border-slate-800 overflow-hidden flex items-center justify-center group-hover:border-slate-700 transition">
                  <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent opacity-80 z-10"></div>
                  
                  {/* Digital Abstract Tech Background Lines to represent video frame placeholder inside code */}
                  <div className="absolute inset-0 flex flex-col justify-between p-3 z-10 text-white font-mono text-[9px] text-slate-700 opacity-40 select-none">
                    <span>FRAME_CHUNK // 0x0{idx + 1}</span>
                    <span className="self-end">00:{video.duration}</span>
                  </div>

                  {/* Centered Play Trigger Bubble */}
                  <div className="w-12 h-12 rounded-full bg-slate-900/90 text-cyan-400 flex items-center justify-center border border-slate-800 group-hover:bg-cyan-500 group-hover:text-white group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-cyan-500/20 transition duration-300 z-20">
                    <Play size={16} className="fill-current ml-0.5" />
                  </div>
                </div>

                <h4 className="font-bold text-white text-sm tracking-wide group-hover:text-cyan-400 transition pt-1">
                  {video.title}
                </h4>
                
                <p className="text-slate-400 text-xs font-light leading-relaxed line-clamp-2">
                  {video.desc}
                </p>
              </div>

              {/* Action Trigger Foot */}
              <div className="pt-3 border-t border-slate-900 flex justify-between items-center text-[11px] font-medium text-slate-500 mt-auto">
                <span>Duration: {video.duration} Min</span>
                <span className="text-cyan-400 group-hover:translate-x-1 transition duration-200 uppercase font-bold tracking-wider text-[10px]">
                  Load Clip ➔
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Static Operational Highlights Features Grid */}
      <section className="bg-slate-950 border-t border-slate-900/60 py-16 px-4 md:px-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-left">
          
          <div className="space-y-2 bg-slate-900/20 border border-slate-900 p-6 rounded-xl">
            <div className="text-cyan-400"><Award size={22} /></div>
            <h4 className="font-bold text-white text-sm tracking-wide">Patient Education First</h4>
            <p className="text-slate-400 text-xs font-light leading-relaxed">
              We strongly believe visual clarity eliminates dental fear entirely. Watch treatments unfold beforehand to remain completely assured.
            </p>
          </div>

          <div className="space-y-2 bg-slate-900/20 border border-slate-900 p-6 rounded-xl">
            <div className="text-teal-400"><Layers size={22} /></div>
            <h4 className="font-bold text-white text-sm tracking-wide">Multi-Branch Setup</h4>
            <p className="text-slate-400 text-xs font-light leading-relaxed">
              All treatment techniques displayed are conducted interchangeably across both our Kalavai HQ and Vembakkam surgical units.
            </p>
          </div>

          <div className="space-y-2 bg-slate-900/20 border border-slate-900 p-6 rounded-xl">
            <div className="text-cyan-400"><Shield size={22} /></div>
            <h4 className="font-bold text-white text-sm tracking-wide">Sterilization Blueprint</h4>
            <p className="text-slate-400 text-xs font-light leading-relaxed">
              Every operation follows strict chemical indicator test routines to track high-pressure thermal processing safety down to the second.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
}