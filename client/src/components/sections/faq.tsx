import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HOME_FAQS, type Faq } from "@/data/content";

interface FAQProps {
  faqs?: Faq[];
  heading?: string;
  subheading?: string;
  className?: string;
}

export function FAQ({
  faqs = HOME_FAQS,
  heading = "Frequently asked questions",
  subheading,
  className = "py-24 bg-muted/30",
}: FAQProps) {
  return (
    <section className={className}>
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold font-display">{heading}</h2>
          {subheading && <p className="text-muted-foreground text-lg mt-3">{subheading}</p>}
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger className="text-left text-base font-semibold">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
