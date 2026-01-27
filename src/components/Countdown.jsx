"use client";

import { Countdown as RBCoundown, GlassCard } from 'reactbits';
import { motion } from 'framer-motion';

const target = new Date('2026-02-14T08:15:00');

function TimeUnit({ label, value }) {
  return (
    <div className="flex flex-col items-center px-4 py-3 bg-white/5 rounded-lg border border-white/10 min-w-[76px]">
      <span className="text-3xl font-bold text-text leading-tight">{value.toString().padStart(2, '0')}</span>
      <span className="text-xs uppercase tracking-widest text-gray-400">{label}</span>
    </div>
  );
}

export default function Countdown() {
  return (
    <section className="py-16 md:py-20 section-gradient" aria-labelledby="countdown-title">
      <div className="max-w-5xl mx-auto px-6">
        <GlassCard className="p-6 md:p-8 gradient-border">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <p className="text-accent font-semibold text-xs uppercase tracking-[0.25em]">Countdown</p>
              <h2 id="countdown-title" className="text-2xl md:text-3xl font-bold text-text">
                Time Until Pinnacle Begins
              </h2>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-wrap gap-3"
            >
              <RBCoundown
                targetDate={target}
                render={({ days, hours, minutes, seconds }) => (
                  <div className="flex flex-wrap gap-3">
                    <TimeUnit label="Days" value={days} />
                    <TimeUnit label="Hours" value={hours} />
                    <TimeUnit label="Minutes" value={minutes} />
                    <TimeUnit label="Seconds" value={seconds} />
                  </div>
                )}
              />
            </motion.div>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}
