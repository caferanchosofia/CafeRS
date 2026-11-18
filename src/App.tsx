import { StoreProvider } from "./store";
import { Header } from "./components/Header";
import { Hero, Ticker } from "./components/Hero";
import { Featured } from "./components/Featured";
import { Menu } from "./components/Menu";
import { QRSection } from "./components/QRSection";
import { Story, Visit } from "./components/Sections";
import { Faq } from "./components/Faq";
import { Footer } from "./components/Footer";
import { CartDrawer } from "./components/CartDrawer";
import { FloatingWhatsApp, MobileBar, Toast } from "./components/Chrome";

export default function App() {
  return (
    <StoreProvider>
      <div className="min-h-screen bg-ink pb-[62px] lg:pb-0">
        <a
          href="#carta"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-gold focus:px-5 focus:py-3 focus:font-sans focus:text-sm focus:text-ink"
        >
          Saltar a la carta
        </a>
        <Header />
        <main>
          <Hero />
          <Ticker />
          <Featured />
          <Menu />
          <QRSection />
          <Story />
          <Faq />
          <Visit />
        </main>
        <Footer />
        <CartDrawer />
        <MobileBar />
        <FloatingWhatsApp />
        <Toast />
      </div>
    </StoreProvider>
  );
}
