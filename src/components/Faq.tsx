import { useState } from "react";
import { useStore } from "../store";
import { Ornament, SectionTitle } from "./Brand";
import { ArrowUpRightIcon, MinusIcon, PlusIcon, WhatsAppIcon } from "./Icons";

const FAQS = [
  {
    q: "¿Cómo funciona el pedido por WhatsApp?",
    a: "Elige tus productos, abre «Mi pedido», completa tu nombre y método de entrega. Al enviar, se abre WhatsApp con el resumen ya escrito. Solo tienes que pulsar enviar y nosotros confirmamos disponibilidad y tiempo de preparación.",
  },
  {
    q: "¿Puedo usar el QR en la mesa del local?",
    a: "Sí. Descarga el QR desde esta página, imprímelo en tamaño tarjeta o mesa y colócalo donde tus clientes lo vean. También puedes compartir el enlace directamente por estados, historias o chat.",
  },
  {
    q: "¿A qué número llegan los pedidos de WhatsApp?",
    a: "Todos los pedidos llegan al número oficial de Café Rancho Sofía: +504 9975-3442. El número está fijo y no se puede editar desde la página pública.",
  },
  {
    q: "¿Hacen delivery?",
    a: "Sí, contamos con delivery en zonas cercanas con un costo de L.40. Al finalizar tu pedido puedes elegir «Delivery» y escribir tu dirección. También puedes recoger en el local sin costo adicional.",
  },
  {
    q: "¿Puedo pedir ajustes o preguntar por alergias?",
    a: "Escríbenos por WhatsApp antes de ordenar y con gusto revisamos los ingredientes contigo. En el campo de notas del pedido también puedes indicar preferencias como menos azúcar, sin hielo o sin algún ingrediente.",
  },
];

export function Faq() {
  const { waLink } = useStore();
  const [open, setOpen] = useState(0);
  const direct = waLink("¡Hola! Tengo una pregunta sobre la carta y los pedidos.");

  return (
    <section className="relative overflow-hidden bg-cream-2 py-16 lg:py-24">
      <div className="mx-auto max-w-[1360px] px-5 sm:px-6 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:gap-20">
          <div className="lg:sticky lg:top-[128px] lg:self-start">
            <SectionTitle
              kicker="Antes de pedir"
              title={
                <>
                  Preguntas
                  <br />
                  <span className="italic text-gold-deep">frecuentes.</span>
                </>
              }
              description="Todo lo que necesitas saber sobre la carta, el QR y los pedidos por WhatsApp."
            />
            <a
              href={direct}
              target="_blank"
              rel="noreferrer"
              className="mt-7 inline-flex items-center gap-2.5 rounded-full border border-ink/20 px-5 py-3.5 font-sans text-[10px] font-medium uppercase tracking-[0.14em] text-ink/70 transition-colors hover:border-ink hover:bg-ink hover:text-cream"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Preguntar por WhatsApp
              <ArrowUpRightIcon className="h-3.5 w-3.5" />
            </a>
            <Ornament tone="dark" className="mt-9 hidden lg:inline-flex" />
          </div>

          <div className="divide-y divide-ink/12 border-y border-ink/12">
            {FAQS.map((faq, index) => {
              const isOpen = open === index;
              return (
                <div key={faq.q}>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? -1 : index)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${index}`}
                    className="flex w-full items-center justify-between gap-5 py-5 text-left"
                  >
                    <span className="flex items-start gap-4">
                      <span className="mt-1 font-sans text-[9px] tracking-[0.14em] text-gold-deep/70">
                        0{index + 1}
                      </span>
                      <span
                        className={`font-display text-[1.22rem] leading-snug transition-colors sm:text-[1.38rem] ${
                          isOpen ? "text-ink" : "text-ink/70"
                        }`}
                      >
                        {faq.q}
                      </span>
                    </span>
                    <span
                      className={`grid h-7 w-7 shrink-0 place-items-center rounded-full border transition-colors ${
                        isOpen
                          ? "border-ink bg-ink text-cream"
                          : "border-ink/25 text-ink/50"
                      }`}
                    >
                      {isOpen ? (
                        <MinusIcon className="h-3.5 w-3.5" />
                      ) : (
                        <PlusIcon className="h-3.5 w-3.5" />
                      )}
                    </span>
                  </button>
                  <div
                    id={`faq-panel-${index}`}
                    className={`grid transition-all duration-300 ${
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="max-w-2xl pb-5 pl-8 pr-10 text-[12.5px] font-light leading-[1.85] text-ink/55">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
