import Link from "next/link";

const experienceOptions = [
  "Turismo",
  "Eventos",
  "Marketing",
  "Ventas",
  "Relaciones públicas",
  "Producción audiovisual",
  "Redes sociales",
  "Atención clientes",
  "Administración",
  "Logística",
  "Gestión de proyectos",
];

const networkOptions = [
  "Hoteles",
  "Restaurantes",
  "Turismo",
  "Minería",
  "Comercio",
  "Cultura",
  "Educación",
  "Municipalidades",
  "Organizaciones sociales",
  "Medios de comunicación",
];

const interestOptions = [
  "Turismo",
  "Eventos",
  "Marketing",
  "Relaciones públicas",
  "Gestión comercial",
  "Desarrollo territorial",
  "Desarrollo de alianzas",
  "Operaciones",
  "Creación de contenido",
];

const skills = ["Comunicación", "Liderazgo", "Organización", "Negociación", "Trabajo en equipo", "Creatividad", "Ventas", "Redes sociales"];

function CheckboxGroup({ title, name, options }: { title: string; name: string; options: string[] }) {
  return (
    <fieldset className="rounded-[28px] border border-[#d8c8b2] bg-white p-6 shadow-[0_18px_60px_rgba(61,44,29,0.08)]">
      <legend className="px-2 text-xs font-bold uppercase tracking-[0.24em] text-[#b9783f]">{title}</legend>
      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        {options.map((option) => (
          <label key={option} className="flex items-center gap-3 rounded-2xl border border-[#eadcc9] bg-[#fffaf2] px-4 py-3 text-sm font-semibold text-[#5f6b70]">
            <input type="checkbox" name={name} value={option} className="h-4 w-4 accent-[#b9783f]" />
            {option}
          </label>
        ))}
      </div>
    </fieldset>
  );
}

function TextInput({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <label>
      <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#b9783f]">{label}</span>
      <input
        type={type}
        name={name}
        required
        className="mt-2 w-full rounded-2xl border border-[#d8c8b2] bg-white px-4 py-4 text-sm text-[#10202c] outline-none transition focus:border-[#b9783f] focus:ring-4 focus:ring-[#e6b36f]/20"
      />
    </label>
  );
}

export default function SurveyPage() {
  return (
    <main className="min-h-screen bg-[#f7efe2] text-[#10202c]">
      <section className="relative overflow-hidden bg-[#071b2a] px-5 py-8 text-white md:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(230,179,111,0.26),transparent_32%),linear-gradient(135deg,#071b2a_0%,#123447_62%,#8f4f2c_100%)]" />
        <div className="relative mx-auto w-full max-w-7xl">
          <nav className="flex items-center justify-between gap-5">
            <Link href="/" className="flex items-center gap-3" aria-label="Volver a THAKHI">
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/12 text-sm font-bold tracking-[0.18em]">
                TH
              </span>
              <span className="text-lg font-semibold tracking-[0.2em]">THAKHI</span>
            </Link>
            <Link href="/agentes-instagram" className="rounded-full border border-white/16 bg-white/8 px-5 py-3 text-sm font-bold text-white hover:bg-white/14">
              Agentes de Instagram
            </Link>
          </nav>

          <div className="max-w-4xl py-16 md:py-24">
            <p className="text-xs font-bold uppercase tracking-[0.32em] text-[#f0c98c]">Diagnóstico de capacidades</p>
            <h1 className="mt-5 text-5xl font-semibold tracking-[-0.05em] md:text-7xl">
              Encuesta THAKHI
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-9 text-white/76 md:text-2xl">
              Levantamos capacidades, redes de contacto e intereses para construir equipos de alto impacto territorial.
            </p>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 md:px-8 md:py-24">
        <form
          name="encuesta-thakhi"
          method="POST"
          action="/encuesta/gracias"
          data-netlify="true"
          netlify-honeypot="bot-field"
          className="mx-auto grid w-full max-w-5xl gap-8"
        >
          <input type="hidden" name="form-name" value="encuesta-thakhi" />
          <input type="hidden" name="recipient" value="phrepich@gmail.com" />
          <p className="hidden">
            <label>
              No completar: <input name="bot-field" />
            </label>
          </p>

          <section className="rounded-[32px] border border-[#d8c8b2] bg-white p-6 shadow-[0_28px_90px_rgba(61,44,29,0.1)] md:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#b9783f]">Datos generales</p>
            <div className="mt-6 grid gap-5 md:grid-cols-2">
              <TextInput label="Nombre" name="nombre" />
              <TextInput label="Correo" name="correo" type="email" />
              <TextInput label="Teléfono" name="telefono" type="tel" />
              <TextInput label="Ciudad" name="ciudad" />
            </div>
            <fieldset className="mt-8">
              <legend className="text-xs font-bold uppercase tracking-[0.18em] text-[#b9783f]">Disponibilidad</legend>
              <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {["Menos de 5 horas", "5 a 10 horas", "10 a 20 horas", "Más de 20 horas"].map((option) => (
                  <label key={option} className="rounded-2xl border border-[#eadcc9] bg-[#fffaf2] px-4 py-3 text-sm font-semibold text-[#5f6b70]">
                    <input type="radio" name="disponibilidad" value={option} required className="mr-3 accent-[#b9783f]" />
                    {option}
                  </label>
                ))}
              </div>
            </fieldset>
          </section>

          <CheckboxGroup title="Experiencia" name="experiencia" options={experienceOptions} />
          <CheckboxGroup title="Redes de contacto" name="redes_contacto" options={networkOptions} />

          <fieldset className="rounded-[28px] border border-[#d8c8b2] bg-white p-6 shadow-[0_18px_60px_rgba(61,44,29,0.08)]">
            <legend className="px-2 text-xs font-bold uppercase tracking-[0.24em] text-[#b9783f]">Cantidad aproximada de contactos</legend>
            <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {["Menos de 10", "10 a 25", "25 a 50", "Más de 50"].map((option) => (
                <label key={option} className="rounded-2xl border border-[#eadcc9] bg-[#fffaf2] px-4 py-3 text-sm font-semibold text-[#5f6b70]">
                  <input type="radio" name="cantidad_contactos" value={option} required className="mr-3 accent-[#b9783f]" />
                  {option}
                </label>
              ))}
            </div>
          </fieldset>

          <CheckboxGroup title="Áreas de interés" name="areas_interes" options={interestOptions} />

          <fieldset className="rounded-[28px] border border-[#d8c8b2] bg-white p-6 shadow-[0_18px_60px_rgba(61,44,29,0.08)]">
            <legend className="px-2 text-xs font-bold uppercase tracking-[0.24em] text-[#b9783f]">Habilidades: escala 1 a 5</legend>
            <div className="mt-5 grid gap-4">
              {skills.map((skill) => (
                <label key={skill} className="grid gap-3 rounded-2xl border border-[#eadcc9] bg-[#fffaf2] px-4 py-4 md:grid-cols-[220px_1fr] md:items-center">
                  <span className="text-sm font-semibold text-[#5f6b70]">{skill}</span>
                  <input type="range" name={`habilidad_${skill.toLowerCase().replaceAll(" ", "_")}`} min="1" max="5" defaultValue="3" className="accent-[#b9783f]" />
                </label>
              ))}
            </div>
          </fieldset>

          <section className="rounded-[32px] border border-[#d8c8b2] bg-white p-6 shadow-[0_28px_90px_rgba(61,44,29,0.1)] md:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#b9783f]">Preguntas abiertas</p>
            <div className="mt-6 grid gap-5">
              {[
                ["experiencia_relevante", "Describe tu experiencia más relevante."],
                ["desarrollo_thakhi", "¿Qué te gustaría desarrollar en THAKHI?"],
                ["redes_aporte", "¿Qué contactos o redes puedes aportar?"],
                ["oportunidades", "¿Qué oportunidades observas para THAKHI?"],
                ["observaciones", "Observaciones adicionales."],
              ].map(([name, label]) => (
                <label key={name}>
                  <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#b9783f]">{label}</span>
                  <textarea
                    name={name}
                    rows={4}
                    className="mt-2 w-full rounded-2xl border border-[#d8c8b2] bg-[#fffaf2] px-4 py-4 text-sm text-[#10202c] outline-none transition focus:border-[#b9783f] focus:ring-4 focus:ring-[#e6b36f]/20"
                  />
                </label>
              ))}
            </div>
          </section>

          <div className="flex flex-col gap-4 rounded-[32px] bg-[#10202c] p-6 text-white md:flex-row md:items-center md:justify-between md:p-8">
            <p className="max-w-2xl text-sm leading-7 text-white/72">
              Las respuestas permitirán identificar fortalezas, redes y oportunidades para desarrollar roles, liderazgo y
              proyectos dentro de THAKHI.
            </p>
            <button type="submit" className="rounded-full bg-[#e6b36f] px-8 py-4 text-sm font-bold text-[#071b2a] hover:bg-[#f0c98c]">
              Enviar encuesta
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}
