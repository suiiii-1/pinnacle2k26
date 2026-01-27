"use client";

import { GlassCard } from 'reactbits';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="section-gradient py-20 md:py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <p className="text-accent font-semibold uppercase tracking-[0.25em] text-xs">About Pinnacle</p>
            <h2 className="text-3xl md:text-4xl font-bold text-text">Where ideas ignite and teams excel.</h2>
            <p className="text-gray-300 leading-relaxed">
              Pinnacle'26 is the signature national-level technical symposium hosted by the Department of Information
              Technology, Easwari Engineering College. It celebrates innovation, encourages competition, and rewards
              creativity through a curated blend of Technical, Non-Technical, and Online events designed to challenge
              every participant.
            </p>
            <p className="text-gray-300 leading-relaxed">
              From deep tech showdowns to creative showcases and virtual-first challenges, Pinnacle'26 is crafted to
              help you push boundaries, collaborate, and conquer.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <GlassCard className="p-6 md:p-8 space-y-4 gradient-border">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-text">Registration Instructions</h3>
                <span className="text-accent font-bold text-sm">2026</span>
              </div>
              <div className="space-y-4 text-gray-200">
                <div className="space-y-2">
                  <p className="text-accent font-semibold">Step 1 – Symposium Entry Fee</p>
                  <p>
                    All participants must first pay the Symposium Entry Fee of ₹150. This fee includes food and
                    accessories and is mandatory for everyone.
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="text-accent font-semibold">Step 2 – Event Registration</p>
                  <p>
                    After paying the entry fee, participants can register for individual events. Each event has a
                    separate registration fee which is paid inside the respective Google Form.
                  </p>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
