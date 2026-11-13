import React from 'react';
import { 
  ShieldCheck, 
  ShieldAlert, 
  Binary, 
  Cpu, 
  Building2, 
  Activity, 
  Radio, 
  Layers, 
  AlertTriangle,
  Zap
} from 'lucide-react';

export const CybersecurityIllustration = () => {
  return (
    <div className="relative w-full h-56 sm:h-64 rounded-xl bg-gradient-to-br from-dark-950 via-dark-900 to-cyan-950/40 p-4 border border-cyan-500/20 overflow-hidden flex flex-col justify-between font-mono text-xs select-none">
      {/* Background Matrix/Grid Overlay */}
      <div className="absolute inset-0 bg-cyber-grid opacity-30 pointer-events-none" />
      <div className="absolute -top-12 -right-12 w-36 h-36 bg-cyan-500/20 rounded-full blur-2xl pointer-events-none" />

      {/* Top Header HUD */}
      <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-2.5">
        <div className="flex items-center space-x-2">
          <ShieldCheck className="w-4 h-4 text-cyan-400" />
          <span className="text-cyan-300 font-semibold tracking-wide text-[11px]">
            ADVERSARIAL_ROBUSTNESS_SHIELD
          </span>
        </div>
        <div className="flex items-center space-x-1.5 text-[10px] text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/30">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping"></span>
          <span>EVAL_ACC: 90%</span>
        </div>
      </div>

      {/* Center Visual Diagram: Adversarial Vector vs Defense Layer */}
      <div className="relative z-10 my-auto py-2 grid grid-cols-3 gap-2 items-center">
        {/* Step 1: Inbound Perturbation */}
        <div className="p-2.5 rounded-lg bg-dark-950/80 border border-red-500/30 flex flex-col">
          <div className="flex items-center space-x-1 text-red-400 text-[10px] mb-1">
            <ShieldAlert className="w-3 h-3" />
            <span>Perturbed Input</span>
          </div>
          <div className="text-[10px] text-slate-300 truncate font-mono">
            "Urgent: Ver1fy Acc..."
          </div>
          <div className="text-[9px] text-red-400 mt-1">Evasive noise: &epsilon;=0.03</div>
        </div>

        {/* Step 2: Transformer Defense Barrier */}
        <div className="p-2.5 rounded-lg bg-cyan-950/40 border border-cyan-500/40 flex flex-col items-center justify-center text-center">
          <Zap className="w-4 h-4 text-cyan-400 mb-1 animate-pulse" />
          <span className="text-[10px] font-bold text-white">LLM Defense Head</span>
          <span className="text-[9px] text-cyan-300 mt-0.5">Semantic Denoiser</span>
        </div>

        {/* Step 3: Verified Output */}
        <div className="p-2.5 rounded-lg bg-dark-950/80 border border-emerald-500/30 flex flex-col">
          <div className="flex items-center space-x-1 text-emerald-400 text-[10px] mb-1">
            <ShieldCheck className="w-3 h-3" />
            <span>Classification</span>
          </div>
          <div className="text-[10px] text-emerald-300 font-bold">PHISHING IDENTIFIED</div>
          <div className="text-[9px] text-slate-400 mt-1">Confidence: 0.942</div>
        </div>
      </div>

      {/* Bottom HUD Telemetry */}
      <div className="relative z-10 pt-2 border-t border-white/10 flex items-center justify-between text-[10px] text-slate-400">
        <div className="flex items-center space-x-2">
          <span className="text-cyan-400">&bull; Attention: Multi-head</span>
          <span className="hidden sm:inline">&bull; Loss: CrossEntropy + Adv</span>
        </div>
        <span className="text-slate-300 font-semibold font-mono">ROBUSTNESS: ACTIVE</span>
      </div>
    </div>
  );
};

export const SmartCityIllustration = () => {
  return (
    <div className="relative w-full h-56 sm:h-64 rounded-xl bg-gradient-to-br from-dark-950 via-dark-900 to-blue-950/40 p-4 border border-blue-500/20 overflow-hidden flex flex-col justify-between font-mono text-xs select-none">
      {/* Background Matrix/Grid Overlay */}
      <div className="absolute inset-0 bg-cyber-grid opacity-30 pointer-events-none" />
      <div className="absolute -top-12 -right-12 w-36 h-36 bg-blue-500/20 rounded-full blur-2xl pointer-events-none" />

      {/* Top Header HUD */}
      <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-2.5">
        <div className="flex items-center space-x-2">
          <Building2 className="w-4 h-4 text-blue-400" />
          <span className="text-blue-300 font-semibold tracking-wide text-[11px]">
            URBAN_RESILIENCE_CORE
          </span>
        </div>
        <div className="flex items-center space-x-1.5 text-[10px] text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded border border-blue-500/30">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-ping"></span>
          <span>RESPONSE: -35% TIME</span>
        </div>
      </div>

      {/* Center Multimodal Grid Nodes */}
      <div className="relative z-10 my-auto py-2 grid grid-cols-3 gap-2 items-center">
        {/* Sensor Node 1: Vision */}
        <div className="p-2.5 rounded-lg bg-dark-950/80 border border-white/10 flex flex-col">
          <div className="flex items-center space-x-1 text-cyan-400 text-[10px] mb-1">
            <Radio className="w-3 h-3" />
            <span>Camera Feeds</span>
          </div>
          <div className="text-[10px] text-slate-300">Object & Flow</div>
          <div className="text-[9px] text-emerald-400 mt-1">60 FPS Real-time</div>
        </div>

        {/* Central Fusion Hub */}
        <div className="p-2.5 rounded-lg bg-blue-950/40 border border-blue-500/40 flex flex-col items-center justify-center text-center">
          <Layers className="w-4 h-4 text-blue-400 mb-1" />
          <span className="text-[10px] font-bold text-white">Cross-Modal Fusion</span>
          <span className="text-[9px] text-blue-300 mt-0.5">Spatiotemporal AI</span>
        </div>

        {/* Action Node */}
        <div className="p-2.5 rounded-lg bg-dark-950/80 border border-white/10 flex flex-col">
          <div className="flex items-center space-x-1 text-purple-400 text-[10px] mb-1">
            <Activity className="w-3 h-3" />
            <span>Risk Routing</span>
          </div>
          <div className="text-[10px] text-purple-300 font-bold">PROACTIVE ALERT</div>
          <div className="text-[9px] text-slate-400 mt-1">Latency &lt; 50ms</div>
        </div>
      </div>

      {/* Bottom HUD Telemetry */}
      <div className="relative z-10 pt-2 border-t border-white/10 flex items-center justify-between text-[10px] text-slate-400">
        <div className="flex items-center space-x-2">
          <span className="text-blue-400">&bull; Multi-stream Sync</span>
          <span className="hidden sm:inline">&bull; Urban Grid Telemetry</span>
        </div>
        <span className="text-slate-300 font-semibold font-mono">STATUS: OPTIMAL</span>
      </div>
    </div>
  );
};

