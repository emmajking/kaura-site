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

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="navbar">
      <div className="navbar-inner">
        {/* ——— LOGO + MARQUE ——— */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative h-10 w-10 rounded-xl bg-gradient-to-br from-black to-[#0a0a0a] p-[2px] border border-white/10 shadow-md overflow-hidden">
            <Image
              src="/Logo.jpg"
              alt="La Maison Kaura"
              fill
              className="object-contain rounded-xl"
              priority
            />
          </div>
          <div className="leading-tight tracking-[0.02em] pr-2">
            <div className="font-semibold text-[0.95rem] text-[#f5f5f5] group-hover:text-[#fff] transition-colors">
              LA MAISON KAURA
            </div>
            <div className="text-[0.72rem] text-[#bdbdbd] mt-[1px]">
              Your Pinnacle Care Spaces
            </div>
          </div>
        </Link>

        {/* ——— NAVIGATION DESKTOP ——— */}
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

        {/* ——— HAMBURGER MOBILE ——— */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden ml-auto p-2 rounded-lg border border-white/10 bg-[#1a1a1a]/40 hover:bg-[#2a2a2a]/60 transition-colors"
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="mobile-nav"
        >
          {open ? <X size={22} color="#c9ad5a" /> : <Menu size={22} color="#c9ad5a" />}
        </button>
      </div>

      {/* ——— DROPDOWN MOBILE ——— */}
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
