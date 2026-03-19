import { useState, useEffect } from "react";
import LeadfyLogo from "@/components/LeadfyLogo";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Início", href: "#" },
  { label: "Como Funciona", href: "#como-funciona" },
  { label: "Recursos", href: "#funcionalidades" },
  { label: "Planos", href: "#preco" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-5xl">
      <div
        className={`border border-border/40 rounded-2xl px-5 py-3 flex items-center justify-between transition-all duration-300 ${
          scrolled
            ? "backdrop-blur-2xl bg-background/80 shadow-lg shadow-background/20"
            : "backdrop-blur-xl bg-background/40"
        }`}
      >
        <a href="/" className="flex items-center animate-fade-up">
          <LeadfyLogo className="h-8" />
        </a>

        <div className="hidden md:flex items-center gap-1">
          {links.map((l, i) => (
            <a
              key={l.label}
              href={l.href}
              className="nav-link-animated text-sm text-muted-foreground hover:text-foreground px-4 py-2 rounded-lg hover:bg-muted/40 transition-all duration-200 animate-fade-up"
              style={{ animationDelay: `${(i + 1) * 80}ms` }}
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="#preco"
            className="hidden sm:inline-flex bg-primary text-primary-foreground font-semibold text-sm px-5 py-2.5 rounded-xl hover:brightness-110 transition-all duration-300 animate-fade-up"
            style={{ animationDelay: "400ms" }}
          >
            Começar agora
          </a>
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden mt-2 backdrop-blur-2xl bg-background/80 border border-border/40 rounded-2xl p-4 space-y-1">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block text-sm text-muted-foreground hover:text-foreground px-4 py-3 rounded-lg hover:bg-muted/40 transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#preco"
            onClick={() => setOpen(false)}
            className="block text-center bg-primary text-primary-foreground font-semibold text-sm px-5 py-3 rounded-xl mt-2"
          >
            Começar agora
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
