import { CONTACT } from "../data/menu";
import { FacebookIcon, InstagramIcon, TikTokIcon } from "./Icons";

const NETWORKS = [
  {
    id: "instagram",
    label: "Instagram",
    href: CONTACT.instagram,
    Icon: InstagramIcon,
    hoverLight: "hover:border-pink/55 hover:text-pink",
    hoverDark: "hover:border-pink-deep/40 hover:text-pink-deep",
  },
  {
    id: "facebook",
    label: "Facebook",
    href: CONTACT.facebook,
    Icon: FacebookIcon,
    hoverLight: "hover:border-gold/60 hover:text-gold",
    hoverDark: "hover:border-gold-deep/50 hover:text-gold-deep",
  },
  {
    id: "tiktok",
    label: "TikTok",
    href: CONTACT.tiktok,
    Icon: TikTokIcon,
    hoverLight: "hover:border-cream/55 hover:text-cream",
    hoverDark: "hover:border-ink/40 hover:text-ink",
  },
] as const;

export function SocialFollow({
  tone = "light",
  labeled = false,
  className = "",
}: {
  tone?: "light" | "dark";
  labeled?: boolean;
  className?: string;
}) {
  const isLight = tone === "light";

  return (
    <div className={className}>
      <p
        className={`eyebrow text-[8.5px] ${isLight ? "text-gold/70" : "text-gold-deep"}`}
      >
        Síguenos
      </p>
      <div className={`mt-3 flex flex-wrap items-center ${labeled ? "gap-2.5" : "gap-2"}`}>
        {NETWORKS.map((network) => {
          const Icon = network.Icon;
          if (labeled) {
            return (
              <a
                key={network.id}
                href={network.href}
                target="_blank"
                rel="noreferrer"
                aria-label={`${network.label} de Café Rancho Sofía`}
                className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-2.5 font-sans text-[9.5px] font-medium uppercase tracking-[0.14em] transition-colors ${
                  isLight
                    ? `border-cream/20 text-cream/70 ${network.hoverLight}`
                    : `border-ink/15 text-ink/65 ${network.hoverDark}`
                }`}
              >
                <Icon className="h-4 w-4" />
                {network.label}
              </a>
            );
          }

          return (
            <a
              key={network.id}
              href={network.href}
              target="_blank"
              rel="noreferrer"
              aria-label={`${network.label} de Café Rancho Sofía`}
              className={`grid h-10 w-10 place-items-center rounded-full border transition-colors ${
                isLight
                  ? `border-cream/15 text-cream/60 ${network.hoverLight}`
                  : `border-ink/15 text-ink/55 ${network.hoverDark}`
              }`}
            >
              <Icon className="h-4 w-4" />
            </a>
          );
        })}
      </div>
    </div>
  );
}
