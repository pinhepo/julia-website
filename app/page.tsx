import {
  Header,
  Hero,
  AboutSection,
  FAQSection,
  ContactSection,
  Footer,
  WhatsAppButton,
} from './components';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <AboutSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
