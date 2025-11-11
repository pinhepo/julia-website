export function Footer() {
  return (
    <footer className="border-t border-[#e6ddd4] bg-white/80 py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-3 px-6 text-center text-sm text-[#534f4c]">
        <p>
          Psicóloga Julia Goulart · CRP 07/39057 · Graduada pela UCPel · Pós-graduada em TCC pela Wainer Psicologia
        </p>
        <p className="text-xs text-[#857c75]">
          © {new Date().getFullYear()} · Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}

