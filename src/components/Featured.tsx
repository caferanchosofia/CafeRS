import { FEATURED_IDS, FEATURED_IMAGES, getItem, priceLabel } from "../data/menu";
import { useStore } from "../store";
import { SectionTitle } from "./Brand";
import { ArrowRightIcon, PlusIcon } from "./Icons";

export function Featured() {
  const { addItem, showToast } = useStore();
  const favorites = FEATURED_IDS.map((id) => getItem(id));

  return (
    <section className="relative overflow-hidden bg-ink-2 py-20 lg:py-28" id="favoritos">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(201,169,110,0.09),transparent_70%)]" />
        <div className="absolute -right-20 top-0 h-[380px] w-[380px] rounded-full bg-[radial-gradient(circle,rgba(236,111,166,0.08),transparent_70%)]" />
        <p
          className="absolute -bottom-8 right-4 select-none font-script text-[120px] leading-none text-cream/[0.03] lg:text-[190px]"
          aria-hidden="true"
        >
          favoritos
        </p>
      </div>

      <div className="relative mx-auto max-w-[1360px] px-5 sm:px-6 lg:px-10">
        <div className="flex flex-col gap-7 md:flex-row md:items-end md:justify-between">
          <SectionTitle
            kicker="Los imprescindibles"
            tone="light"
            title={
              <>
                Lo que <span className="italic text-gold">todos</span> piden.
              </>
            }
            description="Cuatro razones para venir hoy. Toca el signo + y armamos tu pedido para enviarlo por WhatsApp."
          />
          <button
            type="button"
            onClick={() =>
              document.getElementById("carta")?.scrollIntoView({ behavior: "smooth" })
            }
            className="group inline-flex shrink-0 items-center gap-3 self-start rounded-full border border-cream/20 px-5 py-3 font-sans text-[10px] font-medium uppercase tracking-[0.18em] text-cream/80 transition-colors hover:border-gold/70 hover:text-gold md:self-auto"
          >
            Ver la carta completa
            <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4 lg:gap-5">
          {favorites.map((item, index) => (
            <article
              key={item.id}
              className="group relative overflow-hidden rounded-[22px] border border-cream/10 bg-coal transition-all duration-500 hover:border-gold/40 hover:shadow-[0_30px_60px_-30px_rgba(0,0,0,0.9)]"
            >
              <div className="relative h-[260px] overflow-hidden lg:h-[330px]">
                <img
                  src={FEATURED_IMAGES[item.id]}
                  alt={item.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-coal via-coal/25 to-transparent" />
                <span className="absolute left-4 top-4 rounded-full border border-cream/20 bg-ink/50 px-3 py-1.5 font-sans text-[8.5px] uppercase tracking-[0.18em] text-cream/80 backdrop-blur-md">
                  {index === 0
                    ? "De la casa"
                    : item.venueId === "crepe"
                      ? "La Crêpe"
                      : item.venueId === "bikery"
                        ? "Repostería Bikery"
                        : "Rancho Sofía"}
                </span>
                {item.tag ? (
                  <span
                    className={`absolute right-4 top-4 rounded-full px-3 py-1.5 font-sans text-[8.5px] font-medium uppercase tracking-[0.14em] ${
                      item.venueId === "crepe"
                        ? "bg-pink text-ink"
                        : item.venueId === "bikery"
                          ? "bg-mint text-ink"
                          : "bg-gold text-ink"
                    }`}
                  >
                    {item.tag}
                  </span>
                ) : null}
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <p className="eyebrow text-[8.5px] text-gold-light/80">
                    {item.categoryName}
                  </p>
                  <h3 className="mt-2 pr-10 text-[1.55rem] leading-[1.05] text-cream">
                    {item.name}
                  </h3>
                </div>
              </div>
              <div className="flex items-center justify-between gap-3 px-5 pb-5 pt-1">
                <div>
                  <p className="font-sans text-[15px] font-medium text-gold-light">
                    {priceLabel(item.price ?? item.variants?.[0]?.price ?? 0)}
                    {item.variants ? (
                      <span className="ml-1.5 text-[10px] font-normal text-cream/40">
                        / {priceLabel(item.variants[item.variants.length - 1].price)}
                      </span>
                    ) : null}
                  </p>
                  <p className="mt-1 line-clamp-1 max-w-[170px] text-[11px] font-light text-cream/45">
                    {item.description}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    addItem(item, item.variants?.[0]);
                    showToast(`${item.name} se agregó a tu pedido`);
                  }}
                  aria-label={`Agregar ${item.name} a mi pedido`}
                  className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-cream text-ink transition-all hover:bg-gold active:scale-95"
                >
                  <PlusIcon className="h-4 w-4" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
