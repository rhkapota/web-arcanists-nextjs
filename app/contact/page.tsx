'use client';

import { memo } from 'react';
import { useState } from 'react';

import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { 
  Mail, Users, Image, ChevronRight, Clock, Shield, Target, Zap, Globe, CircleFadingPlus, ArrowRight 
} from 'lucide-react';

const CONTACT_CARDS = [
  { 
    icon: <Mail size={24} />, 
    bgIcon: <Globe size={120} />,
    title: "Email", 
    desc: "Direct communication", 
    link: "arcanists.umy@gmail.com", 
    href: "mailto:arcanists.umy@gmail.com" 
  },
  { 
    icon: <Users size={24} />, 
    bgIcon: <Users size={120} />,
    title: "Linkedin", 
    desc: "Community & Support", 
    link: "www.linkedin.com/company/arcanists", 
    href: "https://www.linkedin.com/company/arcanists" 
  },
  { 
    icon: <CircleFadingPlus size={24} />, 
    bgIcon: <Image size={120} />,
    title: "Instagram", 
    desc: "Documentation & Media", 
    link: "instagram.com/arcanist.umy", 
    href: "https://www.instagram.com/arcanist.umy" 
  }
];

const REQUIREMENTS = [
  { title: "CTF Foundation", desc: "Experience in Web, Pwn, Crypto, Reverse engineering or Forensics." },
  { title: "Learning Passion", desc: "Commitment to research and skill growth." },
  { title: "Teamwork", desc: "Collaborate effectively during intense operations." }
];

const PROCESS_STEPS = [
  { step: "01", title: "Prove Yourself", desc: "Complete the required challenges and learning paths we provide."  },
  { step: "02", title: "Submit & Verify", desc: "Submit your results and contact admin for validation." },
  { step: "03", title: "Join the Circle", desc: "Welcome to Arcanists." },
  { step: "04", title: "Learn", desc: "Learn together. Break together. Secure together." }
];

export default function ContactPage() {
  const [showModal, setShowModal] = useState(false);
  return (
    <main className="w-full bg-black text-white overflow-x-hidden selection:bg-orange-500/30">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[450px] md:min-h-[550px] w-full flex flex-col items-center justify-center overflow-hidden px-6 py-20 md:py-32 mt-16 [transform:translateZ(0)]">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] md:bg-[size:60px_60px] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-orange-500/10 rounded-full blur-[80px] md:blur-[120px] pointer-events-none opacity-60 will-change-[filter]" />

        <div className="relative z-10 text-center space-y-4 md:space-y-6 max-w-3xl">
          <h1 className="font-mono text-4xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white uppercase leading-none">
            Get In <span className="text-orange-500">Touch</span>
          </h1>
          <p className="text-xs md:text-lg text-neutral-400 font-light tracking-wide max-w-xl mx-auto leading-relaxed px-4 md:px-0 opacity-80">
            Let’s connect for collaboration, questions, or to grow with our community.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="relative w-full pb-20 px-6 md:px-12 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-12 md:mb-20">
            {CONTACT_CARDS.map((item, i) => (
              <div key={i} className="relative overflow-hidden bg-neutral-900/30 rounded-xl md:rounded-2xl border border-neutral-800 p-6 md:p-8 hover:border-orange-500/50 hover:bg-orange-500/5 transition-all duration-500 group [transform:translateZ(0)]">
                <div className="absolute -top-4 -right-4 opacity-[0.03] group-hover:opacity-[0.1] group-hover:text-orange-500 group-hover:-rotate-12 transition-all duration-700 pointer-events-none will-change-transform">
                  {item.bgIcon}
                </div>
                <div className="relative z-10">
                  <div className="p-3 w-fit rounded-lg md:rounded-xl bg-neutral-900 border border-neutral-800 mb-6 group-hover:border-orange-500/30 transition-colors text-orange-500 group-hover:text-white">
                    {item.icon}
                  </div>
                  <h3 className="font-mono text-lg md:text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-neutral-500 text-xs md:text-sm mb-6 font-light">{item.desc}</p>
                  <a href={item.href} className="text-orange-500 hover:text-white transition-colors terminal-text text-[9px] md:text-[11px] uppercase tracking-widest font-bold flex items-center gap-2 active:scale-95 origin-left">
                    {item.link} <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recruitment Section */}
      <section id="recruitment" className="relative w-full py-16 md:py-24 px-6 md:px-12 border-t border-neutral-900 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-20 space-y-3 md:space-y-4">
            <h2 className="font-mono text-3xl md:text-6xl font-black tracking-tighter text-white uppercase leading-tight">
              Recruitment
            </h2>
            <div className="h-[2px] w-16 md:w-24 bg-orange-500 mx-auto shadow-[0_0_10px_rgba(249,115,22,0.5)]"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12">
            
            {/* Requirements Card */}
            <div className="relative overflow-hidden bg-neutral-900/20 rounded-xl md:rounded-2xl border border-neutral-800 p-6 md:p-10 hover:border-orange-500/30 transition-all duration-500 group [transform:translateZ(0)]">
              <div className="absolute -top-10 -right-10 opacity-[0.03] group-hover:opacity-[0.1] group-hover:text-orange-500 group-hover:rotate-12 transition-all duration-700 pointer-events-none will-change-transform">
                <Target size={240} />
              </div>
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8 md:mb-10">
                  <div className="p-2 bg-orange-500/10 rounded-lg">
                    <Zap className="text-orange-500" size={24} />
                  </div>
                  <h3 className="font-mono text-xl md:text-2xl font-bold text-white uppercase tracking-tight">Requirements</h3>
                </div>
                
                <ul className="space-y-6 md:space-y-8">
                  {REQUIREMENTS.map((req, i) => (
                    <li key={i} className="flex gap-4 md:gap-5 group/list items-start">
                      <ArrowRight 
                        size={18} 
                        className="text-orange-500 mt-0.5 flex-shrink-0 transition-transform group-hover/list:translate-x-1" 
                      />
                      <div>
                        <p className="font-mono text-white text-xs md:text-sm uppercase tracking-widest mb-1 font-bold">{req.title}</p>
                        <p className="text-[11px] md:text-sm text-neutral-500 leading-relaxed font-light">{req.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Process Card */}
            <div className="relative overflow-hidden bg-neutral-900/40 rounded-xl md:rounded-2xl border border-neutral-800 p-6 md:p-10 group hover:border-orange-500/30 transition-all duration-500 [transform:translateZ(0)]">
               <div className="absolute -right-10 -bottom-10 opacity-[0.03] group-hover:opacity-[0.1] group-hover:text-orange-500 group-hover:-rotate-12 transition-all duration-700 pointer-events-none will-change-transform">
                <Shield size={240} />
              </div>
              <div className="relative z-10 flex items-center gap-4 mb-8 md:mb-10">
                <div className="p-2 bg-orange-500/10 rounded-lg"><Clock className="text-orange-500" size={24} /></div>
                <h3 className="font-mono text-xl md:text-2xl font-bold text-white uppercase tracking-tight">Selection Process</h3>
              </div>
              <div className="space-y-6 relative z-10">
                {PROCESS_STEPS.map((proc, i) => (
                  <div key={i} className="flex gap-4 md:gap-6 items-start group/proc text-left">
                    <div className="flex-shrink-0 font-mono text-base md:text-lg font-bold text-orange-500/30 group-hover/proc:text-orange-500 transition-colors">{proc.step}</div>
                    <div>
                      <h4 className="font-mono text-white text-xs md:text-sm uppercase tracking-widest mb-1 font-bold">{proc.title}</h4>
                      <p className="text-[10px] md:text-xs text-neutral-500 font-light">{proc.desc}</p>
                    </div>
                  </div>
                ))}
                <button 
                  onClick={() => setShowModal(true)}
                  className="w-full mt-8 md:mt-10 px-6 py-4 bg-orange-500 text-black rounded-xl terminal-text text-[10px] md:text-xs font-black uppercase tracking-[0.2em] hover:bg-white hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-all duration-500 active:scale-[0.98]"
                >
                  Start Application
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
      {showModal && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4">
    
    <div className="relative w-full max-w-2xl bg-neutral-900 border border-neutral-800 rounded-2xl p-6 md:p-8 shadow-2xl animate-[fadeIn_0.3s_ease]">
      
      {/* Close Button */}
      <button 
        onClick={() => setShowModal(false)}
        className="absolute top-4 right-4 text-neutral-500 hover:text-white text-sm"
      >
        ✕
      </button>

      <h2 className="font-mono text-xl md:text-2xl font-bold text-orange-500 mb-4 uppercase">
        Arcanists Registration
      </h2>

      <p className="text-neutral-400 text-sm mb-4">
        (Forticode - Cyber Security and Networking Division)
      </p>

      <p className="text-neutral-300 text-sm mb-4">
        Registration is opened in batches for new students at UMY.
      </p>

      <div className="text-neutral-400 text-sm space-y-3">
        <p>If you miss the batch, you must complete:</p>

        <ul className="list-disc list-inside space-y-2 text-xs md:text-sm">
          <li>
            Linux Course → 
            <a href="https://lms.idn.id/courses/belajar-linux-dari-nol" target="_blank" className="text-orange-500 hover:underline ml-1">
              Open
            </a>
          </li>

          <li>
            Python Course → 
            <a href="https://www.codepolitan.com/course/intro/belajar-python-dasar" target="_blank" className="text-orange-500 hover:underline ml-1">
              Open
            </a>
          </li>

          <li>
            Networking Course → 
            <a href="https://www.netacad.com/courses/networking-basics?courseLang=en-US" target="_blank" className="text-orange-500 hover:underline ml-1">
              Open
            </a>
          </li>

          <li>
            TryHackMe Room → 
            <a href="https://tryhackme.com/room/basicpentestingjt" target="_blank" className="text-orange-500 hover:underline ml-1">
              Open
            </a>
          </li>
        </ul>

        <p className="mt-4">
          After completing, submit your certificates (open indefinitely).
        </p>

        <p className="text-xs text-neutral-500 mt-4">
          Special Note: Rank in the top 5 of random CTF or Have discovered a vulnerability (bug) in a platform (proof or PoC required).
        </p>

        <p className="text-xs text-neutral-500">
          For Special Note Contact Telegram: <span className="text-orange-500">@Leosycthe</span>
        </p>
      </div>

<a 
  href="https://forms.gle/9wmiqTap6XcdEGUn6"
  target="_blank"
  rel="noopener noreferrer"
  className="mt-6 w-full block text-center py-3 bg-orange-500 text-black rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-white transition-all"
>
  Continue to Application
</a>

    </div>
  </div>
)}
    </main>
  );
}