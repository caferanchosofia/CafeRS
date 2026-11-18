import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

function Base({ children, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

export function WhatsAppIcon({ className, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
      {...props}
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export function BagIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M6 8h12l1.2 12.2a1 1 0 0 1-1 1.1H5.8a1 1 0 0 1-1-1.1L6 8Z" />
      <path d="M9 8V6a3 3 0 0 1 6 0v2" />
    </Base>
  );
}

export function SearchIcon(props: IconProps) {
  return (
    <Base {...props}>
      <circle cx="11" cy="11" r="6.5" />
      <path d="m16 16 4.5 4.5" />
    </Base>
  );
}

export function PlusIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M12 5v14M5 12h14" />
    </Base>
  );
}

export function MinusIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M5 12h14" />
    </Base>
  );
}

export function XIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M18 6 6 18M6 6l12 12" />
    </Base>
  );
}

export function TrashIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M4 7h16M10 11v6M14 11v6M6 7l1 13h10l1-13M9 7V4h6v3" />
    </Base>
  );
}

export function QrIcon(props: IconProps) {
  return (
    <Base {...props}>
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <path d="M14 14h3v3h-3zM20 14v.01M14 20h.01M17 17h4v4h-4z" />
    </Base>
  );
}

export function DownloadIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M12 3v12m0 0 4.5-4.5M12 15l-4.5-4.5M4 17v3h16v-3" />
    </Base>
  );
}

export function ShareIcon(props: IconProps) {
  return (
    <Base {...props}>
      <circle cx="18" cy="5" r="3" />
      <circle cx="6" cy="12" r="3" />
      <circle cx="18" cy="19" r="3" />
      <path d="m8.6 10.5 6.8-4M8.6 13.5l6.8 4" />
    </Base>
  );
}

export function CopyIcon(props: IconProps) {
  return (
    <Base {...props}>
      <rect x="8" y="8" width="12" height="12" rx="2" />
      <path d="M16 8V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h3" />
    </Base>
  );
}

export function MapPinIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </Base>
  );
}

export function ClockIcon(props: IconProps) {
  return (
    <Base {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </Base>
  );
}

export function PhoneIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M5 3h3l2 5-2.5 1.5a13 13 0 0 0 6 6L15 13l5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1 2-2Z" />
    </Base>
  );
}

export function InstagramIcon(props: IconProps) {
  return (
    <Base {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <path d="M17.5 6.5h.01" />
    </Base>
  );
}

export function FacebookIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M16.5 3.5h-2.4A3.6 3.6 0 0 0 10.5 7.1V10H8.2v3.2h2.3V21h3.3v-7.8h2.5l.5-3.2h-3V7.4c0-.7.5-1.2 1.2-1.2h1.5V3.5Z" />
    </Base>
  );
}

export function TikTokIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M14.2 3.2c.4 2.4 1.9 4.1 4.3 4.5v3c-1.46.03-2.8-.4-4.3-1.2v6.3A5.15 5.15 0 1 1 9 10.7v3.15a2.1 2.1 0 1 0 2.15 2.1V3.2h3.05Z" />
    </Base>
  );
}

export function StarIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="m12 2 2.9 6.3 6.9.8-5.1 4.7 1.4 6.8-6.1-3.5-6.1 3.5 1.4-6.8L2.2 9.1l6.9-.8L12 2Z" />
    </svg>
  );
}

export function ArrowRightIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M4 12h16m0 0-6-6m6 6-6 6" />
    </Base>
  );
}

export function ArrowUpRightIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M7 17 17 7M8 7h9v9" />
    </Base>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="m5 12 5 5L20 6" />
    </Base>
  );
}

export function CoffeeIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M4 8h13v7a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5V8Z" />
      <path d="M17 9h2.5a2.5 2.5 0 0 1 0 5H17M6 3v2M10 3v2M14 3v2" />
    </Base>
  );
}

export function CupIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M6 8h12l-1.4 12.2a1 1 0 0 1-1 .8H8.4a1 1 0 0 1-1-.8L6 8Z" />
      <path d="m13 3-4 5h6l-1.5 3" />
    </Base>
  );
}

export function LeafIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M20 4c-8 0-16 3-16 10a6 6 0 0 0 6 6c7 0 10-8 10-16Z" />
      <path d="M4 21C6 14 10 10 16 7" />
    </Base>
  );
}

export function CrepeIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M3.5 8.5c0-2.1 3.8-3.6 8.5-3.6s8.5 1.5 8.5 3.6c0 2.6-3.2 7.7-7.2 12.1a1.8 1.8 0 0 1-2.6 0C6.7 16.2 3.5 11.1 3.5 8.5Z" />
      <path d="M6.2 9.3c1.9 1.5 3.9-1 5.8 0s3.9 1.2 5.8-.3" />
      <path d="M8.6 5.4c1.1.5 2.3.5 3.4 0s2.3-.5 3.4 0" opacity="0.6" />
    </Base>
  );
}

export function CakeIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M4 13h16v7H4zM4 13c1.6 1.4 3.2 1.4 4.8 0s3.2-1.4 4.8 0 3.2 1.4 4.8 0M12 13V9" />
      <path d="M12 5.5c.9-.9.9-2 0-2.5-.9.5-.9 1.6 0 2.5Z" />
    </Base>
  );
}

export function BikeIcon(props: IconProps) {
  return (
    <Base {...props}>
      <circle cx="6.2" cy="16.4" r="3.1" />
      <circle cx="17.6" cy="16.4" r="3.1" />
      <path d="M6.2 16.4 10.2 8.6h4.6M10.4 8.8l2.8 7.6M13.6 16.4 17.6 10.2H21M17.6 10.2 14.8 8.6" />
    </Base>
  );
}

export function SandwichIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M3 11 12 4l9 7-9 7-9-7Z" />
      <path d="M3 15.5 12 20l9-4.5" />
    </Base>
  );
}

export function MenuIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </Base>
  );
}

export function PencilIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="m15.5 4.5 4 4L8 20H4v-4L15.5 4.5Z" />
      <path d="m13 7 4 4" />
    </Base>
  );
}

export function SparkleIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 2c.6 5.4 4.6 9.4 10 10-5.4.6-9.4 4.6-10 10-.6-5.4-4.6-9.4-10-10 5.4-.6 9.4-4.6 10-10Z" />
    </svg>
  );
}

export function HeartIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M20.4 5.6a5 5 0 0 0-7.1 0L12 6.9l-1.3-1.3a5 5 0 1 0-7.1 7.1l1.4 1.4L12 21l7-7 1.4-1.3a5 5 0 0 0 0-7.1Z" />
    </Base>
  );
}

export function GlassIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M6 4h12l-1.5 15.2a1 1 0 0 1-1 .8h-7a1 1 0 0 1-1-.8L6 4Z" />
      <path d="M7 10h10M12 8v6" />
    </Base>
  );
}

export function BobaIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M6 6h12l-1.4 14.1a1 1 0 0 1-1 .9H8.4a1 1 0 0 1-1-.9L6 6Z" />
      <path d="m9 3 1.5 3M15 3l-1.5 3" />
      <circle cx="10" cy="17" r="1" fill="currentColor" stroke="none" />
      <circle cx="14" cy="18" r="1" fill="currentColor" stroke="none" />
      <circle cx="13" cy="15" r="1" fill="currentColor" stroke="none" />
      <path d="M7 10h10" />
    </Base>
  );
}
