"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import TechSpecsModal from "@/components/TechSpecsModal";
import Technology from "@/components/Technology";
import Certifications from "@/components/Certifications";
import B2BInquiryForm from "@/components/B2BInquiryForm";
import Footer from "@/components/Footer";

export default function Home() {
  const [modalProduct, setModalProduct] = useState(null);
  const [quoteProduct, setQuoteProduct] = useState(null);

  const handleOpenInquiry = () => {
    const el = document.getElementById("procurement");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleAddToQuote = (product) => {
    setQuoteProduct(product);
    const el = document.getElementById("procurement");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-[#080B11] text-slate-100 flex flex-col font-sans selection:bg-cyan-500 selection:text-slate-950">
      {/* Tactical Navbar */}
      <Navbar onOpenInquiry={handleOpenInquiry} />

      {/* Hero Section with Telemetry & Live Deflection Stats */}
      <Hero onOpenInquiry={handleOpenInquiry} />

      {/* Interactive Tactical Product Grid */}
      <ProductGrid 
        onSelectProduct={(product) => setModalProduct(product)}
        onAddToQuote={handleAddToQuote}
      />

      {/* Materials Science & Ballistic Tech Pillars */}
      <Technology />

      {/* Defense Certifications & Standards Compliance */}
      <Certifications />

      {/* Dynamic B2B RFP & Procurement Form with Supabase Integration */}
      <B2BInquiryForm preselectedProduct={quoteProduct} />

      {/* High-End Enterprise Defense Footer */}
      <Footer />

      {/* Deep-Dive Tech Specs Modal */}
      <TechSpecsModal
        product={modalProduct}
        onClose={() => setModalProduct(null)}
        onAddToQuote={handleAddToQuote}
      />
    </div>
  );
}
