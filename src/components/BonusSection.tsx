import { Gift } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const bonuses = [
  { name: "Abordagens Matadoras por Nicho", fake: "R$ 197" },
  { name: "Scripts de Venda que Fecham", fake: "R$ 147" },
  { name: "Guia: 1º Cliente em 7 Dias", fake: "R$ 97" },
  { name: "Modelos de Proposta", fake: "R$ 127" },
  { name: "Atualizações Vitalícias", fake: "R$ 297" },
];

const totalFake = bonuses.reduce((acc, b) => acc + parseInt(b.fake.replace(/\D/g, "")), 0);

const BonusSection = () => {
  return (
    <section className="section-spacing">
      <div className="section-gradient-divider -mt-14 mb-0" />
      <div className="container max-w-3xl mx-auto text-center">
        <AnimatedSection>
          <h2 className="font-display text-2xl sm:text-3xl md:text-5xl font-bold mb-3">
            <span className="gradient-text">R$ {totalFake} em bônus</span> — grátis
          </h2>
          <p className="text-muted-foreground mb-8 md:mb-10 text-sm md:text-base">
            Quem entra agora leva tudo incluso.
          </p>
        </AnimatedSection>

        <div className="space-y-2.5 md:space-y-3">
          {bonuses.map((b, i) => (
            <AnimatedSection key={i} delay={i * 80}>
              <div className="glass-card p-4 flex items-center justify-between gap-3 hover-card-glow group">
                <div className="flex items-center gap-3">
                  <Gift className="w-4 h-4 text-primary shrink-0" />
                  <span className="font-medium text-left text-sm">{b.name}</span>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <span className="text-muted-foreground line-through text-xs">{b.fake}</span>
                  <span className="text-primary font-bold text-sm">GRÁTIS</span>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BonusSection;
