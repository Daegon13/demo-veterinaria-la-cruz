import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Veterinaria La Cruz — Demo conceptual",
  description: "Demo conceptual privada de una nueva experiencia web para Veterinaria La Cruz, Montevideo.",
  robots: { index: false, follow: false, nocache: true, googleBot: { index: false, follow: false, noimageindex: true } },
};
export const viewport: Viewport = { themeColor: "#164D46", width: "device-width", initialScale: 1 };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="es-UY"><body>{children}</body></html>; }
