import type { Metadata } from "next";
import type { ReactNode } from "react";

import "./globals.css";

export const metadata: Metadata = {
  title: "THAKHI | Experiencias territoriales en Tarapacá",
  description:
    "Plataforma de articulación territorial y generación de experiencias en Iquique y la Región de Tarapacá.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body>
        <form name="encuesta-thakhi" method="POST" data-netlify="true" netlify-honeypot="bot-field" hidden>
          <input type="hidden" name="form-name" value="encuesta-thakhi" />
          <input name="bot-field" />
          <input name="recipient" />
          <input name="nombre" />
          <input name="correo" />
          <input name="telefono" />
          <input name="ciudad" />
          <input name="disponibilidad" />
          <input name="experiencia" />
          <input name="redes_contacto" />
          <input name="cantidad_contactos" />
          <input name="areas_interes" />
          <input name="habilidad_comunicación" />
          <input name="habilidad_liderazgo" />
          <input name="habilidad_organización" />
          <input name="habilidad_negociación" />
          <input name="habilidad_trabajo_en_equipo" />
          <input name="habilidad_creatividad" />
          <input name="habilidad_ventas" />
          <input name="habilidad_redes_sociales" />
          <textarea name="experiencia_relevante" />
          <textarea name="desarrollo_thakhi" />
          <textarea name="redes_aporte" />
          <textarea name="oportunidades" />
          <textarea name="observaciones" />
        </form>
        {children}
      </body>
    </html>
  );
}
