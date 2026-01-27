import { useEffect, useMemo, useState } from 'react';
import { createPortal } from 'react-dom';
import { motion } from 'framer-motion';
import clsx from 'clsx';

export function Navbar({ children, className }) {
  return (
    <nav className={clsx('w-full fixed top-0 inset-x-0 z-50 transition-all', className)}>
      {children}
    </nav>
  );
}

export function LiquidEther({ className }) {
  const blobs = useMemo(
    () => [
      { x: '-10%', y: '-10%', delay: 0 },
      { x: '60%', y: '-20%', delay: 2.5 },
      { x: '30%', y: '60%', delay: 4 },
    ],
    []
  );

  return (
    <div className={clsx('absolute inset-0 overflow-hidden', className)} aria-hidden>
      <div className="noise-overlay" />
      {blobs.map((blob, idx) => (
        <motion.div
          key={idx}
          className="absolute w-[36rem] h-[36rem] bg-accent/30 rounded-full blur-[140px]"
          initial={{ x: blob.x, y: blob.y, scale: 0.9 }}
          animate={{
            x: blob.x,
            y: blob.y,
            scale: [0.9, 1.05, 0.95],
            rotate: [0, 45, -30, 0],
          }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut', delay: blob.delay }}
        />
      ))}
    </div>
  );
}

export function GlassCard({ className, children }) {
  return <div className={clsx('glass-card rounded-xl', className)}>{children}</div>;
}

export function Countdown({ targetDate, className, render }) {
  const calculate = () => {
    const now = new Date().getTime();
    const distance = Math.max(0, targetDate.getTime() - now);
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    return { days, hours, minutes, seconds };
  };

  const [time, setTime] = useState(calculate());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(calculate());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return <div className={className}>{render ? render(time) : null}</div>;
}

export function Dialog({ open, onClose, children }) {
  if (!open) return null;
  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      {children}
    </div>,
    document.body
  );
}

export function DialogOverlay({ className }) {
  return <div className={clsx('fixed inset-0 bg-black/70 backdrop-blur-sm', className)} />;
}

export function DialogContent({ className, children, onClick }) {
  return (
    <div onClick={onClick} className={clsx('relative z-10', className)}>
      {children}
    </div>
  );
}

export function DialogTitle({ className, children }) {
  return <h3 className={clsx('text-2xl font-semibold', className)}>{children}</h3>;
}

export function DialogDescription({ className, children }) {
  return <p className={clsx('text-base text-gray-200', className)}>{children}</p>;
}

export function Button({ className, children, ...props }) {
  return (
    <button
      className={clsx(
        'inline-flex items-center justify-center rounded-md px-4 py-2 font-semibold transition focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
