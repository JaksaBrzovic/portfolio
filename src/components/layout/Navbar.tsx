"use client";

import { useEffect, useRef, useState } from "react";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { primaryNav } from "@/data/navigation";
import { siteConfig } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/cn";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [prevPathname, setPrevPathname] = useState(pathname);
  const toggleButtonRef = useRef<HTMLButtonElement>(null);

  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setOpen(false);
  }

  useEffect(() => {
    if (!open) return;

    document.body.style.overflow = "hidden";

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  useEffect(() => {
    if (open) {
      toggleButtonRef.current?.focus();
    }
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-sm">
      <Container>
        <div className="flex h-20 items-center justify-between">
          <NextLink
            href="/"
            className="text-sm font-bold tracking-tight text-text-primary"
            aria-label={`${siteConfig.name} — home`}
          >
            JB
          </NextLink>

          <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
            {primaryNav.map((item) => {
              const isActive =
                item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
              return (
                <NextLink
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    "text-sm font-medium transition-colors duration-150",
                    isActive
                      ? "text-text-primary"
                      : "text-text-secondary hover:text-text-primary"
                  )}
                >
                  {item.label}
                </NextLink>
              );
            })}
            {siteConfig.cvUrl ? (
              <a
                href={siteConfig.cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-text-secondary transition-colors duration-150 hover:text-text-primary"
              >
                CV
              </a>
            ) : null}
          </nav>

          <button
            ref={toggleButtonRef}
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-md text-text-primary md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            <MenuIcon open={open} />
          </button>
        </div>
      </Container>

      {open ? (
        <div
          id="mobile-nav"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
          className="border-t border-border bg-background md:hidden"
        >
          <Container>
            <nav className="flex flex-col gap-1 py-6" aria-label="Mobile">
              {primaryNav.map((item) => (
                <NextLink
                  key={item.href}
                  href={item.href}
                  className="rounded-md px-2 py-3 text-lg font-medium text-text-primary transition-colors duration-150 hover:bg-surface"
                >
                  {item.label}
                </NextLink>
              ))}
              {siteConfig.cvUrl ? (
                <a
                  href={siteConfig.cvUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-md px-2 py-3 text-lg font-medium text-text-primary transition-colors duration-150 hover:bg-surface"
                >
                  CV
                </a>
              ) : null}
            </nav>
          </Container>
        </div>
      ) : null}
    </header>
  );
}

function MenuIcon({ open }: { open: boolean }) {
  if (open) {
    return (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path
          d="M4 4L16 16M16 4L4 16"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path
        d="M3 5.5H17M3 10H17M3 14.5H17"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
