import { CONTACT, IMG } from "../data/menu";
import { useStore } from "../store";
import { BikeryLogo, LaCrepeLogo, Ornament, RanchoSofiaLogo, SectionTitle } from "./Brand";
import { SocialFollow } from "./SocialFollow";
import {
  ArrowUpRightIcon,
  ClockIcon,
  CoffeeIcon,
  CrepeIcon,
  MapPinIcon,
  PhoneIcon,
  SparkleIcon,
  StarIcon,
  WhatsAppIcon,
} from "./Icons";

export function Story() {
  return (
    <section id="nosotros" className="relative scroll-mt-20 overflow-hidden bg-ink py-20 lg:py-28">
      <div className="pointer-events-none absolute -right-24 top-16 h-[360px] w-[360px] rounded-full bg-[radial-gradient(circle,rgba(236,111,166,0.12),transparent_70%)]" />
      <div className="pointer-events-none absolute -left-24 bottom-0 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(201,169,110,0.1),transparent_70%)]" />
      <div className="relative mx-auto max-w-[1360px] px-5 sm:px-6 lg:px-10">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div className="relative mx-auto w-full max-w-[540px]">
            <div className="absolute -inset-3 rounded-[34px] border border-gold/25" aria-hidden="true" />
            <div className="relative overflow-hidden rounded-[30px] border border-cream/10 shadow-[0_40px_80px_-40px_rgba(0,0,0,0.7)]">
              <img
                src="/historia-rancho-sofia.jpg"
                alt="Café Rancho Sofía: bebidas de la casa, el rancho, el equipo y la barra"
                className="aspect-[4/3] h-auto w-full object-cover object-center"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                <p className="font-script text-[25px] leading-none text-pink-soft">
                  un mismo techo
                </p>
                <p className="mt-2 max-w-[280px] font-display text-[1.45rem] leading-tight text-cream">
                  Dos cartas, una sola mesa compartida.
                </p>
              </div>
            </div>

            <div className="absolute -bottom-8 -right-3 w-[150px] rotate-[-4deg] rounded-2xl border border-ink/10 bg-cream p-2 shadow-xl sm:-right-6 sm:w-[180px]">
              <img
                src={IMG.latteArt}
                alt="Taza de latte con arte de la casa"
                className="h-[110px] w-full rounded-xl object-cover sm:h-[135px]"
                loading="lazy"
              />
              <div className="px-1.5 pb-1 pt-2">
                <p className="font-sans text-[7.5px] uppercase tracking-[0.18em] text-gold-deep">
                  Hecho con amor
                </p>
                <p className="mt-0.5 font-display text-[1rem] leading-tight text-ink">
                  Cada taza cuenta
                </p>
              </div>
            </div>

            <div className="absolute -left-3 top-6 hidden items-center gap-2 rounded-full border border-ink/10 bg-cream px-3.5 py-2 shadow-md sm:flex">
              <SparkleIcon className="h-3.5 w-3.5 text-gold-deep" />
              <span className="font-sans text-[8.5px] font-medium uppercase tracking-[0.14em] text-ink/60">
                Origen 100% hondureño
              </span>
            </div>
          </div>

          <div className="lg:py-4">
            <SectionTitle
              kicker="Nuestra historia"
              tone="light"
              title={
                <>
                  Del grano a tu mesa,{" "}
                  <span className="italic text-gold">de la sartén</span> a tu corazón.
                </>
              }
              description="Café Rancho Sofía nació en medio de la naturaleza, con un propósito: brindar sabores que se sienten de verdad. Somos un café de campo, al aire libre, donde cada taza y cada crepa se sirven sin prisa, como en casa."
            />

            <div className="mt-8 space-y-5">
              <div className="flex gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-gold/30 bg-gold/10 text-gold">
                  <CoffeeIcon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-display text-[1.3rem] leading-none text-cream">
                    Café de especialidad
                  </h3>
                  <p className="mt-1.5 max-w-md text-[12.5px] font-light leading-relaxed text-cream/55">
                    Granos seleccionados, extracción cuidada y baristas que conocen tu
                    pedido de memoria. Sin atajos.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-pink/30 bg-pink/10 text-pink">
                  <CrepeIcon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-display text-[1.3rem] leading-none text-cream">
                    Crepas hechas a mano
                  </h3>
                  <p className="mt-1.5 max-w-md text-[12.5px] font-light leading-relaxed text-cream/55">
                    Masa fina, rellenos generosos y ese toque dulce de la casa. De la
                    sartén directo a tu mesa.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-3 border-y border-cream/10 py-5">
              {[
                { value: "3", label: "Conceptos" },
                { value: "+30", label: "Recetas de la casa" },
                { value: "100%", label: "Hecho a mano" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="font-display text-[2rem] leading-none text-cream">
                    {stat.value}
                  </p>
                  <p className="mt-1 font-sans text-[8px] uppercase tracking-[0.16em] text-cream/45">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <blockquote className="mt-6 border-l-2 border-gold/60 pl-5">
              <p className="font-display text-[1.4rem] italic leading-snug text-cream/75">
                “Si algo no nos gustaría comer a nosotros, no sale de nuestra cocina.”
              </p>
            </blockquote>

            <div className="mt-8 flex flex-wrap items-center gap-5 rounded-[22px] border border-cream/10 bg-cream/[0.04] p-5">
              <div className="flex flex-col items-center">
                <RanchoSofiaLogo size={72} className="rounded-full shadow-lg" />
                <p className="mt-2 font-sans text-[8px] uppercase tracking-[0.16em] text-cream/50">
                  El café
                </p>
              </div>
              <div className="flex flex-col items-center">
                <LaCrepeLogo size={72} className="rounded-full shadow-lg" />
                <p className="mt-2 font-sans text-[8px] uppercase tracking-[0.16em] text-cream/50">
                  La Crêpe
                </p>
              </div>
              <div className="flex flex-col items-center">
                <BikeryLogo size={72} className="rounded-full shadow-lg ring-1 ring-cream/15" />
                <p className="mt-2 font-sans text-[8px] uppercase tracking-[0.16em] text-cream/50">
                  Repostería Bikery
                </p>
              </div>
              <p className="min-w-[140px] flex-1 font-display text-[1.35rem] italic leading-snug text-cream/70">
                Tres marcas, una misma casa{" "}
                <span className="not-italic font-medium text-cream">
                  Rancho Sofía.
                </span>
              </p>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-4">
              <a
                href="#carta"
                className="inline-flex items-center gap-2 rounded-full bg-gold px-5 py-3 font-sans text-[9.5px] font-medium uppercase tracking-[0.16em] text-ink transition-colors hover:bg-gold-light"
              >
                Conoce la carta
                <ArrowUpRightIcon className="h-3.5 w-3.5" />
              </a>
              <div className="flex items-center gap-1 text-gold">
                {[0, 1, 2, 3, 4].map((star) => (
                  <StarIcon key={star} className="h-3 w-3" />
                ))}
                <span className="ml-1.5 font-sans text-[9px] uppercase tracking-[0.12em] text-cream/45">
                  4.9 en reseñas
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Visit() {
  const { formattedPhone, waLink } = useStore();
  const whatsappHref = waLink(
    "¡Hola! Quisiera saber si están abiertos y cómo llegar a Café Rancho Sofía.",
  );
  const mapHref = CONTACT.mapsUrl;

  return (
    <section id="visitanos" className="relative scroll-mt-20 overflow-hidden bg-ink-2 py-20 lg:py-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 bottom-0 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(201,169,110,0.1),transparent_70%)]" />
        <div className="absolute right-10 top-0 h-[320px] w-[320px] rounded-full bg-[radial-gradient(circle,rgba(236,111,166,0.07),transparent_70%)]" />
      </div>

      <div className="relative mx-auto max-w-[1360px] px-5 sm:px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-16">
          <div>
            <SectionTitle
              kicker="Visítanos"
              tone="light"
              title={
                <>
                  Ven por un café,{" "}
                  <span className="italic text-gold">quédate por el postre.</span>
                </>
              }
              description="Estamos en el corazón de Flores, Comayagua, con espacio para trabajar, conversar o simplemente no hacer nada. Tu mesa te espera."
            />

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-cream/10 bg-cream/[0.03] p-4">
                <MapPinIcon className="h-4.5 w-4.5 text-gold" />
                <p className="mt-3 font-sans text-[8px] uppercase tracking-[0.18em] text-cream/40">
                  Dirección
                </p>
                <p className="mt-1.5 text-[12.5px] leading-relaxed text-cream/75">
                  {CONTACT.address}
                </p>
              </div>
              <div className="rounded-2xl border border-cream/10 bg-cream/[0.03] p-4">
                <ClockIcon className="h-4.5 w-4.5 text-gold" />
                <p className="mt-3 font-sans text-[8px] uppercase tracking-[0.18em] text-cream/40">
                  Horario
                </p>
                <p className="mt-1.5 text-[12px] leading-relaxed text-cream/75">
                  {CONTACT.hoursWeek}
                </p>
                <p className="text-[12px] leading-relaxed text-cream/50">
                  {CONTACT.hoursSunday}
                </p>
              </div>
              <div className="rounded-2xl border border-cream/10 bg-cream/[0.03] p-4">
                <PhoneIcon className="h-4.5 w-4.5 text-gold" />
                <p className="mt-3 font-sans text-[8px] uppercase tracking-[0.18em] text-cream/40">
                  WhatsApp
                </p>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-1.5 block font-display text-[1.15rem] leading-none text-cream transition-colors hover:text-gold"
                >
                  {formattedPhone}
                </a>
              </div>
              <div className="rounded-2xl border border-cream/10 bg-cream/[0.03] p-4">
                <CreditCardIcon />
                <p className="mt-3 font-sans text-[8px] uppercase tracking-[0.18em] text-cream/40">
                  Pagos
                </p>
                <p className="mt-1.5 text-[12px] leading-relaxed text-cream/75">
                  Efectivo, transferencia
                  <br />
                  y tarjeta en el local.
                </p>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-2.5">
              <a
                href={mapHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-gold px-5 py-3.5 font-sans text-[10px] font-semibold uppercase tracking-[0.14em] text-ink transition-colors hover:bg-gold-light"
              >
                <MapPinIcon className="h-4 w-4" />
                Cómo llegar
              </a>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-cream/20 px-5 py-3.5 font-sans text-[10px] font-medium uppercase tracking-[0.14em] text-cream/80 transition-colors hover:border-gold/60 hover:text-gold"
              >
                <WhatsAppIcon className="h-4 w-4" />
                Escríbenos
              </a>
            </div>
            <SocialFollow tone="light" labeled className="mt-7" />
          </div>

          <div className="relative">
            <div className="relative aspect-[4/3.4] overflow-hidden rounded-[26px] border border-cream/15 bg-[#1d1913] sm:aspect-[4/3]">
              <div
                className="absolute inset-0 opacity-[0.35]"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(217,203,179,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(217,203,179,0.12) 1px, transparent 1px)",
                  backgroundSize: "48px 48px",
                }}
                aria-hidden="true"
              />
              <svg
                viewBox="0 0 480 360"
                className="absolute inset-0 h-full w-full"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path
                  d="M-30 270 C90 250 100 150 210 165 S340 80 520 130"
                  fill="none"
                  stroke="#c9a96e"
                  strokeOpacity="0.45"
                  strokeWidth="2.5"
                />
                <path
                  d="M-30 290 C95 268 112 178 216 190 S350 105 520 150"
                  fill="none"
                  stroke="#c9a96e"
                  strokeOpacity="0.12"
                  strokeWidth="12"
                />
                <path
                  d="M70 -20 C95 90 170 145 230 380"
                  fill="none"
                  stroke="#d9cbb3"
                  strokeOpacity="0.14"
                  strokeWidth="1.5"
                  strokeDasharray="5 7"
                />
                <path
                  d="M420 -20 C380 110 300 190 290 380"
                  fill="none"
                  stroke="#d9cbb3"
                  strokeOpacity="0.14"
                  strokeWidth="1.5"
                  strokeDasharray="5 7"
                />
                <g fill="#f4eee2" fillOpacity="0.035">
                  <rect x="30" y="40" width="90" height="58" rx="6" />
                  <rect x="330" y="220" width="110" height="70" rx="6" />
                  <rect x="150" y="270" width="80" height="54" rx="6" />
                  <rect x="350" y="50" width="70" height="46" rx="6" />
                </g>
              </svg>
              <span className="absolute left-6 top-1/2 -translate-y-16 font-sans text-[7.5px] uppercase tracking-[0.24em] text-cream/25">
                Centro de Flores
              </span>
              <span className="absolute bottom-20 right-7 font-sans text-[7.5px] uppercase tracking-[0.24em] text-cream/25">
                Depto. Comayagua
              </span>

              <div className="absolute left-1/2 top-[42%] -translate-x-1/2 -translate-y-1/2">
                <span className="absolute inset-0 -m-5 animate-ping rounded-full border border-gold/30" />
                <span className="relative grid h-14 w-14 place-items-center rounded-full border border-gold/50 bg-ink text-gold shadow-[0_0_0_10px_rgba(201,169,110,0.06)]">
                  <MapPinIcon className="h-6 w-6" />
                </span>
              </div>

              <div className="absolute inset-x-3 bottom-3 flex items-end justify-between gap-3 rounded-2xl border border-cream/10 bg-ink/85 p-3.5 backdrop-blur-md sm:inset-x-4 sm:bottom-4">
                <div>
                  <p className="font-sans text-[7.5px] uppercase tracking-[0.2em] text-gold/70">
                    Café & Crepería
                  </p>
                  <p className="mt-1 font-display text-[1.2rem] leading-none text-cream">
                    Rancho Sofía · La Crêpe
                  </p>
                  <p className="mt-1.5 flex items-center gap-1.5 font-sans text-[9px] text-cream/45">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    Abierto hoy
                  </p>
                </div>
                <a
                  href={mapHref}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Abrir ubicación en Google Maps"
                  className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-cream text-ink transition-colors hover:bg-gold"
                >
                  <ArrowUpRightIcon className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="mt-4 flex flex-wrap items-center justify-between gap-3 px-1">
              <p className="flex items-center gap-2 font-sans text-[9px] uppercase tracking-[0.16em] text-cream/35">
                <StarIcon className="h-3 w-3 text-gold/60" />
                Estacionamiento cercano
              </p>
              <p className="flex items-center gap-2 font-sans text-[9px] uppercase tracking-[0.16em] text-cream/35">
                <CoffeeIcon className="h-3.5 w-3.5 text-gold/60" />
                Para llevar y para quedarse
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center gap-4 border-t border-cream/10 pt-9 text-center">
          <Ornament />
          <p className="max-w-lg font-display text-[1.55rem] italic leading-snug text-cream/55">
            «No hay mejor plan que un café y una crepa sin prisa.»
          </p>
          <p className="font-script text-[24px] leading-none text-pink/70">
            te esperamos pronto
          </p>
        </div>
      </div>
    </section>
  );
}

function CreditCardIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      className="h-[18px] w-[18px] text-gold"
      aria-hidden="true"
    >
      <rect x="2.5" y="5" width="19" height="14" rx="2.5" />
      <path d="M2.5 10h19M6 15h4" />
    </svg>
  );
}
