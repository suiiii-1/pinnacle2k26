"use client";

import { Dialog, DialogOverlay, DialogContent, DialogTitle, DialogDescription, Button, GlassCard } from 'reactbits';
import { motion, AnimatePresence } from 'framer-motion';

export default function EventModal({ open, onClose, event }) {
  return (
    <AnimatePresence>
      {open && event ? (
        <Dialog open={open} onClose={onClose}>
          <DialogOverlay className="bg-black/70 backdrop-blur-sm" />
          <DialogContent
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-3xl px-4"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 10 }}
              transition={{ duration: 0.2 }}
              className="relative"
            >
              <GlassCard className="p-6 md:p-8 rounded-2xl border border-accent/60 gradient-border">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <DialogTitle className="text-text">{event.title}</DialogTitle>
                      <DialogDescription className="mt-1 text-gray-300">{event.category}</DialogDescription>
                    </div>
                    <button
                      onClick={onClose}
                      className="text-gray-300 hover:text-text text-sm px-3 py-1 rounded-md bg-white/5"
                      aria-label="Close"
                    >
                      Close
                    </button>
                  </div>
                  <p className="text-gray-200">{event.description}</p>
                  <div className="grid sm:grid-cols-2 gap-3 text-sm text-gray-300">
                    <div className="glass-card p-3 rounded-lg border border-white/10">
                      <p className="text-gray-400 text-xs uppercase tracking-wide">Team Size</p>
                      <p className="text-text font-semibold">{event.teamSize}</p>
                    </div>
                    <div className="glass-card p-3 rounded-lg border border-white/10">
                      <p className="text-gray-400 text-xs uppercase tracking-wide">Format</p>
                      <p className="text-text font-semibold">{event.format}</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-gray-300 font-semibold mb-2">Rules</p>
                    <ul className="list-disc list-inside space-y-2 text-gray-200 text-sm">
                      {event.rules.map((rule) => (
                        <li key={rule}>{rule}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex justify-end">
                    <Button
                      onClick={() => window.open('https://forms.gle/placeholder', '_blank')}
                      className="bg-[#D4AF37] text-white px-5 py-2 rounded-lg hover:shadow-glow"
                    >
                      REGISTER NOW
                    </Button>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          </DialogContent>
        </Dialog>
      ) : null}
    </AnimatePresence>
  );
}
