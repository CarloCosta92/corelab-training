import PlanComparator from "../components/ui/PlanComparator";
import { metodoCoreLab, testimonials } from "../data/data";

export default function Home() {
  return (
    <div className="flex flex-col gap-16">
      {/* Hero */}
      <section className="relative h-[80vh] flex items-center justify-center text-center bg-(--color-bg-main)">
        <div className="absolute inset-0 opacity-60 bg-black"></div>
        {/* Container centrale */}
        <div className="relative z-10 px-6 w-full max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-extrabold text-(--color-text-primary) leading-tight">
            Il tuo corpo è un sistema.
            <br />
            Noi lo alleniamo con metodo.
          </h1>
          <p className="mt-6 text-(--color-text-secondary) text-lg md:text-xl">
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
      <section className="px-6 py-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6">
          {metodoCoreLab.map((item) => (
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
        </div>
      </section>

      {/* Prova Sociale */}
      <section className="px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-(--color-text-primary)">
            Risultati reali dei nostri clienti
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {testimonials.map((item) => (
              <div
                key={item.name}
                className="bg-(--color-bg-surface) p-6 rounded-2xl border border-(--color-border)"
              >
                <p className="text-(--color-text-primary) font-semibold">
                  {item.name}
                </p>
                <p className="mt-1 text-(--color-text-secondary) text-sm">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PlanComparator />
    </div>
  );
}
