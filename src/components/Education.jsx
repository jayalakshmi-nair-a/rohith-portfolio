import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award, BookOpen, CheckCircle2 } from 'lucide-react';
import { educationList } from '../data/portfolioData';

const Education = () => {
  return (
    <section id="education" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-10 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono mb-3">
            <span>ACADEMIC BACKGROUND</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
            Education Timeline
          </h2>
          <p className="text-slate-400 max-w-2xl text-sm sm:text-base mb-6">
            Rigorous academic foundation in Artificial Intelligence, Machine Learning algorithms, and computer science principles.
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full" />
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical central/side line */}
          <div className="absolute top-0 bottom-0 left-4 sm:left-8 w-0.5 bg-gradient-to-b from-cyan-500 via-blue-500 to-purple-500 opacity-30" />

          <div className="space-y-12">
            {educationList.map((item, idx) => (
              <motion.div
                key={item.degree}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="relative pl-12 sm:pl-20 group"
              >
                {/* Timeline Node Badge */}
                <div className="absolute left-1.5 sm:left-5.5 top-1.5 -translate-x-1/2 w-6 h-6 rounded-full bg-dark-950 border-2 border-cyan-400 flex items-center justify-center group-hover:scale-125 group-hover:shadow-[0_0_15px_rgba(6,182,212,0.6)] transition-all">
                  <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                </div>

                {/* Timeline Card */}
                <div className="glass-card rounded-2xl p-6 sm:p-8 border border-white/10 hover:border-cyan-500/40 transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                    <div className="flex items-center space-x-2 text-cyan-400 font-mono text-xs">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{item.period}</span>
                      <span className="text-slate-500">&bull;</span>
                      <span className="text-slate-400">{item.status}</span>
                    </div>

                    {/* Metric pill */}
                    <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-bold w-fit">
                      <Award className="w-3.5 h-3.5" />
                      <span>{item.metricLabel}: {item.metricValue}</span>
                    </div>
                  </div>

                  {/* Degree Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {item.degree}
                  </h3>

                  {/* Institution & Location */}
                  <div className="flex flex-wrap items-center gap-y-1 gap-x-4 text-slate-300 text-sm mb-5">
                    <span className="font-semibold text-slate-100 flex items-center gap-1.5">
                      <GraduationCap className="w-4 h-4 text-cyan-400" />
                      {item.institution}
                    </span>
                    <span className="text-slate-500 hidden sm:inline">&bull;</span>
                    <span className="text-slate-400 flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-500" />
                      {item.location}
                    </span>
                  </div>

                  {/* Focus areas / key coursework */}
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-2.5">
                      Key Academic Focus & Coursework:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {item.focus.map((point) => (
                        <div key={point} className="flex items-center space-x-2 text-xs text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Education;

