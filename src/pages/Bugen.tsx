import { useState } from "react";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const letterPhotos = [
  { src: "https://cdn.poehali.dev/files/dc9b8534-911f-4d71-9e1b-3ea7e1a8e1d8.jpg", caption: "Муса Җәлилнең Сталинга хаты. 1 бит" },
  { src: "https://cdn.poehali.dev/files/48bded45-ced8-4e6a-a997-37cdef379cf4.jpg", caption: "Муса Җәлилнең Сталинга хаты. 2 бит" },
  { src: "https://cdn.poehali.dev/files/19b9dedd-8949-4065-8816-ec8fb983823a.jpg", caption: "Муса Җәлилнең Сталинга хаты. 3 бит" },
  { src: "https://cdn.poehali.dev/files/826cb8cc-3181-4d76-909e-c645f88b9d69.jpg", caption: "Муса Җәлилнең Сталинга хаты. 4 бит" },
  { src: "https://cdn.poehali.dev/files/799ee217-0487-4ad1-a404-cfbb9b196c7a.jpg", caption: "Муса Җәлилнең Сталинга хаты. Имза (соңгы бит)" },
  { src: "https://cdn.poehali.dev/files/e334ac4c-8519-4ed2-87a2-6a1a9cada7a0.jpg", caption: "" },
];

function PhotoLightbox({ src, alt, onClose }: { src: string; alt: string; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 cursor-zoom-out" onClick={onClose}>
      <button className="absolute top-5 right-5 text-white/70 hover:text-white transition-colors" onClick={onClose} aria-label="Закрыть">
        <Icon name="X" size={28} />
      </button>
      <img src={src} alt={alt} className="max-w-full max-h-[90vh] object-contain shadow-2xl" onClick={(e) => e.stopPropagation()} />
      {alt && <p className="absolute bottom-6 left-0 right-0 text-center font-body text-[13px] text-white/60 italic px-4">{alt}</p>}
    </div>
  );
}

function LetterGallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [lightboxNav, setLightboxNav] = useState<number | null>(null);

  const openLightbox = (i: number) => {
    setLightboxIndex(i);
    setLightboxNav(i);
  };
  const closeLightbox = () => {
    setLightboxIndex(null);
    setLightboxNav(null);
  };
  const navPrev = () => setLightboxNav((n) => n !== null ? (n - 1 + letterPhotos.length) % letterPhotos.length : 0);
  const navNext = () => setLightboxNav((n) => n !== null ? (n + 1) % letterPhotos.length : 0);

  const activeIdx = lightboxNav !== null ? lightboxNav : lightboxIndex;

  return (
    <div className="my-10">
      {/* Header */}
      <div className="flex items-center gap-3 mb-5">
        <div className="w-5 h-px bg-[#c0392b]" />
        <p className="font-body text-[11px] tracking-[0.25em] uppercase text-[#aaa]">
          Сталинга хат · {letterPhotos.length} бит
        </p>
      </div>

      {/* Grid — все фото видны сразу */}
      <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
        {letterPhotos.map((p, i) => (
          <button
            key={i}
            onClick={() => openLightbox(i)}
            className="group relative overflow-hidden bg-[#f5f0eb] aspect-[3/4] cursor-zoom-in focus:outline-none"
            title={p.caption || "Зурайту өчен басыгыз"}
            aria-label={p.caption || `${i + 1} бит`}
          >
            <img
              src={p.src}
              alt={p.caption || `Хат ${i + 1} бит`}
              className="w-full h-full object-cover transition-all duration-500 grayscale group-hover:grayscale-0 group-hover:scale-105"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex flex-col items-center justify-end pb-2">
              <span className="font-body text-[9px] md:text-[10px] text-white/0 group-hover:text-white/90 transition-all duration-300 tracking-wider text-center px-1 leading-tight drop-shadow">
                {i + 1} бит
              </span>
              <Icon name="ZoomIn" size={16} className="text-white/0 group-hover:text-white/80 transition-all duration-300 mt-1 drop-shadow" />
            </div>
            {/* Number badge */}
            <div className="absolute top-1.5 left-1.5 w-5 h-5 bg-[#c0392b]/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="font-body text-[9px] text-white font-medium">{i + 1}</span>
            </div>
          </button>
        ))}
      </div>

      <p className="font-body text-[11px] text-[#aaa] italic mt-3">Нокталы рәсемгә басып зурайтып карый аласыз</p>

      {/* Lightbox with navigation */}
      {lightboxIndex !== null && activeIdx !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            className="absolute top-5 right-5 text-white/70 hover:text-white transition-colors z-10"
            onClick={closeLightbox}
            aria-label="Ябу"
          >
            <Icon name="X" size={28} />
          </button>

          {/* Prev */}
          <button
            className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/10 hover:bg-white/25 flex items-center justify-center transition-colors z-10"
            onClick={(e) => { e.stopPropagation(); navPrev(); }}
            aria-label="Алдагы"
          >
            <Icon name="ChevronLeft" size={22} className="text-white" />
          </button>

          {/* Image */}
          <div className="flex flex-col items-center max-w-3xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={letterPhotos[activeIdx].src}
              alt={letterPhotos[activeIdx].caption || "Хат"}
              className="max-w-full max-h-[78vh] object-contain shadow-2xl"
            />
            <div className="flex items-center gap-4 mt-4">
              <p className="font-body text-[13px] text-white/60 italic text-center">
                {letterPhotos[activeIdx].caption}
              </p>
              <span className="font-body text-[12px] text-white/30 flex-shrink-0">
                {activeIdx + 1} / {letterPhotos.length}
              </span>
            </div>
            {/* Dot navigation */}
            <div className="flex gap-2 mt-3">
              {letterPhotos.map((_, i) => (
                <button
                  key={i}
                  onClick={(e) => { e.stopPropagation(); setLightboxNav(i); }}
                  className={`w-2 h-2 rounded-full transition-all ${i === activeIdx ? "bg-[#c0392b] scale-125" : "bg-white/30 hover:bg-white/60"}`}
                  aria-label={`${i + 1} бит`}
                />
              ))}
            </div>
          </div>

          {/* Next */}
          <button
            className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/10 hover:bg-white/25 flex items-center justify-center transition-colors z-10"
            onClick={(e) => { e.stopPropagation(); navNext(); }}
            aria-label="Киләсе"
          >
            <Icon name="ChevronRight" size={22} className="text-white" />
          </button>
        </div>
      )}
    </div>
  );
}

export default function Bugen() {
  return (
    <div className="min-h-screen bg-white text-[#1a1a1a]" style={{ fontFamily: "'Golos Text', sans-serif" }}>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[#e5e5e5]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 font-body text-[13px] tracking-[0.1em] text-[#555] hover:text-[#1a1a1a] transition-colors">
            <Icon name="ArrowLeft" size={15} />
            Муса Җәлил
          </Link>
          <span className="font-body text-[12px] tracking-[0.15em] uppercase text-[#aaa]">07</span>
        </div>
      </nav>
      <header className="pt-28 pb-12 px-6 md:px-12">
        <div className="max-w-[1200px] mx-auto">
          <p className="font-body text-[11px] tracking-[0.3em] uppercase text-[#aaa] mb-4">07 — Бүгенге көн</p>
          <h1 className="font-display text-[48px] md:text-[72px] lg:text-[88px] leading-none text-[#1a1a1a] mb-6" style={{ fontWeight: 500 }}>
            Бүгенге көн
          </h1>
          <div className="flex items-center gap-4">
            <div className="w-8 h-px bg-[#c0392b]" />
            <span className="font-body text-[13px] text-[#888] tracking-wide">Музейлар · Монументлар · Заманча ресурслар</span>
          </div>
        </div>
      </header>
      <main className="px-6 md:px-12 pb-24">
        <div className="w-full">

          {/* Archive section */}
          <p className="font-body text-[16px] md:text-[17px] leading-[1.85] text-[#333] mb-5 text-justify">
            Муса Җəлил мирасының зур өлеше исə Татарстан Фəннəр академиясе Г.Ибраһимов исемендəге Тел, əдəбият һəм сəнгать институтының Язма мирас үзəгендə – Мирасханəдə саклана. Гаять зур һəм бай тарихлы əлеге фонд белəн без якыннан таныштык, биредə хезмəт куючы галимнəр белəн аралаштык.
          </p>
          <p className="font-body text-[16px] md:text-[17px] leading-[1.85] text-[#333] mb-5 text-justify">
            Шунысы да мөһим: əлеге Мирасханəдə Җəлилнең əдəби мирасы туплану шагыйрь иҗатын өйрəнүгə көчле этəргеч булып торган. Архив фондында шагыйрьнең төрле елларда язылган əсəрлəре, шигырь караламалары, күпсанлы мəкалəлəре, дистəлəрчə хатлары, опера театры оештыру буенча алып барган эш документлары һ.б. саклана.
          </p>
          <p className="font-body text-[16px] md:text-[17px] leading-[1.85] text-[#333] mb-5 text-justify">
            10 нчы номердагы əлеге фондта шагыйрьнең биографиясенə караган 1924–1933 еллардагы шəхси документларының төп нөсхəлəре бар. Һəркайсында шагыйрь имзасы. Алар арасында шагыйрьнең студент билеты, «Кечкенə иптəшлəр» журналында həм башка журналларда эшлəү таныклыгы, делегат мандатлары, укучы, корреспондентлык билетлары һ.б.
          </p>
          <p className="font-body text-[16px] md:text-[17px] leading-[1.85] text-[#333] mb-5 text-justify">
            Шагыйрь хатларына аерым тукталып үтик. Биредə аның 1928–1942 елларда СССР həм ТАССР хөкүмəтлəренə həм башка оешмаларга иҗтимагый, əдəби, шəхси həм көнкүреш проблемалары буенча язылган хатлары саклана. Аларда шагыйрь – тугры дус, шук-шаян егет, гашыйк шагыйрь, ахыр килеп, гаилə башы, яраткан, кайгырта белгəн ир кеше, баласын өзелеп сөйгəн əти кеше дə.
          </p>
          <p className="font-body text-[16px] md:text-[17px] leading-[1.85] text-[#333] mb-5 text-justify">
            1927 елда Җəлилне комсомолның Бөтенсоюз киңəшмəсенə Мəскəүгə делегат итеп җибəрəлəр. Киңəшмəдə ул Үзəк Комитетның татар-башкорт бюросына əгъза итеп сайлана həм, шунда эшлəү өчен, Мəскəүдə калдырыла. Бюроның тапшыруы буенча, М.Җəлил беренче совет татар балалар журналларын («Кечкенə иптəшлəр», «Октябрь баласы») оештыруда якыннан катнаша həм 1932 елның ахырына кадəр журналларның җаваплы мөхəррире булып эшли. Журналга килгəн həрбер хатка ул җавап биреп барырга тырыша, төпле киңəше белəн ярдəм итə, шул ук вакытта ул талəпчəн җитəкче дə: «Октябрь баласы»н таратуда көч куясыңмы, юкмы? Башка сотрудникларыбыз йөзəрлəп подписка җибəрделəр бит! Синнəн тавыш-хəбəр килми» — дип, шелтəсен белдерə ул бер журнал хəбəрчесенə. Татар газета-журналларын эчтəлекле итеп чыгаруда, аларны тарату эшендə ул бар күңелен биреп эшли.
          </p>
          <p className="font-body text-[16px] md:text-[17px] leading-[1.85] text-[#333] mb-5 text-justify">
            Хатлар арасында Җəлилнең Сталинга язган хатын аерым билгелик. Башка əдиплəр кебек, ул да «бөек юлбашчы»га ышанган, аннан ярдəм көткəн. Лəкин ул ярдəмне үзе өчен түгел, калəмдəшлəренең авыр тормышын күреп, салкын, юеш, кысан подвалларда, баракларда яшəвенə борчылып, алар өчен фатир сорый. Шагыйрь Фатих Хөсни, Гариф Гобəй, Фəтхи Бурнаш, Сибгат Хəким, Нəби Дəүлилəрнең бөтенлəй фатирлары булмавын, Шəйхи Маннур, Нур Баян, Нəкый Исəнбəт, Афзал Шамовларның исə караңгы, тар həм кечкенə бүлмəлəрдə генə җан асрауларын атап уза. Татар язучыларының саллы китаплар язып та, аларны чыгара алмый азаплануларын, кəгазь кытлыгы, гонорарның түбəнлеге, журнал həм газеталарның азлыгы həм башка мəсьəлəлəрне дə күтəреп чыга. Мондый хəлдə кадрлар үстерү, əдəбиятны алга җибəрү мөмкин булмаячагын ассызыклый. Шундый хатлар аша безнең күз алдыбызга олы йөрəкле, ихлас Муса Җəлил образы килеп баса.
          </p>

          {/* Photos of letters to Stalin — gallery */}
          <LetterGallery />

          {/* Divider */}
          <div className="w-16 h-px bg-[#c0392b] mb-10" />

          <p className="font-body text-[16px] md:text-[17px] leading-[1.85] text-[#333] mb-5 text-justify">
            Муса Җəлил исеме бүген дə яши — монументларда, музейларда, мəдрəсəлəрдə, мəктəплəрдə.
          </p>
          <p className="font-body text-[16px] md:text-[17px] leading-[1.85] text-[#333] mb-5 text-justify">
            1966 елда Кремль янында Муса Җəлилгə həйкəл ачыла. Скульпторы — В.Е.Цигаль. Казан Кремлендə Муса Җəлил музее эшли. Аның əсəрлəре дөньяның йөздəн артык теленə тəрҗемə ителгəн.
          </p>
          <p className="font-body text-[16px] md:text-[17px] leading-[1.85] text-[#333] mb-10 text-justify">
            Ел саен Татарстанда шагыйрьнең туган көнен — 15 февральне — олы бəйрəм итеп үткəрəлəр. 1968 елда «Ленфильм» студиясендə «Моабит дəфтəре» фильмы төшерелə.
          </p>

          {/* Divider */}
          <div className="w-16 h-px bg-[#c0392b] mb-10" />

          <p className="font-body text-[16px] md:text-[17px] leading-[1.85] text-[#333] mb-8 text-justify">
            Әмма бүген Җәлил исеме монументларда, музейларда гына түгел, ә заманча сәнгатьтә дә яңа сулыш ала. Шагыйрьнең үлемсез юлларын бүгенге көндә яңача аңлату, аны кино теле, музыка, драматик уку аша тамашачыга җиткерү — заманның үзеннән килгән ихтыяҗ. Шул йөздән дә бүген безнең өчен аеруча мөһим: талантлы артист Ринат Ахмадуллин Муса Җәлилнең "Җырларым" шигыренә экранизация ясаган. Бу — фашист әсирлегендә язылган соңгы дәфтәрләрнең беренче шигыре, анда шагыйрь үлем алдыннан да сүзенә, халкына, намусына тугры булып кала. Ринат Ахмадуллин башкаруында Җәлил юллары бүгенге тамашачыга якын, ачык һәм шул ук вакытта шаккатыргыч дәрәҗәдә көчле иңдерелә.
          </p>

          {/* Video embed */}
          <div className="w-full mb-10" style={{ position: "relative", paddingBottom: "56.25%", height: 0, overflow: "hidden" }}>
            <iframe
              src="https://rutube.ru/play/embed/114ffbb9a61af40dfcf9c74aa5606b14/"
              title="Ринат Ахмадуллин — Җырларым"
              allow="clipboard-write; autoplay"
              allowFullScreen
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                border: "none",
              }}
            />
          </div>

          <div className="border-t border-[#e5e5e5] mt-12 pt-10 flex items-center justify-between">
            <Link to="/jalilchelar" className="flex items-center gap-2 font-body text-[13px] text-[#888] hover:text-[#1a1a1a] transition-colors">
              <Icon name="ArrowLeft" size={15} />
              Җәлилчеләр
            </Link>
            <Link to="/" className="flex items-center gap-2 font-body text-[13px] text-[#888] hover:text-[#1a1a1a] transition-colors">
              Баш бит
              <Icon name="ArrowRight" size={15} />
            </Link>
          </div>
        </div>
      </main>
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