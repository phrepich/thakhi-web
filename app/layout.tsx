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
      <body>{children}</body>
    </html>
  );
}
