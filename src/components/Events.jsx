"use client";

import { useEffect, useMemo, useRef, useState } from 'react';
import { EVENT_CATEGORIES, events as eventData } from '../data/events';
import EventCard from './EventCard';
import { motion, AnimatePresence } from 'framer-motion';

export default function Events({
  initialCategory = EVENT_CATEGORIES[0],
  showTabs = true,
  title = 'Choose your battlefield',
  subtitle = 'Technical. Non Technical. Online. Pick your arena and conquer.',
  sectionId = 'events',
  showNotice = true,
}) {
  const [category, setCategory] = useState(initialCategory);
  const [activeEvent, setActiveEvent] = useState(null);
  const detailsRef = useRef(null);

  const filtered = useMemo(
    () => eventData.filter((ev) => ev.category === category),
    [category]
  );

  const closeModal = () => setActiveEvent(null);

  useEffect(() => {
    if (!activeEvent || !detailsRef.current) return;
    if (window.innerWidth < 1024) {
      detailsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [activeEvent]);

  return (
    <section id={sectionId} className="py-20 md:py-24 section-gradient relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
          <div>
            <p className="text-accent font-semibold text-xs uppercase tracking-[0.25em]">Events</p>
            <h2 className="text-3xl md:text-4xl font-bold text-text">{title}</h2>
            <p className="text-gray-300 mt-2">{subtitle}</p>
          </div>
          {showTabs && (
            <div className="flex flex-wrap gap-2">
              {EVENT_CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setCategory(cat)}
                  className={`px-4 py-2 rounded-full border text-sm font-semibold transition ${
                    category === cat
                      ? 'bg-accent text-white border-accent shadow-glow'
                      : 'border-white/15 text-gray-200 hover:border-accent/60'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          )}
        </div>

        {showNotice && (
          <div className="mb-8 rounded-2xl border border-accent/30 bg-black/40 p-5 text-gray-200">
            <p className="text-accent font-semibold mb-2">Notice</p>
            <p>
              All participants must first pay the Symposium Entry Fee of ₹150 to register for the symposium. This fee
              includes food and accessories and is mandatory for everyone.
            </p>
            <p className="mt-3">
              Then the participant can register for each event separately. Each event has a separate registration fee
              inside its respective Google Form.
              <br />
              There is no registration fee for online events.
            </p>
          </div>
        )}

        <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,380px)] gap-6 lg:gap-8">
          <div className="grid sm:grid-cols-2 gap-4">
            <AnimatePresence mode="popLayout">
              {filtered.map((event) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  <EventCard event={event} onOpen={setActiveEvent} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
          <div ref={detailsRef} className="lg:sticky lg:top-24 h-fit">
            <div className="glass-card rounded-3xl border border-accentDeep/40 p-5 md:p-6 min-h-[380px] bg-black/50 shadow-[0_0_45px_rgba(212,175,55,0.35)]">
              {!activeEvent ? (
                <div className="h-full flex items-center justify-center">
                  <p className="text-accentDeep text-lg font-semibold">Select an Event</p>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-xs uppercase tracking-[0.3em] text-gray-400">{activeEvent.category}</p>
                      <h3 className="text-2xl font-semibold text-text mt-1">{activeEvent.title}</h3>
                    </div>
                    <button
                      onClick={closeModal}
                      className="text-xs px-3 py-1 rounded-full border border-white/15 text-gray-300 hover:text-text"
                    >
                      Clear
                    </button>
                  </div>
                  <p className="text-gray-200 text-sm leading-relaxed">{activeEvent.description}</p>
                  <div className="grid grid-cols-2 gap-3 text-xs text-gray-300">
                    <div className="rounded-xl border border-white/10 bg-black/40 p-3">
                      <p className="uppercase tracking-[0.2em] text-[10px] text-gray-400">Team Size</p>
                      <p className="text-text font-semibold mt-1">{activeEvent.teamSize}</p>
                    </div>
                    <div className="rounded-xl border border-white/10 bg-black/40 p-3">
                      <p className="uppercase tracking-[0.2em] text-[10px] text-gray-400">Format</p>
                      <p className="text-text font-semibold mt-1">{activeEvent.format}</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-gray-300 font-semibold mb-2">Rules</p>
                    <ul className="space-y-2 text-gray-200 text-sm">
                      {activeEvent.rules.map((rule) => (
                        <li key={rule} className="flex gap-2">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accentDeep" aria-hidden />
                          <span>{rule}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <button
                    onClick={() => window.open(activeEvent.formLink, '_blank')}
                    className="w-full bg-accent text-black font-semibold py-3 rounded-xl hover:shadow-glow transition"
                  >
                    REGISTER NOW
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
