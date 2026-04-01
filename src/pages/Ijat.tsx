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
          <div className="flex items-center gap-4">
            <div className="w-8 h-px bg-[#c0392b]" />
            <span className="font-body text-[13px] text-[#888] tracking-wide">Поэзия · Либретто</span>
          </div>
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

          {/* Блок: Опера студиясе + Казан */}
          <div className="mb-12 w-full">
            <p className="font-body text-[16px] md:text-[17px] leading-[1.85] text-[#333] mb-5">
              Җәлилне опера студиясендә эшләү шулкадәр мавыктыра ки, 1939 елда, студиялеләр укуларын тәмамлап, Казанга күченгәч, ул алар белән бергә китә. Әлбәттә, Җәлил Җәлил булмас иде, әгәр параллель рәвештә иҗтимагый эш белән шөгыльләнмәгән булса.
            </p>
            <p className="font-body text-[16px] md:text-[17px] leading-[1.85] text-[#333] mb-5">
              1939 елдан 1941 елга кадәр ул шулай ук Татарстан АССР Язучылар берлегенең җаваплы сәркатибе вазифасын башкара.
            </p>
          </div>

          {/* Блок: Гази Кашшаф + фото Одесса */}
          <div className="mb-12 w-full">
            {/* Фото Одесса — float left */}
            <div className="float-left mr-8 mb-4 w-[200px] md:w-[240px] flex-shrink-0">
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

            {/* Цитата Гази Кашшаф */}
            <div className="border-l-2 border-[#c0392b] pl-6 py-2 mb-5">
              <p className="font-body text-[12px] md:text-[13px] tracking-[0.2em] uppercase text-[#c0392b] mb-4">
                1939 ел — Гази Кашшаф:
              </p>
              <blockquote className="font-display text-[17px] md:text-[19px] leading-[1.8] text-[#444] italic" style={{ fontWeight: 300 }}>
                «Менә Бөек Ватан сугышы башланды. Сугыш игълан ителгән көнне — 1941 елның 22 июнендә — ул гаиләсе белән минем дачада кунакта булды, һәм без шагыйрь А.Исхак белән икенче көнгә кадәр гаиләдә сугыш, әдәбият, киләчәк турында сөйләштек. Монда да Муса беренче мәртәбә үлем турында сүз кузгатты.
                <br /><br />
                — Сугыштан соң беребезне дә санап бетермәячәкләр...
                <br /><br />
                Кызганыч, ул дөресен әйтте...»
              </blockquote>
            </div>
            <div className="clear-both" />
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
