"use client";

import { Instagram, Linkedin, Mail, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import { GlassCard } from 'reactbits';

export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-20 section-gradient">
      <div className="max-w-6xl mx-auto px-6 space-y-10">
        <div className="text-center space-y-3">
          <p className="text-accent font-semibold text-xs uppercase tracking-[0.25em]">Connect</p>
          <h2 className="text-3xl md:text-4xl font-bold text-text">Get in touch</h2>
          <p className="text-gray-300">Reach us for registrations, partnerships, or queries.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          <GlassCard className="p-5 rounded-xl">
            <h3 className="text-xl font-semibold text-text mb-2">Venue</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Easwari Engineering College
              <br /> Department of Information Technology
              <br /> Ramapuram, Chennai
            </p>
          </GlassCard>
          <GlassCard className="p-5 rounded-xl">
            <h3 className="text-xl font-semibold text-text mb-2">Contact</h3>
            <div className="space-y-2 text-sm text-gray-200">
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-accent" />
                <a className="hover:text-accent" href="mailto:eecpinnacle19@gmail.com">eecpinnacle19@gmail.com</a>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-accent" />
                <a className="hover:text-accent" href="tel:+916374766414">+91 63747 66414</a>
              </div>
            </div>
          </GlassCard>
          <GlassCard className="p-5 rounded-xl">
            <h3 className="text-xl font-semibold text-text mb-2">Social</h3>
            <div className="flex gap-3">
              <motion.a
                href="https://www.instagram.com/pinnacle2k26/"
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -2 }}
                className="p-2 rounded-full bg-white/5 border border-white/10 hover:border-accent"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/departmentofiteec/"
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -2 }}
                className="p-2 rounded-full bg-white/5 border border-white/10 hover:border-accent"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </motion.a>
              <motion.a
                href="mailto:eecpinnacle19@gmail.com"
                whileHover={{ y: -2 }}
                className="p-2 rounded-full bg-white/5 border border-white/10 hover:border-accent"
                aria-label="Email"
              >
                <Mail size={18} />
              </motion.a>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
