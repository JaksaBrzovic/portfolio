import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/cn";

interface SectionProps {
  eyebrow?: string;
  title?: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  size?: "small" | "standard" | "large";
  headingAs?: "h1" | "h2";
  children?: ReactNode;
  className?: string;
}

const paddingBySize = {
  small: "py-12 md:py-16",
  standard: "py-16 md:py-24",
  large: "py-20 md:py-32",
};

export function Section({
  eyebrow,
  title,
  description,
  align = "left",
  size = "standard",
  headingAs = "h2",
  children,
  className,
}: SectionProps) {
  return (
    <section className={cn(paddingBySize[size], className)}>
      <Container>
        {title ? (
          <SectionHeading
            eyebrow={eyebrow}
            title={title}
            description={description}
            align={align}
            as={headingAs}
            className={children ? "mb-12 md:mb-16" : undefined}
          />
        ) : null}
        {children}
      </Container>
    </section>
  );
}
