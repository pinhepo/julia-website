import Image from 'next/image';

const highlights = [
  {
    title: 'Acolhimento e escuta ativa',
    description:
      'Ambiente seguro e respeitoso, onde você pode falar sobre suas vivências, angústias e expectativas com tranquilidade.',
  },
  {
    title: 'Atendimento personalizado',
    description:
      'Plano terapêutico construído junto com você, respeitando a singularidade da sua história e o seu ritmo de mudança.',
  },
  {
    title: 'Ferramentas práticas',
    description:
      'Técnicas baseadas em evidências científicas, focadas no aqui e agora, para lidar melhor com pensamentos, emoções e comportamentos.',
  },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#f5f1eb]">
      <div className="absolute inset-y-0 right-0 hidden w-1/2 bg-[#d4b4b4]/40 lg:block" aria-hidden />
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 py-20 lg:grid-cols-[1fr_0.9fr]">
        <div className="relative z-10 space-y-8">
          <span
            className="inline-block rounded-full bg-white/80 px-4 py-1 text-sm tracking-[0.3em] text-[#8f5e5e] shadow-sm"
            style={{ fontFamily: 'var(--font-cormorant)' }}
          >
            TERAPIA COGNITIVO-COMPORTAMENTAL
          </span>
          <h2
            className="text-4xl leading-tight text-[#333333] sm:text-5xl"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            Cuidar da sua saúde emocional é um ato de coragem e autocuidado.
          </h2>
          <p className="max-w-xl text-lg text-[#4a4542]">
            Ofereço um espaço acolhedor e sigiloso para ajudar você a compreender
            emoções, ressignificar experiências e desenvolver novas maneiras de
            lidar com desafios cotidianos.
          </p>
          <ul className="grid gap-4 text-[#4a4542] sm:grid-cols-2">
            {highlights.map((highlight) => (
              <li
                key={highlight.title}
                className="flex gap-3 rounded-2xl border border-[#e6ddd4] bg-white/70 p-4 shadow-sm"
              >
                <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#8f5e5e]/20 text-[#8f5e5e]">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <div>
                  <p className="font-semibold text-[#333333]">{highlight.title}</p>
                  <p className="text-sm leading-relaxed">{highlight.description}</p>
                </div>
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="https://wa.me/5553984573348"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-full bg-[#8f5e5e] px-6 py-3 font-semibold text-white transition hover:bg-[#7a4f4f]"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              Agendar pelo WhatsApp
            </a>
            <a
              href="mailto:juliagoulartpsico@gmail.com"
              className="flex items-center justify-center gap-2 rounded-full border border-[#333333] px-6 py-3 font-semibold text-[#333333] transition hover:border-[#8f5e5e] hover:text-[#8f5e5e]"
            >
              Enviar e-mail
            </a>
          </div>
        </div>
        <div className="relative z-10 h-full">
          <div className="mx-auto max-w-md overflow-hidden rounded-[2.5rem] shadow-xl lg:max-w-none">
            <Image
              src="/window.svg"
              alt="Ambiente acolhedor do consultório"
              width={900}
              height={600}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

