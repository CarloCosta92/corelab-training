import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", to: "/" },
  { label: "Corsi", to: "/corsi" },
  { label: "Personal Trainer", to: "/personal-trainer" },
  { label: "Risultati", to: "/trasformazioni" },
  { label: "Abbonamenti", to: "/abbonamenti" },
  { label: "Contatti", to: "/contatti" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-(--color-border)  backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link
          to="/"
          className="text-lg font-bold tracking-wide text-(--color-text-primary)"
        >
          Core<span className="text-(--color-accent)">Lab</span> Training
        </Link>

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

        <div className="hidden md:block">
          <Link
            to="https://wa.me/393331234567"
            className="rounded-xl bg-(--color-accent) px-4 py-2 text-sm font-semibold text-black hover:bg-(--color-accent-hover) transition"
          >
            Prenota prova
          </Link>
        </div>

        <div className="md:hidden flex items-center">
          <button onClick={() => setOpen(!open)}>
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          open ? "max-h-screen" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col gap-4 px-6 pb-6 text-(--color-text-primary) bg-(--color-bg-main)">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "text-(--color-accent)"
                  : "hover:text-(--color-accent) transition"
              }
            >
              {item.label}
            </NavLink>
          ))}

          <Link
            to="https://wa.me/393331234567"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-xl bg-(--color-accent) px-4 py-2 text-sm font-semibold text-black hover:bg-(--color-accent-hover) text-center transition"
          >
            Prenota prova
          </Link>
        </nav>
      </div>
    </header>
  );
}
