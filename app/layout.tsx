import type { Metadata } from "next";
import type { ReactNode } from "react";

import "./globals.css";

export const metadata: Metadata = {
  title: "THAKI | Producción de eventos en Antofagasta",
  description:
    "Diseño y coordinación de eventos corporativos, culturales y comunitarios en Antofagasta. Concepto, producción, logística y contenidos para encuentros con identidad.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
