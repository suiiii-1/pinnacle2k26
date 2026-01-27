"use client";

import { motion } from 'framer-motion';
import { LiquidEther, Button } from 'reactbits';
import { ENTRY_FORM_LINK } from '../data/events';

const heroVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

function scrollToId(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export default function HomeHero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <LiquidEther />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background" aria-hidden />
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center space-y-6 pt-0">
        <div className="flex items-center justify-between gap-10 md:gap-24 lg:gap-40">
          <img
            src="/EASWARI-PONGAL.png"
            alt="Easwari Engineering College"
            className="w-32 sm:w-36 md:w-60 lg:w-52 object-contain"
          />
          <img
            src="/it-stud.png"
            alt="IT Student Association"
            className="w-24 sm:w-28 md:w-36 lg:w-40 object-contain"
          />
        </div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={heroVariants}
          className="space-y-1"
        >
          <div className="flex flex-col items-center gap-3">
            <img
              src="/logo.png"
              alt="Pinnacle 26 Logo"
              className="w-56 sm:w-64 md:w-72 lg:w-80 object-contain drop-shadow-[0_0_35px_rgba(212,175,55,0.45)]"
            />
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-wide text-text">
              <span className="text-accent">Pinnacle</span>'26
            </h1>
          </div>
          <p className="text-accent font-semibold tracking-[0.3em] uppercase text-xs">Department of Information Technology</p>
          <p className="text-lg md:text-xl text-gray-200 font-semibold">National Level Technical Symposium</p>
          <p className="text-sm md:text-base text-gray-300">
            Department of Information Technology | Easwari Engineering College
          </p>
          <div className="text-sm md:text-base inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
            <span className="text-accent font-semibold">14 February 2026</span>
            <span className="text-gray-300">|</span>
            <span className="text-gray-200">8:15 AM – 4:00 PM</span>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button
            onClick={() => window.open(ENTRY_FORM_LINK, '_blank')}
            className="bg-accent text-white px-6 py-3 rounded-lg text-sm font-semibold hover:shadow-glow transform hover:-translate-y-0.5 transition"
          >
            REGISTER NOW
          </Button>
          <Button
            onClick={() => scrollToId('events')}
            className="border border-white/30 text-text px-6 py-3 rounded-lg text-sm font-semibold hover:border-accent hover:text-accent transition"
          >
            EXPLORE EVENTS
          </Button>
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-gray-400 text-sm"
        >
          Innovate. Compete. Conquer.
        </motion.p>
      </div>
    </section>
  );
}
