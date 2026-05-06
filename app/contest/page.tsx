'use client';

import { memo } from 'react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { 
  Trophy, 
  ChevronRight, 
  Target, 
  Globe, 
  Activity,
  ExternalLink,
  Zap,
  Flag,
  Layers,
  Sword,
  Shield
} from 'lucide-react';

const CONTESTS_LIST = [


    {
    year: '2026',
    month: 'Mar',
    event: 'picoCTF 2026',
    result: '69 Flags Captured',
    type: 'CTF',
    format: 'Jeopardy',
    icon: Trophy,
    color: 'text-orange-400',
    link: 'https://picoctf.org/competitions/2026-spring.html'
  },
  {
    year: '2026',
    month: 'Jan',
    event: 'SIBER PENTEST 2026',
    result: '7 Vulnerabilities Found',
    type: 'Pentest',
    format: 'Offensive Security',
    icon: Sword,
    color: 'text-red-500',
    link: 'https://drive.google.com/file/d/1lZDjfzmUH5QfWhdj-R5yCDlIhBNvTjpt/view'
  },

  {
    year: '2025',
    month: 'Dec',
    event: 'HTB: University CTF 2025 Tinsel Trouble',
    result: '31 Flags',
    format: 'Jeopardy',
    icon: Trophy,
    color: 'text-orange-400',
    link: 'https://ctf.hackthebox.com/event/details/university-ctf-2025-tinsel-trouble-2993'
  }
];

const OVERALL_STATS = [
  { label: 'Competitions', value: '1', icon: <Globe size={120} /> },
  { label: 'Challenges Solved', value: '18', icon: <Target size={120} /> },
  { label: 'Flag Captures', value: '31', icon: <Zap size={120} /> },
  { label: 'Data Points', value: '12.7K', icon: <Activity size={120} /> },
];

export default function ContestsPage() {
  return (
    <main className="w-full bg-black text-white overflow-x-hidden font-mono selection:bg-orange-500/30">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[250px] md:min-h-[500px] w-full flex flex-col items-center justify-center overflow-hidden px-6 py-10 md:py-32 mt-8 md:mt-16 text-center [transform:translateZ(0)]">
        {/* Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:30px_30px] md:bg-[size:60px_60px] pointer-events-none" />
        
        {/* Glow Element */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-orange-500/10 rounded-full blur-[80px] md:blur-[120px] pointer-events-none opacity-40 will-change-[filter]" />

        {/* Side Icons */}
        <div className="absolute left-10 xl:left-20 top-1/2 -translate-y-1/2 hidden lg:block opacity-[0.05] pointer-events-none">
          <Trophy size={180} className="text-white" />
        </div>
        <div className="absolute right-10 xl:right-20 top-1/2 -translate-y-1/2 hidden lg:block opacity-[0.05] pointer-events-none">
          <Shield size={180} className="text-orange-500" />
        </div>

        <div className="relative z-10 space-y-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-8xl font-black tracking-tighter text-white uppercase leading-none">
            Security <span className="text-orange-500">Journey</span>
          </h1>
          <p className="text-xs md:text-xl text-orange-400 font-bold tracking-[0.2em] uppercase">
            Our journey through national and international challenges
          </p>
        </div>
      </section>

      {/* Contest List Section */}
      <section className="relative w-full py-16 md:py-24 px-6 md:px-12 bg-black border-t border-neutral-900">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-12 md:mb-20 space-y-3 md:space-y-4 text-left">
            <h2 className="text-3xl md:text-6xl font-black uppercase tracking-tighter">Contests</h2>
            <div className="h-[3px] w-20 bg-orange-500 shadow-[0_0_15px_rgba(249,115,22,0.6)]"></div>
          </div>

          <div className="space-y-4">
            {CONTESTS_LIST.map((contest, idx) => {
              const IconComponent = contest.icon;
              return (
              <a
                key={idx}
                href={contest.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-neutral-900/20 border border-neutral-800/50 rounded-xl md:rounded-2xl p-5 md:p-7 hover:border-orange-500/40 hover:bg-orange-500/[0.03] transition-all duration-300 [transform:translateZ(0)]"
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                  
                  {/* LEFT: Basic Info */}
                  <div className="flex gap-4 md:gap-6 items-start">
                    <div className={`flex-shrink-0 p-3 bg-neutral-900 border border-neutral-800 rounded-xl group-hover:border-orange-500/30 transition-colors ${contest.color}`}>
                      <IconComponent size={24} />
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="terminal-text text-[8px] md:text-[9px] uppercase tracking-widest text-neutral-500 bg-neutral-800/50 px-2 py-0.5 rounded">
                          {contest.month} {contest.year}
                        </span>
                        <span className="flex items-center gap-1 text-[8px] md:text-[9px] uppercase tracking-widest text-orange-500/70">
                          <Layers size={10} /> {contest.format}
                        </span>
                      </div>

                      <h3 className="text-base md:text-xl font-bold text-white group-hover:text-orange-500 transition-colors flex items-center gap-2">
                        {contest.event}
                        <ExternalLink size={14} className="opacity-0 group-hover:opacity-50 transition-opacity" />
                      </h3>
                    </div>
                  </div>

                  {/* RIGHT: Flags Only */}
                  <div className="flex items-center gap-4 border-t border-neutral-800/50 lg:border-none pt-5 lg:pt-0">
                    <div className="space-y-1 text-left md:text-right">
                      <p className="text-[8px] md:text-[10px] uppercase tracking-[0.2em] text-neutral-500 terminal-text">
                        Result
                      </p>
                      <p className="text-sm md:text-lg font-bold font-mono text-white flex items-center gap-1.5 group-hover:text-orange-400 transition-colors">
                        <Flag size={14} className="text-orange-500" />
                        {contest.result}
                      </p>
                    </div>

                    <ChevronRight size={20} className="text-neutral-700 group-hover:text-orange-500 group-hover:translate-x-1 transition-all hidden lg:block" />
                  </div>

                </div>
              </a>
              );
            })}
          </div>


        </div>
      </section>
      
      <Footer />
    </main>
  );
}