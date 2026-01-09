import { useState } from "react";
import { contatti } from "../data/data";
import Toast from "../components/ui/Toast";
import bg from "../assets/contacts.jpg";

export default function Contatti() {
  const [showToast, setShowToast] = useState(false);
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    messaggio: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setShowToast(true);

    // reset opzionale form
    setFormData({ nome: "", email: "", messaggio: "" });
  };
  return (
    <div
      className="flex-1 flex flex-col gap-16 px-6 py-16 bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})`, minHeight: `80vh` }}
    >
      <div className="px-6 py-16  ">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-6 text-(--color-text-primary)">
            Contattaci
          </h1>

          <div className="grid md:grid-cols-2 gap-12">
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <input
                type="text"
                name="nome"
                placeholder="Nome"
                value={formData.nome}
                onChange={handleChange}
                className="p-4 border rounded-xl bg-(--color-bg-surface) text-(--color-text-primary) backdrop-blur-md"
                required
                style={{ backgroundColor: "var(--color-bg-surface-light)" }}
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="p-4 border rounded-xl bg-(--color-bg-surface) text-(--color-text-primary backdrop-blur-md)"
                required
                style={{ backgroundColor: "var(--color-bg-surface-light)" }}
              />
              <textarea
                name="messaggio"
                placeholder="Messaggio"
                rows={5}
                value={formData.messaggio}
                onChange={handleChange}
                className="p-4 border rounded-xl bg-(--color-bg-surface) text-(--color-text-primary) backdrop-blur-md"
                required
                style={{ backgroundColor: "var(--color-bg-surface-light)" }}
              ></textarea>
              <button
                type="submit"
                className="bg-(--color-accent) text-black px-6 py-3 rounded-xl font-bold hover:bg-(--color-accent-hover) transition"
              >
                Invia messaggio
              </button>
            </form>

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

        {/* Toast */}
        {showToast && (
          <Toast
            message="Messaggio inviato con successo!"
            onClose={() => setShowToast(false)}
          />
        )}
      </div>
    </div>
  );
}
