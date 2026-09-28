"use client";

import Image from "next/image";
import { Shield, Radio, ArrowUp, Lock, Globe, Mail, Phone, ExternalLink } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#05070D] border-t border-slate-800 text-slate-400 font-sans pt-16 pb-12 overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-cyan-600/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          
          {/* Column 1: Brand & Identity */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/20 via-slate-900 to-indigo-600/30 border border-cyan-500/30 p-1.5 flex items-center justify-center">
                <Image
                  src="/brand/logo.png"
                  alt="ArmourCraft Logo"
                  width={34}
                  height={34}
                  className="object-contain"
                />
              </div>
              <div>
                <span className="font-extrabold text-xl tracking-wider text-white uppercase flex items-center gap-1.5">
                  Armour<span className="text-cyan-400">Craft</span>
                </span>
                <span className="text-[10px] tracking-[0.2em] font-mono text-slate-500 block uppercase">
                  Defense Ballistic Architecture
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed mb-6 max-w-sm">
              ArmourCraft engineers, validates, and deploys next-generation ballistic defense systems, multi-curve ceramic armor plates, and tactical gear for government defense forces and law enforcement agencies.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/90 border border-cyan-500/20 text-cyan-300 text-xs font-mono">
              <Radio className="w-3 h-3 text-cyan-400 animate-pulse" />
              <span>SUPABASE SECURE TELEMETRY // ACTIVE</span>
            </div>
          </div>

          {/* Column 2: Tactical Hardware */}
          <div>
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-cyan-400 pl-2">
              Ballistic Hardware
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#products" className="hover:text-cyan-300 transition-colors">CP-IV Ceramic Plates</a></li>
              <li><a href="#products" className="hover:text-cyan-300 transition-colors">FAST-Ops Combat Helmets</a></li>
              <li><a href="#products" className="hover:text-cyan-300 transition-colors">Aegis-QR Plate Carriers</a></li>
              <li><a href="#products" className="hover:text-cyan-300 transition-colors">Vanguard-X Assault Shields</a></li>
              <li><a href="#products" className="hover:text-cyan-300 transition-colors">Custom Vehicle Armor</a></li>
            </ul>
          </div>

          {/* Column 3: Defense Engineering */}
          <div>
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-cyan-400 pl-2">
              Engineering & Tech
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#technology" className="hover:text-cyan-300 transition-colors">Silicon Carbide Ceramics</a></li>
              <li><a href="#technology" className="hover:text-cyan-300 transition-colors">Tensile UHMWPE Matrices</a></li>
              <li><a href="#technology" className="hover:text-cyan-300 transition-colors">Anti-Spall Polyurea Encapsulation</a></li>
              <li><a href="#certifications" className="hover:text-cyan-300 transition-colors">NIJ 0101.06 Protocols</a></li>
              <li><a href="#certifications" className="hover:text-cyan-300 transition-colors">NATO STANAG 2920 Tests</a></li>
            </ul>
          </div>

          {/* Column 4: Procurement */}
          <div>
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-cyan-400 pl-2">
              Procurement & RFP
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#procurement" className="hover:text-cyan-300 transition-colors">Direct Defense RFP</a></li>
              <li><a href="#procurement" className="hover:text-cyan-300 transition-colors">Agency Contract Tenders</a></li>
              <li><a href="#procurement" className="hover:text-cyan-300 transition-colors">Ballistic Sample Testing</a></li>
              <li><a href="#procurement" className="hover:text-cyan-300 transition-colors">ITAR EUC Documentation</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Compliance & Copyright Bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <p>© {new Date().getFullYear()} ArmourCraft Industries Inc. All rights reserved. Defense & Ballistic Systems.</p>
          
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-slate-400">
              <Lock className="w-3.5 h-3.5 text-amber-400" />
              <span>ITAR Registered Entity</span>
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors flex items-center gap-1"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
