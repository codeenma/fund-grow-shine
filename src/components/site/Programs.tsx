import { ArrowRight, ArrowLeft } from "lucide-react";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import schoolImg from "@/assets/program-school.jpg";
import buildImg from "@/assets/program-build.jpg";
import booksImg from "@/assets/program-books.jpg";
import teacherImg from "@/assets/program-teacher.jpg";
import waterImg from "@/assets/program-water.jpg";

const programs = [
  { img: buildImg, tag: "Pembangunan", title: "Bangun 3 Ruang Kelas di NTT", loc: "Sumba, NTT", target: 250_000_000, raised: 178_000_000, donors: 412 },
  { img: schoolImg, tag: "Beasiswa", title: "Beasiswa Anak Yatim Pelosok", loc: "Garut, Jawa Barat", target: 120_000_000, raised: 96_500_000, donors: 287 },
  { img: booksImg, tag: "Fasilitas", title: "1.000 Al-Quran untuk Santri", loc: "Aceh", target: 80_000_000, raised: 52_000_000, donors: 196 },
  { img: teacherImg, tag: "Pengajar", title: "Insentif Guru Honorer Daerah 3T", loc: "Papua Barat", target: 200_000_000, raised: 87_000_000, donors: 154 },
  { img: waterImg, tag: "Sanitasi", title: "Air Bersih untuk Sekolah Dasar", loc: "Lombok Timur", target: 95_000_000, raised: 41_000_000, donors: 121 },
];

const fmt = (n: number) => "Rp " + n.toLocaleString("id-ID");

export function Programs() {
  const ref = useRef<HTMLDivElement>(null);
  const scroll = (dir: 1 | -1) => {
    ref.current?.scrollBy({ left: dir * 400, behavior: "smooth" });
  };
  return (
    <section id="program" className="relative overflow-hidden py-24 md:py-32" style={{ background: "linear-gradient(180deg, var(--background) 0%, oklch(0.96 0.02 340) 100%)" }}>
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-orange/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-orange">
              Program Kami
            </span>
            <h2 className="mt-5 text-4xl font-bold leading-tight text-plum-deep md:text-5xl lg:text-6xl">
              Pilih jalan kebaikan<br />yang ingin kamu dukung.
            </h2>
            <p className="mt-4 text-muted-foreground md:text-lg">
              Geser untuk melihat program berlangsung. Setiap donasi tersalur 100% sesuai amanah.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button onClick={() => scroll(-1)} aria-label="Sebelumnya" className="grid h-12 w-12 place-items-center rounded-full border-2 border-plum-deep text-plum-deep transition hover:bg-plum-deep hover:text-white">
              <ArrowLeft className="h-5 w-5" />
            </button>
            <button onClick={() => scroll(1)} aria-label="Berikutnya" className="grid h-12 w-12 place-items-center rounded-full bg-plum-deep text-white transition hover:bg-magenta">
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      <div ref={ref} className="scrollbar-hide mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto px-6 pb-6 md:pl-[max(1.5rem,calc((100vw-80rem)/2+1.5rem))]">
        {programs.map((p, i) => {
          const pct = Math.round((p.raised / p.target) * 100);
          return (
            <article key={i} className="group relative w-[85vw] flex-shrink-0 snap-start overflow-hidden rounded-3xl bg-card shadow-[var(--shadow-soft)] sm:w-[420px]">
              <div className="relative h-64 overflow-hidden">
                <img src={p.img} alt={p.title} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-plum-deep/70 via-transparent to-transparent" />
                <span className="absolute left-4 top-4 rounded-full bg-gold px-3 py-1 text-xs font-bold uppercase tracking-wider text-plum-deep">
                  {p.tag}
                </span>
                <div className="absolute bottom-4 left-4 text-xs font-medium text-white/90">📍 {p.loc}</div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-bold leading-snug text-plum-deep">{p.title}</h3>
                <div className="mt-5">
                  <div className="flex items-baseline justify-between">
                    <span className="text-2xl font-extrabold text-magenta">{fmt(p.raised)}</span>
                    <span className="text-sm font-semibold text-orange">{pct}%</span>
                  </div>
                  <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-muted">
                    <div className="h-full rounded-full" style={{ width: `${pct}%`, background: "var(--gradient-warm)" }} />
                  </div>
                  <div className="mt-2 flex justify-between text-xs text-muted-foreground">
                    <span>dari {fmt(p.target)}</span>
                    <span>{p.donors} donatur</span>
                  </div>
                </div>
                <Button className="mt-6 w-full rounded-full bg-plum-deep text-white hover:bg-magenta">
                  Donasi Program Ini <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
            </article>
          );
        })}
        <div className="w-6 flex-shrink-0" />
      </div>
    </section>
  );
}