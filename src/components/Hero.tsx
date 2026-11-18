import { IMG } from "../data/menu";
import { useStore } from "../store";
import { Ornament, RanchoSofiaLogo } from "./Brand";
import {
  ArrowRightIcon,
  ClockIcon,
  MapPinIcon,
  SparkleIcon,
  StarIcon,
  WhatsAppIcon,
} from "./Icons";

function goToMenu() {
  document.getElementById("carta")?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function Hero() {
  const { waLink } = useStore();
  const heroWhatsApp = waLink(
    "¡Hola, Café Rancho Sofía! Vengo desde la carta digital y quisiera ordenar algo rico.",
  );

  return (
    <section
      id="inicio"
      className="relative isolate overflow-hidden bg-ink pb-16 pt-[104px] sm:pb-20 lg:min-h-[100svh] lg:pb-24 lg:pt-[132px]"
    >
      <div className="hero-glow pointer-events-none absolute inset-0 -z-10" />
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.16]">
        <div className="absolute left-1/2 top-0 h-full w-px bg-gradient-to-b from-transparent via-gold/30 to-transparent" />
        <div className="absolute inset-x-0 top-[38%] h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
        <div className="absolute -right-24 top-16 h-[420px] w-[420px] rounded-full border border-gold/10" />
        <div className="absolute -right-6 top-36 h-[240px] w-[240px] rounded-full border border-gold/10" />
      </div>

      <div className="mx-auto grid max-w-[1360px] items-center gap-14 px-5 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:px-10">
        <div className="animate-fade-up">
          <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1">
            <span className="eyebrow text-[9px] text-gold/90 sm:text-[10.5px]">
              Café de especialidad
            </span>
            <span className="hidden h-1 w-1 rounded-full bg-pink min-[380px]:block" />
            <span className="eyebrow text-[9px] text-cream/50 sm:text-[10.5px]">
              Crepería artesanal
            </span>
            <span className="hidden h-1 w-1 rounded-full bg-mint min-[380px]:block" />
            <span className="eyebrow text-[9px] text-mint/80 sm:text-[10.5px]">
              Repostería Bikery
            </span>
          </div>

          <h1 className="mt-6 text-[clamp(3.1rem,8.6vw,5.75rem)] leading-[0.92] tracking-[-0.03em] text-cream">
            <span className="block">Un buen café.</span>
            <span className="gold-gradient-text mt-1 block italic">Un dulce momento.</span>
          </h1>

          <p className="mt-7 max-w-[30rem] text-[0.98rem] font-light leading-[1.8] text-cream/65 sm:text-[1.05rem]">
            Tres conceptos, una misma casa. Café Rancho Sofía, La Crêpe y Repostería Bikery
            se encuentran para servirte café recién hecho, crepas, repostería y ese
            momento que te mereces.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <button
              type="button"
              onClick={goToMenu}
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-gold px-7 py-4 font-sans text-[11px] font-semibold uppercase tracking-[0.16em] text-ink shadow-[0_18px_40px_-20px_rgba(201,169,110,0.7)] transition-all hover:bg-gold-light active:scale-[0.99]"
            >
              Explorar la carta
              <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
            <a
              href={heroWhatsApp}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-full border border-cream/25 px-7 py-4 font-sans text-[11px] font-medium uppercase tracking-[0.16em] text-cream transition-colors hover:border-gold hover:text-gold"
            >
              <WhatsAppIcon className="h-[17px] w-[17px]" />
              Pedir por WhatsApp
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4 border-t border-cream/10 pt-6">
            <div className="flex items-center gap-2">
              <span className="flex items-center gap-0.5 text-gold">
                {[0, 1, 2, 3, 4].map((star) => (
                  <StarIcon key={star} className="h-3 w-3" />
                ))}
              </span>
              <span className="font-sans text-[10.5px] uppercase tracking-[0.14em] text-cream/60">
                4.9 · +300 reseñas
              </span>
            </div>
            <span className="hidden h-3 w-px bg-cream/15 sm:block" />
            <span className="flex items-center gap-2 font-sans text-[10.5px] uppercase tracking-[0.14em] text-cream/60">
              <ClockIcon className="h-3.5 w-3.5 text-gold/70" />
              Hoy · 7:00 am – 7:00 pm
            </span>
            <span className="hidden h-3 w-px bg-cream/15 sm:block" />
            <span className="flex items-center gap-2 font-sans text-[10.5px] uppercase tracking-[0.14em] text-cream/60">
              <MapPinIcon className="h-3.5 w-3.5 text-gold/70" />
              Flores · Comayagua
            </span>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[500px] animate-fade-up animation-delay-200 lg:max-w-none">
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[78%] w-[78%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(201,169,110,0.2),transparent_65%)] blur-2xl" />

          <div className="relative mx-auto flex w-[82%] max-w-[390px] justify-center lg:w-[74%]">
            <div className="arch relative w-full border border-gold/30 bg-gradient-to-b from-gold/20 to-gold/5 p-[7px]">
              <div className="arch relative overflow-hidden bg-coal">
                <img
                  src={IMG.latteArt}
                  alt="Latte con arte en la leche servido en una taza de cerámica"
                  className="h-[390px] w-full object-cover sm:h-[470px] lg:h-[530px]"
                  fetchPriority="high"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/5 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                  <p className="eyebrow text-gold/85">El favorito de la casa</p>
                  <div className="mt-2 flex items-end justify-between gap-3">
                    <p className="font-display text-[1.65rem] leading-none text-cream">
                      Latte Ranchero
                    </p>
                    <span className="font-sans text-[13px] font-medium text-gold-light">
                      L.90
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute left-0 top-[10%] z-20 hidden sm:block lg:-left-2">
            <RanchoSofiaLogo size={158} className="animate-float drop-shadow-[0_24px_40px_rgba(0,0,0,0.6)]" />
          </div>

          <div className="absolute -bottom-2 right-0 z-20 w-[148px] rotate-[4deg] overflow-hidden rounded-2xl border border-pink/40 bg-cream p-1.5 shadow-[0_30px_60px_-25px_rgba(0,0,0,0.85)] sm:-right-2 sm:w-[172px]">
            <div className="overflow-hidden rounded-xl">
              <img
                src={IMG.crepeSweet}
                alt="Crepa con fresas y crema chantilly de La Crêpe"
                className="h-[128px] w-full object-cover sm:h-[150px]"
                loading="lazy"
              />
            </div>
            <div className="px-2 pb-1 pt-2">
              <p className="font-script text-[19px] leading-none text-pink-deep">La Crêpe</p>
              <p className="mt-1 font-sans text-[8px] uppercase tracking-[0.18em] text-ink/55">
                Dulce capricho · L.160
              </p>
            </div>
          </div>

          <div className="absolute -top-2 right-0 z-20 hidden rounded-full border border-gold/25 bg-ink/80 px-4 py-2.5 backdrop-blur sm:block lg:-right-2">
            <div className="flex items-center gap-2">
              <SparkleIcon className="h-3.5 w-3.5 text-gold" />
              <span className="font-sans text-[9px] uppercase tracking-[0.16em] text-cream/70">
                Hecho a mano
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-14 flex max-w-[1360px] items-center justify-between px-5 sm:px-6 lg:mt-16 lg:px-10">
        <div className="flex items-center gap-3 text-cream/35">
          <span className="eyebrow text-[9px]">Desliza para descubrir</span>
          <span className="h-px w-10 bg-gradient-to-r from-gold/60 to-transparent" />
        </div>
        <Ornament className="hidden sm:inline-flex" />
        <p className="hidden font-script text-[22px] text-pink/70 sm:block">
          bienvenido a casa
        </p>
      </div>
    </section>
  );
}

const TICKER_ITEMS = [
  "Café de especialidad",
  "Crepas hechas a mano",
  "Repostería Bikery",
  "Ingredientes frescos",
  "Pedidos por WhatsApp",
  "Tres conceptos, una casa",
  "Hecho en Honduras",
];

export function Ticker() {
  return (
    <div className="relative overflow-hidden border-y border-gold/20 bg-[#0d0c0a] py-3.5">
      <div className="flex w-max animate-marquee items-center">
        {[0, 1].map((set) => (
          <div key={set} className="flex shrink-0 items-center" aria-hidden={set === 1}>
            {TICKER_ITEMS.map((item) => (
              <span key={`${set}-${item}`} className="flex items-center">
                <span className="whitespace-nowrap px-7 font-sans text-[9.5px] font-medium uppercase tracking-[0.28em] text-cream/60">
                  {item}
                </span>
                <span className="text-[8px] text-gold/70">✦</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
