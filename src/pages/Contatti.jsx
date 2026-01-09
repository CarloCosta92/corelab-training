import { contatti } from "../data/data";

export default function Contatti() {
  return (
    <div className="px-6 py-16  ">
      <div className="max-w-7xl mx-auto">
        {/* Titolo */}
        <h1 className="text-4xl font-bold mb-6 text-(--color-text-primary)">
          Contattaci
        </h1>

        {/* Grid principale: form + info contatto */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Form */}
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Nome"
              className="p-4 border rounded-xl bg-(--color-bg-surface) text-(--color-text-primary)"
            />
            <input
              type="email"
              placeholder="Email"
              className="p-4 border rounded-xl bg-(--color-bg-surface) text-(--color-text-primary)"
            />
            <textarea
              placeholder="Messaggio"
              className="p-4 border rounded-xl bg-(--color-bg-surface) text-(--color-text-primary)"
              rows={5}
            ></textarea>
            <button
              type="submit"
              className="bg-(--color-accent) text-black px-6 py-3 rounded-xl font-bold hover:bg-(--color-accent-hover) transition"
            >
              Invia messaggio
            </button>
          </form>

          {/* Info contatto */}
          <div className="flex flex-col gap-4 text-(--color-text-primary)">
            <p>
              <strong>Telefono:</strong> {contatti.telefono}
            </p>
            <p>
              <strong>Email:</strong> {contatti.email}
            </p>
            <p>
              <strong>Indirizzo:</strong> {contatti.indirizzo}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
