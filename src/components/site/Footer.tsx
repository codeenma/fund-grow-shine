import { BookOpen, Facebook, Instagram, Youtube, Music2, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer id="kontak" className="text-white" style={{ background: "var(--gradient-hero)" }}>
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid h-12 w-12 place-items-center rounded-2xl" style={{ background: "var(--gradient-warm)" }}>
              <BookOpen className="h-6 w-6 text-white" />
            </span>
            <div>
              <div className="font-display text-xl font-bold leading-none">Ruma<span className="text-gold">Quran</span></div>
              <div className="mt-1 text-[10px] uppercase tracking-widest text-gold/80">Create Musyrifah Take the Future</div>
            </div>
          </div>
          <p className="mt-5 text-sm leading-relaxed text-white/75">
            RumaQuran Washilaturrahmah Hidayatullah (RQWH) didirikan dalam rangka membangun generasi Qur'ani ditengah suasana keprihatinan atas berbagai kerusakan moral dan kerusakan akhlak serta berbagai penyimpangan yang terjadi pada generasi muda saat ini.
          </p>
        </div>
        <div>
          <div className="font-display text-lg font-bold text-gold">Halaman</div>
          <ul className="mt-5 space-y-3 text-sm text-white/80">
            <li><a href="#beranda" className="hover:text-gold">Beranda</a></li>
            <li><a href="#tentang" className="hover:text-gold">Tentang Kami</a></li>
            <li><a href="#program" className="hover:text-gold">Program</a></li>
            <li><a href="#portofolio" className="hover:text-gold">Portofolio</a></li>
            <li><a href="#donasi" className="hover:text-gold">Donasi</a></li>
            <li><a href="#" className="hover:text-gold">Berita</a></li>
          </ul>
        </div>
        <div>
          <div className="font-display text-lg font-bold text-gold">Kontak Kami</div>
          <div className="mt-5 space-y-4 text-sm text-white/80">
            <p className="flex gap-2">
              <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold" />
              <span><strong className="font-semibold text-white">Alamat</strong> : Jl. Nakip 1 Gg Masjid No.75. Kel. Kota Baru, Tanjung Karang Timur, Bandar Lampung</span>
            </p>
            <div>
              <div className="font-semibold text-white">Contact Person</div>
              <p className="mt-2 flex items-center gap-2"><Phone className="h-4 w-4 text-gold" /><span><strong className="text-white">Official RumaQuran – Rahma:</strong> 0853-6682-2978</span></p>
              <p className="mt-2 flex items-center gap-2"><Phone className="h-4 w-4 text-gold" /><span><strong className="text-white">Humas – Humairah:</strong> 0851-1720-2092</span></p>
            </div>
          </div>
        </div>
        <div>
          <div className="font-display text-lg font-bold text-gold">Social Media</div>
          <div className="mt-5 flex flex-wrap gap-3">
            <a href="#" aria-label="Instagram" className="grid h-11 w-11 place-items-center rounded-full bg-white text-plum-deep transition hover:bg-gold"><Instagram className="h-4 w-4" /></a>
            <a href="#" aria-label="Facebook" className="grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white transition hover:bg-gold hover:text-plum-deep"><Facebook className="h-4 w-4" /></a>
            <a href="#" aria-label="TikTok" className="grid h-11 w-11 place-items-center rounded-full bg-black text-white transition hover:bg-gold hover:text-plum-deep"><Music2 className="h-4 w-4" /></a>
            <a href="#" aria-label="YouTube" className="grid h-11 w-11 place-items-center rounded-full bg-[#FF0000] text-white transition hover:bg-gold hover:text-plum-deep"><Youtube className="h-4 w-4" /></a>
          </div>
          <div className="mt-6 rounded-2xl border border-white/15 bg-white/5 p-4 text-xs text-white/70">
            <div className="font-semibold text-gold">www.rumaquran.org</div>
            <p className="mt-1">Donasi & wakaf Anda akan kami salurkan dengan amanah.</p>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-white/50">
        © 2026 RumaQuran Washilaturrahmah Hidayatullah. Semua hak dilindungi.
      </div>
    </footer>
  );
}