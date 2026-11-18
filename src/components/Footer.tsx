import { QRCodeSVG } from "qrcode.react";
import { CONTACT } from "../data/menu";
import { useStore } from "../store";
import { Ornament, Wordmark } from "./Brand";
import { SocialFollow } from "./SocialFollow";
import { MapPinIcon, PhoneIcon, QrIcon, WhatsAppIcon } from "./Icons";

export function Footer() {
  const { menuUrl, waLink, setVenue, formattedPhone } = useStore();
  const direct = waLink("¡Hola! Vengo desde su página y quisiera hacer un pedido.");

  const goTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const goToVenue = (id: "cafe" | "crepe" | "bikery") => {
    setVenue(id);
    window.setTimeout(() => goTo("carta"), 50);
  };

  return (
    <footer className="relative overflow-hidden border-t border-gold/15 bg-ink">
      <div className="pointer-events-none absolute -bottom-24 left-1/3 h-[360px] w-[360px] rounded-full bg-[radial-gradient(circle,rgba(201,169,110,0.08),transparent_70%)]" />

      <div className="relative mx-auto max-w-[1360px] px-5 py-14 sm:px-6 lg:px-10 lg:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_0.9fr_0.8fr] lg:gap-8">
          <div>
            <Wordmark />
            <p className="mt-5 max-w-[270px] text-[12.5px] font-light leading-relaxed text-cream/45">
              Café de especialidad, crepería y repostería. Tres conceptos bajo un mismo
              techo, hechos para disfrutarse sin prisa.
            </p>
            <div className="mt-6 flex items-center gap-2">
              <a
                href={direct}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp de Café Rancho Sofía"
                className="grid h-10 w-10 place-items-center rounded-full border border-cream/15 text-cream/60 transition-colors hover:border-gold/60 hover:text-gold"
              >
                <WhatsAppIcon className="h-4 w-4" />
              </a>
            </div>
            <SocialFollow tone="light" className="mt-6" />
          </div>

          <div>
            <p className="eyebrow text-[8.5px] text-gold/60">La carta</p>
            <ul className="mt-4 space-y-2.5">
              {[
                { label: "Bebidas calientes", id: "calientes" },
                { label: "Bebidas frías", id: "frias" },
                { label: "Smoothies", id: "smoothies" },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    type="button"
                    onClick={() => goToVenue("cafe")}
                    className="text-[12px] font-light text-cream/50 transition-colors hover:text-gold"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li>
                <button
                  type="button"
                  onClick={() => goToVenue("crepe")}
                  className="text-[12px] font-light text-pink/70 transition-colors hover:text-pink"
                >
                  Crepas y postres
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => goToVenue("bikery")}
                  className="text-[12px] font-light text-mint/75 transition-colors hover:text-mint"
                >
                  Repostería Bikery
                </button>
              </li>
            </ul>
          </div>

          <div>
            <p className="eyebrow text-[8.5px] text-gold/60">Explora</p>
            <ul className="mt-4 space-y-2.5">
              {[
                { label: "Nuestra historia", id: "nosotros" },
                { label: "Visítanos", id: "visitanos" },
                { label: "QR de la carta", id: "qr" },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    type="button"
                    onClick={() => goTo(link.id)}
                    className="text-[12px] font-light text-cream/50 transition-colors hover:text-gold"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li>
                <a
                  href={direct}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[12px] font-light text-cream/50 transition-colors hover:text-gold"
                >
                  Pedir por WhatsApp
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="eyebrow text-[8.5px] text-gold/60">La carta en tu mesa</p>
            <button
              type="button"
              onClick={() => goTo("qr")}
              className="group mt-4 flex items-center gap-3 rounded-2xl border border-cream/10 bg-cream/[0.03] p-2.5 text-left transition-colors hover:border-gold/40"
              aria-label="Ver y descargar el código QR de la carta"
            >
              <span className="rounded-lg bg-cream p-1.5">
                <QRCodeSVG
                  value={menuUrl}
                  size={58}
                  level="M"
                  marginSize={0}
                  bgColor="#f7f1e6"
                  fgColor="#191510"
                  title="QR de la carta digital"
                />
              </span>
              <span>
                <span className="flex items-center gap-1.5 font-sans text-[8px] uppercase tracking-[0.16em] text-gold/70">
                  <QrIcon className="h-3 w-3" />
                  Escanea
                </span>
                <span className="mt-1 block font-display text-[1rem] leading-tight text-cream">
                  Menú digital
                  <br />
                  <span className="font-sans text-[8.5px] uppercase tracking-[0.12em] text-cream/35">
                    Café · Crêpe · Repostería
                  </span>
                </span>
              </span>
            </button>
            <div className="mt-4 space-y-2">
              <p className="flex items-start gap-2 text-[10.5px] font-light leading-relaxed text-cream/40">
                <MapPinIcon className="mt-0.5 h-3 w-3 shrink-0 text-gold/60" />
                {CONTACT.address}
              </p>
              <a
                href={direct}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-[10.5px] font-light text-cream/40 transition-colors hover:text-gold"
              >
                <PhoneIcon className="h-3 w-3 shrink-0 text-gold/60" />
                {formattedPhone}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center gap-5 border-t border-cream/10 pt-7 lg:flex-row lg:justify-between">
          <p className="order-2 text-center font-sans text-[9px] uppercase tracking-[0.14em] text-cream/30 lg:order-1 lg:text-left">
            © {new Date().getFullYear()} Café Rancho Sofía · La Crêpe · Repostería Bikery. Hecho con cariño en
            Honduras.
          </p>
          <div className="order-1 flex items-center gap-4 lg:order-2">
            <Ornament className="hidden sm:inline-flex" />
            <p className="font-sans text-[8.5px] uppercase tracking-[0.14em] text-cream/25">
              Precios en Lempiras
            </p>
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="inline-flex items-center gap-1.5 rounded-full border border-cream/15 px-3 py-2 font-sans text-[8px] uppercase tracking-[0.14em] text-cream/50 transition-colors hover:border-gold/50 hover:text-gold"
            >
              Arriba
              <span aria-hidden="true">↑</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
