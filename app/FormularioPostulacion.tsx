"use client";

import { useState, FormEvent } from "react";

type FormularioProps = {
  cta: string;
  correoContacto: string;
};

export default function FormularioPostulacion({ cta, correoContacto }: FormularioProps) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setErrorMsg(null);
    setSuccess(false);

    const formData = new FormData(e.currentTarget);
    const payload = {
      nombre_apoderado: formData.get("nombre")?.toString() || "",
      correo: formData.get("correo")?.toString() || "",
      telefono: formData.get("telefono")?.toString() || "",
      nombre_cadete: formData.get("referencia")?.toString() || "",
      edad_cadete: formData.get("edad")?.toString() || "",
      mensaje: formData.get("mensaje")?.toString() || "",
    };

    try {
      const res = await fetch("/api/postular", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Ocurrió un error al enviar la postulación.");
      }

      setSuccess(true);
      (e.target as HTMLFormElement).reset();
    } catch (err: any) {
      setErrorMsg(err.message || "Error de conexión.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 grid gap-4 sm:grid-cols-2">
      {success && (
        <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-4 text-center font-medium text-emerald-800 sm:col-span-2">
          ¡Postulación recibida con éxito! Nos pondremos en contacto contigo a la brevedad.
        </div>
      )}

      {errorMsg && (
        <div className="rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-center font-medium text-red-800 sm:col-span-2">
          {errorMsg}
        </div>
      )}

      <div>
        <label htmlFor="nombre" className="mb-1.5 block text-sm font-semibold">
          Nombre del apoderado
        </label>
        <input
          id="nombre"
          name="nombre"
          type="text"
          required
          className="w-full rounded-xl border border-line bg-paper px-4 py-3 outline-none focus:border-primary"
        />
      </div>

      <div>
        <label htmlFor="correo" className="mb-1.5 block text-sm font-semibold">
          Correo electrónico
        </label>
        <input
          id="correo"
          name="correo"
          type="email"
          required
          className="w-full rounded-xl border border-line bg-paper px-4 py-3 outline-none focus:border-primary"
        />
      </div>

      <div>
        <label htmlFor="telefono" className="mb-1.5 block text-sm font-semibold">
          Celular de contacto
        </label>
        <input
          id="telefono"
          name="telefono"
          type="tel"
          required
          className="w-full rounded-xl border border-line bg-paper px-4 py-3 outline-none focus:border-primary"
        />
      </div>

      <div>
        <label htmlFor="referencia" className="mb-1.5 block text-sm font-semibold">
          Nombre del cadete
        </label>
        <input
          id="referencia"
          name="referencia"
          type="text"
          required
          className="w-full rounded-xl border border-line bg-paper px-4 py-3 outline-none focus:border-primary"
        />
      </div>

      <div>
        <label htmlFor="edad" className="mb-1.5 block text-sm font-semibold">
          Edad del cadete (12 a 17 años)
        </label>
        <input
          id="edad"
          name="edad"
          type="number"
          min={12}
          max={17}
          required
          className="w-full rounded-xl border border-line bg-paper px-4 py-3 outline-none focus:border-primary"
        />
      </div>

      <div className="sm:col-span-2">
        <label htmlFor="mensaje" className="mb-1.5 block text-sm font-semibold">
          Pregunta o consulta
        </label>
        <textarea
          id="mensaje"
          name="mensaje"
          rows={4}
          className="w-full rounded-xl border border-line bg-paper px-4 py-3 outline-none focus:border-primary"
        />
      </div>

      <div className="sm:col-span-2">
        <button type="submit" disabled={loading} className="btn btn-bloque">
          {loading ? "Enviando postulación..." : cta}
        </button>
        <p className="mt-3 text-center text-sm text-muted">
          O escríbenos a {correoContacto}
        </p>
      </div>
    </form>
  );
}
