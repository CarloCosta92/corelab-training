import { Link } from "react-router-dom";
import { trainers } from "../data/data";
import bg from "../assets/trainer.jpg";

export default function PersonalTrainer() {
  return (
    <div
      className="flex-1 flex flex-col gap-16 px-6 py-16 bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})`, minHeight: `80vh` }}
    >
      <div className="px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-6 text-(--color-text-primary)">
            I nostri Personal Trainer
          </h1>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {trainers.map((t) => (
              <div
                key={t.name}
                className="bg-(--color-bg-surface) p-6 rounded-2xl border border-(--color-border) flex flex-col backdrop-blur-md"
                style={{ backgroundColor: "var(--color-bg-surface-light)" }}
              >
                <p className="text-(--color-text-primary) font-bold">
                  {t.name}
                </p>
                <p className="text-(--color-text-secondary)">{t.specialty}</p>
                <Link
                  to={"/contatti"}
                  className="mt-4 inline-block px-4 py-2 bg-(--color-accent) text-black rounded-xl font-semibold hover:bg-(--color-accent-hover) transition"
                >
                  Contatta {t.name}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
