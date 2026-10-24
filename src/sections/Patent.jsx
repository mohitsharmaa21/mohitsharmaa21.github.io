import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaShieldAlt,
  FaNetworkWired,
  FaCheckCircle,
  FaAtom,
  FaCar,
  FaExchangeAlt,
  FaColumns,
  FaFileAlt,
  FaTimes,
  FaExternalLinkAlt,
  FaCalendarAlt,
  FaUserFriends,
  FaBuilding,
  FaEye,
  FaBookOpen,
  FaSearchPlus,
  FaSearchMinus,
} from "react-icons/fa";

const patentsData = [
  {
    id: "quantum-ecc",
    isLatest: true,
    badgeText: "🔥 Latest Published Patent (Oct 2026)",
    badgeColor: "from-emerald-500/20 to-cyan-500/20 text-emerald-300 border-emerald-500/40",
    themeGlow: "rgba(16, 185, 129, 0.22)",
    secondaryGlow: "rgba(6, 182, 212, 0.18)",
    accentGradient: "from-emerald-400 via-cyan-400 to-blue-400",
    icon: <FaAtom className="text-emerald-400 text-lg" />,
    tabIcon: <FaAtom className="text-emerald-400" />,
    shortName: "Quantum ECC & WSNs",
    title: "A Quantum Elliptic Curve Cryptography Enabled Secure Communication Protocol for Wireless Sensor Networks",
    applicationNo: "202611097767 A",
    filingDate: "13/08/2026",
    publicationDate: "16/10/2026",
    journal: "The Patent Office Journal No. 42/2026 (Page 132685)",
    applicant: "Manipal University Jaipur",
    inventors: ["Dr Rekha Jain", "Netra Jain", "Mohit Sharma"],
    classification: "H04L 9/08, H04W 12/041, H04L 9/32, H04L 9/30, H04W 12/03",
    domains: ["Wireless Sensor Networks", "IoT", "Mobile Ad-Hoc Networks", "WBANs", "Smart Healthcare", "Smart Grid"],
    description:
      "A next-generation cryptographic system integrating Quantum Elliptic Curve Cryptography (QECC), Quantum Key Sharing (QKS), and dynamic trust-based routing. Evaluates node behavior to generate cumulative trust scores, isolates malicious nodes below predefined thresholds, and ensures eavesdrop-resistant encrypted transmission across wireless sensor networks, IoT, and smart infrastructures.",
    parametersTitle: "Quantum & Security Pillars",
    parameters: [
      {
        name: "Quantum Elliptic Curve Cryptography (QECC)",
        desc: "Provides robust cryptographic protection with high computational efficiency for wireless nodes.",
      },
      {
        name: "Quantum Key Sharing (QKS)",
        desc: "Facilitates eavesdrop-resistant, secure key establishment between communicating nodes.",
      },
      {
        name: "Cumulative Trust Score Evaluation",
        desc: "Assesses packet forwarding behavior, message integrity, delivery consistency, and neighbor recommendations.",
      },
      {
        name: "Malicious Node Isolation & Exclusion",
        desc: "Automatically identifies rogue or compromised nodes and excludes them from secure route selection.",
      },
      {
        name: "Dynamic Network Monitoring",
        desc: "Continuously evaluates throughput, packet delivery ratio, and energy consumption to update routing paths.",
      },
    ],
    previewPdf: "/assets/patents/quantum_cryptography_patent.pdf",
    previewImage: "/assets/patents/quantum_cryptography_patent.jpg",
    hasLocalPreview: true,
  },
  {
    id: "tbndg-vanet",
    isLatest: false,
    badgeText: "Published Indian Patent (2026)",
    badgeColor: "from-purple-500/20 to-pink-500/20 text-purple-300 border-purple-500/40",
    themeGlow: "rgba(168, 85, 247, 0.22)",
    secondaryGlow: "rgba(236, 72, 153, 0.15)",
    accentGradient: "from-purple-400 via-pink-400 to-cyan-400",
    icon: <FaCar className="text-purple-400 text-lg" />,
    tabIcon: <FaCar className="text-purple-400" />,
    shortName: "TBNDG VANETs Security",
    title: "TBNDG: Trust-Based Malicious Node Detection System for Grey-Hole Attacks in Vehicular Ad Hoc Networks (VANETs)",
    applicationNo: "202611039350 A",
    filingDate: "2026",
    publicationDate: "2026",
    journal: "Indian Patent Office Publication",
    applicant: "Manipal University Jaipur",
    inventors: ["Mohit Sharma"],
    classification: "VANETs Network Security, Intelligent Transport Systems",
    domains: ["Vehicular Ad Hoc Networks", "V2V Communication", "Connected Vehicles", "Grey-Hole Attack Mitigation"],
    description:
      "Proposed a comprehensive trust-based mitigation and detection framework for VANETs. By scoring node behavior across multiple dimensions, the system secures vehicle-to-vehicle networks against selective packet dropping (grey-hole) attacks, ensuring safe routing and minimized message delivery delays.",
    parametersTitle: "Trust & Mitigation Parameters",
    parameters: [
      {
        name: "Packet Forwarding Consistency",
        desc: "Monitors packet transmission behavior to identify dropping patterns.",
      },
      {
        name: "Message Integrity Validation",
        desc: "Ensures nodes do not alter routing details or message contents.",
      },
      {
        name: "Dynamic Node Reputation Scoring",
        desc: "Updates reputation ratings in real-time based on cooperative metrics.",
      },
      {
        name: "VANET Network Security Protection",
        desc: "Safeguards vehicle-to-vehicle communication reliability in high-mobility environments.",
      },
      {
        name: "Packet Delivery Improvement",
        desc: "Optimizes throughput and significantly reduces network packet loss.",
      },
    ],
    previewPdf: "https://drive.google.com/file/d/1g0FnakC6et6dqSbFhjkqvDGhjcw97FXW/view?usp=drive_link",
    previewImage: null,
    hasLocalPreview: false,
  },
];

export default function Patent() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [viewMode, setViewMode] = useState("spotlight"); // 'spotlight' | 'split'
  const [modalPatent, setModalPatent] = useState(null);
  const [isModalZoomed, setIsModalZoomed] = useState(false);

  const activePatent = patentsData[activeIdx];

  const handleSwap = () => {
    setActiveIdx((prev) => (prev === 0 ? 1 : 0));
  };

  const handleOpenModal = (patent) => {
    setModalPatent(patent);
    setIsModalZoomed(false);
  };

  return (
    <section
      id="patent"
      className="relative py-24 bg-black text-white overflow-hidden w-full flex flex-col items-center justify-center border-t border-white/5"
    >
      {/* Background ambient neon glow behind the patent showcase */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[150px] transition-all duration-700 pointer-events-none animate-pulse"
          style={{
            background:
              activeIdx === 0
                ? "radial-gradient(circle, rgba(16,185,129,0.14) 0%, rgba(6,182,212,0.08) 60%, transparent 80%)"
                : "radial-gradient(circle, rgba(168,85,247,0.15) 0%, rgba(236,72,153,0.08) 60%, transparent 80%)",
          }}
        />
        <div className="absolute bottom-10 right-1/4 w-[450px] h-[450px] rounded-full bg-gradient-to-tr from-cyan-500/8 via-purple-500/8 to-transparent blur-[130px] pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-6xl w-full mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="text-center mb-10">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-cyan-400 mb-3"
          >
            <span>📜 Intellectual Property</span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-emerald-300 font-semibold">2 Published Indian Patents</span>
          </motion.div>

          <motion.h2
            className="text-3xl sm:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-400 drop-shadow pb-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Patent Publications
          </motion.h2>
          <motion.p
            className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto mt-2"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            viewport={{ once: true }}
          >
            Official patent disclosures filed with and published by the Indian Patent Office, Government of India.
          </motion.p>
        </div>

        {/* Interactive Controls Bar: Swap / Tabs & View Mode Switcher */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 bg-white/[0.03] border border-white/10 p-2.5 sm:p-3 rounded-2xl backdrop-blur-md">
          {/* Patent Select Tabs / Quick Switch */}
          <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto">
            {patentsData.map((p, idx) => {
              const isActive = activeIdx === idx;
              return (
                <button
                  key={p.id}
                  onClick={() => {
                    setActiveIdx(idx);
                    if (viewMode === "split") setViewMode("spotlight");
                  }}
                  className={`relative flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer whitespace-nowrap ${
                    isActive
                      ? "text-white bg-white/10 border border-white/20 shadow-lg"
                      : "text-gray-400 hover:text-white hover:bg-white/5 border border-transparent"
                  }`}
                >
                  {p.tabIcon}
                  <span>{p.shortName}</span>
                  {p.isLatest && (
                    <span className="px-1.5 py-0.5 text-[9px] font-bold rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 animate-pulse">
                      NEW
                    </span>
                  )}
                  {isActive && (
                    <motion.div
                      layoutId="activePatentIndicator"
                      className="absolute inset-0 rounded-xl border border-cyan-400/50 bg-gradient-to-r from-emerald-500/15 via-cyan-500/15 to-purple-500/10 pointer-events-none"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Action Buttons: Swap Button & View Mode Toggle */}
          <div className="flex items-center gap-2 ml-auto">
            <button
              onClick={handleSwap}
              className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold bg-white/5 hover:bg-white/10 text-cyan-300 border border-cyan-500/30 hover:border-cyan-400 transition-all duration-300 cursor-pointer active:scale-95 shadow-sm"
              title="Swap between Patent 1 and Patent 2"
            >
              <FaExchangeAlt className="text-cyan-400 text-xs" />
              <span>Swap Patent</span>
            </button>

            <div className="hidden sm:flex items-center bg-black/40 border border-white/10 p-1 rounded-xl">
              <button
                onClick={() => setViewMode("spotlight")}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
                  viewMode === "spotlight"
                    ? "bg-white/15 text-white shadow-sm font-semibold"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                <span>Spotlight</span>
              </button>
              <button
                onClick={() => setViewMode("split")}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
                  viewMode === "split"
                    ? "bg-white/15 text-white shadow-sm font-semibold"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                <FaColumns className="text-xs" />
                <span>Split Half-Window</span>
              </button>
            </div>
          </div>
        </div>

        {/* View Mode 1: SPOTLIGHT VIEW (Focus on selected patent with full rich layout) */}
        {viewMode === "spotlight" && (
          <AnimatePresence mode="wait">
            <motion.div
              key={activePatent.id}
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.98 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="relative rounded-3xl border bg-white/[0.04] backdrop-blur-xl p-6 sm:p-10 md:p-12 shadow-2xl overflow-hidden group"
              style={{
                borderColor: activePatent.isLatest ? "rgba(16, 185, 129, 0.35)" : "rgba(168, 85, 247, 0.3)",
                boxShadow: `0 0 60px ${activePatent.themeGlow}`,
              }}
            >
              {/* Corner Glow Accents */}
              <div
                className="absolute -right-24 -top-24 w-64 h-64 rounded-full blur-[80px] pointer-events-none transition-transform duration-700 group-hover:scale-125"
                style={{ background: activePatent.themeGlow }}
              />
              <div
                className="absolute -left-24 -bottom-24 w-64 h-64 rounded-full blur-[80px] pointer-events-none transition-transform duration-700 group-hover:scale-125"
                style={{ background: activePatent.secondaryGlow }}
              />

              <div className="flex flex-col lg:flex-row gap-10 items-start justify-between relative z-10">
                {/* Left Side: Metadata, Title, Abstract, Buttons */}
                <div className="w-full lg:w-3/5 flex flex-col justify-between">
                  <div>
                    {/* Badges Bar */}
                    <div className="flex flex-wrap items-center gap-2.5 mb-5">
                      <span
                        className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold border ${activePatent.badgeColor}`}
                      >
                        {activePatent.icon}
                        <span>{activePatent.badgeText}</span>
                      </span>

                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300">
                        <FaBuilding className="text-gray-400 text-[10px]" />
                        <span>{activePatent.applicant}</span>
                      </span>
                    </div>

                    {/* Patent Title */}
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white mb-4 leading-tight tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-cyan-200 transition-all duration-300">
                      {activePatent.title}
                    </h3>

                    {/* Metadata Grid Cards */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-3 text-xs mb-6">
                      <div className="bg-white/5 p-3 rounded-xl border border-white/10">
                        <span className="text-[10px] text-gray-400 block font-medium uppercase tracking-wider">
                          Application No
                        </span>
                        <span className="font-mono font-bold text-cyan-300 text-xs sm:text-sm">
                          {activePatent.applicationNo}
                        </span>
                      </div>

                      <div className="bg-white/5 p-3 rounded-xl border border-white/10">
                        <span className="text-[10px] text-gray-400 block font-medium uppercase tracking-wider">
                          Publication Date
                        </span>
                        <span className="font-semibold text-emerald-300 text-xs sm:text-sm flex items-center gap-1.5 mt-0.5">
                          <FaCalendarAlt className="text-[10px]" />
                          {activePatent.publicationDate}
                        </span>
                      </div>

                      <div className="col-span-2 sm:col-span-1 bg-white/5 p-3 rounded-xl border border-white/10">
                        <span className="text-[10px] text-gray-400 block font-medium uppercase tracking-wider">
                          Inventors
                        </span>
                        <span className="text-gray-200 text-xs font-medium line-clamp-1 mt-0.5" title={activePatent.inventors.join(", ")}>
                          {activePatent.inventors.join(", ")}
                        </span>
                      </div>
                    </div>

                    {/* Journal Details */}
                    {activePatent.journal && (
                      <div className="text-[11px] font-mono text-gray-400 mb-4 bg-black/30 px-3 py-1.5 rounded-lg border border-white/5 flex items-center gap-2">
                        <FaBookOpen className="text-cyan-400 text-xs flex-shrink-0" />
                        <span className="truncate">{activePatent.journal}</span>
                      </div>
                    )}

                    {/* Patent Abstract / Summary */}
                    <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-6 bg-white/[0.02] p-4 rounded-2xl border border-white/5">
                      {activePatent.description}
                    </p>

                    {/* Target Application Domains */}
                    <div className="flex flex-wrap gap-1.5 mb-7">
                      {activePatent.domains.map((dom, dIdx) => (
                        <span
                          key={dIdx}
                          className="px-2.5 py-1 rounded-md text-[10px] font-medium bg-white/5 border border-white/10 text-gray-300"
                        >
                          #{dom}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions / Preview Buttons */}
                  <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-white/10">
                    {activePatent.hasLocalPreview ? (
                      <motion.button
                        onClick={() => handleOpenModal(activePatent)}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-xs sm:text-sm text-white border border-emerald-500/40 cursor-pointer shadow-lg relative overflow-hidden group/btn"
                        style={{
                          background: "linear-gradient(135deg, rgba(16,185,129,0.3), rgba(6,182,212,0.2))",
                          boxShadow: "0 0 25px rgba(16,185,129,0.25)",
                        }}
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.97 }}
                      >
                        <FaEye className="text-emerald-300 text-sm" />
                        <span>Preview Patent Document</span>
                      </motion.button>
                    ) : (
                      <motion.a
                        href={activePatent.previewPdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-xs sm:text-sm text-white border border-purple-500/40 cursor-pointer shadow-lg relative overflow-hidden group/btn"
                        style={{
                          background: "linear-gradient(135deg, rgba(168,85,247,0.3), rgba(6,182,212,0.15))",
                          boxShadow: "0 0 25px rgba(168,85,247,0.25)",
                        }}
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.97 }}
                      >
                        <FaExternalLinkAlt className="text-purple-300 text-xs" />
                        <span>Preview Patent Document</span>
                      </motion.a>
                    )}

                    {activePatent.hasLocalPreview && (
                      <a
                        href={activePatent.previewPdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-3 rounded-xl text-xs sm:text-sm font-semibold text-gray-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
                      >
                        <FaFileAlt className="text-cyan-400 text-xs" />
                        <span>Open PDF ↗</span>
                      </a>
                    )}

                    {/* Quick Swap Hint */}
                    <button
                      onClick={handleSwap}
                      className="ml-auto inline-flex items-center gap-1.5 text-xs text-gray-400 hover:text-cyan-300 transition-colors cursor-pointer py-2 px-3 rounded-lg hover:bg-white/5"
                    >
                      <FaExchangeAlt className="text-[10px]" />
                      <span>Switch to {activeIdx === 0 ? "TBNDG VANET" : "Quantum ECC"}</span>
                    </button>
                  </div>
                </div>

                {/* Right Side: Trust & Innovation Parameters List */}
                <div className="w-full lg:w-2/5 flex flex-col gap-3">
                  <div className="flex items-center justify-between pb-2 border-b border-white/10">
                    <h4 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                      <FaShieldAlt
                        className={activePatent.isLatest ? "text-emerald-400" : "text-purple-400"}
                      />
                      <span>{activePatent.parametersTitle}</span>
                    </h4>
                    <span className="text-[10px] font-mono text-gray-400 bg-white/5 px-2 py-0.5 rounded">
                      5 Highlights
                    </span>
                  </div>

                  <div className="space-y-2.5">
                    {activePatent.parameters.map((param, index) => (
                      <motion.div
                        key={index}
                        className="flex gap-3 bg-black/40 p-3 sm:p-3.5 rounded-xl border border-white/5 hover:border-white/20 transition-all duration-300 group/param"
                        whileHover={{ x: 4 }}
                        transition={{ type: "spring", stiffness: 300, damping: 15 }}
                      >
                        <FaCheckCircle
                          className={`mt-1 flex-shrink-0 text-sm ${
                            activePatent.isLatest ? "text-emerald-400" : "text-cyan-400"
                          }`}
                        />
                        <div>
                          <h5 className="font-semibold text-xs sm:text-sm text-white group-hover/param:text-cyan-300 transition-colors">
                            {param.name}
                          </h5>
                          <p className="text-[11px] sm:text-xs text-gray-400 mt-0.5 leading-relaxed">
                            {param.desc}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Inventors Box */}
                  <div className="mt-2 p-3.5 rounded-xl bg-gradient-to-r from-white/[0.04] to-transparent border border-white/10">
                    <div className="flex items-center gap-2 text-xs font-semibold text-gray-300 mb-1.5">
                      <FaUserFriends className="text-cyan-400 text-xs" />
                      <span>Co-Inventors</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {activePatent.inventors.map((inv, i) => (
                        <span
                          key={i}
                          className={`text-xs px-2.5 py-0.5 rounded-md font-medium ${
                            inv === "Mohit Sharma"
                              ? "bg-cyan-500/20 text-cyan-200 border border-cyan-500/40 font-bold"
                              : "bg-white/5 text-gray-300 border border-white/10"
                          }`}
                        >
                          {inv === "Mohit Sharma" ? "★ Mohit Sharma" : inv}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        )}

        {/* View Mode 2: SPLIT HALF-WINDOW VIEW (Side-by-side comparison of both patents) */}
        {viewMode === "split" && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {patentsData.map((p) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative rounded-3xl border bg-white/[0.04] backdrop-blur-xl p-6 sm:p-8 flex flex-col justify-between shadow-xl overflow-hidden group"
                style={{
                  borderColor: p.isLatest ? "rgba(16, 185, 129, 0.4)" : "rgba(168, 85, 247, 0.3)",
                  boxShadow: `0 0 30px ${p.themeGlow}`,
                }}
              >
                <div>
                  {/* Badge */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span
                      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold border ${p.badgeColor}`}
                    >
                      {p.icon}
                      <span>{p.isLatest ? "🔥 LATEST (OCT 2026)" : "PUBLISHED (2026)"}</span>
                    </span>
                    <span className="font-mono text-[11px] text-gray-400 bg-white/5 px-2 py-0.5 rounded border border-white/10">
                      App: {p.applicationNo}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-white mb-3 leading-snug group-hover:text-cyan-300 transition-colors">
                    {p.title}
                  </h3>

                  <div className="text-[11px] text-gray-400 mb-4 flex flex-wrap gap-2">
                    <span className="bg-white/5 px-2 py-0.5 rounded border border-white/10">
                      📅 {p.publicationDate}
                    </span>
                    <span className="bg-white/5 px-2 py-0.5 rounded border border-white/10">
                      🏛️ {p.applicant}
                    </span>
                  </div>

                  <p className="text-xs text-gray-300 leading-relaxed mb-5 line-clamp-4">
                    {p.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider block">
                      Core Pillars:
                    </span>
                    {p.parameters.slice(0, 3).map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-gray-300">
                        <FaCheckCircle
                          className={`mt-0.5 text-xs flex-shrink-0 ${
                            p.isLatest ? "text-emerald-400" : "text-purple-400"
                          }`}
                        />
                        <span className="font-medium text-white">{item.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-2">
                  {p.hasLocalPreview ? (
                    <button
                      onClick={() => handleOpenModal(p)}
                      className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-emerald-500/20 border border-emerald-500/40 hover:bg-emerald-500/30 transition-all flex items-center gap-1.5 cursor-pointer"
                    >
                      <FaEye size={12} />
                      <span>Preview Patent Document</span>
                    </button>
                  ) : (
                    <a
                      href={p.previewPdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-purple-500/20 border border-purple-500/40 hover:bg-purple-500/30 transition-all flex items-center gap-1.5"
                    >
                      <FaExternalLinkAlt size={11} />
                      <span>Preview Patent Document</span>
                    </a>
                  )}

                  <span className="text-[11px] text-gray-400">
                    Mohit Sharma (Inventor)
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* Official Patent Document Lightbox Modal Viewer */}
      <AnimatePresence>
        {modalPatent && (
          <motion.div
            className="fixed inset-0 z-[300] flex items-center justify-center bg-black/90 backdrop-blur-md p-2 sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setModalPatent(null)}
          >
            <motion.div
              className="relative w-full max-w-4xl max-h-[94vh] overflow-hidden rounded-3xl border border-white/15 shadow-2xl bg-[#090615] flex flex-col"
              initial={{ scale: 0.92, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.92, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-3.5 sm:p-5 border-b border-white/10 bg-white/[0.03]">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                    <FaAtom />
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-white leading-tight">
                      Official Patent Document
                    </h4>
                    <p className="text-[11px] text-gray-400 font-mono">
                      Application No: {modalPatent.applicationNo} • Published: {modalPatent.publicationDate}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setIsModalZoomed(!isModalZoomed)}
                    className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold text-gray-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-all cursor-pointer"
                    title={isModalZoomed ? "Fit document to window" : "Zoom to full document width"}
                  >
                    {isModalZoomed ? <FaSearchMinus size={11} /> : <FaSearchPlus size={11} />}
                    <span>{isModalZoomed ? "Fit View" : "Full Zoom"}</span>
                  </button>

                  <a
                    href={modalPatent.previewPdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold text-white bg-cyan-500/20 border border-cyan-500/40 hover:bg-cyan-500/30 transition-all"
                  >
                    <FaFileAlt size={11} />
                    <span>Open PDF ↗</span>
                  </a>

                  <button
                    onClick={() => setModalPatent(null)}
                    className="p-2.5 rounded-full bg-white/5 hover:bg-white/15 text-gray-300 hover:text-white transition-all cursor-pointer"
                  >
                    <FaTimes size={14} />
                  </button>
                </div>
              </div>

              {/* Modal Scrollable Image Viewport - starts cleanly at top (y=0) without cutoffs */}
              <div className="overflow-y-auto max-h-[calc(94vh-130px)] p-2 sm:p-5 bg-black/85 flex flex-col items-center justify-start">
                {modalPatent.previewImage ? (
                  <img
                    src={modalPatent.previewImage}
                    alt={modalPatent.title}
                    className={`${
                      isModalZoomed
                        ? "w-full max-w-3xl h-auto"
                        : "max-w-full max-h-[72vh] sm:max-h-[76vh] w-auto h-auto object-contain"
                    } rounded-xl shadow-2xl border border-white/10 mx-auto block transition-all duration-200`}
                    loading="eager"
                  />
                ) : (
                  <p className="text-gray-400 text-sm py-8">Preview document link is external.</p>
                )}
              </div>

              {/* Modal Footer */}
              <div className="p-3 sm:p-4 border-t border-white/10 bg-[#070512] flex items-center justify-between text-xs text-gray-400">
                <span className="truncate mr-2">
                  {modalPatent.journal}
                </span>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setIsModalZoomed(!isModalZoomed)}
                    className="sm:hidden text-emerald-400 font-semibold"
                  >
                    {isModalZoomed ? "Fit View" : "Full Zoom"}
                  </button>
                  <a
                    href={modalPatent.previewPdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-300 font-semibold hover:underline"
                  >
                    Download PDF ↗
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
