import { ReactNode } from "react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

interface Props {
  children: ReactNode;
  className?: string;
  delay?: number;
  animation?: "fade-up" | "fade-in" | "scale-up" | "slide-left" | "slide-right";
}

const AnimatedSection = ({ children, className = "", delay = 0, animation = "fade-up" }: Props) => {
  const { ref, isVisible } = useScrollAnimation(0.08);

  const animations = {
    "fade-up": {
      hidden: "opacity-0 translate-y-[24px] scale-[0.98]",
      visible: "opacity-100 translate-y-0 scale-100",
    },
    "fade-in": {
      hidden: "opacity-0 scale-[0.97]",
      visible: "opacity-100 scale-100",
    },
    "scale-up": {
      hidden: "opacity-0 scale-[0.92]",
      visible: "opacity-100 scale-100",
    },
    "slide-left": {
      hidden: "opacity-0 translate-x-[30px]",
      visible: "opacity-100 translate-x-0",
    },
    "slide-right": {
      hidden: "opacity-0 -translate-x-[30px]",
      visible: "opacity-100 translate-x-0",
    },
  };

  const anim = animations[animation];

  return (
    <div
      ref={ref}
      className={`transition-all ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isVisible ? anim.visible : anim.hidden
      } ${className}`}
      style={{
        transitionDuration: "700ms",
        transitionDelay: `${delay}ms`,
        willChange: isVisible ? "auto" : "transform, opacity",
      }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
