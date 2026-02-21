import { AlertTriangle } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const pains = [
  "Quer criar apps mas não sabe programar — e acha que precisa de anos de estudo.",
  "Não faz ideia de que tipo de app criar ou qual nicho escolher para ganhar dinheiro.",
  "Já tentou abordar empresas, mas desistiu porque não sabe o que dizer.",
  "Depende de indicações, sorte ou anúncios caros que não convertem.",
  "A prospecção parece um bicho de sete cabeças e trava todo o seu faturamento.",
  "Vê outros vendendo apps e pensa: 'por que eu não consigo fazer o mesmo?'",
];

const PainSection = () => {
  return (
    <section className="section-spacing">
      <div className="container max-w-4xl mx-auto text-center">
        <AnimatedSection>
          <p className="text-primary font-semibold mb-3 uppercase tracking-wider text-xs md:text-sm">
            O Problema
          </p>
          <h2 className="font-display text-2xl sm:text-3xl md:text-5xl font-bold mb-5 md:mb-6">
            Você quer faturar com apps, mas{" "}
            <span className="gradient-text">não sabe por onde começar.</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg mb-10 md:mb-12 max-w-2xl mx-auto">
            A maioria das pessoas trava por falta de método — não por falta de capacidade. 
            Sem um sistema, até quem domina a tecnologia fica sem clientes.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
          {pains.map((pain, i) => (
            <AnimatedSection key={i} delay={i * 100}>
              <div className="glass-card p-5 md:p-6 text-left flex items-start gap-3 md:gap-4 h-full hover-card-glow hover-inner-glow group">
                <AlertTriangle className="w-5 h-5 text-primary mt-0.5 shrink-0 group-hover:scale-110 transition-transform duration-300" />
                <p className="text-foreground/90 text-sm md:text-base">{pain}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainSection;
