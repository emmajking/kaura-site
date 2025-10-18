'use client';
import MotionTitle from '@/components/MotionTitle';
import Image from 'next/image';

export default function Maison() {
  return (
    <main className="kaura-page">
      <section className="section space-y-8">
        <header>
          <MotionTitle as="h2" className="[font-family:var(--font-playfair)] opacity-80">
            <div style={{ fontSize: 'clamp(1.6rem,3.2vw,2.4rem)', marginBottom:'1rem', marginTop:'0rem' }}>The house</div>
          </MotionTitle>

          <div className="opacity-90 max-w-3xl mt-3 space-y-4 [font-family:var(--font-inter)]">
            <p className="italic text-lg [font-family:var(--font-playfair)]" style={{ marginBottom: '1.125rem' }} >
              « Kaura was born from a conviction : perfection is not a result, but an attitude. »
            </p>
            <p style={{ marginBottom: '1.125rem' }} >
              We believe in invisible care, in rigor that doesn{"'"}t announce itself,
              in gestures that no one notices — but everyone feels.
            </p>
          </div>
        </header>

        {/* Grid de 3 visuels */}
        <div className="grid md:grid-cols-3 gap-2" style={{ gap: '1rem', rowGap: '0.5rem', height:'60rem', borderRadius:'15px' }} >
          {['/carte.jpg', '/salon1.jpg', '/cuirjet.jpg'].map((src, i) => (
            <div
              key={i}
              className="relative h-40 sm:h-56 rounded-xl border border-black/10 overflow-hidden" style={{ borderRadius:'15px', borderColor:'rgba(0,0,0,0.1)' }}
            >
              <Image
                src={src}
                alt="Kaura"
                fill
                className="object-cover"
                priority={i === 0}
              />
            </div>
          ))}
        </div>

        <blockquote className="card [font-family:var(--font-playfair)] text-lg leading-snug" style={{ marginTop: '2rem' }}>
          « This is not about service. It{"'"}s a constant and mastered presence.
          Kaura exists so that beauty becomes a duty again. »
        </blockquote>
      </section>
    </main>
  );
}
