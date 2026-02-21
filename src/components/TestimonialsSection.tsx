import { Star, Quote } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const testimonials = [
  {
    name: "Rafael Oliveira",
    role: "Desenvolvedor de Apps",
    text: "Em 2 semanas usando o Leadfy, fechei 3 clientes novos. Os prompts prontos fizeram toda a diferença — eu sabia o que dizer em cada abordagem.",
    stars: 5,
  },
  {
    name: "Ana Paula Lima",
    role: "Iniciante — nunca tinha programado",
    text: "Eu achava que precisava saber programar pra vender apps. Com o Leadfy, criei meu primeiro app com IA e fechei um cliente em 10 dias. Mudou minha vida.",
    stars: 5,
  },
  {
    name: "Bruno Mendes",
    role: "Fundador de Agência Digital",
    text: "O sistema é absurdamente simples. Em 15 minutos por dia eu encontro leads qualificados e envio mensagens personalizadas. Meu faturamento dobrou em 3 meses.",
    stars: 5,
  },
  {
    name: "Juliana Costa",
    role: "Freelancer — começou do zero",
    text: "Já tentei de tudo: anúncios, cold email genérico, indicações... Nada funcionava. Com o Leadfy eu finalmente tenho um método previsível e consigo fechar clientes toda semana.",
    stars: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="section-spacing">
      <div className="container max-w-6xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-10 md:mb-14">
            <p className="text-primary font-semibold mb-3 uppercase tracking-wider text-xs md:text-sm">
              Quem já usa, recomenda
            </p>
            <h2 className="font-display text-2xl sm:text-3xl md:text-5xl font-bold mb-4">
              Resultados reais de{" "}
              <span className="gradient-text">pessoas reais</span>
            </h2>
            <p className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto">
              De iniciantes a agências — veja quem já está faturando com o Leadfy.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {testimonials.map((t, i) => (
            <AnimatedSection key={i} delay={i * 100}>
              <div className="glass-card p-5 md:p-7 hover-card-glow hover-inner-glow group relative h-full">
                <Quote className="absolute top-5 right-5 md:top-6 md:right-6 w-7 h-7 md:w-8 md:h-8 text-primary/10 group-hover:text-primary/25 transition-all duration-300 group-hover:scale-110" />
                
                <div className="flex gap-1 mb-3 md:mb-4">
                  {Array.from({ length: t.stars }).map((_, j) => (
                    <Star key={j} className="w-3.5 h-3.5 md:w-4 md:h-4 fill-primary text-primary" />
                  ))}
                </div>
                
                <p className="text-foreground/90 leading-relaxed mb-4 md:mb-5 text-sm md:text-base">
                  "{t.text}"
                </p>
                
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-primary-foreground font-bold text-xs md:text-sm group-hover:shadow-[0_0_12px_hsl(199_75%_48%/0.4)] transition-shadow duration-300">
                    {t.name.split(" ").map(n => n[0]).join("")}
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{t.name}</p>
                    <p className="text-muted-foreground text-xs">{t.role}</p>
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
