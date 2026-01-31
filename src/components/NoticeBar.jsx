"use client";

import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { ENTRY_FORM_LINK } from '../data/events';

export default function NoticeBar() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(true);
  const lastY = useRef(0);
  const hideNotice = pathname === '/hackathon';

  useEffect(() => {
    if (hideNotice) return undefined;
    lastY.current = window.scrollY;
    const onScroll = () => {
      const currentY = window.scrollY;
      const scrollingDown = currentY > lastY.current;
      if (scrollingDown && currentY > 80) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      lastY.current = currentY;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [hideNotice]);

  if (hideNotice) {
    return null;
  }

  return (
    <div
      className={`fixed bottom-4 left-0 right-0 z-40 px-4 transition-transform duration-300 ${
        visible ? 'translate-y-0' : 'translate-y-24'
      }`}
    >
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 rounded-2xl border border-accent/40 bg-black/70 backdrop-blur-md px-4 py-3 shadow-[0_0_25px_rgba(212,175,55,0.35)]">
          <p className="text-xs sm:text-sm text-gray-200">
            <span className="text-accent font-semibold">Notice:</span> All participants must first pay the Symposium
            Entry Fee of ₹150 to register. This includes food and accessories and is mandatory for everyone.
          </p>
          <a
            href={ENTRY_FORM_LINK}
            target="_blank"
            rel="noreferrer"
            className="whitespace-nowrap rounded-xl bg-[#D4AF37] px-4 py-2 text-xs sm:text-sm font-semibold text-white hover:shadow-glow transition"
          >
            Proceed to Payment
          </a>
        </div>
      </div>
    </div>
  );
}
