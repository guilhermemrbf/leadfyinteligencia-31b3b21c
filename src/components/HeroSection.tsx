import AnimatedSection from "./AnimatedSection";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="hero-gradient-bg dot-grid min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-3xl mx-auto text-center px-4 py-20 md:py-32">
        <AnimatedSection>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 mb-8">
            <span className="text-primary text-sm font-medium">✦ Inteligência que gera resultado</span>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black leading-[1.1] tracking-tight mb-6">
            Chega de leads frios.{" "}
            <span className="gradient-text">Comece a fechar clientes.</span>
          </h1>
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <p className="text-muted-foreground text-lg md:text-xl max-w-xl mx-auto mb-10 leading-relaxed">
            A Leadfy usa inteligência de dados para atrair, qualificar e converter — enquanto você foca em crescer.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={300}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <a
              href="#cta"
              className="btn-shimmer text-base font-bold text-primary-foreground px-8 py-4 rounded-xl relative w-full sm:w-auto"
            >
              <span className="relative z-10">Quero mais clientes agora</span>
            </a>
            <a
              href="#como-funciona"
              className="text-base font-semibold text-foreground/80 hover:text-foreground border border-border hover:border-foreground/20 px-8 py-4 rounded-xl transition-all duration-300 hover:scale-[1.02] w-full sm:w-auto text-center"
            >
              Ver como funciona <ArrowRight className="w-4 h-4 inline ml-1" />
            </a>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={400}>
          <p className="text-muted-foreground text-sm">
            🔥 <span className="text-foreground font-medium">+340 empresas</span> acelerando resultados com a Leadfy
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default HeroSection;
