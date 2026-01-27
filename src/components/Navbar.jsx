"use client";

import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Navbar as RBNavbar, Button } from 'reactbits';
import { motion, AnimatePresence } from 'framer-motion';
import { ENTRY_FORM_LINK } from '../data/events';

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Events', href: '#events' },
  { label: 'Contact', href: '#contact' },
];

function scrollToId(href) {
  const id = href.replace('#', '');
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href) => {
    scrollToId(href);
    setOpen(false);
  };

  return (
    <RBNavbar
      className={`backdrop-blur-md ${solid ? 'bg-black/70 border-b border-white/10' : 'bg-transparent'} px-6 lg:px-10 py-3`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between text-text">
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
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className="text-sm font-medium text-gray-200 hover:text-text transition"
            >
              {link.label}
            </button>
          ))}
          <Button
            onClick={() => window.open(ENTRY_FORM_LINK, '_blank')}
            className="bg-accent text-white px-4 py-2 rounded-md hover:shadow-glow transition transform hover:-translate-y-0.5"
          >
            REGISTER NOW
          </Button>
        </div>
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
                <button
                  key={link.href}
                  onClick={() => handleNav(link.href)}
                  className="text-sm font-medium text-gray-200 text-left"
                >
                  {link.label}
                </button>
              ))}
              <Button
                onClick={() => window.open(ENTRY_FORM_LINK, '_blank')}
                className="bg-accent text-white px-4 py-2 rounded-md hover:shadow-glow"
              >
                REGISTER NOW
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </RBNavbar>
  );
}
