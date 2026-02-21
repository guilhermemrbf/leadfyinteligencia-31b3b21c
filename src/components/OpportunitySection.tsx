import { TrendingUp, Building2, DollarSign, Laptop } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const opportunities = [
  {
    icon: Building2,
    value: "70%",
    label: "das empresas brasileiras ainda não têm um app próprio",
  },
  {
    icon: DollarSign,
    value: "R$ 2K–10K",
    label: "valor médio cobrado por um app simples para negócios",
  },
  {
    icon: Laptop,
    value: "15 min",
    label: "por dia para prospectar com o Leadfy",
  },
  {
    icon: TrendingUp,
    value: "3x",
    label: "mais clientes no 1º mês usando abordagens prontas",
  },
];

const OpportunitySection = () => {
  return (
    <section className="section-spacing">
      <div className="container max-w-5xl mx-auto text-center">
        <AnimatedSection>
          <p className="text-primary font-semibold mb-3 uppercase tracking-wider text-xs md:text-sm">
            A Oportunidade
          </p>
          <h2 className="font-display text-2xl sm:text-3xl md:text-5xl font-bold mb-4">
            O mercado de apps para empresas{" "}
            <span className="gradient-text">está explodindo</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg mb-10 md:mb-14 max-w-2xl mx-auto">
            Milhares de negócios precisam de um app e não sabem por onde começar. Quem souber criar e oferecer, vai dominar esse mercado.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {opportunities.map((o, i) => (
            <AnimatedSection key={i} delay={i * 100}>
              <div className="glass-card p-5 md:p-6 text-center hover-card-glow hover-inner-glow group h-full">
                <div className="w-11 h-11 md:w-12 md:h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 group-hover:shadow-[0_0_16px_hsl(199_75%_48%/0.25)] transition-all duration-300">
                  <o.icon className="w-5 h-5 md:w-6 md:h-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                </div>
                <p className="font-display text-2xl md:text-3xl font-extrabold gradient-text mb-1.5">
                  {o.value}
                </p>
                <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
                  {o.label}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OpportunitySection;
