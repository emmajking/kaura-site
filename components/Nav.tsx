'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
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

  // ferme le menu mobile quand la route change
  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <header className="navbar">
      <div className="navbar-inner">
        {/* Logo + Titre (cliquables) */}
        <Link href="/" className="flex items-center gap-3">
          <div className="relative h-10 w-10 rounded-xl bg-gradient-to-br from-black to-[#0a0a0a] p-0.5 border border-white/10 shadow-md">
            <Image
              src="/Logo.jpg"
              alt="La Maison Kaura"
              fill
              className="rounded-xl object-contain p-0.5"
              priority
            />
          </div>
          <div className="font-semibold tracking-wide text-[#f5f5f5]">
            LA MAISON KAURA
          </div>
        </Link>

        {/* Sous-titre (non cliquable) */}
        <span className="hidden sm:inline text-xs opacity-70 text-[#c0c0c0]">
          Your Pinnacle Care Spaces
        </span>

        {/* Desktop Nav (pastille) */}
        <nav aria-label="Primary" className="hidden md:block ml-auto">
          <div className="nav-pill">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`navbtn ${pathname === l.href ? 'active' : ''}`}
                aria-current={pathname === l.href ? 'page' : undefined}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </nav>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden ml-auto h-9 w-9 inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 backdrop-blur hover:bg-white/8 transition"
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="mobile-nav"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-nav"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-black/95 border-t border-white/10 backdrop-blur-lg"
          >
            <div className="flex flex-col items-center gap-3 py-6">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
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
    </header>
  );
}
