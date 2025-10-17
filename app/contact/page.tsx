'use client';
export default function Contact() {
  return (
    <section className="space-y-8">
      <header>
        <h2 className="[font-family:var(--font-playfair)]" style={{fontSize:'clamp(1.6rem,3.2vw,2.4rem)'}}>Establish a connection</h2>
        <div className="opacity-90 max-w-3xl mt-3 space-y-4 [font-family:var(--font-inter)]">
          <p className="italic text-lg [font-family:var(--font-playfair)]">« Access to the house is woven in discretion. Sponsorship and invitation remain the natural paths. »</p>
          <p>However, certain select correspondances may cross the thresold when the reflect the same exigence, the same sensitivity as that of Kaura.</p>
        </div>
      </header>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="card">
          <div className="[font-family:var(--font-playfair)] text-[1.05rem]">Write to the House</div>
          <form className="mt-3 grid gap-2 [font-family:var(--font-inter)]" onSubmit={(e)=>e.preventDefault()}>
            <input className="bg-black/40 border border-white/15 rounded-xl px-3 py-2 text-[#e7e7ea]" placeholder="Full Name" />
            <input className="bg-black/40 border border-white/15 rounded-xl px-3 py-2 text-[#e7e7ea]" placeholder="Professional Email" type="email" />
            <input className="bg-black/40 border border-white/15 rounded-xl px-3 py-2 text-[#e7e7ea]" placeholder="City" />
            <textarea className="bg-black/40 border border-white/15 rounded-xl px-3 py-2 text-[#e7e7ea] min-h-[8rem]" placeholder="Your message" />
            <button className="btn btn-gold" type="submit">Write to Kaura</button>
            <div className="text-xs opacity-60">Each message is read with the same attention as our spaces.</div>
          </form>
        </div>

        <div className="card space-y-2 [font-family:var(--font-inter)]">
          <div className="[font-family:var(--font-playfair)] text-[1.05rem]">Contact details</div>
          <div>Montreal, QC — Canada</div>
          <div>Write : <a className="underline" href="mailto:contact@lamaisonkaura.com">contact@lamaisonkaura.com</a></div>
          <div className="text-sm opacity-70 mt-3">For ultra-discreet subjects, request our encrypted channel upon presentation.</div>
        </div>
      </div>
    </section>
  );
}