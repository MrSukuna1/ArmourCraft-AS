"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, Menu, X, ArrowRight, Radio, ExternalLink } from "lucide-react";

export default function Navbar({ onOpenInquiry }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Products & Armor", href: "#products" },
    { name: "Ballistic Tech", href: "#technology" },
    { name: "Standards & Certifications", href: "#certifications" },
    { name: "B2B Procurement", href: "#procurement" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-cyan-500/10 bg-[#080B11]/85 backdrop-blur-xl transition-all">
      {/* Top micro-bar */}
      <div className="hidden md:flex items-center justify-between px-6 py-1 bg-slate-950/80 border-b border-slate-900 text-[11px] font-mono text-slate-400">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5 text-cyan-400">
            <Radio className="w-3 h-3 animate-pulse text-cyan-400" />
            SECURE DEFENSE SUPPLY NETWORK // ACTIVE
          </span>
          <span className="text-slate-600">|</span>
          <span>NIJ 0101.06 & STANAG 2920 CERTIFIED</span>
        </div>
        <div className="flex items-center gap-4">
          <span>ITAR & EAR COMPLIANT</span>
          <span className="text-slate-600">|</span>
          <span className="text-emerald-400 font-semibold flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            SUPABASE TELEMETRY ONLINE
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/20 via-slate-900 to-indigo-600/30 border border-cyan-500/30 p-1.5 flex items-center justify-center shadow-lg shadow-cyan-500/10 group-hover:border-cyan-400/60 transition-all">
            <Image
              src="/brand/logo.png"
              alt="ArmourCraft Logo"
              width={36}
              height={36}
              className="object-contain filter drop-shadow-[0_0_8px_rgba(0,240,255,0.4)]"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-xl tracking-wider text-white uppercase group-hover:text-cyan-300 transition-colors flex items-center gap-1.5">
              Armour<span className="text-cyan-400">Craft</span>
            </span>
            <span className="text-[10px] tracking-[0.2em] font-mono text-slate-400 uppercase">
              Ballistic Architecture
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-300">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-cyan-400 transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-cyan-400 hover:after:w-full after:transition-all"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <button
            onClick={() => onOpenInquiry?.()}
            className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-cyan-500 via-cyan-400 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-lg shadow-cyan-500/25 transition-all cursor-pointer hover:shadow-cyan-400/40"
          >
            <span>Request Defense RFP</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="lg:hidden flex items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-b border-slate-800 bg-[#080B11]/95 px-6 py-6 backdrop-blur-xl"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-medium text-slate-300 hover:text-cyan-400"
                >
                  {link.name}
                </a>
              ))}
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenInquiry?.();
                }}
                className="mt-2 w-full py-3 rounded-lg bg-cyan-400 text-slate-950 font-bold text-sm uppercase tracking-wider text-center"
              >
                Request Defense RFP
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
