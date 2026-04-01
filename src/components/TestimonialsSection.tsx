import { Star, Quote } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import AnimatedCounter from "./AnimatedCounter";

const testimonials = [
  {
    name: "Rafael O.",
    role: "R$ 8K no 1º mês",
    text: "Em 2 semanas fechei 3 clientes. Os prompts prontos são absurdos — eu sabia exatamente o que dizer.",
  },
  {
    name: "Ana Paula L.",
    role: "Nunca programou",
    text: "Criei meu primeiro app em 20 minutos e fechei um cliente por R$ 3.500 em 10 dias.",
  },
  {
    name: "Bruno M.",
    role: "Dobrou em 3 meses",
    text: "15 minutos por dia prospectando. Faturamento dobrou em 3 meses.",
  },
  {
    name: "Juliana C.",
    role: "R$ 12K/mês em 6 semanas",
    text: "Já tentei de tudo. Com o Leadfy, fecho 2 a 3 clientes por semana.",
  },
];

const stats = [
  { value: 500, suffix: "+", label: "Pessoas faturando" },
  { value: 10, suffix: "K", label: "Ticket médio (R$)" },
  { value: 98, suffix: "%", label: "Taxa de renovação" },
];

const TestimonialsSection = () => {
  return (
    <section className="section-spacing">
      <div className="section-gradient-divider -mt-14 mb-0" />
      <div className="container max-w-5xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-8 md:mb-10">
            <h2 className="font-display text-2xl sm:text-3xl md:text-5xl font-bold mb-3">
              Quem usa, <span className="gradient-text">fatura.</span>
            </h2>
          </div>
        </AnimatedSection>

        {/* Stats inline */}
        <AnimatedSection delay={50}>
          <div className="grid grid-cols-3 gap-4 mb-8 md:mb-10">
            {stats.map((s, i) => (
              <div key={i} className="text-center">
                <div className="font-display text-3xl md:text-4xl font-extrabold gradient-text mb-1">
                  <AnimatedCounter end={s.value} suffix={s.suffix} />
                </div>
                <p className="text-muted-foreground text-xs md:text-sm">{s.label}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
          {testimonials.map((t, i) => (
            <AnimatedSection key={i} delay={100 + i * 100}>
              <div className="glass-card p-5 md:p-6 hover-card-glow group relative h-full">
                <Quote className="absolute top-4 right-4 w-6 h-6 text-primary/10" />
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className="w-3.5 h-3.5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-foreground/90 leading-relaxed mb-4 text-sm">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-primary-foreground font-bold text-xs">
                    {t.name.split(" ").map(n => n[0]).join("")}
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{t.name}</p>
                    <p className="text-primary text-xs font-semibold">{t.role}</p>
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
