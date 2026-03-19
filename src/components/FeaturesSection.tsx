import {
  Brain,
  Search,
  Users,
  BookOpen,
  Zap,
  BarChart3,
  MessageSquareText,
  Globe,
  ArrowRight,
} from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const features = [
  {
    icon: Brain,
    title: "IA Integrada da Leadfy",
    desc: "Cria apps completos, gera abordagens e otimiza suas vendas — tudo automaticamente, sem você digitar código.",
    highlight: true,
  },
  {
    icon: Search,
    title: "Prospector #1 do Mercado",
    desc: "Encontra leads qualificados todos os dias — empresas que PRECISAM de um app e estão prontas para pagar agora.",
    highlight: true,
  },
  {
    icon: Users,
    title: "Área de Membros Completa",
    desc: "Módulos, aulas, templates e comunidade exclusiva. Tudo organizado para você evoluir rápido e faturar consistente.",
    highlight: true,
  },
  {
    icon: MessageSquareText,
    title: "Abordagens por Nicho",
    desc: "Copy personalizada por segmento que faz o cliente querer responder na hora.",
  },
  {
    icon: BookOpen,
    title: "Método Passo a Passo",
    desc: "Do zero ao primeiro cliente em 7 dias. Cada etapa clara e objetiva.",
  },
  {
    icon: BarChart3,
    title: "Painel de Gestão",
    desc: "Dashboard para acompanhar leads, clientes e faturamento em tempo real.",
  },
  {
    icon: Zap,
    title: "Automações Inteligentes",
    desc: "Prospecção e follow-up no automático. Você foca em fechar.",
  },
  {
    icon: Globe,
    title: "Domínio e Marca Própria",
    desc: "Apps com sua marca, sem marca d'água. Domínio personalizado incluso.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="funcionalidades" className="section-spacing">
      <div className="section-gradient-divider -mt-14 mb-0" />
      <div className="container max-w-5xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-10 md:mb-14">
            <p className="text-primary font-semibold mb-3 uppercase tracking-wider text-xs md:text-sm">
              🔥 Tudo Num Só Lugar
            </p>
            <h2 className="font-display text-2xl sm:text-3xl md:text-5xl font-bold mb-4">
              A plataforma <span className="gradient-text">mais completa</span> do Brasil
            </h2>
            <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
              IA própria, prospector inteligente, área de membros e método validado — nenhum concorrente entrega tudo isso.
            </p>
          </div>
        </AnimatedSection>

        {/* Top 3 highlighted features */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-5 mb-4 md:mb-5">
          {features.filter(f => f.highlight).map((f, i) => (
            <AnimatedSection key={i} delay={i * 120}>
              <div className="glass-card p-5 md:p-6 text-center hover-card-glow hover-inner-glow group h-full border-primary/20">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-primary/15 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/25 group-hover:shadow-[0_0_20px_hsl(199_75%_48%/0.3)] transition-all duration-300">
                  <f.icon className="w-6 h-6 md:w-7 md:h-7 text-primary group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="font-display text-base md:text-lg font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                  {f.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Remaining features - compact grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 md:gap-4">
          {features.filter(f => !f.highlight).map((f, i) => (
            <AnimatedSection key={i} delay={360 + i * 120}>
              <div className="glass-card p-4 md:p-5 hover-card-glow group h-full">
                <div className="flex items-center gap-3 mb-2">
                  <f.icon className="w-4 h-4 text-primary shrink-0" />
                  <h3 className="font-semibold text-sm group-hover:text-primary transition-colors duration-300">
                    {f.title}
                  </h3>
                </div>
                <p className="text-muted-foreground text-xs leading-relaxed">{f.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={800}>
          <div className="mt-10 md:mt-12 text-center">
            <a
              href="#preco"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-bold text-base px-8 py-4 rounded-xl glow-primary btn-shimmer hover:brightness-110 active:scale-[0.98] transition-all duration-300"
            >
              QUERO ACESSO A TUDO ISSO
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default FeaturesSection;
