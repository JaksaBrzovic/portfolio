import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/cn";

interface ProjectSectionProps {
  title: string;
  children: ReactNode;
  contentWidth?: "reading" | "full";
  className?: string;
}

export function ProjectSection({
  title,
  children,
  contentWidth = "reading",
  className,
}: ProjectSectionProps) {
  return (
    <section className={cn("py-12 md:py-16", className)}>
      <Container>
        <h2 className="text-h2 text-text-primary">{title}</h2>
        <div className={cn("mt-6", contentWidth === "reading" && "max-w-[720px]")}>
          {children}
        </div>
      </Container>
    </section>
  );
}
