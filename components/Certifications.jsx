"use client";

import { motion } from "framer-motion";
import { Award, ShieldCheck, CheckCircle2, FileBadge, Globe, Lock } from "lucide-react";
import { defenseCertifications } from "@/lib/productsData";

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 relative bg-[#070A11] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium bg-slate-900 border border-emerald-500/20 text-emerald-400 mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>ACCREDITATIONS & AUDITED STANDARDS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight mb-3">
            Defense Compliance & Testing
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Every production batch undergoes destructive testing at certified independent ballistic laboratories.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {defenseCertifications.map((cert, index) => (
            <motion.div
              key={cert.code}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-[#0A0E18] border border-slate-800 hover:border-emerald-500/30 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-xs px-2.5 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-300 font-bold">
                    {cert.code}
                  </span>
                </div>
                <h3 className="text-base font-bold text-white mb-2">
                  {cert.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {cert.desc}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-800 flex items-center gap-1.5 text-[11px] font-mono text-emerald-400">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Audited & Certified</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Global Logistics & Compliance Note */}
        <div className="mt-10 p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-slate-400 font-mono">
          <div className="flex items-center gap-3">
            <Lock className="w-5 h-5 text-amber-400 shrink-0" />
            <span>
              ITAR & EAR EXPORT CONTROL: Direct government-to-government (G2G) and licensed defense contractor shipments only. End-User Certificate (EUC) required.
            </span>
          </div>
          <div className="flex items-center gap-2 shrink-0 text-cyan-400">
            <Globe className="w-4 h-4" />
            <span>Global Defense Logistics Ready</span>
          </div>
        </div>

      </div>
    </section>
  );
}
