import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import AnimatedSection from "./AnimatedSection";

const faqs = [
  {
    q: "Preciso saber programar para usar o Leadfy?",
    a: "Não! O Leadfy foi feito para iniciantes. Você cria apps usando inteligência artificial e recebe tudo pronto para vender — sem escrever código.",
  },
  {
    q: "E se eu não souber vender?",
    a: "Esse é o principal problema que o Leadfy resolve. Você recebe mensagens prontas por nicho, testadas e otimizadas para gerar respostas. É só copiar, personalizar e enviar.",
  },
  {
    q: "Quanto tempo leva para conseguir o primeiro cliente?",
    a: "Com 15 a 30 minutos por dia, muitos usuários fecham o primeiro cliente em 1 a 3 semanas. O sistema elimina o trabalho pesado de pesquisa e escrita.",
  },
  {
    q: "Quanto posso cobrar por um app?",
    a: "O valor médio de um app simples para empresas varia entre R$ 2.000 e R$ 10.000. Um único cliente já paga anos de Leadfy.",
  },
  {
    q: "Já tentei prospectar e não consegui clientes.",
    a: "Provavelmente faltou método e mensagens certas. O Leadfy te dá um sistema passo a passo que funciona mesmo para quem nunca vendeu.",
  },
  {
    q: "Funciona para qualquer nicho?",
    a: "O Leadfy cobre diversos nichos e gera abordagens personalizadas. Se existem empresas no seu segmento, o sistema encontra e te ajuda a abordá-las.",
  },
  {
    q: "E se eu não gostar?",
    a: "Você tem 7 dias de garantia incondicional. Se não gostar por qualquer motivo, devolvemos 100% do seu dinheiro. Sem perguntas.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="section-spacing">
      <div className="container max-w-3xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-8 md:mb-12">
            <p className="text-primary font-semibold mb-3 uppercase tracking-wider text-xs md:text-sm">
              Dúvidas Frequentes
            </p>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold">
              Ainda tem dúvidas?
            </h2>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <Accordion type="single" collapsible className="space-y-2.5 md:space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="glass-card px-4 md:px-6 border-border/50 hover:border-primary/20 transition-colors duration-300"
              >
                <AccordionTrigger className="text-left font-semibold hover:no-underline py-4 md:py-5 text-sm md:text-base">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4 md:pb-5 text-sm">
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
