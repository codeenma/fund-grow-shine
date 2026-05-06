import { Heart } from "lucide-react";

const items = ["Pendidikan untuk Semua", "Bangun Sekolah", "Beasiswa Yatim", "Insentif Guru", "Air Bersih", "Buku & Al-Quran", "Fasilitas Belajar"];

export function Marquee() {
  const loop = [...items, ...items];
  return (
    <div className="overflow-hidden border-y-2 border-plum-deep bg-plum-deep py-5 text-white">
      <div className="flex w-max animate-marquee gap-12 whitespace-nowrap">
        {loop.map((t, i) => (
          <div key={i} className="flex items-center gap-4">
            <Heart className="h-4 w-4 fill-gold text-gold" />
            <span className="font-display text-2xl font-bold uppercase tracking-tight md:text-3xl">{t}</span>
          </div>
        ))}
      </div>
    </div>
  );
}