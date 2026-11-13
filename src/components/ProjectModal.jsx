import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  Github, 
  ExternalLink, 
  CheckCircle2, 
  Layers, 
  ShieldCheck, 
  Cpu, 
  Terminal 
} from 'lucide-react';
import { CybersecurityIllustration, SmartCityIllustration } from './ProjectIllustrations';

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-dark-950/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-3xl glass-card rounded-2xl border border-white/20 shadow-2xl overflow-hidden z-10 bg-dark-900 my-8"
        >
          {/* Header */}
          <div className="p-6 border-b border-white/10 flex items-start justify-between bg-dark-950/60">
            <div>
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider block mb-1">
                {project.category} &bull; {project.status}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                {project.title}
              </h3>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Body */}
          <div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto">
            {/* Visual illustration in modal */}
            <div>
              {project.illustrationType === 'cybersecurity' ? (
                <CybersecurityIllustration />
              ) : (
                <SmartCityIllustration />
              )}
            </div>

            {/* Description */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                Project Overview
              </h4>
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Reported Metric */}
            <div className="p-4 rounded-xl bg-cyan-950/30 border border-cyan-500/30 flex items-center justify-between">
              <div>
                <span className="text-xs font-mono text-cyan-300 block">KEY REPORTED METRIC</span>
                <span className="text-lg font-bold text-white">{project.reportedMetric}</span>
              </div>
              <ShieldCheck className="w-8 h-8 text-cyan-400 opacity-80" />
            </div>

            {/* Architectural Pipeline Steps */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
                System Workflow & Execution Pipeline
              </h4>
              <div className="space-y-2">
                {project.architectureSteps.map((step, idx) => (
                  <div
                    key={step}
                    className="flex items-center space-x-3 p-3 rounded-lg bg-dark-950/60 border border-white/5 text-xs text-slate-200 font-mono"
                  >
                    <span className="w-5 h-5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 flex items-center justify-center font-bold text-[10px]">
                      {idx + 1}
                    </span>
                    <span>{step}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                Technologies & Tools Applied
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-cyan-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Modal Footer */}
          <div className="p-4 sm:p-6 border-t border-white/10 bg-dark-950/80 flex items-center justify-between">
            <span className="text-xs text-slate-400 font-mono">
              Repository: github.com/roht
            </span>
            <div className="flex items-center space-x-3">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-xs font-semibold rounded-lg bg-white/5 hover:bg-white/10 text-slate-300"
              >
                Close
              </button>
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center space-x-2 px-4 py-2 text-xs font-semibold rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/40"
              >
                <Github className="w-4 h-4" />
                <span>Visit GitHub Profile</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ProjectModal;

