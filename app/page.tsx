'use client';

import { useState, type ReactNode } from 'react';
import Image from 'next/image';

type Faq = {
  question: string;
  answer: string;
};

type Highlight = {
  title: string;
  description: string;
};

type ContactChannel = {
  label: string;
  value: string;
  href: string;
  icon: ReactNode;
};

const faqs: Faq[] = [
  {
    question: 'Como agendar uma sessão?',
    answer:
      'Entre em contato pelo WhatsApp (55 53 984573348), e-mail (juliagoulartpsico@gmail.com) ou formulário abaixo. Vou retornar em até 24h para combinarmos o melhor horário.',
  },
  {
    question: 'Atende plano de saúde?',
    answer:
      'Atualmente o atendimento é particular. Disponibilizo recibos para reembolso, conforme a política do seu plano. Entre em contato para saber valores e condições.',
  },
  {
    question: 'Quais as formas de atendimento?',
    answer:
      'Disponibilizo atendimentos presenciais em Pelotas/RS e sessões on-line por vídeo chamada, em plataforma segura, para pessoas de qualquer região.',
  },
  {
    question: 'Como funciona a Terapia Cognitivo-Comportamental?',
    answer:
      'A TCC é uma abordagem colaborativa que identifica padrões de pensamento e comportamento. Trabalhamos com técnicas práticas para promover autonomia, equilíbrio emocional e qualidade de vida.',
  },
];

const heroHighlights: Highlight[] = [
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

const careDifferentials: Highlight[] = [
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

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [formData, setFormData] = useState({
    nome: '',
    celular: '',
    email: '',
    mensagem: '',
  });

  const handleFaqToggle = (index: number) => {
    setOpenFaq((prev) => (prev === index ? null : index));
  };

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const mailtoLink = `mailto:juliagoulartpsico@gmail.com?subject=Contato do site&body=Nome: ${formData.nome}%0ACelular: ${formData.celular}%0AEmail: ${formData.email}%0A%0AMensagem:%0A${formData.mensagem}`;
    window.location.href = mailtoLink;
    setFormData({ nome: '', celular: '', email: '', mensagem: '' });
  };

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <header className="border-b border-[#e6ddd4] bg-white/90 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div className="flex items-center gap-4">
            <Image
              src="/logo.svg"
              alt="Logo Julia Goulart"
              width={120}
              height={80}
              className="h-auto w-28"
              priority
            />
            <div>
              <p
                className="text-sm tracking-[0.3em] text-[#A67979]"
                style={{ fontFamily: 'var(--font-cormorant)' }}
              >
                Psicóloga Clínica
              </p>
              <h1
                className="text-xl font-semibold text-[#333333]"
                style={{ fontFamily: 'var(--font-playfair)' }}
              >
                Julia Goulart
              </h1>
            </div>
          </div>
          <div className="hidden items-center gap-3 md:flex">
            <a
              href="https://wa.me/5553984573348"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-[#A67979] px-5 py-2 text-sm font-semibold text-[#A67979] transition-colors hover:bg-[#A67979] hover:text-white"
            >
              Agendar sessão
            </a>
            <a
              href="https://instagram.com/julliagoulart.psi"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[#333333] px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#A67979]"
            >
              Instagram
            </a>
          </div>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden bg-[#f5f1eb]">
          <div className="absolute inset-y-0 right-0 hidden w-1/2 bg-[#d4b4b4]/40 lg:block" aria-hidden />
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 py-20 lg:grid-cols-[1fr_0.9fr]">
            <div className="relative z-10 space-y-8">
              <span
                className="inline-block rounded-full bg-white/80 px-4 py-1 text-sm tracking-[0.3em] text-[#A67979] shadow-sm"
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
              <p className="max-w-xl text-lg text-[#534f4c]">
                Ofereço um espaço acolhedor e sigiloso para ajudar você a compreender
                emoções, ressignificar experiências e desenvolver novas maneiras de
                lidar com desafios cotidianos.
              </p>
              <ul className="grid gap-4 text-[#534f4c] sm:grid-cols-2">
                {heroHighlights.map((highlight) => (
                  <li
                    key={highlight.title}
                    className="flex gap-3 rounded-2xl border border-[#e6ddd4] bg-white/70 p-4 shadow-sm"
                  >
                    <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#A67979]/20 text-[#A67979]">
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
                  className="flex items-center justify-center gap-2 rounded-full bg-[#A67979] px-6 py-3 font-semibold text-white transition hover:bg-[#8f5e5e]"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  Agendar pelo WhatsApp
                </a>
                <a
                  href="mailto:juliagoulartpsico@gmail.com"
                  className="flex items-center justify-center gap-2 rounded-full border border-[#333333] px-6 py-3 font-semibold text-[#333333] transition hover:border-[#A67979] hover:text-[#A67979]"
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

        <section className="bg-[#f5f1eb] py-20">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2">
            <div className="rounded-[2rem] border border-[#e6ddd4] bg-white/90 p-10 shadow-lg">
              <div className="flex items-center justify-between">
                <h3
                  className="text-3xl text-[#333333]"
                  style={{ fontFamily: 'var(--font-playfair)' }}
                >
                  Perguntas frequentes
                </h3>
                <span className="text-sm text-[#A67979]">Precisa de algo específico?</span>
              </div>
              <div className="mt-8 space-y-4">
                {faqs.map((faq, index) => {
                  const isOpen = openFaq === index;
                  return (
                    <div key={faq.question} className="rounded-2xl border border-[#e6ddd4] bg-white/80 shadow-sm">
                      <button
                        type="button"
                        onClick={() => handleFaqToggle(index)}
                        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-[#333333]"
                      >
                        <span className="font-semibold">{faq.question}</span>
                        <span className="text-xl text-[#A67979]">{isOpen ? '−' : '+'}</span>
                      </button>
                      {isOpen && (
                        <p className="px-5 pb-5 text-sm leading-relaxed text-[#534f4c]">{faq.answer}</p>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="rounded-[2rem] border border-[#e6ddd4] bg-white/90 p-10 shadow-lg">
              <h3
                className="text-3xl text-[#333333]"
                style={{ fontFamily: 'var(--font-playfair)' }}
              >
                Como posso ajudar você hoje?
              </h3>
              <p className="mt-4 text-[#534f4c]">
                Vamos conversar sobre suas necessidades. Conte-me um pouco sobre você e combinaremos o melhor formato de atendimento.
              </p>
              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                <div>
                  <label htmlFor="nome" className="mb-1 block text-sm font-semibold text-[#333333]">
                    Nome
                  </label>
                  <input
                    id="nome"
                    name="nome"
                    value={formData.nome}
                    onChange={handleInputChange}
                    required
                    className="w-full rounded-xl border border-[#d8c9bd] bg-white px-4 py-3 text-sm focus:border-[#A67979] focus:outline-none focus:ring-2 focus:ring-[#A67979]/30"
                    placeholder="Como gostaria de ser chamado(a)"
                  />
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="celular" className="mb-1 block text-sm font-semibold text-[#333333]">
                      Celular
                    </label>
                    <input
                      id="celular"
                      name="celular"
                      value={formData.celular}
                      onChange={handleInputChange}
                      className="w-full rounded-xl border border-[#d8c9bd] bg-white px-4 py-3 text-sm focus:border-[#A67979] focus:outline-none focus:ring-2 focus:ring-[#A67979]/30"
                      placeholder="(DD) 99999-9999"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-1 block text-sm font-semibold text-[#333333]">
                      Email<span className="ml-1 text-[#A67979]">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full rounded-xl border border-[#d8c9bd] bg-white px-4 py-3 text-sm focus:border-[#A67979] focus:outline-none focus:ring-2 focus:ring-[#A67979]/30"
                      placeholder="nome@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="mensagem" className="mb-1 block text-sm font-semibold text-[#333333]">
                    Mensagem
                  </label>
                  <textarea
                    id="mensagem"
                    name="mensagem"
                    rows={4}
                    value={formData.mensagem}
                    onChange={handleInputChange}
                    className="w-full resize-none rounded-xl border border-[#d8c9bd] bg-white px-4 py-3 text-sm focus:border-[#A67979] focus:outline-none focus:ring-2 focus:ring-[#A67979]/30"
                    placeholder="Compartilhe suas expectativas ou dúvidas"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-full bg-[#333333] px-6 py-3 font-semibold text-white transition hover:bg-[#A67979]"
                >
                  Enviar mensagem
                </button>
              </form>
            </div>
          </div>
        </section>

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
      </main>

      <footer className="border-t border-[#e6ddd4] bg-white/80 py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-3 px-6 text-center text-sm text-[#534f4c]">
          <p>
            Psicóloga Julia Goulart · Pós-graduada em Terapia Cognitivo-Comportamental pela Wainer Psicologia.
          </p>
          <p className="text-xs text-[#857c75]">
            © {new Date().getFullYear()} · Todos os direitos reservados.
          </p>
        </div>
      </footer>

      <a
        href="https://wa.me/5553984573348"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Iniciar conversa no WhatsApp"
        className="fixed bottom-6 right-6 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition hover:scale-110 hover:bg-[#20b159]"
      >
        <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
      </a>
    </div>
  );
}
