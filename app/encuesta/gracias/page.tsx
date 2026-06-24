import Link from "next/link";

export default function SurveyThanksPage() {
  return (
    <main className="flex min-h-screen items-center bg-[#071b2a] px-5 py-16 text-white md:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(230,179,111,0.24),transparent_32%),linear-gradient(135deg,#071b2a_0%,#123447_62%,#8f4f2c_100%)]" />
      <section className="relative mx-auto w-full max-w-4xl rounded-[36px] border border-white/12 bg-white/10 p-8 shadow-[0_32px_110px_rgba(0,0,0,0.24)] backdrop-blur md:p-12">
        <p className="text-xs font-bold uppercase tracking-[0.32em] text-[#f0c98c]">Encuesta recibida</p>
        <h1 className="mt-5 text-5xl font-semibold tracking-[-0.05em] md:text-7xl">Gracias.</h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-white/74 md:text-xl">
          Tu información ayudará a identificar capacidades, redes y oportunidades para fortalecer el desarrollo interno de
          THAKHI.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link href="/" className="rounded-full bg-[#e6b36f] px-7 py-4 text-sm font-bold text-[#071b2a] hover:bg-[#f0c98c]">
            Volver a THAKHI
          </Link>
          <Link href="/agentes-instagram" className="rounded-full border border-white/16 bg-white/8 px-7 py-4 text-sm font-bold text-white hover:bg-white/14">
            Ver agentes territoriales
          </Link>
        </div>
      </section>
    </main>
  );
}
