import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

export function ContactCTA() {
  return (
    <Section
      eyebrow="Let's Work Together"
      title="Have a project in mind?"
      description="I'm available for Unity development, technical problem solving and project-based collaboration."
      align="center"
      size="large"
    >
      <div className="mt-10 flex justify-center">
        <Button href="/contact" variant="primary">
          Contact Me
        </Button>
      </div>
    </Section>
  );
}
