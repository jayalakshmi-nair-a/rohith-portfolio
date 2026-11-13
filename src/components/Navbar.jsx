import React, { useState, useEffect } from 'react';
import { 
  Terminal, 
  Menu, 
  X, 
  FileDown, 
  Github, 
  Linkedin, 
  Mail, 
  Sparkles,
  ArrowUpRight 
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = ({ onOpenResumeModal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      setScrollProgress((currentScroll / (totalScroll || 1)) * 100);
      setScrolled(currentScroll > 30);

      // Section spy
      const sections = ['home', ...navItems.map((item) => item.href.slice(1))];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 180 && rect.bottom >= 180) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top progress indicator bar */}
      <div 
        className="fixed top-0 left-0 h-[2px] bg-gradient-to-r from-neonCyan-500 via-electric-500 to-cyberPurple-500 z-50 transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
      />

      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-dark-950/80 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-cyan-950/20 py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#home"
              className="group flex items-center space-x-3 text-slate-100 hover:text-white transition-colors"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/20 via-blue-500/20 to-purple-500/20 border border-cyan-500/30 flex items-center justify-center group-hover:border-cyan-400 group-hover:shadow-[0_0_15px_rgba(6,182,212,0.4)] transition-all">
                <Terminal className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold tracking-wider text-base text-white flex items-center gap-1.5">
                  ROHITH NAIR
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                </span>
                <span className="text-[10px] tracking-widest text-cyan-400/90 font-mono font-medium uppercase">
                  AI / ML Engineer
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1 glass-pill px-4 py-1.5 rounded-full border border-white/10">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.slice(1);
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`relative px-3 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
                      isActive
                        ? 'text-cyan-300 bg-white/10 shadow-[0_0_10px_rgba(6,182,212,0.2)]'
                        : 'text-slate-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {item.name}
                  </a>
                );
              })}
            </nav>

            {/* Desktop Right CTA */}
            <div className="hidden md:flex items-center space-x-3">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub Profile"
                className="p-2 text-slate-400 hover:text-cyan-400 hover:bg-white/5 rounded-lg border border-transparent hover:border-white/10 transition-all"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2 text-slate-400 hover:text-blue-400 hover:bg-white/5 rounded-lg border border-transparent hover:border-white/10 transition-all"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                aria-label="Send Email"
                className="p-2 text-slate-400 hover:text-purple-400 hover:bg-white/5 rounded-lg border border-transparent hover:border-white/10 transition-all"
              >
                <Mail className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.resumeUrl}
                download="Rohith_Nair_Resume.pdf"
                className="relative group overflow-hidden inline-flex items-center space-x-2 px-4 py-2 text-xs font-semibold rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <FileDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
                <span>Resume</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden items-center space-x-2">
              <a
                href={personalInfo.resumeUrl}
                download="Rohith_Nair_Resume.pdf"
                className="p-2 text-xs font-medium text-cyan-300 glass-pill rounded-lg"
              >
                <FileDown className="w-4 h-4" />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-white"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5 text-cyan-400" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 px-4 pt-2 pb-6 glass-card border-t border-b border-white/10 animate-in fade-in slide-in-from-top-4 duration-200">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2.5 rounded-lg text-sm font-medium text-slate-200 hover:text-cyan-400 hover:bg-white/5 transition-colors flex items-center justify-between"
                >
                  <span>{item.name}</span>
                  <ArrowUpRight className="w-4 h-4 opacity-40" />
                </a>
              ))}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between px-2">
                <div className="flex space-x-3">
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 text-slate-300 hover:text-cyan-400 bg-white/5 rounded-lg"
                    aria-label="GitHub"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 text-slate-300 hover:text-blue-400 bg-white/5 rounded-lg"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="p-2 text-slate-300 hover:text-purple-400 bg-white/5 rounded-lg"
                    aria-label="Email"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                </div>
                <a
                  href={personalInfo.resumeUrl}
                  download="Rohith_Nair_Resume.pdf"
                  className="inline-flex items-center space-x-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white"
                >
                  <FileDown className="w-3.5 h-3.5" />
                  <span>Get Resume</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;

