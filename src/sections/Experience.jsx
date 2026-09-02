import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt, FaCheckCircle, FaCertificate, FaTimes, FaExternalLinkAlt, FaEye } from "react-icons/fa";

const experiences = [
  {
    role: "Data Science Intern",
    company: "Celebal Technologies",
    location: "Jaipur, Rajasthan (Onsite)",
    duration: "May 2026 – August 2026",
    description: [
      "Contributed to the development of end-to-end data science and machine learning solutions on real-world datasets.",
      "Performed exploratory data analysis (EDA), data preprocessing, and advanced feature engineering to prepare robust modeling pipelines.",
      "Built and optimized predictive models using Python, Scikit-learn, LightGBM, and XGBoost.",
      "Gained hands-on experience in MLOps workflows, deploying models using Databricks, MLflow Model Serving, REST APIs, and Microsoft Azure."
    ],
    certificate: {
      title: "Internship Completion Certificate",
      issuer: "Celebal Technologies",
      department: "Data Science Department",
      mentor: "Mr. Digambar Bharat Patil",
      date: "September 2, 2026",
      image: "/assets/certificates/celebal_internship_certificate.jpg",
      pdf: "/assets/certificates/celebal_internship_certificate.pdf",
    }
  }
];

export default function Experience() {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section
      id="experience"
      className="relative py-24 bg-black text-white overflow-hidden w-full flex items-center justify-center border-t border-white/5"
    >
      {/* Background glow effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-gradient-to-r from-purple-500/10 to-cyan-500/5 blur-[120px] animate-pulse" />
      </div>

      <div className="relative z-10 max-w-4xl w-full mx-auto px-6 md:px-10">
        <div className="text-center mb-16">
          <motion.p
            className="text-cyan-400 uppercase tracking-widest text-sm font-semibold mb-2"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Professional Path
          </motion.p>
          <motion.h2
            className="text-3xl sm:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 drop-shadow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Work Experience
          </motion.h2>
        </div>

        {/* Vertical Timeline Container */}
        <div className="relative border-l-2 border-cyan-500/30 ml-4 md:ml-12 pl-8 md:pl-12 space-y-12">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              className="relative"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.2 }}
            >
              {/* Glowing Pulse Dot on the line */}
              <div className="absolute -left-[41px] md:-left-[57px] top-1.5 flex items-center justify-center z-10">
                <span className="animate-ping absolute inline-flex h-6 w-6 rounded-full bg-cyan-400 opacity-30" />
                <div className="relative p-2.5 rounded-full bg-gray-950 border-2 border-cyan-400 text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.4)]">
                  <FaBriefcase className="text-sm md:text-base" />
                </div>
              </div>

              {/* Experience Card */}
              <motion.article
                className="p-6 md:p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md shadow-2xl overflow-hidden group hover:border-cyan-500/30 transition-all duration-300"
                whileHover={{ y: -4, boxShadow: "0 10px 30px rgba(6,182,212,0.1)" }}
              >
                {/* Accent glow on hover */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-cyan-500/10 to-transparent rounded-full blur-[40px] pointer-events-none group-hover:scale-110 transition-transform duration-500" />

                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 border-b border-white/15 pb-4">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors duration-300">
                      {exp.role}
                    </h3>
                    <p className="text-purple-400 text-sm md:text-base font-semibold mt-0.5">
                      {exp.company}
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap gap-3 text-xs md:text-sm text-gray-300 font-medium">
                    <span className="flex items-center gap-1.5 bg-white/5 px-3 py-1 rounded-full border border-white/10">
                      <FaCalendarAlt className="text-cyan-400" /> {exp.duration}
                    </span>
                    <span className="flex items-center gap-1.5 bg-white/5 px-3 py-1 rounded-full border border-white/10">
                      <FaMapMarkerAlt className="text-purple-400" /> {exp.location}
                    </span>
                  </div>
                </div>

                {/* Description Bullet Points */}
                <div className="space-y-3.5">
                  {exp.description.map((bullet, bidx) => (
                    <div key={bidx} className="flex items-start gap-3">
                      <FaCheckCircle className="text-cyan-400 mt-1 flex-shrink-0 text-sm" />
                      <p className="text-gray-300 text-xs md:text-sm leading-relaxed">
                        {bullet}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Certificate Action Addon Button */}
                {exp.certificate && (
                  <div className="pt-5 mt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="font-mono text-[11px] uppercase tracking-wider text-emerald-300">
                        Verified Credential
                      </span>
                    </div>
                    <button
                      onClick={() => setSelectedCert(exp.certificate)}
                      className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 hover:from-cyan-400 hover:to-purple-500 shadow-[0_0_20px_rgba(6,182,212,0.25)] hover:shadow-[0_0_25px_rgba(6,182,212,0.45)] active:scale-95 transition-all duration-300 cursor-pointer"
                      aria-label="View Internship Completion Certificate"
                    >
                      <FaCertificate className="text-amber-300 group-hover:rotate-12 transition-transform duration-300 text-sm" />
                      <span>View Certificate</span>
                      <FaEye className="text-xs opacity-80 group-hover:translate-x-0.5 transition-transform" />
                    </button>
                  </div>
                )}
              </motion.article>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Smooth Certificate Lightbox Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            className="fixed inset-0 z-[250] flex items-center justify-center bg-black/90 backdrop-blur-md p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              className="relative w-full max-w-3xl max-h-[92vh] overflow-hidden rounded-3xl border border-white/15 shadow-2xl bg-[#080519] flex flex-col"
              initial={{ scale: 0.92, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.92, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="p-4 sm:p-5 border-b border-white/10 flex justify-between items-center bg-[#080519] z-10">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                    <FaCertificate size={16} />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-white leading-tight">
                      {selectedCert.title}
                    </h3>
                    <p className="text-xs text-purple-400 font-mono mt-0.5">
                      {selectedCert.issuer} • {selectedCert.department}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 sm:gap-3">
                  <a
                    href={selectedCert.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold text-black bg-cyan-400 hover:bg-cyan-300 transition-all cursor-pointer"
                  >
                    <span>Full View / PDF</span>
                    <FaExternalLinkAlt size={10} />
                  </a>
                  <button
                    onClick={() => setSelectedCert(null)}
                    className="p-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-white/80 hover:text-white transition-colors cursor-pointer"
                    aria-label="Close certificate modal"
                  >
                    <FaTimes size={14} />
                  </button>
                </div>
              </div>

              {/* Certificate Image Viewport */}
              <div className="flex-1 overflow-y-auto p-4 sm:p-6 bg-black/60 flex items-center justify-center min-h-[320px]">
                <img
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  className="max-h-[72vh] w-auto object-contain rounded-xl shadow-2xl border border-white/10"
                  loading="lazy"
                />
              </div>

              {/* Modal Footer */}
              <div className="p-4 sm:px-6 border-t border-white/5 bg-[#080519] flex flex-wrap items-center justify-between gap-2 text-xs text-gray-400 font-mono">
                <span>Under guidance of: <strong className="text-gray-200">{selectedCert.mentor}</strong></span>
                <span className="text-cyan-400">Issued: {selectedCert.date}</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
