export default function Footer() {
  return (
    <footer className="border-t border-(--color-border) ">
      <div className="mx-auto max-w-7xl px-6 py-10 text-sm text-(--color-text-secondary)">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-semibold text-(--color-text-primary)">
              CoreLab Training
            </p>
            <p className="mt-1 max-w-xs">
              Centro di allenamento multifunzionale orientato ai risultati.
            </p>
          </div>
          <div className="flex gap-6">
            <span>Sito demo</span>
            <span>Portfolio Runiklabs</span>
          </div>
        </div>
        <div className="mt-8 text-xs text-(--color-text-secondary)">
          © {new Date().getFullYear()} CoreLab Training — progetto dimostrativo.
        </div>
      </div>
    </footer>
  );
}
