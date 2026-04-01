import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

export default function Bugen() {
  return (
    <div className="min-h-screen bg-white text-[#1a1a1a]" style={{ fontFamily: "'Golos Text', sans-serif" }}>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[#e5e5e5]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 font-body text-[13px] tracking-[0.1em] text-[#555] hover:text-[#1a1a1a] transition-colors">
            <Icon name="ArrowLeft" size={15} />
            Муса Җәлил
          </Link>
          <span className="font-body text-[12px] tracking-[0.15em] uppercase text-[#aaa]">07</span>
        </div>
      </nav>
      <header className="pt-28 pb-12 px-6 md:px-12">
        <div className="max-w-[1200px] mx-auto">
          <p className="font-body text-[11px] tracking-[0.3em] uppercase text-[#aaa] mb-4">07 — Бүгенге көн</p>
          <h1 className="font-display text-[48px] md:text-[72px] lg:text-[88px] leading-none text-[#1a1a1a] mb-6" style={{ fontWeight: 500 }}>
            Бүгенге көн
          </h1>
          <div className="flex items-center gap-4">
            <div className="w-8 h-px bg-[#c0392b]" />
            <span className="font-body text-[13px] text-[#888] tracking-wide">Музейлар · Монументлар · Заманча ресурслар</span>
          </div>
        </div>
      </header>
      <main className="px-6 md:px-12 pb-24">
        <div className="max-w-[900px] mx-auto">
          <p className="font-body text-[16px] md:text-[17px] leading-[1.85] text-[#333] mb-5">
            Муса Җəлил исеме бүген дə яши — монументларда, музейларда, мəдрəсəлəрдə, мəктəплəрдə.
          </p>
          <p className="font-body text-[16px] md:text-[17px] leading-[1.85] text-[#333] mb-5">
            1966 елда Кремль янында Муса Җəлилгə həйкəл ачыла. Скульпторы — В.Е.Цигаль. Казан Кремлендə Муса Җəлил музее эшли. Аның əсəрлəре дөньяның йөздəн артык теленə тəрҗемə ителгəн.
          </p>
          <p className="font-body text-[16px] md:text-[17px] leading-[1.85] text-[#333] mb-5">
            Ел саен Татарстанда шагыйрьнең туган көнен — 15 февральне — олы бəйрəм итеп үткəрəлəр. 1968 елда «Ленфильм» студиясендə «Моабит дəфтəре» фильмы төшерелə.
          </p>
          <div className="border-t border-[#e5e5e5] mt-12 pt-10 flex items-center justify-between">
            <Link to="/jalilchelar" className="flex items-center gap-2 font-body text-[13px] text-[#888] hover:text-[#1a1a1a] transition-colors">
              <Icon name="ArrowLeft" size={15} />
              Җәлилчеләр
            </Link>
            <Link to="/" className="flex items-center gap-2 font-body text-[13px] text-[#888] hover:text-[#1a1a1a] transition-colors">
              Баш бит
              <Icon name="ArrowRight" size={15} />
            </Link>
          </div>
        </div>
      </main>
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
