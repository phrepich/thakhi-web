import Image from "next/image";
import Link from "next/link";

const navItems = [
  { href: "#que-es", label: "Qué es" },
  { href: "#lineas", label: "Líneas" },
  { href: "#equipo", label: "Equipo" },
  { href: "#responsabilidades", label: "Responsabilidades" },
  { href: "#modelo", label: "Modelo" },
  { href: "#contacto", label: "Contacto" },
];

const workLines = [
  {
    title: "Turismo y Experiencias",
    description: "Rutas, actividades, experiencias corporativas, turismo cultural y programas personalizados.",
  },
  {
    title: "Eventos, Ferias y Festivales",
    description: "Diseño, gestión y producción de eventos públicos, privados, comunitarios y corporativos.",
  },
  {
    title: "Relaciones Públicas y Auspicios",
    description: "Gestión de patrocinadores, alianzas estratégicas, vinculación institucional y desarrollo de redes.",
  },
  {
    title: "Marketing Territorial",
    description: "Posicionamiento de destinos, campañas locales, contenidos, activaciones y comunicación de marca.",
  },
];

const team = [
  {
    name: "Pablo Hrepich",
    role: "Dirección General y Desarrollo Estratégico.",
    description: "Responsable de visión, alianzas, nuevos negocios y expansión.",
  },
  {
    name: "Alejandra",
    role: "Representante Ejecutiva en Iquique.",
    description: "Dirección comercial, marketing, clientes y coordinación regional.",
  },
  {
    name: "Virna",
    role: "Vinculación y Desarrollo de Eventos.",
    description: "Relaciones públicas, auspicios, patrocinadores y generación de oportunidades.",
  },
  {
    name: "Lucas",
    role: "Producción General y Experiencias.",
    description: "Operación de eventos, atención turística, logística y experiencia de clientes.",
  },
];

const steps = [
  "Escuchamos la oportunidad.",
  "Conectamos actores clave.",
  "Diseñamos la experiencia.",
  "Ejecutamos y generamos valor.",
];

const responsibilities = [
  {
    title: "Desarrollo Comercial",
    objective: "Generar oportunidades de negocio.",
    tasks: [
      "Prospectar clientes.",
      "Gestionar reuniones.",
      "Presentar servicios.",
      "Elaborar propuestas.",
      "Realizar seguimiento comercial.",
      "Cerrar acuerdos.",
      "Mantener CRM actualizado.",
    ],
    indicators: ["Contactos generados.", "Reuniones realizadas.", "Propuestas enviadas.", "Negocios cerrados."],
  },
  {
    title: "Relaciones Públicas y Vinculación",
    objective: "Construir redes y alianzas.",
    tasks: [
      "Gestionar relaciones institucionales.",
      "Vincular organizaciones públicas y privadas.",
      "Identificar aliados estratégicos.",
      "Gestionar patrocinadores y auspiciadores.",
      "Participar en actividades de networking.",
      "Representar a THAKHI en actividades externas.",
    ],
    indicators: [
      "Alianzas generadas.",
      "Auspiciadores contactados.",
      "Convenios firmados.",
      "Actividades de vinculación realizadas.",
    ],
  },
  {
    title: "Desarrollo Turístico",
    objective: "Diseñar experiencias atractivas y comercializables.",
    tasks: [
      "Identificar atractivos turísticos.",
      "Diseñar rutas y experiencias.",
      "Gestionar proveedores.",
      "Coordinar operadores locales.",
      "Desarrollar paquetes turísticos.",
      "Levantar oportunidades de turismo corporativo.",
    ],
    indicators: [
      "Rutas desarrolladas.",
      "Experiencias comercializadas.",
      "Clientes atendidos.",
      "Evaluación de satisfacción.",
    ],
  },
  {
    title: "Producción de Eventos",
    objective: "Diseñar y ejecutar actividades exitosas.",
    tasks: [
      "Diseñar eventos.",
      "Gestionar espacios.",
      "Coordinar proveedores.",
      "Gestionar logística.",
      "Supervisar ejecución.",
      "Evaluar resultados.",
    ],
    indicators: ["Eventos realizados.", "Participantes.", "Nivel de satisfacción.", "Rentabilidad por evento."],
  },
  {
    title: "Marketing y Comunicaciones",
    objective: "Posicionar la marca y generar visibilidad.",
    tasks: [
      "Administrar redes sociales.",
      "Crear contenido.",
      "Gestionar campañas.",
      "Mantener sitio web.",
      "Difundir actividades.",
      "Gestionar imagen corporativa.",
    ],
    indicators: ["Alcance digital.", "Seguidores.", "Consultas recibidas.", "Conversiones generadas."],
  },
  {
    title: "Gestión y Administración",
    objective: "Mantener la sostenibilidad operativa.",
    tasks: [
      "Control financiero.",
      "Presupuestos.",
      "Facturación.",
      "Control documental.",
      "Seguimiento de indicadores.",
      "Elaboración de reportes.",
    ],
    indicators: ["Flujo de caja.", "Facturación mensual.", "Gastos operacionales.", "Cumplimiento de metas."],
  },
];

function SectionIntro({
  eyebrow,
  title,
  description,
  light = false,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  light?: boolean;
}) {
  return (
    <div className="max-w-3xl space-y-4">
      <p className={`text-xs font-bold uppercase tracking-[0.28em] ${light ? "text-[#f0c98c]" : "text-[#b9783f]"}`}>
        {eyebrow}
      </p>
      <h2 className={`text-3xl font-semibold tracking-[-0.04em] md:text-5xl ${light ? "text-white" : "text-[#10202c]"}`}>
        {title}
      </h2>
      {description ? <p className={`text-base leading-8 md:text-lg ${light ? "text-white/72" : "text-[#5f6b70]"}`}>{description}</p> : null}
    </div>
  );
}

export default function HomePage() {
  return (
    <main className="overflow-hidden">
      <section className="relative min-h-screen overflow-hidden bg-[#071b2a] text-white">
        <Image
          src="/thakhi-hero-tarapaca.png"
          alt="Costa, desierto y cultura nortina en Tarapacá"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,27,42,0.93)_0%,rgba(7,27,42,0.72)_48%,rgba(7,27,42,0.22)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,27,42,0.18)_0%,rgba(7,27,42,0)_42%,rgba(7,27,42,0.82)_100%)]" />

        <header className="relative z-20 border-b border-white/10 bg-[#071b2a]/50 backdrop-blur-xl">
          <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-5 px-5 py-4 md:px-8">
            <Link href="/" className="flex items-center gap-3" aria-label="THAKHI inicio">
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/12 text-sm font-bold tracking-[0.18em]">
                TH
              </span>
              <span className="text-lg font-semibold tracking-[0.2em]">THAKHI</span>
            </Link>
            <nav className="hidden items-center gap-7 lg:flex">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} className="text-sm font-medium text-white/72 hover:text-white">
                  {item.label}
                </Link>
              ))}
            </nav>
            <Link
              href="#contacto"
              className="rounded-full bg-[#e6b36f] px-5 py-3 text-sm font-bold text-[#071b2a] shadow-[0_18px_48px_rgba(230,179,111,0.28)] hover:bg-[#f0c98c]"
            >
              Conversemos
            </Link>
          </div>
        </header>

        <div className="relative z-10 mx-auto flex min-h-[calc(100vh-80px)] w-full max-w-7xl items-center px-5 pb-20 pt-16 md:px-8">
          <div className="max-w-4xl space-y-8">
            <p className="text-xs font-bold uppercase tracking-[0.34em] text-[#e6b36f]">Iquique · Región de Tarapacá</p>
            <div className="space-y-5">
              <h1 className="text-6xl font-semibold tracking-[0.02em] md:text-8xl lg:text-9xl">THAKHI</h1>
              <p className="max-w-3xl text-2xl font-medium leading-tight text-white/92 md:text-4xl">
                Plataforma de articulación territorial y generación de experiencias en Tarapacá.
              </p>
            </div>
            <p className="max-w-2xl text-base leading-8 text-white/76 md:text-xl">
              Conectamos personas, empresas, instituciones y territorio para crear experiencias turísticas, eventos,
              ferias, festivales y activaciones con identidad local.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="#contacto" className="rounded-full bg-[#e6b36f] px-7 py-4 text-sm font-bold text-[#071b2a] shadow-[0_18px_48px_rgba(230,179,111,0.28)] hover:bg-[#f0c98c]">
                Conversemos
              </Link>
              <Link href="#lineas" className="rounded-full border border-white/20 bg-white/10 px-7 py-4 text-sm font-bold text-white backdrop-blur hover:bg-white/16">
                Ver líneas de trabajo
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="que-es" className="relative px-5 py-20 md:px-8 md:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(213,125,64,0.22),transparent_34%),linear-gradient(135deg,#f7efe2_0%,#fffaf2_55%,#d9edf4_100%)]" />
        <div className="relative mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
          <SectionIntro eyebrow="Qué es THAKHI" title="Relaciones, territorio y experiencia convertidos en oportunidades reales." />
          <div className="rounded-[28px] border border-[#d8c8b2] bg-white/76 p-8 shadow-[0_28px_90px_rgba(61,44,29,0.12)] backdrop-blur md:p-10">
            <p className="text-lg leading-9 text-[#485459] md:text-xl">
              THAKHI nace para articular oportunidades en Iquique y Tarapacá, integrando relaciones públicas, turismo,
              producción de eventos, cultura local y desarrollo comercial. Nuestro principal activo es el capital humano:
              personas capaces de abrir puertas, conectar redes y transformar ideas en experiencias reales.
            </p>
          </div>
        </div>
      </section>

      <section id="lineas" className="bg-[#fffaf2] px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto w-full max-w-7xl space-y-12">
          <SectionIntro
            eyebrow="Líneas de trabajo"
            title="Cuatro frentes para activar presencia, comunidad y valor territorial."
            description="Cada línea combina lectura local, gestión de redes y ejecución para que las ideas puedan vivir en terreno."
          />
          <div className="grid gap-5 md:grid-cols-2">
            {workLines.map((line, index) => (
              <article key={line.title} className="rounded-[28px] border border-[#dbc8ae] bg-[#fdf8ef] p-7 shadow-[0_22px_70px_rgba(61,44,29,0.08)] transition duration-300 hover:-translate-y-1 hover:border-[#c4824a] hover:bg-white md:p-8">
                <p className="text-sm font-bold tracking-[0.24em] text-[#b9783f]">0{index + 1}</p>
                <h3 className="mt-8 text-2xl font-semibold tracking-[-0.03em] text-[#10202c]">{line.title}</h3>
                <p className="mt-4 text-base leading-8 text-[#657074]">{line.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="equipo" className="bg-[#123447] px-5 py-20 text-white md:px-8 md:py-28">
        <div className="mx-auto w-full max-w-7xl space-y-12">
          <SectionIntro
            eyebrow="Equipo"
            title="Un equipo pensado para abrir puertas, coordinar actores y cuidar la experiencia."
            description="THAKHI pone al centro el capital humano: criterio, presencia local, relaciones y capacidad de ejecución."
            light
          />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {team.map((person) => (
              <article key={person.name} className="rounded-[28px] border border-white/12 bg-white/8 p-7 backdrop-blur">
                <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-full bg-[#e6b36f] text-sm font-bold tracking-[0.16em] text-[#123447]">
                  {person.name.slice(0, 2).toUpperCase()}
                </div>
                <h3 className="text-2xl font-semibold tracking-[-0.03em]">{person.name}</h3>
                <p className="mt-4 text-sm font-semibold leading-7 text-[#f0c98c]">{person.role}</p>
                <p className="mt-3 text-sm leading-7 text-white/70">{person.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="responsabilidades" className="bg-[#fffaf2] px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto w-full max-w-7xl space-y-12">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <SectionIntro
              eyebrow="Responsabilidades críticas"
              title="Funciones cubiertas permanentemente para sostener el crecimiento de THAKHI."
              description="Una misma persona puede asumir más de una función y las responsabilidades pueden redistribuirse según carga de trabajo, capacidades y resultados."
            />
            <div className="rounded-[24px] border border-[#d8c8b2] bg-[#f7efe2] px-6 py-5 text-sm leading-7 text-[#5f6b70] lg:max-w-sm">
              Todas las responsabilidades pertenecen al equipo y no a una persona específica.
            </div>
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            {responsibilities.map((area, index) => (
              <article
                key={area.title}
                className="rounded-[28px] border border-[#dbc8ae] bg-white p-6 shadow-[0_22px_70px_rgba(61,44,29,0.08)] md:p-8"
              >
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <p className="text-sm font-bold tracking-[0.24em] text-[#b9783f]">0{index + 1}</p>
                    <h3 className="mt-5 text-2xl font-semibold tracking-[-0.03em] text-[#10202c]">{area.title}</h3>
                  </div>
                  <span className="rounded-full bg-[#f7efe2] px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#8f4f2c]">
                    Crítica
                  </span>
                </div>
                <p className="mt-5 text-base font-semibold leading-7 text-[#123447]">{area.objective}</p>
                <div className="mt-7 grid gap-6 md:grid-cols-2">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#b9783f]">Responsabilidades</p>
                    <ul className="mt-4 space-y-2 text-sm leading-6 text-[#5f6b70]">
                      {area.tasks.map((task) => (
                        <li key={task} className="flex gap-2">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#c4824a]" />
                          <span>{task}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#b9783f]">Indicadores</p>
                    <ul className="mt-4 space-y-2 text-sm leading-6 text-[#5f6b70]">
                      {area.indicators.map((indicator) => (
                        <li key={indicator} className="rounded-2xl border border-[#eadcc9] bg-[#fffaf2] px-4 py-2">
                          {indicator}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="relative overflow-hidden rounded-[32px] bg-[#10202c] p-8 text-white shadow-[0_32px_100px_rgba(16,32,44,0.24)] md:p-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(230,179,111,0.28),transparent_32%),linear-gradient(135deg,#10202c_0%,#123447_60%,#8f4f2c_100%)]" />
            <div className="relative grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#f0c98c]">Principio de operación</p>
                <h3 className="mt-4 text-3xl font-semibold tracking-[-0.04em] md:text-4xl">
                  Organización flexible, colaborativa y orientada a resultados.
                </h3>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {["Capacidades individuales.", "Disponibilidad.", "Interés.", "Resultados obtenidos."].map((item) => (
                  <div key={item} className="rounded-2xl border border-white/12 bg-white/8 px-5 py-4 text-sm font-semibold text-white/78">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="modelo" className="bg-[#f7efe2] px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto grid w-full max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <SectionIntro eyebrow="Modelo de trabajo" title="De la oportunidad a la experiencia, con una ruta clara y humana." />
          <div className="grid gap-4">
            {steps.map((step, index) => (
              <div key={step} className="grid gap-5 rounded-[24px] border border-[#d8c8b2] bg-white/72 p-6 shadow-[0_18px_60px_rgba(61,44,29,0.08)] md:grid-cols-[84px_1fr] md:items-center">
                <span className="text-4xl font-semibold tracking-[-0.05em] text-[#c4824a]">0{index + 1}</span>
                <p className="text-xl font-semibold tracking-[-0.02em] text-[#10202c]">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#fffaf2] px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto w-full max-w-7xl">
          <div className="relative overflow-hidden rounded-[32px] bg-[#8f4f2c] p-8 text-white shadow-[0_32px_110px_rgba(61,44,29,0.24)] md:p-12">
            <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(7,27,42,0.38),rgba(143,79,44,0.24)),radial-gradient(circle_at_top_right,rgba(230,179,111,0.35),transparent_34%)]" />
            <div className="relative max-w-4xl space-y-5">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#f0c98c]">Objetivo 90 días</p>
              <p className="text-2xl font-medium leading-tight md:text-4xl">
                En los primeros 90 días THAKHI busca instalar presencia comercial en Iquique, levantar alianzas
                estratégicas, activar una agenda de eventos y turismo, y comenzar a generar ingresos mediante
                experiencias, auspicios y servicios de producción.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="contacto" className="relative bg-[#071b2a] px-5 py-20 text-white md:px-8 md:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(230,179,111,0.22),transparent_32%),linear-gradient(135deg,#071b2a_0%,#123447_58%,#8f4f2c_100%)]" />
        <div className="relative mx-auto flex w-full max-w-7xl flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-3xl space-y-5">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#f0c98c]">Activemos Tarapacá</p>
            <h2 className="text-4xl font-semibold tracking-[-0.04em] md:text-6xl">
              Construyamos experiencias con identidad territorial.
            </h2>
            <p className="max-w-2xl text-base leading-8 text-white/76 md:text-lg">
              Si eres empresa, institución, emprendedor, operador turístico o marca interesada en activar presencia en
              Tarapacá, THAKHI puede ayudarte a conectar con el territorio.
            </p>
          </div>
          <Link href="mailto:contacto@thakhi.cl" className="inline-flex shrink-0 justify-center rounded-full bg-[#e6b36f] px-8 py-4 text-sm font-bold text-[#071b2a] shadow-[0_18px_48px_rgba(230,179,111,0.28)] hover:bg-[#f0c98c]">
            Contactar a THAKHI
          </Link>
        </div>
      </section>
    </main>
  );
}
