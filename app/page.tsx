import Link from "next/link";
import styles from "./home.module.css";

const formats = [
  { number: "01", name: "Empresas que se encuentran.", type: "Corporativos & marcas", text: "Encuentros de equipos, lanzamientos, seminarios, activaciones y ferias. Una producción alineada con el propósito de tu organización.", className: styles.corporate, tags: ["Encuentros", "Lanzamientos", "Ferias"] },
  { number: "02", name: "La cultura toma espacio.", type: "Cultura & comunidad", text: "Festivales, actividades comunitarias, programación artística y encuentros gastronómicos. Experiencias que ponen en valor a las personas y al territorio.", className: styles.culture, tags: ["Cultura", "Comunidad", "Gastronomía"] },
];
const services = [
  { name: "Concepto y diseño del evento", text: "Definimos contigo el objetivo, los públicos, el formato y la experiencia. Traducimos la idea en una propuesta con programa, necesidades y presupuesto.", output: "Concepto · Programa · Presupuesto" },
  { name: "Producción y coordinación", text: "Organizamos la planificación, las responsabilidades y la coordinación de proveedores. Definimos los recursos necesarios y el acompañamiento durante la jornada según el alcance contratado.", output: "Cronograma · Proveedores · Coordinación en terreno" },
  { name: "Espacios, técnica y logística", text: "Coordinamos requerimientos de montaje, sonido, iluminación, equipamiento y circulación. Cada propuesta identifica las condiciones del espacio, los servicios externos y las autorizaciones que correspondan.", output: "Requerimientos técnicos · Montaje · Operación" },
  { name: "Comunicación y contenidos", text: "Articulamos diseño, difusión, registro fotográfico y audiovisual a través de colaboradores definidos para cada proyecto. Acordamos piezas, canales y entregables antes de producir.", output: "Piezas · Difusión · Registro" },
];
function Spark({ className = "" }: { className?: string }) {
  return <svg className={className} viewBox="0 0 100 100" fill="currentColor" aria-hidden="true"><path d="m50 0 8 30 27-15-15 27 30 8-30 8 15 27-27-15-8 30-8-30-27 15 15-27L0 50l30-8-15-27 27 15Z" /></svg>;
}
export default function Home() {
  return (
    <div className={styles.site}>
      <a href="#contenido" className={styles.skip}>Ir al contenido</a>
      <header className={styles.header}>
        <Link className={styles.logo} href="/" aria-label="THAKI, inicio"><Spark />THAKI<span>Producción de eventos</span></Link>
        <nav className={styles.nav} aria-label="Navegación principal"><a href="#eventos">Eventos</a><a href="#lineas">Qué hacemos</a><a href="#modelo">Cómo trabajamos</a></nav>
        <a href="#contacto" className={styles.headerCta}>Hablemos <span aria-hidden="true">↗</span></a>
      </header>
      <main id="contenido">
        <section className={styles.hero} aria-labelledby="hero-title">
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}><span className={styles.dot} />Desde Antofagasta. Con energía propia.</p>
            <h1 id="hero-title">Hagamos<br />que algo <em>pase.</em></h1>
            <p className={styles.heroText}>Ideas que reúnen. Eventos que conectan.</p>
            <p className={styles.heroDetail}>Diseñamos y coordinamos la producción de encuentros corporativos, culturales y comunitarios. Del primer concepto a cada detalle de la jornada.</p>
            <div className={styles.actions}><a className={styles.button} href="#contacto">Cuéntanos tu evento <span aria-hidden="true">↗</span></a><a className={styles.textLink} href="#eventos">Explora los formatos <span aria-hidden="true">↓</span></a></div>
          </div>
          <div className={styles.poster}>
            <div className={styles.posterTop}><span>THAKI / ENCUENTROS</span><span>23° S · ANTOFAGASTA</span></div>
            <div className={styles.stage} role="img" aria-label="Composición gráfica animada de un escenario, con un sol, ondas y formas que representan personas reunidas"><div className={styles.stageGrid} /><div className={styles.sun} /><div className={styles.portal}><div /><div /><div /></div><Spark className={styles.stageSpark} /><div className={styles.waves}><i /><i /><i /></div><div className={styles.people}><i /><i /><i /><i /><i /></div><span className={styles.stageWord}>ESTAR.<br /><em>CONECTAR.</em><br />VIVIR.</span></div>
            <div className={styles.posterBottom}><span>Un espacio para encontrarnos.</span><label className={styles.motionControl}>Movimiento<select className={styles.motionToggle} defaultValue="system"><option value="system">Sistema</option><option value="on">Activado</option><option value="off">Pausado</option></select></label></div>
          </div>
          <div className={styles.heroFoot}><span>Producción · Coordinación · Experiencias</span><span>Desliza y descubre <span aria-hidden="true">↓</span></span></div>
        </section>
        <div className={styles.ribbon} aria-hidden="true"><div>{[0, 1].map(n => <span key={n}>IDEAS EN MOVIMIENTO <Spark /> PERSONAS EN CONEXIÓN <Spark /> TERRITORIO EN ESCENA <Spark /> </span>)}</div></div>
        <section className={styles.events} id="eventos" aria-labelledby="events-title">
          <div className={styles.sectionHead}><p className={styles.eyebrow}>01 / Motivos para reunirnos</p><h2 id="events-title">Distintos motivos.<br /><em>La misma energía.</em></h2><p>Una reunión de trabajo, una feria o una celebración cultural necesitan decisiones distintas. La producción empieza por entender qué quieres lograr y a quién quieres convocar.</p></div>
          <div className={styles.formatGrid}>{formats.map(f => <article className={`${styles.format} ${f.className}`} key={f.number}><div className={styles.formatTop}><span>{f.type}</span><span>{f.number}</span></div><div className={styles.formatArt} aria-hidden="true">{f.number === "01" ? <div className={styles.meeting}><i /><i /><i /></div> : <div className={styles.flower}><Spark /><span /></div>}</div><h3>{f.name}</h3><p>{f.text}</p><ul className={styles.tags}>{f.tags.map(t => <li key={t}>{t}</li>)}</ul><a href="#contacto" className={styles.formatLink}>Conversemos sobre tu idea <span aria-hidden="true">↗</span></a></article>)}</div>
        </section>
        <section className={styles.services} id="lineas" aria-labelledby="services-title">
          <div className={styles.servicesIntro}><p className={styles.eyebrow}>02 / Lo que hacemos</p><h2 id="services-title">La idea importa.<br /><em>Los detalles también.</em></h2><p>Podemos preparar una producción completa o un alcance específico. Cada encargo define qué se incluye, quién lo ejecuta y cuánto cuesta.</p><Spark className={styles.introSpark} /></div>
          <div className={styles.accordions}>{services.map((s, i) => <details key={s.name} className={styles.service} open={i === 0}><summary><span className={styles.serviceNum}>0{i + 1}</span><h3>{s.name}</h3><span className={styles.plus} aria-hidden="true" /></summary><div className={styles.serviceBody}><p>{s.text}</p><span>{s.output}</span></div></details>)}</div>
        </section>
        <section className={styles.method} id="modelo" aria-labelledby="method-title">
          <div className={styles.methodHeading}><p className={styles.eyebrow}>03 / Del encuentro a la acción</p><h2 id="method-title">Creatividad con<br /><em>los pies en la tierra.</em></h2><p>Una buena producción necesita una ruta clara. Antes de comprometer fechas y recursos, acordamos el alcance y la viabilidad del evento.</p></div>
          <ol className={styles.steps}><li><span>01</span><h3>Escuchamos.</h3><p>Objetivo, público, lugar, fecha y presupuesto disponible.</p></li><li><span>02</span><h3>Diseñamos.</h3><p>Una propuesta con formato, programa, costos y responsables.</p></li><li><span>03</span><h3>Coordinamos.</h3><p>Proveedores, cronograma y producción según el alcance acordado.</p></li><li><span>04</span><h3>Cerramos.</h3><p>Entrega de lo contratado y revisión de resultados con el cliente.</p></li></ol>
        </section>
        <section className={styles.network} id="plataforma" aria-labelledby="network-title">
          <div className={styles.networkVisual} aria-hidden="true"><div className={styles.orbit} /><span className={styles.networkCenter}>THAKI</span><span className={styles.nodeA}>Personas</span><span className={styles.nodeB}>Ideas</span><span className={styles.nodeC}>Territorio</span><Spark className={styles.networkSpark} /></div>
          <div className={styles.networkCopy}><p className={styles.eyebrow}>04 / La fuerza de conectar</p><h2 id="network-title">Una productora.<br /><em>Muchas conexiones.</em></h2><p>Articulamos personas, conocimientos y proveedores alrededor de cada proyecto. Una plataforma de colaboración que conecta capacidades locales con las necesidades de tu evento, con responsabilidades y acuerdos concretos.</p></div>
        </section>
        <section className={styles.contact} id="contacto" aria-labelledby="contact-title">
          <p className={styles.eyebrow}>El próximo encuentro empieza en una conversación</p><div className={styles.contactRow}><h2 id="contact-title">¿Qué vamos<br />a <em>producir?</em></h2><a className={styles.contactArrow} href="mailto:contacto@thakhi.cl?subject=Conversemos%20sobre%20un%20evento" aria-label="Escribir a THAKI sobre un evento">↗</a></div><div className={styles.contactBottom}><p>Cuéntanos el tipo de evento, la fecha estimada, el lugar y tu presupuesto de referencia. Con esa base podemos preparar una propuesta.</p><a href="mailto:contacto@thakhi.cl?subject=Conversemos%20sobre%20un%20evento">contacto@thakhi.cl <span aria-hidden="true">↗</span></a></div>
        </section>
      </main>
      <footer className={styles.footer}><div><Link className={styles.footerBrand} href="/">THAKI<Spark /></Link><p>Producción de eventos · Antofagasta, Chile.</p></div><nav aria-label="Más sobre THAKI"><Link href="/tarapaca">Antecedente Tarapacá <span aria-hidden="true">↗</span></Link><Link href="/encuesta">Sumar mis capacidades <span aria-hidden="true">↗</span></Link><a href="#contenido">Volver arriba <span aria-hidden="true">↑</span></a></nav><span className={styles.footerNote}>Ideas que reúnen.<br />Personas que hacen.</span></footer>
    </div>
  );
}
