import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

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

          {/* BLOCK 1: Фото 2 (шәкерт 1916) — float right */}
          <div className="mb-12 w-full">
            <div className="float-right ml-8 mb-4 w-[220px] md:w-[260px] flex-shrink-0">
              <div className="overflow-hidden bg-[#f5f5f5]">
                <img
                  src="https://cdn.poehali.dev/files/6c421466-ebaa-464c-a9a8-04f8030b85f3.jpg"
                  alt="Муса Җәлил — шәкерт. 1916 ел"
                  className="w-full h-auto object-cover grayscale"
                />
              </div>
              <p className="font-body text-[12px] text-[#888] leading-snug italic mt-2">Муса Җәлил — шәкерт. 1916 ел</p>
            </div>

            <p className="font-body text-[16px] md:text-[17px] leading-[1.85] text-[#333] mb-5">
              Муса Җәлил 1906 елның 15 февралендə Ырынбур губернасының Мостафа авылында дөньяга килə.
            </p>
            <p className="font-body text-[16px] md:text-[17px] leading-[1.85] text-[#333] mb-5">
              Алты яшендə əтисе Мустафа кечкенə Мусаны авыл мəктəбенə бирə. Бу мəктəптə əдип бер ел өчендə 4 еллык уку программасын үзлəштерə.
            </p>
            <p className="font-body text-[16px] md:text-[17px] leading-[1.85] text-[#333] mb-5">
              Алга таба Муса тормышын шəһəрдə дəвам итə. Бурычка алынган акчага ачылган кибет көтелгəн табышны алып килмəгəнлектəн, Мусаның əтисе Мустафа гаилəсе белəн Ырынбурга күченеп китə.
            </p>
            <p className="font-body text-[16px] md:text-[17px] leading-[1.85] text-[#333] mb-5">
              1914 елда əдип шəкерт булып, «Хөсəениягə» укырга керə. Нəкъ шул ук елны ул беренче тапкыр əдəби əсəрлəр укый: Габдулла Тукай шигырьлəре һəм А.С.Пушкинның əкиятлəре. Муса еш кына «Белек» китапханəсенə йөри торган була. Анда ул танылган язучы Шариф Камал белəн таныша.
            </p>
            <p className="font-body text-[16px] md:text-[17px] leading-[1.85] text-[#333] mb-5">
              1915 елда Җəлил апасы Мəрьямгə бөек язучы булырга хыялланганы турында сөйли.
            </p>
            <p className="font-body text-[16px] md:text-[17px] leading-[1.85] text-[#333] mb-5">
              Тиздəн яшь шагыйрь турында Оренбургның танылган язучысы Төхфəт Ченекəй ишетеп ала. Ул «Хөсəениягə» килеп, Мусаны эзлəп таба həм аңа гарəп, фарсы, татар классикаларын укырга бирə, спектакльлəргə, əдəби кичəлəргə алып бара.
            </p>
            <div className="clear-both" />
          </div>

          {/* BLOCK 2: Фото 3 (Рабфак студенты 1923) — float left */}
          <div className="mb-12 w-full">
            <div className="float-left mr-8 mb-4 w-[280px] md:w-[340px] flex-shrink-0">
              <div className="overflow-hidden bg-[#f5f5f5]">
                <img
                  src="https://cdn.poehali.dev/files/2e183264-7839-4479-99ea-f2ee4b13d032.jpg"
                  alt="Рабфак студенты. 1923 ел"
                  className="w-full h-auto object-cover grayscale"
                />
              </div>
              <p className="font-body text-[12px] text-[#888] leading-snug italic mt-2">Рабфак студенты. 1923 ел</p>
            </div>

            <p className="font-body text-[16px] md:text-[17px] leading-[1.85] text-[#333] mb-5">
              Даими рəвештə хəерчелек чигендə булган күп балалы гаилəгə исəн калу җиңел булмаган. 1916 елның маенда Оренбургта Казаклар тарафыннан каты бастырылган ач фетнə кабынып китə.
            </p>
            <p className="font-body text-[16px] md:text-[17px] leading-[1.85] text-[#333] mb-5">
              Февраль революциясеннəн соң шəһəр шаулый башлый. Бу ике хакимлек həм идеялəр көрəше чоры була, шул исəптəн мəдрəсəдə дə. Муса бу шау-шулы тормышка актив кушыла. Ул стена газеталары həм кулъязма журнал өчен шигырьлəр яза həм хəтта ике пьеса да иҗат итə. Шул 11-яшьлек Муса язган пьесаларның берсе («Злодей») Оренбург шəһəр театрында куела.
            </p>
            <p className="font-body text-[16px] md:text-[17px] leading-[1.85] text-[#333] mb-5">
              1917 елның октябрендə шəһəрдə həм губернада хакимиятне казак атаманы Дутов ала.
            </p>
            <p className="font-body text-[16px] md:text-[17px] leading-[1.85] text-[#333] mb-5">
              1918-нченең гыйнвар ахырында Кызыл Армия Ырынбурда Совет хакимиятен урнаштыра. Ə апрельдə Казаклар кайтып, сугыш оештыралар. Йөзлəрчə мəет, кан, авырту, ярсу... Кызыллар акларны шəһəрдəн куып чыгаралар. Үлгəннəрне күмү митингка əверелə.
            </p>
            <p className="font-body text-[16px] md:text-[17px] leading-[1.85] text-[#333] mb-5">
              Ул шигырь язып, аны Ченекəйгə китерə. Шактый соңрак, егерменче гасырның җитмешенче елларында, Ырынбур төбəкне өйрəнүче Ибəтулла Таңалин Җəлилнең 1918 елның 15 октябрендə язылган шигырен таба. Ул безгə килеп җиткəн шигырьлəрнең беренчесе булып санала həм «кечкенə Җəлил» дип имзалана.
            </p>
            <div className="clear-both" />
          </div>

          {/* BLOCK 3: Фото 4 (уком бюросы 1925) — float right */}
          <div className="mb-12 w-full">
            <div className="float-right ml-8 mb-4 w-[280px] md:w-[340px] flex-shrink-0">
              <div className="overflow-hidden bg-[#f5f5f5]">
                <img
                  src="https://cdn.poehali.dev/files/6db5b160-edd6-45ae-8d2d-7a872ebaef0f.jpg"
                  alt="1925 елгы уком бюросы"
                  className="w-full h-auto object-cover grayscale"
                />
              </div>
              <p className="font-body text-[12px] text-[#888] leading-snug italic mt-2">1925 елгы уком бюросы. Зайцев, Юдохин, Яковлев, Заикин, Җәлил, Сивожелезов тора.</p>
            </div>

            <p className="font-body text-[16px] md:text-[17px] leading-[1.85] text-[#333] mb-5">
              1919 елда Муса комсомолга керə həм ул заманнан башлап аның тормышы революцион идеялəр белəн тыгыз бəйлəнгəн була. Яшь шагыйрь берьюлы берничə юнəлештə эшли: шигырьлəр яза, оештыру эше алып бара, матбугатта актив катнаша.
            </p>
            <p className="font-body text-[16px] md:text-[17px] leading-[1.85] text-[#333] mb-5">
              1920 елларда Муса Мəскəүгə күченə həм анда əдəби-иҗади тормышы яңа баскычка күтəрелə. Ул эшчелəр факультетында (рабфак) белем ала, яшь иҗатчылар берлəшмəлəрендə актив катнаша.
            </p>
            <p className="font-body text-[16px] md:text-[17px] leading-[1.85] text-[#333] mb-5">
              Комсомол оешмасында эшлəгəндə Муса лидерлык сыйфатлары күрсəтə. Яшьлəр арасында зур ихтирам казана, аны оештыру эшлəренə, митингларга, мəдəни чараларга актив тарталар.
            </p>
            <p className="font-body text-[16px] md:text-[17px] leading-[1.85] text-[#333] mb-5">
              Уком бюросы составында Муса Җəлил татар яшьлəренең мəдəни-мəгариф мəсьəлəлəре буенча актив эш алып бара. Ул татар теле həм мəдəниятен яклауга зур көч куя.
            </p>
            <div className="clear-both" />
          </div>

          {/* BLOCK 4: Фото 5 (Мәскәү университеты 1929) — float left */}
          <div className="mb-12 w-full">
            <div className="float-left mr-8 mb-4 w-[200px] md:w-[240px] flex-shrink-0">
              <div className="overflow-hidden bg-[#f5f5f5]">
                <img
                  src="https://cdn.poehali.dev/files/4d875f7c-7af0-4d4e-a387-2eee598a6132.jpg"
                  alt="Мәскәү университеты студенты. 1929 ел"
                  className="w-full h-auto object-cover grayscale"
                />
              </div>
              <p className="font-body text-[12px] text-[#888] leading-snug italic mt-2">Мәскәү университеты студенты. 1929 ел</p>
            </div>

            <p className="font-body text-[16px] md:text-[17px] leading-[1.85] text-[#333] mb-5">
              1925 елда Муса Мəскəү дəүлəт университетының əдəбият факультетына укырга керə. Монда ул рус həм дөнья əдəбияты белəн тирəнрəк таныша, əдəби осталыгын камиллəштерə.
            </p>
            <p className="font-body text-[16px] md:text-[17px] leading-[1.85] text-[#333] mb-5">
              Студентлык еллары Мусаның иҗади үсешендə мөһим роль уйный. Ул университетта яшь шагыйрьлəр, язучылар, мəдəният əһеллəре белəн аралаша, алардан күп нəрсə өйрəнə.
            </p>
            <p className="font-body text-[16px] md:text-[17px] leading-[1.85] text-[#333] mb-5">
              Бу елларда Муса татар балалары өчен əдəби əсəрлəр, шигырьлəр яза. Аның иҗаты кеше тормышының иң мөһим мəсьəлəлəренə — хөрриятккə, гаделлеккə, мəхəббəткə мөрəҗəгать итə.
            </p>
            <p className="font-body text-[16px] md:text-[17px] leading-[1.85] text-[#333] mb-5">
              1929 елда университетны тəмамлагач, Муса Казанга кайта həм анда əдəби эшчəнлеген дəвам итə. Ул газеталарда, журналларда эшли, татар əдəбиятының үсешенə зур өлеш кертə.
            </p>
            <div className="clear-both" />
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
