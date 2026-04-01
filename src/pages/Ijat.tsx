import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

export default function Ijat() {
  return (
    <div className="min-h-screen bg-white text-[#1a1a1a]" style={{ fontFamily: "'Golos Text', sans-serif" }}>

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[#e5e5e5]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 font-body text-[13px] tracking-[0.1em] text-[#555] hover:text-[#1a1a1a] transition-colors">
            <Icon name="ArrowLeft" size={15} />
            Муса Җәлил
          </Link>
          <span className="font-body text-[12px] tracking-[0.15em] uppercase text-[#aaa]">06</span>
        </div>
      </nav>

      {/* HEADER */}
      <header className="pt-28 pb-16 px-6 md:px-12">
        <div className="max-w-[1200px] mx-auto">
          <p className="font-body text-[11px] tracking-[0.3em] uppercase text-[#aaa] mb-4">06 — Иҗат</p>
          <h1
            className="font-display text-[48px] md:text-[72px] lg:text-[88px] leading-none text-[#1a1a1a] mb-6"
            style={{ fontWeight: 500 }}
          >
            Иҗат
          </h1>
        </div>
      </header>

      {/* CONTENT */}
      <main className="px-6 md:px-12 pb-24">
        <div className="max-w-[1200px] mx-auto">

          {/* Блок: Мәскәү дуслары + фото «Алтынчәч» */}
          <div className="mb-12 w-full">
            {/* Фото «Алтынчәч» — float right */}
            <div className="float-right ml-8 mb-4 w-[220px] md:w-[260px] flex-shrink-0">
              <div className="overflow-hidden bg-[#f5f5f5]">
                <img
                  src="https://cdn.poehali.dev/files/253dd7db-d0f4-4809-9424-46b7e45e76c9.jpg"
                  alt="Муса Җәлил һәм композитор Н.Җиһанов «Алтынчәч» операсы өстендә эшләгәндә"
                  className="w-full h-auto object-cover grayscale"
                />
              </div>
              <p className="font-body text-[11px] text-[#888] leading-snug italic mt-2">
                Муса Җәлил һәм композитор Н.Җиһанов «Алтынчәч» операсы өстендә эшләгәндә
              </p>
            </div>

            <p className="font-body text-[16px] md:text-[17px] leading-[1.85] text-[#333] mb-5">
              Җәлил һәрвакыт Мәскәү дуслары даирәсендә була. «Татар москвичлары» — Мәхмүд Максуд, Әхмәт Фәйзи, Латыйф Хәмиди, студиячеләр киләләр, казанлылар — Гази Кашшаф, Хәсән Туфан, Әхмәт Исхак, Сибгать Хәким киләләр, башкалар да, кыскасы, бөтен татар әдәбиятчылары диярлек килеп карыйлар.
            </p>
            <p className="font-body text-[16px] md:text-[17px] leading-[1.85] text-[#333] mb-5">
              Кайчакта бөтен төркемнәр белән кафега баралар һәм анда төн уртасына кадәр утыралар, ешрак безнең бүлмәдә урнашалар, шахмат уйныйлар, уртак көч белән кечкенә газета чыгаралар, анда шаярту экспромтлары урнаштыралар».
            </p>

            {/* Атрибуция цитаты */}
            <p className="font-body text-[13px] text-[#aaa] italic mb-8">
              («Муса Җәлил» китабыннан. «Кызыл ромашка». Казан, ТКИ, 1981 ел)
            </p>
            <div className="clear-both" />
          </div>

          {/* Блок: «Октябрь баласы» + Дуслар фотолары */}
          <div className="mb-12 w-full">
            {/* Два фото рядом — float left */}
            <div className="float-left mr-8 mb-4 w-[200px] md:w-[240px] flex-shrink-0">
              <div className="overflow-hidden bg-[#f5f5f5]">
                <img
                  src="https://cdn.poehali.dev/files/d6bcfa10-6366-48e7-80b7-942643a73d0f.jpg"
                  alt="Җәүдәт Фәйзи һ.б. 1929 ел"
                  className="w-full h-auto object-cover grayscale"
                />
              </div>
              <p className="font-body text-[11px] text-[#888] leading-snug italic mt-2">
                Утырып торалар (сулдан уңга): композитор А.Ключарев, М.Җәлил, Х.Гобәйдуллин. Басып тора: Җ.Фәйзи. 1929 ел.
              </p>
            </div>

            <div className="float-left mr-8 mb-4 w-[200px] md:w-[240px] flex-shrink-0">
              <div className="overflow-hidden bg-[#f5f5f5]">
                <img
                  src="https://cdn.poehali.dev/files/cb3960e0-d20b-462d-ab08-acc595a9d319.jpg"
                  alt="М.Җәлил «Октябрь баласы» журналы авторлары арасында, 1929 ел"
                  className="w-full h-auto object-cover grayscale"
                />
              </div>
              <p className="font-body text-[11px] text-[#888] leading-snug italic mt-2">
                М.Җәлил «Октябрь баласы» журналы авторлары арасында. 1929 ел.
              </p>
            </div>

            <p className="font-body text-[16px] md:text-[17px] leading-[1.85] text-[#333] mb-5">
              Иҗади мохитта яшь Муса Җәлил яшьтәшләре белән тыгыз аралашты. «Октябрь баласы» журналы тирәсендә туплашкан шагыйрьләр, язучылар, композиторлар — алар яңа татар мәдәниятен бергәләп формалаштырдылар.
            </p>
            <p className="font-body text-[16px] md:text-[17px] leading-[1.85] text-[#333] mb-5">
              Ул заманының иң күренекле сәнгать кешеләре белән якын дуслык тотты: Җәүдәт Фәйзи («Галиябану» операсы авторы), Александр Ключарев, Хәсән Гобәйдуллин кебек шәхесләр аның иҗади даирәсенә кергән иде.
            </p>
            <div className="clear-both" />
          </div>

          {/* Блок: текст об Аминә — без семейных фото */}
          <div className="mb-12 w-full">
            <p className="font-body text-[16px] md:text-[17px] leading-[1.85] text-[#333] mb-5">
              Шигъри осталыгы белән бергә, Муса Җәлилнең гаилә тормышы да иҗатына тирән йогынты ясады. Хатыны Әминә белән уртак тормыш, кызы Чулпанның тууы шагыйрьнең лирик юлларына үзенчәлекле эз калдырды.
            </p>
            <p className="font-body text-[16px] md:text-[17px] leading-[1.85] text-[#333] mb-5">
              Сугышка кадәрге еллар аның иҗат ягыннан иң бай чоры булды. «Алтынчәч» операсының либреттосын язу, «Илдар» операсы, «Җирән чәч» балеты — болар барысы да шул елларда туды.
            </p>
          </div>

          {/* Блок: Опера студиясе */}
          <div className="mb-12 w-full">
            <p className="font-body text-[16px] md:text-[17px] leading-[1.85] text-[#333] mb-5">
              Җәлилне опера студиясендә эшләү шулкадәр мавыктыра ки, 1939 елда, студиялеләр укуларын тәмамлап, Казанга күченгәч, ул алар белән бергә китә. Әлбәттә, Җәлил Җәлил булмас иде, әгәр параллель рәвештә иҗтимагый эш белән шөгыльләнмәгән булса.
            </p>
            <p className="font-body text-[16px] md:text-[17px] leading-[1.85] text-[#333] mb-5">
              1939 елдан 1941 елга кадәр ул шулай ук Татарстан АССР Язучылар берлегенең җаваплы сәркатибе вазифасын башкара.
            </p>
          </div>

          {/* Блок: Журналистлар 1934 + фото Одесса */}
          <div className="mb-12 w-full">
            {/* Фото Одесса — float right */}
            <div className="float-right ml-8 mb-4 w-[200px] md:w-[240px] flex-shrink-0">
              <div className="overflow-hidden bg-[#f5f5f5]">
                <img
                  src="https://cdn.poehali.dev/files/dede653e-09ca-4c28-a243-17add9174e8a.jpg"
                  alt="М. Җәлил һәм язучы Г. Исхакый Одесса янындагы иҗат йортында"
                  className="w-full h-auto object-cover grayscale"
                />
              </div>
              <p className="font-body text-[11px] text-[#888] leading-snug italic mt-2">
                М. Җәлил һәм язучы Г. Исхакый Одесса янындагы иҗат йортында
              </p>
            </div>

            {/* Фото журналистлар 1934 — float left */}
            <div className="float-left mr-8 mb-4 w-[200px] md:w-[240px] flex-shrink-0">
              <div className="overflow-hidden bg-[#f5f5f5]">
                <img
                  src="https://cdn.poehali.dev/files/b9e71a81-7a32-4cd0-873b-21bd21a27984.jpg"
                  alt="М. Җәлил журналистлар арасында, 1934 ел"
                  className="w-full h-auto object-cover grayscale"
                />
              </div>
              <p className="font-body text-[11px] text-[#888] leading-snug italic mt-2">
                М. Җәлил журналистлар арасында. З.Кормашев, Ю.Гайса, В.Садри, М.Җәлил. 1934 ел.
              </p>
            </div>

            <p className="font-body text-[16px] md:text-[17px] leading-[1.85] text-[#333] mb-5">
              Шагыйрь матбугат дөньясында да актив катнашты. Журналистлар, газета редакторлары, башкорт шагыйрьләре белән якын мөнәсәбәттә булды — мәдәни күпернәр корды, милли әдәбиятны бергәләп үстерде.
            </p>
            <p className="font-body text-[16px] md:text-[17px] leading-[1.85] text-[#333] mb-5">
              Аның тирәсендә оешкан дуслык даирәсе гади аралашудан гына тормады — алар иҗат итәләр, бәхәсләшәләр, уртак идеяләр белән янып яшиләр иде.
            </p>
            <div className="clear-both" />
          </div>

          {/* Блок: Цитата Гази Кашшаф */}
          <div className="mb-14 w-full">
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
            <Link to="/" className="flex items-center gap-2 font-body text-[13px] text-[#888] hover:text-[#1a1a1a] transition-colors">
              Баш бит
              <Icon name="ArrowRight" size={15} />
            </Link>
          </div>
        </div>
      </main>

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
