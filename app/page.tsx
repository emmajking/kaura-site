'use client';

import MotionTitle from '@/components/MotionTitle';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">
      {/* HOME */}
      <section id="home" className="snap-start min-h-screen flex items-center">
        <div className="max-w-5xl mx-auto px-4 w-full">
          <div className="text-xs opacity-75 inline-block border border-white/10 rounded-full px-3 py-1 bg-white/5">
            A private presence inside your spaces
          </div>

          <div className="mt-3">
            <MotionTitle as="h1" className="[font-family:var(--font-playfair)]">
              <div style={{ fontSize: 'clamp(2rem,4vw,3.5rem)', lineHeight: 1.1 }}>
                <span
                  style={{
                    background: 'linear-gradient(135deg,#f0e6b8,#d4b15a 60%,#a28539)',
                    WebkitBackgroundClip: 'text',
                    color: 'transparent',
                  }}
                >
                  Kaura
                </span>{' '}
                is not merely a company.<br />
                <em>It&apos;s a presence.</em>
              </div>
            </MotionTitle>
          </div>

          <p className="mt-3 opacity-90 max-w-xl [font-family:var(--font-inter)]">
            A rare, silent, and sovereign signature. Where others maintain, we watch. Where everything seems perfect, we adjust the invisible.
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            <a className="btn btn-gold" href="#house">Enter the House →</a>
            <a className="btn" href="#contact">Get in touch</a>
          </div>

          <ul className="mt-4 text-sm opacity-70 space-y-1 [font-family:var(--font-inter)]">
            {[
              'Invisible care, Sovereign rigor',
              'Residences • Penthouses • Yachts • Art spaces',
              'Born in Montreal. Present wherever excellence resides.',
            ].map((t) => (
              <li key={t}>• {t}</li>
            ))}
          </ul>

          <div className="relative rounded-2xl border border-white/10 mt-8 aspect-[16/9] overflow-hidden">
            <video
              src="/pasmal.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
          </div>

          <div className="mt-6 opacity-70 text-xs [font-family:var(--font-inter)]">Scroll to explore ↓</div>
        </div>
      </section>

      {/* THE HOUSE */}
      <section id="house" className="snap-start min-h-screen flex items-center">
        <div className="max-w-5xl mx-auto px-4 w-full">
          <MotionTitle as="h2" className="[font-family:var(--font-playfair)]">
            <div style={{ fontSize: 'clamp(1.6rem,3.2vw,2.4rem)' }}>The House</div>
          </MotionTitle>

          <p className="opacity-90 max-w-3xl mt-3 [font-family:var(--font-inter)]">
            “Kaura was born from a conviction: perfection is not a result, it is an attitude.”
          </p>

          <div className="grid md:grid-cols-3 gap-4 mt-6">
            {['/entree.jpg', '/carte.jpg', '/cuirjet.jpg'].map((src, i) => (
              <div key={i} className="relative overflow-hidden rounded-xl border border-white/10 aspect-[4/3]">
                <Image
                  src={src}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(min-width:768px) 33vw, 100vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SIGNATURES */}
      <section id="signatures" className="snap-start min-h-screen flex items-center">
        <div className="max-w-5xl mx-auto px-4 w-full">
          <MotionTitle as="h2" className="[font-family:var(--font-playfair)]">
            <div style={{ fontSize: 'clamp(1.6rem,3.2vw,2.4rem)' }}>Signatures</div>
          </MotionTitle>
          <p className="opacity-70 max-w-2xl [font-family:var(--font-inter)]">
            Three expressions of the same requirement: presence, mastery, and absolute discretion.
          </p>

          <div className="mt-4">
            <Link className="btn btn-gold" href="/signatures">
              Explore
            </Link>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="snap-start min-h-screen flex items-center">
        <div className="max-w-5xl mx-auto px-4 w-full">
          <MotionTitle as="h2" className="[font-family:var(--font-playfair)]">
            <div style={{ fontSize: 'clamp(1.6rem,3.2vw,2.4rem)' }}>Get in touch</div>
          </MotionTitle>

          <div className="grid md:grid-cols-2 gap-4 mt-6">
            <form className="card grid gap-2 [font-family:var(--font-inter)]" onSubmit={(e) => e.preventDefault()}>
              <input className="bg-black/40 border border-white/15 rounded-xl px-3 py-2" placeholder="Full name" />
              <input className="bg-black/40 border border-white/15 rounded-xl px-3 py-2" placeholder="Work email" type="email" />
              <textarea className="bg-black/40 border border-white/15 rounded-xl px-3 py-2 min-h-[8rem]" placeholder="Your message" />
              <button className="btn btn-gold" type="submit">Send</button>
              <div className="text-xs opacity-60">Each message is read with the same care as our spaces.</div>
            </form>

            <div className="card [font-family:var(--font-inter)] space-y-2">
              <div className="[font-family:var(--font-playfair)] text-[1.05rem]">Coordinates</div>
              <div>Montréal, QC — Canada</div>
              <div>Private line: +1 (___) ___-____</div>
              <div>Email: <a className="underline" href="mailto:direction@lamaisonkaura.com">direction@lamaisonkaura.com</a></div>
              <div className="text-sm opacity-70 mt-3">For ultra-discreet matters, request our encrypted channel on the intro call.</div>
            </div>
          </div>
        </div>
      </section>

      {/* NOTES */}
      <section id="notes" className="snap-start min-h-screen flex items-center">
        <div className="max-w-5xl mx-auto px-4 w-full text-center">
          <MotionTitle as="h2" className="[font-family:var(--font-playfair)]">
            <div style={{ fontSize: 'clamp(1.4rem,3vw,2rem)' }}>Present, but silent.</div>
          </MotionTitle>
          <p className="opacity-75 max-w-2xl mx-auto mt-3 [font-family:var(--font-inter)]">
            Typography, palette, and a single action: Get in touch.
          </p>
        </div>
      </section>
    </div>
  );
}
