"use client";

import { motion } from 'framer-motion';
import { Countdown as RBCoundown, LiquidEther } from 'reactbits';
import { HACKATHON_GOOGLE_FORM_LINK } from '../data/events';

const targetDate = new Date('2026-02-10T09:00:00+05:30');

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut', staggerChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

function TimeBox({ value }) {
  return (
    <div className="min-w-[64px] px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-[#f5f5f5] text-2xl md:text-3xl font-bold tracking-widest text-center">
      {value.toString().padStart(2, '0')}
    </div>
  );
}

export default function Hackathon() {
  return (
    <section
      id="hackathon"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0b0b0b] text-[#f5f5f5]"
      aria-labelledby="hackathon-title"
    >
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute inset-0 opacity-70">
          <LiquidEther />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[#0b0b0b]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,163,255,0.22),transparent_40%),radial-gradient(circle_at_80%_10%,rgba(0,163,255,0.15),transparent_35%)]" />
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={containerVariants}
        className="relative z-10 max-w-6xl mx-auto px-6 py-16 md:py-20 text-center"
      >
        <motion.h2
          id="hackathon-title"
          variants={itemVariants}
          className="mt-4 text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#f5f5f5]"
          animate={{
            textShadow: [
              '0 0 10px rgba(0,163,255,0.35)',
              '0 0 24px rgba(0,163,255,0.75)',
              '0 0 10px rgba(0,163,255,0.35)',
            ],
          }}
          transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut' }}
        >
          DEV ARENA ’26 – 1.0
        </motion.h2>

        <motion.p variants={itemVariants} className="mt-2 text-lg md:text-xl font-semibold text-[#00a3ff]">
          8-Hour Hackathon
        </motion.p>

        <motion.p variants={itemVariants} className="mt-3 text-base md:text-lg text-gray-200">
          Department of Information Technology
          <br />
          Easwari Engineering College
        </motion.p>

        <motion.p variants={itemVariants} className="mt-4 text-xl md:text-2xl font-semibold">
          Get ready to code, innovate &amp; compete!
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="mt-8 mx-auto max-w-3xl grid gap-4 md:grid-cols-3 bg-white/5 border border-white/10 rounded-2xl p-6 text-left"
        >
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-gray-400">Date</p>
            <p className="mt-2 text-lg font-semibold text-[#f5f5f5]">10-02-2026</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-gray-400">Time</p>
            <p className="mt-2 text-lg font-semibold text-[#f5f5f5]">9:00 AM – 5:00 PM</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-gray-400">Highlight</p>
            <p className="mt-2 text-lg font-semibold text-[#f5f5f5]">Exciting Cash Prizes</p>
          </div>
        </motion.div>

        <motion.p variants={itemVariants} className="mt-5 text-base md:text-lg text-gray-200">
          Open for enthusiastic developers &amp; innovators
        </motion.p>

        <motion.div variants={itemVariants} className="mt-8">
          <p className="text-sm uppercase tracking-[0.35em] text-[#00a3ff] font-semibold">Hackathon Begins In</p>
          <motion.div
            animate={{ opacity: [0.8, 1, 0.8] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
            className="mt-4 flex flex-wrap justify-center items-center gap-3"
          >
            <RBCoundown
              targetDate={targetDate}
              render={({ days, hours, minutes, seconds }) => (
                <div className="flex flex-wrap items-center justify-center gap-2">
                  <TimeBox value={days} />
                  <span className="text-[#00a3ff] text-xl font-semibold">:</span>
                  <TimeBox value={hours} />
                  <span className="text-[#00a3ff] text-xl font-semibold">:</span>
                  <TimeBox value={minutes} />
                  <span className="text-[#00a3ff] text-xl font-semibold">:</span>
                  <TimeBox value={seconds} />
                </div>
              )}
            />
          </motion.div>
          <p className="mt-2 text-xs text-gray-400">DD : HH : MM : SS</p>
        </motion.div>

        <motion.p variants={itemVariants} className="mt-6 text-lg md:text-xl font-semibold">
          Don’t miss this chance to showcase your skills!
        </motion.p>

        <motion.div variants={itemVariants} className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href={HACKATHON_GOOGLE_FORM_LINK}
            target="_blank"
            rel="noreferrer"
            className="px-8 py-4 rounded-xl bg-[#00a3ff] text-[#f5f5f5] text-sm md:text-base font-semibold shadow-[0_0_25px_rgba(0,163,255,0.45)] hover:shadow-[0_0_35px_rgba(0,163,255,0.7)] hover:-translate-y-0.5 transition"
          >
            REGISTER NOW
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
