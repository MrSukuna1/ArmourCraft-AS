"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { 
  ShieldCheck, 
  Crosshair, 
  ArrowRight, 
  FileText, 
  Zap, 
  Lock, 
  Layers, 
  Award 
} from "lucide-react";

export default function Hero({ onOpenInquiry }) {
  const stats = [
    { label: "DEFLECTION EFFICIENCY", value: "99.98%", sub: "Multi-Hit Lab Tested" },
    { label: "MAXIMUM CERTIFICATION", value: "NIJ IV", sub: "Defeats .30-06 AP" },
    { label: "IMPACT ABSORPTION", value: "< 0.02s", sub: "Dynamic Dissipation" },
    { label: "GLOBAL DEFENSE FORCES", value: "45+", sub: "Tier-1 Operators" },
  ];

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-16 lg:py-24 tactical-grid">
      {/* Background Gradients & Radar Effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[550px] bg-gradient-to-b from-cyan-500/10 via-indigo-600/10 to-transparent blur-3xl opacity-80" />
        <div className="absolute top-1/2 right-0 w-[450px] h-[450px] bg-blue-600/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-10 left-10 w-[350px] h-[350px] bg-emerald-600/10 blur-[100px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & Call to Actions */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Tactical Live Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-6 shadow-inner"
            >
              <Crosshair className="w-3.5 h-3.5 text-cyan-400 animate-spin" style={{ animationDuration: "12s" }} />
              <span className="tracking-wide uppercase font-semibold">
                SYSTEM GENERATION // 2026 TACTICAL ARCHITECTURE
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
            </motion.div>

            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white uppercase leading-[1.08] mb-6"
            >
              Advanced Ballistic <br />
              <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-400 bg-clip-text text-transparent">
                Armor Engineering
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed mb-8 font-normal"
            >
              ArmourCraft manufactures battle-proven ceramic armor plates, high-cut combat helmets, 
              and modular tactical carriers engineered for elite defense forces, law enforcement agencies, 
              and critical defense operations worldwide.
            </motion.p>

            {/* Call to Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-12"
            >
              <button
                onClick={() => onOpenInquiry?.()}
                className="group inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-cyan-400 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-slate-950 font-extrabold text-sm uppercase tracking-wider shadow-lg shadow-cyan-500/25 hover:shadow-cyan-400/40 transition-all cursor-pointer"
              >
                <ShieldCheck className="w-5 h-5 text-slate-950" />
                <span>Initiate B2B Inquiry</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#products"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-700 hover:border-slate-500 text-slate-200 font-semibold text-sm transition-all"
              >
                <FileText className="w-4 h-4 text-cyan-400" />
                <span>Explore Tactical Catalog</span>
              </a>
            </motion.div>

            {/* Quick Micro Features */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center gap-6 text-xs text-slate-400 font-mono"
            >
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Zero-Spall Technology</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-cyan-400" />
                <span>Ultra-Lightweight UHMWPE</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Lock className="w-4 h-4 text-amber-400" />
                <span>ITAR & Defense Regulated</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: High-Tech Tactical Hologram / Imagery Frame */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative mx-auto max-w-md lg:max-w-none"
            >
              {/* Outer Glowing Border */}
              <div className="relative rounded-3xl p-1 bg-gradient-to-b from-cyan-500/40 via-slate-800 to-indigo-600/30 shadow-2xl shadow-cyan-500/10">
                <div className="relative rounded-[22px] bg-[#0B0F19] overflow-hidden border border-slate-800/80 p-5">
                  
                  {/* Tactical Frame Header */}
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4 font-mono text-[11px] text-slate-400">
                    <span className="flex items-center gap-1.5 text-cyan-400 font-semibold">
                      <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                      SYSTEM ARCHITECTURE // MK-IV
                    </span>
                    <span className="text-slate-500">SPEC: NIJ-0101.06</span>
                  </div>

                  {/* Main Visual Image */}
                  <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 group">
                    <Image
                      src="/products/plate.jpg"
                      alt="CP-IV Ceramic Armor Plate"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      priority
                    />
                    
                    {/* HUD Overlay elements */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
                    
                    {/* Corner Crosshairs */}
                    <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-cyan-400" />
                    <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-cyan-400" />
                    <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-cyan-400" />
                    <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-cyan-400" />

                    {/* Threat indicator */}
                    <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-slate-950/80 backdrop-blur-md border border-cyan-500/20 text-xs">
                      <div className="flex items-center justify-between text-slate-300 font-mono mb-1">
                        <span className="text-cyan-300 font-bold">NIJ LEVEL IV MULTI-HIT</span>
                        <span className="text-emerald-400 font-bold">DEFEATED</span>
                      </div>
                      <p className="text-[11px] text-slate-400">
                        Tested: 7.62x63mm (.30-06 AP) Armor Piercing @ 2,880 fps
                      </p>
                    </div>
                  </div>

                  {/* Tactical Frame Footer Telemetry */}
                  <div className="mt-4 pt-3 border-t border-slate-800 grid grid-cols-3 gap-2 text-center font-mono">
                    <div className="p-2 rounded-lg bg-slate-900/60 border border-slate-800">
                      <div className="text-[10px] text-slate-500 uppercase">Weight</div>
                      <div className="text-xs font-bold text-white">2.45 KG</div>
                    </div>
                    <div className="p-2 rounded-lg bg-slate-900/60 border border-slate-800">
                      <div className="text-[10px] text-slate-500 uppercase">Core Matrix</div>
                      <div className="text-xs font-bold text-cyan-300">SiC + PE</div>
                    </div>
                    <div className="p-2 rounded-lg bg-slate-900/60 border border-slate-800">
                      <div className="text-[10px] text-slate-500 uppercase">Spall Deflect</div>
                      <div className="text-xs font-bold text-emerald-400">100% CAP</div>
                    </div>
                  </div>

                </div>
              </div>
            </motion.div>
          </div>

        </div>

        {/* Tactical Key Metrics Counter Bar */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-2xl bg-slate-900/40 border border-slate-800 backdrop-blur-md"
        >
          {stats.map((stat, i) => (
            <div key={i} className="text-left pl-3 border-l-2 border-cyan-500/40">
              <div className="text-[10px] sm:text-xs font-mono text-slate-400 tracking-wider uppercase mb-1">
                {stat.label}
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {stat.value}
              </div>
              <div className="text-[11px] text-cyan-400/90 font-mono mt-0.5">
                {stat.sub}
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
