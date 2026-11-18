import { useEffect, useState } from "react";
import { useStore } from "../store";
import { Wordmark } from "./Brand";
import { SocialFollow } from "./SocialFollow";
import { BagIcon, MenuIcon, QrIcon, WhatsAppIcon, XIcon } from "./Icons";

const NAV_LINKS = [
  { label: "La carta", href: "carta" },
  { label: "Nuestra historia", href: "nosotros" },
  { label: "Visítanos", href: "visitanos" },
  { label: "QR & WhatsApp", href: "qr" },
];

export function Header() {
  const { cartCount, setCartOpen, setVenue, waLink } = useStore();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [mobileOpen]);

  const goTo = (id: string) => {
    setMobileOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const goToVenue = (id: "cafe" | "crepe" | "bikery") => {
    setVenue(id);
    setMobileOpen(false);
    window.setTimeout(() => goTo("carta"), 60);
  };

  const orderMessage = "¡Hola! Vengo desde la carta digital y me gustaría hacer un pedido.";
  const whatsappHref = waLink(orderMessage);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "border-b border-gold/15 bg-[#12100e] shadow-[0_18px_40px_-30px_rgba(0,0,0,0.9)]"
            : "border-b border-transparent bg-gradient-to-b from-ink/85 via-ink/40 to-transparent"
        }`}
      >
        <div className="mx-auto flex h-[76px] max-w-[1360px] items-center justify-between gap-4 px-4 sm:px-6 lg:h-[88px] lg:px-10">
          <Wordmark
            compact
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="shrink-0"
          />

          <nav className="hidden items-center gap-7 xl:flex" aria-label="Navegación principal">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                type="button"
                onClick={() => goTo(link.href)}
                className="group relative py-2 font-sans text-[10.5px] font-medium uppercase tracking-[0.2em] text-cream/75 transition-colors hover:text-gold"
              >
                {link.label}
                <span className="absolute inset-x-0 bottom-0 h-px scale-x-0 bg-gold/70 transition-transform duration-300 group-hover:scale-x-100" />
              </button>
            ))}
            <button
              type="button"
              onClick={() => goToVenue("crepe")}
              className="group relative py-2 font-sans text-[10.5px] font-medium uppercase tracking-[0.2em] text-pink/90 transition-colors hover:text-pink"
            >
              La Crêpe
              <span className="absolute inset-x-0 bottom-0 h-px scale-x-0 bg-pink/70 transition-transform duration-300 group-hover:scale-x-100" />
            </button>
            <button
              type="button"
              onClick={() => goToVenue("bikery")}
              className="group relative py-2 font-sans text-[10.5px] font-medium uppercase tracking-[0.2em] text-mint/90 transition-colors hover:text-mint"
            >
              Repostería Bikery
              <span className="absolute inset-x-0 bottom-0 h-px scale-x-0 bg-mint/70 transition-transform duration-300 group-hover:scale-x-100" />
            </button>
          </nav>

          <div className="flex items-center gap-2 sm:gap-2.5">
            <button
              type="button"
              onClick={() => goTo("qr")}
              aria-label="Ver el código QR de la carta"
              className="hidden h-10 w-10 items-center justify-center rounded-full border border-cream/15 text-cream/75 transition-colors hover:border-gold/60 hover:text-gold sm:flex"
            >
              <QrIcon className="h-[18px] w-[18px]" />
            </button>

            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="hidden items-center gap-2 rounded-full bg-gold px-5 py-2.5 font-sans text-[10.5px] font-semibold uppercase tracking-[0.16em] text-ink transition-all hover:bg-gold-light active:scale-[0.98] md:inline-flex"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Pedir por WhatsApp
            </a>

            <button
              type="button"
              onClick={() => setCartOpen(true)}
              aria-label={`Abrir mi pedido, ${cartCount} productos`}
              className="relative flex h-10 items-center gap-2 rounded-full border border-cream/15 px-3 text-cream/85 transition-colors hover:border-gold/60 hover:text-gold"
            >
              <BagIcon className="h-[18px] w-[18px]" />
              <span className="hidden font-sans text-[10px] font-medium uppercase tracking-[0.14em] lg:inline">
                Mi pedido
              </span>
              {cartCount > 0 ? (
                <span className="absolute -right-1.5 -top-1.5 grid h-5 min-w-5 place-items-center rounded-full bg-pink px-1 font-sans text-[10px] font-semibold text-ink">
                  {cartCount}
                </span>
              ) : null}
            </button>

            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              aria-label="Abrir menú"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/15 text-cream/85 transition-colors hover:border-gold/60 hover:text-gold xl:hidden"
            >
              <MenuIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      {mobileOpen ? (
        <div className="fixed inset-0 z-[70] flex flex-col bg-ink animate-overlay">
          <div className="flex h-[76px] items-center justify-between px-4 sm:px-6">
            <Wordmark compact />
            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              aria-label="Cerrar menú"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/15 text-cream hover:border-gold/60 hover:text-gold"
            >
              <XIcon className="h-5 w-5" />
            </button>
          </div>
          <div className="flex flex-1 flex-col overflow-y-auto px-6 pb-10 pt-6 sm:px-10">
            <p className="eyebrow mb-6 text-gold/70">Explora</p>
            <nav className="flex flex-col divide-y divide-cream/10" aria-label="Menú móvil">
              {NAV_LINKS.map((link, index) => (
                <button
                  key={link.href}
                  type="button"
                  onClick={() => goTo(link.href)}
                  className="flex items-center justify-between py-5 text-left font-display text-[1.9rem] text-cream transition-colors hover:text-gold"
                >
                  {link.label}
                  <span className="font-sans text-[10px] tracking-[0.2em] text-gold/60">
                    0{index + 1}
                  </span>
                </button>
              ))}
              <button
                type="button"
                onClick={() => goToVenue("crepe")}
                className="flex items-center justify-between py-5 text-left font-display text-[1.9rem] italic text-pink transition-colors hover:text-pink-soft"
              >
                La Crêpe
                <span className="font-sans text-[10px] tracking-[0.2em] text-pink/60">05</span>
              </button>
              <button
                type="button"
                onClick={() => goToVenue("bikery")}
                className="flex items-center justify-between py-5 text-left font-display text-[1.9rem] italic text-mint transition-colors hover:text-mint-soft"
              >
                Repostería Bikery
                <span className="font-sans text-[10px] tracking-[0.2em] text-mint/60">06</span>
              </button>
            </nav>

            <div className="mt-8 grid gap-3">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-4 font-sans text-[11px] font-semibold uppercase tracking-[0.16em] text-ink"
              >
                <WhatsAppIcon className="h-4 w-4" />
                Pedir por WhatsApp
              </a>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setMobileOpen(false);
                    goTo("qr");
                  }}
                  className="flex items-center justify-center gap-2 rounded-full border border-cream/20 px-4 py-3.5 font-sans text-[10.5px] uppercase tracking-[0.15em] text-cream/80"
                >
                  <QrIcon className="h-4 w-4" />
                  Nuestro QR
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setMobileOpen(false);
                    setCartOpen(true);
                  }}
                  className="flex items-center justify-center gap-2 rounded-full border border-cream/20 px-4 py-3.5 font-sans text-[10.5px] uppercase tracking-[0.15em] text-cream/80"
                >
                  <BagIcon className="h-4 w-4" />
                  Mi pedido {cartCount > 0 ? `(${cartCount})` : ""}
                </button>
              </div>
            </div>

            <div className="mt-auto pt-10">
              <p className="font-display text-lg italic text-cream/50">
                Tostamos café, hacemos crepas y esperamos por ti.
              </p>
              <p className="mt-3 font-sans text-[10px] uppercase tracking-[0.22em] text-gold/60">
                Flores · Comayagua, Honduras
              </p>
              <SocialFollow tone="light" className="mt-6" />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
