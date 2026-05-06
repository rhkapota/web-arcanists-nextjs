'use client';

import { memo, cloneElement, ReactElement } from 'react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { 
  Users, 
  ShieldCheck, 
  Github, 
  Globe, 
  Eye, 
  Calendar,
  Circle,
  Hash,
  Cpu,
  Link as LinkIcon,
  Smartphone,
  Cloud,
  Cpu as Hardware,
  FileSearch,
  Bot,
  Binary,
  Linkedin,
  Twitter,
  X,
  CircleFadingPlus,
} from 'lucide-react';


const MEMBERS = [
  {
    id: 1,
    nickname: 'K4lameety',
    role: 'that simple~',
    status: 'active',
    specializations: ['Web', 'Forensics'],
    joinedYear: '2025',
    avatarUrl: '/avatar/K4lameety.png',
    socials: [
      { icon: <Github size={16} />, url: 'https://github.com/K4lameety' },
      { icon: <Globe size={16} />, url: 'https://k4lameety.github.io' },
      { icon: <CircleFadingPlus size={16} />, url: 'https://www.instagram.com/rhkapota' },
    ]
  },
  {
    id: 2,
    nickname: 'Kaiser114',
    role: 'money oriented',
    status: 'active',
    specializations: ['Crypto', 'Osint'],
    joinedYear: '2025',
    avatarUrl: '/avatar/Kaiser114.png',
    socials: [
      { icon: <Github size={16} />, url: 'https://github.com/kaiser-114' },
      { icon: <CircleFadingPlus size={16} />, url: 'https://www.instagram.com/vyudha_' },
    ]
  },
  {
    id: 3,
    nickname: 'leosycthe',
    role: 'Waiting for ret2isekai payload',
    status: 'active',
    specializations: ['Reverse', 'Pwn'],
    joinedYear: '2023',
    avatarUrl: '/avatar/Leosycthe.png',
    socials: [
      { icon: <Github size={16} />, url: 'https://github.com/leosycthe' },
      { icon: <Globe size={16} />, url: 'https://leosycthe.github.io' },
      { icon: <Linkedin size={16} />, url: 'https://www.linkedin.com/in/muhammad-rayhan-widayat' }
    ]
  },
  {
  id: 4,
  nickname: 'Baby Boy',
  role: 'You are magic',
  status: 'active',
  specializations: ['Reverse', 'Web'],
  joinedYear: '2025',
  avatarUrl: '/avatar/BabyBoy.png',
  socials: [
    { icon: <Twitter size={16} />, url: 'https://x.com/wiraishero' }
  ]
},
{
  id: 5,
  nickname: 'LrmIpsm',
  role: 'Hanya Mahasiswa Biasa',
  status: 'active',
  specializations: ['Web'],
  joinedYear: '2025',
  avatarUrl: '/avatar/LrmIpsm.png',
  socials: []
},
{
  id: 6,
  nickname: 'Daniel',
  role: 'Securing the Digital Future',
  status: 'active',
  specializations: ['Web'],
  joinedYear: '2025',
  avatarUrl: '/avatar/avatar.png',
  socials: []
}
];


const SPECS_CONFIG: Record<string, { style: string; icon: React.ReactNode }> = {
  'Web': { style: 'bg-blue-600 border-blue-400 text-white', icon: <Globe size={14} /> },
  'Osint': { style: 'bg-orange-600 border-orange-400 text-white', icon: <Eye size={14} /> },
  'Pwn': { style: 'bg-red-600 border-red-400 text-white', icon: <Binary size={14} /> },
  'Crypto': { style: 'bg-purple-600 border-purple-400 text-white', icon: <Hash size={14} /> },
  'Reverse': { style: 'bg-emerald-600 border-emerald-400 text-white', icon: <Cpu size={14} /> },
  'Forensics': { style: 'bg-cyan-600 border-cyan-400 text-white', icon: <FileSearch size={14} /> },
  'Blockchain': { style: 'bg-amber-500 border-amber-300 text-black', icon: <LinkIcon size={14} /> },
  'Mobile': { style: 'bg-pink-600 border-pink-400 text-white', icon: <Smartphone size={14} /> },
  'Cloud': { style: 'bg-sky-500 border-sky-300 text-white', icon: <Cloud size={14} /> },
  'Hardware': { style: 'bg-slate-700 border-slate-500 text-white', icon: <Hardware size={14} /> },
  'AI': { style: 'bg-indigo-600 border-indigo-400 text-white', icon: <Bot size={14} /> },
  'Misc': { style: 'bg-neutral-600 border-neutral-400 text-white', icon: <Circle size={10} fill="currentColor" /> },
};

const SORTED_MEMBERS = [...MEMBERS].sort((a, b) => {
  const yearDiff = parseInt(a.joinedYear) - parseInt(b.joinedYear);
  if (yearDiff !== 0) return yearDiff;
  return a.id - b.id;
});

const SpecializationBadge = memo(({ spec }: { spec: string }) => {
  const config = SPECS_CONFIG[spec] || SPECS_CONFIG['Misc'];
  return (
    <div className={`flex items-center gap-2 px-4 py-1.5 rounded-lg border-b-2 shadow-lg text-[11px] md:text-[12px] uppercase font-black transition-all hover:-translate-y-1 active:scale-95 ${config.style}`}>
      <span className="drop-shadow-md">{config.icon}</span>
      <span className="drop-shadow-md">{spec}</span>
    </div>
  );
});
SpecializationBadge.displayName = 'SpecializationBadge';

export default function TeamPage() {
  return (
    <main className="w-full bg-black text-white overflow-x-hidden font-mono selection:bg-orange-500/30">
      <Navigation />
      
      {/* Header Section */}
      <section className="relative min-h-[250px] md:min-h-[500px] w-full flex flex-col items-center justify-center overflow-hidden px-6 py-10 md:py-20 mt-8 md:mt-16 text-center [transform:translateZ(0)]">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:30px_30px] md:bg-[size:60px_60px] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-orange-500/10 rounded-full blur-[80px] md:blur-[120px] pointer-events-none opacity-40 will-change-[filter]" />

        <div className="absolute left-10 xl:left-20 top-1/2 -translate-y-1/2 hidden lg:block opacity-[0.05] pointer-events-none">
          <Users size={180} />
        </div>
        <div className="absolute right-10 xl:right-20 top-1/2 -translate-y-1/2 hidden lg:block opacity-[0.05] pointer-events-none">
          <ShieldCheck size={180} className="text-orange-500" />
        </div>
        
        <div className="relative z-10 space-y-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-8xl font-black tracking-tighter text-white uppercase leading-none">
            The <span className="text-orange-500">Operators</span>
          </h1>
          <p className="text-xs md:text-xl text-orange-400 font-bold tracking-[0.2em] uppercase px-4">Our technical team and security enthusiasts</p>
        </div>
      </section>

      {/* Members Section */}
      <section className="relative w-full py-16 px-6 md:px-12 bg-black border-t border-neutral-900 [transform:translateZ(0)]">
        <div className="max-w-7xl mx-auto relative z-10">
          
          <div className="mb-12 md:mb-20 space-y-3 md:space-y-4 text-left">
            <h2 className="text-3xl md:text-6xl font-black uppercase tracking-tighter">Members</h2>
            <div className="h-[3px] w-20 bg-orange-500 shadow-[0_0_15px_rgba(249,115,22,0.6)]"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SORTED_MEMBERS.map((member) => {
              const lastSpec = member.specializations[member.specializations.length - 1];
              const specConfig = SPECS_CONFIG[lastSpec];

              return (
                <div
                  key={member.id}
                  className="group relative bg-neutral-900/30 border border-neutral-800 rounded-2xl p-6 md:p-8 transition-all duration-500 hover:border-orange-500/40 hover:bg-orange-500/[0.02] flex flex-col justify-between overflow-hidden [transform:translateZ(0)]"
                >
                  {specConfig && (
                    <div className="absolute -bottom-6 -right-6 opacity-[0.03] group-hover:opacity-[0.12] group-hover:text-orange-500 transition-all duration-700 pointer-events-none will-change-transform group-hover:rotate-12 group-hover:scale-110">
                      {cloneElement(specConfig.icon as ReactElement, { size: 140 })}
                    </div>
                  )}

                  <div className="relative z-10">
                    <div className="flex justify-between items-start mb-8">
                      <div className="relative">
                        <div className="w-20 h-20 rounded-full bg-neutral-900 border-2 border-neutral-800 overflow-hidden group-hover:border-orange-500/50 transition-all duration-500">
                          <img 
                            src={member.avatarUrl} 
                            alt={member.nickname}
                            loading="lazy"
                            className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                          />
                        </div>
                      </div>

                      <div className="flex gap-2">
                        {member.socials.map((social, sIdx) => (
                          <a key={sIdx} href={social.url} target="_blank" rel="noopener noreferrer" className="p-2.5 bg-neutral-800 border border-neutral-700 rounded-xl text-neutral-400 hover:text-orange-500 hover:border-orange-500/50 transition-all active:scale-90">
                            {social.icon}
                          </a>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-6 text-left">
                      <div>
                        <h3 className="text-3xl font-black text-white tracking-tight group-hover:text-orange-500 transition-colors uppercase italic">
                          {member.nickname}
                        </h3>
                        
                        <div className="flex items-center gap-4 mt-2">
                          <div className="flex items-center gap-2">
                            <Calendar size={14} className="text-orange-500" />
                            <p className="text-[12px] text-neutral-300 font-black uppercase tracking-widest">
                              Est. {member.joinedYear}
                            </p>
                          </div>
                          
                          <div className={`flex items-center gap-1.5 px-2.5 py-0.5 rounded border text-[10px] font-black uppercase tracking-tighter ${
                            member.status === 'active' 
                            ? 'border-green-500/50 text-green-400 bg-green-500/10' 
                            : 'border-neutral-600 text-neutral-500 bg-neutral-800'
                          }`}>
                            <div className={`w-1.5 h-1.5 rounded-full ${member.status === 'active' ? 'bg-green-500 animate-pulse' : 'bg-neutral-600'}`} />
                            {member.status}
                          </div>
                        </div>
                      </div>

                      {member.role && (
                        <p className="text-sm text-neutral-400 font-medium tracking-wide">
                          {member.role}
                        </p>
                      )}

                      <div className="flex flex-wrap gap-2.5 pt-2">
                        {member.specializations.map((spec) => (
                          <SpecializationBadge key={spec} spec={spec} />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}