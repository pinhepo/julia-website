import type { ReactNode } from 'react';

type ContactChannel = {
  label: string;
  value: string;
  href: string;
  icon: ReactNode;
};

const contactChannels: ContactChannel[] = [
  {
    label: 'Email',
    value: 'juliagoulartpsico@gmail.com',
    href: 'mailto:juliagoulartpsico@gmail.com',
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-16 11h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    label: 'WhatsApp',
    value: '55 53 98457-3348',
    href: 'https://wa.me/5553984573348',
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
        />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    value: '@julliagoulart.psi',
    href: 'https://instagram.com/julliagoulart.psi',
    icon: (
      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.2c3.2 0 3.6 0 4.9.1 3.3.1 4.7 1.7 4.9 4.9.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.2 3.2-1.6 4.7-4.9 4.9-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-3.2-.2-4.7-1.6-4.9-4.9-.1-1.3-.1-1.7-.1-4.9s0-3.6.1-4.9c.2-3.2 1.6-4.7 4.9-4.9 1.3-.1 1.7-.1 4.9-.1zm0-2.2C8.7 0 8.3 0 7 .1 2.6.3.3 2.6.1 7 .1 8.3 0 8.7 0 12s.1 3.7.1 5c.2 4.4 2.5 6.7 6.9 6.9 1.3.1 1.7.1 5 .1s3.7 0 5-.1c4.4-.2 6.7-2.5 6.9-6.9.1-1.3.1-1.7.1-5s0-3.7-.1-5c-.2-4.4-2.5-6.7-6.9-6.9C15.7 0 15.3 0 12 0zm0 5.8A6.2 6.2 0 1112 18.2 6.2 6.2 0 0112 5.8zm0 10.2a4 4 0 100-8 4 4 0 000 8zm6.4-11.9a1.4 1.4 0 11-1.4-1.4 1.4 1.4 0 011.4 1.4z" />
      </svg>
    ),
  },
];

export function ContactSection() {
  return (
    <section className="py-20">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 lg:flex-row">
        <div className="flex-1 rounded-[2rem] border border-[#e6ddd4] bg-white/90 p-10 shadow-lg">
          <h3
            className="text-3xl text-[#333333]"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            Onde você me encontra
          </h3>
          <p className="mt-3 text-sm tracking-[0.3em] text-[#A67979] uppercase">
            Atendimento presencial em Pelotas/RS e on-line para todo o Brasil
          </p>
          <p className="mt-5 text-[#534f4c]">
            Agendamentos presenciais no centro de Pelotas e sessões virtuais via Google Meet ou plataforma equivalente, garantindo segurança e sigilo.
          </p>
          <div className="mt-8 space-y-5">
            {contactChannels.map((channel) => (
              <a
                key={channel.label}
                href={channel.href}
                target={channel.label === 'Email' ? undefined : '_blank'}
                rel={channel.label === 'Email' ? undefined : 'noopener noreferrer'}
                className="flex items-center gap-4 rounded-2xl border border-[#e6ddd4] bg-white/80 p-4 text-[#333333] transition hover:border-[#A67979] hover:text-[#A67979]"
              >
                <span className="text-[#A67979]">{channel.icon}</span>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em]">{channel.label}</p>
                  <p>{channel.value}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
        <div className="flex-1 rounded-[2rem] border border-[#e6ddd4] bg-[#f5f1eb] p-10 shadow-lg">
          <h4
            className="text-2xl text-[#333333]"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            Psicóloga Clínica
          </h4>
          <p className="mt-2 text-sm font-semibold tracking-[0.3em] text-[#A67979] uppercase">
            Atualize aqui o seu CRP
          </p>
          <p className="mt-6 text-[#534f4c]">
            Pós-graduação em Terapia Cognitivo-Comportamental pela Wainer Psicologia. Formação contínua em saúde mental, aprimorando práticas para oferecer cuidado atualizado e humano.
          </p>
          <div className="mt-8 grid gap-4 border-t border-[#e6ddd4] pt-8 text-[#534f4c]">
            <div>
              <p className="text-sm font-semibold text-[#333333]">Missão</p>
              <p>
                Conduzir processos terapêuticos com acolhimento, ética e compromisso, fortalecendo a autonomia emocional de cada pessoa.
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold text-[#333333]">Valores</p>
              <p>
                Empatia, respeito à singularidade, sigilo, responsabilidade e atualização constante.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

