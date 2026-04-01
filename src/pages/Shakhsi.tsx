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

          {/* Блок: Рафис Корбан цитата + 3 фото Муса белән Чулпан */}
          <div className="mb-12 w-full">
            {/* Три фото — float right, вертикально */}
            <div className="float-right ml-8 mb-6 flex flex-col gap-4 w-[180px] md:w-[210px] flex-shrink-0">
              <div>
                <div className="overflow-hidden bg-[#f5f5f5]">
                  <img
                    src="https://cdn.poehali.dev/files/76126460-9bfb-4a77-950a-2394f0d76c8c.jpg"
                    alt="Муса Җәлил кызы Чулпан белән"
                    className="w-full h-auto object-cover grayscale"
                  />
                </div>
                <p className="font-body text-[11px] text-[#888] leading-snug italic mt-2 text-center">Муса Җәлил кызы Чулпан белән</p>
              </div>
              <div>
                <div className="overflow-hidden bg-[#f5f5f5]">
                  <img
                    src="https://cdn.poehali.dev/files/d8acd805-f3a4-41ed-9e64-b602a459a45b.jpg"
                    alt="Муса Җәлил кызы Чулпан белән"
                    className="w-full h-auto object-cover grayscale"
                  />
                </div>
                <p className="font-body text-[11px] text-[#888] leading-snug italic mt-2 text-center">Муса Җәлил кызы Чулпан белән</p>
              </div>
              <div>
                <div className="overflow-hidden bg-[#f5f5f5]">
                  <img
                    src="https://cdn.poehali.dev/files/1e928856-9aed-406e-baca-3ab9578b1dd4.jpg"
                    alt="Муса Җәлил кызы Чулпан белән"
                    className="w-full h-auto object-cover grayscale"
                  />
                </div>
                <p className="font-body text-[11px] text-[#888] leading-snug italic mt-2 text-center">Муса Җәлил кызы Чулпан белән</p>
              </div>
            </div>

            <p className="font-body text-[16px] md:text-[17px] leading-[1.85] text-[#333] mb-5">
              Рафис Корбан Җәлилнең гаиләсе турында: «Муса Җәлил, сугышта булудан тыш, аның тормыш юлы да эчтәлекле. Әминә ханым аның өченче хатыны булган, кызы Чулпан — өченче баласы.
            </p>
            <p className="font-body text-[16px] md:text-[17px] leading-[1.85] text-[#333] mb-5">
              Җәлил ике тапкыр гаилә корган булган. Аның беренче хатыны — Рауза ханым. Алар бергә торып китә алмыйлар, ләкин балалары Альберт туа. Альберт абыйны беләм, ул Казан университетының хәрби кафедрасында укыта иде. Аның ике улы — Альберт һәм Камил, алар — Муса Җәлилнең оныклары. Китап язганда шагыйрьнең оныклары белән очраштым, алардан кызыклы материаллар алдым. Бу китапны тәкъдим итү чарасына аларны чакырдым. Камил, сәхнәгә менеп, халыкка күренде.
            </p>
            <p className="font-body text-[16px] md:text-[17px] leading-[1.85] text-[#333] mb-5">
              Сугыш вакытында Муса Җәлил әсирлеккә эләгә һәм аны сатлыкҗан дип игълан итәләр. Шул сәбәпле, Әминә сугыш вакытында исемен, атасының исемен үзгәрткән. Ул Муса Җәлил акланганчы, 1956 елга кадәр, Нина Константиновна булып йөргән.
            </p>
            <div className="clear-both" />
          </div>

          {/* Блок: фото 4 — Муса әнисе Рәхимә һәм сеңлесе Хәдичә белән + текст */}
          <div className="mb-12 w-full">
            <div className="float-left mr-8 mb-6 w-[200px] md:w-[240px] flex-shrink-0">
              <div className="overflow-hidden bg-[#f5f5f5]">
                <img
                  src="https://cdn.poehali.dev/files/27897be3-4fc8-4254-8d62-765e95268039.jpg"
                  alt="Муса әнисе Рәхимә һәм сеңлесе Хәдичә белән (1926)"
                  className="w-full h-auto object-cover grayscale"
                />
              </div>
              <p className="font-body text-[11px] text-[#888] leading-snug italic mt-2 text-center">Муса әнисе Рәхимә һәм сеңлесе Хәдичә белән (1926)</p>
            </div>

            <p className="font-body text-[16px] md:text-[17px] leading-[1.85] text-[#333] mb-5">
              Ә беренче һәм икенче хатыннары Рауза апа белән Зәкия апа исемнәрен үзгәртмәгән, Муса Җәлилдән балаларына алимент алганнар.
            </p>
            <p className="font-body text-[16px] md:text-[17px] leading-[1.85] text-[#333] mb-5">
              Икенче никахы Зәкия апа белән, аның белән шулай ук аралаштым. Ул Телевидение һәм радиотапшырулар буенча дәүләт комитетында эшләде. Зәкия апа Муса Җәлилнең беренче гаиләсе булуын белә дә, ирен калдырып, Ташкентка китә һәм шунда Люцияне тудыра.
            </p>
            <p className="font-body text-[16px] md:text-[17px] leading-[1.85] text-[#333] mb-5">
              Ике хатынын аерган Муса Җәлил, үзе генә калгач, өченче тапкыр өйләнә. Аның өченче хатыны Әминә була, кызы Чулпан туа.
            </p>
            <p className="font-body text-[16px] md:text-[17px] leading-[1.85] text-[#333] mb-5">
              Җәлил аклангач, беренче булып Әминә ханым һәм Чулпан кызы таныла, ә калганнар, аерылган хатыннар булгач, онытыла», — дип сөйли Рафис Корбан. Бу хакта «Интертат» язган.
            </p>
            <p className="font-body text-[16px] md:text-[17px] leading-[1.85] text-[#333] mb-5">
              Шулай итеп, Муса Җәлилнең өч баласы — Альберт исемле улы, Люция һәм Чулпан исемле кызлары бар.
            </p>
            <div className="clear-both" />
          </div>

          {/* Блок: 1936 ел, Әминә */}
          <div className="mb-12 w-full">
            <p className="font-body text-[16px] md:text-[17px] leading-[1.85] text-[#333] mb-5">
              1936 елның җәендә Муса икътисад техникумын тәмамлаган Әминә Сәйфуллинага өйләнгәч, аның ике никахы һәм ике баласы – Альберт белән Люция була.
            </p>
            <p className="font-body text-[16px] md:text-[17px] leading-[1.85] text-[#333] mb-5">
              1937 елның апрелендә Муса Җәлилнең кече кызы Чулпан туа.
            </p>
          </div>

          {/* Блок: иҗади мохит */}
          <div className="mb-12 w-full">
            <p className="font-body text-[16px] md:text-[17px] leading-[1.85] text-[#333] mb-5">
              Муса Җәлил иҗади мохитта иркен йөзде. Ул заманының иң күренекле шагыйрьләре, композиторлары, театр белгечләре белән тыгыз аралашты. Дустарының даирәсе киң иде — аларның арасында Казанның, Мәскәүнең, Ленинградның сәнгать кешеләре бар иде.
            </p>
            <p className="font-body text-[16px] md:text-[17px] leading-[1.85] text-[#333] mb-5">
              «Октябрь баласы» журналы тирәсендә туплашкан яшь каләмдәшләр белән уртаклашу, иҗади фикер алышу аны рухландырды. Бу чор аның шигъри осталыгының формалашуына зур этәргеч булды.
            </p>
          </div>

          {/* Блок: журналистлар */}
          <div className="mb-12 w-full">
            <p className="font-body text-[16px] md:text-[17px] leading-[1.85] text-[#333] mb-5">
              Шагыйрь матбугат дөньясында да актив катнашты. Журналистлар, газета редакторлары, башкорт шагыйрьләре белән якын мөнәсәбәттә булды — мәдәни күпернәр корды, милли әдәбиятны бергәләп үстерде.
            </p>
            <p className="font-body text-[16px] md:text-[17px] leading-[1.85] text-[#333] mb-5">
              Аның тирәсендә оешкан дуслык даирәсе гади аралашудан гына тормады — алар иҗат итәләр, бәхәсләшәләр, уртак идеяләр белән янып яшиләр иде.
            </p>
          </div>

          {/* Блок: цитата хатыны Әминә */}
          <div className="mb-14 w-full">
            <p className="font-body text-[12px] md:text-[13px] tracking-[0.2em] uppercase text-[#888] mb-4">
              М.Җәлилнең хатыны Әминә:
            </p>
            <blockquote className="font-display text-[17px] md:text-[19px] leading-[1.8] text-[#444] italic pl-6" style={{ fontWeight: 300, borderLeft: "2px solid #e5e5e5" }}>
              «Сугыш алдындагы җиде елны, Мусаның иң актив иҗат иткән елларын, без бик тату яшәдек. Чулпан икебезне дә шатландыра иде. Безнең бәхетнең чиге булмас кебек тоелды. Җәлил бик нечкә, сизгер иде.
              <br /><br />
              Ул шат күңелле, арымый-талмый көләргә, шаяртырга, күңелле компанияләр, озын кичке әңгәмәләр сөйләргә ярата иде. Назлы, йомшак, ачык күңелле булса да, тигез, тыныч, даими була белә иде.»
            </blockquote>
          </div>

          {/* Navigation */}
          <div className="border-t border-[#e5e5e5] mt-16 pt-10 flex items-center justify-between">
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
