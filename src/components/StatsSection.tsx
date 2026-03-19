import AnimatedSection from "./AnimatedSection";
import AnimatedCounter from "./AnimatedCounter";

const stats = [
  { value: 500, suffix: "+", label: "Pessoas faturando com o Leadfy nos últimos 12 meses" },
  { value: 10, suffix: "K", label: "Ticket médio por app vendido (R$)" },
  { value: 15, suffix: " min", label: "Por dia para fechar clientes novos" },
  { value: 98, suffix: "%", label: "Dos clientes renovam — quase ninguém cancela" },
];

const StatsSection = () => {
  return (
    <section className="section-spacing">
      <div className="section-gradient-divider -mt-14 mb-0" />
      <div className="container max-w-5xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-14">
            <p className="text-primary font-semibold mb-3 uppercase tracking-wider text-xs md:text-sm">
              📊 Resultados Reais
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-3">
              Números que <span className="gradient-text">provam que funciona</span>
            </h2>
            <p className="text-muted-foreground text-sm md:text-base max-w-xl mx-auto">
              Não é promessa. São fatos de quem já está dentro do sistema.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <AnimatedSection key={i} delay={i * 120}>
              <div className="text-center">
                <div className="font-display text-4xl md:text-5xl font-extrabold gradient-text mb-2">
                  <AnimatedCounter end={s.value} suffix={s.suffix} />
                </div>
                <p className="text-muted-foreground text-sm">{s.label}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
