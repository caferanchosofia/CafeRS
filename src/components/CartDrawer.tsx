import { useEffect, useMemo, useRef, useState } from "react";
import { FEATURED_IMAGES, getItem, priceLabel } from "../data/menu";
import { buildOrderMessage, useStore } from "../store";
import {
  ArrowRightIcon,
  BagIcon,
  BikeIcon,
  CoffeeIcon,
  CrepeIcon,
  MapPinIcon,
  MinusIcon,
  PlusIcon,
  TrashIcon,
  WhatsAppIcon,
  XIcon,
} from "./Icons";

const PAYMENT_OPTIONS = ["Efectivo", "Transferencia bancaria", "Tarjeta en el local"];

export function CartDrawer() {
  const {
    cart,
    cartCount,
    subtotal,
    deliveryFee,
    cartOpen,
    setCartOpen,
    setQty,
    removeLine,
    clearCart,
    addItem,
    showToast,
    waLink,
    formattedPhone,
  } = useStore();

  const [orderType, setOrderType] = useState<"pickup" | "delivery">("pickup");
  const [name, setName] = useState("");
  const [place, setPlace] = useState("");
  const [payment, setPayment] = useState(PAYMENT_OPTIONS[0]);
  const [notes, setNotes] = useState("");
  const [nameError, setNameError] = useState(false);
  const [placeError, setPlaceError] = useState(false);
  const nameRef = useRef<HTMLInputElement>(null);
  const placeRef = useRef<HTMLInputElement>(null);

  const fee = orderType === "delivery" ? deliveryFee : 0;
  const total = subtotal + fee;

  useEffect(() => {
    if (!cartOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setCartOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [cartOpen, setCartOpen]);

  const quickPicks = useMemo(
    () => ["lat-ranchero", "cd-cheesecake"].map((id) => getItem(id)),
    [],
  );

  const close = () => setCartOpen(false);

  const goToMenu = () => {
    close();
    window.setTimeout(() => {
      document.getElementById("carta")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 80);
  };

  const sendOrder = () => {
    if (cart.length === 0) return;
    let valid = true;
    if (!name.trim()) {
      setNameError(true);
      valid = false;
    }
    if (orderType === "delivery" && !place.trim()) {
      setPlaceError(true);
      valid = false;
    }
    if (!valid) {
      showToast("Completa los datos marcados para continuar");
      if (!name.trim()) nameRef.current?.focus();
      else placeRef.current?.focus();
      return;
    }

    const message = buildOrderMessage({
      cart,
      subtotal,
      deliveryFee: fee,
      orderType,
      name: name.trim(),
      place: place.trim(),
      payment,
      notes: notes.trim(),
    });

    window.open(waLink(message), "_blank", "noopener,noreferrer");
    showToast("Tu pedido está listo. Confirma el envío en WhatsApp.");
  };

  const directChat = waLink(
    "¡Hola! Tengo una consulta sobre la carta de Café Rancho Sofía y La Crêpe.",
  );

  return (
    <>
      {cartOpen ? (
        <div
          className="fixed inset-0 z-[80] bg-ink/75 backdrop-blur-sm animate-overlay"
          onClick={close}
          aria-hidden="true"
        />
      ) : null}

      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Mi pedido"
        aria-hidden={!cartOpen}
        className={`fixed inset-y-0 right-0 z-[85] flex w-full max-w-[470px] flex-col border-l border-gold/20 bg-[#16130f] shadow-[-30px_0_80px_-30px_rgba(0,0,0,0.9)] transition-transform duration-300 sm:w-[470px] ${
          cartOpen ? "translate-x-0" : "pointer-events-none translate-x-full"
        }`}
      >
        <div className="h-[3px] w-full bg-gradient-to-r from-gold/30 via-gold to-pink/50" />
        <header className="flex items-start justify-between gap-4 border-b border-cream/10 px-5 pb-4 pt-5">
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-full border border-gold/30 bg-gold/[0.08] text-gold">
              <BagIcon className="h-4.5 w-4.5" />
            </span>
            <div>
              <p className="font-sans text-[8px] uppercase tracking-[0.26em] text-gold/70">
                Tu selección
              </p>
              <h2 className="mt-1 font-display text-[1.7rem] leading-none text-cream">
                Mi pedido
                {cartCount > 0 ? (
                  <span className="ml-2 font-sans text-[11px] font-medium uppercase tracking-[0.14em] text-cream/40">
                    {cartCount} {cartCount === 1 ? "artículo" : "artículos"}
                  </span>
                ) : null}
              </h2>
            </div>
          </div>
          <button
            type="button"
            onClick={close}
            aria-label="Cerrar mi pedido"
            className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-cream/15 text-cream/60 transition-colors hover:border-gold/60 hover:text-gold"
          >
            <XIcon className="h-4 w-4" />
          </button>
        </header>

        <div className="flex-1 overflow-y-auto overscroll-contain px-5 py-5">
          {cart.length === 0 ? (
            <div className="flex min-h-full flex-col">
              <div className="rounded-[22px] border border-cream/10 bg-cream/[0.03] px-6 py-10 text-center">
                <span className="mx-auto grid h-14 w-14 place-items-center rounded-full border border-gold/25 bg-gold/[0.06] text-gold">
                  <CoffeeIcon className="h-6 w-6" />
                </span>
                <h3 className="mt-4 font-display text-[1.6rem] leading-none text-cream">
                  Tu pedido está vacío
                </h3>
                <p className="mx-auto mt-2 max-w-[250px] text-[12px] font-light leading-relaxed text-cream/50">
                  Empieza por los favoritos de la casa o explora la carta completa.
                </p>
                <button
                  type="button"
                  onClick={goToMenu}
                  className="mt-5 inline-flex items-center gap-2 rounded-full bg-gold px-5 py-3 font-sans text-[9.5px] font-semibold uppercase tracking-[0.14em] text-ink transition-colors hover:bg-gold-light"
                >
                  Explorar la carta
                  <ArrowRightIcon className="h-3.5 w-3.5" />
                </button>
              </div>

              <p className="mb-3 mt-7 font-sans text-[8.5px] uppercase tracking-[0.22em] text-cream/35">
                Antojos rápidos
              </p>
              <div className="space-y-2.5">
                {quickPicks.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-3 rounded-2xl border border-cream/10 bg-cream/[0.03] p-2.5"
                  >
                    <img
                      src={FEATURED_IMAGES[item.id]}
                      alt=""
                      className="h-12 w-12 shrink-0 rounded-xl object-cover"
                      loading="lazy"
                    />
                    <div className="min-w-0 flex-1">
                      <p className="truncate font-display text-[1.05rem] leading-tight text-cream">
                        {item.name}
                      </p>
                      <p className="mt-0.5 font-sans text-[10px] text-gold/80">
                        {priceLabel(item.price ?? item.variants?.[0]?.price ?? 0)}
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        addItem(item, item.variants?.[0]);
                        showToast(`${item.name} se agregó a tu pedido`);
                      }}
                      aria-label={`Agregar ${item.name}`}
                      className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-gold/40 text-gold transition-colors hover:bg-gold hover:text-ink"
                    >
                      <PlusIcon className="h-3.5 w-3.5" />
                    </button>
                  </div>
                ))}
              </div>

              <a
                href={directChat}
                target="_blank"
                rel="noreferrer"
                className="mt-auto flex items-center justify-center gap-2 pt-8 font-sans text-[10px] uppercase tracking-[0.14em] text-cream/45 transition-colors hover:text-gold"
              >
                <WhatsAppIcon className="h-4 w-4" />
                ¿Solo una consulta? Escríbenos
              </a>
            </div>
          ) : (
            <>
              <div className="mb-2 flex items-center justify-between">
                <p className="font-sans text-[8.5px] uppercase tracking-[0.22em] text-cream/35">
                  Productos
                </p>
                <button
                  type="button"
                  onClick={() => {
                    clearCart();
                    showToast("Pedido vaciado");
                  }}
                  className="inline-flex items-center gap-1.5 font-sans text-[9px] uppercase tracking-[0.1em] text-cream/35 transition-colors hover:text-pink"
                >
                  <TrashIcon className="h-3.5 w-3.5" />
                  Vaciar
                </button>
              </div>

              <ul className="divide-y divide-cream/10">
                {cart.map((line) => {
                  const isCrepe = line.venueId === "crepe";
                  const isBikery = line.venueId === "bikery";
                  return (
                    <li key={line.key} className="flex gap-3 py-4">
                      <span
                        className={`mt-0.5 grid h-10 w-10 shrink-0 place-items-center rounded-full border ${
                          isCrepe
                            ? "border-pink/25 bg-pink/[0.08] text-pink"
                            : isBikery
                              ? "border-mint/30 bg-mint/[0.08] text-mint"
                              : "border-gold/25 bg-gold/[0.06] text-gold"
                        }`}
                      >
                        {isCrepe ? (
                          <CrepeIcon className="h-4 w-4" />
                        ) : isBikery ? (
                          <BikeIcon className="h-4 w-4" />
                        ) : (
                          <CoffeeIcon className="h-4 w-4" />
                        )}
                      </span>

                      <div className="min-w-0 flex-1">
                        <p
                          className={`font-sans text-[7.5px] uppercase tracking-[0.16em] ${
                            isCrepe
                              ? "text-pink/70"
                              : isBikery
                                ? "text-mint/75"
                                : "text-gold/60"
                          }`}
                        >
                          {line.venueName}
                        </p>
                        <h3 className="mt-1 font-display text-[1.15rem] leading-tight text-cream">
                          {line.name}
                          {line.variant ? (
                            <span className="ml-1.5 font-sans text-[9px] uppercase tracking-[0.08em] text-cream/40">
                              · {line.variant}
                            </span>
                          ) : null}
                        </h3>
                        <p className="mt-0.5 font-sans text-[9.5px] text-cream/35">
                          {priceLabel(line.price)} c/u
                        </p>

                        <div className="mt-2.5 flex items-center justify-between gap-3">
                          <div className="flex items-center rounded-full border border-cream/15">
                            <button
                              type="button"
                              onClick={() => setQty(line.key, line.qty - 1)}
                              aria-label={`Quitar una unidad de ${line.name}`}
                              className="grid h-7 w-7 place-items-center rounded-full text-cream/60 transition-colors hover:text-gold"
                            >
                              <MinusIcon className="h-3 w-3" />
                            </button>
                            <span className="w-5 text-center font-sans text-[11px] font-medium text-cream">
                              {line.qty}
                            </span>
                            <button
                              type="button"
                              onClick={() => setQty(line.key, line.qty + 1)}
                              aria-label={`Agregar una unidad de ${line.name}`}
                              className="grid h-7 w-7 place-items-center rounded-full text-cream/60 transition-colors hover:text-gold"
                            >
                              <PlusIcon className="h-3 w-3" />
                            </button>
                          </div>
                          <div className="flex items-center gap-3">
                            <span className="font-sans text-[12.5px] font-medium text-gold-light">
                              {priceLabel(line.price * line.qty)}
                            </span>
                            <button
                              type="button"
                              onClick={() => removeLine(line.key)}
                              aria-label={`Eliminar ${line.name}`}
                              className="text-cream/25 transition-colors hover:text-pink"
                            >
                              <TrashIcon className="h-3.5 w-3.5" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>

              <div className="mt-6">
                <p className="mb-3 font-sans text-[8.5px] uppercase tracking-[0.22em] text-cream/35">
                  Detalles del pedido
                </p>

                <div className="grid grid-cols-2 gap-1 rounded-full border border-cream/15 bg-cream/[0.03] p-1">
                  {(
                    [
                      { id: "pickup", label: "Para recoger" },
                      { id: "delivery", label: `Delivery · L.${deliveryFee}` },
                    ] as const
                  ).map((option) => (
                    <button
                      key={option.id}
                      type="button"
                      onClick={() => setOrderType(option.id)}
                      className={`rounded-full px-3 py-2.5 font-sans text-[9.5px] font-medium uppercase tracking-[0.1em] transition-colors ${
                        orderType === option.id
                          ? "bg-cream text-ink"
                          : "text-cream/50 hover:text-cream"
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>

                <div className="mt-3.5 space-y-3">
                  <div>
                    <label
                      htmlFor="order-name"
                      className="font-sans text-[8.5px] uppercase tracking-[0.16em] text-cream/45"
                    >
                      Nombre <span className="text-gold">*</span>
                    </label>
                    <input
                      ref={nameRef}
                      id="order-name"
                      type="text"
                      value={name}
                      onChange={(event) => {
                        setName(event.target.value);
                        setNameError(false);
                      }}
                      placeholder="¿A nombre de quién?"
                      aria-invalid={nameError}
                      className={`mt-1.5 h-11 w-full rounded-xl border bg-cream/[0.04] px-3.5 font-sans text-[12.5px] text-cream outline-none transition-colors placeholder:text-cream/25 ${
                        nameError ? "border-pink" : "border-cream/15 focus:border-gold"
                      }`}
                    />
                    {nameError ? (
                      <p className="mt-1 font-sans text-[9px] text-pink">Escribe tu nombre.</p>
                    ) : null}
                  </div>

                  <div>
                    <label
                      htmlFor="order-place"
                      className="font-sans text-[8.5px] uppercase tracking-[0.16em] text-cream/45"
                    >
                      {orderType === "delivery" ? "Dirección de entrega" : "Mesa o referencia"}
                      {orderType === "delivery" ? " *" : ""}
                    </label>
                    <input
                      ref={placeRef}
                      id="order-place"
                      type="text"
                      value={place}
                      onChange={(event) => {
                        setPlace(event.target.value);
                        setPlaceError(false);
                      }}
                      placeholder={
                        orderType === "delivery"
                          ? "Colonia, calle, casa…"
                          : "Mesa 4, barra, etc. (opcional)"
                      }
                      aria-invalid={placeError}
                      className={`mt-1.5 h-11 w-full rounded-xl border bg-cream/[0.04] px-3.5 font-sans text-[12.5px] text-cream outline-none transition-colors placeholder:text-cream/25 ${
                        placeError ? "border-pink" : "border-cream/15 focus:border-gold"
                      }`}
                    />
                    {placeError ? (
                      <p className="mt-1 font-sans text-[9px] text-pink">
                        Necesitamos tu dirección para el delivery.
                      </p>
                    ) : null}
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="order-payment"
                        className="font-sans text-[8.5px] uppercase tracking-[0.16em] text-cream/45"
                      >
                        Forma de pago
                      </label>
                      <select
                        id="order-payment"
                        value={payment}
                        onChange={(event) => setPayment(event.target.value)}
                        className="mt-1.5 h-11 w-full appearance-none rounded-xl border border-cream/15 bg-cream/[0.04] px-3.5 font-sans text-[12px] text-cream outline-none transition-colors focus:border-gold"
                      >
                        {PAYMENT_OPTIONS.map((option) => (
                          <option key={option} value={option} className="bg-[#221d17] text-cream">
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label
                        htmlFor="order-notes"
                        className="font-sans text-[8.5px] uppercase tracking-[0.16em] text-cream/45"
                      >
                        Notas
                      </label>
                      <textarea
                        id="order-notes"
                        value={notes}
                        onChange={(event) => setNotes(event.target.value)}
                        placeholder="Sin azúcar, sin hielo…"
                        rows={2}
                        className="mt-1.5 w-full resize-none rounded-xl border border-cream/15 bg-cream/[0.04] px-3.5 py-2.5 font-sans text-[12px] text-cream outline-none transition-colors placeholder:text-cream/25 focus:border-gold"
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-4 flex items-start gap-2 rounded-xl border border-cream/10 bg-cream/[0.02] px-3 py-2.5">
                  <MapPinIcon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold/70" />
                  <p className="font-sans text-[9.5px] leading-relaxed text-cream/40">
                    Flores, Comayagua. Delivery disponible en zonas cercanas.
                    Coordinamos el envío por WhatsApp.
                  </p>
                </div>
              </div>
            </>
          )}
        </div>

        {cart.length > 0 ? (
          <footer className="border-t border-cream/10 bg-[#12100e] px-5 pb-5 pt-4">
            <div className="space-y-1.5 font-sans text-[11px]">
              <div className="flex items-center justify-between text-cream/50">
                <span>Subtotal</span>
                <span>{priceLabel(subtotal)}</span>
              </div>
              <div className="flex items-center justify-between text-cream/50">
                <span>{orderType === "delivery" ? "Envío" : "Recoger en el local"}</span>
                <span>{fee > 0 ? priceLabel(fee) : "Gratis"}</span>
              </div>
              <div className="flex items-center justify-between border-t border-cream/10 pt-2">
                <span className="font-sans text-[10px] font-medium uppercase tracking-[0.16em] text-cream">
                  Total
                </span>
                <span className="font-display text-[1.45rem] leading-none text-gold-light">
                  {priceLabel(total)}
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={sendOrder}
              className="mt-3.5 flex w-full items-center justify-center gap-2.5 rounded-full bg-gold px-5 py-4 font-sans text-[10.5px] font-semibold uppercase tracking-[0.14em] text-ink transition-colors hover:bg-gold-light active:scale-[0.99]"
            >
              <WhatsAppIcon className="h-[18px] w-[18px]" />
              Enviar pedido por WhatsApp
            </button>
            <div className="mt-2 flex items-center justify-between gap-2">
              <p className="font-sans text-[8px] leading-relaxed text-cream/30">
                Se abrirá WhatsApp con tu pedido listo para enviar.
              </p>
              <a
                href={directChat}
                target="_blank"
                rel="noreferrer"
                className="shrink-0 font-sans text-[8.5px] uppercase tracking-[0.1em] text-gold/70 hover:text-gold"
              >
                {formattedPhone}
              </a>
            </div>
          </footer>
        ) : null}
      </aside>
    </>
  );
}
