import { transformations } from "../data/data";
import bg from "../assets/results.jpg";

export default function Trasformazioni() {
  return (
    <div
      className="flex-1 flex flex-col gap-16 px-6 py-16 bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})`, minHeight: `80vh` }}
    >
      <div className="px-6 py-16  ">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-6 text-(--color-text-primary)">
            Trasformazioni dei nostri clienti
          </h1>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {transformations.map((t) => (
              <div
                key={t.name}
                className="bg-(--color-bg-surface) p-6 rounded-2xl border border-(--color-border) flex flex-col h-full backdrop-blur-md"
                style={{ backgroundColor: "var(--color-bg-surface-light)" }}
              >
                {/* Nome cliente */}
                <p className="text-(--color-text-primary) font-bold text-lg">
                  {t.name}
                </p>

                {/* Immagini con etichette */}
                <div className="mt-4 flex gap-2">
                  <div className="flex-1 flex flex-col items-center">
                    <span className="text-sm font-semibold text-(--color-text-secondary) mb-1">
                      Prima
                    </span>
                    <img
                      src={t.before}
                      alt="Prima"
                      className="w-full h-48 object-cover rounded-xl"
                    />
                  </div>
                  <div className="flex-1 flex flex-col items-center">
                    <span className="text-sm font-semibold text-(--color-text-secondary) mb-1">
                      Dopo
                    </span>
                    <img
                      src={t.after}
                      alt="Dopo"
                      className="w-full h-48 object-cover rounded-xl"
                    />
                  </div>
                </div>

                {/* Descrizione */}
                <p className="mt-4 text-(--color-text-secondary) text-sm flex-1">
                  {t.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
