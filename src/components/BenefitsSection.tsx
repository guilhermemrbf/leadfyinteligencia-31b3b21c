import { Search, Mail, TrendingUp, Users, Sparkles, Shield } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const benefits = [
  { icon: Sparkles, title: "Crie apps sem programar", desc: "Use IA para gerar apps funcionais em minutos, sem escrever uma linha de código." },
  { icon: Search, title: "Encontre empresas automaticamente", desc: "O sistema busca leads qualificados no seu nicho todos os dias." },
  { icon: Mail, title: "Mensagens de venda prontas", desc: "Abordagens testadas e personalizadas por nicho que geram respostas." },
  { icon: TrendingUp, title: "Prospecção rápida e previsível", desc: "Saiba exatamente o que fazer todo dia para fechar clientes." },
  { icon: Users, title: "Funciona para iniciantes", desc: "Não precisa de experiência em vendas ou programação para começar." },
  { icon: Shield, title: "Método validado", desc: "Centenas de pessoas já estão faturando com apps usando o Leadfy." },
];

const BenefitsSection = () => {
  return (
    <section id="beneficios" className="section-spacing">
      <div className="container max-w-5xl mx-auto text-center">
        <AnimatedSection>
          <p className="text-primary font-semibold mb-3 uppercase tracking-wider text-xs md:text-sm">
            Benefícios
          </p>
          <h2 className="font-display text-2xl sm:text-3xl md:text-5xl font-bold mb-10 md:mb-14">
            Tudo que você precisa para{" "}
            <span className="gradient-text">criar, vender e faturar</span>
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {benefits.map((b, i) => (
            <AnimatedSection key={i} delay={i * 80}>
              <div className="glass-card p-5 md:p-6 text-left hover-card-glow hover-inner-glow group h-full">
                <div className="w-11 h-11 md:w-12 md:h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:shadow-[0_0_16px_hsl(199_75%_48%/0.25)] transition-all duration-300">
                  <b.icon className="w-5 h-5 md:w-6 md:h-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="font-semibold text-base md:text-lg mb-1.5 md:mb-2 group-hover:text-primary transition-colors duration-300">{b.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{b.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
