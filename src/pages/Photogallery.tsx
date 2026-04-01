import { useState } from "react";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const photos = [
  { src: "https://cdn.poehali.dev/files/c0dc499f-1408-45cc-b2c9-2f062230ba22.jpg", alt: "Муса Җәлил", caption: "Муса Җәлил" },
  { src: "https://cdn.poehali.dev/files/6c421466-ebaa-464c-a9a8-04f8030b85f3.jpg", alt: "Муса Җәлил — шәкерт. 1916 ел", caption: "Шәкерт. 1916 ел" },
  { src: "https://cdn.poehali.dev/files/2e183264-7839-4479-99ea-f2ee4b13d032.jpg", alt: "Рабфак студенты. 1923 ел", caption: "Рабфак студенты. 1923 ел" },
  { src: "https://cdn.poehali.dev/files/6db5b160-edd6-45ae-8d2d-7a872ebaef0f.jpg", alt: "1925 елгы уком бюросы", caption: "Уком бюросы. 1925 ел" },
  { src: "https://cdn.poehali.dev/files/4d875f7c-7af0-4d4e-a387-2eee598a6132.jpg", alt: "Мәскәү университеты студенты. 1929 ел", caption: "Мәскәү университеты студенты. 1929 ел" },
  { src: "https://cdn.poehali.dev/files/76126460-9bfb-4a77-950a-2394f0d76c8c.jpg", alt: "М.Җәлил кызы Чулпан белән", caption: "Кызы Чулпан белән" },
  { src: "https://cdn.poehali.dev/files/d8acd805-f3a4-41ed-9e64-b602a459a45b.jpg", alt: "М.Җәлил кызы Чулпан белән", caption: "Кызы Чулпан белән" },
  { src: "https://cdn.poehali.dev/files/1e928856-9aed-406e-baca-3ab9578b1dd4.jpg", alt: "М.Җәлил кызы Чулпан белән", caption: "Кызы Чулпан белән" },
  { src: "https://cdn.poehali.dev/files/27897be3-4fc8-4254-8d62-765e95268039.jpg", alt: "Муса әнисе Рәхимә һәм сеңлесе Хәдичә белән (1926)", caption: "Әнисе Рәхимә белән. 1926 ел" },
  { src: "https://cdn.poehali.dev/files/253dd7db-d0f4-4809-9424-46b7e45e76c9.jpg", alt: "Муса Җәлил һәм Н.Җиһанов «Алтынчәч» операсы өстендә эшләгәндә", caption: "Н.Җиһанов белән. «Алтынчәч»" },
  { src: "https://cdn.poehali.dev/files/d6bcfa10-6366-48e7-80b7-942643a73d0f.jpg", alt: "А.Ключарев, М.Җәлил, Х.Гобәйдуллин, Җ.Фәйзи. 1929 ел.", caption: "А.Ключарев, М.Җәлил, Х.Гобәйдуллин. 1929 ел" },
  { src: "https://cdn.poehali.dev/files/cb3960e0-d20b-462d-ab08-acc595a9d319.jpg", alt: "М.Җәлил «Октябрь баласы» журналы авторлары арасында. 1929 ел.", caption: "«Октябрь баласы» авторлары арасында. 1929 ел" },
  { src: "https://cdn.poehali.dev/files/dede653e-09ca-4c28-a243-17add9174e8a.jpg", alt: "М. Җәлил һәм язучы Г. Исхакый Одесса янындагы иҗат йортында", caption: "Г. Исхакый белән Одессада" },
  { src: "https://cdn.poehali.dev/files/b9e71a81-7a32-4cd0-873b-21bd21a27984.jpg", alt: "М. Җәлил журналистлар арасында. 1934 ел.", caption: "Журналистлар арасында. 1934 ел" },
  { src: "https://cdn.poehali.dev/files/70984550-2eb1-4284-b615-fa5eda62fdc0.jpg", alt: "Муса Җәлил фронтта. 1941 ел. Соңгы фотосурәтләрнең берсе.", caption: "Фронтта. 1941 ел. Соңгы фото." },
];

function Lightbox({ photos, index, onClose, onPrev, onNext }: {
  photos: typeof photos;
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const photo = photos[index];
  return (
    <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center" onClick={onClose}>
      <button className="absolute top-5 right-5 text-white/70 hover:text-white transition-colors z-10" onClick={onClose}>
        <Icon name="X" size={28} />
      </button>
      {index > 0 && (
        <button
          className="absolute left-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors z-10 p-2"
          onClick={(e) => { e.stopPropagation(); onPrev(); }}
        >
          <Icon name="ChevronLeft" size={36} />
        </button>
      )}
      {index < photos.length - 1 && (
        <button
          className="absolute right-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors z-10 p-2"
          onClick={(e) => { e.stopPropagation(); onNext(); }}
        >
          <Icon name="ChevronRight" size={36} />
        </button>
      )}
      <div className="flex flex-col items-center px-16" onClick={(e) => e.stopPropagation()}>
        <img
          src={photo.src}
          alt={photo.alt}
          className="max-w-full max-h-[80vh] object-contain shadow-2xl"
        />
        <p className="font-body text-[13px] text-white/60 italic mt-4 text-center">{photo.caption}</p>
        <p className="font-body text-[11px] text-white/30 mt-1">{index + 1} / {photos.length}</p>
      </div>
    </div>
  );
}

export default function Photogallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white text-[#1a1a1a]" style={{ fontFamily: "'Golos Text', sans-serif" }}>

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[#e5e5e5]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 font-body text-[13px] tracking-[0.1em] text-[#555] hover:text-[#1a1a1a] transition-colors">
            <Icon name="ArrowLeft" size={15} />
            Муса Җәлил
          </Link>
          <span className="font-body text-[12px] tracking-[0.15em] uppercase text-[#aaa]">08</span>
        </div>
      </nav>

      {/* HEADER */}
      <header className="pt-28 pb-12 px-6 md:px-12">
        <div className="max-w-[1200px] mx-auto">
          <p className="font-body text-[11px] tracking-[0.3em] uppercase text-[#aaa] mb-4">08 — Фотогалерея</p>
          <h1 className="font-display text-[48px] md:text-[72px] lg:text-[88px] leading-none text-[#1a1a1a] mb-6" style={{ fontWeight: 500 }}>
            Фотогалерея
          </h1>
          <div className="flex items-center gap-4">
            <div className="w-8 h-px bg-[#c0392b]" />
            <span className="font-body text-[13px] text-[#888] tracking-wide">М.Җәлилнең фотолары архивы</span>
          </div>
        </div>
      </header>

      {/* GALLERY */}
      <main className="px-6 md:px-12 pb-24">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            {photos.map((photo, i) => (
              <div
                key={i}
                className="group cursor-zoom-in overflow-hidden bg-[#f5f5f5] relative aspect-[3/4]"
                onClick={() => setLightboxIndex(i)}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-end">
                  <p className="font-body text-[11px] text-white/0 group-hover:text-white/90 transition-all duration-300 p-3 leading-snug italic">
                    {photo.caption}
                  </p>
                </div>
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-80 transition-opacity">
                  <Icon name="ZoomIn" size={18} className="text-white drop-shadow" />
                </div>
              </div>
            ))}
          </div>
          <p className="font-body text-[12px] text-[#aaa] mt-8 text-center tracking-wide">
            Фотога басыгыз — зурайтыр өчен
          </p>
        </div>
      </main>

      {/* LIGHTBOX */}
      {lightboxIndex !== null && (
        <Lightbox
          photos={photos}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onPrev={() => setLightboxIndex((i) => (i !== null && i > 0 ? i - 1 : i))}
          onNext={() => setLightboxIndex((i) => (i !== null && i < photos.length - 1 ? i + 1 : i))}
        />
      )}

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
