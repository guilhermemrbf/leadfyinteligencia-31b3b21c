import { Lightbulb, Rocket, MessageSquare, ArrowRight } from "lucide-react";
import productImg from "@/assets/leadfy-product.png";
import AnimatedSection from "./AnimatedSection";

const pillars = [
  {
    icon: Lightbulb,
    title: "Encontra os clientes certos",
    desc: "O prospector identifica empresas que precisam de app e estão prontas para pagar.",
  },
  {
    icon: Rocket,
    title: "Cria o app em minutos",
    desc: "A IA gera apps profissionais sem código. Seu cliente vai achar que custou R$ 50 mil.",
  },
  {
    icon: MessageSquare,
    title: "Fecha no automático",
    desc: "Mensagens prontas por nicho que fazem o cliente querer responder. Só enviar.",
  },
];

const SolutionSection = () => {
  return (
    <section id="como-funciona" className="section-spacing">
      <div className="section-gradient-divider -mt-14 mb-0" />
      <div className="container max-w-5xl mx-auto text-center">
        <AnimatedSection>
          <h2 className="font-display text-2xl sm:text-3xl md:text-5xl font-bold mb-4">
            3 passos. <span className="gradient-text">Resultado garantido.</span>
          </h2>
          <p className="text-muted-foreground text-sm md:text-base mb-8 md:mb-10 max-w-xl mx-auto">
            A única plataforma que leva do zero ao primeiro cliente — IA, prospecção e vendas num só lugar.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <div className="relative mx-auto max-w-4xl mb-8 md:mb-12 img-zoom-container">
            <div className="absolute inset-0 bg-primary/5 rounded-xl md:rounded-2xl blur-3xl scale-105" />
            <img
              src={productImg}
              alt="Leadfy — plataforma desktop e mobile"
              className="relative rounded-xl md:rounded-2xl border border-border/20 shadow-2xl w-full"
            />
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-5">
          {pillars.map((p, i) => (
            <AnimatedSection key={i} delay={i * 100}>
              <div className="glass-card p-5 md:p-6 text-center hover-card-glow group h-full">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-all duration-300">
                  <p.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-base md:text-lg font-bold mb-2 group-hover:text-primary transition-colors duration-300">{p.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={400}>
          <div className="mt-8 md:mt-10">
            <a
              href="#preco"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-bold text-base px-8 py-4 rounded-xl glow-primary btn-shimmer active:scale-[0.98] transition-all duration-300"
            >
              QUERO COMEÇAR
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default SolutionSection;
