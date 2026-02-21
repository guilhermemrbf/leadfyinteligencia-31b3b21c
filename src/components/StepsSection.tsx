import { Search, MessageSquare, Sparkles, Rocket } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const steps = [
  {
    num: "01",
    icon: Search,
    title: "Escolha um nicho lucrativo",
    desc: "O Leadfy sugere nichos com alta demanda por apps e te mostra exatamente quais empresas abordar.",
  },
  {
    num: "02",
    icon: Sparkles,
    title: "Crie o app com IA",
    desc: "Use inteligência artificial para gerar um app funcional em minutos — sem precisar programar nada.",
  },
  {
    num: "03",
    icon: MessageSquare,
    title: "Receba abordagens prontas",
    desc: "Prompts inteligentes geram mensagens de venda personalizadas para cada tipo de empresa.",
  },
  {
    num: "04",
    icon: Rocket,
    title: "Feche seus primeiros clientes",
    desc: "Envie as abordagens, negocie com confiança e comece a faturar com apps toda semana.",
  },
];

const StepsSection = () => {
  return (
    <section id="como-funciona" className="section-spacing">
      <div className="container max-w-5xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-10 md:mb-16">
            <p className="text-primary font-semibold mb-3 uppercase tracking-wider text-xs md:text-sm">
              Como Funciona
            </p>
            <h2 className="font-display text-2xl sm:text-3xl md:text-5xl font-bold mb-4">
              Do zero ao primeiro cliente{" "}
              <span className="gradient-text">em 4 passos</span>
            </h2>
            <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
              Você não precisa de experiência. O Leadfy te guia em cada etapa.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
          {steps.map((s, i) => (
            <AnimatedSection key={i} delay={i * 100}>
              <div className="glass-card p-5 md:p-7 hover-card-glow hover-inner-glow group h-full relative overflow-hidden">
                {/* Big number background */}
                <span className="absolute -top-2 -right-2 font-display text-[4rem] md:text-[5rem] font-extrabold text-primary/[0.04] leading-none select-none pointer-events-none group-hover:text-primary/[0.08] transition-colors duration-500">
                  {s.num}
                </span>

                <div className="flex items-start gap-4 md:gap-5 relative z-10">
                  <div className="flex-shrink-0">
                    <span className="font-display text-sm font-bold text-primary bg-primary/10 w-10 h-10 rounded-xl flex items-center justify-center border border-primary/20 group-hover:bg-primary/20 group-hover:border-primary/40 group-hover:shadow-[0_0_12px_hsl(199_75%_48%/0.3)] transition-all duration-300">
                      {s.num}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-display text-base md:text-lg font-bold mb-1.5 md:mb-2 group-hover:text-primary transition-colors duration-300">{s.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StepsSection;
