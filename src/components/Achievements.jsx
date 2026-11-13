import React from 'react';
import { motion } from 'framer-motion';
import { Clock, ShieldCheck, Award, TrendingUp } from 'lucide-react';
import { achievements } from '../data/portfolioData';

const achievementIconMap = {
  Clock: Clock,
  ShieldCheck: ShieldCheck,
  Award: Award,
  TrendingUp: TrendingUp,
};

const Achievements = () => {
  return (
    <section id="achievements" className="py-24 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono mb-3">
            <span>PROVEN MILESTONES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
            Key Achievements
          </h2>
          <p className="text-slate-400 max-w-2xl text-sm sm:text-base mb-6">
            Documented performance metrics and academic milestones achieved across system implementations and standardized benchmarks.
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full" />
        </div>

        {/* 4 Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((item, idx) => {
            const IconComp = achievementIconMap[item.icon] || Award;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="glass-card rounded-2xl p-6 border border-white/10 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Subtle top edge gradient */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.accent}`} />

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 bg-white/5 px-2 py-0.5 rounded">
                      {item.projectRef}
                    </span>
                  </div>

                  {/* Main Metric Callout */}
                  <div className="text-3xl sm:text-4xl font-extrabold text-white mb-2 font-mono tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-100 to-cyan-300">
                    {item.metric}
                  </div>

                  {/* Achievement Title */}
                  <h3 className="text-base font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h3>

                  {/* Detail statement */}
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                    {item.detail}
                  </p>
                </div>

                {/* Footer validation tag */}
                <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                  <span>Resume-Listed</span>
                  <span className="text-cyan-400/80">&bull; Verified</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Achievements;

