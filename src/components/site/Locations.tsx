import { MapPin } from "lucide-react";
import p1 from "@/assets/portfolio-1.jpg";
import p2 from "@/assets/portfolio-2.jpg";
import p3 from "@/assets/portfolio-3.jpg";
import p4 from "@/assets/portfolio-4.jpg";
import p5 from "@/assets/portfolio-5.jpg";

const locations = [
  { img: p1, name: "RumaQuran Utama", address: "Jl. Nakip 1 Gg Masjid No. 75, Kel. Kota Baru, Tanjungkarang Timur, Bandar Lampung", maps: "https://maps.google.com/?q=Jl.+Nakip+1+Bandar+Lampung" },
  { img: p2, name: "RumaQuran Kota Baru", address: "Jl. Nasir No.144, Kel. Kota Baru, Tanjungkarang Timur, Bandar Lampung", maps: "https://maps.google.com/?q=Jl.+Nasir+Kota+Baru+Bandar+Lampung" },
  { img: p3, name: "RumaQuran Kedaton", address: "Jl. Kalelawar No. 46, Kel. Sidodadi, Kec. Kedaton, Bandar Lampung", maps: "https://maps.google.com/?q=Jl.+Kalelawar+Kedaton+Bandar+Lampung" },
  { img: p4, name: "RumaQuran Kemiling", address: "Jl. Amethys 6, No. 32, Bukit Kemiling Permai, Bandar Lampung", maps: "https://maps.google.com/?q=Bukit+Kemiling+Permai+Bandar+Lampung" },
  { img: p5, name: "RumaQuran Pendopo", address: "Jl. Amethys 6, No. 32, Bukit Kemiling Permai, Bandar Lampung", maps: "https://maps.google.com/?q=Pendopo+Bandar+Lampung" },
];

export function Locations() {
  return (
    <section id="lokasi" className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
            <MapPin className="h-3.5 w-3.5" /> Lokasi Kami
          </span>
          <h2 className="mt-5 font-display text-4xl font-extrabold uppercase tracking-tight text-plum-deep md:text-5xl">
            Lokasi <span className="text-primary">RumaQuran</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-foreground/70 md:text-lg">
            Saat ini telah berdiri 5 lokasi RumaQuran Washilaturrahmah Hidayatullah di kota Bandar Lampung.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {locations.map((l, i) => (
            <article
              key={i}
              className="group relative flex flex-col overflow-hidden rounded-[2rem] border-[3px] border-primary bg-white p-4 shadow-[var(--shadow-soft)] transition hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]"
            >
              <div className="overflow-hidden rounded-2xl">
                <img
                  src={l.img}
                  alt={l.name}
                  loading="lazy"
                  className="h-44 w-full object-cover transition duration-700 group-hover:scale-110"
                />
              </div>
              <div className="flex flex-1 flex-col items-center px-2 pt-5 text-center">
                <h3 className="font-display text-xl font-extrabold uppercase leading-tight text-plum-deep">
                  {l.name}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-foreground/70">
                  {l.address}
                </p>
                <a
                  href={l.maps}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-plum-deep"
                >
                  <MapPin className="h-4 w-4" /> Lihat Maps
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}