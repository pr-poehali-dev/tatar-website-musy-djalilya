import { useState, CSSProperties } from "react";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";
import SiteNav from "@/components/SiteNav";

function PhotoLightbox({ src, alt, onClose }: { src: string; alt: string; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 cursor-zoom-out" onClick={onClose}>
      <button className="absolute top-5 right-5 text-white/70 hover:text-white transition-colors" onClick={onClose} aria-label="Закрыть">
        <Icon name="X" size={28} />
      </button>
      <img src={src} alt={alt} className="max-w-full max-h-[90vh] object-contain shadow-2xl" onClick={(e) => e.stopPropagation()} />
      <p className="absolute bottom-6 left-0 right-0 text-center font-body text-[13px] text-white/60 italic px-4">{alt}</p>
    </div>
  );
}

interface TPhoto { src: string; alt: string; caption?: string; wrapClass?: string; wrapStyle?: CSSProperties; }
function Photo({ src, alt, caption, wrapClass = "", wrapStyle }: TPhoto) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className={`flex-shrink-0 ${wrapClass}`} style={wrapStyle}>
        <div className="overflow-hidden bg-[#f5f5f5] cursor-zoom-in group relative" onClick={() => setOpen(true)} title="Зурайту өчен басыгыз">
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

export default function Tormysh() {
  return (
    <div className="min-h-screen bg-white text-[#1a1a1a]" style={{ fontFamily: "'Golos Text', sans-serif" }}>

      {/* NAV */}
      <SiteNav />

      {/* HEADER */}
      <header className="pt-28 pb-16 px-8 md:px-16 lg:px-24">
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
            <span className="font-body text-[13px] text-[#888] tracking-wide">1906–1944</span>
          </div>
        </div>
      </header>

      {/* CONTENT */}
      <main className="px-8 md:px-16 lg:px-24 pb-24">
        <div className="w-full">

          {/* BLOCK 1: Фото 2 (шәкерт 1916) — float right */}
          <div className="mb-12 w-full">
            <Photo
              src="https://cdn.poehali.dev/files/6c421466-ebaa-464c-a9a8-04f8030b85f3.jpg"
              alt="Муса Җәлил — шәкерт. 1916 ел"
              caption="Муса Җәлил — шәкерт. 1916 ел"
              wrapClass="float-right ml-8 mb-4"
              wrapStyle={{ width: "clamp(140px, 18%, 200px)" }}
            />

            <p className="font-body text-[16px] md:text-[17px] leading-[1.85] text-[#333] mb-5 text-justify">
              Муса Җәлил 1906 елның 15 февралендə Ырынбур губернасының Мостафа авылында дөньяга килə.
            </p>
            <p className="font-body text-[16px] md:text-[17px] leading-[1.85] text-[#333] mb-5 text-justify">
              Алты яшендə əтисе Мостафа кечкенə Мусаны авыл мəктəбенə бирə. Бу мəктəптə ул бер ел эчендə 4 еллык уку программасын үзлəштерə.
            </p>
            <p className="font-body text-[16px] md:text-[17px] leading-[1.85] text-[#333] mb-5 text-justify">
              Алга таба Муса тормышын шəһəрдə дəвам итə. Бурычка алынган акчага ачылган кибет көтелгəн табышны алып килмəгəнлектəн, Мусаның əтисе Мостафа гаилəсе белəн Ырынбурга күченеп китə.
            </p>
            <p className="font-body text-[16px] md:text-[17px] leading-[1.85] text-[#333] mb-5 text-justify">
              1914 елда əдип шəкерт булып, «Хөсəения»гə укырга керə. Нəкъ шул ук елны ул беренче тапкыр сəхнəдəн əдəби əсəрлəр укый: Габдулла Тукай шигырьлəре həм А.С.Пушкинның əкиятлəре. Муса еш кына «Белек» китапханəсенə йөри торган була. Анда ул танылган язучы Шəриф Камал белəн таныша.
            </p>
            <p className="font-body text-[16px] md:text-[17px] leading-[1.85] text-[#333] mb-5 text-justify">
              1915 елда Җəлил апасы Мəрьямгə бөек язучы булырга хыялланганы турында сөйли.
            </p>
            <p className="font-body text-[16px] md:text-[17px] leading-[1.85] text-[#333] mb-5 text-justify">
              Тиздəн яшь шагыйрь турында Оренбургның танылган язучысы Төхфəт Ченекəй ишетеп ала. Ул «Хөсəения»гə килеп, Мусаны эзлəп таба həм аңа гарəп, фарсы, татар классикаларын укырга бирə, спектакльлəргə, əдəби кичəлəргə алып бара.
            </p>
            <div className="clear-both" />
          </div>

          {/* BLOCK 2: Фото 3 (Рабфак студенты 1923) — float left */}
          <div className="mb-12 w-full">
            <Photo
              src="https://cdn.poehali.dev/files/2e183264-7839-4479-99ea-f2ee4b13d032.jpg"
              alt="Рабфак студенты. 1923 ел"
              caption="Рабфак студенты. 1923 ел"
              wrapClass="float-left mr-8 mb-4"
              wrapStyle={{ width: "clamp(150px, 20%, 220px)" }}
            />

            <p className="font-body text-[16px] md:text-[17px] leading-[1.85] text-[#333] mb-5 text-justify">
              Даими рəвештə хəерчелек чигендə булган күп балалы гаилəгə исəн калу җиңел булмаган. 1916 елның маенда Оренбургта казаклар тарафыннан каты бастырылган ач фетнə кабынып китə.
            </p>
            <p className="font-body text-[16px] md:text-[17px] leading-[1.85] text-[#333] mb-5 text-justify">
              Февраль революциясеннəн соң шəһəр шаулый башлый. Бу ике хакимлек həм идеялəр көрəше чоры була, шул исəптəн мəдрəсəдə дə. Муса бу шау-шулы тормышка актив кушыла. Ул стена газеталары həм кулъязма журнал өчен шигырьлəр яза həм хəтта ике пьеса да иҗат итə. Шул 11 яшьлек Муса язган пьесаларның берсе («Явыз») Оренбург шəһəр театрында куела.
            </p>
            <p className="font-body text-[16px] md:text-[17px] leading-[1.85] text-[#333] mb-5 text-justify">
              1917 елның октябрендə шəһəрдə həм губернада хакимиятне казак атаманы Дутов ала.
            </p>
            <p className="font-body text-[16px] md:text-[17px] leading-[1.85] text-[#333] mb-5 text-justify">
              1918 елның гыйнвар ахырында Кызыл Армия Ырынбурда Совет хакимиятен урнаштыра. Ə апрельдə казаклар кайтып, сугыш оештыралар. Йөзлəрчə мəет, кан, авырту, ярсу... Кызыллар акларны шəһəрдəн куып чыгаралар. Үлгəннəрне күмү митингка əверелə.
            </p>
            <p className="font-body text-[16px] md:text-[17px] leading-[1.85] text-[#333] mb-5 text-justify">
              Ул шигырь язып, аны Ченекəйгə китерə. Шактый соңрак, егерменче гасырның җитмешенче елларында, Ырынбур төбəкне өйрəнүче Ибəтулла Таңалин Җəлилнең 1918 елның 15 октябрендə язылган шигырен таба. Ул безгə килеп җиткəн шигырьлəрнең беренчесе булып санала həм «кечкенə Җəлил» дип имзалана.
            </p>
            <div className="clear-both" />
          </div>

          {/* BLOCK 3: Фото 4 (уком бюросы 1925) — float right */}
          <div className="mb-12 w-full">
            <Photo
              src="https://cdn.poehali.dev/files/6db5b160-edd6-45ae-8d2d-7a872ebaef0f.jpg"
              alt="1925 елгы уком бюросы. Зайцев, Юдохин, Яковлев, Заикин, Җәлил, Сивожелезов тора."
              caption="1925 елгы уком бюросы. Зайцев, Юдохин, Яковлев, Заикин, Җәлил, Сивожелезов тора."
              wrapClass="float-right ml-8 mb-4"
              wrapStyle={{ width: "clamp(150px, 20%, 220px)" }}
            />

            <p className="font-body text-[16px] md:text-[17px] leading-[1.85] text-[#333] mb-5 text-justify">
              1919 елда Муса комсомолга керə həм ул заманнан башлап аның тормышы революцион идеялəр белəн тыгыз бəйлəнгəн була. Яшь шагыйрь берьюлы берничə юнəлештə эшли: шигырьлəр яза, оештыру эше алып бара, матбугатта актив катнаша.
            </p>
            <p className="font-body text-[16px] md:text-[17px] leading-[1.85] text-[#333] mb-5 text-justify">
              1920 елларда Муса Мəскəүгə күченə həм анда əдəби-иҗади тормышы яңа баскычка күтəрелə. Ул эшчелəр факультетында (рабфак) белем ала, яшь иҗатчылар берлəшмəлəрендə актив катнаша.
            </p>
            <p className="font-body text-[16px] md:text-[17px] leading-[1.85] text-[#333] mb-5 text-justify">
              Комсомол оешмасында эшлəгəндə, Муса лидерлык сыйфатлары күрсəтə. Яшьлəр арасында зур ихтирам казана, аны оештыру эшлəренə, митингларга, мəдəни чараларга актив тарталар.
            </p>
            <p className="font-body text-[16px] md:text-[17px] leading-[1.85] text-[#333] mb-5 text-justify">
              Уком бюросы составында Муса Җəлил татар яшьлəренең мəдəни-мəгариф мəсьəлəлəре буенча актив эш алып бара. Ул татар теле həм мəдəниятен яклауга зур көч куя.
            </p>
            <div className="clear-both" />
          </div>

          {/* BLOCK 4: Фото 5 (Мәскәү университеты 1929) — float left */}
          <div className="mb-12 w-full">
            <Photo
              src="https://cdn.poehali.dev/files/4d875f7c-7af0-4d4e-a387-2eee598a6132.jpg"
              alt="Мәскәү университеты студенты. 1929 ел"
              caption="Мәскәү университеты студенты. 1929 ел"
              wrapClass="float-left mr-8 mb-4"
              wrapStyle={{ width: "clamp(180px, 26%, 240px)" }}
            />

            <p className="font-body text-[16px] md:text-[17px] leading-[1.85] text-[#333] mb-5 text-justify">
              1925 елда Муса Мəскəү дəүлəт университетының əдəбият факультетына укырга керə. Монда ул рус həм дөнья əдəбияты белəн тирəнрəк таныша, əдəби осталыгын камиллəштерə.
            </p>
            <p className="font-body text-[16px] md:text-[17px] leading-[1.85] text-[#333] mb-5 text-justify">
              Студентлык еллары Мусаның иҗади үсешендə мөһим роль уйный. Ул университетта яшь шагыйрьлəр, язучылар, мəдəният əһеллəре белəн аралаша, алардан күп нəрсə өйрəнə.
            </p>
            <p className="font-body text-[16px] md:text-[17px] leading-[1.85] text-[#333] mb-5 text-justify">
              Бу елларда Муса татар балалары өчен əдəби əсəрлəр, шигырьлəр яза. Аның иҗаты кеше тормышының иң мөһим мəсьəлəлəренə — хөрриятккə, гаделлеккə, мəхəббəткə мөрəҗəгать итə.
            </p>
            <p className="font-body text-[16px] md:text-[17px] leading-[1.85] text-[#333] mb-5 text-justify">
              1929 елда университетны тəмамлагач, Муса Казанга кайта həм анда əдəби эшчəнлеген дəвам итə. Ул газеталарда, журналларда эшли, татар əдəбиятының үсешенə зур өлеш кертə.
            </p>
            <div className="clear-both" />
          </div>

          {/* BLOCK 5: Текст 1927-1956 */}
          <div className="mb-12 w-full">
            <p className="font-body text-[16px] md:text-[17px] leading-[1.85] text-[#333] mb-5 text-justify">
              Бер үк вакытта ул 1927-1931 елларда I Мәскәү дәүләт университетының әдәбият-сәнгать факультетында укып югары белем ала. 1929 елда М. Җәлил партия сафына член булып керә.
            </p>
            <p className="font-body text-[16px] md:text-[17px] leading-[1.85] text-[#333] mb-5 text-justify">
              1933-1934 елларда М. Җәлил Мәскәүдә татар телендә чыга торган «Коммунист» газетасының әдәбият-сәнгать бүлеген җитәкли. Үзәк газеталарда эшләгән елларда ул, журналист-хәбәрче буларак, күп кенә промышленность предприятиеләренә, колхоз-совхозларга бара, халыкның тормышы һәм хезмәте белән якыннан таныша. Болар һәммәсе аның әдәби иҗатында билгеле бер чагылыш табалар. 1934 елда шагыйрьнең күп кенә шигырьләрен эченә алган шактый зур җыентыгы («Орденлы миллионнар») басыла һәм шул ук елны «Стихи Мусы Джалиля» исеме белән сайланма шигырьләре беренче мәртәбә рус телендә чыга.
            </p>
            <p className="font-body text-[16px] md:text-[17px] leading-[1.85] text-[#333] mb-5 text-justify">
              1935 елда Мәскәү дәүләт консерваториясе каршында татар опера театрына профессиональ кадрлар әзерләү өчен Татар опера студиясе оештырылгач, М. Җәлилне шунда әдәби бүлек мөдире итеп эшкә чакыралар. Шагыйрь үзе өчен яңа бу хезмәткә дәртләнеп тотына, чагыштырмача кыска гына вакыт эчендә опера сәнгатенең специфик үзенчәлекләрен, классик опера һәм балет либреттоларының язылу хасиятләрен профессиональ белгеч дәрәҗәсендә үзләштереп, студиядә зур оештыру эшләре алып бара: үз тирәсенә дистәләрчә шагыйрьләрне һәм композиторларны туплый, аларны сәнгатьнең катлаулы тармагында иҗат итәргә рухландыра, либреттолар язарга булыша, беренче татар операларының тууына турыдан-туры иҗади ярдәмен күрсәтә.
            </p>
            <p className="font-body text-[16px] md:text-[17px] leading-[1.85] text-[#333] mb-5 text-justify">
              1938 елда студиядә укуын тәмамлап Казанга кайткач та М. Җәлил опера театрының әдәби бүлек җитәкчесе булып эшләвен дәвам иттерә. Композиторлар белән аралашу, музыка дөньясы белән тыгыз бәйләнеш тоту Җәлил иҗатында яңа үзгәрешләр тууга сәбәп була: әсәрләрендә лирик җылылык, музыкальлек, нәфислек, халыкчан табигыйлек хасиятләре көчәя, җыр һәм романслар иҗат итүгә игътибар арта. «Сагыну», «Җир җиләгем», «Җырым булсын бүләгем», «Карашларың» кебек хисләрнең сафлыгы һәм тирәнлеге белән аерылып торган шигырьләр, композиторлар тарафыннан музыкага салынып, халыкның яраткан җырларына әвереләләр. Әдипнең иҗатында бөтенләй яңа жанр — драматик поэма жанры да барлыкка килә. «Алтынчәч» (1935-1941), «Илдар» (1940) драматик поэмалары нигезендә композитор Н. Җиһанов соңыннан үзенең атаклы операларын иҗат итә.
            </p>
            <p className="font-body text-[16px] md:text-[17px] leading-[1.85] text-[#333] mb-5 text-justify">
              М. Җәлилнең 1934-1941 еллар арасында язган лирик шигырьләре, җырлары, «Хат ташучы» (1938), «Алтынчәч» кебек поэмалары сугышка кадәрге татар совет поэзиясенең үзенчәлекле бер казанышы буларак тәкъдир ителәләр. 1939 елда М. Җәлил Татарстан Язучылар союзы идарәсенең җаваплы секретаре итеп билгеләнә. Шул ук елны Казан хезмәт ияләре аны шәһәр советына депутат итеп сайладылар. Ватан сугышын ул шушы җаваплы постларда эшләгән җәмәгать эшлеклесе һәм күренекле әдип сыйфатында каршылый.
            </p>
            <p className="font-body text-[16px] md:text-[17px] leading-[1.85] text-[#333] mb-5 text-justify">
              1941 елның июль аенда М. Җәлил армиягә алына. Башта ул Казан гарнизоны хәрби частендә рядовой кызылармеец булып хезмәт итә, аннары Курск өлкәсендәге политработниклар әзерли торган алты айлык курсларга укырга җибәрелә. Курск өлкәсенә фашист гаскәрләре якынлашкач, курслар Татарстанның Минзәлә шәһәренә эвакуацияләнә. 1941 елның декабрендә курсларны тәмамлагач, өлкән политрук М. Җәлил Мәскәү аша фронтка китә (февраль, 1942). Ул Төньяк-көнбатыш фронтта чыга торган «Отвага» исемле газетаның алгы сызыктагы хәрби корреспонденты итеп билгеләнә. 1942 елның июнендә Волхов юнәлешендә барган канлы сугышлар вакытында, аларның часте чолганышта калып, М. Җәлил каты яраланган хәлендә дошман кулына эләгә. Шул көннән патриот шагыйрьнең фашист тоткынлыгындагы газаплы һәм героик тормыш этабы башлана.
            </p>
            <p className="font-body text-[16px] md:text-[17px] leading-[1.85] text-[#333] mb-5 text-justify">
              М. Җәлил һәм җәлилчеләрнең, яшерен оешма төзеп, фашизмга каршы алып барган героик көрәше, каһарманлыклары турында дистәләрчә китаплар — романнар, повестьлар, драма әсәрләре һәм поэмалар язылган, кинофильмнар төшерелгән. Иң мөһиме: Җәлил һәм аның иптәшләре ахыргы сулышларына кадәр ватан алдында турылыклы булып калалар һәм фашизмга каршы көрәштә тиңдәшсез рухи ныклык, батырлык үрнәге күрсәтәләр.
            </p>
            <p className="font-body text-[16px] md:text-[17px] leading-[1.85] text-[#333] mb-5 text-justify">
              1944 елның февраль аенда Җәлилгә һәм аның көрәштәшләренә Дрезденда суд була. Фашистик хәрби суд аларны, «дәүләткә каршы җимерү эше» алып баруда гаепләп, үлем җәзасына хөкем итә. Шул елның 25 августында Плетцензее төрмәсендә унбер җәлилченең гомере өзелә.
            </p>
            <p className="font-body text-[16px] md:text-[17px] leading-[1.85] text-[#333] mb-5 text-justify">
              1956 елның 2 февралендә СССР Верховный Советы Президиумы Указы белән Муса Җәлилгә Ватан сугышы чорында күрсәткән тиңдәшсез ныклыгы һәм батырлыгы өчен Советлар Союзы Герое исеме бирелде, ә әсирлектә тудырган поэтик иҗаты — бөтен дөньяга мәшһүр «Моабит дәфтәрләре» Ленин премиясенә лаек булды.
            </p>
            <p className="font-body text-[16px] md:text-[17px] leading-[1.85] text-[#333] mb-5 text-justify">
              «Моабит дәфтәрләре» — Җәлил поэзиясенең иң югары ноктасы. Моабит шигырьләрендә шагыйрьнең шәхси образы, кичерешләре, фәлсәфи уйланулары аша кеше рухының бөеклеге, куркусызлыгы, гуманистик табигате, гаделлек һәм хаклык тантанасына якты ышанычы, туган иленә, туган халкына чиксез мәхәббәте гаҗәеп зур эмоциональ көч һәм сәнгатьчә камиллек белән гәүдәләнә.
            </p>
            <p className="font-body text-[16px] md:text-[17px] leading-[1.85] text-[#333] mb-5 text-justify">
              Моабит шигырьләре шагыйрьне әдәбиятның бөтен дөнья орбитасына алып чыкты. Бу шигырьләр, СССРдагы барлык милли телләргә тәрҗемә ителүдән тыш, инглиз, француз, испан, немец, гарәп, япон, венгр, румын, чех, корея һәм башка чит ил халыклары телләрендә дә кат-кат басылдылар.
            </p>
            <p className="font-body text-[16px] md:text-[17px] leading-[1.85] text-[#333] mb-5 text-justify">
              М. Җәлилнең әдәби мирасы күп милләтле совет әдәбиятының кыйммәтле бер казанышы булып тора. Аның әсәрләре кешеләрдә матур, гуманистик тойгылар уята, аларны тормыштагы матурлыкны күрергә һәм шул матурлык өчен көрәшергә чакыра.
            </p>
          </div>

          {/* Navigation to next section */}
          <div className="border-t border-[#e5e5e5] mt-10 pt-10 flex items-center justify-between">
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