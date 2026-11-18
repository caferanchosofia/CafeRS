import { useEffect, useMemo, useState } from "react";
import {
  ALL_ITEMS,
  VENUES,
  itemPriceLabel,
  priceLabel,
  type EnrichedItem,
  type MenuItem,
  type VenueId,
} from "../data/menu";
import { useStore } from "../store";
import { SectionTitle, Ornament } from "./Brand";
import {
  ArrowRightIcon,
  CheckIcon,
  BikeIcon,
  CakeIcon,
  CoffeeIcon,
  CrepeIcon,
  MinusIcon,
  PlusIcon,
  SearchIcon,
  SparkleIcon,
  WhatsAppIcon,
  XIcon,
} from "./Icons";

function normalize(value: string): string {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

function AddButton({
  onClick,
  expanded,
  label,
}: {
  onClick: () => void;
  expanded?: boolean;
  label: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      aria-expanded={expanded}
      className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-ink/20 bg-transparent text-ink/70 transition-all hover:border-ink hover:bg-ink hover:text-cream active:scale-95"
    >
      {expanded ? <MinusIcon className="h-3.5 w-3.5" /> : <PlusIcon className="h-3.5 w-3.5" />}
    </button>
  );
}

function Tag({
  children,
  accent,
}: {
  children: React.ReactNode;
  accent: "gold" | "pink" | "mint";
}) {
  const tone =
    accent === "pink"
      ? "bg-pink/20 text-pink-deep"
      : accent === "mint"
        ? "bg-mint/20 text-mint-deep"
        : "bg-gold/20 text-gold-deep";
  return (
    <span
      className={`inline-flex shrink-0 items-center rounded-full px-2 py-0.5 font-sans text-[8px] font-semibold uppercase tracking-[0.12em] ${tone}`}
    >
      {children}
    </span>
  );
}

export function Menu() {
  const { venue, setVenue, addItem, showToast, waLink } = useStore();
  const activeVenue = VENUES.find((entry) => entry.id === venue) ?? VENUES[0];
  const [activeCategoryId, setActiveCategoryId] = useState(
    VENUES.find((entry) => entry.id === venue)!.categories[0].id,
  );
  const [query, setQuery] = useState("");
  const [openVariant, setOpenVariant] = useState<string | null>(null);

  useEffect(() => {
    const selected = VENUES.find((entry) => entry.id === venue);
    if (selected) {
      setActiveCategoryId(selected.categories[0].id);
      setOpenVariant(null);
    }
  }, [venue]);

  const activeCategory =
    activeVenue.categories.find((category) => category.id === activeCategoryId) ??
    activeVenue.categories[0];

  const results = useMemo(() => {
    const term = normalize(query.trim());
    if (!term) return [];
    return ALL_ITEMS.filter((item) =>
      normalize(
        `${item.name} ${item.description ?? ""} ${item.categoryName} ${item.venueName}`,
      ).includes(term),
    );
  }, [query]);

  const accent = activeVenue.accent;
  const searching = query.trim().length > 0;

  const add = (item: EnrichedItem, variant?: { label: string; price: number }) => {
    addItem(item, variant);
    showToast(`${item.name}${variant ? ` (${variant.label})` : ""} se agregó a tu pedido`);
  };

  const addFromCategory = (
    item: MenuItem,
    variant?: { label: string; price: number },
  ) => {
    add(
      {
        ...item,
        venueId: activeVenue.id,
        venueName: activeVenue.name,
        categoryId: activeCategory.id,
        categoryName: activeCategory.name,
      },
      variant,
    );
  };

  const switchVenue = (id: VenueId) => {
    setVenue(id);
    setQuery("");
    document.getElementById("carta")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="carta" className="relative scroll-mt-20 overflow-hidden bg-cream py-20 lg:py-28">
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,rgba(201,169,110,0.18),transparent_68%)]" />
        <div className="absolute -right-52 top-[42%] h-[560px] w-[560px] rounded-full bg-[radial-gradient(circle,rgba(236,111,166,0.14),transparent_68%)]" />
      </div>

      <div className="relative mx-auto max-w-[1360px] px-5 sm:px-6 lg:px-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionTitle
            kicker="Nuestra carta"
            title={
              <>
                Del primer café
                <br />
                <span className="italic text-gold-deep">al último postre.</span>
              </>
            }
            description="Una carta, tres personalidades. Café Rancho Sofía, La Crêpe y Repostería Bikery. Todo se prepara al momento."
          />

          <div className="w-full shrink-0 lg:w-[360px]">
            <label className="relative block">
              <span className="sr-only">Buscar en la carta</span>
              <SearchIcon className="pointer-events-none absolute left-4 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-ink/40" />
              <input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Busca café, crepa, brownie…"
                className="h-[52px] w-full rounded-full border border-ink/15 bg-cream-2 pl-11 pr-11 font-sans text-[13px] text-ink placeholder:text-ink/35 transition-colors focus:border-gold-deep focus:outline-none"
              />
              {query ? (
                <button
                  type="button"
                  onClick={() => setQuery("")}
                  aria-label="Limpiar búsqueda"
                  className="absolute right-3 top-1/2 grid h-7 w-7 -translate-y-1/2 place-items-center rounded-full bg-ink/5 text-ink/60 hover:bg-ink/10"
                >
                  <XIcon className="h-3.5 w-3.5" />
                </button>
              ) : null}
            </label>
            <p className="mt-2.5 pl-2 font-sans text-[9.5px] uppercase tracking-[0.16em] text-ink/45">
              Precios en Lempiras · L.
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-3 sm:grid-cols-3 lg:mt-12">
          {VENUES.map((entry) => {
            const active = entry.id === venue;
            const count = entry.categories.reduce((total, category) => total + category.items.length, 0);
            return (
              <button
                key={entry.id}
                type="button"
                onClick={() => switchVenue(entry.id)}
                aria-pressed={active}
                className={`group flex items-center gap-4 rounded-[18px] border p-4 text-left transition-all sm:p-5 ${
                  active
                    ? entry.id === "crepe"
                      ? "border-pink-deep bg-pink-deep text-cream shadow-[0_20px_45px_-28px_rgba(169,47,98,0.8)]"
                      : entry.id === "bikery"
                        ? "border-mint-deep bg-mint-deep text-cream shadow-[0_20px_45px_-28px_rgba(74,138,122,0.8)]"
                        : "border-ink bg-ink text-cream shadow-[0_20px_45px_-28px_rgba(18,16,14,0.8)]"
                    : "border-ink/12 bg-cream-2 text-ink hover:border-ink/35 hover:bg-white"
                }`}
              >
                <span
                  className={`grid h-11 w-11 shrink-0 place-items-center rounded-full border ${
                    active
                      ? entry.id === "crepe"
                        ? "border-cream/25 bg-cream/10 text-pink-soft"
                        : entry.id === "bikery"
                          ? "border-cream/25 bg-cream/10 text-mint-soft"
                          : "border-gold/30 bg-gold/10 text-gold"
                      : "border-ink/15 bg-cream text-ink/55"
                  }`}
                >
                  {entry.id === "cafe" ? (
                    <CoffeeIcon className="h-5 w-5" />
                  ) : entry.id === "bikery" ? (
                    <BikeIcon className="h-5 w-5" />
                  ) : (
                    <CrepeIcon className="h-5 w-5" />
                  )}
                </span>
                <span className="min-w-0 flex-1">
                  <span
                    className={`block font-sans text-[8.5px] font-medium uppercase tracking-[0.22em] ${
                      active ? "text-cream/55" : "text-ink/45"
                    }`}
                  >
                    {entry.tagline} · {count} opciones
                  </span>
                  <span className="mt-1 block font-display text-[1.5rem] leading-none">
                    {entry.name}
                  </span>
                </span>
                {active ? (
                  <span
                    className={`grid h-6 w-6 shrink-0 place-items-center rounded-full ${
                      entry.id === "crepe"
                        ? "bg-pink text-ink"
                        : entry.id === "bikery"
                          ? "bg-mint text-ink"
                          : "bg-gold text-ink"
                    }`}
                  >
                    <CheckIcon className="h-3.5 w-3.5" />
                  </span>
                ) : (
                  <ArrowRightIcon className="h-4 w-4 shrink-0 text-ink/30 transition-transform group-hover:translate-x-1" />
                )}
              </button>
            );
          })}
        </div>

        {searching ? (
          <div className="mt-12">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="eyebrow text-gold-deep">Buscando en toda la carta</p>
                <h3 className="mt-2 text-[1.9rem] leading-tight text-ink">
                  “{query.trim()}” <span className="text-ink/35">· {results.length} resultados</span>
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setQuery("")}
                className="inline-flex items-center gap-2 rounded-full border border-ink/15 px-4 py-2 font-sans text-[9.5px] uppercase tracking-[0.16em] text-ink/60 hover:border-ink/40 hover:text-ink"
              >
                <XIcon className="h-3.5 w-3.5" />
                Limpiar
              </button>
            </div>

            {results.length === 0 ? (
              <div className="mt-8 rounded-[22px] border border-ink/10 bg-cream-2 px-6 py-14 text-center">
                <CoffeeIcon className="mx-auto h-8 w-8 text-gold-deep" />
                <p className="mt-4 font-display text-2xl text-ink">
                  No encontramos “{query.trim()}”.
                </p>
                <p className="mx-auto mt-2 max-w-sm text-[13px] leading-relaxed text-ink/55">
                  Puede que sea una receta fuera de carta. Escríbenos y con gusto te
                  contamos qué tenemos hoy.
                </p>
                <a
                  href={waLink(
                    `¡Hola! Estaba buscando "${query.trim()}" en la carta y no lo encontré. ¿Me ayudan?`,
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 font-sans text-[10px] font-medium uppercase tracking-[0.16em] text-cream transition-colors hover:bg-coal"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  Preguntar por WhatsApp
                </a>
              </div>
            ) : (
              <div className="mt-7 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
                {results.map((item) => (
                  <article
                    key={item.id}
                    className="flex flex-col rounded-[18px] border border-ink/10 bg-cream-2 p-4 transition-colors hover:border-gold-deep/40 sm:p-5"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-sans text-[8.5px] font-medium uppercase tracking-[0.16em] text-ink/45">
                        {item.categoryName}
                      </span>
                      <span
                        className={`rounded-full px-2 py-0.5 font-sans text-[7.5px] font-medium uppercase tracking-[0.12em] ${
                          item.venueId === "crepe"
                            ? "bg-pink/15 text-pink-deep"
                            : item.venueId === "bikery"
                              ? "bg-mint/15 text-mint-deep"
                              : "bg-gold/20 text-gold-deep"
                        }`}
                      >
                        {item.venueName}
                      </span>
                    </div>
                    <h4 className="mt-2.5 text-[1.35rem] leading-tight text-ink">{item.name}</h4>
                    {item.description ? (
                      <p className="mt-1.5 line-clamp-2 text-[12px] font-light leading-relaxed text-ink/55">
                        {item.description}
                      </p>
                    ) : null}
                    <div className="mt-auto flex items-end justify-between gap-3 pt-4">
                      <p className="font-sans text-[15px] font-medium text-ink">
                        {itemPriceLabel(item)}
                      </p>
                      {item.variants ? (
                        <div className="flex gap-1.5">
                          {item.variants.map((variant) => (
                            <button
                              key={variant.label}
                              type="button"
                              onClick={() => add(item, variant)}
                              className="rounded-full border border-ink/15 px-2.5 py-1.5 font-sans text-[9px] font-medium text-ink/70 transition-colors hover:border-ink hover:bg-ink hover:text-cream"
                            >
                              {variant.label}
                            </button>
                          ))}
                        </div>
                      ) : (
                        <AddButton
                          onClick={() => add(item)}
                          label={`Agregar ${item.name}`}
                        />
                      )}
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        ) : (
          <>
            <div className="no-scrollbar mt-10 flex items-center gap-1 overflow-x-auto border-b border-ink/10 pb-px">
              {activeVenue.categories.map((category) => {
                const active = category.id === activeCategory.id;
                return (
                  <button
                    key={category.id}
                    type="button"
                    onClick={() => {
                      setActiveCategoryId(category.id);
                      setOpenVariant(null);
                    }}
                    className={`relative shrink-0 whitespace-nowrap px-4 py-3.5 font-sans text-[10px] font-medium uppercase tracking-[0.14em] transition-colors first:pl-0 ${
                      active ? "text-ink" : "text-ink/45 hover:text-ink/80"
                    }`}
                  >
                    {category.name}
                    <span
                      className={`absolute inset-x-0 -bottom-px h-[2px] transition-all ${
                        active
                          ? accent === "pink"
                            ? "bg-pink-deep"
                            : accent === "mint"
                              ? "bg-mint-deep"
                              : "bg-gold-deep"
                          : "bg-transparent"
                      }`}
                    />
                  </button>
                );
              })}
            </div>

            <div key={`${activeVenue.id}-${activeCategory.id}`} className="mt-9 grid animate-fade-up gap-9 lg:grid-cols-[0.82fr_1.18fr] lg:gap-12">
              <aside>
                <div className="lg:sticky lg:top-[124px]">
                  <div className="relative overflow-hidden rounded-[26px] bg-ink">
                    <img
                      src={activeCategory.image}
                      alt={activeCategory.imageAlt}
                      className="h-[300px] w-full object-cover sm:h-[380px] lg:h-[430px]"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
                    <span
                      className={`absolute left-5 top-5 rounded-full border px-3 py-1.5 font-sans text-[8.5px] font-medium uppercase tracking-[0.18em] backdrop-blur-md ${
                        accent === "pink"
                          ? "border-pink/40 bg-pink/15 text-pink-soft"
                          : accent === "mint"
                            ? "border-mint/40 bg-mint/15 text-mint-soft"
                            : "border-gold/40 bg-gold/15 text-gold-light"
                      }`}
                    >
                      {activeCategory.kicker}
                    </span>
                    <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                      <p className="eyebrow text-[9px] text-cream/50">
                        {activeVenue.name}
                      </p>
                      <h3 className="mt-2 text-[2.1rem] leading-[0.98] text-cream">
                        {activeCategory.name}
                      </h3>
                      <p className="mt-3 max-w-xs text-[12.5px] font-light leading-relaxed text-cream/65">
                        {activeCategory.blurb}
                      </p>
                    </div>
                  </div>

                  <div className="mt-3 flex items-center gap-3 rounded-2xl border border-ink/10 bg-cream-2 px-4 py-3.5">
                    <SparkleIcon
                      className={`h-4 w-4 shrink-0 ${
                        accent === "pink"
                          ? "text-pink-deep"
                          : accent === "mint"
                            ? "text-mint-deep"
                            : "text-gold-deep"
                      }`}
                    />
                    <p className="font-sans text-[10.5px] leading-relaxed text-ink/60">
                      {activeCategory.items.length} opciones · preparadas al momento en
                      nuestra barra.
                    </p>
                  </div>
                </div>
              </aside>

              <div>
                <div className="flex flex-wrap items-end justify-between gap-4 border-b border-ink/10 pb-4">
                  <div>
                    <p className="eyebrow text-[9px] text-ink/40">{activeCategory.kicker}</p>
                    <h3 className="mt-1.5 text-[2rem] leading-none text-ink lg:text-[2.4rem]">
                      {activeCategory.name}
                    </h3>
                  </div>
                  <p className="pb-1 font-sans text-[9px] uppercase tracking-[0.16em] text-ink/40">
                    Lempiras · L.
                  </p>
                </div>

                <ul className="mt-1 divide-y divide-ink/10">
                  {activeCategory.items.map((item) => {
                    const expanded = openVariant === item.id;
                    return (
                      <li key={item.id} className="py-1">
                        <div className="group py-4">
                          <div className="flex items-center gap-2.5">
                            <h4 className="font-display text-[1.28rem] leading-tight text-ink sm:text-[1.4rem]">
                              {item.name}
                            </h4>
                            {item.tag ? <Tag accent={accent}>{item.tag}</Tag> : null}
                            <span className="dotted-line" aria-hidden="true" />
                            <span className="shrink-0 font-sans text-[13px] font-medium text-ink/85 sm:text-[14px]">
                              {itemPriceLabel(item)}
                            </span>
                            <AddButton
                              onClick={() => {
                                if (item.variants) {
                                  setOpenVariant(expanded ? null : item.id);
                                } else {
                                  addFromCategory(item);
                                }
                              }}
                              expanded={expanded}
                              label={
                                item.variants
                                  ? `Elegir tamaño de ${item.name}`
                                  : `Agregar ${item.name} a mi pedido`
                              }
                            />
                          </div>
                          {item.description ? (
                            <p className="mt-1.5 max-w-[92%] text-[12px] font-light leading-relaxed text-ink/50">
                              {item.description}
                            </p>
                          ) : null}

                          {expanded && item.variants ? (
                            <div className="mt-3 flex flex-wrap items-center gap-2 rounded-xl border border-ink/10 bg-cream-2 p-2.5 animate-scale-in">
                              <span className="pl-1 font-sans text-[9px] uppercase tracking-[0.16em] text-ink/45">
                                Elige el tamaño
                              </span>
                              {item.variants.map((variant) => (
                                <button
                                  key={variant.label}
                                  type="button"
                                  onClick={() => {
                                    addFromCategory(item, variant);
                                    setOpenVariant(null);
                                  }}
                                  className={`rounded-full px-4 py-1.5 font-sans text-[10.5px] font-medium transition-colors ${
                                    accent === "pink"
                                      ? "border border-ink/15 bg-white text-ink/75 hover:border-pink-deep hover:bg-pink-deep hover:text-cream"
                                      : accent === "mint"
                                        ? "border border-ink/15 bg-white text-ink/75 hover:border-mint-deep hover:bg-mint-deep hover:text-cream"
                                        : "border border-ink/15 bg-white text-ink/75 hover:border-ink hover:bg-ink hover:text-cream"
                                  }`}
                                >
                                  {variant.label} · {priceLabel(variant.price)}
                                </button>
                              ))}
                            </div>
                          ) : null}
                        </div>
                      </li>
                    );
                  })}
                </ul>

                <div className="mt-7 grid gap-3 sm:grid-cols-2">
                  {activeVenue.categories
                    .filter((category) => category.id !== activeCategory.id)
                    .slice(0, 2)
                    .map((category) => (
                      <button
                        key={category.id}
                        type="button"
                        onClick={() => {
                          setActiveCategoryId(category.id);
                          setOpenVariant(null);
                        }}
                        className="group flex items-center gap-3 rounded-2xl border border-ink/12 bg-cream-2 p-2.5 text-left transition-colors hover:border-ink/30 hover:bg-white"
                      >
                        <img
                          src={category.image}
                          alt=""
                          className="h-14 w-14 shrink-0 rounded-xl object-cover"
                          loading="lazy"
                        />
                        <span className="min-w-0 flex-1">
                          <span className="block font-sans text-[8px] uppercase tracking-[0.18em] text-ink/40">
                            Sigue explorando
                          </span>
                          <span className="mt-0.5 block truncate font-display text-[1.05rem] text-ink">
                            {category.name}
                          </span>
                        </span>
                        <ArrowRightIcon className="mr-1 h-4 w-4 shrink-0 text-ink/30 transition-transform group-hover:translate-x-0.5" />
                      </button>
                    ))}
                </div>

                <p className="mt-5 flex items-center gap-2 font-sans text-[10px] text-ink/40">
                  <SparkleIcon className="h-3 w-3 text-gold-deep" />
                  ¿Alergias o algún ajuste? Escríbenos por WhatsApp antes de ordenar.
                </p>
              </div>
            </div>

            <div className="mt-14 flex flex-col items-center gap-4 border-t border-ink/10 pt-9 text-center">
              <Ornament tone="dark" />
              <p className="font-display text-[1.5rem] italic text-ink/60">
                Hecho despacio, servido con cariño.
              </p>
              <button
                type="button"
                onClick={() => {
                  const index = VENUES.findIndex((entry) => entry.id === venue);
                  switchVenue(VENUES[(index + 1) % VENUES.length].id);
                }}
                className={`inline-flex items-center gap-2.5 rounded-full px-6 py-3.5 font-sans text-[10px] font-medium uppercase tracking-[0.16em] text-cream transition-colors ${
                  venue === "cafe"
                    ? "bg-pink-deep hover:bg-pink"
                    : venue === "crepe"
                      ? "bg-mint-deep hover:bg-mint"
                      : "bg-ink hover:bg-coal"
                }`}
              >
                {venue === "cafe" ? (
                  <CrepeIcon className="h-4 w-4" />
                ) : venue === "crepe" ? (
                  <CakeIcon className="h-4 w-4" />
                ) : (
                  <CoffeeIcon className="h-4 w-4" />
                )}
                {venue === "cafe"
                  ? "Ir a la carta de La Crêpe"
                  : venue === "crepe"
                    ? "Ir a Repostería Bikery"
                    : "Volver al café de Rancho Sofía"}
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
