/* ═══════════════════════════════════════════════════════════════════
   EL MOLDE DE LA LANDING · El Tomate Mecánico (app/page.tsx)
   ═══════════════════════════════════════════════════════════════════ */

/* ══════════════════ 1. LOS DATOS · extraídos de ficha-tomate.md ══════════════════ */

const NEGOCIO = {
  nombre: "El Tomate Mecánico",
  promesa: "Formación de fútbol de alto rendimiento para jóvenes en Santiago",
  bajada: "Cadete Menor, Mayor y Proyección con evaluación táctico-física con IA y seguimiento médico.",
  cta: "Quiero postular",
};

// Tres datos duros de la fuente
const DATOS_HERO: { valor: string; texto: string }[] = [
  { valor: "3", texto: "Categorías de desarrollo (Sub-13 a Sub-17)" },
  { valor: "85%", texto: "Asistencia mínima mensual exigida" },
  { valor: "100%", texto: "Evaluación táctico-física con IA" },
];

// PRUEBA · por qué creerte
const PRUEBA: { titulo: string; texto: string }[] = [
  {
    titulo: "Evaluación Táctica con IA",
    texto: "Prueba de admisión presencial en cancha con GPS, video, TacticalAI y BiophysicalAI para medir tu potencial real.",
  },
  {
    titulo: "Seguimiento Integral",
    texto: "Entrenamientos con seguimiento médico básico, campeonato interno y acceso a la app iOS con reportes para apoderados.",
  },
  {
    titulo: "Exigencia y Compromiso",
    texto: "Formación de excelencia que exige un 85% de asistencia mensual y un informe académico con nota mínima 4,0.",
  },
];

// OFERTA · Categorías, horarios y aranceles 2026
const OFERTA_TITULO = "Categorías y Aranceles 2026";
const OFERTA: { nombre: string; detalle: string; precio: string; nota: string }[] = [
  {
    nombre: "Cadete Menor (Sub-13 / Sub-14)",
    detalle: "12 a 14 años · Mar y Jue (18:00 a 19:30) · Sáb (10:00 a 12:00)",
    precio: "$85.000",
    nota: "mensual (10 cuotas) · Matrícula $120.000",
  },
  {
    nombre: "Cadete Mayor (Sub-15 / Sub-16)",
    detalle: "15 a 16 años · Lun, Mié y Vie (18:00 a 20:00) · Sáb (09:00 a 11:30)",
    precio: "$95.000",
    nota: "mensual (10 cuotas) · Matrícula $120.000",
  },
  {
    nombre: "Proyección (Sub-17)",
    detalle: "17 años · Lun a Vie (17:30 a 20:00) · Sáb (09:00 a 12:00)",
    precio: "$110.000",
    nota: "mensual (10 cuotas) · Matrícula $120.000",
  },
];

// Becas, descuentos y notas
const EXTRAS: string[] = [
  "Beca Garra Tricolor: Hasta 50% por mérito deportivo en prueba de admisión",
  "Descuento por Hermanos: 15% de rebaja en la mensualidad del 2do cadete",
  "Pago Anual al Contado: 10% de descuento directo sobre el total del año",
  "El uniforme de juego se compra aparte (no incluido en el arancel)",
];

// CÓMO SE HACE · las cuatro etapas de postulación
const PASOS: { titulo: string; texto: string }[] = [
  {
    titulo: "Postulación Online",
    texto: "Completa el formulario oficial de postulación en nuestro sitio web con tus datos básicos.",
  },
  {
    titulo: "Prueba Táctico-Física",
    texto: "Jornada evaluativa en cancha los días sábados por la mañana con GPS, video y análisis computacional.",
  },
  {
    titulo: "Entrevista Familiar",
    texto: "Evaluación presencial sobre compromiso académico (nota min. 4,0), valores y disponibilidad.",
  },
  {
    titulo: "Resultado por Email",
    texto: "Notificación formal del resultado de admisión vía correo en un plazo máximo de 10 días hábiles.",
  },
];

// EL FORMULARIO · los 6 campos solicitados
type Campo = {
  name: string;
  label: string;
  tipo: "text" | "email" | "tel" | "number" | "textarea";
  ancho?: "completo";
};
const CAMPOS: Campo[] = [
  { name: "nombre", label: "Nombre del apoderado", tipo: "text" },
  { name: "correo", label: "Correo electrónico", tipo: "email" },
  { name: "telefono", label: "Celular de contacto", tipo: "tel" },
  { name: "referencia", label: "Nombre del cadete", tipo: "text" },
  { name: "edad", label: "Edad del cadete (12 a 17 años)", tipo: "number" },
  { name: "mensaje", label: "Pregunta o consulta", tipo: "textarea", ancho: "completo" },
];

const CONTACTO = {
  direccion: "Complejo Deportivo La Reconquista, Av. Departamental 1810, La Florida, Santiago",
  correo: "admisiones@eltomatemecanico.cl",
  telefono: "+56 2 2345 6789 (Lu-Vi 10:00 a 18:00)",
};

/* ══════════════════ 2. LA PÁGINA · de aquí abajo no se toca ══════════════════ */

export default function Home() {
  return (
    <div className="flex flex-1 flex-col pb-20 md:pb-0">
      {/* ── Barra de arriba ── */}
      <header className="sticky top-0 z-40 border-b border-line bg-paper/90 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-3.5">
          <span className="text-lg font-bold tracking-tight">{NEGOCIO.nombre}</span>
          <a href="#postular" className="btn hidden px-5 py-2.5 text-sm sm:inline-flex">
            {NEGOCIO.cta}
          </a>
        </div>
      </header>

      {/* ── 1 · PORTADA: la promesa y el llamado a la acción ── */}
      <section className="bg-primary text-white">
        <div className="mx-auto max-w-5xl px-5 py-16 sm:py-24">
          <h1 className="max-w-3xl text-balance text-[clamp(2.1rem,7vw,3.6rem)] font-bold leading-[1.08] tracking-tight">
            {NEGOCIO.promesa}
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/85">{NEGOCIO.bajada}</p>
          <a href="#postular" className="btn btn-inverso mt-8">
            {NEGOCIO.cta}
          </a>

          <dl className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-2xl bg-white/25 sm:grid-cols-3">
            {DATOS_HERO.map((d) => (
              <div key={d.texto} className="bg-primary px-5 py-5">
                <dt className="text-3xl font-bold tabular-nums">{d.valor}</dt>
                <dd className="mt-1 text-sm text-white/80">{d.texto}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── 2 · PRUEBA: por qué creerte ── */}
      <section className="bg-paper">
        <div className="mx-auto max-w-5xl px-5 py-16 sm:py-20">
          <h2 className="text-[clamp(1.6rem,4vw,2.2rem)] font-bold tracking-tight">
            Por qué elegirnos
          </h2>
          <div className="mt-9 grid gap-5 sm:grid-cols-3">
            {PRUEBA.map((p, i) => (
              <article key={p.titulo} className="rounded-2xl border border-line p-6">
                <span className="text-sm font-bold tabular-nums text-primary-ink">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 text-xl font-bold leading-snug">{p.titulo}</h3>
                <p className="mt-2 leading-relaxed text-muted">{p.texto}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3 · OFERTA: qué incluye y cuánto cuesta ── */}
      <section className="bg-soft">
        <div className="mx-auto max-w-5xl px-5 py-16 sm:py-20">
          <h2 className="text-[clamp(1.6rem,4vw,2.2rem)] font-bold tracking-tight">
            {OFERTA_TITULO}
          </h2>
          <div className="mt-9 grid gap-5 sm:grid-cols-3">
            {OFERTA.map((o) => (
              <article
                key={o.nombre}
                className="flex flex-col rounded-2xl border border-line bg-paper p-6"
              >
                <h3 className="text-xl font-bold leading-snug">{o.nombre}</h3>
                <p className="mt-1 text-sm text-muted">{o.detalle}</p>
                <p className="mt-auto pt-5 text-3xl font-bold tabular-nums text-primary-ink">
                  {o.precio}
                </p>
                <p className="mt-1 text-sm text-muted">{o.nota}</p>
              </article>
            ))}
          </div>
          {EXTRAS.length > 0 && (
            <ul className="mt-7 flex flex-wrap gap-2.5">
              {EXTRAS.map((e) => (
                <li
                  key={e}
                  className="rounded-full border border-line bg-paper px-4 py-2 text-sm font-medium"
                >
                  {e}
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      {/* ── 4 · CÓMO SE HACE: los pasos ── */}
      <section className="bg-paper">
        <div className="mx-auto max-w-5xl px-5 py-16 sm:py-20">
          <h2 className="text-[clamp(1.6rem,4vw,2.2rem)] font-bold tracking-tight">
            Cómo es el proceso
          </h2>
          <ol className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {PASOS.map((p, i) => (
              <li key={p.titulo} className="border-t-2 border-primary pt-4">
                <span className="text-sm font-bold tabular-nums text-primary-ink">
                  Paso {i + 1}
                </span>
                <h3 className="mt-1 text-lg font-bold leading-snug">{p.titulo}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{p.texto}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── 5 · EL LLAMADO FINAL: el formulario ── */}
      <section id="postular" className="bg-soft">
        <div className="mx-auto max-w-3xl px-5 py-16 sm:py-20">
          <h2 className="text-[clamp(1.6rem,4vw,2.2rem)] font-bold tracking-tight">
            {NEGOCIO.cta}
          </h2>
          <p className="mt-2 text-muted">Déjanos tus datos y te respondemos.</p>
          <form action="#" className="mt-8 grid gap-4 sm:grid-cols-2">
            {CAMPOS.map((c) => (
              <div key={c.name} className={c.ancho === "completo" ? "sm:col-span-2" : undefined}>
                <label htmlFor={c.name} className="mb-1.5 block text-sm font-semibold">
                  {c.label}
                </label>
                {c.tipo === "textarea" ? (
                  <textarea
                    id={c.name}
                    name={c.name}
                    rows={4}
                    className="w-full rounded-xl border border-line bg-paper px-4 py-3 outline-none focus:border-primary"
                  />
                ) : (
                  <input
                    id={c.name}
                    name={c.name}
                    type={c.tipo}
                    className="w-full rounded-xl border border-line bg-paper px-4 py-3 outline-none focus:border-primary"
                  />
                )}
              </div>
            ))}
            <div className="sm:col-span-2">
              <button type="submit" className="btn btn-bloque">
                {NEGOCIO.cta}
              </button>
              <p className="mt-3 text-center text-sm text-muted">
                O escríbenos a {CONTACTO.correo}
              </p>
            </div>
          </form>
        </div>
      </section>

      {/* ── Pie ── */}
      <footer className="border-t border-line bg-paper">
        <div className="mx-auto grid max-w-5xl gap-2 px-5 py-10 text-sm text-muted sm:grid-cols-3">
          <p className="font-bold text-ink">{NEGOCIO.nombre}</p>
          <p>{CONTACTO.direccion}</p>
          <p>
            {CONTACTO.correo} · {CONTACTO.telefono}
          </p>
        </div>
      </footer>

      {/* ── El mismo botón, fijo abajo, solo en celular ── */}
      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-line bg-paper/95 p-3 backdrop-blur md:hidden">
        <a href="#postular" className="btn btn-bloque">
          {NEGOCIO.cta}
        </a>
      </div>
    </div>
  );
}
