"use client";

import { motion } from 'framer-motion';
import { GlassCard } from 'reactbits';

export default function EventCard({ event, onOpen }) {
  return (
    <motion.button
      onClick={() => onOpen(event)}
      className="text-left w-full focus:outline-none"
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      <GlassCard className="p-4 md:p-5 h-full rounded-2xl border border-white/10 hover:border-accentDeep/70 transition">
        <div className="flex items-center justify-between gap-3 mb-3">
          <p className="text-[11px] uppercase tracking-[0.25em] text-gray-400">{event.category}</p>
          <span className="w-2 h-2 rounded-full bg-accentDeep" aria-hidden />
        </div>
        <div className="rounded-xl border border-white/10 bg-black/40 p-3 md:p-4">
          <h3 className="text-base md:text-lg font-semibold text-accentDeep mb-1">{event.title}</h3>
          <p className="text-xs md:text-sm text-gray-300 leading-relaxed">{event.description}</p>
        </div>
      </GlassCard>
    </motion.button>
  );
}
