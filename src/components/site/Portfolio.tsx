import { useRef } from "react";
import { ArrowLeft, ArrowRight, Calendar, MapPin } from "lucide-react";
import p1 from "@/assets/portfolio-1.jpg";
import p2 from "@/assets/portfolio-2.jpg";
import p3 from "@/assets/portfolio-3.jpg";
import p4 from "@/assets/portfolio-4.jpg";
import p5 from "@/assets/portfolio-5.jpg";
import p6 from "@/assets/portfolio-6.jpg";

const items = [
  { img: p1, cat: "Tahfidz", title: "Halaqah Tahfidz Putri", loc: "Bandar Lampung", date: "Mar 2025" },
  { img: p2, cat: "Pengajar", title: "Pelatihan Musyrifah Angkatan 4", loc: "Lampung", date: "Feb 2025" },
  { img: p3, cat: "Pembangunan", title: "Pembangunan RumaQuran 3", loc: "Tanjung Karang", date: "Jan 2025" },
  { img: p4, cat: "Wisuda", title: "Wisuda Santri Tahfidz 30 Juz", loc: "Lampung", date: "Des 2024" },
  { img: p5, cat: "Distribusi", title: "Wakaf Al-Quran Pelosok", loc: "Pesisir Barat", date: "Nov 2024" },
  { img: p6, cat: "Pembelajaran", title: "Tasmi' Quran Harian", loc: "Asrama RQWH", date: "Okt 2024" },
];

export function Portfolio() {
  const ref = useRef<HTMLDivElement>(null);
  const scroll = (dir: 1 | -1) => ref.current?.scrollBy({ left: dir * 380, behavior: "smooth" });
  return (
    <section id="portofolio" className="relative overflow-hidden bg-plum-deep py-24 md:py-32 text-white">
      <div className="pointer-events-none absolute -right-32 top-10 h-96 w-96 rounded-full opacity-20 blur-3xl" style={{ background: "var(--gold)" }} />
      <div className="pointer-events-none absolute -left-32 bottom-10 h-96 w-96 rounded-full opacity-20 blur-3xl" style={{ background: "var(--orange)" }} />
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-gold/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-gold">
              Portofolio Kegiatan
            </span>
            <h2 className="mt-5 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              Jejak <span className="text-gold">kebaikan</span> yang sudah kita tempuh.
            </h2>
            <p className="mt-4 text-white/70 md:text-lg">
              Dokumentasi program & kegiatan RumaQuran bersama para musyrifah dan santri.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button onClick={() => scroll(-1)} aria-label="Sebelumnya" className="grid h-12 w-12 place-items-center rounded-full border-2 border-white/30 text-white transition hover:bg-white hover:text-plum-deep">
              <ArrowLeft className="h-5 w-5" />
            </button>
            <button onClick={() => scroll(1)} aria-label="Berikutnya" className="grid h-12 w-12 place-items-center rounded-full bg-orange text-white transition hover:bg-gold hover:text-plum-deep">
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      <div ref={ref} className="scrollbar-hide mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-6 md:pl-[max(1.5rem,calc((100vw-80rem)/2+1.5rem))]">
        {items.map((it, i) => (
          <article key={i} className="group relative h-[460px] w-[78vw] flex-shrink-0 snap-start overflow-hidden rounded-3xl shadow-[var(--shadow-soft)] sm:w-[360px]">
            <img src={it.img} alt={it.title} loading="lazy" width={1024} height={1280} className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110" />
            <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(67,7,54,0) 35%, rgba(67,7,54,0.95) 100%)" }} />
            <span className="absolute left-4 top-4 rounded-full bg-gold px-3 py-1 text-xs font-bold uppercase tracking-wider text-plum-deep">
              {it.cat}
            </span>
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="font-display text-2xl font-bold leading-tight">{it.title}</h3>
              <div className="mt-3 flex items-center gap-4 text-xs text-white/80">
                <span className="flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5 text-gold" />{it.loc}</span>
                <span className="flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5 text-gold" />{it.date}</span>
              </div>
            </div>
          </article>
        ))}
        <div className="w-6 flex-shrink-0" />
      </div>
    </section>
  );
}