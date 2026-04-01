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

function LetterSlideshow() {
  const [current, setCurrent] = useState(0);
  const [lightbox, setLightbox] = useState(false);

  const prev = () => setCurrent((c) => (c - 1 + letterPhotos.length) % letterPhotos.length);
  const next = () => setCurrent((c) => (c + 1) % letterPhotos.length);
  const photo = letterPhotos[current];

  return (
    <div className="my-10">
      <div className="relative bg-[#fafafa] border border-[#e5e5e5] overflow-hidden">
        {/* Main image */}
        <div
          className="relative cursor-zoom-in group flex items-center justify-center"
          style={{ minHeight: "320px", maxHeight: "500px" }}
          onClick={() => setLightbox(true)}
          title="Зурайту өчен басыгыз"
        >
          <img
            src={photo.src}
            alt={photo.caption || "Хат"}
            className="max-w-full object-contain transition-opacity duration-300"
            style={{ maxHeight: "500px" }}
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all flex items-center justify-center">
            <Icon name="ZoomIn" size={28} className="text-white opacity-0 group-hover:opacity-80 transition-opacity drop-shadow" />
          </div>
        </div>

        {/* Prev/Next arrows */}
        <button
          onClick={prev}
          className="absolute left-2 top-1/2 -translate-y-1/2 w-9 h-9 bg-white/80 hover:bg-white border border-[#e5e5e5] flex items-center justify-center shadow transition-colors"
          aria-label="Алдагы"
        >
          <Icon name="ChevronLeft" size={18} className="text-[#555]" />
        </button>
        <button
          onClick={next}
          className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 bg-white/80 hover:bg-white border border-[#e5e5e5] flex items-center justify-center shadow transition-colors"
          aria-label="Киләсе"
        >
          <Icon name="ChevronRight" size={18} className="text-[#555]" />
        </button>
      </div>

      {/* Caption + counter */}
      <div className="flex items-center justify-between mt-2 px-1">
        <p className="font-body text-[11px] text-[#888] italic">{photo.caption}</p>
        <span className="font-body text-[11px] text-[#bbb]">{current + 1} / {letterPhotos.length}</span>
      </div>

      {/* Thumbnails */}
      <div className="flex gap-2 mt-3 overflow-x-auto pb-1">
        {letterPhotos.map((p, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`flex-shrink-0 w-14 h-14 overflow-hidden border-2 transition-all ${i === current ? "border-[#c0392b]" : "border-[#e5e5e5] hover:border-[#aaa]"}`}
            aria-label={`${i + 1} бит`}
          >
            <img src={p.src} alt={p.caption} className="w-full h-full object-cover" />
          </button>
        ))}
      </div>

      {lightbox && <PhotoLightbox src={photo.src} alt={photo.caption || ""} onClose={() => setLightbox(false)} />}
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
        <div className="max-w-[900px] mx-auto">

          {/* Archive section */}
          <p className="font-body text-[16px] md:text-[17px] leading-[1.85] text-[#333] mb-5">
            Муса Җəлил мирасының зур өлеше исə Татарстан Фəннəр академиясе Г.Ибраһимов исемендəге Тел, əдəбият һəм сəнгать институтының Язма мирас үзəгендə – Мирасханəдə саклана. Гаять зур һəм бай тарихлы əлеге фонд белəн без якыннан таныштык, биредə хезмəт куючы галимнəр белəн аралаштык.
          </p>
          <p className="font-body text-[16px] md:text-[17px] leading-[1.85] text-[#333] mb-5">
            Шунысы да мөһим: əлеге Мирасханəдə Җəлилнең əдəби мирасы туплану шагыйрь иҗатын өйрəнүгə көчле этəргеч булып торган. Архив фондында шагыйрьнең төрле елларда язылган əсəрлəре, шигырь караламалары, күпсанлы мəкалəлəре, дистəлəрчə хатлары, опера театры оештыру буенча алып барган эш документлары һ.б. саклана.
          </p>
          <p className="font-body text-[16px] md:text-[17px] leading-[1.85] text-[#333] mb-5">
            10 нчы номердагы əлеге фондта шагыйрьнең биографиясенə караган 1924–1933 еллардагы шəхси документларының төп нөсхəлəре бар. Һəркайсында шагыйрь имзасы. Алар арасында шагыйрьнең студент билеты, «Кечкенə иптəшлəр» журналында həм башка журналларда эшлəү таныклыгы, делегат мандатлары, укучы, корреспондентлык билетлары һ.б.
          </p>
          <p className="font-body text-[16px] md:text-[17px] leading-[1.85] text-[#333] mb-5">
            Шагыйрь хатларына аерым тукталып үтик. Биредə аның 1928–1942 елларда СССР həм ТАССР хөкүмəтлəренə həм башка оешмаларга иҗтимагый, əдəби, шəхси həм көнкүреш проблемалары буенча язылган хатлары саклана. Аларда шагыйрь – тугры дус, шук-шаян егет, гашыйк шагыйрь, ахыр килеп, гаилə башы, яраткан, кайгырта белгəн ир кеше, баласын өзелеп сөйгəн əти кеше дə.
          </p>
          <p className="font-body text-[16px] md:text-[17px] leading-[1.85] text-[#333] mb-5">
            1927 елда Җəлилне комсомолның Бөтенсоюз киңəшмəсенə Мəскəүгə делегат итеп җибəрəлəр. Киңəшмəдə ул Үзəк Комитетның татар-башкорт бюросына əгъза итеп сайлана həм, шунда эшлəү өчен, Мəскəүдə калдырыла. Бюроның тапшыруы буенча, М.Җəлил беренче совет татар балалар журналларын («Кечкенə иптəшлəр», «Октябрь баласы») оештыруда якыннан катнаша həм 1932 елның ахырына кадəр журналларның җаваплы мөхəррире булып эшли. Журналга килгəн həрбер хатка ул җавап биреп барырга тырыша, төпле киңəше белəн ярдəм итə, шул ук вакытта ул талəпчəн җитəкче дə: «Октябрь баласы»н таратуда көч куясыңмы, юкмы? Башка сотрудникларыбыз йөзəрлəп подписка җибəрделəр бит! Синнəн тавыш-хəбəр килми» — дип, шелтəсен белдерə ул бер журнал хəбəрчесенə. Татар газета-журналларын эчтəлекле итеп чыгаруда, аларны тарату эшендə ул бар күңелен биреп эшли.
          </p>
          <p className="font-body text-[16px] md:text-[17px] leading-[1.85] text-[#333] mb-5">
            Хатлар арасында Җəлилнең Сталинга язган хатын аерым билгелик. Башка əдиплəр кебек, ул да «бөек юлбашчы»га ышанган, аннан ярдəм көткəн. Лəкин ул ярдəмне үзе өчен түгел, калəмдəшлəренең авыр тормышын күреп, салкын, юеш, кысан подвалларда, баракларда яшəвенə борчылып, алар өчен фатир сорый. Шагыйрь Фатих Хөсни, Гариф Гобəй, Фəтхи Бурнаш, Сибгат Хəким, Нəби Дəүлилəрнең бөтенлəй фатирлары булмавын, Шəйхи Маннур, Нур Баян, Нəкый Исəнбəт, Афзал Шамовларның исə караңгы, тар həм кечкенə бүлмəлəрдə генə җан асрауларын атап уза. Татар язучыларының саллы китаплар язып та, аларны чыгара алмый азаплануларын, кəгазь кытлыгы, гонорарның түбəнлеге, журнал həм газеталарның азлыгы həм башка мəсьəлəлəрне дə күтəреп чыга. Мондый хəлдə кадрлар үстерү, əдəбиятны алга җибəрү мөмкин булмаячагын ассызыклый. Шундый хатлар аша безнең күз алдыбызга олы йөрəкле, ихлас Муса Җəлил образы килеп баса.
          </p>

          {/* Photos of letters to Stalin — slideshow */}
          <LetterSlideshow />

          {/* Divider */}
          <div className="w-16 h-px bg-[#c0392b] mb-10" />

          <p className="font-body text-[16px] md:text-[17px] leading-[1.85] text-[#333] mb-5">
            Муса Җəлил исеме бүген дə яши — монументларда, музейларда, мəдрəсəлəрдə, мəктəплəрдə.
          </p>
          <p className="font-body text-[16px] md:text-[17px] leading-[1.85] text-[#333] mb-5">
            1966 елда Кремль янында Муса Җəлилгə həйкəл ачыла. Скульпторы — В.Е.Цигаль. Казан Кремлендə Муса Җəлил музее эшли. Аның əсəрлəре дөньяның йөздəн артык теленə тəрҗемə ителгəн.
          </p>
          <p className="font-body text-[16px] md:text-[17px] leading-[1.85] text-[#333] mb-10">
            Ел саен Татарстанда шагыйрьнең туган көнен — 15 февральне — олы бəйрəм итеп үткəрəлəр. 1968 елда «Ленфильм» студиясендə «Моабит дəфтəре» фильмы төшерелə.
          </p>

          {/* Divider */}
          <div className="w-16 h-px bg-[#c0392b] mb-10" />

          <p className="font-body text-[16px] md:text-[17px] leading-[1.85] text-[#333] mb-8">
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
