'use client';

import { memo } from 'react';
import { Mail, ArrowRight, CircleFadingPlus, Users } from 'lucide-react';

const FOOTER_LINKS = [
  { label: 'Homes', href: '/#about' },
  { label: 'Members', href: '/member' },
  { label: 'Contests', href: '/contest' },
];

const SOCIAL_LINKS = [
  { icon: <Mail size={12} />, label: 'Email', href: 'mailto:arcanists.umy@gmail.com' },
  { icon: <Users size={12} />, label: 'Linkedin', href: 'https://www.linkedin.com/company/arcanists' },
  { icon: <CircleFadingPlus size={12} />, label: 'Instagram', href: 'https://www.instagram.com/arcanists.umy' }
];

export function Footer() {
  return (
    <footer className="relative w-full bg-black border-t border-neutral-900 py-12 md:py-16 px-6 md:px-12 overflow-hidden font-mono [transform:translateZ(0)]">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:40px_40px] md:bg-[size:50px_50px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-12 mb-12 md:mb-16">
          
          {/* Brand & Tagline */}
          <div className="space-y-6 max-w-sm text-center md:text-left flex flex-col items-center md:items-start">
            <a href="/" className="flex items-center gap-2 group active:scale-95 transition-transform">
              <div className="flex items-center gap-2 font-mono text-xl font-bold tracking-tighter">
                <img 
                  src="icon.png" 
                  alt="Arcanists Icon" 
                  loading="lazy"
                  className="w-8 h-auto transition-transform group-hover:scale-110"
                /> 
                <span className="text-white neon-cyan uppercase">Arcanists</span>
              </div>
            </a>

            <p className="text-xs md:text-sm text-neutral-500 leading-relaxed font-light px-4 md:px-0">
              Learn together. Break together. Secure together.
            </p>
          </div>

          {/* Navigation & Socials Container */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-24">
            
            {/* Quick Links */}
            <div className="hidden md:block space-y-5">
              <h4 className="terminal-text text-[10px] uppercase tracking-[0.3em] text-orange-500 font-bold">Navigation</h4>
              <ul className="space-y-3 terminal-text text-[11px] uppercase tracking-widest">
                {FOOTER_LINKS.map((link, idx) => (
                  <li key={idx}>
                    <a 
                      href={link.href} 
                      className="text-neutral-500 hover:text-orange-500 transition-all duration-300 flex items-center group"
                    >
                      <div className="w-0 group-hover:w-5 overflow-hidden transition-all duration-300 ease-in-out flex items-center">
                        <ArrowRight 
                          size={14} 
                          className="text-orange-500 min-w-[14px] -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out" 
                        />
                      </div>
                      <span className="group-hover:translate-x-1 transition-transform duration-300 ease-in-out">
                        {link.label}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Connect */}
            <div className="space-y-5 text-center md:text-left flex flex-col items-center md:items-start">
              <h4 className="terminal-text text-[10px] uppercase tracking-[0.3em] text-orange-500 font-bold">Connect</h4>
              <div className="flex gap-4">
                {SOCIAL_LINKS.map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-neutral-900/50 border border-neutral-800 text-neutral-400 hover:text-orange-500 hover:border-orange-500/50 hover:bg-orange-500/5 rounded-xl transition-all duration-300 active:scale-90"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Bar / Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-neutral-800 to-transparent mb-8 md:mb-10" />

        {/* Terminal Signature */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-6">
          <div className="p-4 bg-neutral-900/30 rounded-xl border border-neutral-800/50 font-mono text-[9px] md:text-xs text-neutral-500 w-full md:w-auto overflow-hidden [transform:translateZ(0)]">
            <div className="flex items-center gap-2 whitespace-nowrap">
              <span className="text-orange-500">$</span>
              <span>arcanists --status</span>
              <span className="text-green-500 ml-1 uppercase">online</span>
            </div>
            <div className="flex items-start gap-2 mt-2 leading-relaxed">
              <span className="text-orange-500">$</span>
              <span className="break-all md:break-normal text-neutral-400">echo "&copy; 2026 Arcanists. All rights reserved."</span>
            </div>
          </div>
          
          <div className="terminal-text text-[9px] md:text-[10px] text-neutral-600 tracking-[0.2em] uppercase order-first md:order-last">
            Made by Arcanists Team
          </div>
        </div>
      </div>
    </footer>
  );
}