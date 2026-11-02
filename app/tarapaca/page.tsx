import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "THAKI Tarapacá | Antecedente de desarrollo",
  description: "Antecedente de la propuesta exploratoria de THAKI en Iquique y Tarapacá: articulación territorial, turismo, eventos y vinculación.",
};

const lines = [
  ["Turismo y experiencias", "Rutas, actividades, turismo cultural y experiencias corporativas."],
  ["Eventos, ferias y festivales", "Diseño y coordinación de actividades públicas, privadas, comunitarias y corporativas."],
  ["Relaciones públicas y auspicios", "Vinculación institucional, patrocinadores, alianzas y redes de contacto."],
  ["Marketing territorial", "Posicionamiento de destinos, contenidos y activaciones con identidad local."],
];

export default function TarapacaHistory() {
  return <main className="min-h-screen bg-[#f7efe2] text-[#10202c]">
    <header className="bg-[#071b2a] px-5 py-8 text-white md:px-8">
      <div className="mx-auto max-w-7xl">
        <nav className="flex flex-wrap items-center justify-between gap-5" aria-label="Navegación del antecedente Tarapacá">
          <Link href="/" className="text-lg font-semibold tracking-[0.2em]">THAKI</Link>
          <Link href="/" className="rounded-full border border-white/20 px-5 py-3 text-sm font-bold">THAKI Antofagasta ↗</Link>
        </nav>
        <div className="max-w-4xl py-16 md:py-24">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#f0c98c]">Antecedente de desarrollo · Propuesta exploratoria</p>
          <h1 className="mt-6 text-5xl font-semibold tracking-[-0.04em] md:text-7xl">THAKI<br/>Tarapacá.</h1>
          <p className="mt-7 max-w-3xl text-xl leading-9 text-white/76">Una propuesta de articulación territorial que se intentó desarrollar en Iquique y la Región de Tarapacá.</p>
          <p className="mt-6 max-w-3xl text-base leading-8 text-white/65">Este apartado conserva el modelo y los materiales planteados para esa etapa. Se presenta como antecedente de formulación y planificación, separado de la propuesta actual de THAKI en Antofagasta.</p>
        </div>
      </div>
    </header>
    <section className="px-5 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-7xl">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#b9783f]">Qué se intentó desarrollar</p>
        <h2 className="mt-5 max-w-3xl text-3xl font-semibold tracking-[-0.04em] md:text-5xl">Una plataforma para conectar personas, redes y experiencias.</h2>
        <p className="mt-7 max-w-3xl text-lg leading-9 text-[#5f6b70]">La idea reunía relaciones públicas, turismo, cultura local y producción de eventos. Su punto de partida era reconocer capacidades y contactos del territorio para identificar oportunidades y organizar colaboraciones.</p>
        <div className="mt-12 grid gap-6 md:grid-cols-2">{lines.map(([title, text], index) => <article key={title} className="rounded-[28px] border border-[#d8c8b2] bg-white p-7 md:p-9"><p className="text-xs font-bold text-[#b9783f]">0{index + 1} / Línea propuesta</p><h3 className="mt-5 text-2xl font-semibold">{title}</h3><p className="mt-4 text-base leading-8 text-[#5f6b70]">{text}</p></article>)}</div>
      </div>
    </section>
    <section className="bg-[#10202c] px-5 py-16 text-white md:px-8 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
        <div><p className="text-xs font-bold uppercase tracking-[0.25em] text-[#f0c98c]">Modelo planteado</p><h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] md:text-5xl">El capital humano<br/>como punto de partida.</h2></div>
        <div className="space-y-6 text-lg leading-9 text-white/76"><p>Se propuso identificar experiencia, habilidades, redes de contacto y disponibilidad, junto con desarrollar liderazgo, comunicación y marca personal.</p><p>El modelo incluía agentes territoriales de Instagram y responsabilidades flexibles en desarrollo comercial, vinculación, turismo, producción, administración y comunicaciones.</p><Link href="/agentes-instagram" className="inline-block rounded-full border border-[#e6b36f]/60 px-6 py-3 text-sm font-bold text-[#f0c98c]">Ver el modelo de agentes de Tarapacá ↗</Link></div>
      </div>
    </section>
    <section className="px-5 py-16 md:px-8 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
        <article className="rounded-[28px] bg-[#eadcc9] p-8 md:p-10"><p className="text-xs font-bold uppercase tracking-[0.22em] text-[#8f4f2c]">Objetivo original propuesto · 90 días</p><h2 className="mt-5 text-3xl font-semibold tracking-[-0.03em]">Instalar presencia y explorar oportunidades.</h2><p className="mt-6 text-base leading-8 text-[#5f6b70]">El plan proponía levantar alianzas, activar una agenda de turismo y eventos, y buscar ingresos mediante experiencias, auspicios y producción. Se conserva como objetivo de la propuesta, no como resultado alcanzado.</p></article>
        <article className="rounded-[28px] border border-[#d8c8b2] bg-white p-8 md:p-10"><p className="text-xs font-bold uppercase tracking-[0.22em] text-[#b9783f]">Continuidad</p><h2 className="mt-5 text-3xl font-semibold tracking-[-0.03em]">Un antecedente para una nueva etapa.</h2><p className="mt-6 text-base leading-8 text-[#5f6b70]">La nueva etapa en Antofagasta conserva el concepto de plataforma: conectar personas, redes y capacidades. Amplía sus líneas de acción hacia producción, obras y habilitación de espacios, audiovisual, turismo y logística.</p><Link href="/" className="mt-7 inline-block rounded-full bg-[#10202c] px-6 py-4 text-sm font-bold text-white">Conocer THAKI Antofagasta ↗</Link></article>
      </div>
    </section>
    <footer className="bg-[#071b2a] px-5 py-8 text-white/70 md:px-8"><div className="mx-auto flex max-w-7xl flex-wrap justify-between gap-5 text-sm"><span>THAKI · Antecedente Tarapacá</span><Link href="/">Volver a THAKI Antofagasta ↗</Link></div></footer>
  </main>;
}
