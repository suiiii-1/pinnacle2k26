"use client";

import { motion } from 'framer-motion';

const sponsors = [
  {
    name: 'Easwari Engineering College',
    logo: '/EASWARI ENGINEERING COLLEGE_20260123_193341_0000.png',
  },
  {
    name: 'IT Student Association',
    logo: '/IT Student association logo.jpg.jpeg',
  },
];

export default function Sponsors() {
  return (
    <section id="sponsors" className="py-16 md:py-20 section-gradient">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-10 space-y-3">
          <p className="text-accent font-semibold text-xs uppercase tracking-[0.25em]">Partners</p>
          <h2 className="text-3xl md:text-4xl font-bold text-text">Sponsors & Partners</h2>
          <p className="text-gray-300">Thank you to the teams backing innovation at Pinnacle'26.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {sponsors.map((sponsor) => (
            <motion.div
              key={sponsor.name}
              className="glass-card rounded-xl border border-white/10 p-4 flex items-center justify-center"
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 220, damping: 18 }}
            >
              <img
                src={sponsor.logo}
                alt={sponsor.name}
                className="h-16 object-contain w-full filter grayscale hover:grayscale-0 transition"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
