import { useEffect, useState } from "react";
import { ArrowRight, Flame } from "lucide-react";

const StickyMobileCTA = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const doc = document.documentElement;
      const nearBottom = y + window.innerHeight >= doc.scrollHeight - 400;
      setVisible(y > 600 && !nearBottom);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`md:hidden fixed bottom-0 left-0 right-0 z-40 px-3 pb-3 pt-4 transition-all duration-500 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0 pointer-events-none"
      }`}
      style={{
        background: "linear-gradient(to top, hsl(var(--background)) 60%, transparent)",
      }}
    >
      <a
        href="#preco"
        className="flex items-center justify-center gap-2 cta-cosmic font-bold py-3.5 rounded-xl text-sm btn-shimmer w-full"
      >
        <Flame className="w-4 h-4" />
        GARANTIR MINHA VAGA
        <ArrowRight className="w-4 h-4" />
      </a>
    </div>
  );
};

export default StickyMobileCTA;
