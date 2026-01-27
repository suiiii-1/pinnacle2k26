"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Navbar as RBNavbar } from 'reactbits';
import { motion, AnimatePresence } from 'framer-motion';

const links = [
  { label: 'Home', href: '/#home', type: 'page' },
  { label: 'About', href: '/#about', type: 'page' },
  { label: 'Hackathon', href: '/hackathon', type: 'page' },
  { label: 'Technical Events', href: '/events/technical', type: 'page' },
  { label: 'Non Technical', href: '/events/non-technical', type: 'page' },
  { label: 'Online Events', href: '/events/online', type: 'page' },
  { label: 'Contact', href: '/#contact', type: 'page' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);


  return (
    <RBNavbar
      className="fixed top-4 inset-x-0 z-50 px-4"
    >
      <div
        className={`max-w-6xl mx-auto flex items-center justify-between text-text rounded-2xl px-6 lg:px-8 py-3 border border-white/10 backdrop-blur-md transition-all ${
          solid ? 'bg-black/70 shadow-[0_10px_30px_rgba(0,0,0,0.35)]' : 'bg-black/40'
        }`}
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center">
            <img src="/logo.png" alt="Pinnacle 26" className="w-7 h-7 object-contain" />
          </div>
          <div className="leading-tight">
            <p className="font-semibold">PINNACLE'26</p>
            <p className="text-xs text-gray-300">National Level Symposium</p>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-gray-200 hover:text-text transition"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="hidden md:flex items-center" />
        <button
          className="md:hidden text-text p-2 rounded-md hover:bg-white/10"
          onClick={() => setOpen((p) => !p)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden px-6 pt-2 pb-4"
          >
            <div className="flex flex-col gap-3 glass-card p-4 rounded-xl border border-white/10">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-gray-200 text-left"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </RBNavbar>
  );
}
