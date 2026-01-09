import { Link, NavLink } from "react-router-dom";

const navItems = [
  { label: "Home", to: "/" },
  { label: "Corsi", to: "/corsi" },
  { label: "Personal Trainer", to: "/personal-trainer" },
  { label: "Percorsi", to: "/piani" },
  { label: "Risultati", to: "/trasformazioni" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-(--color-border) bg-(--color-bg-main)/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Brand */}
        <Link
          to="/"
          className="text-lg font-bold tracking-wide text-(--color-text-primary)"
        >
          Core<span className="text-(--color-accent)">Lab</span> Training
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                isActive
                  ? "text-(--color-accent)"
                  : "text-(--color-text-secondary) hover:text-(--color-text-primary)"
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* CTA */}
        <Link
          to="/contatti"
          className="rounded-xl bg-(--color-accent) px-4 py-2 text-sm font-semibold text-black hover:bg-(--color-accent-hover) transition"
        >
          Prenota prova
        </Link>
      </div>
    </header>
  );
}
