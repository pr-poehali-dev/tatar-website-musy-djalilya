import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Icon from "@/components/ui/icon";

const NAV_ITEMS = [
  { path: "/tormysh", label: "Тормыш юлы", num: "01" },
  { path: "/shakhsi", label: "Шәхси тормышы", num: "02" },
  { path: "/ijat", label: "Иҗат", num: "03" },
  { path: "/sugish", label: "Сугыш юлы", num: "04" },
  { path: "/moabit", label: "Моабит дәфтәрләре", num: "05" },
  { path: "/jalilchelar", label: "Җәлилчеләр", num: "06" },
  { path: "/bugen", label: "Бүгенге көн", num: "07" },
  { path: "/photogallery", label: "Фотогалерея", num: "" },
];

export default function SiteNav() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[#e5e5e5]"
        style={{ fontFamily: "'Golos Text', sans-serif" }}
      >
        <div className="max-w-[1200px] mx-auto px-8 md:px-16 lg:px-24 flex items-center justify-between h-16">
          <Link
            to="/"
            className="font-body text-[13px] tracking-[0.15em] uppercase text-[#1a1a1a] hover:text-[#c0392b] transition-colors"
            style={{ fontWeight: 500 }}
          >
            Муса Җәлил
          </Link>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => {
              const active = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-3 py-1.5 rounded-md font-body text-[11px] tracking-[0.05em] transition-colors whitespace-nowrap ${
                    active
                      ? "text-[#c0392b] bg-[#fdf2f1]"
                      : "text-[#555] hover:text-[#1a1a1a] hover:bg-[#f5f5f5]"
                  }`}
                >
                  {item.num && (
                    <span className="text-[#aaa] mr-1">{item.num}</span>
                  )}
                  {item.label}
                </Link>
              );
            })}
          </div>

          {/* Mobile burger */}
          <button
            className="md:hidden flex flex-col gap-[5px] p-2"
            onClick={() => setOpen(!open)}
            aria-label="Меню"
          >
            <span
              className={`block w-5 h-px bg-[#1a1a1a] transition-all duration-200 ${open ? "rotate-45 translate-y-[6px]" : ""}`}
            />
            <span
              className={`block w-5 h-px bg-[#1a1a1a] transition-all duration-200 ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`block w-5 h-px bg-[#1a1a1a] transition-all duration-200 ${open ? "-rotate-45 -translate-y-[6px]" : ""}`}
            />
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden border-t border-[#e5e5e5] bg-white/98 backdrop-blur-sm">
            <div className="max-w-[1200px] mx-auto px-8 py-4 flex flex-col gap-1">
              {NAV_ITEMS.map((item) => {
                const active = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setOpen(false)}
                    className={`flex items-center gap-3 px-3 py-2.5 rounded-md font-body text-[13px] transition-colors ${
                      active
                        ? "text-[#c0392b] bg-[#fdf2f1]"
                        : "text-[#333] hover:text-[#1a1a1a] hover:bg-[#f5f5f5]"
                    }`}
                  >
                    {item.num ? (
                      <span className="text-[#aaa] text-[11px] w-5 flex-shrink-0">{item.num}</span>
                    ) : (
                      <span className="w-5 flex-shrink-0" />
                    )}
                    {item.label}
                    {active && (
                      <span className="ml-auto w-1 h-1 rounded-full bg-[#c0392b]" />
                    )}
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
