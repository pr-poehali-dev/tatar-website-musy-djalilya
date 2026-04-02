import { useState } from "react";
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

function Photo({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div
        className={`overflow-hidden bg-[#f5f5f5] cursor-zoom-in group relative ${className}`}
        onClick={() => setOpen(true)}
        title="Зурайту өчен басыгыз"
      >
        <img src={src} alt={alt} className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 flex items-center justify-center">
          <Icon name="ZoomIn" size={22} className="text-white opacity-0 group-hover:opacity-80 transition-opacity drop-shadow" />
        </div>
      </div>
      {open && <PhotoLightbox src={src} alt={alt} onClose={() => setOpen(false)} />}
    </>
  );
}

export default function Shakhsi() {
  return (
    <div className="min-h-screen bg-white text-[#1a1a1a]" style={{ fontFamily: "'Golos Text', sans-serif" }}>

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[#e5e5e5]">
        <div className="max-w-[1200px] mx-auto px-8 md:px-16 lg:px-24 flex items-center justify-between h-16">
          <Link to="/tormysh" className="flex items-center gap-2 font-body text-[13px] tracking-[0.1em] text-[#555] hover:text-[#1a1a1a] transition-colors">
            <Icon name="ChevronLeft" size={15} />
            <span className="hidden sm:inline">Тормыш юлы</span>
          </Link>
          <div className="flex items-center gap-5">
            <span className="font-body text-[12px] tracking-[0.15em] uppercase text-[#aaa]">02 / 07</span>
            <Link to="/ijat" className="flex items-center gap-1 font-body text-[12px] text-[#aaa] hover:text-[#1a1a1a] transition-colors">
              <span className="hidden sm:inline">Иҗат</span>
              <Icon name="ChevronRight" size={15} />
            </Link>
          </div>
        </div>
      </nav>

      {/* HEADER */}
      <header className="pt-28 pb-12 px-8 md:px-16 lg:px-24">
        <div className="max-w-[1200px] mx-auto">
          <p className="font-body text-[11px] tracking-[0.3em] uppercase text-[#aaa] mb-4">02 — Шәхси тормышы</p>
          <h1 className="font-display text-[48px] md:text-[72px] lg:text-[88px] leading-none text-[#1a1a1a] mb-6" style={{ fontWeight: 500 }}>
            Шәхси тормышы
          </h1>
          <div className="flex items-center gap-4">
            <div className="w-8 h-px bg-[#c0392b]" />
            <span className="font-body text-[13px] text-[#888] tracking-wide">Гаилә · Дуслар</span>
          </div>
        </div>
      </header>

      {/* CONTENT */}
      <main className="px-8 md:px-16 lg:px-24 pb-24">
        <div className="w-full">

          {/* Блок 1: Фото 1 Чулпан — float right, крупное */}
          <div className="mb-10 w-full">
            <div className="float-right ml-8 mb-4 flex-shrink-0" style={{ width: "clamp(220px, 32%, 400px)" }}>
              <Photo
                src="https://cdn.poehali.dev/files/76126460-9bfb-4a77-950a-2394f0d76c8c.jpg"
                alt="М.Җәлил кызы Чулпан белән"
              />
              <p className="font-body text-[11px] text-[#888] leading-snug italic mt-2 text-center">М.Җәлил кызы Чулпан белән</p>
            </div>

            <p className="font-body text-[16px] md:text-[17px] leading-[1.85] text-[#333] mb-4 text-justify">
              Рафис Корбан Җәлилнең гаиләсе турында: «Муса Җәлил, сугышта булудан тыш, аның тормыш юлы да эчтәлекле. Әминә ханым аның өченче хатыны булган, кызы Чулпан — өченче баласы. Җәлил ике тапкыр гаилә корган булган. Аның беренче хатыны — Рауза ханым. Алар бергә торып китә алмыйлар, ләкин балалары Альберт туа. Альберт абыйны беләм, ул Казан университетының хәрби кафедрасында укыта иде. Аның ике улы — Альберт һәм Камил, алар — Муса Җәлилнең оныклары.
            </p>
            <p className="font-body text-[16px] md:text-[17px] leading-[1.85] text-[#333] mb-4 text-justify">
              Сугыш вакытында Муса Җәлил әсирлеккә эләгә һәм аны сатлыкҗан дип игълан итәләр. Шул сәбәпле, Әминә сугыш вакытында исемен, атасының исемен үзгәрткән. Ул Муса Җәлил акланганчы, 1956 елга кадәр, Нина Константиновна булып йөргән.
            </p>
            <p className="font-body text-[16px] md:text-[17px] leading-[1.85] text-[#333] mb-4 text-justify">
              Ә беренче һәм икенче хатыннары Рауза апа белән Зәкия апа исемнәрен үзгәртмәгән, Муса Җәлилдән балаларына алимент алганнар. Икенче никахы Зәкия апа белән; ул Телевидение һәм радиотапшырулар буенча дәүләт комитетында эшләде. Зәкия апа Муса Җәлилнең беренче гаиләсе булуын белә дә, ирен калдырып, Ташкентка китә һәм шунда Люцияне тудыра.
            </p>
            <p className="font-body text-[16px] md:text-[17px] leading-[1.85] text-[#333] mb-4 text-justify">
              Ике хатынын аерган Муса Җәлил, үзе генә калгач, өченче тапкыр өйләнә. Аның өченче хатыны Әминә була, кызы Чулпан туа. Шулай итеп, Муса Җәлилнең өч баласы — Альберт исемле улы, Люция һәм Чулпан исемле кызлары бар», — дип сөйли Рафис Корбан.<sup className="text-[#aaa] text-[12px] ml-0.5">[1]</sup>
            </p>
            <div className="clear-both" />
          </div>

          {/* Блок 2: Фото 2 Чулпан — float left + фото Рәхимә */}
          <div className="mb-10 w-full">
            <div className="float-left mr-8 mb-4 flex-shrink-0" style={{ width: "clamp(220px, 32%, 400px)" }}>
              <Photo
                src="https://cdn.poehali.dev/files/d8acd805-f3a4-41ed-9e64-b602a459a45b.jpg"
                alt="М.Җәлил кызы Чулпан белән"
              />
              <p className="font-body text-[11px] text-[#888] leading-snug italic mt-2 text-center">М.Җәлил кызы Чулпан белән</p>
            </div>

            <p className="font-body text-[16px] md:text-[17px] leading-[1.85] text-[#333] mb-4 text-justify">
              1936 елның җәендә Муса икътисад техникумын тәмамлаган Әминә Сәйфуллинага өйләнгәч, аның ике никахы һәм ике баласы — Альберт белән Люция була. 1937 елның апрелендә Муса Җәлилнең кече кызы Чулпан туа.<sup className="text-[#aaa] text-[12px] ml-0.5">[2]</sup>
            </p>
            <p className="font-body text-[16px] md:text-[17px] leading-[1.85] text-[#333] mb-4 text-justify">
              Муса Җәлил иҗади мохитта иркен йөзде. Ул заманының иң күренекле шагыйрьләре, композиторлары, театр белгечләре белән тыгыз аралашты. Дустарының даирәсе киң иде — аларның арасында Казанның, Мәскәүнең, Ленинградның сәнгать кешеләре бар иде.
            </p>
            <p className="font-body text-[16px] md:text-[17px] leading-[1.85] text-[#333] mb-4 text-justify">
              «Октябрь баласы» журналы тирәсендә туплашкан яшь каләмдәшләр белән уртаклашу, иҗади фикер алышу аны рухландырды. Бу чор аның шигъри осталыгының формалашуына зур этәргеч булды. Шагыйрь матбугат дөньясында да актив катнашты — журналистлар, газета редакторлары, башкорт шагыйрьләре белән якын мөнәсәбәттә булды, мәдәни күпернәр корды.
            </p>
            <div className="clear-both" />
          </div>

          {/* Блок 3: Фото 3 Чулпан — float right + фото Рәхимә */}
          <div className="mb-10 w-full">
            <div className="float-right ml-8 mb-4 flex-shrink-0" style={{ width: "clamp(220px, 32%, 400px)" }}>
              <Photo
                src="https://cdn.poehali.dev/files/1e928856-9aed-406e-baca-3ab9578b1dd4.jpg"
                alt="М.Җәлил кызы Чулпан белән"
              />
              <p className="font-body text-[11px] text-[#888] leading-snug italic mt-2 text-center">М.Җәлил кызы Чулпан белән</p>
            </div>

            <div className="float-left mr-8 mb-4 flex-shrink-0" style={{ width: "clamp(130px, 18%, 190px)" }}>
              <Photo
                src="https://cdn.poehali.dev/files/27897be3-4fc8-4254-8d62-765e95268039.jpg"
                alt="Муса әнисе Рәхимә һәм сеңлесе Хәдичә белән (1926)"
              />
              <p className="font-body text-[11px] text-[#888] leading-snug italic mt-2 text-center">Муса әнисе Рәхимә һәм сеңлесе Хәдичә белән (1926)</p>
            </div>

            <p className="font-body text-[16px] md:text-[17px] leading-[1.85] text-[#333] mb-4 text-justify">
              Аның тирәсендә оешкан дуслык даирәсе гади аралашудан гына тормады — алар иҗат итәләр, бәхәсләшәләр, уртак идеяләр белән янып яшиләр иде.
            </p>
            <div className="clear-both" />
          </div>

          {/* Цитата Әминә */}
          <div className="mb-10 w-full">
            <p className="font-body text-[12px] md:text-[13px] tracking-[0.2em] uppercase mb-4" style={{ color: "#c0392b" }}>
              М.Җәлилнең хатыны Әминә:
            </p>
            <blockquote className="font-display text-[17px] md:text-[19px] leading-[1.8] text-[#444] italic pl-6" style={{ fontWeight: 300, borderLeft: "2px solid #e5e5e5" }}>
              «Сугыш алдындагы җиде елны, Мусаның иң актив иҗат иткән елларын, без бик тату яшәдек. Чулпан икебезне дә шатландыра иде. Безнең бәхетнең чиге булмас кебек тоелды. Җәлил бик нечкә, сизгер иде. Ул шат күңелле, арымый-талмый көләргә, шаяртырга, күңелле компанияләр, озын кичке әңгәмәләр сөйләргә ярата иде. Назлы, йомшак, ачык күңелле булса да, тигез, тыныч, даими була белә иде.»<sup className="text-[#aaa] text-[12px] ml-0.5">[3]</sup>
            </blockquote>
          </div>

          {/* Источники */}
          <div className="mt-16 pt-10 border-t border-[#e5e5e5]">
            <p className="font-body text-[11px] tracking-[0.25em] uppercase text-[#aaa] mb-4">Чыганаклар</p>
            <ol className="space-y-2 list-none pl-0">
              {[
                "Корбан Р. Муса Җәлилнең гаиләсе: истәлекләр. — Казан, 2001.",
                "Сəйфуллина Г. Муса Мостафа улы Җəлилов: биография. — Казан: ТКИ, 1986.",
                "Сәйфуллина Ә. (Муса Җәлилнең хатыны). Истәлекләр. — Казан: Татарстан китап нәшрияты, 1966.",
              ].map((item, i) => (
                <li key={i} className="flex gap-2 font-body text-[13px] text-[#777] leading-[1.7]">
                  <span className="text-[#aaa] flex-shrink-0">[{i + 1}]</span>
                  <span>{item}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* Navigation */}
          <div className="border-t border-[#e5e5e5] mt-10 pt-10 flex items-center justify-between">
            <Link to="/tormysh" className="flex items-center gap-2 font-body text-[13px] text-[#888] hover:text-[#1a1a1a] transition-colors">
              <Icon name="ArrowLeft" size={15} />
              Тормыш юлы
            </Link>
            <Link to="/ijat" className="flex items-center gap-2 font-body text-[13px] text-[#888] hover:text-[#1a1a1a] transition-colors">
              Иҗат
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