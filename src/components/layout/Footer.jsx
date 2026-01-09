import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t border-(--color-border) bg-(--color-bg-main) text-(--color-text-secondary)">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 md:gap-0">
          <div className="flex-1">
            <p className="font-semibold text-(--color-text-primary) text-lg">
              CoreLab Training
            </p>
            <p className="mt-2 max-w-xs text-sm">
              Centro di allenamento multifunzionale orientato ai risultati.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 text-sm">
            <Link
              to="https://www.runiklabs.com/"
              className="hover:text-(--color-accent) transition"
            >
              Runiklabs
            </Link>
            <Link
              to="/contatti"
              className="hover:text-(--color-accent) transition"
            >
              Contatti
            </Link>
          </div>
        </div>

        <div className="mt-8 text-xs text-(--color-text-secondary) text-center md:text-left">
          © {new Date().getFullYear()} CoreLab Training — progetto dimostrativo.
        </div>
      </div>
    </footer>
  );
}
