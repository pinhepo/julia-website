const careDifferentials = [
  {
    title: 'Abordagem colaborativa',
    description:
      'Processo conduzido em parceria, com metas claras e acompanhamento constante dos avanços.',
  },
  {
    title: 'Foco em objetivos concretos',
    description:
      'Cada encontro é direcionado para promover mudanças observáveis no dia a dia.',
  },
  {
    title: 'Atualização contínua',
    description:
      'Formação permanente para oferecer recursos terapêuticos atuais e eficazes.',
  },
];

export function AboutSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <article className="rounded-[2rem] border border-[#e6ddd4] bg-white/90 p-10 shadow-lg">
          <h3
            className="text-3xl text-[#333333] sm:text-4xl"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            Sobre meu trabalho
          </h3>
          <div className="mt-6 space-y-4 text-[#534f4c] leading-relaxed">
            <p>
              Sou psicóloga clínica, pós-graduada em Terapia Cognitivo-Comportamental pela Wainer Psicologia. Minha prática prioriza acolhimento, ética e a construção de um espaço em que você se sinta seguro para falar sobre suas experiências.
            </p>
            <p>
              O processo terapêutico envolve identificar padrões de pensamento e comportamento, ressignificar histórias e desenvolver estratégias alinhadas com aquilo que você deseja viver. Cada plano de cuidado é construído junto com você, respeitando sua singularidade.
            </p>
            <p>
              Atendo adolescentes e adultos com demandas relacionadas à ansiedade, autoestima, relacionamentos, transições de vida e desafios emocionais. Vamos, juntos, buscar equilíbrio e qualidade de vida.
            </p>
          </div>
        </article>
        <aside className="flex flex-col justify-between gap-10 rounded-[2rem] border border-[#e6ddd4] bg-[#f5f1eb] p-10 shadow-lg">
          <div>
            <h4
              className="text-2xl text-[#333333]"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              Especialização em TCC
            </h4>
            <p className="mt-4 text-[#534f4c]">
              A Terapia Cognitivo-Comportamental é considerada uma abordagem moderna, prática e amparada por evidências científicas. Trabalhamos com metas claras e técnicas que facilitam a mudança de padrões que causam sofrimento.
            </p>
          </div>
          <div className="space-y-4">
            <p className="text-sm font-semibold tracking-[0.3em] text-[#A67979] uppercase">
              Diferenciais do cuidado
            </p>
            <ul className="space-y-4">
              {careDifferentials.map((highlight) => (
                <li key={highlight.title} className="rounded-2xl bg-white/80 p-4 shadow-sm">
                  <p className="font-semibold text-[#333333]">{highlight.title}</p>
                  <p className="text-sm text-[#534f4c]">{highlight.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </section>
  );
}

