import { services } from "@/data/services";
import { Section } from "@/components/ui/Section";

export function Services() {
  return (
    <Section eyebrow="What I Do" title="Services">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
        {services.map((service) => (
          <div key={service.title}>
            <h3 className="text-h3 text-text-primary">{service.title}</h3>
            <p className="text-body mt-3 text-text-secondary">{service.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
