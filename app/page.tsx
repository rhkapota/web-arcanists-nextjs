'use client';

import { useEffect, useState, memo, cloneElement, ReactElement } from 'react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { ArrowRight, Trophy, Users, Target, Clock, Shield } from 'lucide-react';

const STATS = [
  { label: 'Competitions', value: '1', icon: <Trophy size={48} /> },
  { label: 'Members', value: '18', icon: <Users size={48} /> },
  { label: 'Challenges Solved', value: '18', icon: <Target size={48} /> },
  { label: 'Active Since', value: '2025', icon: <Clock size={48} /> },
];


const CORE_VALUES = [
  { n: "01", t: "MASTERY", d: "We pursue depth over surface continuously refining our skills to understand, exploit, and secure complex systems." },
  { n: "02", t: "COLLABORATION", d: "We work together, share knowledge, and grow as a team to tackle complex security challenges." },
  { n: "03", t: "INGENUITY", d: "We think beyond conventions developing creative and adaptive approaches to uncover and mitigate modern vulnerabilities." },
  { n: "04", t: "INTEGRITY", d: "We uphold strong ethical standards while encouraging open exploration and independent thinking in every experiment and research." }
];

const TypingLogo = memo(({ text }: { text: string }) => {
  const [displayText, setDisplayText] = useState('');
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= text.length) {
        setDisplayText(text.slice(0, index));
        index++;
      } else { clearInterval(interval); }
    }, 100);
    return () => clearInterval(interval);
  }, [text]);

  return (
    <h1 className="font-mono text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight md:tracking-[0.1em] text-white leading-tight">
      <span className="neon-cyan">
        {displayText}
        <span className="animate-pulse font-thin text-orange-500">|</span>
      </span>
    </h1>
  );
});
TypingLogo.displayName = 'TypingLogo';

export default function Home() {
  const scrollToAbout = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="w-full min-h-screen bg-black text-white overflow-x-hidden selection:bg-orange-500/30">
      <Navigation />
      
      <div className="relative">
        {/* Hero Section */}
        <section className="relative min-h-screen w-full flex flex-col items-center justify-start pt-32 md:pt-0 md:justify-center overflow-hidden px-6 bg-black [transform:translateZ(0)]">
          
          {/* Background Grids*/}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-orange-500/10 rounded-full blur-[100px] pointer-events-none will-change-[filter]" />

          <div className="relative z-10 text-center space-y-6 md:space-y-8 max-w-5xl w-full">
            {/* Tagline */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full border border-orange-500/20 bg-orange-500/5 mb-2 group">
              <span className="relative flex h-1.5 w-1.5 ml-0.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-orange-500"></span>
              </span>
              <span className="terminal-text text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-orange-200/70">
                university community
              </span>
            </div>

            {/* Title */}
            <div className="py-2">
              <TypingLogo text="ARCANISTS" />
            </div>

            {/* Description */}
            <div className="space-y-4 md:space-y-6">
              <p className="text-sm md:text-2xl text-orange-500 font-bold tracking-[0.1em] md:tracking-[0.3em] uppercase">
                Cybersecurity & Networking
              </p>
              <div className="text-xs md:text-lg text-neutral-400 max-w-2xl mx-auto leading-relaxed font-light px-4 md:px-0">
                <p>
                  Born under the auspices of <span className="text-white font-medium">Forticode Club</span>, Arcanists is not just a community, but a proving ground. Founded by students of <span className="text-white font-medium">Universitas Muhammadiyah Yogyakarta</span>, we are here for those who seek more than just theory.
                </p>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6 md:pt-10 px-8 sm:px-0">
              <a href="/contact#recruitment" className="px-8 py-3 text-center text-orange-500 rounded-lg terminal-text text-xs md:text-sm font-bold glow-border hover:bg-orange-500/10 transition-colors">
                Join the Circle
              </a>
              <a href="#about" onClick={scrollToAbout} className="px-8 py-3 text-center text-white rounded-lg terminal-text text-xs md:text-sm font-bold border border-white/20 hover:bg-white/5 transition-all">
                Learn More
              </a>
            </div>
          </div>

          {/* Scroll Indicator */}
          <button onClick={scrollToAbout} className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center group cursor-pointer animate-bounce [will-change:transform]">
            <div className="text-neutral-500 group-hover:text-orange-500 terminal-text text-[10px] uppercase tracking-widest transition-colors">
              scroll to explore
            </div>
            <svg className="w-4 h-4 mx-auto mt-2 text-neutral-500 group-hover:text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </button>
        </section>

        {/* About Section */}
        <section id="about" className="scroll-mt-20 relative w-full py-16 md:py-24 px-6 md:px-12 bg-black z-10 [transform:translateZ(0)]">
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="mb-12 md:mb-20 space-y-3 md:space-y-4">
              <h2 className="text-3xl md:text-6xl font-mono font-bold text-white tracking-tighter uppercase text-center md:text-left">
                About <span className="text-orange-500">Us</span>
              </h2>
              <div className="h-[2px] w-16 md:w-24 bg-orange-500 mx-auto md:mx-0"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 mb-16 md:mb-20">
              <div className="space-y-6 md:space-y-8">
                <div className="space-y-4 md:space-y-6 text-sm md:text-lg text-neutral-400 leading-relaxed text-center md:text-left">
                  <p>
                    At <span className="text-white font-medium">Arcanists</span>, cybersecurity goes beyond theory. We focus on understanding how systems work in practice through testing, analysis, and real world scenarios.
                  </p>
                  <p>
                    We combine academic knowledge with hands-on experience through CTF challenges, research, and collaborative learning. Our goal is to help members build strong technical foundations and practical skills.
                  </p>
                  <p>
                    We aim to develop individuals who can think critically, work responsibly, and adapt to the constantly changing world of cybersecurity.
                  </p>
                </div>

                <div className="space-y-4 pt-6 border-t border-neutral-800">
                  {[
                    "Engage in competitive CTFs at national and international levels",
                    "Conduct deep research on exploitation techniques and defensive methodologies",
                    "Provide structured mentoring to accelerate technical growth for new members"
                  ].map((text, i) => (
                    <div key={i} className="flex items-start gap-3 group">
                      <ArrowRight size={16} className="text-orange-500 mt-1 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                      <p className="text-xs md:text-base text-neutral-300">{text}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Core Values Card */}
              <div className="glass rounded-xl p-6 md:p-10 border border-neutral-800 bg-neutral-900/10 relative overflow-hidden group hover:border-orange-500/40 transition-colors">
                <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
                  <Shield size={96} className="text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-mono font-bold text-white mb-6 md:mb-8 flex items-center gap-3">
                  <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></span>
                  Core Values
                </h3>
                <ul className="space-y-5 md:space-y-6 terminal-text">
                  {CORE_VALUES.map((item, i) => (
                    <li key={i} className="space-y-1">
                      <div className="text-orange-500 font-bold text-[10px] md:text-xs uppercase tracking-widest">{item.n}. {item.t}</div>
                      <div className="text-neutral-400 text-[11px] md:text-sm leading-relaxed">{item.d}</div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

                {/* Stats */}
                <div className="flex justify-center">
                  {STATS
                    .filter((stat) => stat.label === 'Active Since')
                    .map((stat, idx) => {
                      return (
                        <div
                          key={idx}
                          className="w-full max-w-xs group relative bg-neutral-900/30 border border-neutral-800 rounded-lg p-6 md:p-10 text-center hover:border-orange-500/50 transition-all duration-300 overflow-hidden"
                        >
                          <div className="absolute -bottom-4 -right-4 opacity-[0.03] group-hover:opacity-[0.1] group-hover:text-orange-500 transition-all duration-700 pointer-events-none group-hover:rotate-12 group-hover:scale-110">
                            {cloneElement(stat.icon as ReactElement, { size: 100 })}
                          </div>

                          <div className="relative z-10">
                            <div className="text-2xl md:text-5xl font-mono font-bold text-white mb-1 group-hover:text-orange-500 transition-colors">
                              {stat.value}
                            </div>
                            <div className="text-[8px] md:text-xs text-neutral-500 uppercase tracking-widest">
                              {stat.label}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </main>
  );
}