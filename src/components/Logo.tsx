import { useId } from "react";

type LogoProps = {
  variant?: "dark" | "light";
  className?: string;
  showWordmark?: boolean;
};

export function Logo({
  variant = "dark",
  className = "",
  showWordmark = true,
}: LogoProps) {
  const uid = useId();
  const idPearl = `hsp-pearl-${uid}`;
  const idHi = `hsp-pearl-hi-${uid}`;

  const waveStroke = variant === "light" ? "#ffffff" : "#1a1a1a";
  const waveOpacity = variant === "light" ? 0.9 : 1;
  const text = variant === "light" ? "#ffffff" : "var(--color-navy-800)";

  return (
    <span
      className={`inline-flex items-center gap-3 ${className}`}
      aria-label="Hotel Silver Pearl"
    >
      <svg
        width="56"
        height="32"
        viewBox="0 0 200 110"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <radialGradient id={idPearl} cx="40%" cy="32%" r="65%">
            <stop offset="0%" stopColor="#f7f7f7" />
            <stop offset="35%" stopColor="#cfcfcf" />
            <stop offset="70%" stopColor="#7a7a7a" />
            <stop offset="100%" stopColor="#3a3a3a" />
          </radialGradient>
          <radialGradient id={idHi} cx="38%" cy="28%" r="22%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity={0.95} />
            <stop offset="100%" stopColor="#ffffff" stopOpacity={0} />
          </radialGradient>
        </defs>
        <circle cx="100" cy="38" r="24" fill={`url(#${idPearl})`} />
        <circle cx="100" cy="38" r="24" fill={`url(#${idHi})`} />
        <path
          d="M 18 78 Q 50 60, 100 76 T 182 70"
          stroke={waveStroke}
          strokeOpacity={waveOpacity}
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M 30 90 Q 60 76, 100 88 T 174 82"
          stroke={waveStroke}
          strokeOpacity={waveOpacity * 0.65}
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
        <ellipse
          cx="102"
          cy="82"
          rx="3.5"
          ry="1.8"
          fill={waveStroke}
          opacity={0.85}
        />
      </svg>
      {showWordmark && (
        <span
          className="font-display text-lg sm:text-xl tracking-wide leading-none"
          style={{ color: text }}
        >
          Hotel Silver Pearl
        </span>
      )}
    </span>
  );
}
