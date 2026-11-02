import Image from "next/image";
import Link from "next/link";

const navItems = [
  { href: "#que-es", label: "Qué es" },
  { href: "#plataforma", label: "Plataforma" },
  { href: "#lineas", label: "Líneas" },
  { href: "#colaboracion-na", label: "Colaboración NA" },
  { href: "/tarapaca", label: "Antecedente Tarapacá" },
  { href: "#contacto", label: "Contacto" },
];

const workLines = [
  { title: "Eventos y Producción", description: "Diseño, organización y coordinación de eventos culturales, deportivos, corporativos, ferias y activaciones." },
  { title: "Obras y Habilitación de Espacios", description: "Evaluación y coordinación de obras, remodelaciones, habilitaciones y montajes de infraestructura según el alcance de cada proyecto." },
  { title: "Audiovisual y Contenidos", description: "Producción audiovisual, fotografía y contenidos digitales para proyectos, experiencias y comunicación de marca." },
  { title: "Turismo y Experiencias", description: "Diseño y coordinación de rutas, actividades culturales y experiencias territoriales con operadores y colaboradores según cada encargo." },
  { title: "Logística y Equipamiento", description: "Coordinación de proveedores, montajes, traslados y requerimientos de equipos e infraestructura para la operación de proyectos." },
  { title: "Vinculación y Gestión de Proyectos", description: "Articulación de redes, relaciones públicas, alianzas y auspicios, con organización de antecedentes y seguimiento de iniciativas." },
];

const platformFlow = ["Personas", "Redes", "Oportunidades", "Proyectos", "Experiencias", "Desarrollo Territorial"];

const platformCards = [
  {
    title: "Personas",
    description: "Capital humano capaz de abrir conversaciones, generar confianza y leer oportunidades locales.",
  },
  {
    title: "Redes",
    description: "Vínculos entre empresas, instituciones, comunidades, emprendedores y operadores del territorio.",
  },
  {
    title: "Oportunidades",
    description: "Ideas, necesidades y espacios de colaboración que pueden transformarse en valor compartido.",
  },
  {
    title: "Experiencias",
    description: "Activaciones, rutas, eventos y programas que conectan marca, cultura y comunidad.",
  },
  {
    title: "Impacto Territorial",
    description: "Aportes buscados al desarrollo local, la identidad regional y la colaboración entre actores del territorio.",
  },
];

const humanCapitalCards = [
  {
    title: "Identificación de Capacidades",
    points: ["Experiencia", "Habilidades", "Redes de contacto", "Conocimiento territorial"],
  },
  {
    title: "Desarrollo de Liderazgo",
    points: ["Comunicación", "Negociación", "Organización", "Trabajo colaborativo"],
  },
  {
    title: "Marca Personal",
    points: ["Redes sociales", "Creación de contenido", "Posicionamiento profesional", "Embajadores THAKI"],
  },
  {
    title: "Generación de Oportunidades",
    points: ["Alianzas", "Auspicios", "Nuevos negocios", "Desarrollo territorial"],
  },
];

const growthFlow = ["Personas", "Redes", "Oportunidades", "Experiencias", "Impacto Territorial"];

const internalProgramIndicators = [
  "Contactos generados",
  "Alianzas construidas",
  "Participación en actividades",
  "Alcance digital",
  "Oportunidades detectadas",
  "Proyectos impulsados",
];

const steps = [
  "Escuchamos la oportunidad.",
  "Conectamos actores clave.",
  "Diseñamos la experiencia.",
  "Ejecutamos y generamos valor.",
];

const responsibilities = [
  {
    title: "Dirección Estratégica",
    tasks: ["Visión del proyecto", "Modelo de negocio", "Alianzas clave", "Priorización de oportunidades", "Control del crecimiento"],
  },
  {
    title: "Desarrollo Comercial",
    tasks: ["Prospección de clientes", "Reuniones comerciales", "Propuestas", "Seguimiento", "Cierre de oportunidades"],
  },
  {
    title: "Relaciones Públicas y Vinculación",
    tasks: ["Redes institucionales", "Auspiciadores", "Patrocinadores", "Comunidad", "Representación territorial"],
  },
  {
    title: "Turismo y Experiencias",
    tasks: ["Diseño de rutas", "Experiencias territoriales", "Atención de visitantes", "Coordinación de operadores", "Calidad del servicio"],
  },
  {
    title: "Producción de Eventos",
    tasks: ["Diseño de eventos", "Logística", "Proveedores", "Montaje y operación", "Evaluación de resultados"],
  },
  {
    title: "Marketing y Comunicaciones",
    tasks: ["Redes sociales", "Imagen de marca", "Contenido digital", "Campañas", "Difusión territorial"],
  },
  {
    title: "Gestión Administrativa y Financiera",
    tasks: ["Presupuestos", "Control de ingresos y gastos", "Documentación", "Facturación", "Reportes de gestión"],
  },
  {
    title: "Tecnología y Datos",
    tasks: ["CRM", "Encuestas", "Dashboard", "Base de contactos", "Automatización de seguimiento"],
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
          alt="Imagen conceptual de costa y desierto del norte de Chile"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,27,42,0.93)_0%,rgba(7,27,42,0.72)_48%,rgba(7,27,42,0.22)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,27,42,0.18)_0%,rgba(7,27,42,0)_42%,rgba(7,27,42,0.82)_100%)]" />

        <p className="absolute bottom-5 right-5 z-10 text-[10px] tracking-wide text-white/60">Imagen conceptual del norte de Chile</p>
        <header className="relative z-20 border-b border-white/10 bg-[#071b2a]/50 backdrop-blur-xl">
          <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-5 px-5 py-4 md:px-8">
            <Link href="/" className="flex items-center gap-3" aria-label="THAKI inicio">
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/12 text-sm font-bold tracking-[0.18em]">
                TH
              </span>
              <span className="text-lg font-semibold tracking-[0.2em]">THAKI</span>
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
            <p className="text-xs font-bold uppercase tracking-[0.34em] text-[#e6b36f]">Antofagasta · Región de Antofagasta</p>
            <div className="space-y-5">
              <h1 className="text-6xl font-semibold tracking-[0.02em] md:text-8xl lg:text-9xl">THAKI</h1>
              <p className="max-w-3xl text-2xl font-medium leading-tight text-white/92 md:text-4xl">
                Plataforma de articulación territorial, proyectos y experiencias en Antofagasta.
              </p>
            </div>
            <p className="max-w-2xl text-base leading-8 text-white/76 md:text-xl">
              Conectamos personas, empresas, instituciones y capacidades técnicas para transformar oportunidades
              en proyectos, eventos y experiencias con identidad territorial.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="#contacto" className="rounded-full bg-[#e6b36f] px-7 py-4 text-sm font-bold text-[#071b2a] shadow-[0_18px_48px_rgba(230,179,111,0.28)] hover:bg-[#f0c98c]">
                Conversemos
              </Link>
              <Link href="#plataforma" className="rounded-full border border-white/20 bg-white/10 px-7 py-4 text-sm font-bold text-white backdrop-blur hover:bg-white/16">
                Conocer la plataforma
              </Link>
              <Link href="/encuesta" className="rounded-full border border-[#e6b36f]/60 bg-[#e6b36f]/14 px-7 py-4 text-sm font-bold text-[#f0c98c] backdrop-blur hover:bg-[#e6b36f]/22">
                Completar Encuesta
              </Link>
              <Link href="/tarapaca" className="rounded-full border border-white/20 bg-white/8 px-7 py-4 text-sm font-bold text-white/88 backdrop-blur hover:bg-white/14">
                Antecedente Tarapacá
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="que-es" className="relative px-5 py-20 md:px-8 md:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(213,125,64,0.22),transparent_34%),linear-gradient(135deg,#f7efe2_0%,#fffaf2_55%,#d9edf4_100%)]" />
        <div className="relative mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
          <SectionIntro eyebrow="Qué es THAKI" title="Personas, capacidades y territorio conectados para desarrollar proyectos." />
          <div className="rounded-[28px] border border-[#d8c8b2] bg-white/76 p-8 shadow-[0_28px_90px_rgba(61,44,29,0.12)] backdrop-blur md:p-10">
            <p className="text-lg leading-9 text-[#485459] md:text-xl">
              THAKI es una plataforma de articulación territorial con foco en Antofagasta. Su propósito es conectar
              personas, organizaciones, empresas y capacidades que puedan colaborar. Los eventos, las obras y
              habilitaciones, el audiovisual, el turismo y la logística son líneas de acción dentro de esa plataforma.
            </p>
          </div>
        </div>
      </section>

      <section id="plataforma" className="bg-[#10202c] px-5 py-20 text-white md:px-8 md:py-28">
        <div className="mx-auto w-full max-w-7xl space-y-12">
          <div className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
            <SectionIntro
              eyebrow="Qué es una plataforma"
              title="¿Qué significa ser una plataforma?"
              description="THAKI conecta personas, organizaciones, empresas e instituciones. La plataforma reúne capacidades y oportunidades para diseñar colaboraciones, experiencias y proyectos con alcance definido."
              light
            />
            <div className="rounded-[32px] border border-white/12 bg-white/8 p-8 shadow-[0_30px_100px_rgba(0,0,0,0.2)] backdrop-blur md:p-10">
              <p className="text-xl font-semibold leading-9 text-white/88 md:text-2xl">
                Una plataforma genera valor mediante la articulación de redes y la creación de vínculos entre actores
                que pueden colaborar para construir nuevas oportunidades.
              </p>
              <div className="mt-8 grid gap-2">
                {platformFlow.map((item, index) => (
                  <div key={item} className="grid justify-items-center gap-2">
                    <div className="flex min-h-12 w-full items-center justify-center rounded-2xl border border-white/12 bg-white/8 px-5 text-center text-sm font-bold uppercase tracking-[0.16em] text-white/88">
                      {item}
                    </div>
                    {index < platformFlow.length - 1 ? (
                      <span className="text-2xl font-semibold text-[#f0c98c]" aria-hidden="true">
                        ↓
                      </span>
                    ) : null}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {platformCards.map((card, index) => (
              <article key={card.title} className="rounded-[28px] border border-white/12 bg-white/8 p-6 backdrop-blur">
                <p className="text-sm font-bold tracking-[0.24em] text-[#f0c98c]">0{index + 1}</p>
                <h3 className="mt-6 text-xl font-semibold tracking-[-0.03em] text-white">{card.title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/68">{card.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="lineas" className="bg-[#fffaf2] px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto w-full max-w-7xl space-y-12">
          <SectionIntro
            eyebrow="Líneas de trabajo"
            title="Seis líneas de acción para conectar capacidades y oportunidades."
            description="Definimos el alcance, los recursos y las coordinaciones de cada iniciativa antes de proponer su desarrollo."
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

      <section id="colaboracion-na" className="bg-[#10202c] px-5 py-16 text-white md:px-8 md:py-20">
        <div className="mx-auto grid w-full max-w-7xl gap-8 lg:grid-cols-2 lg:items-center">
          <SectionIntro eyebrow="Colaboración estratégica" title="NorthAcoustics · NA" light />
          <div className="space-y-5 text-lg leading-9 text-white/76">
            <p>NorthAcoustics es un colaborador estratégico independiente para evaluar requerimientos de acústica, sonido y apoyo técnico en proyectos.</p>
            <p>El alcance y la participación de cada parte se definen para cada encargo.</p>
            <Link href="#contacto" className="inline-block text-sm font-bold text-[#f0c98c] underline underline-offset-4">Consultar por una colaboración técnica ↗</Link>
          </div>
        </div>
      </section>

      <section id="capital-humano" className="relative bg-[#f7efe2] px-5 py-20 md:px-8 md:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(230,179,111,0.28),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(18,52,71,0.16),transparent_34%)]" />
        <div className="relative mx-auto w-full max-w-7xl space-y-14">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <SectionIntro
              eyebrow="Capital Humano y Desarrollo de Talento"
              title="Nuestro principal activo son las personas."
              description="THAKI nace con la convicción de que el desarrollo territorial se construye desde las personas, sus capacidades, sus redes de contacto y su capacidad de generar confianza."
            />
            <div className="rounded-[32px] border border-[#d8c8b2] bg-white/78 p-8 shadow-[0_28px_90px_rgba(61,44,29,0.12)] backdrop-blur md:p-10">
              <p className="text-2xl font-semibold leading-tight tracking-[-0.03em] text-[#10202c] md:text-3xl">
                Antes que infraestructura o tecnología, nuestro principal capital es el talento humano.
              </p>
              <p className="mt-5 text-base leading-8 text-[#5f6b70]">
                Ese talento permite abrir conversaciones, activar redes, leer el territorio y transformar una idea en una
                experiencia con valor para empresas, instituciones, comunidades y visitantes.
              </p>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {humanCapitalCards.map((card, index) => (
              <article
                key={card.title}
                className="group rounded-[28px] border border-[#dbc8ae] bg-[#fffaf2] p-7 shadow-[0_22px_70px_rgba(61,44,29,0.08)] transition duration-300 hover:-translate-y-1 hover:border-[#c4824a] hover:bg-white"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#10202c] text-sm font-bold text-[#f0c98c]">
                  0{index + 1}
                </div>
                <h3 className="mt-7 text-xl font-semibold tracking-[-0.03em] text-[#10202c]">{card.title}</h3>
                <ul className="mt-5 space-y-3 text-sm leading-6 text-[#5f6b70]">
                  {card.points.map((point) => (
                    <li key={point} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#c4824a]" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <section className="rounded-[32px] bg-[#10202c] p-8 text-white shadow-[0_30px_100px_rgba(16,32,44,0.24)] md:p-10">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#f0c98c]">Modelo de Crecimiento</p>
              <h3 className="mt-4 text-3xl font-semibold tracking-[-0.04em] md:text-4xl">
                Del talento individual al impacto territorial.
              </h3>
              <div className="mt-8 grid gap-2">
                {growthFlow.map((item, index) => (
                  <div key={item} className="grid justify-items-center gap-2">
                    <div className="flex min-h-12 w-full items-center justify-center rounded-2xl border border-white/12 bg-white/8 px-5 text-center text-sm font-bold uppercase tracking-[0.16em] text-white/88">
                      {item}
                    </div>
                    {index < growthFlow.length - 1 ? (
                      <span className="text-2xl font-semibold text-[#f0c98c]" aria-hidden="true">
                        ↓
                      </span>
                    ) : null}
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-[32px] border border-[#d8c8b2] bg-white p-8 shadow-[0_28px_90px_rgba(61,44,29,0.1)] md:p-10">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#b9783f]">Programa de Desarrollo Interno</p>
              <h3 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-[#10202c] md:text-4xl">
                Indicadores para formar equipos visibles, conectados y medibles.
              </h3>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {internalProgramIndicators.map((indicator) => (
                  <div key={indicator} className="rounded-2xl border border-[#eadcc9] bg-[#fffaf2] px-5 py-4 text-sm font-semibold text-[#5f6b70]">
                    {indicator}
                  </div>
                ))}
              </div>
            </section>
          </div>

          <section className="grid gap-8 overflow-hidden rounded-[32px] border border-[#d8c8b2] bg-white shadow-[0_30px_100px_rgba(61,44,29,0.12)] lg:grid-cols-[0.82fr_1.18fr]">
            <div className="bg-[linear-gradient(145deg,#8f4f2c_0%,#123447_78%)] p-8 text-white md:p-10">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#f0c98c]">Diagnóstico de Capacidades</p>
              <h3 className="mt-5 text-3xl font-semibold tracking-[-0.04em] md:text-5xl">
                Una herramienta para construir equipos de alto impacto.
              </h3>
              <p className="mt-6 text-base leading-8 text-white/74">
                Esta herramienta permitirá identificar fortalezas, oportunidades y áreas de desarrollo para construir
                equipos de alto impacto.
              </p>
            </div>
            <form className="grid gap-5 p-6 md:grid-cols-2 md:p-8" aria-label="Formulario visual de diagnóstico de capacidades">
              {[
                "Nombre",
                "Experiencia principal",
                "Sectores donde posee contactos",
                "Áreas de interés",
                "Habilidades destacadas",
                "Objetivos personales dentro de THAKI",
              ].map((label) => (
                <label key={label} className={label.includes("Objetivos") ? "md:col-span-2" : ""}>
                  <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#b9783f]">{label}</span>
                  <span className="mt-2 block rounded-2xl border border-[#dbc8ae] bg-[#fffaf2] px-4 py-4 text-sm text-[#8c969a]">
                    {label.includes("Objetivos") ? "Describe metas, intereses y contribución esperada" : "Completar información"}
                  </span>
                </label>
              ))}
              <div className="md:col-span-2">
                <span className="inline-flex rounded-full bg-[#10202c] px-6 py-3 text-sm font-bold text-white">
                  Interfaz no funcional para evaluación interna
                </span>
              </div>
            </form>
          </section>
        </div>
      </section>

      <section id="responsabilidades" className="relative bg-[#071b2a] px-5 py-20 text-white md:px-8 md:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(230,179,111,0.2),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(25,164,178,0.16),transparent_32%),linear-gradient(135deg,#071b2a_0%,#10202c_48%,#123447_100%)]" />
        <div className="relative mx-auto w-full max-w-7xl space-y-12">
          <SectionIntro
            eyebrow="Responsabilidades clave"
            title="Responsabilidades Clave para el Desarrollo del Proyecto"
            description="THAKI se construye desde el capital humano, pero no desde cargos rígidos. El proyecto requiere responsabilidades claras, flexibles y colaborativas, que podrán ser asumidas y redistribuidas por el equipo según capacidades, disponibilidad y resultados."
            light
          />

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {responsibilities.map((area, index) => (
              <article key={area.title} className="rounded-[28px] border border-white/12 bg-white/8 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.16)] backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-[#e6b36f]/40 hover:bg-white/10 md:p-7">
                <div className="flex items-start justify-between gap-4">
                  <p className="text-sm font-bold tracking-[0.24em] text-[#f0c98c]">0{index + 1}</p>
                  <span className="rounded-full border border-[#19a4b2]/30 bg-[#19a4b2]/12 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-[#b7edf1]">
                    Flexible
                  </span>
                </div>
                <h3 className="mt-6 text-xl font-semibold tracking-[-0.03em] text-white">{area.title}</h3>
                <ul className="mt-5 space-y-3 text-sm leading-6 text-white/70">
                  {area.tasks.map((task) => (
                    <li key={task} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#e6b36f]" />
                      <span>{task}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className="relative overflow-hidden rounded-[32px] border border-white/12 bg-white/8 p-8 shadow-[0_32px_100px_rgba(0,0,0,0.2)] backdrop-blur md:p-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(230,179,111,0.2),transparent_30%)]" />
            <div className="relative grid gap-6 lg:grid-cols-[0.72fr_1.28fr] lg:items-center">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#f0c98c]">Principio de trabajo</p>
              <p className="text-xl font-semibold leading-9 text-white/86 md:text-2xl">
                Las responsabilidades no pertenecen a una persona fija. Se asignan en conjunto, se revisan
                periódicamente y se ajustan según el avance real del proyecto.
              </p>
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
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#f0c98c]">Primera etapa · Antofagasta</p>
              <p className="text-2xl font-medium leading-tight md:text-4xl">
                La primera etapa en Antofagasta busca identificar requerimientos concretos, definir servicios
                ejecutables y preparar propuestas con alcance, recursos y costos claros. El foco es validar
                oportunidades mediante encargos y colaboraciones acordados para cada proyecto.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="contacto" className="relative bg-[#071b2a] px-5 py-20 text-white md:px-8 md:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(230,179,111,0.22),transparent_32%),linear-gradient(135deg,#071b2a_0%,#123447_58%,#8f4f2c_100%)]" />
        <div className="relative mx-auto flex w-full max-w-7xl flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-3xl space-y-5">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#f0c98c]">Desarrollemos proyectos en Antofagasta</p>
            <h2 className="text-4xl font-semibold tracking-[-0.04em] md:text-6xl">
              Construyamos experiencias con identidad territorial.
            </h2>
            <p className="max-w-2xl text-base leading-8 text-white/76 md:text-lg">
              Si eres empresa, institución, emprendedor, operador turístico o marca interesada en activar presencia en
              Antofagasta, conversemos sobre el alcance y las coordinaciones que necesita tu proyecto.
            </p>
          </div>
          <div className="flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col">
            <Link href="mailto:contacto@thakhi.cl" className="inline-flex justify-center rounded-full bg-[#e6b36f] px-8 py-4 text-sm font-bold text-[#071b2a] shadow-[0_18px_48px_rgba(230,179,111,0.28)] hover:bg-[#f0c98c]">
              Contactar a THAKI
            </Link>
            <Link href="/encuesta" className="inline-flex justify-center rounded-full border border-white/16 bg-white/8 px-8 py-4 text-sm font-bold text-white hover:bg-white/14">
              Completar Encuesta
            </Link>
            <Link href="/tarapaca" className="inline-flex justify-center rounded-full border border-[#e6b36f]/40 bg-[#e6b36f]/12 px-8 py-4 text-sm font-bold text-[#f0c98c] hover:bg-[#e6b36f]/18">
              Antecedente Tarapacá
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
