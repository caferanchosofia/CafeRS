import { useStore } from "../store";
import { BagIcon, BikeIcon, CheckIcon, CrepeIcon, WhatsAppIcon } from "./Icons";

export function MobileBar() {
  const { setCartOpen, cartCount, setVenue, waLink } = useStore();
  const direct = waLink("¡Hola! Vengo desde la carta digital y quisiera pedir algo.");

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-40 border-t border-gold/20 bg-[#12100e] pb-[env(safe-area-inset-bottom)] lg:hidden"
      aria-label="Acciones rápidas"
    >
      <div className="grid h-[62px] grid-cols-5">
        <button
          type="button"
          onClick={() => scrollTo("carta")}
          className="flex flex-col items-center justify-center gap-1 text-cream/60 transition-colors hover:text-gold"
        >
          <span className="text-[15px] leading-none">☕</span>
          <span className="font-sans text-[7.5px] font-medium uppercase tracking-[0.14em]">
            Carta
          </span>
        </button>
        <button
          type="button"
          onClick={() => {
            setVenue("crepe");
            window.setTimeout(() => scrollTo("carta"), 50);
          }}
          className="flex flex-col items-center justify-center gap-1 text-pink/75 transition-colors hover:text-pink"
        >
          <CrepeIcon className="h-4 w-4" />
          <span className="font-sans text-[7.5px] font-medium uppercase tracking-[0.14em]">
            Crêpe
          </span>
        </button>
        <button
          type="button"
          onClick={() => {
            setVenue("bikery");
            window.setTimeout(() => scrollTo("carta"), 50);
          }}
          className="flex flex-col items-center justify-center gap-1 text-mint/80 transition-colors hover:text-mint"
        >
          <BikeIcon className="h-4 w-4" />
          <span className="px-0.5 text-center font-sans text-[6.5px] font-medium uppercase leading-tight tracking-[0.08em]">
            Repostería Bikery
          </span>
        </button>
        <button
          type="button"
          onClick={() => setCartOpen(true)}
          className="relative flex flex-col items-center justify-center gap-1 text-cream/60 transition-colors hover:text-gold"
        >
          <BagIcon className="h-4 w-4" />
          <span className="font-sans text-[7.5px] font-medium uppercase tracking-[0.14em]">
            Mi pedido
          </span>
          {cartCount > 0 ? (
            <span className="absolute right-[22%] top-2 grid h-4 min-w-4 place-items-center rounded-full bg-pink px-1 font-sans text-[8px] font-semibold text-ink">
              {cartCount}
            </span>
          ) : null}
        </button>
        <a
          href={direct}
          target="_blank"
          rel="noreferrer"
          className="flex flex-col items-center justify-center gap-1 text-gold"
        >
          <WhatsAppIcon className="h-4 w-4" />
          <span className="font-sans text-[7.5px] font-medium uppercase tracking-[0.14em]">
            WhatsApp
          </span>
        </a>
      </div>
    </nav>
  );
}

export function FloatingWhatsApp() {
  const { waLink, cartOpen } = useStore();
  if (cartOpen) return null;
  const direct = waLink("¡Hola! Vengo desde la carta digital y quisiera hacer un pedido.");

  return (
    <a
      href={direct}
      target="_blank"
      rel="noreferrer"
      aria-label="Pedir por WhatsApp"
      className="group fixed bottom-6 right-6 z-40 hidden items-center gap-3 lg:flex"
    >
      <span className="pointer-events-none translate-x-2 rounded-full border border-gold/25 bg-ink/95 px-4 py-2.5 font-sans text-[9px] uppercase tracking-[0.14em] text-cream/80 opacity-0 shadow-xl backdrop-blur transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
        ¿Pedimos algo rico?
      </span>
      <span className="relative grid h-[52px] w-[52px] place-items-center rounded-full bg-gold text-ink shadow-[0_16px_40px_-12px_rgba(201,169,110,0.65)] transition-transform duration-300 group-hover:scale-105">
        <span className="absolute inset-0 -z-10 animate-ping rounded-full border border-gold/40" />
        <WhatsAppIcon className="h-6 w-6" />
      </span>
    </a>
  );
}

export function Toast() {
  const { toast } = useStore();
  if (!toast) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      className="pointer-events-none fixed bottom-[78px] left-1/2 z-[95] w-[calc(100%-2rem)] max-w-[400px] -translate-x-1/2 animate-fade-up lg:bottom-8"
    >
      <div className="flex items-center gap-3 rounded-full border border-gold/30 bg-[#1c1813]/97 px-4 py-3 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.9)] backdrop-blur-xl">
        <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-gold text-ink">
          <CheckIcon className="h-3.5 w-3.5" />
        </span>
        <p className="font-sans text-[11px] leading-snug text-cream/85">{toast}</p>
      </div>
    </div>
  );
}

