export default function Home() {
  return (
    <div className="flex flex-col gap-16">
      {/* Hero */}
      <section className="relative h-[80vh] flex items-center justify-center text-center bg-(--color-bg-main)">
        <div className="absolute inset-0 opacity-60 bg-black"></div>
        <div className="relative z-10 max-w-3xl px-6">
          <h1 className="text-5xl font-extrabold text-(--color-text-primary)">
            Il tuo corpo è un sistema.
            <br />
            Noi lo alleniamo con metodo.
          </h1>
          <p className="mt-6 text-(--color-text-secondary)">
            CoreLab Training è il centro multifunzionale dove ogni percorso è
            costruito su di te.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <a className="bg-(--color-accent) text-black px-6 py-3 rounded-xl font-bold hover:bg-(--color-accent-hover) transition">
              Scopri i percorsi
            </a>
            <a className="border border-(--color-border) px-6 py-3 rounded-xl text-(--color-text-primary) hover:bg-white/10 transition">
              Prenota prova gratuita
            </a>
          </div>
        </div>
      </section>

      {/* Metodo CoreLab */}
      <section className="max-w-7xl mx-auto px-6 mb-10 grid md:grid-cols-3 gap-6">
        {[
          {
            title: "Analisi",
            desc: "Valutiamo postura, forza e obiettivi prima di iniziare il percorso.",
          },
          {
            title: "Programmazione",
            desc: "Allenamenti costruiti su misura, non schede standard.",
          },
          {
            title: "Progressione",
            desc: "Monitoriamo i risultati e adattiamo il percorso per massimizzare l’efficacia.",
          },
        ].map((item) => (
          <div
            key={item.title}
            className="bg-(--color-bg-surface) p-6 rounded-2xl border border-(--color-border)"
          >
            <h3 className="text-lg font-bold text-(--color-text-primary)">
              {item.title}
            </h3>
            <p className="mt-2 text-(--color-text-secondary)">{item.desc}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
