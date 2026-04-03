import { useState, CSSProperties } from "react";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

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

interface SPhoto { src: string; alt: string; caption?: string; wrapClass?: string; wrapStyle?: CSSProperties; }
function Photo({ src, alt, caption, wrapClass = "", wrapStyle }: SPhoto) {
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
        {caption && <p className="font-body text-[11px] text-[#888] leading-snug italic mt-2 text-center">{caption}</p>}
      </div>
      {open && <PhotoLightbox src={src} alt={alt} onClose={() => setOpen(false)} />}
    </>
  );
}

export default function Sugish() {
  return (
    <div className="min-h-screen bg-white text-[#1a1a1a]" style={{ fontFamily: "'Golos Text', sans-serif" }}>

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[#e5e5e5]">
        <div className="max-w-[1200px] mx-auto px-8 md:px-16 lg:px-24 flex items-center justify-between h-16">
          <Link to="/ijat" className="flex items-center gap-2 font-body text-[13px] tracking-[0.1em] text-[#555] hover:text-[#1a1a1a] transition-colors">
            <Icon name="ChevronLeft" size={15} />
            <span className="hidden sm:inline">Иҗат</span>
          </Link>
          <div className="flex items-center gap-5">
            <span className="font-body text-[12px] tracking-[0.15em] uppercase text-[#aaa]">04 / 07</span>
            <Link to="/moabit" className="flex items-center gap-1 font-body text-[12px] text-[#aaa] hover:text-[#1a1a1a] transition-colors">
              <span className="hidden sm:inline">Моабит дәфтәрләре</span>
              <Icon name="ChevronRight" size={15} />
            </Link>
          </div>
        </div>
      </nav>

      {/* HEADER */}
      <header className="pt-28 pb-16 px-8 md:px-16 lg:px-24">
        <div className="max-w-[1200px] mx-auto">
          <p className="font-body text-[11px] tracking-[0.3em] uppercase text-[#aaa] mb-4">04 — Сугыш һәм әсирлек</p>
          <h1
            className="font-display text-[36px] md:text-[58px] lg:text-[72px] leading-none text-[#1a1a1a] mb-6 whitespace-nowrap"
            style={{ fontWeight: 500 }}
          >
            Сугыш юлы һәм әсирлек
          </h1>
          <div className="flex items-center gap-4">
            <div className="w-8 h-px bg-[#c0392b]" />
            <span className="font-body text-[13px] text-[#888] tracking-wide">1941–1944</span>
          </div>
        </div>
      </header>

      {/* CONTENT */}
      <main className="px-8 md:px-16 lg:px-24 pb-24">
        <div className="w-full">

          {/* Блок 1+2: Фото фронт — float right + первый абзац + пленение */}
          <div className="mb-10 w-full">
            <Photo
              src="https://cdn.poehali.dev/files/70984550-2eb1-4284-b615-fa5eda62fdc0.jpg"
              alt="Муса Җәлил фронтта. 1941 ел. Соңгы фотосурәтләрнең берсе."
              caption="Муса Җәлил фронтта. 1941 ел. Соңгы фотосурәтләрнең берсе."
              wrapClass="float-right ml-8 mb-4"
              wrapStyle={{ width: "clamp(130px, 18%, 190px)" }}
            />

            <p className="font-body text-[16px] md:text-[17px] leading-[1.85] text-[#333] mb-5 text-justify">
              1941 елның 13 июлендә Җәлил сугышка чакыру кәгазе ала. Алдан аны политхезмәткәрләр курсына юллыйлар, аннары – Волхов фронты. Ленинград астындагы черек урман һәм сазлык эчендә урнашкан атаклы Икенче һөҗүм армиясенә, «Отвага» газетасы редакциясенә эләгә.
            </p>
            <p className="font-body text-[16px] md:text-[17px] leading-[1.85] text-[#333] mb-5 text-justify">
              Истәлекләргә караганда, Муса Җәлил солдат сумкасында һәрчак үзе белән таушалып беткән калын дәфтәр йөрткән. Анда ул шигырьләрен язып барган. Тик ни кызганыч, әлеге дәфтәрнең бүгенге көндә кайдалыгын берәү дә белми.
            </p>
            <div className="clear-both" />
            <p className="font-body text-[16px] md:text-[17px] leading-[1.85] text-[#333] mb-5 text-justify">
              1942 елның июнь аенда Икенче һөҗүм армиясе тулысынча камап алынып, төп көчләрдән аерылып кала... Әлеге вакыйгада каты яраланган Муса Җәлил пленга эләгә. «Кичер, Илем» шигырендә шагыйрь әлеге авыр мизгелләрне болай дип тасвирлый:
            </p>

            <blockquote className="font-display text-[17px] md:text-[19px] leading-[1.8] text-[#444] italic pl-6 mb-5" style={{ fontWeight: 300, borderLeft: "2px solid #e5e5e5" }}>
              «Язмыш көлде, үлем, кагылмыйча,<br />
              Үтте яннан, минем тирәләп.<br />
              Нишлим, нишлим, соңгы минутымда<br />
              Пистолетым итте хыянәт!»
            </blockquote>
            <div className="clear-both" />
          </div>

          {/* Блок 3: Подполье в лагере */}
          <div className="mb-12 w-full">
            <p className="font-body text-[16px] md:text-[17px] leading-[1.85] text-[#333] mb-5 text-justify">
              Ябык лагерьда Җәлил һәм аның фикердәшләре дошманга каршы яшерен көрәш алып баралар. Төркемдә журналист Рәхим Саттар, балалар язучысы Абдулла Алиш, инженер Фуат Булатов, икътисад белгече Гариф Шабаев һ.б. була. Алар барысы да Муса Җәлилнең үтенече буенча «легионны эчтән юк итү» максатын күздә тотып, немецлар белән хезмәттәшлек итәргә риза булалар.
            </p>
            <p className="font-body text-[16px] md:text-[17px] leading-[1.85] text-[#333] mb-5 text-justify">
              Акрынлап үзара яшерен элемтәләр урнаша. 1943 елның 9 августында яшерен оешманың соңгы утырышы үтә. Муса анда партизаннар һәм Кызыл Армия белән элемтә урнашканлыгын җиткерә. 14 август көне күтәрелеш көне дип игълан ителә.
            </p>
            <p className="font-body text-[16px] md:text-[17px] leading-[1.85] text-[#333] mb-5 text-justify">
              11 августта исә солдатларны ашханәгә, репетициягә дип янә чакырып алалар. Биредә инде безнең көрәшчеләр кулга алына. Ишегалдында башкаларны куркыту максатыннан Муса Җәлил каты кыйнала.
            </p>
            <div className="clear-both" />
          </div>

          {/* Блок 4: Казнь */}
          <div className="mb-12 w-full">
            <p className="font-body text-[16px] md:text-[17px] leading-[1.85] text-[#333] mb-5 text-justify">
              1944 елның 25 августында көн уртасында Плетцензее төрмәсендә, Империя судының карары белән Муса Җәлил һәм аның көрәштәшләре гильотинада җәзалап үтерелә.
            </p>
            <p className="font-body text-[16px] md:text-[17px] leading-[1.85] text-[#333] mb-5 text-justify">
              Казан һәм Германия тикшеренүчеләренең эзләнүләренә карамастан, Муса Җәлил һәм аның көрәштәшләренең кабере, кайда күмелүләре бүгенге көнгә кадәр билгесез.
            </p>
            <p className="font-body text-[16px] md:text-[17px] leading-[1.85] text-[#333] mb-5 text-justify">
              Җәлил дошман төрмәсендә кичергән көннәре өчен Совет хакимиятенең үзенә карата нинди мөнәсәбәттә буласын бик яхшы аңлый һәм 1943 елның ноябрь аенда хатынына багышлап «Ышанма!» шигырен яза:
            </p>

            <blockquote className="font-display text-[17px] md:text-[19px] leading-[1.8] text-[#444] italic pl-6 mb-5" style={{ fontWeight: 300, borderLeft: "2px solid #e5e5e5" }}>
              «...Сиңа миннән хәбәр китерсәләр,<br />
              «Алмаштырган илен», — дисәләр,<br />
              Син ышанма, бәгърем!<br />
              Мондый сүзне<br />
              Дуслар әйтмәс, мине сөйсәләр».
            </blockquote>
            <div className="clear-both" />
          </div>

          {/* Блок 5: Реабилитация */}
          <div className="mb-12 w-full">
            <p className="font-body text-[16px] md:text-[17px] leading-[1.85] text-[#333] mb-5 text-justify">
              Сугыштан соңгы елларда СССР да тикшеренү эшләре башланып китә. Муса Җәлилнең тормыш иптәшен Лубянкага чакыртып, сораштыру үткәрәләр. Муса Җәлил исеме китап һәм дәреслекләрдән юкка чыга. Китапханәләрдә шагыйрьнең җыентыклары күренми башлый. Радиода яки эстрадада Җәлил сүзләренә язылган җырлар яңгыраганда, гадәттә, халык җырлары дип әйтелә торган була.
            </p>
            <p className="font-body text-[16px] md:text-[17px] leading-[1.85] text-[#333] mb-5 text-justify">
              Җинаять эше Сталин үлгәннән соң дәлилләр җитәрлек булмаганга ябыла. 1953 елның апрелендә редактор Константин Симонов тәкъдиме буенча «Литературная газета»да шагыйрьнең «Моабит дәфтәрләре»ннән алты шигыре басылып чыга. Аларны халык бик яратып кабул итә.
            </p>
            <p className="font-body text-[16px] md:text-[17px] leading-[1.85] text-[#333] mb-5 text-justify">
              Соңрак Муса Җәлилгә Советлар Союзы герое (1956) исеме бирелә, Ленин премиясе (1957) лауреатына (үлгәннән соң) әйләнә. 1968 елда «Ленфильм» студиясендә «Моабит дәфтәре» фильмы төшерелә. Муса Җәлил сатлыкҗаннан Ватанга тугры шәхес үрнәгенә әверелә. 1966 елда Кремль янында Муса Җәлилгә һәйкәл ачыла. Һәйкәл скульпторы — В.Е.Цигаль.
            </p>
            <div className="clear-both" />
          </div>

          {/* Navigation */}
          <div className="border-t border-[#e5e5e5] mt-10 pt-10 flex items-center justify-between">
            <Link to="/ijat" className="flex items-center gap-2 font-body text-[13px] text-[#888] hover:text-[#1a1a1a] transition-colors">
              <Icon name="ArrowLeft" size={15} />
              Иҗат
            </Link>
            <Link to="/moabit" className="flex items-center gap-2 font-body text-[13px] text-[#888] hover:text-[#1a1a1a] transition-colors">
              Моабит дәфтәрләре
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