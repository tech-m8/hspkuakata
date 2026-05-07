import type { AmenityIconName } from "@/data/amenities";

const paths: Record<AmenityIconName, React.ReactNode> = {
  breakfast: (
    <>
      <path d="M4 17a8 8 0 0 1 16 0" />
      <path d="M2 17h20" />
      <path d="M12 6v3" />
      <circle cx="12" cy="5" r="1" />
    </>
  ),
  drink: (
    <>
      <path d="M4 4h16l-8 9-8-9z" />
      <path d="M12 13v6" />
      <path d="M8 19h8" />
    </>
  ),
  water: (
    <>
      <path d="M12 3s6 7 6 11a6 6 0 1 1-12 0c0-4 6-11 6-11z" />
    </>
  ),
  wifi: (
    <>
      <path d="M2 8.5a16 16 0 0 1 20 0" />
      <path d="M5 12a11 11 0 0 1 14 0" />
      <path d="M8.5 15.5a6 6 0 0 1 7 0" />
      <circle cx="12" cy="19" r="1.2" fill="currentColor" />
    </>
  ),
  kettle: (
    <>
      <path d="M5 9h12l-1 9a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 9z" />
      <path d="M17 11h2a2 2 0 0 1 0 4h-2" />
      <path d="M9 6c0-1.5 1-3 3-3s3 1.5 3 3" />
    </>
  ),
  parking: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M9 17V7h4a3.5 3.5 0 0 1 0 7H9" />
    </>
  ),
  ac: (
    <>
      <rect x="2" y="5" width="20" height="9" rx="2" />
      <path d="M6 18l-1 3M12 18v3M18 18l1 3" />
    </>
  ),
  tv: (
    <>
      <rect x="2" y="4" width="20" height="13" rx="2" />
      <path d="M8 21h8" />
    </>
  ),
  balcony: (
    <>
      <path d="M3 21h18" />
      <path d="M5 21V11h14v10" />
      <path d="M9 21V11M15 21V11M5 14h14" />
    </>
  ),
  frontDesk: (
    <>
      <path d="M3 21V11l9-6 9 6v10" />
      <path d="M9 21v-6h6v6" />
    </>
  ),
  housekeeping: (
    <>
      <path d="M9 3v6M9 9l-2 4h4l-2-4z" />
      <path d="M5 13h8l-1 8H6l-1-8z" />
    </>
  ),
  linens: (
    <>
      <rect x="3" y="6" width="18" height="14" rx="2" />
      <path d="M3 12h18M8 6V4h8v2" />
    </>
  ),
  bathroom: (
    <>
      <path d="M2 13h20" />
      <path d="M4 13v3a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-3" />
      <path d="M6 13V7a2 2 0 0 1 2-2h1a1.5 1.5 0 0 1 1.5 1.5" />
      <path d="M7 19v2M17 19v2" />
    </>
  ),
};

export function AmenityIcon({
  name,
  className = "",
}: {
  name: AmenityIconName;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}
