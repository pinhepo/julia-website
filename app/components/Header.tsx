import Image from 'next/image';
import { ShareButton } from './ShareButton';
import { MobileMenu } from './MobileMenu';

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#e6ddd4] bg-white/90 backdrop-blur-sm">
      <div className="relative mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
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
              className="text-sm tracking-[0.3em] text-[#8f5e5e]"
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
        
        {/* Desktop Menu */}
        <div className="hidden items-center gap-3 lg:flex">
          <ShareButton />
          <a
            href="https://wa.me/5553984573348"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border-2 border-[#8f5e5e] px-5 py-2 text-sm font-semibold text-[#8f5e5e] transition-colors hover:bg-[#8f5e5e] hover:text-white"
          >
            Agendar sessão
          </a>
          <a
            href="https://instagram.com/julliagoulart.psi"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[#333333] px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#8f5e5e]"
          >
            Instagram
          </a>
        </div>

        {/* Mobile Menu */}
        <MobileMenu />
      </div>
    </header>
  );
}

