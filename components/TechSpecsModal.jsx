"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { 
  X, 
  ShieldCheck, 
  Layers, 
  Crosshair, 
  Weight, 
  CheckCircle2, 
  AlertCircle, 
  FileCheck, 
  ArrowRight,
  Sparkles
} from "lucide-react";

export default function TechSpecsModal({ product, onClose, onAddToQuote }) {
  if (!product) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-3xl rounded-3xl bg-[#090D16] border border-cyan-500/30 shadow-2xl shadow-cyan-500/10 overflow-hidden z-10 my-8"
        >
          {/* Modal Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/80">
            <div className="flex items-center gap-2">
              <span className="p-1.5 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                <FileCheck className="w-4 h-4" />
              </span>
              <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider">
                TECHNICAL BALLISTIC DATA SHEET
              </span>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Body */}
          <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto space-y-6">
            
            {/* Top row: Image & General Info */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
              <div className="sm:col-span-5 relative aspect-square rounded-2xl overflow-hidden bg-slate-950 border border-slate-800">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-slate-950/90 text-cyan-300 font-mono text-[10px] border border-cyan-500/30">
                  {product.ratingBadge}
                </div>
              </div>

              <div className="sm:col-span-7 flex flex-col justify-center">
                <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-1">
                  {product.categoryLabel}
                </div>
                <h3 className="text-2xl font-black text-white leading-tight mb-2">
                  {product.name}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-4">
                  {product.tagline}
                </p>

                {/* Specs quick grid */}
                <div className="grid grid-cols-2 gap-2.5 text-xs font-mono">
                  <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800">
                    <span className="text-[10px] text-slate-500 block uppercase">Protection Rating</span>
                    <span className="text-cyan-300 font-bold">{product.protectionLevel}</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800">
                    <span className="text-[10px] text-slate-500 block uppercase">System Mass</span>
                    <span className="text-white font-bold">{product.weight}</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800">
                    <span className="text-[10px] text-slate-500 block uppercase">Profile Thickness</span>
                    <span className="text-white font-bold">{product.thickness}</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800">
                    <span className="text-[10px] text-slate-500 block uppercase">Spall Coating</span>
                    <span className="text-emerald-400 font-bold truncate block">{product.spallCoating}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Ballistic Threat Defeat Matrix */}
            <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5">
              <h4 className="text-xs font-mono font-bold text-slate-300 uppercase tracking-wider flex items-center gap-2 mb-3">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Verified Ballistic Threat Defeat Capabilities</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {product.testedThreats.map((threat, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-2.5 p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-300 font-mono"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{threat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tactical Highlights */}
            <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5">
              <h4 className="text-xs font-mono font-bold text-slate-300 uppercase tracking-wider flex items-center gap-2 mb-3">
                <Layers className="w-4 h-4 text-cyan-400" />
                <span>Engineering Materials & Durability</span>
              </h4>
              <ul className="space-y-2">
                {product.highlights.map((highlight, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0 mt-1.5" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Modal Footer CTA */}
          <div className="px-6 py-4 border-t border-slate-800 bg-slate-950 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs font-mono text-slate-400 text-center sm:text-left">
              ITAR Compliant • Defense & Law Enforcement Procurement
            </span>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={onClose}
                className="flex-1 sm:flex-initial px-4 py-2.5 rounded-xl bg-slate-900 text-slate-300 hover:text-white text-xs font-semibold border border-slate-800 transition-colors"
              >
                Close Sheet
              </button>
              <button
                onClick={() => {
                  onAddToQuote(product);
                  onClose();
                }}
                className="flex-1 sm:flex-initial px-6 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-slate-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20"
              >
                <span>Request B2B Quote</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
