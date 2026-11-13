import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Sparkles, 
  MessageSquareCode, 
  Code2, 
  Lightbulb, 
  GraduationCap, 
  MapPin, 
  Target,
  ArrowRight
} from 'lucide-react';
import { personalInfo, aboutHighlights } from '../data/portfolioData';

const iconMap = {
  Brain: Brain,
  Sparkles: Sparkles,
  MessageSquareCode: MessageSquareCode,
  Code2: Code2,
  Lightbulb: Lightbulb,
};

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono mb-3">
            <span>ABOUT ME</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
            Engineering Practical Intelligence
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full" />
        </div>

        {/* Bio Card & Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-stretch">
          
          {/* Main Bio Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-8 glass-card rounded-2xl p-6 sm:p-8 border border-white/10 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center space-x-3 text-cyan-400 mb-4">
                <Brain className="w-6 h-6" />
                <span className="text-xs uppercase tracking-wider font-mono font-semibold">
                  Personal Mission & Academic Focus
                </span>
              </div>
              <p className="text-slate-200 text-lg sm:text-xl font-normal leading-relaxed mb-6">
                &ldquo;{personalInfo.about}&rdquo;
              </p>
            </div>

            <div className="pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-start space-x-3">
                <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-mono">INSTITUTION</div>
                  <div className="text-xs font-semibold text-slate-200">Yenepoya Institute of Tech</div>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="p-2 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-400">
                  <Target className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-mono">OBJECTIVE</div>
                  <div className="text-xs font-semibold text-slate-200">Real-World AI Solutions</div>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="p-2 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-mono">LOCATION</div>
                  <div className="text-xs font-semibold text-slate-200">Kerala & Karnataka, India</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Core Values Side Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-4 rounded-2xl glass-card p-6 border border-white/10 flex flex-col justify-between bg-gradient-to-br from-dark-900/90 via-dark-850/80 to-cyan-950/20"
          >
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-cyan-400 mb-2">
                Engineering Approach
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Precision, Reliability & Robustness
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-4">
                Prioritizing mathematically sound modeling, rigorous adversarial evaluation, and practical deployment over superficial hype.
              </p>
            </div>

            <div className="space-y-2.5 pt-4 border-t border-white/10 text-xs text-slate-300 font-mono">
              <div className="flex items-center justify-between">
                <span>Model Reliability:</span>
                <span className="text-cyan-400 font-semibold">Adversarial Defense</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Data Pipelines:</span>
                <span className="text-blue-400 font-semibold">Multimodal Real-time</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Code Craft:</span>
                <span className="text-purple-400 font-semibold">Clean & Maintainable</span>
              </div>
            </div>
          </motion.div>

        </div>

        {/* 5 Core Pillars Highlight Cards */}
        <div>
          <div className="text-center mb-8">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
              Core Areas of Competency & Interest
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aboutHighlights.map((item, idx) => {
              const IconComponent = iconMap[item.icon] || Sparkles;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="glass-card glass-card-hover rounded-2xl p-6 border border-white/10 group relative overflow-hidden"
                >
                  {/* Subtle top edge gradient highlight */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.gradient}`} />

                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center ${item.accent} group-hover:scale-110 transition-transform`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono text-slate-400 group-hover:text-cyan-300 transition-colors">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-slate-400 text-sm leading-relaxed font-normal">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;

