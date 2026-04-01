import { XCircle } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const pains = [
  "Vê outros faturando R$ 10K/mês com apps — e continua parado.",
  "Não sabe programar e acha que isso te impede de começar.",
  "Não sabe qual nicho atacar, o que oferecer ou quanto cobrar.",
  "Aborda empresas sem método. Manda mensagem genérica. Zero respostas.",
];

const PainSection = () => {
  return (
    <section className="section-spacing">
      <div className="section-gradient-divider -mt-14 mb-0" />
      <div className="container max-w-4xl mx-auto text-center">
        <AnimatedSection>
          <h2 className="font-display text-2xl sm:text-3xl md:text-5xl font-bold mb-4">
            Se isso parece com você,{" "}
            <span className="text-destructive">o Leadfy resolve.</span>
          </h2>
          <p className="text-muted-foreground text-sm md:text-base mb-8 md:mb-10 max-w-xl mx-auto">
            O problema não é falta de talento — é falta de <strong className="text-foreground">método</strong>.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
          {pains.map((pain, i) => (
            <AnimatedSection key={i} delay={i * 100}>
              <div className="glass-card p-4 md:p-5 text-left flex items-start gap-3 h-full hover-card-glow group border-destructive/10 hover:border-destructive/25">
                <XCircle className="w-5 h-5 text-destructive mt-0.5 shrink-0" />
                <p className="text-foreground/90 text-sm">{pain}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainSection;
