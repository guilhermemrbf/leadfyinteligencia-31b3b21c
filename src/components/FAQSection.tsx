import AnimatedSection from "./AnimatedSection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Funciona para o meu segmento?",
    a: "Sim. Atendemos B2B e B2C em mais de 20 segmentos diferentes. Nossa primeira etapa é sempre um diagnóstico personalizado.",
  },
  {
    q: "Quanto tempo para ver resultado?",
    a: "A maioria dos clientes vê os primeiros resultados em até 72 horas após o início da estratégia.",
  },
  {
    q: "Preciso ter uma estrutura grande?",
    a: "Não. Atendemos desde pequenas empresas até operações complexas. A estratégia é adaptada à sua realidade.",
  },
  {
    q: "Como é o modelo de trabalho?",
    a: "100% online, com reuniões estratégicas semanais, dashboard de resultados em tempo real e suporte direto.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="section-spacing" style={{ background: "hsl(0 0% 6%)" }}>
      <div className="max-w-2xl mx-auto">
        <AnimatedSection>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-center mb-14">
            Suas dúvidas, respondidas
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="glass-card px-6 border-none"
              >
                <AccordionTrigger className="text-base font-semibold text-foreground hover:no-underline py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default FAQSection;
