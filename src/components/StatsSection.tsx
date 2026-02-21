import { useEffect, useRef, useState } from "react";
import AnimatedSection from "./AnimatedSection";

const stats = [
  { value: 500, suffix: "+", label: "Pessoas usando o Leadfy para vender apps" },
  { value: 2, suffix: "K+", label: "Ticket médio por app vendido (R$)" },
  { value: 15, suffix: " min", label: "Por dia para prospectar clientes" },
  { value: 98, suffix: "%", label: "De satisfação entre os usuários" },
];

function useCountUp(target: number, isVisible: boolean, duration = 2000) {
  const [count, setCount] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (!isVisible || started.current) return;
    started.current = true;

    const startTime = performance.now();
    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [isVisible, target, duration]);

  return count;
}

const StatItem = ({ value, suffix, label, isVisible, delay }: { value: number; suffix: string; label: string; isVisible: boolean; delay: number }) => {
  const count = useCountUp(value, isVisible, 2000 + delay);

  return (
    <div className="text-center">
      <div className="font-display text-4xl md:text-5xl font-extrabold gradient-text mb-2">
        {count}
        <span>{suffix}</span>
      </div>
      <p className="text-muted-foreground text-sm">{label}</p>
    </div>
  );
};

const StatsSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="section-spacing" ref={ref}>
      <div className="container max-w-5xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-14">
            <p className="text-primary font-semibold mb-3 uppercase tracking-wider text-xs md:text-sm">
              Resultados Reais
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-3">
              Números que <span className="gradient-text">falam por si</span>
            </h2>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <AnimatedSection key={i} delay={i * 150}>
              <StatItem {...s} isVisible={isVisible} delay={i * 200} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
