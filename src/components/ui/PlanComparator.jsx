import { plans } from "../../data/data";

export default function PlanComparator() {
  return (
    <section className="px-6 py-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-(--color-text-primary)">
          Confronta i nostri piani
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="bg-(--color-bg-surface) p-6 rounded-2xl border border-(--color-border) flex flex-col"
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
                className="mt-6 rounded-xl bg-(--color-accent) px-4 py-2 text-black text-center font-semibold hover:bg-(--color-accent-hover) transition"
              >
                Scegli {plan.name}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
