import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import {
  DEFAULT_WHATSAPP,
  priceLabel,
  type EnrichedItem,
  type VenueId,
} from "./data/menu";

export type CartLine = {
  key: string;
  itemId: string;
  name: string;
  venueId: VenueId;
  venueName: string;
  price: number;
  variant?: string;
  qty: number;
};

export type AddLineInput = Omit<CartLine, "key" | "qty"> & { qty?: number };

type Store = {
  cart: CartLine[];
  cartCount: number;
  subtotal: number;
  addLine: (input: AddLineInput) => void;
  addItem: (item: EnrichedItem, variant?: { label: string; price: number }) => void;
  removeLine: (key: string) => void;
  setQty: (key: string, qty: number) => void;
  clearCart: () => void;
  deliveryFee: number;
  venue: VenueId;
  setVenue: (venue: VenueId) => void;
  cartOpen: boolean;
  setCartOpen: (open: boolean) => void;
  digits: string;
  menuUrl: string;
  siteUrl: string;
  waLink: (message: string) => string;
  showToast: (message: string) => void;
  toast: string | null;
  formattedPhone: string;
};

const StoreContext = createContext<Store | null>(null);

const STORAGE = {
  cart: "rancho-sofia-cart-v1",
};

function safeGet(key: string): string | null {
  try {
    return window.localStorage.getItem(key);
  } catch {
    return null;
  }
}

function safeSet(key: string, value: string) {
  try {
    window.localStorage.setItem(key, value);
  } catch {
    /* Storage can be unavailable in private mode. */
  }
}

function cleanNumber(value: string): string {
  return value.replace(/\D/g, "");
}

export function formatPhone(value: string): string {
  const digits = cleanNumber(value);
  if (digits.length === 11 && digits.startsWith("504")) {
    return `+504 ${digits.slice(3, 7)}-${digits.slice(7)}`;
  }
  if (digits.startsWith("+")) return digits;
  return digits ? `+${digits}` : "";
}

export function buildOrderMessage({
  cart,
  subtotal,
  deliveryFee,
  orderType,
  name,
  place,
  payment,
  notes,
}: {
  cart: CartLine[];
  subtotal: number;
  deliveryFee: number;
  orderType: "pickup" | "delivery";
  name: string;
  place: string;
  payment: string;
  notes: string;
}): string {
  const lines = cart.map((line) => {
    const variant = line.variant ? ` (${line.variant})` : "";
    return `• ${line.qty}× ${line.name}${variant} — ${priceLabel(line.price * line.qty)}`;
  });

  const total = subtotal + deliveryFee;
  const details: string[] = [];

  details.push("¡Hola, Café Rancho Sofía! Me gustaría hacer este pedido:");
  details.push("");
  details.push(...lines);
  details.push("");
  details.push(`Subtotal: ${priceLabel(subtotal)}`);
  if (deliveryFee > 0) details.push(`Envío: ${priceLabel(deliveryFee)}`);
  details.push(`Total: ${priceLabel(total)}`);
  details.push("");
  details.push(`Tipo de pedido: ${orderType === "delivery" ? "Delivery" : "Para recoger"}`);
  details.push(`Nombre: ${name || "Sin especificar"}`);
  if (place) {
    details.push(
      `${orderType === "delivery" ? "Dirección de entrega" : "Mesa / referencia"}: ${place}`,
    );
  }
  details.push(`Forma de pago: ${payment}`);
  if (notes) details.push(`Notas: ${notes}`);
  details.push("");
  details.push("¡Gracias! ✨");

  return details.join("\n");
}

export function getDefaultSiteUrl(): string {
  try {
    const url = new URL(window.location.href);
    url.hash = "";
    url.search = "";
    return url.toString().replace(/\/$/, "");
  } catch {
    return "https://cafe-ranchosofia.com";
  }
}

export function StoreProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartLine[]>(() => {
    const raw = safeGet(STORAGE.cart);
    if (!raw) return [];
    try {
      const parsed = JSON.parse(raw) as CartLine[];
      if (!Array.isArray(parsed)) return [];
      return parsed.filter(
        (line) =>
          typeof line?.key === "string" &&
          typeof line?.name === "string" &&
          typeof line?.price === "number" &&
          typeof line?.qty === "number",
      );
    } catch {
      return [];
    }
  });
  const [venue, setVenue] = useState<VenueId>("cafe");
  const [cartOpen, setCartOpen] = useState(false);
  const [toast, setToast] = useState<string | null>(null);
  const toastTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    safeSet(STORAGE.cart, JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    document.documentElement.style.overflow = cartOpen ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [cartOpen]);

  useEffect(
    () => () => {
      if (toastTimer.current) clearTimeout(toastTimer.current);
    },
    [],
  );

  const showToast = useCallback((message: string) => {
    setToast(message);
    if (toastTimer.current) clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToast(null), 3600);
  }, []);

  const addLine = useCallback((input: AddLineInput) => {
    const key = `${input.itemId}::${input.variant ?? ""}`;
    const qty = input.qty ?? 1;
    setCart((current) => {
      const existing = current.find((line) => line.key === key);
      if (existing) {
        return current.map((line) =>
          line.key === key ? { ...line, qty: line.qty + qty } : line,
        );
      }
      return [...current, { ...input, key, qty }];
    });
  }, []);

  const addItem = useCallback(
    (item: EnrichedItem, variant?: { label: string; price: number }) => {
      const price = variant?.price ?? item.price ?? item.variants?.[0]?.price ?? 0;
      addLine({
        itemId: item.id,
        name: item.name,
        venueId: item.venueId,
        venueName: item.venueName,
        price,
        variant: variant?.label,
      });
    },
    [addLine],
  );

  const removeLine = useCallback((key: string) => {
    setCart((current) => current.filter((line) => line.key !== key));
  }, []);

  const setQty = useCallback((key: string, qty: number) => {
    setCart((current) =>
      qty <= 0
        ? current.filter((line) => line.key !== key)
        : current.map((line) => (line.key === key ? { ...line, qty } : line)),
    );
  }, []);

  const clearCart = useCallback(() => setCart([]), []);

  const siteUrl = getDefaultSiteUrl();
  const menuUrl = siteUrl;
  // Orders from the public storefront always use the fixed business number.
  const digits = cleanNumber(DEFAULT_WHATSAPP);

  const waLink = useCallback(
    (message: string) =>
      `https://wa.me/${digits}?text=${encodeURIComponent(message)}`,
    [digits],
  );

  const cartCount = useMemo(
    () => cart.reduce((total, line) => total + line.qty, 0),
    [cart],
  );
  const subtotal = useMemo(
    () => cart.reduce((total, line) => total + line.price * line.qty, 0),
    [cart],
  );

  const value = useMemo<Store>(
    () => ({
      cart,
      cartCount,
      subtotal,
      addLine,
      addItem,
      removeLine,
      setQty,
      clearCart,
      deliveryFee: 40,
      venue,
      setVenue,
      cartOpen,
      setCartOpen,
      digits,
      menuUrl,
      siteUrl,
      waLink,
      showToast,
      toast,
      formattedPhone: formatPhone(digits),
    }),
    [
      cart,
      cartCount,
      subtotal,
      addLine,
      addItem,
      removeLine,
      setQty,
      clearCart,
      venue,
      cartOpen,
      digits,
      menuUrl,
      siteUrl,
      waLink,
      showToast,
      toast,
    ],
  );

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
}

export function useStore(): Store {
  const context = useContext(StoreContext);
  if (!context) throw new Error("useStore must be used inside StoreProvider");
  return context;
}
