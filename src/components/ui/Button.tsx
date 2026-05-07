import type { ReactNode } from "react";
import Link from "next/link";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--color-gold-500) disabled:opacity-60 disabled:cursor-not-allowed";

const variants: Record<Variant, string> = {
  primary:
    "bg-(--color-navy-800) text-white hover:bg-(--color-navy-700) shadow-sm",
  secondary:
    "bg-(--color-gold-500) text-(--color-navy-900) hover:bg-(--color-gold-400)",
  ghost:
    "bg-transparent text-(--color-navy-800) ring-1 ring-(--color-navy-800)/30 hover:bg-(--color-navy-800)/5",
};

const sizes: Record<Size, string> = {
  sm: "text-sm px-4 py-2",
  md: "text-base px-6 py-3",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  className?: string;
};

type AnchorProps = CommonProps & {
  href: string;
  external?: boolean;
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof CommonProps | "href">;

type ButtonProps = CommonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

export function Button(props: AnchorProps | ButtonProps) {
  const {
    variant = "primary",
    size = "md",
    children,
    className = "",
    ...rest
  } = props;
  const cls = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if ("href" in rest && rest.href) {
    const { href, external, ...anchor } = rest as AnchorProps;
    if (external || /^(https?:|mailto:|tel:)/.test(href)) {
      return (
        <a
          href={href}
          {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          {...anchor}
          className={cls}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} {...anchor} className={cls}>
        {children}
      </Link>
    );
  }

  return (
    <button {...(rest as ButtonProps)} className={cls}>
      {children}
    </button>
  );
}
