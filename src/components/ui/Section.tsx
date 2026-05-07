import type { ReactNode } from "react";
import { Container } from "./Container";

export function Section({
  id,
  children,
  className = "",
  containerClassName = "",
  as: Tag = "section",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  as?: "section" | "div" | "main";
}) {
  return (
    <Tag id={id} className={`py-16 sm:py-20 lg:py-24 ${className}`}>
      <Container className={containerClassName}>{children}</Container>
    </Tag>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}) {
  const alignClass = align === "center" ? "text-center mx-auto" : "";
  return (
    <div className={`max-w-2xl ${alignClass} mb-10`}>
      {eyebrow && (
        <p className="text-xs uppercase tracking-[0.2em] text-(--color-gold-500) mb-3">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl sm:text-4xl text-(--color-navy-800) leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base text-(--color-ink)/80 leading-relaxed">{subtitle}</p>
      )}
    </div>
  );
}
