'use client';

import { useState } from 'react';

const faqs = [
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

export function FAQSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleFaqToggle = (index: number) => {
    setOpenFaq((prev) => (prev === index ? null : index));
  };

  return (
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
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

function ContactForm() {
  const [formData, setFormData] = useState({
    nome: '',
    celular: '',
    email: '',
    mensagem: '',
  });

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
  );
}

