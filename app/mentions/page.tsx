'use client';

export default function Mentions() {
  return (
    <main className="kaura-page">
      <section className="section flex flex-col items-center text-center">
        <div className="card max-w-2xl p-8">
          <h2
            className="[font-family:var(--font-playfair)]"
            style={{ fontSize: 'clamp(1.4rem,3vw,2rem)' }}
          >
            La Maison Kaura — Present, but silent.
          </h2>

          <p className="opacity-75 mt-3 [font-family:var(--font-inter)] leading-relaxed">
            Typographies : <em>Playfair Display</em> & <em>Inter</em>.<br />
            Fond <code>#0a0a0a</code>. Golden accents reduced.<br />
            Only one action : <em>Elevate.</em>
          </p>
        </div>
      </section>
    </main>
  );
}
