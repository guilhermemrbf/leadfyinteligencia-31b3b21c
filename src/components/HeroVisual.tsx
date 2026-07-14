import { Sparkles, TrendingUp, Zap, MessageSquare, CheckCircle2 } from "lucide-react";

const HeroVisual = () => {
  return (
    <div className="relative w-full aspect-[4/3] md:aspect-[16/11]">
      {/* Ambient glow */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 via-transparent to-accent/10 blur-2xl scale-105" />

      {/* Main "window" */}
      <div className="relative h-full w-full glass-card border-beam overflow-hidden rounded-2xl">
        {/* Window chrome */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-border/60 bg-background/40">
          <span className="w-2.5 h-2.5 rounded-full bg-destructive/70" />
          <span className="w-2.5 h-2.5 rounded-full bg-warning/70" style={{ background: "hsl(38 96% 58% / 0.7)" }} />
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: "hsl(158 65% 48% / 0.7)" }} />
          <div className="ml-3 flex items-center gap-2 text-[10px] font-mono text-muted-foreground">
            <Sparkles className="w-3 h-3 text-primary" />
            leadfy.app / dashboard
          </div>
        </div>

        {/* Body grid */}
        <div className="grid grid-cols-5 gap-3 p-4 h-[calc(100%-2.75rem)]">
          {/* Sidebar */}
          <div className="col-span-1 hidden md:flex flex-col gap-2">
            {["Dashboard", "Prospector", "IA Studio", "Mensagens", "Vendas"].map((s, i) => (
              <div
                key={s}
                className={`text-[10px] font-mono px-2 py-1.5 rounded-md border ${
                  i === 1
                    ? "border-primary/40 bg-primary/10 text-foreground"
                    : "border-border/50 text-muted-foreground"
                }`}
              >
                {s}
              </div>
            ))}
          </div>

          {/* Main panel */}
          <div className="col-span-5 md:col-span-4 flex flex-col gap-3">
            {/* KPI row */}
            <div className="grid grid-cols-3 gap-2">
              <Kpi label="Leads" value="128" delta="+42%" delay={0} icon={<TrendingUp className="w-3 h-3" />} />
              <Kpi label="Apps criados" value="17" delta="+9" delay={0.4} icon={<Zap className="w-3 h-3" />} />
              <Kpi label="Fechados" value="R$ 12.4k" delta="+R$ 3.2k" delay={0.8} icon={<CheckCircle2 className="w-3 h-3" />} />
            </div>

            {/* Chart */}
            <div className="flex-1 rounded-lg border border-border/60 bg-background/40 p-3 relative overflow-hidden">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider">
                  Faturamento — últimos 30 dias
                </span>
                <span className="text-[10px] font-mono text-primary">R$ 12.400</span>
              </div>
              <div className="flex items-end gap-1 h-[calc(100%-1.75rem)]">
                {Array.from({ length: 22 }).map((_, i) => {
                  const h = 20 + Math.sin(i / 2) * 25 + (i / 22) * 55 + Math.random() * 10;
                  return (
                    <div
                      key={i}
                      className="flex-1 rounded-t-sm animate-bar-grow"
                      style={{
                        height: `${Math.min(h, 100)}%`,
                        background: "linear-gradient(180deg, hsl(243 76% 62%), hsl(258 82% 66%))",
                        opacity: 0.85,
                        animationDelay: `${i * 60}ms`,
                        transformOrigin: "bottom",
                      }}
                    />
                  );
                })}
              </div>
              {/* Sweep light */}
              <div className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 animate-hero-sweep"
                style={{ background: "linear-gradient(90deg, transparent, hsl(258 82% 76% / 0.15), transparent)" }}
              />
            </div>

            {/* Live message */}
            <div className="rounded-lg border border-primary/30 bg-primary/5 px-3 py-2 flex items-center gap-2 animate-fade-up" style={{ animationDelay: "600ms" }}>
              <MessageSquare className="w-3.5 h-3.5 text-primary shrink-0" />
              <p className="text-[10px] md:text-xs text-foreground/90 truncate">
                <span className="font-mono text-primary">IA:</span> "Olá João, montei um app pro seu restaurante em 2min…"
              </p>
              <span className="ml-auto flex items-center gap-1 text-[9px] font-mono text-muted-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                enviado
              </span>
            </div>
          </div>
        </div>

        {/* Floating notification card */}
        <div className="absolute -bottom-3 -right-3 md:-bottom-4 md:-right-4 glass-card border-primary/40 p-3 md:p-4 shadow-2xl animate-float"
          style={{ boxShadow: "0 20px 40px hsl(243 76% 62% / 0.25)" }}>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full gradient-cosmic flex items-center justify-center">
              <CheckCircle2 className="w-4 h-4 text-primary-foreground" />
            </div>
            <div>
              <p className="text-[10px] md:text-xs font-bold text-foreground">Nova venda!</p>
              <p className="text-[9px] md:text-[10px] font-mono text-muted-foreground">+ R$ 2.997,00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Kpi = ({
  label,
  value,
  delta,
  icon,
  delay,
}: {
  label: string;
  value: string;
  delta: string;
  icon: React.ReactNode;
  delay: number;
}) => (
  <div className="rounded-lg border border-border/60 bg-background/40 p-2 md:p-3 animate-fade-up" style={{ animationDelay: `${delay}s` }}>
    <div className="flex items-center justify-between mb-1">
      <span className="text-[9px] md:text-[10px] font-mono text-muted-foreground uppercase tracking-wider">{label}</span>
      <span className="text-primary">{icon}</span>
    </div>
    <div className="font-display text-sm md:text-lg font-bold text-foreground leading-none">{value}</div>
    <div className="text-[9px] md:text-[10px] font-mono mt-1" style={{ color: "hsl(158 65% 48%)" }}>
      ▲ {delta}
    </div>
  </div>
);

export default HeroVisual;
