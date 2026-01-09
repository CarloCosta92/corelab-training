import { Link } from "react-router-dom";
import { courses } from "../data/data";
import bg from "../assets/bilancere.jpg";

export default function Corsi() {
  return (
    <div
      className="flex-1 flex flex-col gap-16 px-6 py-16 bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})`, minHeight: `80vh` }}
    >
      <div className="max-w-7xl mx-auto flex-1">
        <h1 className="text-4xl font-bold mb-6 text-(--color-text-primary)">
          I nostri corsi
        </h1>

        {/* Card corsi */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {courses.map((course) => (
            <div
              key={course.name}
              className="p-6 rounded-2xl border border-(--color-border) backdrop-blur-md"
              style={{ backgroundColor: "var(--color-bg-surface-light)" }}
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
              <Link
                className="mt-4 inline-block px-4 py-2 bg-(--color-accent) text-black rounded-xl font-semibold hover:bg-(--color-accent-hover) transition"
                to={"/contatti"}
              >
                Prenota prova gratuita
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
