import Link from "next/link";

const agents = [
  {
    name: "Lucas",
    focus: "Experiencias y Territorio",
    description: "Lucas representa la conexión directa con las experiencias que ocurren en el territorio.",
    content: [
      "Turismo",
      "Cultura",
      "Gastronomía",
      "Experiencias",
      "Eventos",
      "Historias locales",
      "Recorridos",
      "Vida territorial",
    ],
    objective: "Convertirse en un referente digital de experiencias auténticas en Tarapacá.",
    indicators: ["Alcance", "Seguidores", "Interacciones", "Contactos generados", "Participación en actividades"],
  },
  {
    name: "Virna",
    focus: "Comunidad y Vinculación",
    description: "Virna representa la construcción de redes, relaciones y oportunidades.",
    content: [
      "Emprendedores",
      "Alianzas",
      "Eventos",
      "Cultura local",
      "Relaciones públicas",
      "Mujeres líderes",
      "Historias de colaboración",
      "Desarrollo comunitario",
    ],
    objective: "Convertirse en un referente digital de vinculación y desarrollo territorial.",
    indicators: [
      "Reuniones generadas",
      "Alianzas logradas",
      "Auspiciadores contactados",
      "Alcance digital",
      "Redes construidas",
    ],
  },
];

export default function InstagramAgentsPage() {
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
            <Link href="/encuesta" className="rounded-full bg-[#e6b36f] px-5 py-3 text-sm font-bold text-[#071b2a] hover:bg-[#f0c98c]">
              Completar Encuesta
            </Link>
          </nav>

          <div className="max-w-4xl py-20 md:py-28">
            <p className="text-xs font-bold uppercase tracking-[0.32em] text-[#f0c98c]">Capital humano y marca personal</p>
            <h1 className="mt-5 text-5xl font-semibold tracking-[-0.05em] md:text-7xl">
              Agentes Territoriales de Instagram
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-9 text-white/76 md:text-2xl">
              Personas que conectan territorio, experiencias y oportunidades.
            </p>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto w-full max-w-7xl space-y-10">
          <div className="max-w-3xl space-y-4">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#b9783f]">Modelo digital territorial</p>
            <h2 className="text-3xl font-semibold tracking-[-0.04em] md:text-5xl">
              THAKHI desarrolla referentes humanos, no solo canales de comunicación.
            </h2>
            <p className="text-base leading-8 text-[#5f6b70] md:text-lg">
              Lucas y Virna representan dos formas complementarias de activar confianza: la experiencia vivida en el
              territorio y la construcción de redes que abren oportunidades.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {agents.map((agent) => (
              <article key={agent.name} className="overflow-hidden rounded-[32px] border border-[#d8c8b2] bg-white shadow-[0_28px_90px_rgba(61,44,29,0.12)]">
                <div className="bg-[linear-gradient(135deg,#10202c_0%,#123447_58%,#8f4f2c_100%)] p-8 text-white md:p-10">
                  <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#f0c98c]">{agent.focus}</p>
                  <h3 className="mt-4 text-4xl font-semibold tracking-[-0.04em] md:text-6xl">{agent.name}</h3>
                  <p className="mt-5 text-lg leading-8 text-white/76">{agent.description}</p>
                </div>
                <div className="grid gap-8 p-8 md:p-10">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#b9783f]">Contenido</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {agent.content.map((item) => (
                        <span key={item} className="rounded-full border border-[#eadcc9] bg-[#fffaf2] px-4 py-2 text-sm font-semibold text-[#5f6b70]">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="rounded-[24px] bg-[#f7efe2] p-6">
                    <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#b9783f]">Objetivo</p>
                    <p className="mt-3 text-lg font-semibold leading-8 text-[#10202c]">{agent.objective}</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#b9783f]">Indicadores</p>
                    <div className="mt-4 grid gap-3 sm:grid-cols-2">
                      {agent.indicators.map((indicator) => (
                        <div key={indicator} className="rounded-2xl border border-[#eadcc9] px-4 py-3 text-sm font-semibold text-[#5f6b70]">
                          {indicator}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
