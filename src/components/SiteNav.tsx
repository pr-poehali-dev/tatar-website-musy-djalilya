import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Icon from "@/components/ui/icon";

const NAV_ITEMS = [
  { path: "/tormysh", label: "Тормыш юлы" },
  { path: "/shakhsi", label: "Шәхси тормышы" },
  { path: "/ijat", label: "Иҗат" },
  { path: "/sugish", label: "Сугыш юлы" },
  { path: "/moabit", label: "Моабит дәфтәрләре" },
  { path: "/jalilchelar", label: "Җәлилчеләр" },
  { path: "/bugen", label: "Бүгенге көн" },
  { path: "/photogallery", label: "Фотогалерея" },
];

export default function SiteNav() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[#e5e5e5]"
      style={{ fontFamily: "'Golos Text', sans-serif" }}
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 flex items-center justify-between h-16">
        <Link
          to="/"
          className="font-body text-[13px] tracking-[0.15em] uppercase text-[#1a1a1a] transition-colors"
          style={{ fontWeight: 500 }}
        >
          Муса Җәлил
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-4 lg:gap-6">
          {NAV_ITEMS.map((item) => {
            const active = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`font-body text-[11px] lg:text-[12px] tracking-[0.05em] transition-colors no-underline whitespace-nowrap ${
                  active
                    ? "text-[#1a1a1a] border-b border-[#1a1a1a] pb-px"
                    : "text-[#555] hover:text-[#1a1a1a]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        {/* Mobile burger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Меню"
        >
          <span className={`block h-px w-6 bg-[#1a1a1a] transition-all duration-300 ${open ? "rotate-45 translate-y-[7px]" : ""}`} />
          <span className={`block h-px w-6 bg-[#1a1a1a] transition-all duration-300 ${open ? "opacity-0" : ""}`} />
          <span className={`block h-px w-6 bg-[#1a1a1a] transition-all duration-300 ${open ? "-rotate-45 -translate-y-[7px]" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-[#e5e5e5] px-6 py-6 flex flex-col gap-5">
          {NAV_ITEMS.map((item) => {
            const active = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setOpen(false)}
                className={`font-body text-[15px] tracking-[0.03em] flex items-center justify-between no-underline transition-colors ${
                  active ? "text-[#1a1a1a]" : "text-[#555] hover:text-[#1a1a1a]"
                }`}
              >
                {item.label}
                <Icon name="ArrowRight" size={16} />
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
}
