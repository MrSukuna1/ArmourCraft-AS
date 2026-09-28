"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Shield, 
  Layers, 
  Weight, 
  FileText, 
  ArrowRight, 
  CheckCircle2, 
  Plus, 
  Sparkles,
  Zap,
  Info
} from "lucide-react";
import { products } from "@/lib/productsData";

export default function ProductGrid({ onSelectProduct, onAddToQuote }) {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", label: "All Defense Systems" },
    { id: "plates", label: "Body Armor Plates" },
    { id: "helmets", label: "Combat Helmets" },
    { id: "vests", label: "Tactical Vests" },
    { id: "shields", label: "Assault Shields" },
  ];

  const filteredProducts = selectedCategory === "all"
    ? products
    : products.filter((p) => p.category === selectedCategory);

  return (
    <section id="products" className="py-20 lg:py-28 relative bg-[#070A11] border-t border-b border-slate-800/80">
      {/* Background Accent Gradients */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-600/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-indigo-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-slate-900 border border-cyan-500/20 text-cyan-400 mb-3">
              <Shield className="w-3.5 h-3.5" />
              <span>TACTICAL ARMOR CATALOGUE // MIL-SPEC</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight">
              Defensive Platforms & Hardware
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl">
              Engineered with advanced ceramics, monolithic UHMWPE, and laser-cut composites for maximum survivability.
            </p>
          </div>

          {/* Interactive Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? "bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/25 font-bold"
                    : "bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="group relative flex flex-col justify-between rounded-2xl bg-[#0B0F19] border border-slate-800 hover:border-cyan-500/40 p-4 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                {/* Product Image Area */}
                <div>
                  <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-slate-950 border border-slate-800/80 mb-4">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Protection Badge */}
                    <div className="absolute top-3 left-3">
                      <span className="inline-flex items-center px-2.5 py-1 rounded-md text-[10px] font-mono font-bold bg-slate-950/85 backdrop-blur-md text-cyan-300 border border-cyan-500/30 shadow-md">
                        {product.ratingBadge}
                      </span>
                    </div>

                    {/* Stock Status */}
                    <div className="absolute top-3 right-3">
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-mono bg-emerald-950/80 text-emerald-400 border border-emerald-500/30">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                        In Production
                      </span>
                    </div>
                  </div>

                  {/* Card Title & Info */}
                  <div className="mb-4">
                    <div className="text-[11px] font-mono text-cyan-400/80 uppercase tracking-wider mb-1">
                      {product.categoryLabel}
                    </div>
                    <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug">
                      {product.name}
                    </h3>
                    <p className="text-xs text-slate-400 mt-1 line-clamp-2">
                      {product.tagline}
                    </p>
                  </div>

                  {/* Key Specifications Grid */}
                  <div className="grid grid-cols-2 gap-2 p-2.5 rounded-xl bg-slate-950/70 border border-slate-800/70 font-mono text-[11px] mb-4">
                    <div className="text-slate-400 flex flex-col">
                      <span className="text-[9px] text-slate-500 uppercase">Weight</span>
                      <span className="font-semibold text-slate-200 truncate">{product.weight}</span>
                    </div>
                    <div className="text-slate-400 flex flex-col">
                      <span className="text-[9px] text-slate-500 uppercase">Profile</span>
                      <span className="font-semibold text-slate-200 truncate">{product.thickness}</span>
                    </div>
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="flex flex-col gap-2 pt-2 border-t border-slate-800/60">
                  <button
                    onClick={() => onSelectProduct(product)}
                    className="w-full py-2.5 px-3 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-slate-500 text-xs font-semibold text-slate-200 flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                  >
                    <Info className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Technical Specs & Tests</span>
                  </button>

                  <button
                    onClick={() => onAddToQuote(product)}
                    className="w-full py-2.5 px-3 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 hover:border-cyan-500/50 text-xs font-bold text-cyan-300 flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                  >
                    <Plus className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Include in B2B Quote</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
