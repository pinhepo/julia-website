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
  title: "Julia Goulart - Psicóloga Clínica em Pelotas/RS | CRP 07/39057 | TCC",
  description: "Psicóloga clínica (CRP 07/39057) graduada pela UCPel e pós-graduada em Terapia Cognitivo-Comportamental. Atendimento presencial em Pelotas/RS e online para todo o Brasil. Especialista em ansiedade, autoestima e relacionamentos.",
  keywords: [
    "psicóloga Pelotas",
    "psicóloga Pelotas RS",
    "psicologia Pelotas",
    "terapia cognitivo comportamental Pelotas",
    "TCC Pelotas",
    "psicólogo online",
    "terapia online",
    "Julia Goulart psicóloga",
    "psicóloga ansiedade Pelotas",
    "psicóloga relacionamentos",
    "atendimento psicológico Pelotas",
    "CRP 07/39057",
    "psicóloga UCPel",
    "psicóloga formada UCPel",
    "Wainer Psicologia",
  ],
  authors: [{ name: "Julia Goulart" }],
  creator: "Julia Goulart",
  publisher: "Julia Goulart",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Julia Goulart - Psicóloga Clínica em Pelotas/RS | CRP 07/39057",
    description: "Psicóloga graduada pela UCPel, pós-graduada em TCC. Atendimento presencial em Pelotas/RS e online para todo o Brasil. Agende sua consulta.",
    url: "https://juliagoulart.psi.umbrielcms.com.br",
    siteName: "Julia Goulart Psicóloga",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "https://juliagoulart.psi.umbrielcms.com.br/julia-og.jpg",
        width: 1200,
        height: 630,
        alt: "Julia Goulart - Psicóloga Clínica CRP 07/39057",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Julia Goulart - Psicóloga Clínica CRP 07/39057",
    description: "Psicóloga graduada pela UCPel, pós-graduada em TCC. Atendimento presencial em Pelotas/RS e online.",
    images: ["https://juliagoulart.psi.umbrielcms.com.br/julia-og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: "https://juliagoulart.psi.umbrielcms.com.br",
  },
  verification: {
    google: "_S0MzUP1lAP7NR59bDXzQgwT48WLvntMuQV_waB5WjY",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Psychologist',
    name: 'Julia Goulart',
    image: 'https://juliagoulart.psi.umbrielcms.com.br/julia-og.jpg',
    description: 'Psicóloga clínica (CRP 07/39057) graduada pela UCPel e pós-graduada em Terapia Cognitivo-Comportamental pela Wainer Psicologia. Atendimento presencial em Pelotas/RS e online.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Pelotas',
      addressRegion: 'RS',
      addressCountry: 'BR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -31.7654,
      longitude: -52.3376,
    },
    url: 'https://juliagoulart.psi.umbrielcms.com.br',
    telephone: '+55-53-98457-3348',
    email: 'juliagoulartpsico@gmail.com',
    priceRange: '$$',
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '18:00',
    },
    sameAs: [
      'https://instagram.com/julliagoulart.psi',
    ],
    areaServed: [
      {
        '@type': 'City',
        name: 'Pelotas',
      },
      {
        '@type': 'State',
        name: 'Rio Grande do Sul',
      },
      {
        '@type': 'Country',
        name: 'Brasil',
      },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Serviços de Psicologia',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Terapia Cognitivo-Comportamental (TCC)',
            description: 'Atendimento psicológico especializado em TCC para adolescentes e adultos.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Atendimento Online',
            description: 'Sessões de terapia online por videochamada para todo o Brasil.',
          },
        },
      ],
    },
  };

  return (
    <html lang="pt-BR" className="w-full">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${playfairDisplay.variable} ${cormorantGaramond.variable} ${openSans.variable} w-full antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
