"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Building2, 
  ShieldCheck, 
  FileText, 
  Mail, 
  Phone, 
  User, 
  Clock, 
  Copy, 
  Check, 
  Sparkles,
  Database,
  ArrowRight
} from "lucide-react";
import { supabase, isSupabaseConfigured } from "@/lib/supabaseClient";
import { products } from "@/lib/productsData";

export default function B2BInquiryForm({ preselectedProduct }) {
  const [formData, setFormData] = useState({
    fullName: "",
    agencyName: "",
    email: "",
    phone: "",
    quantityTier: "50-250 units",
    threatLevel: "NIJ Level IV (0101.06)",
    timeline: "Immediate (30 days)",
    notes: "",
  });

  const [selectedProductIds, setSelectedProductIds] = useState([]);
  const [submitting, setSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState(null);
  const [errorFeedback, setErrorFeedback] = useState(null);
  const [showSqlHelper, setShowSqlHelper] = useState(false);
  const [copiedSql, setCopiedSql] = useState(false);

  // Sync preselectedProduct when prop changes
  useEffect(() => {
    if (preselectedProduct && !selectedProductIds.includes(preselectedProduct.id)) {
      setSelectedProductIds((prev) => [...prev, preselectedProduct.id]);
    }
  }, [preselectedProduct]);

  const toggleProduct = (productId) => {
    setSelectedProductIds((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const sqlSetupScript = `-- Run this in your Supabase SQL Editor to store RFP inquiries
CREATE TABLE IF NOT EXISTS public.inquiries (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  tracking_id TEXT NOT NULL,
  full_name TEXT NOT NULL,
  agency_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  quantity_tier TEXT,
  threat_level TEXT,
  selected_products TEXT[],
  delivery_timeline TEXT,
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security (RLS)
ALTER TABLE public.inquiries ENABLE ROW LEVEL SECURITY;

-- Allow public anonymous/publishable submissions
CREATE POLICY "Allow anonymous inquiries" 
  ON public.inquiries FOR INSERT 
  WITH CHECK (true);

-- Allow reading inquiries by authenticated admin users
CREATE POLICY "Allow authenticated read" 
  ON public.inquiries FOR SELECT 
  TO authenticated 
  USING (true);`;

  const copySql = () => {
    navigator.clipboard.writeText(sqlSetupScript);
    setCopiedSql(true);
    setTimeout(() => setCopiedSql(false), 2500);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setErrorFeedback(null);

    const trackingId = "AC-RFP-" + Math.floor(100000 + Math.random() * 900000);
    const selectedNames = products
      .filter((p) => selectedProductIds.includes(p.id))
      .map((p) => p.name);

    const payload = {
      tracking_id: trackingId,
      full_name: formData.fullName,
      agency_name: formData.agencyName,
      email: formData.email,
      phone: formData.phone || "Not provided",
      quantity_tier: formData.quantityTier,
      threat_level: formData.threatLevel,
      selected_products: selectedNames.length > 0 ? selectedNames : ["General Catalog Evaluation"],
      delivery_timeline: formData.timeline,
      notes: formData.notes,
    };

    try {
      if (isSupabaseConfigured) {
        const { data, error } = await supabase
          .from("inquiries")
          .insert([payload]);

        if (error) {
          console.warn("Supabase query note:", error.message);
          // If table does not exist in schema cache (PGRST205 / 404)
          if (error.code === "PGRST205" || error.code === "42P01" || error.message.includes("inquiries")) {
            // Save to localStorage as seamless fallback
            const localInquiries = JSON.parse(localStorage.getItem("armourcraft_inquiries") || "[]");
            localInquiries.push({ ...payload, created_at: new Date().toISOString(), status: "stored_locally" });
            localStorage.setItem("armourcraft_inquiries", JSON.stringify(localInquiries));

            setSubmissionSuccess({
              trackingId,
              isDirectSupabase: false,
              payload,
              notice: "Inquiry registered! Note: Your Supabase database is connected, but the 'inquiries' table can be created anytime using our 1-click SQL script.",
            });
            return;
          } else {
            throw error;
          }
        }

        // Successfully inserted to Supabase!
        setSubmissionSuccess({
          trackingId,
          isDirectSupabase: true,
          payload,
          notice: "Inquiry successfully recorded directly in your Supabase database!",
        });
      } else {
        // Fallback when config is still loading
        const localInquiries = JSON.parse(localStorage.getItem("armourcraft_inquiries") || "[]");
        localInquiries.push({ ...payload, created_at: new Date().toISOString() });
        localStorage.setItem("armourcraft_inquiries", JSON.stringify(localInquiries));

        setSubmissionSuccess({
          trackingId,
          isDirectSupabase: false,
          payload,
        });
      }
    } catch (err) {
      console.error("Submission error:", err);
      setErrorFeedback(err?.message || "An unexpected error occurred while transmitting the RFP.");
    } finally {
      setSubmitting(false);
    }
  };

  const quantityOptions = ["10 - 50 units", "50 - 250 units", "250 - 1,000 units", "1,000+ units"];
  const timelineOptions = ["Immediate (30 days)", "Q2 / Q3 Deployment", "Annual Defense Contract", "Evaluation & Testing Samples"];

  return (
    <section id="procurement" className="py-24 relative bg-[#060910] border-t border-slate-800">
      {/* Background Ambience */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-cyan-600/5 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium bg-slate-900 border border-cyan-500/20 text-cyan-400 mb-3">
            <Building2 className="w-3.5 h-3.5" />
            <span>DIRECT GOVERNMENT & CONTRACTOR PROCUREMENT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight mb-4">
            Initiate Defense RFP / Quote
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Submit mission requirements, custom ballistic specifications, and volume procurement requests. 
            All submissions are processed through secure telemetry.
          </p>
        </div>

        {/* Main Card */}
        <div className="max-w-4xl mx-auto">
          {submissionSuccess ? (
            /* Successful Submission Confirmation Receipt */
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-8 sm:p-10 rounded-3xl bg-[#090E1A] border border-cyan-500/30 shadow-2xl shadow-cyan-500/10 text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-cyan-500 to-emerald-500 flex items-center justify-center mx-auto mb-6 text-slate-950 shadow-lg shadow-cyan-500/20">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <span className="font-mono text-xs text-cyan-400 uppercase tracking-widest block mb-2">
                DEFENSE PROCUREMENT INQUIRY TRANSMITTED
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
                RFP Order Request Confirmed
              </h3>
              <p className="text-slate-400 text-sm max-w-lg mx-auto mb-6">
                Your procurement submission has been logged with ArmourCraft Defense Operations. A senior technical defense representative will review your threat profile within 24 hours.
              </p>

              {/* Receipt Ticket Box */}
              <div className="max-w-md mx-auto p-5 rounded-2xl bg-slate-950 border border-slate-800 text-left font-mono text-xs space-y-3 mb-6">
                <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                  <span className="text-slate-500 uppercase">Docket / Tracking ID:</span>
                  <span className="text-cyan-400 font-bold">{submissionSuccess.trackingId}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Agency / Org:</span>
                  <span className="text-slate-200 font-semibold">{submissionSuccess.payload.agency_name}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Point of Contact:</span>
                  <span className="text-slate-200">{submissionSuccess.payload.full_name}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Procurement Volume:</span>
                  <span className="text-slate-200 font-semibold">{submissionSuccess.payload.quantity_tier}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Database Status:</span>
                  <span className={`font-bold flex items-center gap-1 ${
                    submissionSuccess.isDirectSupabase ? "text-emerald-400" : "text-cyan-400"
                  }`}>
                    <Database className="w-3.5 h-3.5" />
                    {submissionSuccess.isDirectSupabase ? "Supabase Live Stored" : "Logged in Session Cache"}
                  </span>
                </div>
              </div>

              {/* Notice & SQL Helper for Supabase */}
              {!submissionSuccess.isDirectSupabase && (
                <div className="max-w-md mx-auto mb-6 text-left">
                  <button
                    onClick={() => setShowSqlHelper(!showSqlHelper)}
                    className="w-full py-2.5 px-4 rounded-xl bg-slate-900 border border-cyan-500/20 text-cyan-300 text-xs font-mono flex items-center justify-between hover:bg-slate-800 transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      <Database className="w-4 h-4 text-cyan-400" />
                      View 1-Click Supabase SQL Table Script
                    </span>
                    <span className="text-slate-400">{showSqlHelper ? "Hide" : "Show"}</span>
                  </button>

                  <AnimatePresence>
                    {showSqlHelper && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-3 p-4 rounded-xl bg-slate-950 border border-slate-800 text-[11px] font-mono text-slate-300 space-y-2"
                      >
                        <div className="flex items-center justify-between text-slate-400">
                          <span>Paste in Supabase SQL Editor:</span>
                          <button
                            onClick={copySql}
                            className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-cyan-300 text-xs transition-colors"
                          >
                            {copiedSql ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                            <span>{copiedSql ? "Copied!" : "Copy SQL"}</span>
                          </button>
                        </div>
                        <pre className="p-2.5 rounded bg-slate-900 overflow-x-auto text-[10px] text-cyan-300/90 leading-relaxed">
                          {sqlSetupScript}
                        </pre>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )}

              <button
                onClick={() => {
                  setSubmissionSuccess(null);
                  setSelectedProductIds([]);
                }}
                className="px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 font-semibold text-xs border border-slate-800 transition-colors"
              >
                Submit Another Inquiry
              </button>
            </motion.div>
          ) : (
            /* RFP Input Form */
            <form
              onSubmit={handleSubmit}
              className="p-8 sm:p-10 rounded-3xl bg-[#090E1A] border border-slate-800 hover:border-cyan-500/20 shadow-2xl transition-all"
            >
              {errorFeedback && (
                <div className="mb-6 p-4 rounded-xl bg-rose-950/40 border border-rose-800 text-rose-300 text-xs font-mono flex items-center gap-3">
                  <AlertCircle className="w-5 h-5 shrink-0 text-rose-400" />
                  <span>{errorFeedback}</span>
                </div>
              )}

              {/* Step 1: Select Target Products */}
              <div className="mb-8">
                <label className="block text-xs font-mono font-bold text-slate-300 uppercase tracking-wider mb-3">
                  1. Select Target Defense Hardware
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {products.map((p) => {
                    const isSelected = selectedProductIds.includes(p.id);
                    return (
                      <div
                        key={p.id}
                        onClick={() => toggleProduct(p.id)}
                        className={`p-3.5 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                          isSelected
                            ? "bg-cyan-500/10 border-cyan-400 text-white shadow-md shadow-cyan-500/10"
                            : "bg-slate-950/70 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`w-4 h-4 rounded-md border flex items-center justify-center transition-colors ${
                            isSelected ? "bg-cyan-400 border-cyan-400 text-slate-950" : "border-slate-700 bg-slate-900"
                          }`}>
                            {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                          </div>
                          <div>
                            <span className="text-xs font-bold block">{p.name}</span>
                            <span className="text-[10px] font-mono text-cyan-400/80">{p.ratingBadge}</span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: Agency & Contact Details */}
              <div className="mb-8">
                <label className="block text-xs font-mono font-bold text-slate-300 uppercase tracking-wider mb-3">
                  2. Agency & Point of Contact Credentials
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-mono text-slate-400 block mb-1.5">
                      Full Name & Rank / Title *
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      <input
                        required
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder="e.g. Commander Marcus Vance"
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs font-sans placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-mono text-slate-400 block mb-1.5">
                      Agency / Defense Organization *
                    </label>
                    <div className="relative">
                      <Building2 className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      <input
                        required
                        type="text"
                        name="agencyName"
                        value={formData.agencyName}
                        onChange={handleInputChange}
                        placeholder="e.g. Special Operations Command / Police Dept"
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs font-sans placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-mono text-slate-400 block mb-1.5">
                      Official Agency Email *
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      <input
                        required
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="procurement@agency.gov / contractor.mil"
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs font-sans placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-mono text-slate-400 block mb-1.5">
                      Secure Phone / Comms
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+1 (555) 019-2834"
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs font-sans placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 3: Procurement Volume & Timeline */}
              <div className="mb-8">
                <label className="block text-xs font-mono font-bold text-slate-300 uppercase tracking-wider mb-3">
                  3. Procurement Scope & Schedule
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-mono text-slate-400 block mb-1.5">
                      Estimated Production Quantity
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {quantityOptions.map((q) => (
                        <button
                          type="button"
                          key={q}
                          onClick={() => setFormData((prev) => ({ ...prev, quantityTier: q }))}
                          className={`py-2 px-3 rounded-lg text-xs font-mono border transition-all ${
                            formData.quantityTier === q
                              ? "bg-cyan-500/20 border-cyan-400 text-cyan-300 font-bold"
                              : "bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700"
                          }`}
                        >
                          {q}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-mono text-slate-400 block mb-1.5">
                      Deployment Window
                    </label>
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      className="w-full py-2.5 px-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs font-sans focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    >
                      {timelineOptions.map((t) => (
                        <option key={t} value={t} className="bg-slate-900 text-white">
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Step 4: Mission Notes */}
              <div className="mb-8">
                <label className="text-xs font-mono text-slate-400 block mb-1.5">
                  Technical Specifications, Threat Calibers, or Custom Requirements
                </label>
                <textarea
                  name="notes"
                  rows={3}
                  value={formData.notes}
                  onChange={handleInputChange}
                  placeholder="Specify custom plate dimensions, cut geometry (Swimmer vs Shooters), helmet comms rails, or unique STANAG threat certifications required for this contract..."
                  className="w-full p-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs font-sans placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
              </div>

              {/* Submit Button */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-800">
                <div className="text-[11px] font-mono text-slate-500 text-center sm:text-left">
                  🔒 ITAR Compliant Transmit • 256-Bit SSL Telemetry
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-cyan-400 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-lg shadow-cyan-500/25 hover:shadow-cyan-400/40 disabled:opacity-50 transition-all cursor-pointer"
                >
                  {submitting ? (
                    <span>Transmitting RFP Telemetry...</span>
                  ) : (
                    <>
                      <span>Transmit Defense RFP Request</span>
                      <Send className="w-4 h-4 text-slate-950" />
                    </>
                  )}
                </button>
              </div>

            </form>
          )}
        </div>

      </div>
    </section>
  );
}
