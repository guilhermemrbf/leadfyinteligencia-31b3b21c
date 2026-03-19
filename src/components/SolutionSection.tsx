import { Lightbulb, Rocket, MessageSquare, ArrowRight } from "lucide-react";
import productImg from "@/assets/leadfy-product.png";
import AnimatedSection from "./AnimatedSection";

const pillars = [
  {
    icon: Lightbulb,
    num: "01",
    title: "Encontramos nichos que pagam caro",
    desc: "A IA identifica empresas que precisam de um app — nichos onde você cobra R$ 2K a R$ 10K por projeto, sem negociar.",
    gradient: "from-primary/20 to-primary/5",
  },
  {
    icon: Rocket,
    num: "02",
    title: "Criamos o app em minutos",
    desc: "Sem uma linha de código. A IA gera apps profissionais que parecem ter custado R$ 50 mil para desenvolver.",
    gradient: "from-secondary/20 to-secondary/5",
  },
  {
    icon: MessageSquare,
    num: "03",
    title: "Fechamos clientes no automático",
    desc: "Mensagens de venda prontas e testadas que fazem o cliente QUERER responder. Você só clica em enviar.",
    gradient: "from-primary/20 to-secondary/5",
  },
];

const SolutionSection = () => {
  return (
    <section id="solucao" className="section-spacing">
      <div className="section-gradient-divider -mt-14 mb-0" />
      <div className="container max-w-5xl mx-auto text-center">
        <AnimatedSection>
          <p className="text-primary font-semibold mb-3 uppercase tracking-wider text-xs md:text-sm">
            🚀 A Máquina de Fazer Dinheiro
          </p>
          <h2 className="font-display text-2xl sm:text-3xl md:text-5xl font-bold mb-4">
            3 passos simples. <span className="gradient-text">Resultado inevitável.</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg mb-10 md:mb-12 max-w-2xl mx-auto">
            A <strong className="text-foreground">única plataforma no Brasil</strong> que leva do zero ao primeiro cliente pagante — IA, prospecção e vendas num só lugar.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <div className="relative mx-auto max-w-4xl mb-12 md:mb-16 img-zoom-container">
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

        <AnimatedSection delay={500}>
          <div className="mt-10 md:mt-14">
            <a
              href="#preco"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-bold text-base md:text-lg px-8 py-4 rounded-xl glow-primary btn-shimmer hover:brightness-110 active:scale-[0.98] transition-all duration-300"
            >
              QUERO COMEÇAR A FATURAR AGORA
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default SolutionSection;
