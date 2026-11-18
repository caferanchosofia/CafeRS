import type { ReactNode } from "react";

export const CAFE_LOGO_URL = "https://i.ibb.co/5WdjJKxs/coffe.webp";
export const CREPE_LOGO_URL = "https://i.ibb.co/TDTqdPSr/cafee.webp";
export const BIKERY_LOGO_URL = "/ranchos-bikery-logo.jpg";

export function Laurel({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 34"
      fill="none"
      aria-hidden="true"
      className={className}
      stroke="currentColor"
      strokeWidth="0.9"
      strokeLinecap="round"
    >
      <path d="M4 26C22 24 38 17 49 3" opacity="0.6" />
      <path d="M116 26C98 24 82 17 71 3" opacity="0.6" />
      {[
        [10, 25, -32],
        [16, 20, -42],
        [24, 16, -50],
        [33, 12, -58],
        [42, 7, -66],
      ].map(([x, y, r], index) => (
        <ellipse
          key={`l-${index}`}
          cx={x}
          cy={y}
          rx="4.6"
          ry="1.8"
          transform={`rotate(${r} ${x} ${y})`}
          fill="currentColor"
          fillOpacity="0.35"
        />
      ))}
      {[
        [110, 25, 32],
        [104, 20, 42],
        [96, 16, 50],
        [87, 12, 58],
        [78, 7, 66],
      ].map(([x, y, r], index) => (
        <ellipse
          key={`r-${index}`}
          cx={x}
          cy={y}
          rx="4.6"
          ry="1.8"
          transform={`rotate(${r} ${x} ${y})`}
          fill="currentColor"
          fillOpacity="0.35"
        />
      ))}
      <path d="M60 4v6" opacity="0.5" />
    </svg>
  );
}

export function RanchoSofiaLogo({
  size = 120,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <span
      className={`inline-block shrink-0 overflow-hidden rounded-full ${className}`}
      style={{ width: size, height: size }}
      role="img"
      aria-label="Logotipo de Café Rancho Sofía"
    >
      <img
        src={CAFE_LOGO_URL}
        alt=""
        draggable={false}
        className="h-full w-full scale-[1.14] object-cover"
      />
    </span>
  );
}

export function LaCrepeLogo({
  size = 120,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <span
      className={`inline-block shrink-0 overflow-hidden rounded-full ${className}`}
      style={{ width: size, height: size }}
      role="img"
      aria-label="Logotipo de La Crêpe, dulce capricho"
    >
      <img
        src={CREPE_LOGO_URL}
        alt=""
        draggable={false}
        className="h-full w-full object-cover"
      />
    </span>
  );
}

export function BikeryLogo({
  size = 120,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <span
      className={`inline-block shrink-0 overflow-hidden rounded-full bg-[#f6ddd3] ${className}`}
      style={{ width: size, height: size }}
      role="img"
      aria-label="Logotipo de Repostería Bikery, arte dulce sobre ruedas"
    >
      <img
        src={BIKERY_LOGO_URL}
        alt=""
        draggable={false}
        className="h-full w-full object-cover"
      />
    </span>
  );
}

export function Monogram({
  size = 52,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <span
      className={`relative inline-grid shrink-0 place-items-center rounded-full border border-gold/55 bg-[radial-gradient(circle_at_32%_22%,#3b3225_0%,#221c15_42%,#12100e_100%)] shadow-[inset_0_1px_1px_rgba(230,214,180,0.25),0_6px_18px_-8px_rgba(0,0,0,0.9)] ${className}`}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <span className="absolute inset-[3px] rounded-full border border-gold/20" />
      <span className="flex flex-col items-center leading-none">
        <span
          className="font-sans font-medium tracking-[0.3em] text-gold/80"
          style={{ fontSize: Math.max(5, size * 0.11), marginBottom: size * 0.04 }}
        >
          CAFÉ
        </span>
        <span
          className="gold-gradient-text font-display font-semibold leading-[0.85]"
          style={{ fontSize: size * 0.38, letterSpacing: "0.01em" }}
        >
          RS
        </span>
        <span
          className="mt-[2px] text-gold/70"
          style={{ fontSize: Math.max(5, size * 0.12), lineHeight: 1 }}
        >
          ✦
        </span>
      </span>
    </span>
  );
}

export function Wordmark({
  compact = false,
  className = "",
  onClick,
}: {
  compact?: boolean;
  className?: string;
  onClick?: () => void;
}) {
  const content = (
    <>
      <RanchoSofiaLogo
        size={compact ? 46 : 56}
        className="ring-1 ring-gold/25 shadow-[0_8px_20px_-10px_rgba(0,0,0,0.9)]"
      />
      <span className="flex flex-col leading-none">
        <span className="font-sans text-[8.5px] font-medium uppercase tracking-[0.36em] text-gold/80">
          Café · Crepería · Repostería
        </span>
        <span
          className={`mt-1.5 font-display font-medium tracking-[0.015em] text-cream ${
            compact ? "text-[21px]" : "text-[25px]"
          }`}
        >
          Rancho Sofía
        </span>
        <span className="mt-1.5 flex items-center gap-1.5 font-sans text-[7.5px] uppercase tracking-[0.28em] text-cream/45">
          <span className="h-px w-3 bg-gold/50" />
          La Crêpe
          <span className="h-px w-3 bg-pink/50" />
          Repostería Bikery
          <span className="h-px w-3 bg-mint/50" />
        </span>
      </span>
    </>
  );

  if (onClick) {
    return (
      <button
        type="button"
        onClick={onClick}
        className={`flex items-center gap-3 text-left ${className}`}
        aria-label="Café Rancho Sofía, La Crêpe y Repostería Bikery, ir al inicio"
      >
        {content}
      </button>
    );
  }

  return <div className={`flex items-center gap-3 ${className}`}>{content}</div>;
}

export function Ornament({
  className = "",
  tone = "gold",
}: {
  className?: string;
  tone?: "gold" | "pink" | "dark";
}) {
  const color =
    tone === "pink" ? "text-pink" : tone === "dark" ? "text-ink/35" : "text-gold";
  return (
    <span className={`inline-flex items-center gap-2.5 ${color} ${className}`} aria-hidden="true">
      <span className="h-px w-8 bg-current opacity-50" />
      <svg viewBox="0 0 12 12" className="h-2.5 w-2.5" fill="none" stroke="currentColor">
        <path d="M6 0.8 11.2 6 6 11.2 0.8 6 6 0.8Z" strokeWidth="1" />
        <path d="M6 3.4 8.6 6 6 8.6 3.4 6 6 3.4Z" fill="currentColor" stroke="none" opacity="0.7" />
      </svg>
      <span className="h-px w-8 bg-current opacity-50" />
    </span>
  );
}

export function SectionTitle({
  kicker,
  title,
  description,
  tone = "dark",
  align = "left",
  className = "",
}: {
  kicker: string;
  title: ReactNode;
  description?: ReactNode;
  tone?: "light" | "dark";
  align?: "left" | "center";
  className?: string;
}) {
  const isLight = tone === "light";
  return (
    <div
      className={`${align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"} ${className}`}
    >
      <div className={align === "center" ? "flex justify-center" : ""}>
        <p
          className={`eyebrow mb-4 flex items-center gap-3 ${
            isLight ? "text-gold-light/90" : "text-gold-deep"
          }`}
        >
          <span className={`h-px w-6 ${isLight ? "bg-gold/60" : "bg-gold-deep/60"}`} />
          {kicker}
        </p>
      </div>
      <h2
        className={`text-balance text-[2.15rem] leading-[1.03] sm:text-[2.9rem] lg:text-[3.35rem] ${
          isLight ? "text-cream" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-5 max-w-xl text-[0.95rem] leading-relaxed ${
            align === "center" ? "mx-auto" : ""
          } ${isLight ? "text-cream/65" : "text-ink/60"}`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
