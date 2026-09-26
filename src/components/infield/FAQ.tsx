import { SectionHeader, Reveal } from "./primitives";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

const faqs = [
  {
    question: "Will my sales team resist using this?",
    answer:
      "Most teams love it once they realize it automates their manual reporting and guarantees their incentives are paid accurately. It replaces tedious WhatsApp updates and Excel sheets with a single click.",
  },
  {
    question: "Does it track them after working hours?",
    answer:
      "No. GPS tracking is strictly tied to the working hours you set (e.g., 9 AM to 6 PM). Outside these hours, tracking automatically stops to ensure complete privacy for your team.",
  },
  {
    question: "Will it drain the phone battery?",
    answer:
      "Our app is optimized for low battery consumption. It uses smart location polling that consumes less than 8-10% of battery over an entire 9-hour shift.",
  },
  {
    question: "What happens if they lose internet connection?",
    answer:
      "InField works perfectly offline. All GPS points, check-ins, and meeting notes are saved securely on the device and automatically synced to your dashboard the moment they get back online.",
  },
  {
    question: "How much does it cost?",
    answer:
      "Pricing is based on the size of your team, starting at very affordable rates for Indian SMBs. Book a free demo, and we'll give you a customized quote along with a 14-day free trial.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="FAQ">
          Frequently Asked Questions
        </SectionHeader>

        <Reveal className="mt-16">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-border">
                <AccordionTrigger className="text-left text-lg font-bold text-navy hover:text-brand hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-body text-base leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
