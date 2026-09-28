"use client";

import { motion } from "framer-motion";
import { 
  Zap, 
  Shield, 
  Layers, 
  Cpu, 
  Target, 
  Activity, 
  CheckCircle2, 
  Atom,
  Flame,
  Droplets
} from "lucide-react";

export default function Technology() {
  const techPillars = [
    {
      title: "Monolithic Silicon Carbide & Boron Ceramics",
      subtitle: "Kinetic Defeat Layer",
      icon: Atom,
      color: "from-cyan-500 to-blue-600",
      description: "Custom crystalline ceramics fracture the hardened core of tungsten and steel-core penetrators on impact, dissipating immense kinetic velocity within milliseconds.",
      metrics: "Hardness: > 28 GPa • Velocity Tolerance: > 920 m/s"
    },
    {
      title: "Ultra-High Molecular Weight Polyethylene (UHMWPE)",
      subtitle: "Tensile Shock Dissipation",
      icon: Layers,
      color: "from-indigo-500 to-purple-600",
      description: "Multi-layered cross-plied UHMWPE fibers exhibit 15x greater strength than high-grade steel, catching residual fragments and minimizing blunt force backface trauma.",
      metrics: "Tensile Modulus: 120 GPa • Backface Trauma: < 25 mm"
    },
    {
      title: "Polyurea Encapsulation & Spall Containment",
      subtitle: "Fragmentation Lock",
      icon: Shield,
      color: "from-teal-500 to-emerald-600",
      description: "High-pressure elastomer coating encapsulates dangerous shrapnel and bullet spall, preventing ricochets toward the neck, arms, or adjacent squad members.",
      metrics: "Elongation at Break: > 450% • 100% Spall Containment"
    },
    {
      title: "All-Climate Environmental Resilience",
      subtitle: "Field Tested Durability",
      icon: Flame,
      color: "from-amber-500 to-orange-600",
      description: "Engineered to withstand extreme temperature cycles (-40°C to +75°C), diesel, saltwater, UV radiation, and drop impacts without ballistic degradation.",
      metrics: "MIL-STD-810H Compliant • Immersion Proof"
    }
  ];

  return (
    <section id="technology" className="py-24 relative bg-[#080B12] overflow-hidden">
      {/* Background Decorative Accents */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-cyan-600/5 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-indigo-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium bg-slate-900 border border-cyan-500/20 text-cyan-400 mb-4">
            <Cpu className="w-3.5 h-3.5" />
            <span>MATERIALS SCIENCE & BALLISTIC ARCHITECTURE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight mb-4">
            Engineered For Absolute Survivability
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Our hybrid composite structures unite the hardness of technical ceramics with the tensile elasticity of ultra-modern polymers.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {techPillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative rounded-2xl bg-gradient-to-b from-slate-900/80 to-[#0A0E18] border border-slate-800 p-6 sm:p-8 backdrop-blur-sm hover:border-cyan-500/40 transition-all group"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className={`p-3.5 rounded-2xl bg-gradient-to-br ${pillar.color} shadow-lg shadow-cyan-500/10 text-white`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="font-mono text-xs text-slate-500 uppercase">
                    PHASE 0{idx + 1}
                  </span>
                </div>

                <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-1">
                  {pillar.subtitle}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-6">
                  {pillar.description}
                </p>

                <div className="pt-4 border-t border-slate-800/80 text-xs font-mono text-slate-300 flex items-center justify-between">
                  <span className="text-cyan-400/90 font-semibold">{pillar.metrics}</span>
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
