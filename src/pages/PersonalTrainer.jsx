import { trainers } from "../data/data";

export default function PersonalTrainer() {
  return (
    <div className="px-6 py-16">
      {/* Container centrale */}
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-(--color-text-primary)">
          I nostri Personal Trainer
        </h1>

        {/* Griglia card */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {trainers.map((t) => (
            <div
              key={t.name}
              className="bg-(--color-bg-surface) p-6 rounded-2xl border border-(--color-border) flex flex-col"
            >
              <p className="text-(--color-text-primary) font-bold">{t.name}</p>
              <p className="text-(--color-text-secondary)">{t.specialty}</p>
              <a
                href="/contatti"
                className="mt-4 inline-block px-4 py-2 bg-(--color-accent) text-black rounded-xl font-semibold hover:bg-(--color-accent-hover) transition"
              >
                Contatta {t.name}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
