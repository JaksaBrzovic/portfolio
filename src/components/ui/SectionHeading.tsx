import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  as?: "h1" | "h2";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  as = "h2",
  className,
}: SectionHeadingProps) {
  const Heading = as;
  return (
    <div className={cn("max-w-[760px]", align === "center" && "mx-auto text-center", className)}>
      {eyebrow ? (
        <p className="text-eyebrow mb-4 text-accent">{eyebrow}</p>
      ) : null}
      <Heading className={as === "h1" ? "text-h1" : "text-h2"}>{title}</Heading>
      {description ? (
        <p className="text-body-lg mt-4 text-text-secondary">{description}</p>
      ) : null}
    </div>
  );
}
