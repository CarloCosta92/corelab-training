import { plans } from "../data/data";
import bg from "../assets/plans.jpg";

export default function Abbonamenti() {
  return (
    <div
      className="flex-1 flex flex-col gap-16 px-6 py-16 bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})`, minHeight: `80vh` }}
    >
      <div className="px-6 py-16  ">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-6 text-(--color-text-primary)">
            I nostri abbonamenti
          </h1>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className="bg-(--color-bg-surface) p-6 rounded-2xl border border-(--color-border) flex flex-col backdrop-blur-md"
                style={{ backgroundColor: "var(--color-bg-surface-light)" }}
              >
                <h3 className="text-xl font-bold text-(--color-text-primary)">
                  {plan.name}
                </h3>
                <p className="mt-2 text-(--color-accent) font-semibold">
                  {plan.price}
                </p>
                <ul className="mt-4 flex-1 space-y-2 text-(--color-text-secondary)">
                  {plan.features.map((f) => (
                    <li key={f} className="before:content-['•'] before:mr-2">
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="/contatti"
                  className="mt-6 px-4 py-2 bg-(--color-accent) text-black rounded-xl font-semibold text-center hover:bg-(--color-accent-hover) transition"
                >
                  Scegli {plan.name}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
