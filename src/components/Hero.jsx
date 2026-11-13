import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  FileDown, 
  Github, 
  Linkedin, 
  Mail, 
  Sparkles, 
  Terminal, 
  Cpu, 
  Layers, 
  ShieldCheck, 
  Activity, 
  Binary,
  CheckCircle2,
  Copy,
  Check
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const Hero = () => {
  const [activeTab, setActiveTab] = useState('model');
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="home" className="relative min-h-screen pt-32 pb-20 md:pt-40 md:pb-28 flex items-center overflow-hidden">
      {/* Background ambient glowing radial gradient */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Status Pill */}
            <div className="inline-flex items-center space-x-2.5 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-medium mb-6 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
              </span>
              <span>Aspiring AI/ML Engineer &bull; Generative AI Enthusiast</span>
            </div>

            {/* Name */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-4">
              <span className="block text-slate-100">{personalInfo.name}</span>
            </h1>

            {/* Role Header */}
            <div className="flex items-center flex-wrap gap-2 text-base sm:text-xl font-semibold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-electric-400 to-purple-400">
                {personalInfo.role}
              </span>
            </div>

            {/* Introduction paragraph */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl font-normal">
              {personalInfo.intro}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
              <a
                href="#projects"
                className="group w-full sm:w-auto inline-flex items-center justify-center space-x-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-electric-600 text-white font-semibold text-sm shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <span>Explore My Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href={personalInfo.resumeUrl}
                download="Rohith_Nair_Resume.pdf"
                className="group w-full sm:w-auto inline-flex items-center justify-center space-x-2.5 px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-500/40 text-slate-200 hover:text-white font-semibold text-sm backdrop-blur-md transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <FileDown className="w-4 h-4 text-cyan-400 group-hover:translate-y-0.5 transition-transform" />
                <span>Download My Resume</span>
              </a>
            </div>

            {/* Social Media Links & Email Quick Copy */}
            <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-white/10 w-full text-slate-400 text-sm">
              <span className="text-xs uppercase tracking-wider text-slate-400 font-mono">Connect:</span>
              
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 hover:border-cyan-500/30 text-slate-300 hover:text-cyan-300 transition-all text-xs"
              >
                <Github className="w-3.5 h-3.5" />
                <span>github.com/roht</span>
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 hover:border-blue-500/30 text-slate-300 hover:text-blue-300 transition-all text-xs"
              >
                <Linkedin className="w-3.5 h-3.5" />
                <span>LinkedIn Profile</span>
              </a>

              <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 text-slate-300 text-xs">
                <Mail className="w-3.5 h-3.5 text-purple-400" />
                <a href={`mailto:${personalInfo.email}`} className="hover:text-purple-300 transition-colors">
                  {personalInfo.email}
                </a>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="ml-1 p-1 hover:text-white transition-colors"
                  title="Copy email to clipboard"
                  aria-label="Copy email address"
                >
                  {copiedEmail ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                </button>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Professional Developer Visual with Subtle AI Elements */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            {/* Glowing frame backdrop */}
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/30 via-blue-500/20 to-purple-500/30 rounded-2xl blur-xl opacity-70 group-hover:opacity-100 transition duration-1000"></div>

            {/* Main Interactive AI Developer Terminal Card */}
            <div className="relative rounded-2xl glass-card border border-white/15 overflow-hidden shadow-2xl">
              
              {/* Terminal Window Header */}
              <div className="bg-dark-900/90 px-4 py-3 border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                  <span className="ml-2 text-xs font-mono text-slate-400 flex items-center gap-1.5">
                    <Terminal className="w-3 h-3 text-cyan-400" />
                    ai-engine.py — Rohith Nair
                  </span>
                </div>
                <div className="flex items-center space-x-1.5 text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>ONLINE</span>
                </div>
              </div>

              {/* Sub-navigation tabs on the visual */}
              <div className="flex border-b border-white/10 bg-dark-950/60 text-xs font-mono">
                <button
                  type="button"
                  onClick={() => setActiveTab('model')}
                  className={`flex-1 py-2 text-center border-b-2 transition-colors ${
                    activeTab === 'model'
                      ? 'border-cyan-400 text-cyan-300 bg-cyan-500/5'
                      : 'border-transparent text-slate-400 hover:text-slate-200'
                  }`}
                >
                  Neural Weights
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('pipeline')}
                  className={`flex-1 py-2 text-center border-b-2 transition-colors ${
                    activeTab === 'pipeline'
                      ? 'border-electric-400 text-blue-300 bg-blue-500/5'
                      : 'border-transparent text-slate-400 hover:text-slate-200'
                  }`}
                >
                  Inference Pipeline
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('specs')}
                  className={`flex-1 py-2 text-center border-b-2 transition-colors ${
                    activeTab === 'specs'
                      ? 'border-purple-400 text-purple-300 bg-purple-500/5'
                      : 'border-transparent text-slate-400 hover:text-slate-200'
                  }`}
                >
                  System Metrics
                </button>
              </div>

              {/* Terminal Card Body */}
              <div className="p-5 font-mono text-xs leading-relaxed space-y-4">
                {activeTab === 'model' && (
                  <div className="space-y-3">
                    <div className="text-slate-400 text-[11px]">
                      # Model Architecture Initialized
                    </div>
                    <div className="bg-dark-950/80 p-3 rounded-lg border border-white/5 space-y-1.5">
                      <div className="text-purple-300">
                        <span className="text-cyan-400">class</span> <span className="text-amber-300">AdversarialDetector</span>(nn.Module):
                      </div>
                      <div className="pl-4 text-slate-300">
                        <span className="text-blue-400">self</span>.backbone = <span className="text-emerald-400">AutoModel</span>.from_pretrained(<span className="text-amber-200">"roberta-base"</span>)
                      </div>
                      <div className="pl-4 text-slate-300">
                        <span className="text-blue-400">self</span>.robustness_layer = <span className="text-cyan-300">AdversarialDefense</span>(epsilon=0.03)
                      </div>
                      <div className="pl-4 text-slate-300">
                        <span className="text-blue-400">self</span>.classifier = nn.Linear(768, 2)
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-[11px]">
                      <div className="p-2.5 rounded-lg bg-cyan-950/20 border border-cyan-500/20 flex flex-col">
                        <span className="text-slate-400 text-[10px]">VERIFIED ACCURACY</span>
                        <span className="text-lg font-bold text-cyan-400">90%</span>
                        <span className="text-[10px] text-cyan-300/80">Against Phishing Inputs</span>
                      </div>
                      <div className="p-2.5 rounded-lg bg-blue-950/20 border border-blue-500/20 flex flex-col">
                        <span className="text-slate-400 text-[10px]">RESPONSE REDUCTION</span>
                        <span className="text-lg font-bold text-blue-400">35%</span>
                        <span className="text-[10px] text-blue-300/80">In Urban Risk Systems</span>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'pipeline' && (
                  <div className="space-y-2.5">
                    <div className="text-slate-400 text-[11px]"># Multimodal & LLM Inference Flow</div>
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between p-2 rounded bg-white/5 border border-white/5">
                        <span className="text-slate-300 flex items-center gap-2">
                          <Layers className="w-3.5 h-3.5 text-cyan-400" />
                          1. Tokenize & Cleanse
                        </span>
                        <span className="text-emerald-400 font-semibold text-[10px]">DONE (2ms)</span>
                      </div>
                      <div className="flex items-center justify-between p-2 rounded bg-white/5 border border-white/5">
                        <span className="text-slate-300 flex items-center gap-2">
                          <ShieldCheck className="w-3.5 h-3.5 text-purple-400" />
                          2. Adversarial Perturbation Check
                        </span>
                        <span className="text-emerald-400 font-semibold text-[10px]">ROBUST (6ms)</span>
                      </div>
                      <div className="flex items-center justify-between p-2 rounded bg-white/5 border border-white/5">
                        <span className="text-slate-300 flex items-center gap-2">
                          <Cpu className="w-3.5 h-3.5 text-blue-400" />
                          3. Transformer Attention Head
                        </span>
                        <span className="text-emerald-400 font-semibold text-[10px]">CONVERGED (8ms)</span>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'specs' && (
                  <div className="space-y-2.5">
                    <div className="text-slate-400 text-[11px]"># Hardware & Environment Stack</div>
                    <div className="grid grid-cols-2 gap-2 text-[11px]">
                      <div className="p-2 rounded bg-white/5 border border-white/5">
                        <div className="text-slate-400 text-[10px]">CORE RUNTIME</div>
                        <div className="text-slate-200 font-semibold mt-0.5">Python 3.11 • PyTorch</div>
                      </div>
                      <div className="p-2 rounded bg-white/5 border border-white/5">
                        <div className="text-slate-400 text-[10px]">FRAMEWORKS</div>
                        <div className="text-slate-200 font-semibold mt-0.5">Hugging Face • scikit-learn</div>
                      </div>
                      <div className="p-2 rounded bg-white/5 border border-white/5">
                        <div className="text-slate-400 text-[10px]">CLOUD & STORAGE</div>
                        <div className="text-slate-200 font-semibold mt-0.5">Azure (AZ-900) • MongoDB</div>
                      </div>
                      <div className="p-2 rounded bg-white/5 border border-white/5">
                        <div className="text-slate-400 text-[10px]">ANALYTICS</div>
                        <div className="text-slate-200 font-semibold mt-0.5">Pandas • NumPy • Seaborn</div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Live Console Output Bar */}
                <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400">
                  <div className="flex items-center space-x-2">
                    <Activity className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
                    <span>Inference latency: <span className="text-white font-semibold">14.2ms</span></span>
                  </div>
                  <div className="flex items-center space-x-1.5 text-cyan-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Weights Loaded</span>
                  </div>
                </div>

              </div>

              {/* Bottom Subtle Gradient Accent Line */}
              <div className="h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500" />
            </div>

            {/* Floating Glass Badge (Top Right) */}
            <div className="hidden sm:flex absolute -top-4 -right-4 glass-card px-3.5 py-2 rounded-xl border border-white/15 items-center space-x-2 shadow-xl backdrop-blur-lg">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <div className="text-xs">
                <span className="font-semibold text-white">Generative AI</span>
                <span className="text-[10px] text-slate-400 block font-mono">LLM Fine-tuning & Defense</span>
              </div>
            </div>

            {/* Floating Glass Badge (Bottom Left) */}
            <div className="hidden sm:flex absolute -bottom-4 -left-4 glass-card px-3.5 py-2 rounded-xl border border-white/15 items-center space-x-2 shadow-xl backdrop-blur-lg">
              <Binary className="w-4 h-4 text-cyan-400" />
              <div className="text-xs">
                <span className="font-semibold text-white">Yenepoya Institute</span>
                <span className="text-[10px] text-slate-400 block font-mono">AI & ML B.E. (2023-2027)</span>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;

