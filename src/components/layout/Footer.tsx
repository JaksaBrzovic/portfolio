import NextLink from "next/link";
import { primaryNav } from "@/data/navigation";
import { siteConfig } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { BackToTop } from "@/components/navigation/BackToTop";

export function Footer() {
  const year = new Date().getFullYear();

  const professionalLinks = [
    siteConfig.github ? { label: "GitHub", href: siteConfig.github } : null,
    siteConfig.linkedin ? { label: "LinkedIn", href: siteConfig.linkedin } : null,
    siteConfig.email ? { label: "Email", href: `mailto:${siteConfig.email}` } : null,
  ].filter((link): link is { label: string; href: string } => link !== null);

  return (
    <footer className="border-t border-border">
      <Container as="section">
        <div className="flex flex-col gap-8 py-16 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="text-sm font-bold tracking-tight text-text-primary">
              {siteConfig.name}
            </p>
            <p className="text-metadata mt-1 text-text-muted">{siteConfig.role}</p>
          </div>

          <div className="flex flex-col gap-6 md:items-end">
            <nav className="flex flex-wrap gap-x-6 gap-y-2" aria-label="Footer">
              {primaryNav.map((item) => (
                <NextLink
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-text-secondary transition-colors duration-150 hover:text-text-primary"
                >
                  {item.label}
                </NextLink>
              ))}
            </nav>

            {professionalLinks.length > 0 ? (
              <nav className="flex flex-wrap gap-x-6 gap-y-2" aria-label="Professional links">
                {professionalLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-text-secondary transition-colors duration-150 hover:text-text-primary"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            ) : null}
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-border py-8 text-sm text-text-muted md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {siteConfig.name}
          </p>
          <BackToTop />
        </div>
      </Container>
    </footer>
  );
}
