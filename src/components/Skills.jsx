import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  Cpu, 
  BarChart3, 
  Globe, 
  Database, 
  Terminal, 
  BookOpen, 
  Search,
  Sparkles,
  Layers
} from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

const categoryIconMap = {
  Code: Code,
  Cpu: Cpu,
  BarChart3: BarChart3,
  Globe: Globe,
  Database: Database,
  Terminal: Terminal,
  BookOpen: BookOpen,
};

const Skills = () => {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filterOptions = [
    'All',
    'AI & Machine Learning',
    'Programming Languages',
    'Data Science',
    'Web & Mobile Development',
    'Databases',
    'Tools & Platforms',
    'Core Concepts',
  ];

  // Filter categories based on active tab and search query
  const filteredCategories = skillCategories
    .filter((cat) => (selectedFilter === 'All' ? true : cat.category === selectedFilter))
    .map((cat) => {
      if (!searchTerm.trim()) return cat;
      const matchingSkills = cat.skills.filter(
        (s) =>
          s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          s.tag.toLowerCase().includes(searchTerm.toLowerCase())
      );
      return {
        ...cat,
        skills: matchingSkills,
      };
    })
    .filter((cat) => cat.skills.length > 0);

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono mb-3">
            <span>TECHNICAL EXPERTISE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
            Skills & Technical Stack
          </h2>
          <p className="text-slate-400 max-w-2xl text-sm sm:text-base mb-6">
            A comprehensive suite of machine learning toolchains, algorithmic foundations, statistical frameworks, and development environments.
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full" />
        </div>

        {/* Filter Tabs & Search Controls */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          
          {/* Scrollable Filter Badges */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {filterOptions.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setSelectedFilter(filter)}
                className={`whitespace-nowrap px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                  selectedFilter === filter
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/20'
                    : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 border border-white/5'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Quick Search Input */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search skills (e.g. Transformers, Python)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-dark-900/80 border border-white/10 rounded-xl pl-9 pr-4 py-2 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
            />
            {searchTerm && (
              <button
                type="button"
                onClick={() => setSearchTerm('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
              >
                &times;
              </button>
            )}
          </div>

        </div>

        {/* Categorized Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((categoryObj, idx) => {
            const IconComp = categoryIconMap[categoryObj.icon] || Layers;
            return (
              <motion.div
                key={categoryObj.category}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="glass-card rounded-2xl p-6 border border-white/10 flex flex-col justify-between hover:border-cyan-500/30 transition-all group"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <h3 className="font-bold text-white text-base">
                        {categoryObj.category}
                      </h3>
                    </div>
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-white/5 text-slate-400 border border-white/5">
                      {categoryObj.badge}
                    </span>
                  </div>

                  {/* Skills Pill List */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {categoryObj.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="group/pill inline-flex items-center space-x-2 px-3 py-1.5 rounded-lg bg-dark-950/60 border border-white/10 hover:border-cyan-400/50 hover:bg-cyan-950/20 transition-all duration-200"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 group-hover/pill:scale-125 transition-transform"></span>
                        <span className="text-xs font-semibold text-slate-200 group-hover/pill:text-white">
                          {skill.name}
                        </span>
                        <span className="text-[10px] text-slate-400 group-hover/pill:text-cyan-300 font-mono">
                          • {skill.tag}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom subtle indicator */}
                <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                  <span>Proficiency</span>
                  <span className="text-cyan-400/80">Applied & Tested</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {filteredCategories.length === 0 && (
          <div className="text-center py-12 glass-card rounded-2xl border border-white/10">
            <p className="text-slate-400 text-sm">No skills found matching &ldquo;{searchTerm}&rdquo;</p>
            <button
              type="button"
              onClick={() => { setSearchTerm(''); setSelectedFilter('All'); }}
              className="mt-3 text-xs text-cyan-400 hover:underline"
            >
              Reset filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
};

export default Skills;

