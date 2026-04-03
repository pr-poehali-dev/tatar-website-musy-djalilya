import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const sectionPreviews = [
  {
    id: "tormysh",
    num: "01",
    title: "Тормыш юлы",
    subtitle: "1906–1942",
    path: "/tormysh",
    text: "Муса Җәлил 1906 елның 15 февралендə Ырынбур губернасының Мостафа авылында дөньяга килə. Алты яшендə əтисе Мостафа кечкенə Мусаны авыл мəктəбенə бирə — бу мəктəптə əдип бер ел өчендə 4 еллык уку программасын үзлəштерə. 1914 елда шəкерт булып «Хөсəения»гə укырга керə, беренче тапкыр сəхəндəн Габдулла Тукай шигырьлəрен, А.С.Пушкин əкиятлəрен укый. 1925 елда Мəскəү дəүлəт университетының əдəбият факультетына укырга керə, 1929 елда партия сафына баса. 1938 елда Казанга күченеп, опера театрының əдəби бүлек мөдире булып эшли. 1939 елда Татарстан Язучылар союзы идарəсенең җаваплы секретаре итеп билгелəнə.",
    imgSrc: "https://cdn.poehali.dev/files/6c421466-ebaa-464c-a9a8-04f8030b85f3.jpg",
    imgAlt: "Муса Җәлил — шәкерт. 1916 ел",
    imgCaption: "Муса Җәлил — шәкерт. 1916 ел",
    imgRight: true,
  },
  {
    id: "shakhsi",
    num: "02",
    title: "Шәхси тормышы",
    subtitle: "Гаилә · Мәхәббәт",
    path: "/shakhsi",
    text: "Муса Җәлил өч тапкыр гаилə кора. 1936 елда өченче хатыны Əминə Сəйфуллинага өйлəнə, 1937 елда кызлары Чулпан туа. Шагыйрьнең өч баласы бар: Альберт (беренче никахтан), Люция (икенче никахтан), Чулпан (өченче никахтан). Муса Җәлил әсирлеккə эләккәч, сатлыкҗан дип игълан ителə, шуңа күрə Əминə ханым 1956 елга кадəр исемен үзгəртеп яши.",
    imgSrc: "https://cdn.poehali.dev/files/76126460-9bfb-4a77-950a-2394f0d76c8c.jpg",
    imgAlt: "М.Җәлил кызы Чулпан белән",
    imgCaption: "М.Җәлил кызы Чулпан белән",
    imgRight: false,
  },
  {
    id: "ijat",
    num: "03",
    title: "Иҗат",
    subtitle: "Иҗади мирас",
    path: "/ijat",
    text: "Муса Җəлилнең иҗаты — татар əдəбиятының алтын бите. Ул шагыйрь генə түгел: «Алтынчəч» (1935–1941) həм «Илдар» (1940) операларының либреттолары авторы, «Октябрь баласы» журналы əйлəнəсендə тупланган яшь əдиплəрнең рухи юлбашчысы. Аның иҗаты кеше рухының бөеклеген, хөрриятне, мəхəббəтне данлый. «Сагыну», «Җир җилəгем», «Кызыл ромашка» кебек шигырьлəр халыкның яраткан əсəрлəренə əверелə.",
    imgSrc: "https://cdn.poehali.dev/files/253dd7db-d0f4-4809-9424-46b7e45e76c9.jpg",
    imgAlt: "Муса Җәлил и Н.Җиһанов «Алтынчәч» өстендә",
    imgCaption: "Н.Җиһанов белән «Алтынчәч» өстендə эшлəгəндə",
    imgRight: true,
  },
  {
    id: "sugish",
    num: "04",
    title: "Сугыш юлы",
    subtitle: "1941–1944",
    path: "/sugish",
    text: "1941 елның июль аенда Муса Җəлил армиягə алына. 1942 елның июнендə Волхов юнəлешендəге сугышларда каты яраланган хəлдə əсиргə элəгə. Тоткынлыкта «Идел-Урал» легионы – яшерен оешма оештыра. 1943 елның 11 августында оешма тар-мар ителə. 1944 елның 25 августында Плетцензее төрмəсендə гильотинада үтерелə. 1956 елда Советлар Союзы Герое исеменə лаек була.",
    imgSrc: "https://cdn.poehali.dev/files/70984550-2eb1-4284-b615-fa5eda62fdc0.jpg",
    imgAlt: "Муса Җәлил фронтта. 1941 ел.",
    imgCaption: "Муса Җəлил фронтта. 1941 ел. Соңгы фотосурəтлəрнең берсе.",
    imgRight: false,
  },
  {
    id: "moabit",
    num: "05",
    title: "Моабит дәфтәрләре",
    subtitle: "106 шигырь",
    path: "/moabit",
    text: "1942 елда лейтенант Гайнан Кормаш тарафыннан Польшадагы Демблин крепостенда оештырылган яшерен патриотик оешма. Абдулла Алиш, Фоат Булатов, Гариф Шабаев, Зиннəт Хəсəнов həм башкалар — барысы да 1944 елның 25 августында Берлинда гильотинада үтерелəлəр. Алар — батырлыкның, ватанга тугрылыкның мəңгелек мисалы.",
    imgSrc: "https://cdn.poehali.dev/files/c0dc499f-1408-45cc-b2c9-2f062230ba22.jpg",
    imgAlt: "Муса Җәлил",
    imgCaption: "Муса Җəлил",
    imgRight: true,
  },
  {
    id: "jalilchelar",
    num: "06",
    title: "Җәлилчеләр",
    subtitle: "Батыр дуслар",
    path: "/jalilchelar",
    text: "1942 елда лейтенант Гайнан Кормаш тарафыннан Польшадагы Демблин крепостенда оештырылган яшерен патриотик оешма. Абдулла Алиш, Фоат Булатов, Гариф Шабаев, Зиннəт Хəсəнов həм башкалар — барысы да 1944 елның 25 августында Берлинда гильотинада үтерелəлəр. Алар — батырлыкның, ватанга тугрылыкның мəңгелек мисалы.",
    imgSrc: "https://cdn.poehali.dev/files/6db5b160-edd6-45ae-8d2d-7a872ebaef0f.jpg",
    imgAlt: "1925 елгы уком бюросы",
    imgCaption: "",
    imgRight: false,
  },
  {
    id: "bugen",
    num: "07",
    title: "Бүгенге көн",
    subtitle: "Музейлар · Монументлар",
    path: "/bugen",
    text: "Муса Җəлил исеме бүген дə яши — монументларда, музейларда, мəдрəсəлəрдə, мəктəплəрдə. 1966 елда Кремль янында Муса Җəлилгə həйкəл ачыла (скульптор В.Е.Цигаль). Казан Кремлендə Муса Җəлил музее эшли. Аның əсəрлəре дөньяның йөздəн артык теленə тəрҗемə ителгəн. Ел саен Татарстанда шагыйрьнең туган көнен — 15 февральне — олы бəйрəм итеп үткəрəлəр.",
    imgSrc: "https://cdn.poehali.dev/files/c0dc499f-1408-45cc-b2c9-2f062230ba22.jpg",
    imgAlt: "Муса Җәлил",
    imgCaption: "",
    imgRight: true,
  },
  {
    id: "photogallery",
    num: "08",
    title: "Фотогалерея",
    subtitle: "М.Җәлилнең фотолары архивы",
    path: "/photogallery",
    text: "Муса Җəлилнең балачагыннан алып сугыш елларына кадəрге тормыш юлыннан фотолар. Фотографиялəр шагыйрьнең кеше буларак та, иҗатчы буларак та образын ачып бирə. Муса Җəлилгə бəйле кешелəр, вакыйгалар, тарихи моментлар — барысы да бер галерея эчендə туплана.",
    imgSrc: "https://cdn.poehali.dev/files/d6bcfa10-6366-48e7-80b7-942643a73d0f.jpg",
    imgAlt: "Фото архивы",
    imgCaption: "",
    imgRight: false,
  },
];

const sections = [
  { id: "tormysh", title: "Тормыш юлы", subtitle: "Тормышы · Балачагы · Укуы", desc: "Тормышы, балачагы, укуы һәм формалашуы", path: "/tormysh" },
  { id: "shakhsi", title: "Шәхси тормышы", subtitle: "Гаиләсе", desc: "Якыннары, мәхәббәте, шәхси дөньясы", path: "/shakhsi" },
  { id: "ijat", title: "Иҗат", subtitle: "Иҗади мирасы", desc: "Иҗади мирасы, әсәрләре, темалары", path: "/ijat" },
  { id: "sugish", title: "Сугыш юлы һәм әсирлек", subtitle: "1941–1944", desc: "Фронт, яралануы, немец лагерьлары", path: "/sugish" },
  { id: "moabit", title: "Моабит дәфтәрләре", subtitle: "106 шигырь", desc: "Төрмәдә язылган шигырьлар — мәңгелек ядкарь", path: "/moabit" },
  { id: "jalilchelar", title: "Җәлилчеләр", subtitle: "Батыр дуслар", desc: "Аның белән бергә хөкем ителгән каһарманнар", path: "/jalilchelar" },
  { id: "bugen", title: "Бүгенге көн", subtitle: "Музейлар · Монументлар · Заманча ресурслар", desc: "Музейлар, монументлар, бүгенге буын", path: "/bugen" },
  { id: "photogallery", title: "Фотогалерея", subtitle: "М.Җәлилнең фотолары архивы", desc: "М.Җәлилнең тормыш юлыннан фотолар", path: "/photogallery" },
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
          <div className="hidden md:flex items-center gap-4 lg:gap-6">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="nav-link font-body text-[11px] lg:text-[12px] tracking-[0.05em] text-[#555] hover:text-[#1a1a1a] transition-colors no-underline"
              >
                {s.title}
              </a>
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
              <a
                key={s.id}
                href={`#${s.id}`}
                onClick={() => setMenuOpen(false)}
                className="font-body text-[15px] text-[#1a1a1a] tracking-[0.03em] flex items-center justify-between no-underline"
              >
                {s.title}
                <Icon name="ArrowDown" size={16} />
              </a>
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#e5e5e5]">
            {sections.map((s, i) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="section-card group px-5 py-7 flex flex-col items-center text-center bg-white no-underline"
                style={{ animationDelay: `${i * 0.07}s` }}
              >
                <span className="font-body text-[10px] tracking-[0.25em] uppercase text-[#bbb] mb-2">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="font-display text-[16px] md:text-[17px] text-[#1a1a1a] leading-tight mb-2 whitespace-nowrap overflow-hidden text-ellipsis w-full" style={{ fontWeight: 500 }}>
                  {s.title}
                </h2>
                <p className="font-body text-[11px] text-[#c0392b] tracking-wide leading-snug">{s.subtitle}</p>
                <Icon
                  name="ArrowDown"
                  size={14}
                  className="text-[#ddd] group-hover:text-[#c0392b] transition-colors mt-3"
                />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* SECTIONS CONTENT */}
      {sectionPreviews.map((s) => (
        <section key={s.id} id={s.id} className="w-full px-6 md:px-12 py-20 border-t border-[#e5e5e5]">
          <div className="max-w-[1200px] mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <span className="font-body text-[11px] tracking-[0.25em] uppercase text-[#bbb]">{s.num}</span>
              <div className="w-8 h-px bg-[#c0392b]" />
              <span className="font-body text-[13px] text-[#888] tracking-wide">{s.subtitle}</span>
            </div>
            <h2 className="font-display text-[28px] md:text-[40px] leading-none text-[#1a1a1a] mb-8 whitespace-nowrap overflow-hidden text-ellipsis" style={{ fontWeight: 500 }}>
              {s.title}
            </h2>
            <div className="w-full">
              <p className="font-body text-[16px] md:text-[17px] leading-[1.85] text-[#333] mb-4 w-full">
                {s.text}
              </p>
              <div style={{ clear: "both" }} />
              <Link
                to={s.path}
                className="inline-flex items-center gap-2 font-body text-[13px] tracking-[0.1em] text-[#c0392b] hover:text-[#1a1a1a] transition-colors border-b border-[#c0392b] hover:border-[#1a1a1a] pb-0.5"
              >
                Бүлекне ачу
                <Icon name="ArrowRight" size={14} />
              </Link>
            </div>
          </div>
        </section>
      ))}

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