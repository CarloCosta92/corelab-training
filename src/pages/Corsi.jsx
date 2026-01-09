import { courses } from "../data/data";

export default function Corsi() {
  return (
    <div className="flex flex-col gap-16 px-6 py-16">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-(--color-text-primary)">
          I nostri corsi
        </h1>

        {/* Filtri */}
        <div className="flex flex-wrap gap-4 mb-8">
          <button className="px-4 py-2 rounded-xl bg-(--color-accent) text-black font-semibold hover:bg-(--color-accent-hover) transition">
            Tutti
          </button>
          <button className="px-4 py-2 rounded-xl border border-(--color-border) text-(--color-text-primary) hover:bg-white/10 transition">
            Forza
          </button>
          <button className="px-4 py-2 rounded-xl border border-(--color-border) text-(--color-text-primary) hover:bg-white/10 transition">
            Cardio
          </button>
          <button className="px-4 py-2 rounded-xl border border-(--color-border) text-(--color-text-primary) hover:bg-white/10 transition">
            Gruppo
          </button>
        </div>

        {/* Card corsi */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {courses.map((course) => (
            <div
              key={course.name}
              className="bg-(--color-bg-surface) p-6 rounded-2xl border border-(--color-border)"
            >
              <h3 className="text-xl font-bold text-(--color-text-primary)">
                {course.name}
              </h3>
              <p className="mt-2 text-(--color-text-secondary)">
                {course.desc}
              </p>
              <p className="mt-2 font-semibold text-(--color-accent)">
                {course.duration}
              </p>
              <a className="mt-4 inline-block px-4 py-2 bg-(--color-accent) text-black rounded-xl font-semibold hover:bg-(--color-accent-hover) transition">
                Prenota prova gratuita
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
