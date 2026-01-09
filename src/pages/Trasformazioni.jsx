import { transformations } from "../data/data";

export default function Trasformazioni() {
  return (
    <div className="px-6 py-16  ">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-(--color-text-primary)">
          Trasformazioni dei nostri clienti
        </h1>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {transformations.map((t) => (
            <div
              key={t.name}
              className="bg-(--color-bg-surface) p-6 rounded-2xl border border-(--color-border) flex flex-col"
            >
              <p className="text-(--color-text-primary) font-bold">{t.name}</p>
              <div className="mt-2 flex gap-2">
                <img src={t.before} alt="Prima" className="w-1/2 rounded-xl" />
                <img src={t.after} alt="Dopo" className="w-1/2 rounded-xl" />
              </div>
              <p className="mt-2 text-(--color-text-secondary)">{t.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
