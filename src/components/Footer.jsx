import React from 'react';
import { Github, Linkedin, Mail, ArrowUp, Terminal, Sparkles, Heart } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/10 bg-dark-950/90 relative z-10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Footer Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/5">
          {/* Brand */}
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
              <Terminal className="w-4 h-4" />
            </div>
            <div>
              <span className="font-bold tracking-wider text-sm text-white">
                {personalInfo.name}
              </span>
              <span className="text-[10px] text-cyan-400/90 block font-mono">
                Aspiring AI/ML Engineer
              </span>
            </div>
          </div>

          {/* Quick Nav Anchor Links */}
          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-mono text-slate-400">
            <a href="#about" className="hover:text-cyan-300 transition-colors">About</a>
            <a href="#skills" className="hover:text-cyan-300 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-cyan-300 transition-colors">Projects</a>
            <a href="#education" className="hover:text-cyan-300 transition-colors">Education</a>
            <a href="#certifications" className="hover:text-cyan-300 transition-colors">Certifications</a>
            <a href="#achievements" className="hover:text-cyan-300 transition-colors">Achievements</a>
            <a href="#contact" className="hover:text-cyan-300 transition-colors">Contact</a>
          </nav>

          {/* Back to top button */}
          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white text-xs font-mono transition-all"
            aria-label="Scroll back to top"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-cyan-400" />
          </button>
        </div>

        {/* Bottom Footer Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8">
          
          {/* Main Footer Text Requirement: "Designed & Developed by Rohith Nair" */}
          <div className="text-xs text-slate-400 font-mono text-center sm:text-left">
            <span>Designed & Developed by </span>
            <span className="text-cyan-300 font-semibold">{personalInfo.name}</span>
          </div>

          {/* Social Icons */}
          <div className="flex items-center space-x-3">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="p-2 text-slate-400 hover:text-cyan-400 hover:bg-white/5 rounded-lg border border-transparent hover:border-white/10 transition-all"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2 text-slate-400 hover:text-blue-400 hover:bg-white/5 rounded-lg border border-transparent hover:border-white/10 transition-all"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-2 text-slate-400 hover:text-purple-400 hover:bg-white/5 rounded-lg border border-transparent hover:border-white/10 transition-all"
              aria-label="Send Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          {/* Status Badge */}
          <div className="flex items-center space-x-2 text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Available for AI/ML Opportunities</span>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;

