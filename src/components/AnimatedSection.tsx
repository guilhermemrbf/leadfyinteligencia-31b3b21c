import { ReactNode } from "react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

interface Props {
  children: ReactNode;
  className?: string;
  delay?: number;
  animation?: "fade-up" | "scale-in" | "fade-in";
}

const AnimatedSection = ({ children, className = "", delay = 0, animation = "fade-up" }: Props) => {
  const { ref, isVisible } = useScrollAnimation(0.08);

  const animations = {
    "fade-up": {
      visible: "opacity-100 translate-y-0",
      hidden: "opacity-0 translate-y-6",
    },
    "scale-in": {
      visible: "opacity-100 scale-100",
      hidden: "opacity-0 scale-[0.96]",
    },
    "fade-in": {
      visible: "opacity-100",
      hidden: "opacity-0",
    },
  };

  const anim = animations[animation];

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isVisible ? anim.visible : anim.hidden
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
