import { Check, Star, ArrowRight, Flame, Shield, Clock, Brain, Search, Users } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const features = [
  "IA integrada da Leadfy para criar apps",
  "Prospector #1 do mercado — leads todos os dias",
  "Área de membros com método completo",
  "Abordagens prontas por nicho",
  "Painel ADM e gestão de contatos",
  "Domínio e marca própria",
  "Todos os bônus inclusos (R$ 865)",
  "Atualizações durante o ano",
];

const PricingSection = () => {
  return (
    <section id="preco" className="section-spacing">
      <div className="section-gradient-divider -mt-14 mb-0" />
      <div className="container max-w-5xl mx-auto text-center">
        <AnimatedSection>
          <div className="inline-flex items-center gap-2 border border-destructive/40 bg-destructive/10 px-4 py-1.5 rounded-full mb-6">
            <Clock className="w-3.5 h-3.5 text-destructive animate-pulse" />
            <span className="text-xs md:text-sm text-destructive font-bold">OFERTA POR TEMPO LIMITADO</span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl md:text-5xl font-bold mb-4">
            Quanto vale mudar de vida?
          </h2>
          <p className="text-muted-foreground mb-3 max-w-xl mx-auto text-sm md:text-base">
            Um único cliente paga <strong className="text-foreground">anos</strong> de Leadfy. Você está a uma decisão de distância.
          </p>
          <p className="text-primary font-semibold mb-10 md:mb-14 text-sm md:text-base">
            ⚡ Quem entra hoje garante o menor preço. Amanhã pode ser tarde.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 max-w-3xl mx-auto items-stretch">
          <AnimatedSection delay={0} className="flex">
            <div className="glass-card p-6 md:p-8 relative border-primary/50 hover-card-glow group flex flex-col w-full" style={{ boxShadow: "0 0 15px hsl(199 75% 48% / 0.15), 0 0 30px hsl(199 75% 48% / 0.08)" }}>
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                <span className="bg-primary text-primary-foreground text-xs font-bold px-4 py-1 rounded-full flex items-center gap-1 shadow-lg whitespace-nowrap">
                  <Flame className="w-3 h-3" /> Mais Escolhido
                </span>
              </div>
              <div className="text-center">
                <h3 className="font-display text-lg md:text-xl font-bold mb-1 mt-2">Plano Mensal</h3>
                <p className="text-muted-foreground text-sm mb-5 md:mb-6">Comece a faturar ainda hoje</p>
                <div className="mb-2">
                  <span className="text-muted-foreground line-through text-lg">R$ 97/mês</span>
                </div>
                <div className="mb-5 md:mb-6">
                  <span className="font-display text-4xl md:text-5xl font-extrabold">R$ 49</span>
                  <span className="text-xl md:text-2xl font-bold text-muted-foreground">,99</span>
                  <span className="text-muted-foreground">/mês</span>
                </div>
                <p className="text-xs text-primary font-semibold mb-5">🔥 Economia de 49% — só enquanto durar</p>
              </div>

              <div className="flex items-center justify-center gap-2 mb-5 flex-wrap">
                <span className="inline-flex items-center gap-1 text-[10px] font-bold text-primary bg-primary/10 px-2 py-1 rounded-full border border-primary/20">
                  <Brain className="w-3 h-3" /> IA Integrada
                </span>
                <span className="inline-flex items-center gap-1 text-[10px] font-bold text-primary bg-primary/10 px-2 py-1 rounded-full border border-primary/20">
                  <Search className="w-3 h-3" /> Prospector #1
                </span>
                <span className="inline-flex items-center gap-1 text-[10px] font-bold text-primary bg-primary/10 px-2 py-1 rounded-full border border-primary/20">
                  <Users className="w-3 h-3" /> Área de Membros
                </span>
              </div>

              <ul className="space-y-2.5 md:space-y-3 text-left mb-6 md:mb-8 flex-1">
                {features.map((f, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm">
                    <Check className="w-4 h-4 text-primary shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <div className="mt-auto">
                <a
                  href="https://pay.cakto.com.br/4fuejyf_776810"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-2 bg-primary text-primary-foreground font-bold py-3.5 md:py-4 rounded-xl text-center glow-primary btn-shimmer active:scale-[0.98] transition-all duration-300 text-base"
                >
                  🔥 GARANTIR MINHA VAGA AGORA
                  <ArrowRight className="w-4 h-4" />
                </a>
                <div className="flex items-center justify-center gap-2 mt-3">
                  <Shield className="w-3 h-3 text-muted-foreground" />
                  <p className="text-xs text-muted-foreground">Garantia de 7 dias — risco ZERO</p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={150} className="flex">
            <div className="glass-card p-6 md:p-8 hover-card-glow group relative overflow-visible flex flex-col w-full">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                <span className="bg-accent/20 text-accent text-xs font-bold px-4 py-1 rounded-full flex items-center gap-1 border border-accent/30 whitespace-nowrap">
                  💰 Melhor Custo-Benefício
                </span>
              </div>
              <div className="text-center">
                <h3 className="font-display text-lg md:text-xl font-bold mb-1 mt-2">Plano Anual</h3>
                <p className="text-muted-foreground text-sm mb-5 md:mb-6">Pague uma vez e use o ano todo.</p>
                <div className="mb-2">
                  <span className="text-muted-foreground line-through text-lg">R$ 497</span>
                </div>
                <div className="mb-5 md:mb-6">
                  <span className="font-display text-4xl md:text-5xl font-extrabold">R$ 180</span>
                  <span className="text-muted-foreground"> /ano</span>
                  <p className="text-base md:text-lg text-muted-foreground mt-2">
                    ou até <span className="font-bold text-foreground text-lg md:text-xl">12x</span> de <span className="font-bold text-foreground text-lg md:text-xl">R$ 18,60</span>
                  </p>
                </div>
                <p className="text-xs text-primary font-semibold mb-5">💎 Economia de 70% — 1 ano de acesso completo</p>
              </div>

              <div className="flex items-center justify-center gap-2 mb-5 flex-wrap">
                <span className="inline-flex items-center gap-1 text-[10px] font-bold text-primary bg-primary/10 px-2 py-1 rounded-full border border-primary/20">
                  <Brain className="w-3 h-3" /> IA Integrada
                </span>
                <span className="inline-flex items-center gap-1 text-[10px] font-bold text-primary bg-primary/10 px-2 py-1 rounded-full border border-primary/20">
                  <Search className="w-3 h-3" /> Prospector #1
                </span>
                <span className="inline-flex items-center gap-1 text-[10px] font-bold text-primary bg-primary/10 px-2 py-1 rounded-full border border-primary/20">
                  <Users className="w-3 h-3" /> Área de Membros
                </span>
              </div>

              <ul className="space-y-2.5 md:space-y-3 text-left mb-6 md:mb-8 flex-1">
                {features.map((f, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm">
                    <Check className="w-4 h-4 text-primary shrink-0" />
                    {f}
                  </li>
                ))}
                <li className="flex items-center gap-3 text-sm font-semibold text-primary">
                  <Check className="w-4 h-4 shrink-0" />
                  Acesso completo por 1 ano
                </li>
              </ul>

              <div className="mt-auto">
                <a
                  href="https://pay.cakto.com.br/cz2hi5z_776929"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-2 border-2 border-primary text-primary font-bold py-3.5 md:py-4 rounded-xl text-center hover:bg-primary hover:text-primary-foreground active:scale-[0.98] transition-all duration-300 text-base"
                >
                  💎 GARANTIR ACESSO ANUAL
                </a>
                <div className="flex items-center justify-center gap-2 mt-3">
                  <Shield className="w-3 h-3 text-muted-foreground" />
                  <p className="text-xs text-muted-foreground">Garantia de 7 dias — risco ZERO</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection delay={400}>
          <div className="mt-10 md:mt-14 max-w-2xl mx-auto">
            <p className="text-muted-foreground text-sm md:text-base">
              💡 <strong className="text-foreground">Pense assim:</strong> um único app vendido por R$ 2.000 já paga <strong className="text-foreground">mais de 10 anos</strong> de Leadfy anual. O retorno vem logo no primeiro cliente.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default PricingSection;
