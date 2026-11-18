import { useRef, useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import { useStore } from "../store";
import { Ornament, RanchoSofiaLogo, SectionTitle } from "./Brand";
import {
  ArrowRightIcon,
  ArrowUpRightIcon,
  BagIcon,
  CopyIcon,
  DownloadIcon,
  QrIcon,
  ShareIcon,
  SparkleIcon,
} from "./Icons";

type QrTab = "menu" | "chat";

const CHAT_MESSAGE =
  "¡Hola! Vengo desde la carta digital de Rancho Sofía y La Crêpe. Quisiera hacer un pedido.";

export function QRSection() {
  const {
    menuUrl,
    waLink,
    formattedPhone,
    setCartOpen,
    showToast,
    cartCount,
  } = useStore();
  const [tab, setTab] = useState<QrTab>("menu");
  const qrWrapRef = useRef<HTMLDivElement>(null);

  const chatLink = waLink(CHAT_MESSAGE);
  const activeLink = tab === "menu" ? menuUrl : chatLink;
  const activeTitle = tab === "menu" ? "Menú digital" : "Chat directo";
  const activeCaption =
    tab === "menu"
      ? "Escanea para ver toda la carta"
      : "Escanea y escríbenos por WhatsApp";

  const getQrSvg = (): SVGSVGElement | null => {
    const svg = qrWrapRef.current?.querySelector("svg");
    return svg ? (svg as SVGSVGElement) : null;
  };

  const downloadQr = () => {
    const svg = getQrSvg();
    if (!svg) {
      showToast("No pudimos preparar el QR. Intenta de nuevo.");
      return;
    }

    const clone = svg.cloneNode(true) as SVGSVGElement;
    clone.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    const width = Number(svg.getAttribute("width")) || 220;
    clone.setAttribute("width", String(width));
    clone.setAttribute("height", String(width));

    const svgString = new XMLSerializer().serializeToString(clone);
    const blob = new Blob([svgString], { type: "image/svg+xml;charset=utf-8" });
    const objectUrl = URL.createObjectURL(blob);
    const image = new Image();

    image.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = 1080;
      canvas.height = 1350;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      ctx.fillStyle = "#f7f1e6";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.strokeStyle = "#c9a96e";
      ctx.lineWidth = 3;
      ctx.strokeRect(42, 42, canvas.width - 84, canvas.height - 84);
      ctx.strokeStyle = "rgba(201,169,110,0.4)";
      ctx.lineWidth = 1;
      ctx.strokeRect(58, 58, canvas.width - 116, canvas.height - 116);

      ctx.textAlign = "center";
      ctx.fillStyle = "#a5864e";
      ctx.font = "600 22px Georgia, serif";
      ctx.fillText("CAFÉ  ·  CREPERÍA", 540, 140);

      ctx.fillStyle = "#17140f";
      ctx.font = "600 62px Georgia, serif";
      ctx.fillText("Rancho Sofía", 540, 215);

      ctx.fillStyle = "#a92f62";
      ctx.font = "italic 34px Georgia, serif";
      ctx.fillText("La Crêpe", 540, 262);

      const qrSize = 700;
      ctx.drawImage(image, (1080 - qrSize) / 2, 318, qrSize, qrSize);

      ctx.fillStyle = "#17140f";
      ctx.font = "600 34px Georgia, serif";
      ctx.fillText(activeCaption, 540, 1118);

      ctx.fillStyle = "#8a7a63";
      ctx.font = "400 22px Arial, sans-serif";
      ctx.fillText("CAFÉ DE ESPECIALIDAD · CREPAS HECHAS A MANO", 540, 1168);

      ctx.strokeStyle = "rgba(169,134,78,0.45)";
      ctx.beginPath();
      ctx.moveTo(330, 1210);
      ctx.lineTo(750, 1210);
      ctx.stroke();

      ctx.fillStyle = "#a5864e";
      ctx.font = "400 21px Arial, sans-serif";
      ctx.fillText("Pedidos por WhatsApp · Precios en Lempiras", 540, 1258);

      canvas.toBlob((pngBlob) => {
        if (!pngBlob) return;
        const pngUrl = URL.createObjectURL(pngBlob);
        const anchor = document.createElement("a");
        anchor.href = pngUrl;
        anchor.download = `rancho-sofia-qr-${tab}.png`;
        document.body.appendChild(anchor);
        anchor.click();
        anchor.remove();
        URL.revokeObjectURL(pngUrl);
        showToast("Tu QR está listo para imprimir");
      }, "image/png");
      URL.revokeObjectURL(objectUrl);
    };

    image.onerror = () => {
      URL.revokeObjectURL(objectUrl);
      showToast("No pudimos descargar el QR. Intenta de nuevo.");
    };

    image.src = objectUrl;
  };

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(activeLink);
      showToast("Enlace copiado al portapapeles");
    } catch {
      showToast("Selecciona el enlace del QR y cópialo manualmente.");
    }
  };

  const share = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Café Rancho Sofía & La Crêpe",
          text: "Nuestra carta digital y pedidos por WhatsApp",
          url: activeLink,
        });
        return;
      } catch {
        return;
      }
    }
    await copyLink();
  };

  return (
    <section id="qr" className="relative scroll-mt-20 overflow-hidden bg-ink py-20 lg:py-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-10 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(201,169,110,0.12),transparent_70%)]" />
        <div className="absolute -right-24 bottom-0 h-[480px] w-[480px] rounded-full bg-[radial-gradient(circle,rgba(236,111,166,0.09),transparent_70%)]" />
        <div className="absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-[1360px] px-5 sm:px-6 lg:px-10">
        <div className="grid items-start gap-14 lg:grid-cols-[1fr_430px] lg:gap-20">
          <div>
            <SectionTitle
              kicker="Escanea · comparte · pide"
              tone="light"
              title={
                <>
                  Tu carta,{" "}
                  <span className="gold-gradient-text italic">a un escaneo.</span>
                </>
              }
              description="Pon el QR en tu mesa, compártelo en tus estados o envíalo por WhatsApp. Quien lo escanee verá la carta completa y podrá armar su pedido en segundos."
            />

            <ol className="mt-9 space-y-5">
              {[
                {
                  title: "Apunta con la cámara",
                  text: "No hace falta descargar nada. El QR abre la carta digital en el navegador.",
                },
                {
                  title: "Elige tus favoritos",
                  text: "Explora el café de Rancho Sofía, las crepas de La Crêpe y Repostería Bikery.",
                },
                {
                  title: "Envía tu pedido",
                  text: "Tu selección se convierte en un mensaje ordenado que llega directo a nuestro WhatsApp.",
                },
              ].map((step, index) => (
                <li key={step.title} className="flex gap-4">
                  <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-full border border-gold/35 bg-gold/[0.06] font-sans text-[10px] font-medium tracking-[0.1em] text-gold">
                    0{index + 1}
                  </span>
                  <div>
                    <h3 className="font-display text-[1.25rem] leading-none text-cream">
                      {step.title}
                    </h3>
                    <p className="mt-1.5 max-w-sm text-[12.5px] font-light leading-relaxed text-cream/55">
                      {step.text}
                    </p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="mt-9 rounded-[22px] border border-gold/20 bg-[linear-gradient(135deg,rgba(201,169,110,0.09),rgba(255,255,255,0.015))] p-5 sm:p-6">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="flex items-center gap-2 font-sans text-[9px] font-medium uppercase tracking-[0.2em] text-emerald-300/90">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                  </span>
                  WhatsApp oficial
                </span>
              </div>
              <p className="mt-3 font-display text-[1.85rem] leading-none text-cream">
                {formattedPhone}
              </p>
              <p className="mt-2 max-w-md text-[12px] font-light leading-relaxed text-cream/50">
                Todos los pedidos se envían a este número oficial. Está fijo en la página
                y no se puede editar desde el sitio público.
              </p>
              <div className="mt-4 flex flex-wrap gap-2.5">
                <a
                  href={chatLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-cream/20 px-4 py-2.5 font-sans text-[9.5px] uppercase tracking-[0.14em] text-cream/75 transition-colors hover:border-gold/60 hover:text-gold"
                >
                  Escribir por WhatsApp
                  <ArrowUpRightIcon className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-cream/40">
              <span className="flex items-center gap-2 font-sans text-[9.5px] uppercase tracking-[0.14em]">
                <SparkleIcon className="h-3 w-3 text-gold/60" />
                Listo para imprimir
              </span>
              <span className="flex items-center gap-2 font-sans text-[9.5px] uppercase tracking-[0.14em]">
                <ShareIcon className="h-3.5 w-3.5 text-gold/60" />
                Compártelo en tus redes
              </span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[400px]">
            <div className="pointer-events-none absolute -inset-6 rounded-[38px] bg-[radial-gradient(circle_at_50%_30%,rgba(201,169,110,0.22),transparent_70%)] blur-xl" />
            <span className="absolute -top-3 left-1/2 z-20 h-6 w-24 -translate-x-1/2 rounded-sm bg-gold/25 backdrop-blur-sm" aria-hidden="true" />

            <div className="relative rounded-[26px] border border-gold/25 bg-cream px-6 pb-6 pt-7 text-ink shadow-[0_40px_90px_-30px_rgba(0,0,0,0.9)]">
              <div className="flex flex-col items-center text-center">
                <RanchoSofiaLogo size={92} />
                <p className="mt-2.5 font-sans text-[8.5px] font-medium uppercase tracking-[0.3em] text-ink/45">
                  Café · Crepería
                </p>
                <p className="mt-1.5 font-script text-[22px] leading-none text-pink-deep">
                  La Crêpe
                </p>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-1 rounded-full border border-ink/10 bg-cream-2 p-1">
                <button
                  type="button"
                  onClick={() => setTab("menu")}
                  className={`rounded-full px-3 py-2 font-sans text-[9.5px] font-medium uppercase tracking-[0.12em] transition-colors ${
                    tab === "menu" ? "bg-ink text-cream" : "text-ink/50 hover:text-ink"
                  }`}
                >
                  Carta digital
                </button>
                <button
                  type="button"
                  onClick={() => setTab("chat")}
                  className={`rounded-full px-3 py-2 font-sans text-[9.5px] font-medium uppercase tracking-[0.12em] transition-colors ${
                    tab === "chat" ? "bg-ink text-cream" : "text-ink/50 hover:text-ink"
                  }`}
                >
                  Chat directo
                </button>
              </div>

              <div className="relative mt-4">
                <div
                  ref={qrWrapRef}
                  className="relative mx-auto grid w-full place-items-center rounded-2xl border border-ink/10 bg-cream-2 p-4"
                >
                  <QRCodeSVG
                    key={`${tab}-${activeLink}`}
                    value={activeLink}
                    size={214}
                    level="H"
                    marginSize={0}
                    bgColor="#fbf7ef"
                    fgColor="#191510"
                    title={`Código QR de ${activeTitle} de Café Rancho Sofía`}
                    className="h-auto w-full max-w-[214px]"
                  />
                  <span className="pointer-events-none absolute left-1/2 top-1/2 grid h-10 w-10 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border-2 border-cream bg-ink shadow-md">
                    <span className="font-display text-[13px] font-semibold text-gold">
                      RS
                    </span>
                  </span>
                  <span className="absolute left-2 top-2 h-4 w-4 rounded-tl-md border-l border-t border-gold/70" aria-hidden="true" />
                  <span className="absolute right-2 top-2 h-4 w-4 rounded-tr-md border-r border-t border-gold/70" aria-hidden="true" />
                  <span className="absolute bottom-2 left-2 h-4 w-4 rounded-bl-md border-b border-l border-gold/70" aria-hidden="true" />
                  <span className="absolute bottom-2 right-2 h-4 w-4 rounded-br-md border-b border-r border-gold/70" aria-hidden="true" />
                </div>
              </div>

              <div className="mt-4 text-center">
                <p className="font-sans text-[9px] font-semibold uppercase tracking-[0.28em] text-gold-deep">
                  {tab === "menu" ? "Escanéame" : "Escríbenos"}
                </p>
                <p className="mt-1.5 font-display text-[1.2rem] leading-tight text-ink">
                  {activeCaption}
                </p>
                <p className="mx-auto mt-1 max-w-[250px] truncate font-sans text-[9px] tracking-[0.04em] text-ink/40">
                  {activeLink.replace(/^https?:\/\//, "")}
                </p>
              </div>

              <div className="my-4 flex items-center gap-3" aria-hidden="true">
                <span className="h-px flex-1 border-t border-dashed border-ink/20" />
                <QrIcon className="h-4 w-4 text-gold-deep" />
                <span className="h-px flex-1 border-t border-dashed border-ink/20" />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={downloadQr}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-3 py-3 font-sans text-[9px] font-medium uppercase tracking-[0.12em] text-cream transition-colors hover:bg-coal"
                >
                  <DownloadIcon className="h-3.5 w-3.5" />
                  Descargar
                </button>
                <button
                  type="button"
                  onClick={copyLink}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-ink/20 px-3 py-3 font-sans text-[9px] font-medium uppercase tracking-[0.12em] text-ink/70 transition-colors hover:border-ink hover:text-ink"
                >
                  <CopyIcon className="h-3.5 w-3.5" />
                  Copiar
                </button>
              </div>
              <button
                type="button"
                onClick={share}
                className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink/[0.04] px-3 py-2.5 font-sans text-[9px] uppercase tracking-[0.12em] text-ink/50 transition-colors hover:bg-ink/[0.08] hover:text-ink/70"
              >
                <ShareIcon className="h-3.5 w-3.5" />
                Compartir con amigos
              </button>
            </div>

            <p className="mt-4 text-center font-sans text-[9px] uppercase tracking-[0.16em] text-cream/35">
              Imprímelo o compártelo digitalmente
            </p>

            <button
              type="button"
              onClick={() => setCartOpen(true)}
              className="mx-auto mt-6 flex items-center gap-2 font-sans text-[10px] uppercase tracking-[0.16em] text-gold/80 transition-colors hover:text-gold lg:hidden"
            >
              <BagIcon className="h-4 w-4" />
              {cartCount > 0 ? `Ver mi pedido (${cartCount})` : "Armar mi pedido"}
              <ArrowRightIcon className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>

        <div className="mt-16 flex items-center justify-center lg:mt-20">
          <Ornament />
        </div>
      </div>
    </section>
  );
}
