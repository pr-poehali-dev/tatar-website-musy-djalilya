import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

export default function Shakhsi() {
  return (
    <div className="min-h-screen bg-white text-[#1a1a1a]" style={{ fontFamily: "'Golos Text', sans-serif" }}>

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[#e5e5e5]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 font-body text-[13px] tracking-[0.1em] text-[#555] hover:text-[#1a1a1a] transition-colors">
            <Icon name="ArrowLeft" size={15} />
            Муса Җәлил
          </Link>
          <span className="font-body text-[12px] tracking-[0.15em] uppercase text-[#aaa]">02</span>
        </div>
      </nav>

      {/* HEADER */}
      <header className="pt-28 pb-16 px-6 md:px-12">
        <div className="max-w-[1200px] mx-auto">
          <p className="font-body text-[11px] tracking-[0.3em] uppercase text-[#aaa] mb-4">02 — Шәхси тормышы</p>
          <h1
            className="font-display text-[48px] md:text-[72px] lg:text-[88px] leading-none text-[#1a1a1a] mb-6"
            style={{ fontWeight: 500 }}
          >
            Шәхси тормышы
          </h1>
          <div className="flex items-center gap-4">
            <div className="w-8 h-px bg-[#c0392b]" />
            <span className="font-body text-[13px] text-[#888] tracking-wide">Гаилә · Дуслар</span>
          </div>
        </div>
      </header>

      {/* CONTENT */}
      <main className="px-6 md:px-12 pb-24">
        <div className="max-w-[1200px] mx-auto">

          {/* Блок с фото и основным текстом */}
          <div className="mb-14 w-full">
            {/* Фото — место для портрета, float right */}
            <div className="float-right ml-8 mb-4 w-[220px] md:w-[260px] flex-shrink-0">
              <div className="overflow-hidden bg-[#f0ede8] border border-[#e5e5e5]" style={{ minHeight: "320px" }}>
                <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center" style={{ minHeight: "320px" }}>
                  <div className="w-12 h-12 rounded-full border border-[#d0ccc8] flex items-center justify-center mb-3">
                    <Icon name="Image" size={20} className="text-[#b0aca8]" />
                  </div>
                  <p className="font-body text-[11px] text-[#b0aca8] tracking-wide leading-snug">
                    Фото өстəргə мөмкин
                  </p>
                </div>
              </div>
              <p className="font-body text-[12px] text-[#888] leading-snug italic mt-2">
                Муса Җəлил. Шəхси архив
              </p>
            </div>

            <p className="font-body text-[16px] md:text-[17px] leading-[1.85] text-[#333] mb-5">
              1936 елның җəендə Муса икътисад техникумын тəмамлаган Əминə Сəйфуллинага өйлəнгəч, аның ике никахы һəм ике баласы – Альберт белəн Люция була.
            </p>
            <p className="font-body text-[16px] md:text-[17px] leading-[1.85] text-[#333] mb-5">
              1937 елның апрелендə Муса Җəлилнең кече кызы Чулпан туа.
            </p>
            <p className="font-body text-[16px] md:text-[17px] leading-[1.85] text-[#333] mb-5">
              Сугыш алдындагы еллар иҗат яктан иң бай, шəхси яктан иң бəхетле еллар булып кала. Чулпан гаилəне яктырта, шагыйрьнең йөрəгенə шатлык өсти.
            </p>
            <div className="clear-both" />
          </div>

          {/* Цитата хатыны Әминә */}
          <div className="w-full mb-14">
            <div className="border-l-2 border-[#c0392b] pl-6 md:pl-10 py-2">
              <p className="font-body text-[12px] md:text-[13px] tracking-[0.2em] uppercase text-[#c0392b] mb-4">
                М.Җәлилнең хатыны Әминә:
              </p>
              <blockquote className="font-display text-[17px] md:text-[19px] leading-[1.8] text-[#444] italic" style={{ fontWeight: 300 }}>
                «Сугыш алдындагы җиде елны, Мусаның иң актив иҗат иткән елларын, без бик тату яшəдек. Чулпан икебезне дə шатландыра иде. Безнең бəхетнең чиге булмас кебек тоелды. Җəлил бик нечкə, сизгер иде.
                <br /><br />
                Ул шат күңелле, арымый-талмый көлəргə, шаяртырга, күңелле компаниялəр, озын кичке əңгəмəлəр сөйлəргə ярата иде. Назлы, йомшак, ачык күңелле булса да, тигез, тыныч, даими була белə иде.»
              </blockquote>
            </div>
          </div>

          {/* Дополнительный контент */}
          <div className="w-full mb-14">
            <p className="font-body text-[16px] md:text-[17px] leading-[1.85] text-[#333] mb-5">
              Муса Җəлил гаилə кешесе буларак да ихлас, йомшак, игътибарлы була. Ул балаларын бик яраткан, аларга вакыт биргəн, əкиятлəр сөйлəгəн.
            </p>
            <p className="font-body text-[16px] md:text-[17px] leading-[1.85] text-[#333] mb-5">
              Дусларына карата да Муса ышанычлы, ачык күңелле була. Иҗат əһеллəре белəн аралашуны, озын əңгəмəлəрне яраткан. Аның өендə еш кына əдəбият турында бəхəслəр, шигырь кичəлəре үткəрелгəн.
            </p>
          </div>

          {/* Navigation */}
          <div className="border-t border-[#e5e5e5] mt-16 pt-10 flex items-center justify-between">
            <Link to="/tormysh" className="flex items-center gap-2 font-body text-[13px] text-[#888] hover:text-[#1a1a1a] transition-colors">
              <Icon name="ArrowLeft" size={15} />
              Тормыш юлы
            </Link>
            <Link to="/" className="flex items-center gap-2 font-body text-[13px] text-[#888] hover:text-[#1a1a1a] transition-colors">
              Баш бит
              <Icon name="ArrowRight" size={15} />
            </Link>
          </div>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-[#e5e5e5] px-6 md:px-12 py-8">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
          <p className="font-body text-[12px] text-[#aaa] tracking-wide">
            © 2026 — Татар мәдәниятен өйрәнү һәм үстерү проекты. Лилия Кәримова.
          </p>
          <div className="w-4 h-px bg-[#c0392b]" />
        </div>
      </footer>
    </div>
  );
}
