'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const links = [
  { href: '/', label: 'Home' },
  { href: '/maison', label: 'The House' },
  { href: '/signatures', label: 'Signatures' },
  { href: '/contact', label: 'Get in touch' },
  { href: '/mentions', label: 'Notes' },
];

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full flex items-center justify-between relative px-4 py-3 md:px-8">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-3">
        <div className="relative h-10 w-10 rounded-xl bg-gradient-to-br from-black to-[#0a0a0a] p-0.5 border border-white/10 shadow-md">
          <Image
            src="/Logo.jpg"
            alt="La Maison Kaura"
            fill
            className="rounded-xl object-contain p-0.5"
          />
        </div>
        <div>
          <div className="font-semibold tracking-wide text-[#f5f5f5]">LA MAISON KAURA</div>
          <div className="text-xs opacity-70 text-[#c0c0c0]">Your Pinnacle Care Spaces</div>
        </div>
      </Link>

      {/* Desktop Nav */}
      <div className="hidden md:flex gap-4 text-sm">
        {links.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className={`navbtn ${pathname === l.href ? 'active' : ''}`}
          >
            {l.label}
          </Link>
        ))}
      </div>

      {/* Mobile Hamburger */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden p-2 rounded-lg border border-white/10 hover:bg-white/5"
        aria-label="Toggle menu"
      >
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="absolute top-full left-0 right-0 bg-black/95 border-t border-white/10 backdrop-blur-lg md:hidden z-50"
          >
            <div className="flex flex-col items-center gap-3 py-6">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={`text-base ${
                    pathname === l.href ? 'text-[#f5be3c]' : 'text-[#e6e6e7]'
                  } hover:text-[#f5be3c] transition`}
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
