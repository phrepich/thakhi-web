import type { Metadata } from "next";
import type { ReactNode } from "react";

import "./globals.css";

export const metadata: Metadata = {
  title: "THAKI | Plataforma territorial de proyectos y experiencias en Antofagasta",
  description:
    "Plataforma de articulación territorial en Antofagasta: conecta personas, organizaciones y capacidades para desarrollar proyectos, eventos y experiencias.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
