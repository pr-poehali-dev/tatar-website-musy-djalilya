import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const sections = [
  { id: "tormysh", title: "Тормыш юлы", subtitle: "Тормышы · Балачагы · Укуы", desc: "Тормышы, балачагы, укуы һәм формалашуы", path: "/tormysh" },
  { id: "shakhsi", title: "Шәхси тормышы", subtitle: "Гаиләсе", desc: "Якыннары, мәхәббәте, шәхси дөньясы", path: "/shakhsi" },
  { id: "ijat", title: "Иҗат", subtitle: "Иҗади мирасы", desc: "Иҗади мирасы, әсәрләре, темалары", path: "/ijat" },
  { id: "sugish", title: "Сугыш юлы һәм әсирлек", subtitle: "1941–1944", desc: "Фронт, яралануы, немец лагерьлары", path: "/sugish" },
  { id: "moabit", title: "Моабит дәфтәрләре", subtitle: "106 шигырь", desc: "Төрмәдә язылган шигырьлар — мәңгелек ядкарь", path: "/moabit" },
  { id: "jalilchelar", title: "Җәлилчеләр", subtitle: "Герой дуслар", desc: "Аның белән бергә хөкем ителгән каһарманнар", path: "/jalilchelar" },
  { id: "bugen", title: "Бүгенге көн", subtitle: "Музейлар · Монументлар · Заманча ресурслар", desc: "Музейлар, монументлар, бүгенге буын", path: "/bugen" },
];

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const sectionsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSections = () => {
    sectionsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white text-[#1a1a1a]" style={{ fontFamily: "'Golos Text', sans-serif" }}>

      {/* NAV */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur-sm border-b border-[#e5e5e5]" : "bg-transparent"}`}>
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 flex items-center justify-between h-16">
          <Link to="/" className="font-body text-[13px] tracking-[0.15em] uppercase text-[#1a1a1a] font-medium">
            Муса Җәлил
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {sections.map((s) => (
              <Link
                key={s.id}
                to={s.path}
                className="nav-link font-body text-[13px] tracking-[0.05em] text-[#555] hover:text-[#1a1a1a] transition-colors"
              >
                {s.title}
              </Link>
            ))}
          </div>

          {/* Mobile burger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Меню"
          >
            <span className={`block h-px w-6 bg-[#1a1a1a] transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
            <span className={`block h-px w-6 bg-[#1a1a1a] transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block h-px w-6 bg-[#1a1a1a] transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t border-[#e5e5e5] px-6 py-6 flex flex-col gap-5">
            {sections.map((s) => (
              <Link
                key={s.id}
                to={s.path}
                onClick={() => setMenuOpen(false)}
                className="font-body text-[15px] text-[#1a1a1a] tracking-[0.03em] flex items-center justify-between"
              >
                {s.title}
                <Icon name="ArrowRight" size={16} />
              </Link>
            ))}
          </div>
        )}
      </nav>

      {/* HERO */}
      <section className="pt-16 min-h-screen flex flex-col items-center justify-center px-6 md:px-12">
        <div className="w-full max-w-[1200px] flex flex-col items-center text-center py-24">

          {/* Portrait */}
          <div className="w-52 h-52 md:w-64 md:h-64 rounded-full overflow-hidden border border-[#e5e5e5] mb-10 animate-fade-in"
            style={{ animationDelay: "0s" }}>
            <img
              src="https://cdn.poehali.dev/files/c0dc499f-1408-45cc-b2c9-2f062230ba22.jpg"
              alt="Муса Җәлил — балачак"
              className="w-full h-full object-cover grayscale"
            />
          </div>

          {/* Subtitle above */}
          <p className="font-body text-[11px] md:text-[13px] tracking-[0.3em] uppercase text-[#888] mb-4 animate-fade-up"
            style={{ animationDelay: "0.1s", opacity: 0 }}>
            үз халкын данлаган татарлар:
          </p>

          {/* Main title */}
          <h1
            className="font-display text-[64px] md:text-[96px] lg:text-[120px] leading-none tracking-tight text-[#1a1a1a] uppercase animate-fade-up"
            style={{ animationDelay: "0.2s", opacity: 0, fontWeight: 600 }}
          >
            Муса Җәлил
          </h1>

          {/* Red subtitle */}
          <p
            className="font-body text-[11px] md:text-[13px] tracking-[0.25em] uppercase mt-4 animate-fade-up"
            style={{ animationDelay: "0.3s", opacity: 0, color: "#c0392b", fontWeight: 300, letterSpacing: "0.3em" }}
          >
            Татар шагыйре&nbsp;·&nbsp;Советлар Союзы Герое
          </p>

          {/* Divider */}
          <div className="w-12 h-px bg-[#c0392b] mt-10 mb-10 animate-fade-in" style={{ animationDelay: "0.4s", opacity: 0 }} />

          {/* Quote */}
          <blockquote
            className="font-display text-[18px] md:text-[22px] lg:text-[26px] italic text-[#555] max-w-2xl leading-relaxed animate-fade-up"
            style={{ animationDelay: "0.5s", opacity: 0, fontWeight: 300 }}
          >
            «Гомерем минем моңлы бер җыр иде,<br />
            үлемем дә яңрар җыр булып...»
          </blockquote>

          {/* Scroll hint */}
          <button
            onClick={scrollToSections}
            className="mt-14 flex flex-col items-center gap-2 text-[#aaa] hover:text-[#c0392b] transition-colors animate-fade-up cursor-pointer"
            style={{ animationDelay: "0.7s", opacity: 0 }}
            aria-label="Бүлекләргә күч"
          >
            <span className="font-body text-[11px] tracking-[0.25em] uppercase">Бүлекләр</span>
            <Icon name="ChevronDown" size={18} />
          </button>
        </div>
      </section>

      {/* SECTIONS MENU */}
      <section ref={sectionsRef} className="w-full px-6 md:px-12 pb-24 pt-4">
        <div className="max-w-[1200px] mx-auto">
          <p className="font-body text-[11px] tracking-[0.25em] uppercase text-[#aaa] mb-8">
            Тематик бүлекләр
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#e5e5e5]">
            {sections.map((s, i) => (
              <Link
                key={s.id}
                to={s.path}
                className="section-card group px-6 py-8 flex flex-col items-center text-center gap-2 bg-white"
                style={{ animationDelay: `${i * 0.07}s` }}
              >
                <span className="font-body text-[11px] tracking-[0.2em] uppercase text-[#aaa]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="font-display text-[22px] md:text-[26px] text-[#1a1a1a] mt-1 leading-tight" style={{ fontWeight: 500 }}>
                  {s.title}
                </h2>
                <p className="font-body text-[12px] text-[#c0392b] tracking-wide mt-0.5">{s.subtitle}</p>
                <p className="font-body text-[13px] text-[#888] leading-snug mt-1">{s.desc}</p>
                <Icon
                  name="ArrowUpRight"
                  size={16}
                  className="text-[#ccc] group-hover:text-[#c0392b] transition-colors mt-1"
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#111] px-6 md:px-12 py-8">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
          <p className="font-body text-[12px] text-[#777] tracking-wide">
            © 2026 — Татар мәдәниятен өйрәнү һәм үстерү проекты. Лилия Кәримова.
          </p>
          <div className="w-4 h-px bg-[#c0392b]" />
        </div>
      </footer>
    </div>
  );
}