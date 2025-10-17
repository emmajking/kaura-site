'use client';
import { useState } from 'react';
import Link from 'next/link';
import MotionTitle from '@/components/MotionTitle';

const items = [
  { key: 'residences', title: 'Residences & Penthouses', sub: 'Tranquility becomes a work of art.', img: '/salon.jpg', gallery: ['/vue.jpg','/saloncarre.jpg'] },
  { key: 'yachts', title: 'Yachts & Floating Estates', sub: 'Movement mastered. Elegance steadfast at the heart of the journey', img: '/cuirjet.jpg', gallery: ['/yacht.jpg','/salon1.jpg'] },
  { key: 'arts', title: 'Arts & Prestige spaces', sub: 'Maintenance becomes a ritual. Rigor becomes beauty.', img: '/tableau.jpg', gallery: ['/pull.jpg','/galerie.jpg'] },
];

type Item = (typeof items)[number];

export default function Signatures() {
  const [active, setActive] = useState<Item | null>(null);

  return (
    <main className="kaura-page">
      <section className="section">
        {active ? (
          <div className="relative overflow-hidden rounded-2xl border border-white/10">
            {/* background image + voiles */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${active.img})`, filter: 'grayscale(10%) brightness(0.9)' }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />

            <div className="relative z-10 p-6 sm:p-10 space-y-6">
              <button type="button" onClick={() => setActive(null)} className="btn">← Back to signatures</button>

              <MotionTitle as="h2">
                <div className="h2-strong">{active.title}</div>
              </MotionTitle>

              <p className="opacity-80 max-w-3xl [font-family:var(--font-inter)]">{active.sub}</p>

              {active.gallery && (
                <div className="grid gap-3 sm:grid-cols-3">
                  {active.gallery.map((src) => (
                    <div
                      key={src}
                      className="h-28 sm:h-36 rounded-xl border border-white/10 overflow-hidden"
                      style={{ background: `url(${src}) center/cover no-repeat` }}
                    />
                  ))}
                </div>
              )}

              <div className="flex flex-wrap items-center gap-3">
                <button className="btn" onClick={() => setActive(null)}>Explore others signatures</button>
                <Link className="btn btn-gold" href="/contact">Establish a connection</Link>
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-10">
            <header className="space-y-2">
              <MotionTitle as="h2">
                <div className="h2-strong">Signatures</div>
              </MotionTitle>
              <p className="opacity-75 max-w-2xl [font-family:var(--font-inter)]">
                Three expressions of the same demand : presence, mastery, and absolute discretion.
              </p>
            </header>

            {/* grille des cartes avec verre fumé + hover discret */}
            <div className="grid md:grid-cols-3 gap-4">
              {items.map((it) => (
                <button
                  key={it.key}
                  type="button"
                  onClick={() => setActive(it)}
                  className="group text-left card card-luxe card-elev relative overflow-hidden p-4"
                >
                  {/* voile image discret au hover */}
                  <div
                    className="card-imgveil absolute inset-0"
                    style={{ backgroundImage: `url(${it.img})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                    aria-hidden
                  />
                  <div className="relative">
                    <div className="[font-family:var(--font-playfair)] text-[1.06rem]">{it.title}</div>
                    <div className="opacity-80 text-sm mt-1 [font-family:var(--font-inter)]">{it.sub}</div>
                  </div>
                </button>
              ))}
            </div>

            {/* bandeau CTA bas de page */}
            <div className="card-cta card flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
              <div>
                <div className="text-lg [font-family:var(--font-inter)]">One bond. One house.</div>
                <div className="text-sm opacity-70 [font-family:var(--font-inter)]">The rest is woven in discretion.</div>
              </div>
              <Link className="btn btn-gold" href="/contact">Establish a connection</Link>
            </div>
          </div>
        )}
      </section>
    </main>
  );
}
