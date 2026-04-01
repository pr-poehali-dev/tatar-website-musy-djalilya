import { useState, CSSProperties } from "react";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

function PhotoLightbox({ src, alt, onClose }: { src: string; alt: string; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 cursor-zoom-out"
      onClick={onClose}
    >
      <button
        className="absolute top-5 right-5 text-white/70 hover:text-white transition-colors"
        onClick={onClose}
        aria-label="Закрыть"
      >
        <Icon name="X" size={28} />
      </button>
      <img
        src={src}
        alt={alt}
        className="max-w-full max-h-[90vh] object-contain shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      />
      <p className="absolute bottom-6 left-0 right-0 text-center font-body text-[13px] text-white/60 italic px-4">{alt}</p>
    </div>
  );
}

interface PhotoProps {
  src: string;
  alt: string;
  caption?: string;
  wrapClass?: string;
  wrapStyle?: CSSProperties;
}

function Photo({ src, alt, caption, wrapClass = "", wrapStyle }: PhotoProps) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className={`flex-shrink-0 ${wrapClass}`} style={wrapStyle}>
        <div
          className="overflow-hidden bg-[#f5f5f5] cursor-zoom-in group relative"
          onClick={() => setOpen(true)}
          title="Зурайту өчен басыгыз"
        >
          <img src={src} alt={alt} className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 flex items-center justify-center">
            <Icon name="ZoomIn" size={22} className="text-white opacity-0 group-hover:opacity-80 transition-opacity drop-shadow" />
          </div>
        </div>
        {caption && <p className="font-body text-[11px] text-[#888] leading-snug italic mt-2">{caption}</p>}
      </div>
      {open && <PhotoLightbox src={src} alt={alt} onClose={() => setOpen(false)} />}
    </>
  );
}

export default function Ijat() {
  return (
    <div className="min-h-screen bg-white text-[#1a1a1a]" style={{ fontFamily: "'Golos Text', sans-serif" }}>

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[#e5e5e5]">
        <div className="max-w-[1200px] mx-auto px-8 md:px-16 lg:px-24 flex items-center justify-between h-16">
          <Link to="/shakhsi" className="flex items-center gap-2 font-body text-[13px] tracking-[0.1em] text-[#555] hover:text-[#1a1a1a] transition-colors">
            <Icon name="ChevronLeft" size={15} />
            <span className="hidden sm:inline">Шәхси тормышы</span>
          </Link>
          <div className="flex items-center gap-5">
            <span className="font-body text-[12px] tracking-[0.15em] uppercase text-[#aaa]">03 / 07</span>
            <Link to="/sugish" className="flex items-center gap-1 font-body text-[12px] text-[#aaa] hover:text-[#1a1a1a] transition-colors">
              <span className="hidden sm:inline">Сугыш юлы</span>
              <Icon name="ChevronRight" size={15} />
            </Link>
          </div>
        </div>
      </nav>

      {/* HEADER */}
      <header className="pt-28 pb-12 px-8 md:px-16 lg:px-24">
        <div className="max-w-[1200px] mx-auto">
          <p className="font-body text-[11px] tracking-[0.3em] uppercase text-[#aaa] mb-4">06 — Иҗат</p>
          <h1 className="font-display text-[48px] md:text-[72px] lg:text-[88px] leading-none text-[#1a1a1a] mb-6" style={{ fontWeight: 500 }}>
            Иҗат
          </h1>
          <div className="flex items-center gap-4">
            <div className="w-8 h-px bg-[#c0392b]" />
            <span className="font-body text-[13px] text-[#888] tracking-wide">Иҗади мирасы · Әсәрләре</span>
          </div>
        </div>
      </header>

      {/* CONTENT */}
      <main className="px-8 md:px-16 lg:px-24 pb-24">
        <div className="w-full">

          {/* Блок 1: «Алтынчәч» + текст */}
          <div className="mb-10 w-full">
            <Photo
              src="https://cdn.poehali.dev/files/253dd7db-d0f4-4809-9424-46b7e45e76c9.jpg"
              alt="Муса Җәлил һәм композитор Н.Җиһанов «Алтынчәч» операсы өстендә эшләгәндә"
              caption="Муса Җәлил һәм композитор Н.Җиһанов «Алтынчәч» операсы өстендә эшләгәндә"
              wrapClass="float-right ml-8 mb-4"
              wrapStyle={{ width: "clamp(160px, 22%, 240px)" }}
            />

            <p className="font-body text-[16px] md:text-[17px] leading-[1.85] text-[#333] mb-4 text-justify">
              Җәлил һәрвакыт Мәскәү дуслары даирәсендә була. «Татар москвичлары» — Мәхмүд Максуд, Әхмәт Фәйзи, Латыйф Хәмиди, студиячеләр киләләр, казанлылар — Гази Кашшаф, Хәсән Туфан, Әхмәт Исхак, Сибгать Хәким киләләр, башкалар да, кыскасы, бөтен татар әдәбиятчылары диярлек килеп карыйлар.
            </p>
            <p className="font-body text-[16px] md:text-[17px] leading-[1.85] text-[#333] mb-4 text-justify">
              Кайчакта бөтен төркемнәр белән кафега баралар һәм анда төн уртасына кадәр утыралар, ешрак безнең бүлмәдә урнашалар, шахмат уйныйлар, уртак көч белән кечкенә газета чыгаралар, анда шаярту экспромтлары урнаштыралар. («Муса Җәлил» китабыннан. «Кызыл ромашка». Казан, ТКИ, 1981 ел)
            </p>
            <p className="font-body text-[16px] md:text-[17px] leading-[1.85] text-[#333] mb-4 text-justify">
              Сугышка кадәрге еллар аның иҗат ягыннан иң бай чоры булды. «Алтынчәч» операсының либреттосы, «Илдар» операсы, «Җирән чәч» балеты — болар барысы да шул елларда туды.
            </p>
            <div className="clear-both" />
          </div>

          {/* Блок 2: «Октябрь баласы» фотолары + текст */}
          <div className="mb-10 w-full">
            <Photo
              src="https://cdn.poehali.dev/files/d6bcfa10-6366-48e7-80b7-942643a73d0f.jpg"
              alt="Утырып торалар (сулдан уңга): композитор А.Ключарев, М.Җәлил, Х.Гобәйдуллин. Басып тора: Җ.Фәйзи. 1929 ел."
              caption="А.Ключарев, М.Җәлил, Х.Гобәйдуллин, Җ.Фәйзи. 1929 ел."
              wrapClass="float-left mr-8 mb-4"
              wrapStyle={{ width: "clamp(140px, 20%, 210px)" }}
            />
            <Photo
              src="https://cdn.poehali.dev/files/cb3960e0-d20b-462d-ab08-acc595a9d319.jpg"
              alt="М.Җәлил «Октябрь баласы» журналы авторлары арасында. 1929 ел."
              caption="М.Җәлил «Октябрь баласы» журналы авторлары арасында. 1929 ел."
              wrapClass="float-right ml-8 mb-4"
              wrapStyle={{ width: "clamp(140px, 20%, 210px)" }}
            />

            <p className="font-body text-[16px] md:text-[17px] leading-[1.85] text-[#333] mb-4 text-justify">
              Иҗади мохиттә яшь Муса Җәлил яшьтәшләре белән тыгыз аралашты. «Октябрь баласы» журналы тирәсендә туплашкан шагыйрьләр, язучылар, композиторлар — алар яңа татар мәдәниятен бергәләп формалаштырдылар.
            </p>
            <p className="font-body text-[16px] md:text-[17px] leading-[1.85] text-[#333] mb-4 text-justify">
              Ул заманының иң күренекле сәнгать кешеләре белән якын дуслык тотты: Җәүдәт Фәйзи («Галиябану» операсы авторы), Александр Ключарев, Хәсән Гобәйдуллин кебек шәхесләр аның иҗади даирәсенә кергән иде. Шигъри осталыгы белән бергә, Муса Җәлилнең гаилә тормышы да иҗатына тирән йогынты ясады.
            </p>
            <div className="clear-both" />
          </div>

          {/* Блок 3: Опера студиясе + текст */}
          <div className="mb-10 w-full">
            <p className="font-body text-[16px] md:text-[17px] leading-[1.85] text-[#333] mb-4 text-justify">
              Хатыны Әминә белән уртак тормыш, кызы Чулпанның тууы шагыйрьнең лирик юлларына үзенчәлекле эз калдырды. Сугышка кадәрге еллар аның иҗат ягыннан иң бай чоры булды.
            </p>
            <p className="font-body text-[16px] md:text-[17px] leading-[1.85] text-[#333] mb-4 text-justify">
              Җәлилне опера студиясендә эшләү шулкадәр мавыктыра ки, 1939 елда, студиялеләр укуларын тәмамлап, Казанга күченгәч, ул алар белән бергә китә. Параллель рәвештә иҗтимагый эш белән дә шөгыльләнде — 1939 елдан 1941 елга кадәр Татарстан АССР Язучылар берлегенең җаваплы сәркатибе вазифасын башкарды.
            </p>
          </div>

          {/* Блок 4: Журналистлар + 2 фото */}
          <div className="mb-10 w-full">
            <Photo
              src="https://cdn.poehali.dev/files/dede653e-09ca-4c28-a243-17add9174e8a.jpg"
              alt="М. Җәлил һәм язучы Г. Исхакый Одесса янындагы иҗат йортында"
              caption="М. Җәлил һәм язучы Г. Исхакый Одесса янындагы иҗат йортында"
              wrapClass="float-right ml-8 mb-4"
              wrapStyle={{ width: "clamp(150px, 21%, 230px)" }}
            />
            <Photo
              src="https://cdn.poehali.dev/files/b9e71a81-7a32-4cd0-873b-21bd21a27984.jpg"
              alt="М. Җәлил журналистлар арасында. З.Кормашев, Ю.Гайса, В.Садри, М.Җәлил. 1934 ел."
              caption="М. Җәлил журналистлар арасында. З.Кормашев, Ю.Гайса, В.Садри, М.Җәлил. 1934 ел."
              wrapClass="float-left mr-8 mb-4"
              wrapStyle={{ width: "clamp(150px, 21%, 230px)" }}
            />

            <p className="font-body text-[16px] md:text-[17px] leading-[1.85] text-[#333] mb-4 text-justify">
              Шагыйрь матбугат дөньясында да актив катнашты. Журналистлар, газета редакторлары, башкорт шагыйрьләре белән якын мөнәсәбәттә булды — мәдәни күпернәр корды, милли әдәбиятны бергәләп үстерде. Аның тирәсендә оешкан дуслык даирәсе гади аралашудан гына тормады — алар иҗат итәләр, бәхәсләшәләр, уртак идеяләр белән янып яшиләр иде.
            </p>
            <div className="clear-both" />
          </div>

          {/* Цитата Гази Кашшаф */}
          <div className="mb-10 w-full">
            <p className="font-body text-[12px] md:text-[13px] tracking-[0.2em] uppercase mb-4" style={{ color: "#c0392b" }}>
              1939 ел — Гази Кашшаф:
            </p>
            <blockquote className="font-display text-[17px] md:text-[19px] leading-[1.8] text-[#444] italic pl-6" style={{ fontWeight: 300, borderLeft: "2px solid #e5e5e5" }}>
              «Менә Бөек Ватан сугышы башланды. Сугыш игълан ителгән көнне — 1941 елның 22 июнендә — ул гаиләсе белән минем дачада кунакта булды, һәм без шагыйрь А.Исхак белән икенче көнгә кадәр гаиләдә сугыш, әдәбият, киләчәк турында сөйләштек. Монда да Муса беренче мәртәбә үлем турында сүз кузгатты. — Сугыштан соң беребезне дә санап бетермәячәкләр... Кызганыч, ул дөресен әйтте...»
            </blockquote>
          </div>

          {/* Navigation */}
          <div className="border-t border-[#e5e5e5] mt-16 pt-10 flex items-center justify-between">
            <Link to="/shakhsi" className="flex items-center gap-2 font-body text-[13px] text-[#888] hover:text-[#1a1a1a] transition-colors">
              <Icon name="ArrowLeft" size={15} />
              Шәхси тормышы
            </Link>
            <Link to="/sugish" className="flex items-center gap-2 font-body text-[13px] text-[#888] hover:text-[#1a1a1a] transition-colors">
              Сугыш юлы
              <Icon name="ArrowRight" size={15} />
            </Link>
          </div>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="bg-[#111] px-8 md:px-16 lg:px-24 py-8">
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