'use client';

import MotionTitle from '@/components/MotionTitle';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="kaura-page h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">
      {/* HOME */}
      <section id="home" className="snap-start min-h-screen flex items-center">
        <div className="section w-full">
          {/* Badge intro (verre fumé + doré doux) */}
          <div
            className="inline-block rounded-full border border-white/10 px-3 py-[6px]"
            style={{
              background: 'rgba(201,173,90,.06)',
              color: '#dcd7c8',
              fontSize: '0.8rem',
              letterSpacing: '.2px',
            }}
          >
            A private presence inside your spaces
          </div>

          {/* H1 */}
          <div className="mt-5">
            <MotionTitle as="h1" className="[font-family:var(--font-playfair)]">
              <div
                style={{
                  fontSize: 'clamp(2.4rem,5vw,3.8rem)',
                  lineHeight: 1.2,
                  letterSpacing: '-0.2px',
                  maxWidth: '52ch',
                }}
              >
                <span
                  style={{
                    background: 'linear-gradient(135deg,#f6eebe,#d8b767 60%,#a7873c)',
                    WebkitBackgroundClip: 'text',
                    color: 'transparent',
                  }}
                >
                  Kaura
                </span>{' '}
                is not merely a company.
                <br />
                <em style={{ color: '#efe8cc' }}>It&apos;s a presence.</em>
              </div>
            </MotionTitle>
          </div>

          {/* Sub copy */}
          <p
            className="max-w-xl [font-family:var(--font-inter)]"
            style={{ marginTop: '1rem', marginBottom: '2rem', opacity: 0.9, lineHeight: 1.7 }}
          >
            A rare, silent, and sovereign signature. Where others maintain, we watch.
            Where everything seems perfect, we adjust the invisible.
          </p>

          {/* CTA */}
          <div className="mt-6 flex flex-wrap gap-3"
          style={{marginBottom: '1.2rem'}} >
            <a className="btn btn-gold" href="#house">Enter the House →</a>
            <a className="btn" style={{ marginLeft:'1.5rem' }} href="#contact">Get in touch</a>
          </div>

          {/* Bullets */}
          <ul
            className="mt-80 mb-10 text-sm [font-family:var(--font-inter)]"
            style={{ marginTop: '0.5rem', marginBottom: '0.75rem',opacity: 0.60, lineHeight: 1.6, marginLeft:'1.5rem' }}
          >
            {[
              'Invisible care, Sovereign rigor',
              'Residences  ~Penthouses  ~Yachts  ~Art spaces',
              'Born in Montreal. Present wherever excellence resides.',
            ].map((t) => (
              <li key={t} className="mb-1"> {t}</li>
            ))}
          </ul>

          {/* Hero video (inchangé) */}
          <div className="hero-video relative mt-10 aspect-[16/9] overflow-hidden">
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

          <div className="mt-6 text-xs [font-family:var(--font-inter)]" style={{ opacity: 0.5, marginTop: '0.8rem', fontSize: '0.75rem' }}>
            Scroll to explore ↓
          </div>
        </div>
      </section>

      {/* THE HOUSE */}
      <section id="house" className="snap-start min-h-screen flex items-center">
        <div className="section w-full">
          <MotionTitle as="h2" className="[font-family:var(--font-playfair)]">
            <div style={{ fontSize: 'clamp(1.7rem,3.4vw,2.5rem)', lineHeight: 1.2 }}>The House</div>
          </MotionTitle>

          <p
            className="max-w-3xl [font-family:var(--font-inter)]"
            style={{ marginTop: '0.75rem', opacity: 0.9, lineHeight: 1.7 }}
          >
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
                  priority={i === 0}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SIGNATURES */}
      <section id="signatures" className="snap-start min-h-screen flex items-center">
        <div className="section w-full">
          <MotionTitle as="h2" className="[font-family:var(--font-playfair)]">
            <div style={{ fontSize: 'clamp(1.7rem,3.4vw,2.5rem)', lineHeight: 1.2 }}>Signatures</div>
          </MotionTitle>
          <p
            className="[font-family:var(--font-inter)] max-w-2xl"
            style={{ opacity: 0.72, marginTop: '0.5rem', lineHeight: 1.7 }}
          >
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
        <div className="section w-full">
          <MotionTitle as="h2" className="[font-family:var(--font-playfair)]">
            <div style={{ fontSize: 'clamp(1.7rem,3.4vw,2.5rem)', lineHeight: 1.2 }}>Get in touch</div>
          </MotionTitle>

          <div className="grid md:grid-cols-2 gap-4 mt-6">
            <form className="card grid gap-2 [font-family:var(--font-inter)]" onSubmit={(e) => e.preventDefault()}>
              <input className="input" placeholder="Full name" />
              <input className="input" placeholder="Work email" type="email" />
              <textarea className="input textarea" placeholder="Your message" />
              <button className="btn btn-gold" type="submit">Send</button>
              <div className="text-xs opacity-60">Each message is read with the same care as our spaces.</div>
            </form>

            <div className="card [font-family:var(--font-inter)] space-y-2">
              <div className="[font-family:var(--font-playfair)] text-[1.05rem]">Coordinates</div>
              <div>Montréal, QC — Canada</div>
              <div>
                Email:{' '}
                <a className="link-underline" href="mailto:direction@lamaisonkaura.com">
                  direction@lamaisonkaura.com
                </a>
              </div>
              <div className="text-sm opacity-70 mt-3">
                For ultra-discreet matters, request our encrypted channel on the intro call.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NOTES */}
      <section id="notes" className="snap-start min-h-screen flex items-center">
        <div className="section w-full text-center">
          <MotionTitle as="h2" className="[font-family:var(--font-playfair)]">
            <div style={{ fontSize: 'clamp(1.5rem,3vw,2.1rem)', lineHeight: 1.25 }}>Present, but silent.</div>
          </MotionTitle>
          <p
            className="opacity-75 max-w-2xl mx-auto mt-3 [font-family:var(--font-inter)]"
            style={{ lineHeight: 1.7 }}
          >
            Typography, palette, and a single action: Get in touch.
          </p>
        </div>
      </section>
    </main>
  );
}