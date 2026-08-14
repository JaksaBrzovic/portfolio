import NextLink from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";
import { isExternalHref } from "@/lib/links";

type ButtonVariant = "primary" | "secondary" | "secondaryInverse" | "small";

interface CommonProps {
  variant?: ButtonVariant;
  children: ReactNode;
  className?: string;
}

interface LinkButtonProps
  extends CommonProps,
    Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "className" | "children"> {
  href: string;
}

interface NativeButtonProps
  extends CommonProps,
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children"> {
  href?: undefined;
}

export type ButtonProps = LinkButtonProps | NativeButtonProps;

const baseStyles =
  "inline-flex items-center justify-center gap-2 transition-colors duration-150 ease-out disabled:opacity-50 disabled:pointer-events-none";

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "h-12 px-5 rounded-md text-sm font-semibold bg-accent text-white hover:bg-accent/90 active:bg-accent/80",
  secondary:
    "h-12 px-5 rounded-md text-sm font-semibold bg-surface text-text-primary border border-border hover:border-text-secondary",
  // For secondary buttons on the dark Hero background (--color-hero-*) — a
  // dedicated variant instead of overriding `secondary` via className, since
  // conflicting Tailwind utilities passed through cn() aren't guaranteed to
  // win over the variant's own classes.
  secondaryInverse:
    "h-12 px-5 rounded-md text-sm font-semibold bg-transparent text-hero-text-primary border border-hero-border hover:border-hero-text-secondary",
  small: "h-10 px-4 rounded-[8px] text-sm font-semibold bg-accent text-white hover:bg-accent/90",
};

export function Button(props: ButtonProps) {
  const { variant = "primary", children, className, ...rest } = props;
  const styles = cn(baseStyles, variantStyles[variant], className);

  if (rest.href) {
    const { href, ...anchorRest } = rest as Omit<LinkButtonProps, keyof CommonProps>;

    if (isExternalHref(href)) {
      return (
        <a
          href={href}
          target={href.startsWith("mailto:") ? undefined : "_blank"}
          rel="noopener noreferrer"
          className={styles}
          {...anchorRest}
        >
          {children}
        </a>
      );
    }

    return (
      <NextLink href={href} className={styles} {...anchorRest}>
        {children}
      </NextLink>
    );
  }

  const buttonRest = rest as Omit<NativeButtonProps, keyof CommonProps>;
  return (
    <button type={buttonRest.type ?? "button"} className={styles} {...buttonRest}>
      {children}
    </button>
  );
}
