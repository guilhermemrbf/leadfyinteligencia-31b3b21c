import AnimatedSection from "./AnimatedSection";

const testimonials = [
  {
    quote: "Em 3 semanas a Leadfy dobrou nosso volume de reuniões qualificadas. Nunca tinha visto resultado tão rápido.",
    name: "Rafael M.",
    role: "Diretor Comercial",
    company: "TechVenda",
  },
  {
    quote: "Paramos de queimar dinheiro em leads ruins. Hoje nosso CAC caiu 40% e o time de vendas está feliz.",
    name: "Camila S.",
    role: "CEO",
    company: "Agência Pulse",
  },
  {
    quote: "A estratégia deles é diferente. Não é só tráfego — é inteligência de verdade.",
    name: "Bruno T.",
    role: "Sócio",
    company: "Grupo Escala",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="section-spacing">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-center mb-16">
            Quem usou, não volta atrás
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {testimonials.map((t, i) => (
            <AnimatedSection key={i} delay={i * 100}>
              <div className="glass-card p-6 md:p-8 h-full flex flex-col hover:border-primary/20 transition-all duration-300 hover:-translate-y-1">
                <p className="text-foreground/90 leading-relaxed mb-6 flex-1">
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-bold text-sm">
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}, {t.company}</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
