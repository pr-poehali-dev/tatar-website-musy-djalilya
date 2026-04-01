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

          {/* Блок: Рафис Корбан цитата + фото 1 */}
          <div className="mb-12 w-full">
            {/* Фото 1 — float right */}
            <div className="float-right ml-8 mb-4 w-[200px] md:w-[230px] flex-shrink-0">
              <div className="overflow-hidden bg-[#f5f5f5]">
                <img
                  src="https://cdn.poehali.dev/files/742e5181-1e9c-4766-bf96-aef1cbe530c9.jpg"
                  alt="Җәлил кызы Чулпан белән"
                  className="w-full h-auto object-cover grayscale"
                />
              </div>
              <p className="font-body text-[12px] text-[#888] leading-snug italic mt-2">Җәлил кызы Чулпан белән</p>
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

          {/* Блок: фото 2 + продолжение текста Рафиса Корбана */}
          <div className="mb-12 w-full">
            {/* Фото 2 — float left */}
            <div className="float-left mr-8 mb-4 w-[200px] md:w-[230px] flex-shrink-0">
              <div className="overflow-hidden bg-[#f5f5f5]">
                <img
                  src="https://cdn.poehali.dev/files/3c690fed-30e4-49dc-8882-3c93789f2802.jpg"
                  alt="Муса Җәлил хатыны Әминә белән"
                  className="w-full h-auto object-cover grayscale"
                />
              </div>
              <p className="font-body text-[12px] text-[#888] leading-snug italic mt-2">Муса Җәлил хатыны Әминә белән</p>
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

          {/* Блок: фото 3 + доп текст про Әминә */}
          <div className="mb-12 w-full">
            {/* Фото 3 — float right */}
            <div className="float-right ml-8 mb-4 w-[210px] md:w-[250px] flex-shrink-0">
              <div className="overflow-hidden bg-[#f5f5f5]">
                <img
                  src="https://cdn.poehali.dev/files/c6b18311-b77e-408c-a00d-20dc42832ca5.jpg"
                  alt="Муса Җәлил гаилә фотосы"
                  className="w-full h-auto object-cover grayscale"
                />
              </div>
              <p className="font-body text-[12px] text-[#888] leading-snug italic mt-2">Муса Җәлил гаилә фотосы</p>
            </div>

            <p className="font-body text-[16px] md:text-[17px] leading-[1.85] text-[#333] mb-5">
              1936 елның җәендә Муса икътисад техникумын тәмамлаган Әминә Сәйфуллинага өйләнгәч, аның ике никахы һәм ике баласы – Альберт белән Люция була.
            </p>
            <p className="font-body text-[16px] md:text-[17px] leading-[1.85] text-[#333] mb-5">
              1937 елның апрелендә Муса Җәлилнең кече кызы Чулпан туа.
            </p>
            <div className="clear-both" />
          </div>

          {/* Блок: фото Җәүдәт Фәйзи + 1929 ел */}
          <div className="mb-12 w-full">
            <div className="float-left mr-8 mb-4 w-[220px] md:w-[260px] flex-shrink-0">
              <div className="overflow-hidden bg-[#f5f5f5]">
                <img
                  src="https://cdn.poehali.dev/files/d6bcfa10-6366-48e7-80b7-942643a73d0f.jpg"
                  alt="Җәүдәт Фәйзи һ.б. 1929 ел"
                  className="w-full h-auto object-cover grayscale"
                />
              </div>
              <p className="font-body text-[11px] text-[#888] leading-snug italic mt-2">
                Җәүдәт Фәйзи (атаклы «Галиябану» авторы). Утырып торалар (сулдан уңга): композитор Александр Ключарев, Муса Җәлил, театр белгече Хәсән Гобәйдуллин. 1929 ел.
              </p>
            </div>

            {/* Блок: фото «Октябрь баласы» + 1929 ел */}
            <div className="float-right ml-8 mb-4 w-[220px] md:w-[260px] flex-shrink-0">
              <div className="overflow-hidden bg-[#f5f5f5]">
                <img
                  src="https://cdn.poehali.dev/files/cb3960e0-d20b-462d-ab08-acc595a9d319.jpg"
                  alt="М.Җәлил «Октябрь баласы» журналы авторлары арасында, 1929 ел"
                  className="w-full h-auto object-cover grayscale"
                />
              </div>
              <p className="font-body text-[11px] text-[#888] leading-snug italic mt-2">
                М.Җәлил «Октябрь баласы» журналы авторлары арасында. Сулдан уңга утырып торалар: М. Җәлил, М. Гобәйдуллина, Т. Ченекай. Басып торалар: М.Әмир, М. Габитова, Ә. Бикмуллина. 1929 ел.
              </p>
            </div>

            <p className="font-body text-[16px] md:text-[17px] leading-[1.85] text-[#333] mb-5">
              Муса Җәлил иҗади мохитта иркен йөзде. Ул заманының иң күренекле шагыйрьләре, композиторлары, театр белгечләре белән тыгыз аралашты. Дустарының даирәсе киң иде — аларның арасында Казанның, Мәскәүнең, Ленинградның сәнгать кешеләре бар иде.
            </p>
            <p className="font-body text-[16px] md:text-[17px] leading-[1.85] text-[#333] mb-5">
              «Октябрь баласы» журналы тирәсендә туплашкан яшь каләмдәшләр белән уртаклашу, иҗади фикер алышу аны рухландырды. Бу чор аның шигъри осталыгының формалашуына зур этәргеч булды.
            </p>
            <div className="clear-both" />
          </div>

          {/* Блок: фото журналистлар 1934 + текст */}
          <div className="mb-12 w-full">
            <div className="float-right ml-8 mb-4 w-[220px] md:w-[260px] flex-shrink-0">
              <div className="overflow-hidden bg-[#f5f5f5]">
                <img
                  src="https://cdn.poehali.dev/files/b9e71a81-7a32-4cd0-873b-21bd21a27984.jpg"
                  alt="М. Җәлил журналистлар арасында, 1934 ел"
                  className="w-full h-auto object-cover grayscale"
                />
              </div>
              <p className="font-body text-[11px] text-[#888] leading-snug italic mt-2">
                М. Җәлил журналистлар арасында. Сулдан уңга: З. Кормашев — «Ленинградский рабочий» газетасы редакторы урынбасары, Ю. Гайса — башкирский шагыйрь, В. Садри — «Коммунист» газетасының җаваплы сәркатибе һәм М.Җәлил. 1934 елның 10 декабре.
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

          {/* Цитата хатыны Әминә + фото */}
          <div className="mb-14 w-full">
            {/* Фото 4 — float left */}
            <div className="float-left mr-8 mb-4 w-[200px] md:w-[230px] flex-shrink-0">
              <div className="overflow-hidden bg-[#f5f5f5]">
                <img
                  src="https://cdn.poehali.dev/files/9b87675c-b136-49c9-af4c-33024dd6fd0a.jpg"
                  alt="Муса Җәлил хатыны Әминә белән, 1937 ел"
                  className="w-full h-auto object-cover grayscale"
                />
              </div>
              <p className="font-body text-[12px] text-[#888] leading-snug italic mt-2">
                Муса Җәлил хатыны Әминә белән
              </p>
            </div>

            {/* Цитата хатыны Әминә */}
            <div className="border-l-2 border-[#c0392b] pl-6 py-2 mb-5">
              <p className="font-body text-[12px] md:text-[13px] tracking-[0.2em] uppercase text-[#c0392b] mb-4">
                М.Җәлилнең хатыны Әминә:
              </p>
              <blockquote className="font-display text-[17px] md:text-[19px] leading-[1.8] text-[#444] italic" style={{ fontWeight: 300 }}>
                «Сугыш алдындагы җиде елны, Мусаның иң актив иҗат иткән елларын, без бик тату яшәдек. Чулпан икебезне дә шатландыра иде. Безнең бәхетнең чиге булмас кебек тоелды. Җәлил бик нечкә, сизгер иде.
                <br /><br />
                Ул шат күңелле, арымый-талмый көләргә, шаяртырга, күңелле компанияләр, озын кичке әңгәмәләр сөйләргә ярата иде. Назлы, йомшак, ачык күңелле булса да, тигез, тыныч, даими була белә иде.»
              </blockquote>
            </div>
            <div className="clear-both" />
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
