import {
  Brain, Search, Users, BookOpen, Zap, BarChart3, MessageSquareText, Globe, ArrowRight,
} from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const mainFeatures = [
  {
    icon: Brain,
    title: "IA Integrada",
    desc: "Cria apps completos e gera abordagens automaticamente.",
  },
  {
    icon: Search,
    title: "Prospector #1",
    desc: "Encontra leads qualificados todos os dias no automático.",
  },
  {
    icon: Users,
    title: "Área de Membros",
    desc: "Módulos, templates e comunidade para evoluir rápido.",
  },
];

const extraFeatures = [
  { icon: MessageSquareText, label: "Abordagens por nicho" },
  { icon: BookOpen, label: "Método passo a passo" },
  { icon: BarChart3, label: "Painel de gestão" },
  { icon: Zap, label: "Automações" },
  { icon: Globe, label: "Domínio próprio" },
];

const FeaturesSection = () => {
  return (
    <section id="funcionalidades" className="section-spacing">
      <div className="section-gradient-divider -mt-14 mb-0" />
      <div className="container max-w-5xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-8 md:mb-12">
            <h2 className="font-display text-2xl sm:text-3xl md:text-5xl font-bold mb-3">
              Tudo que você precisa. <span className="gradient-text">Num só lugar.</span>
            </h2>
            <p className="text-muted-foreground text-sm md:text-base max-w-xl mx-auto">
              IA, prospector, área de membros e método validado — nenhum concorrente entrega isso junto.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-5 mb-4 md:mb-5">
          {mainFeatures.map((f, i) => (
            <AnimatedSection key={i} delay={i * 100}>
              <div className="glass-card p-5 md:p-6 text-center hover-card-glow group h-full border-primary/20">
                <div className="w-12 h-12 rounded-2xl bg-primary/15 flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/25 transition-all duration-300">
                  <f.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-base md:text-lg font-bold mb-1.5 group-hover:text-primary transition-colors duration-300">{f.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={300}>
          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
            {extraFeatures.map((f, i) => (
              <span key={i} className="inline-flex items-center gap-2 glass-card px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                <f.icon className="w-4 h-4 text-primary" />
                {f.label}
              </span>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={400}>
          <div className="mt-8 md:mt-10 text-center">
            <a
              href="#preco"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-bold text-base px-8 py-4 rounded-xl glow-primary btn-shimmer active:scale-[0.98] transition-all duration-300"
            >
              QUERO ACESSO A TUDO
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default FeaturesSection;
