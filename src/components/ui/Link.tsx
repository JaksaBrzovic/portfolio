import NextLink from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";
import { isExternalHref } from "@/lib/links";

interface LinkProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "className"> {
  href: string;
  children: ReactNode;
  className?: string;
  underline?: boolean;
}

export function Link({ href, children, className, underline = true, ...rest }: LinkProps) {
  const external = isExternalHref(href);
  const styles = cn(
    "text-accent transition-colors duration-150",
    underline && "underline decoration-1 underline-offset-4 hover:decoration-2",
    className
  );

  if (external) {
    return (
      <a
        href={href}
        target={href.startsWith("mailto:") ? undefined : "_blank"}
        rel="noopener noreferrer"
        className={styles}
        {...rest}
      >
        {children}
      </a>
    );
  }

  return (
    <NextLink href={href} className={styles} {...rest}>
      {children}
    </NextLink>
  );
}
