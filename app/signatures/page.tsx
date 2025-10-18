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
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${active.img})`, filter: 'grayscale(10%) brightness(0.9)' }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />

            {/* space-y-6 -> space-y-7 */}
            <div className="relative z-10 p-6 sm:p-10 space-y-7" style={{ display: 'grid', rowGap: '3rem' }}>
              <button type="button" onClick={() => setActive(null)} className="btn">← Back to signatures</button>

              <MotionTitle as="h2">
                <div className="h2-strong">{active.title}</div>
              </MotionTitle>

              <p className="opacity-80 max-w-3xl [font-family:var(--font-inter)]">{active.sub}</p>

              {active.gallery && (
                <div className="grid"
                style={{ gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: '12px', maxWidth: '560px' }}>
                  {active.gallery.map((src) => (
                    <div
                      key={src}
                      className="rounded-xl border border-white/10 overflow-hidden"
                      style={{ background: `url(${src}) center/cover no-repeat`, height: '150px' }}
                    />
                  ))}
                </div>
              )}

              <div className="flex items-center" style={{ gap: '12px' }}>
                <button className="btn" onClick={() => setActive(null)} style={{ marginBottom: '1rem', marginLeft: '1rem' }} >Explore others signatures</button>
                <Link className="btn btn-gold" href="/contact" style={{ marginLeft: 'auto', marginBottom: '1rem', marginRight: '1rem' }} >Establish a connection</Link>
              </div>
            </div>
          </div>
        ) : (
          // space-y-10 -> space-y-12
          <div className="space-y-16">
            {/* space-y-2 -> space-y-3 */}
            <header className="space-y-3 mb-10" style={{ marginBottom: '2rem' }}>
              <MotionTitle as="h2">
                <div className="h2-strong">Signatures</div>
              </MotionTitle>
              <p className="opacity-75 max-w-2xl [font-family:var(--font-inter)]">
                Three expressions of the same demand : presence, mastery, and absolute discretion.
              </p>
            </header>

            {/* gap-4 -> gap-5 */}
            <div className="grid md:grid-cols-3 gap-x-14 gap-y-10"
            style={{ marginBottom: '3rem', rowGap: '.75rem' }}>
              {items.map((it) => (
                <button
                  key={it.key}
                  type="button"
                  onClick={() => setActive(it)}
                  // p-4 -> p-5
                  className="group text-left card card-luxe card-elev relative overflow-hidden p-5"
                >
                  <div
                    className="card-imgveil absolute inset-0"
                    style={{ backgroundImage: `url(${it.img})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                    aria-hidden
                  />
                  <div className="relative overflow-hidden rounded-2xl border border-grey/10" style={{ borderRadius: '18px' }}>
                    <div className="[font-family:var(--font-playfair)] text-[1.06rem]" style={{ borderRadius:'18px' }} >{it.title}</div>
                    <div className="opacity-80 text-sm mt-1 [font-family:var(--font-inter)]" style={{ borderRadius:'18px' }}>{it.sub}</div>
                  </div>
                </button>
              ))}
            </div>

            <div className="card-cta card flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between gap-4"
            style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'left', gap: '1,5rem', flexWrap: 'wrap' }}>
              <div style={{ flex: 1}}>
                <div className="text-lg [font-family:var(--font-inter)]"
                style={{ marginBottom: '0.1rem' }}>
                  One bond. One house.</div>
                <div className="text-sm opacity-70 [font-family:var(--font-inter)]">The rest is woven in discretion.</div>
              </div>
              <Link className="btn btn-gold w-fit px-6 py-2 sm:mt-0 mt-3" 
              style={{ whiteSpace: 'nowrap', padding: '0.5rem 1.5rem', alignSelf: 'flex-start', marginLeft: 'auto', }}
              href="/contact" >Establish a connection</Link>
            </div>
          </div>
        )}
      </section>
    </main>
  );
}
