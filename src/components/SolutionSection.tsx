import { Lightbulb, Rocket, MessageSquare } from "lucide-react";
import productImg from "@/assets/leadfy-product.png";
import AnimatedSection from "./AnimatedSection";

const pillars = [
  {
    icon: Lightbulb,
    num: "01",
    title: "Descubra Oportunidades",
    desc: "A IA identifica nichos lucrativos e empresas que precisam de um app — sem você pesquisar manualmente.",
    gradient: "from-primary/20 to-primary/5",
  },
  {
    icon: Rocket,
    num: "02",
    title: "Crie Apps com IA",
    desc: "Gere apps funcionais para qualquer nicho usando inteligência artificial, mesmo sem saber programar.",
    gradient: "from-secondary/20 to-secondary/5",
  },
  {
    icon: MessageSquare,
    num: "03",
    title: "Venda com Confiança",
    desc: "Receba abordagens prontas e personalizadas por nicho para fechar seus primeiros clientes.",
    gradient: "from-primary/20 to-secondary/5",
  },
];

const SolutionSection = () => {
  return (
    <section id="solucao" className="section-spacing">
      <div className="container max-w-5xl mx-auto text-center">
        <AnimatedSection>
          <p className="text-primary font-semibold mb-3 uppercase tracking-wider text-xs md:text-sm">
            A Solução
          </p>
          <h2 className="font-display text-2xl sm:text-3xl md:text-5xl font-bold mb-4">
            Da ideia ao primeiro cliente:{" "}
            <span className="gradient-text">Descubra → Crie → Venda</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg mb-10 md:mb-12 max-w-2xl mx-auto">
            O Leadfy é a única plataforma que te leva do zero ao faturamento — combinando IA, prospecção e abordagens de venda em um único lugar.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <div className="relative mx-auto max-w-4xl mb-12 md:mb-16">
            <div className="absolute inset-0 bg-primary/5 rounded-xl md:rounded-2xl blur-3xl scale-105" />
            <img
              src={productImg}
              alt="Leadfy Inteligência — plataforma desktop e mobile"
              className="relative rounded-xl md:rounded-2xl border border-border/20 shadow-2xl w-full"
            />
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
          {pillars.map((p, i) => (
            <AnimatedSection key={i} delay={i * 120}>
              <div className="glass-card p-6 md:p-8 text-center hover-card-glow hover-inner-glow group h-full relative overflow-hidden">
                <span className="absolute -top-2 -right-2 font-display text-[4rem] md:text-[5rem] font-extrabold text-primary/[0.04] leading-none select-none pointer-events-none group-hover:text-primary/[0.08] transition-colors duration-500">
                  {p.num}
                </span>
                <div className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br ${p.gradient} flex items-center justify-center mx-auto mb-5 md:mb-6 group-hover:shadow-[0_0_20px_hsl(199_75%_48%/0.25)] transition-all duration-300`}>
                  <p.icon className="w-6 h-6 md:w-7 md:h-7 text-primary group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="font-display text-lg md:text-xl font-bold mb-2 md:mb-3 group-hover:text-primary transition-colors duration-300">{p.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
