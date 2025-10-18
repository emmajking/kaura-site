'use client';

export default function Contact() {
  return (
    <main className="kaura-page">
      <section className="section space-y-8">
        <header>
          <h2
            className="[font-family:var(--font-playfair)]"
            style={{ fontSize: 'clamp(1.6rem,3.2vw,2.4rem)', marginBottom: '2rem', marginTop: '(-)2' }}
          >
            Establish a connection
          </h2>

          <div className="opacity-90 max-w-3xl mt-3 space-y-4 [font-family:var(--font-inter)]" style ={{ marginBottom: '1.75rem' }}>
            <p className="italic text-lg [font-family:var(--font-playfair)]" style={{ marginBottom: '1.125rem' }}>
              « Access to the house is woven in discretion. Sponsorship and invitation remain the natural paths. »
            </p>
            <p>
              However, certain select correspondances may cross the thresold when the reflect the same exigence,
              the same sensitivity as that of Kaura.
            </p>
          </div>
        </header>

        <div className="grid md:grid-cols-2 gap-4" style={{ gap: '1rem', rowGap: '1.5rem' }}>
          {/* FORM */}
          <div className="card">
            <div className="[font-family:var(--font-playfair)] text-[1.05rem]" style={{ rowGap:'2,5rem', marginBottom:'1.0rem' }}>Write to the House</div>

            <form
              className="mt-3 grid gap-2 [font-family:var(--font-inter)]" 
              onSubmit={(e) => e.preventDefault()}
            >
              <input className="input" style={{ marginBottom: '0.4rem', marginTop: '0.5' }} placeholder="Full Name" />
              <input className="input" style={{ marginBottom: '0.4rem', marginTop: '0.2' }}  placeholder="Professional Email" type="email" />
              <input className="input" style={{ marginBottom: '0.4rem', marginTop: '0.2' }} placeholder="City" />
              <textarea className="input textarea" placeholder="Your message" />

              <button className="btn btn-gold" style={{ marginBottom: '0.2rem', marginTop: '0.8rem' }} type="submit">Write to Kaura</button>
              <div className="text-xs opacity-60" style={{ marginTop: '0.5rem', fontSize: '0.75rem' }}>
                Each message is read with the same attention as our spaces.
              </div>
            </form>
          </div>

          {/* COORDS */}
          <div className="card space-y-2 [font-family:var(--font-inter)]">
            <div className="[font-family:var(--font-playfair)] text-0.50rem opacity-65" style={{ marginBottom: '0.5rem' }} >Contact details</div>
            <div className="opacity-95" style={{ marginBottom:'1rem', marginTop: '1rem' }}> Montreal, QC — Canada</div>
            <div style={{ marginBottom:'1.5rem' }}>
              Write :{' '}
              <a className="underline" href="mailto:contact@lamaisonkaura.com" style={{ marginBottom:'1.5rem', }} >
                contact@lamaisonkaura.com
              </a>
            </div>
            <div className="text-sm opacity-55 mt-3 policy-6" style={{ marginTop: '1.5rem', lineHeight: '1.5rem' }}>
              For ultra-discreet subjects, request our encrypted channel upon presentation.
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
