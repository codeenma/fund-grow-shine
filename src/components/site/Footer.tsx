import { Heart, Facebook, Instagram, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer id="kontak" className="bg-plum-deep text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-full" style={{ background: "var(--gradient-warm)" }}>
              <Heart className="h-4 w-4 text-white" fill="white" />
            </span>
            <span className="font-display text-xl font-bold">Cahaya<span className="text-gold">Ilmu</span></span>
          </div>
          <p className="mt-4 max-w-md text-sm text-white/70">
            Yayasan crowdfunding pendidikan & fasilitas yang menghubungkan kebaikanmu dengan anak-anak negeri.
          </p>
          <div className="mt-5 flex gap-3">
            {[Facebook, Instagram, Youtube].map((Icon, i) => (
              <a key={i} href="#" className="grid h-10 w-10 place-items-center rounded-full bg-white/10 transition hover:bg-orange">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
        <div>
          <div className="font-display font-bold text-gold">Tautan</div>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            <li><a href="#tentang" className="hover:text-white">Tentang Kami</a></li>
            <li><a href="#program" className="hover:text-white">Program</a></li>
            <li><a href="#donasi" className="hover:text-white">Donasi</a></li>
            <li><a href="#" className="hover:text-white">Laporan Keuangan</a></li>
          </ul>
        </div>
        <div>
          <div className="font-display font-bold text-gold">Kontak</div>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            <li>Jl. Cahaya No. 12, Jakarta</li>
            <li>halo@cahayailmu.id</li>
            <li>+62 812 3456 7890</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-white/50">
        © 2026 Cahaya Ilmu. Semua hak dilindungi.
      </div>
    </footer>
  );
}