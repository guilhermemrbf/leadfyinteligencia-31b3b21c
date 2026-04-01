import { ArrowRight, Shield, Zap, Users, Clock } from "lucide-react";
import heroMockup from "@/assets/leadfy-hero-mockup.png";
import AICodeAnimation from "./AICodeAnimation";

const HeroSection = () => {
  return (
    <section className="relative min-h-[100svh] flex flex-col items-center justify-center px-4 py-20 pt-24 md:pt-32 overflow-hidden">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[900px] h-[400px] md:h-[600px] rounded-full pointer-events-none hero-gradient-animated"
        style={{ background: "radial-gradient(ellipse at center, hsl(199 75% 48% / 0.12), hsl(196 85% 58% / 0.06), transparent 70%)" }}
      />

      <div className="container max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-8 md:mb-16">
          <div className="inline-flex items-center gap-2 border border-primary/30 bg-primary/5 backdrop-blur-sm px-3 py-1 md:px-5 md:py-2 rounded-full mb-6 md:mb-10 animate-fade-up">
            <Users className="w-3 h-3 md:w-3.5 md:h-3.5 text-primary" />
            <span className="text-[10px] md:text-sm text-primary font-medium">+500 pessoas já faturam com apps</span>
          </div>

          <h1 className="font-display text-[1.6rem] sm:text-3xl md:text-6xl lg:text-[4.5rem] font-extrabold leading-[1.1] mb-4 md:mb-7 max-w-5xl mx-auto animate-fade-up" style={{ animationDelay: "100ms" }}>
            Fature R$ 10K/mês vendendo apps{" "}
            <span className="gradient-text">sem programar uma linha</span>
          </h1>

          <p className="text-sm md:text-xl text-muted-foreground max-w-2xl mx-auto mb-6 md:mb-10 leading-relaxed animate-fade-up" style={{ animationDelay: "150ms" }}>
            O Leadfy cria o app, encontra o cliente e entrega a mensagem pronta. <strong className="text-foreground">Você só clica em enviar.</strong>
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 mb-4 md:mb-6 animate-fade-up" style={{ animationDelay: "250ms" }}>
            <a
              href="#preco"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-bold text-sm md:text-lg px-6 md:px-8 py-3 md:py-4 rounded-xl glow-primary btn-shimmer animate-glow-pulse"
            >
              COMEÇAR AGORA
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
            </a>
            <a
              href="#como-funciona"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-border/60 bg-muted/20 backdrop-blur-sm text-foreground font-semibold text-sm md:text-lg px-6 md:px-8 py-3 md:py-4 rounded-xl hover:bg-muted/40 active:scale-[0.98] transition-all duration-300"
            >
              Ver como funciona
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-6 text-[0.6rem] md:text-xs text-muted-foreground uppercase tracking-wider animate-fade-up" style={{ animationDelay: "300ms" }}>
            <span className="flex items-center gap-1"><Zap className="w-3 h-3" /> Sem experiência</span>
            <span className="text-border hidden sm:inline">•</span>
            <span className="flex items-center gap-1"><Shield className="w-3 h-3" /> Garantia 7 dias</span>
            <span className="text-border hidden sm:inline">•</span>
            <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> Resultados em 7 dias</span>
          </div>
        </div>

        <div className="relative mx-auto max-w-6xl animate-fade-up" style={{ animationDelay: "350ms" }}>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 md:gap-6 items-start">
            <div className="lg:col-span-3 order-2 lg:order-1">
              <div className="relative img-zoom-container">
                <div className="absolute inset-0 bg-primary/5 rounded-xl blur-2xl scale-105" />
                <img
                  src={heroMockup}
                  alt="Leadfy — plataforma de prospecção e venda de apps"
                  className="relative rounded-xl md:rounded-2xl border border-border/20 shadow-2xl w-full"
                  loading="eager"
                />
                <div className="absolute bottom-0 left-0 right-0 h-16 md:h-32 bg-gradient-to-t from-[hsl(207,58%,11%)] to-transparent rounded-b-xl md:rounded-b-2xl" />
              </div>
            </div>

            <div className="lg:col-span-2 order-1 lg:order-2">
              <p className="text-[10px] md:text-xs text-primary font-semibold uppercase tracking-wider mb-2 md:mb-3 text-center lg:text-left">
                🤖 IA criando um app em tempo real
              </p>
              <AICodeAnimation />
              <div className="mt-3 md:mt-4 glass-card p-3 md:p-4 border-primary/20">
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <p className="text-[10px] md:text-xs text-muted-foreground">
                    <span className="text-foreground font-semibold">247 pessoas</span> criando apps agora
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
