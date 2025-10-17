import MotionTitle from '@/components/MotionTitle';
import Image from 'next/image';

export default function Maison() {
  return (
    <section className="space-y-8">
      <header>
        <MotionTitle as="h2" className="[font-family:var(--font-playfair)]">
          <div style={{ fontSize: 'clamp(1.6rem,3.2vw,2.4rem)' }}>The house</div>
        </MotionTitle>

        <div className="opacity-90 max-w-3xl mt-3 space-y-4 [font-family:var(--font-inter)]">
          <p className="italic text-lg [font-family:var(--font-playfair)]">
            « Kaura was born from a conviction : perfection is not a result, but an attitude. »
          </p>

          <p>
            We believe in invisible care, in rigor that doesn{"'"}t announce itself, in gestures that no one notices — but everyone feels.
          </p>
        </div>
      </header>

      {/* Grid de 3 visuels */}
      <div className="grid md:grid-cols-3 gap-4">
        {['/carte.jpg', '/salon1.jpg', '/cuirjet.jpg'].map((src, i) => (
          <div key={i} className="relative h-40 rounded-xl border border-white/10 overflow-hidden">
            <Image src={src} alt="Kaura" fill className="object-cover" priority={i === 0} />
          </div>
        ))}
      </div>

      <blockquote className="card [font-family:var(--font-playfair)] text-lg">
        « This is not about service. It{"'"}s a constant and mastered presence. Kaura exists so that beauty becomes a duty again. »
      </blockquote>
    </section>
  );
}
