import type { Metadata } from "next";
import { Playfair_Display, Cormorant_Garamond, Open_Sans } from "next/font/google";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["400", "600"],
});

export const metadata: Metadata = {
  title: "Julia Goulart - Psicóloga Clínica",
  description: "Psicóloga clínica pós-graduada em terapia cognitivo-comportamental. Atendimento presencial e online.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="w-full">
      <body
        className={`${playfairDisplay.variable} ${cormorantGaramond.variable} ${openSans.variable} w-full antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
