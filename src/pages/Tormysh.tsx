import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const photos = [
  { src: "/placeholder.svg", caption: "Муса Җәлил — шәкерт. 1916 ел" },
  { src: "/placeholder.svg", caption: "Рабфак студенты. 1923 ел" },
  { src: "/placeholder.svg", caption: "1925 елгы уком бюросы. Зайцев, Юдохин, Яковлев, Заикин, Җәлил, Сивожелезов тора." },
  { src: "/placeholder.svg", caption: "Мәскәү университеты студенты. 1929 ел" },
];

export default function Tormysh() {
  return (
    <div className="min-h-screen bg-white text-[#1a1a1a]" style={{ fontFamily: "'Golos Text', sans-serif" }}>

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[#e5e5e5]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 font-body text-[13px] tracking-[0.1em] text-[#555] hover:text-[#1a1a1a] transition-colors">
            <Icon name="ArrowLeft" size={15} />
            Муса Җәлил
          </Link>
          <span className="font-body text-[12px] tracking-[0.15em] uppercase text-[#aaa]">01</span>
        </div>
      </nav>

      {/* HEADER */}
      <header className="pt-28 pb-16 px-6 md:px-12">
        <div className="max-w-[1200px] mx-auto">
          <p className="font-body text-[11px] tracking-[0.3em] uppercase text-[#aaa] mb-4">01 — Тормыш юлы</p>
          <h1
            className="font-display text-[48px] md:text-[72px] lg:text-[88px] leading-none text-[#1a1a1a] mb-6"
            style={{ fontWeight: 500 }}
          >
            Тормыш юлы
          </h1>
          <div className="flex items-center gap-4">
            <div className="w-8 h-px bg-[#c0392b]" />
            <span className="font-body text-[13px] text-[#888] tracking-wide">1906–1942</span>
          </div>
        </div>
      </header>

      {/* CONTENT */}
      <main className="px-6 md:px-12 pb-24">
        <div className="max-w-[1200px] mx-auto">

          {/* Two-column layout: text + first photo */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-12 lg:gap-20 mb-16">
            <div>
              <p className="font-body text-[16px] md:text-[17px] leading-[1.85] text-[#333] mb-6">
                Муса Җәлил 1906 елның 15 февралендə Ырынбур губернасының Мостафа авылында дөньяга килə.
              </p>
              <p className="font-body text-[16px] md:text-[17px] leading-[1.85] text-[#333] mb-6">
                Алты яшендə əтисе Мустафа кечкенə Мусаны авыл мəктəбенə бирə. Бу мəктəптə əдип бер ел өчендə 4 еллык уку программасын үзлəштерə.
              </p>
              <p className="font-body text-[16px] md:text-[17px] leading-[1.85] text-[#333] mb-6">
                Алга таба Муса тормышын шəһəрдə дəвам итə. Бурычка алынган акчага ачылган кибет көтелгəн табышны алып килмəгəнлектəн, Мусаның əтисе Мустафа гаилəсе белəн Ырынбурга күченеп китə.
              </p>
              <p className="font-body text-[16px] md:text-[17px] leading-[1.85] text-[#333] mb-6">
                1914 елда əдип шəкерт булып, «Хөсəениягə» укырга керə. Нəкъ шул ук елны ул беренче тапкыр əдəби əсəрлəр укый: Габдулла Тукай шигырьлəре һəм А.С.Пушкинның əкиятлəре. Муса еш кына «Белек» китапханəсенə йөри торган була. Анда ул танылган язучы Шариф Камал белəн таныша.
              </p>
            </div>

            {/* First photo */}
            <div className="flex flex-col gap-3">
              <div className="aspect-[3/4] w-full overflow-hidden bg-[#f5f5f5]">
                <img src={photos[0].src} alt={photos[0].caption} className="w-full h-full object-cover grayscale" />
              </div>
              <p className="font-body text-[12px] text-[#888] leading-snug italic">{photos[0].caption}</p>
            </div>
          </div>

          {/* Continue text */}
          <div className="max-w-[780px] mb-16">
            <p className="font-body text-[16px] md:text-[17px] leading-[1.85] text-[#333] mb-6">
              1915 елда Җəлил апасы Мəрьямгə бөек язучы булырга хыялланганы турында сөйли.
            </p>
            <p className="font-body text-[16px] md:text-[17px] leading-[1.85] text-[#333] mb-6">
              Тиздəн яшь шагыйрь турында Оренбургның танылган язучысы Төхфəт Ченекəй ишетеп ала. Ул «Хөсəениягə» килеп, Мусаны эзлəп таба həм аңа гарəп, фарсы, татар классикаларын укырга бирə, спектакльлəргə, əдəби кичəлəргə алып бара.
            </p>
            <p className="font-body text-[16px] md:text-[17px] leading-[1.85] text-[#333] mb-6">
              Даими рəвештə хəерчелек чигендə булган күп балалы гаилəгə исəн калу җиңел булмаган. 1916 елның маенда Оренбургта Казаклар тарафыннан каты бастырылган ач фетнə кабынып китə.
            </p>
            <p className="font-body text-[16px] md:text-[17px] leading-[1.85] text-[#333] mb-6">
              Февраль революциясеннəн соң шəһəр шаулый башлый. Бу ике хакимлек həм идеялəр көрəше чоры була, шул исəптəн мəдрəсəдə дə. Муса бу шау-шулы тормышка актив кушыла. Ул стена газеталары həм кулъязма журнал өчен шигырьлəр яза həм хəтта ике пьеса да иҗат итə. Шул 11-яшьлек Муса язган пьесаларның берсе («Злодей») Оренбург шəһəр театрында куела.
            </p>
            <p className="font-body text-[16px] md:text-[17px] leading-[1.85] text-[#333] mb-6">
              1917 елның октябрендə шəһəрдə həм губернада хакимиятне казак атаманы Дутов ала.
            </p>
            <p className="font-body text-[16px] md:text-[17px] leading-[1.85] text-[#333] mb-6">
              1918-нченең гыйнвар ахырында Кызыл Армия Ырынбурда Совет хакимиятен урнаштыра. Ə апрельдə Казаклар кайтып, сугыш оештыралар. Йөзлəрчə мəет, кан, авырту, ярсу... Кызыллар акларны шəһəрдəн куып чыгаралар. Үлгəннəрне күмү митингка əверелə. Бу вакыйгалар Мусаның йөрəгендə зур яралар калдыра.
            </p>
            <p className="font-body text-[16px] md:text-[17px] leading-[1.85] text-[#333]">
              Ул шигырь язып, аны Ченекəйгə китерə. Тегесе хуплый, əмма кызганычка каршы, текст сакланылмый. Шактый соңрак, егерменче гасырның җитмешенче елларында, Ырынбур төбəкне өйрəнүче Ибəтулла Таңалин (Төхфəт Чəнəкəйнең ерак туганы həм Мусаның сыйныфташы) Җəлилнең шушы вакыйгаларга багышланган 1918 елның 15 октябрендə язылган шигырен таба. Ул безгə килеп җиткəн шигырьлəрнең беренчесе булып санала həм «кечкенə Җəлил» дип имзалана.
            </p>
          </div>

          {/* Photo gallery — remaining 3 photos */}
          <div className="border-t border-[#e5e5e5] pt-14">
            <p className="font-body text-[11px] tracking-[0.25em] uppercase text-[#aaa] mb-8">Фотоматериаллар</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {photos.slice(1).map((photo, i) => (
                <div key={i} className="flex flex-col gap-3">
                  <div className="aspect-[3/4] overflow-hidden bg-[#f5f5f5]">
                    <img src={photo.src} alt={photo.caption} className="w-full h-full object-cover grayscale" />
                  </div>
                  <p className="font-body text-[12px] text-[#888] leading-snug italic">{photo.caption}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation to next section */}
          <div className="border-t border-[#e5e5e5] mt-16 pt-10 flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2 font-body text-[13px] text-[#888] hover:text-[#1a1a1a] transition-colors">
              <Icon name="ArrowLeft" size={15} />
              Баш бит
            </Link>
            <Link to="/shakhsi" className="flex items-center gap-2 font-body text-[13px] text-[#888] hover:text-[#1a1a1a] transition-colors">
              Шәхси тормышы
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
