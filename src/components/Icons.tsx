import type { SVGProps } from "react";
import type { AreaIcon } from "@/lib/areas";

type P = SVGProps<SVGSVGElement>;

const base = (props: P) => ({
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.4,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
  ...props,
});

export const ArrowRight = (p: P) => (
  <svg {...base(p)}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);
export const ArrowUpRight = (p: P) => (
  <svg {...base(p)}>
    <path d="M7 17 17 7M8 7h9v9" />
  </svg>
);
export const Phone = (p: P) => (
  <svg {...base(p)}>
    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2" />
  </svg>
);
export const Mail = (p: P) => (
  <svg {...base(p)}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </svg>
);
export const Pin = (p: P) => (
  <svg {...base(p)}>
    <path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21Z" />
    <circle cx="12" cy="9.5" r="2.5" />
  </svg>
);
export const Clock = (p: P) => (
  <svg {...base(p)}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
);
export const Check = (p: P) => (
  <svg {...base(p)}>
    <path d="m5 12.5 4.5 4.5L19 7.5" />
  </svg>
);
export const Plus = (p: P) => (
  <svg {...base(p)}>
    <path d="M12 5v14M5 12h14" />
  </svg>
);
export const Menu = (p: P) => (
  <svg {...base(p)}>
    <path d="M4 8h16M4 16h16" />
  </svg>
);
export const Close = (p: P) => (
  <svg {...base(p)}>
    <path d="M6 6l12 12M18 6 6 18" />
  </svg>
);
export const Monitor = (p: P) => (
  <svg {...base(p)}>
    <rect x="3" y="4" width="18" height="12" rx="2" />
    <path d="M8 20h8M12 16v4" />
  </svg>
);
export const Gift = (p: P) => (
  <svg {...base(p)}>
    <rect x="3.5" y="8" width="17" height="4" rx="1" />
    <path d="M5 12v8h14v-8M12 8v12M12 8S10.5 4 8.5 4a2 2 0 0 0 0 4M12 8s1.5-4 3.5-4a2 2 0 0 1 0 4" />
  </svg>
);

export const Instagram = (p: P) => (
  <svg {...base(p)}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
  </svg>
);

export const WhatsApp = (p: P) => (
  <svg viewBox="0 0 24 24" width={24} height={24} fill="currentColor" aria-hidden {...p}>
    <path d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01Zm-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.26 8.26 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23Zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.78.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.14-1.18-.06-.1-.22-.16-.47-.28Z" />
  </svg>
);

export const ReasonIcon = ({ name, ...p }: P & { name: string }) => {
  switch (name) {
    case "user":
      return (
        <svg {...base(p)}>
          <circle cx="12" cy="8" r="3.5" />
          <path d="M5 20a7 7 0 0 1 14 0" />
        </svg>
      );
    case "compass":
      return (
        <svg {...base(p)}>
          <circle cx="12" cy="12" r="9" />
          <path d="m15.5 8.5-2 5-5 2 2-5 5-2Z" />
        </svg>
      );
    case "lock":
      return (
        <svg {...base(p)}>
          <rect x="5" y="10.5" width="14" height="10" rx="2" />
          <path d="M8 10.5V8a4 4 0 0 1 8 0v2.5M12 14.5v2" />
        </svg>
      );
    case "shield":
      return (
        <svg {...base(p)}>
          <path d="M12 3 5 6v5c0 4.5 3 8.3 7 10 4-1.7 7-5.5 7-10V6l-7-3Z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      );
    case "chat":
      return (
        <svg {...base(p)}>
          <path d="M4 5h16v11H9l-5 4V5Z" />
          <path d="M8 9.5h8M8 12.5h5" />
        </svg>
      );
    default:
      return <Pin {...p} />;
  }
};

export const AreaGlyph = ({ name, ...p }: P & { name: AreaIcon }) => {
  switch (name) {
    case "familia":
      return (
        <svg {...base(p)}>
          <circle cx="8" cy="6.5" r="2.3" />
          <circle cx="16" cy="6.5" r="2.3" />
          <circle cx="12" cy="12.5" r="1.8" />
          <path d="M3.5 20v-4.5A4.5 4.5 0 0 1 8 11M20.5 20v-4.5A4.5 4.5 0 0 0 16 11M9 20v-1.5a3 3 0 0 1 6 0V20" />
        </svg>
      );
    case "civil":
      return (
        <svg {...base(p)}>
          <path d="M7 3h7l4 4v14H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z" />
          <path d="M14 3v4h4M9 11h6M9 14h6M9 17h4" />
        </svg>
      );
    case "laboral":
      return (
        <svg {...base(p)}>
          <rect x="3" y="7" width="18" height="13" rx="2" />
          <path d="M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2M3 12.5h18M11 12.5v2h2v-2" />
        </svg>
      );
    case "penal":
      return (
        <svg {...base(p)}>
          <path d="M12 3 5 6v5c0 4.5 3 8.3 7 10 4-1.7 7-5.5 7-10V6l-7-3Z" />
          <path d="M12 8v5M12 16v.01" />
        </svg>
      );
    case "transito":
      return (
        <svg {...base(p)}>
          <path d="M5 16V11l1.8-4.2A2 2 0 0 1 8.6 5.5h6.8a2 2 0 0 1 1.8 1.3L19 11v5" />
          <rect x="3.5" y="11" width="17" height="5.5" rx="1.5" />
          <path d="M6 16.5V19M18 16.5V19M7 13.75h1.5M15.5 13.75H17" />
        </svg>
      );
    case "migratorio":
      return (
        <svg {...base(p)}>
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18M12 3c2.5 2.6 3.8 5.6 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.6-3.8-9S9.5 5.6 12 3Z" />
        </svg>
      );
    case "deudas":
      return (
        <svg {...base(p)}>
          <path d="M6.5 3h11M6.5 21h11M7.5 3c0 4.5 4.5 5.5 4.5 9s-4.5 4.5-4.5 9M16.5 3c0 4.5-4.5 5.5-4.5 9s4.5 4.5 4.5 9" />
          <path d="M9.5 18.5h5" />
        </svg>
      );
    case "propiedades":
      return (
        <svg {...base(p)}>
          <path d="M3.5 11 12 4l8.5 7M5.5 9.5V20h13V9.5" />
          <path d="M10 20v-5h4v5" />
        </svg>
      );
    case "mediacion":
      return (
        <svg {...base(p)}>
          <path d="M2.5 12.5 6 9l3 1.5 3-2.5 3.5 2.5L18 9l3.5 3.5" />
          <path d="m9 10.5 4.5 4.5a1.4 1.4 0 0 1-2 2l-1-1M8 14.5l2.5 2.5a1.4 1.4 0 0 1-2 2L5 15.5l-2.5-3M15.5 10.5 18 13l-3.5 3.5" />
        </svg>
      );
  }
};
