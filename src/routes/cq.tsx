import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Play, Search, Menu, X, MapPin, Phone, Instagram, Facebook, Youtube, Music2, BookOpen, GraduationCap, HandHeart, Building2, Users, Heart, Compass, Sparkles } from "lucide-react";
import logo from "@/assets/logo-rumaquran.png";
import hero from "@/assets/hero-children.jpg";
import p1 from "@/assets/program-books.jpg";
import p2 from "@/assets/program-school.jpg";
import p3 from "@/assets/program-teacher.jpg";
import p4 from "@/assets/program-build.jpg";
import pf1 from "@/assets/portfolio-1.jpg";
import pf2 from "@/assets/portfolio-2.jpg";
import pf3 from "@/assets/portfolio-3.jpg";
import pf4 from "@/assets/portfolio-4.jpg";
import pf5 from "@/assets/portfolio-5.jpg";

export const Route = createFileRoute("/cq")({
  component: CQPage,
  head: () => ({
    meta: [
      { title: "RumaQuran — Generasi Qur'ani" },
      { name: "description", content: "RumaQuran Washilaturrahmah Hidayatullah — membangun generasi Qur'ani." },
    ],
  }),
});

const NAV = [
  { label: "Program", href: "#program" },
  { label: "Kajian", href: "#kajian" },
  { label: "Kemitraan", href: "#kemitraan" },
  { label: "Update", href: "#update" },
  { label: "Kontak", href: "#kontak" },
];

function CQPage() {
  return (
    <main className="min-h-screen bg-white text-[#430736]">
      <CQNav />
      <CQHero />
      <CQStats />
      <CQAbout />
      <CQPrograms />
      <CQPortfolio />
      <CQLocations />
      <CQUpcoming />
      <CQKemitraan />
      <CQDonasi />
      <CQUpdate />
      <CQFooter />
    </main>
  );
}

// Brand palette harmonized with white surfaces
const BRAND = "#761a57";        // primary plum
const BRAND_DARK = "#430736";   // deep plum
const ACCENT = "#df7224";       // warm orange
const GOLD = "#f4c200";         // gold highlight

function CQNav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="absolute left-0 right-0 top-0 z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <a href="#" className="flex items-center gap-2">
          <span className="grid h-12 w-12 place-items-center rounded-xl bg-white p-1.5 shadow-sm">
            <img src={logo} alt="RumaQuran" className="h-full w-full object-contain" />
          </span>
          <span className="font-display text-lg font-extrabold text-white drop-shadow">RumaQuran</span>
        </a>
        <ul className="hidden items-center gap-8 lg:flex">
          {NAV.map((n) => (
            <li key={n.label}>
              <a href={n.href} className="text-sm font-semibold text-white/95 transition hover:text-[var(--accent)]" style={{ ['--accent' as any]: ACCENT }}>
                {n.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-3">
          <button className="hidden h-10 w-10 place-items-center rounded-full text-white hover:bg-white/10 lg:grid" aria-label="Cari">
            <Search className="h-4 w-4" />
          </button>
          <a href="#donasi" className="hidden rounded-full border-2 border-white px-6 py-2 text-sm font-semibold text-white transition hover:bg-white hover:text-[var(--brand-dark)] lg:inline-block" style={{ ['--brand-dark' as any]: BRAND_DARK }}>
            Donasi
          </a>
          <button onClick={() => setOpen(!open)} className="grid h-10 w-10 place-items-center rounded-lg bg-white/10 text-white lg:hidden" aria-label="Menu">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="mx-6 rounded-2xl bg-white p-4 shadow-xl lg:hidden">
          <ul className="flex flex-col gap-1">
            {NAV.map((n) => (
              <li key={n.label}><a onClick={() => setOpen(false)} href={n.href} className="block rounded-lg px-3 py-2 text-sm font-semibold text-[#430736] hover:bg-slate-100">{n.label}</a></li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}

function CQHero() {
  const [playing, setPlaying] = useState(false);
  return (
    <section className="relative min-h-[760px] overflow-hidden">
      <div className="absolute inset-0">
        <img src={hero} alt="RumaQuran" className="h-full w-full object-cover" />
        <div className="absolute inset-0" style={{ background: `linear-gradient(110deg, ${BRAND_DARK}f0 0%, ${BRAND_DARK}cc 40%, ${BRAND}80 100%)` }} />
      </div>
      {/* soft white curve bottom */}
      <svg className="pointer-events-none absolute bottom-0 left-0 right-0 z-[1] w-full" viewBox="0 0 1440 120" preserveAspectRatio="none" style={{ height: 60 }}>
        <path d="M0,80 C360,140 1080,20 1440,80 L1440,120 L0,120 Z" fill="#fff" />
      </svg>
      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-10 px-6 pb-32 pt-40 lg:grid-cols-2">
        <div className="text-white">
          <h1 className="text-5xl font-extrabold leading-[1.05] md:text-6xl">
            Membangun <br /> generasi <span style={{ color: ACCENT }}>Qur'ani</span> <br /> di tengah zaman.
          </h1>
          <p className="mt-6 max-w-md text-base text-white/85 md:text-lg">
            RumaQuran Washilaturrahmah Hidayatullah — wadah membentuk Musyrifah dan menjaga akhlak generasi muda dengan Al-Qur'an.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#donasi" className="inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 text-sm font-bold text-[#430736] shadow-lg transition hover:bg-[#df7224] hover:text-[#430736]">
              Bantu Sekarang <span className="grid h-7 w-7 place-items-center rounded-full" style={{ background: BRAND, color: "#fff" }}><ArrowRight className="h-3.5 w-3.5" /></span>
            </a>
            <a href="#program" className="rounded-full border-2 border-white/60 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10">
              Lihat Program
            </a>
          </div>
          <div className="mt-10 flex items-center gap-2">
            <span className="h-1 w-8 rounded-full bg-white" />
            <span className="h-1 w-2 rounded-full bg-white/40" />
            <span className="h-1 w-2 rounded-full bg-white/40" />
          </div>
        </div>
        <div className="relative hidden lg:block">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border-8 border-white/15 shadow-2xl">
            {playing ? (
              <iframe src="https://www.youtube.com/embed/aqz-KE-bpKQ?autoplay=1" className="h-full w-full" allow="autoplay" />
            ) : (
              <>
                <img src={pf1} className="h-full w-full object-cover" alt="profil" />
                <div className="absolute inset-0 bg-black/30" />
                <button onClick={() => setPlaying(true)} className="absolute inset-0 grid place-items-center" aria-label="Play">
                  <span className="grid h-20 w-20 place-items-center rounded-full bg-white shadow-xl transition hover:scale-110">
                    <Play className="ml-1 h-7 w-7 fill-[#761a57] text-[#761a57]" />
                  </span>
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function CQStats() {
  const stats = [
    { v: "8.500+", l: "Anak Penerima Manfaat", icon: Users },
    { v: "120+", l: "Sekolah & Pesantren", icon: Building2 },
    { v: "240+", l: "Relawan Aktif", icon: HandHeart },
    { v: "Rp 12 M", l: "Dana Tersalurkan", icon: Heart },
  ];
  return (
    <section className="relative z-20 -mt-16 px-6 pb-20">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 rounded-3xl bg-white p-6 shadow-2xl md:grid-cols-4 md:gap-6 md:p-10">
        {stats.map((s) => (
          <div key={s.l} className="text-center">
            <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl text-white" style={{ background: `linear-gradient(135deg, ${BRAND}, ${BRAND_DARK})` }}>
              <s.icon className="h-6 w-6" />
            </div>
            <div className="mt-3 text-2xl font-extrabold text-[#430736] md:text-3xl">{s.v}</div>
            <div className="text-xs font-medium text-slate-500 md:text-sm">{s.l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function CQAbout() {
  return (
    <section id="tentang" className="px-6 py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
        <div className="relative">
          <div className="aspect-square w-full overflow-hidden rounded-[2rem] shadow-xl">
            <img src={pf2} className="h-full w-full object-cover" alt="aktivitas" />
          </div>
          <div className="absolute -bottom-6 -right-6 hidden rounded-2xl p-5 text-white shadow-xl md:block" style={{ background: BRAND }}>
            <div className="text-3xl font-extrabold">15+</div>
            <div className="text-sm">Tahun Pengabdian</div>
          </div>
          <div className="absolute -top-6 -left-6 hidden h-24 w-24 rounded-2xl md:block" style={{ background: ACCENT }} />
        </div>
        <div>
          <span className="inline-block rounded-full px-4 py-1 text-xs font-bold uppercase tracking-widest" style={{ background: `${BRAND}1a`, color: BRAND_DARK }}>
            Tentang Kami
          </span>
          <h2 className="mt-4 text-4xl font-extrabold leading-tight text-[#430736] md:text-5xl">
            Create <span style={{ color: BRAND }}>Musyrifah</span>, Take the Future.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-slate-600">
            <strong>RumaQuran Washilaturrahmah Hidayatullah (RQWH)</strong> didirikan dalam rangka membangun generasi Qur'ani di tengah suasana keprihatinan atas berbagai kerusakan moral dan akhlak serta berbagai penyimpangan yang terjadi pada generasi muda saat ini.
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {[
              "Pembinaan Musyrifah profesional",
              "Tahfizh & Tahsin terstruktur",
              "Laporan donasi transparan",
              "Pendampingan jangka panjang",
            ].map((t) => (
              <li key={t} className="flex items-start gap-2 text-sm text-slate-700">
                <span className="mt-1 grid h-5 w-5 place-items-center rounded-full text-white" style={{ background: BRAND }}>
                  <ArrowRight className="h-3 w-3" />
                </span>
                {t}
              </li>
            ))}
          </ul>
          <a href="#donasi" className="mt-8 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold text-white shadow-lg" style={{ background: BRAND }}>
            Selengkapnya <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

function CQPrograms() {
  const programs = [
    { img: p1, icon: BookOpen, title: "Wakaf Al-Qur'an", desc: "Penyaluran mushaf Al-Qur'an ke pelosok negeri.", target: 250_000_000, raised: 178_500_000 },
    { img: p2, icon: Building2, title: "Pembangunan RumaQuran", desc: "Pendirian rumah pembinaan Musyrifah di berbagai kota.", target: 1_500_000_000, raised: 920_000_000 },
    { img: p3, icon: GraduationCap, title: "Beasiswa Musyrifah", desc: "Beasiswa pendidikan & pelatihan untuk para Musyrifah.", target: 500_000_000, raised: 312_400_000 },
    { img: p4, icon: HandHeart, title: "Sedekah Pangan", desc: "Bantuan pangan untuk santri & keluarga dhuafa.", target: 150_000_000, raised: 96_700_000 },
  ];
  const fmt = (n: number) => "Rp " + n.toLocaleString("id-ID");
  return (
    <section id="program" className="bg-slate-50 px-6 py-20 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-end justify-between gap-6">
          <div>
            <span className="inline-block rounded-full px-4 py-1 text-xs font-bold uppercase tracking-widest text-white" style={{ background: BRAND }}>
              Program Kami
            </span>
            <h2 className="mt-4 text-4xl font-extrabold leading-tight text-[#430736] md:text-5xl">
              Kebaikan yang <span style={{ color: BRAND }}>berkelanjutan</span>.
            </h2>
          </div>
          <a href="#" className="hidden text-sm font-bold text-[#430736] hover:text-[#761a57] md:block">Lihat Semua →</a>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {programs.map((p) => {
            const pct = Math.round((p.raised / p.target) * 100);
            return (
              <article key={p.title} className="group overflow-hidden rounded-3xl bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={p.img} alt={p.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
                  <span className="absolute left-4 top-4 grid h-10 w-10 place-items-center rounded-xl text-white shadow-lg" style={{ background: BRAND }}>
                    <p.icon className="h-4 w-4" />
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-[#430736]">{p.title}</h3>
                  <p className="mt-1 line-clamp-2 text-sm text-slate-500">{p.desc}</p>
                  <div className="mt-4">
                    <div className="h-2 w-full overflow-hidden rounded-full bg-slate-100">
                      <div className="h-full rounded-full" style={{ width: `${pct}%`, background: `linear-gradient(90deg, ${BRAND}, ${ACCENT})` }} />
                    </div>
                    <div className="mt-2 flex justify-between text-xs">
                      <span className="font-bold" style={{ color: BRAND_DARK }}>{fmt(p.raised)}</span>
                      <span className="text-slate-500">{pct}%</span>
                    </div>
                  </div>
                  <a href="#donasi" className="mt-4 block w-full rounded-full py-2.5 text-center text-xs font-bold text-white transition" style={{ background: BRAND_DARK }}>
                    Donasi
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function CQPortfolio() {
  const items = [
    { img: pf1, t: "Pembinaan Musyrifah Angkatan VII" },
    { img: pf2, t: "Wisuda Tahfizh 30 Juz" },
    { img: pf3, t: "Kajian Ahad Pagi" },
    { img: pf4, t: "Bakti Sosial Lampung" },
  ];
  return (
    <section id="kajian" className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <span className="inline-block rounded-full px-4 py-1 text-xs font-bold uppercase tracking-widest" style={{ background: `${BRAND}1a`, color: BRAND_DARK }}>
            Update & Kajian
          </span>
          <h2 className="mt-4 text-4xl font-extrabold text-[#430736] md:text-5xl">Kabar Lapangan Terbaru</h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {items.map((it, i) => (
            <article key={i} className="group relative aspect-[3/4] overflow-hidden rounded-3xl shadow-md">
              <img src={it.img} alt={it.t} className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#430736]/95 via-[#430736]/30 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                <div className="text-[10px] font-bold uppercase tracking-widest" style={{ color: ACCENT }}>Kegiatan</div>
                <div className="mt-1 font-bold leading-snug">{it.t}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function CQKemitraan() {
  return (
    <section id="kemitraan" className="px-6 pb-20">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] p-10 md:p-16" style={{ background: `linear-gradient(135deg, ${BRAND_DARK}, ${BRAND})` }}>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="text-white">
            <span className="inline-block rounded-full bg-white/15 px-4 py-1 text-xs font-bold uppercase tracking-widest" style={{ color: ACCENT }}>
              Kemitraan
            </span>
            <h2 className="mt-4 text-4xl font-extrabold leading-tight md:text-5xl">
              Mari <span style={{ color: ACCENT }}>berkolaborasi</span> menebar manfaat.
            </h2>
            <p className="mt-4 text-white/80">
              Bersama mitra korporasi, instansi, dan komunitas, kami menyalurkan kebaikan secara amanah dan tepat sasaran.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="grid aspect-video place-items-center rounded-2xl bg-white/95 p-4 text-xs font-bold text-slate-400">
                Mitra {i + 1}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CQDonasi() {
  return (
    <section id="donasi" className="px-6 py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center">
        <div>
          <span className="inline-block rounded-full px-4 py-1 text-xs font-bold uppercase tracking-widest text-white" style={{ background: ACCENT, color: BRAND_DARK }}>
            Donasi
          </span>
          <h2 className="mt-4 text-4xl font-extrabold leading-tight text-[#430736] md:text-5xl">
            Kebaikanmu hari ini, <span style={{ color: BRAND }}>cahaya esok hari.</span>
          </h2>
          <p className="mt-5 text-slate-600">
            Mulai dari Rp 10.000 kamu sudah ikut menjaga generasi Qur'ani. Donasi diaudit & dilaporkan transparan setiap bulan.
          </p>
          <div className="mt-8 grid grid-cols-3 gap-3">
            {["Rp 50K", "Rp 100K", "Rp 250K"].map((v) => (
              <button key={v} className="rounded-2xl border-2 border-slate-200 py-3 text-sm font-bold text-[#430736] transition hover:border-[#761a57] hover:bg-[#761a57] hover:text-white">
                {v}
              </button>
            ))}
          </div>
          <a href="#" className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full py-4 text-sm font-bold text-white shadow-lg md:w-auto md:px-10" style={{ background: BRAND }}>
            Donasi Sekarang <ArrowRight className="h-4 w-4" />
          </a>
        </div>
        <div className="rounded-3xl p-8 text-white shadow-xl" style={{ background: BRAND_DARK }}>
          <div className="flex items-center gap-3">
            <div className="grid h-12 w-12 place-items-center rounded-xl" style={{ background: ACCENT, color: BRAND_DARK }}>
              <Heart className="h-5 w-5" />
            </div>
            <div>
              <div className="text-xs uppercase tracking-widest" style={{ color: ACCENT }}>Rekening Donasi</div>
              <div className="font-bold">RumaQuran Washilaturrahmah</div>
            </div>
          </div>
          <ul className="mt-6 space-y-3">
            {[
              { b: "BSI", n: "7088 332 211", a: "RumaQuran" },
              { b: "Mandiri", n: "114 0099 88 7766", a: "RumaQuran" },
              { b: "BCA", n: "844 092 1188", a: "RumaQuran" },
            ].map((r) => (
              <li key={r.b} className="flex items-center justify-between rounded-2xl bg-white/5 px-4 py-3">
                <div>
                  <div className="text-xs text-white/60">{r.b}</div>
                  <div className="font-mono font-bold">{r.n}</div>
                </div>
                <span className="text-xs text-white/70">a.n {r.a}</span>
              </li>
            ))}
          </ul>
          <p className="mt-5 text-xs text-white/60">Konfirmasi donasi via WhatsApp 0853-6682-2978</p>
        </div>
      </div>
    </section>
  );
}

const LOCATIONS = [
  { img: pf1, name: "RumaQuran Utama", address: "Jl. Nakip 1 Gg Masjid No. 75, Kota Baru, Tanjungkarang Timur, Bandar Lampung" },
  { img: pf2, name: "RumaQuran Kota Baru", address: "Jl. Nasir No. 144, Kota Baru, Tanjungkarang Timur, Bandar Lampung" },
  { img: pf3, name: "RumaQuran Kedaton", address: "Jl. Kalelawar No. 46, Sidodadi, Kec. Kedaton, Bandar Lampung" },
  { img: pf4, name: "RumaQuran Kemiling", address: "Jl. Amethys 6 No. 32, Bukit Kemiling Permai, Bandar Lampung" },
  { img: pf5, name: "RumaQuran Pendopo", address: "Jl. Amethys 6 No. 32, Bukit Kemiling Permai, Bandar Lampung" },
];

function CQLocations() {
  return (
    <section id="lokasi" className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full px-4 py-1 text-xs font-bold uppercase tracking-widest" style={{ background: `${BRAND}1a`, color: BRAND_DARK }}>
            <Compass className="h-3.5 w-3.5" /> Lokasi Kami
          </span>
          <h2 className="mt-4 text-4xl font-extrabold leading-tight text-[#430736] md:text-5xl">
            Lokasi <span style={{ color: BRAND }}>RumaQuran</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-500">
            Saat ini telah berdiri 5 cabang RumaQuran Washilaturrahmah Hidayatullah di kota Bandar Lampung.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {LOCATIONS.map((l, i) => (
            <article key={l.name} className="group relative overflow-hidden rounded-3xl bg-white shadow-md ring-1 ring-slate-100 transition hover:-translate-y-1 hover:shadow-xl">
              <div className="relative aspect-[5/3] overflow-hidden">
                <img src={l.img} alt={l.name} className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#430736]/70 via-transparent to-transparent" />
                <span className="absolute left-4 top-4 grid h-9 w-9 place-items-center rounded-xl text-white shadow-lg" style={{ background: BRAND }}>
                  <MapPin className="h-4 w-4" />
                </span>
                <span className="absolute right-4 top-4 rounded-full bg-white/95 px-3 py-1 text-[10px] font-bold uppercase tracking-widest" style={{ color: BRAND }}>
                  Cabang #{i + 1}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-extrabold uppercase leading-snug text-[#430736]">{l.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">{l.address}</p>
                <a href={`https://maps.google.com/?q=${encodeURIComponent(l.address)}`} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-2 text-sm font-bold transition hover:gap-3" style={{ color: BRAND }}>
                  Lihat di Maps <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const UPCOMING = [
  { name: "Way Halim", city: "Bandar Lampung", progress: 72, target: 1_500_000_000, raised: 1_080_000_000 },
  { name: "Seputaran UI", city: "Depok, Jawa Barat", progress: 38, target: 2_000_000_000, raised: 760_000_000 },
  { name: "Seputaran ITB", city: "Bandung, Jawa Barat", progress: 24, target: 2_500_000_000, raised: 600_000_000 },
];

function CQUpcoming() {
  const fmt = (n: number) => "Rp " + (n / 1_000_000).toFixed(0) + " Jt";
  return (
    <section id="rencana" className="relative overflow-hidden px-6 py-20 md:py-28" style={{ background: `linear-gradient(180deg, #fff 0%, ${BRAND}08 100%)` }}>
      <div className="pointer-events-none absolute -left-20 top-10 h-72 w-72 rounded-full opacity-20 blur-3xl" style={{ background: ACCENT }} />
      <div className="pointer-events-none absolute -right-20 bottom-10 h-72 w-72 rounded-full opacity-20 blur-3xl" style={{ background: BRAND }} />
      <div className="relative mx-auto max-w-7xl">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full px-4 py-1 text-xs font-bold uppercase tracking-widest text-white" style={{ background: BRAND }}>
            <Sparkles className="h-3.5 w-3.5" /> Rencana Pembangunan
          </span>
          <h2 className="mt-4 text-4xl font-extrabold leading-tight text-[#430736] md:text-5xl">
            Cabang <span style={{ color: ACCENT }}>Berikutnya</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-500">
            Bersama-sama kita wujudkan rumah pembinaan Musyrifah berikutnya. Setiap rupiah yang kamu titipkan jadi bagian dari ikhtiar besar ini.
          </p>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {UPCOMING.map((u, i) => (
            <article key={u.name} className="relative rounded-3xl bg-white p-7 shadow-md ring-1 ring-slate-100 transition hover:-translate-y-1 hover:shadow-xl">
              <div className="absolute -top-5 left-7 grid h-12 w-12 place-items-center rounded-2xl text-sm font-extrabold text-white shadow-lg" style={{ background: `linear-gradient(135deg, ${BRAND}, ${BRAND_DARK})` }}>
                0{i + 1}
              </div>
              <div className="flex items-center justify-between pt-3">
                <span className="rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-widest" style={{ background: `${ACCENT}1a`, color: ACCENT }}>Coming Soon</span>
                <MapPin className="h-4 w-4 text-slate-300" />
              </div>
              <h3 className="mt-4 text-2xl font-extrabold leading-tight text-[#430736]">{u.name}</h3>
              <p className="text-sm text-slate-500">{u.city}</p>
              {/* progress ring + numbers */}
              <div className="mt-6 flex items-center gap-5">
                <div className="relative h-20 w-20 flex-shrink-0">
                  <div className="absolute inset-0 rounded-full" style={{ background: `conic-gradient(${BRAND} ${u.progress}%, ${BRAND}1a 0)` }} />
                  <div className="absolute inset-1.5 grid place-items-center rounded-full bg-white">
                    <span className="text-base font-extrabold" style={{ color: BRAND }}>{u.progress}%</span>
                  </div>
                </div>
                <div className="flex-1 text-sm">
                  <div className="text-slate-400">Terkumpul</div>
                  <div className="font-extrabold text-[#430736]">{fmt(u.raised)}</div>
                  <div className="mt-1 text-xs text-slate-400">dari target {fmt(u.target)}</div>
                </div>
              </div>
              <a href="#donasi" className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full py-3 text-sm font-bold text-white shadow-md transition hover:opacity-90" style={{ background: BRAND }}>
                Dukung Pembangunan <ArrowRight className="h-4 w-4" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
function CQUpdate() {
  const posts = [
    { img: pf3, tag: "Berita", t: "Pembukaan RumaQuran cabang Way Halim", d: "10 Mei 2026" },
    { img: pf4, tag: "Kegiatan", t: "Wisuda Musyrifah angkatan ke-7", d: "02 Mei 2026" },
    { img: pf1, tag: "Kajian", t: "Kajian Tafsir Pekanan bersama Ustadz", d: "28 Apr 2026" },
  ];
  return (
    <section id="update" className="bg-slate-50 px-6 py-20 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-end justify-between">
          <div>
            <span className="inline-block rounded-full px-4 py-1 text-xs font-bold uppercase tracking-widest" style={{ background: `${BRAND}1a`, color: BRAND_DARK }}>
              Update Terbaru
            </span>
            <h2 className="mt-4 text-4xl font-extrabold text-[#430736] md:text-5xl">Kabar dari Lapangan</h2>
          </div>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {posts.map((p) => (
            <article key={p.t} className="overflow-hidden rounded-3xl bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={p.img} alt={p.t} className="h-full w-full object-cover" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 text-xs">
                  <span className="rounded-full px-3 py-1 font-bold" style={{ background: `${BRAND}1a`, color: BRAND_DARK }}>{p.tag}</span>
                  <span className="text-slate-400">{p.d}</span>
                </div>
                <h3 className="mt-3 font-bold leading-snug text-[#430736]">{p.t}</h3>
                <a href="#" className="mt-4 inline-flex items-center gap-1 text-sm font-bold" style={{ color: BRAND }}>
                  Selengkapnya <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function CQFooter() {
  return (
    <footer id="kontak" className="text-white" style={{ background: BRAND_DARK }}>
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid h-12 w-12 place-items-center rounded-xl bg-white p-1.5">
              <img src={logo} alt="RumaQuran" className="h-full w-full object-contain" />
            </span>
            <div className="font-display text-xl font-bold">RumaQuran</div>
          </div>
          <p className="mt-5 text-sm leading-relaxed text-white/70">
            RumaQuran Washilaturrahmah Hidayatullah — membangun generasi Qur'ani melalui pembinaan Musyrifah.
          </p>
        </div>
        <div>
          <div className="text-sm font-bold uppercase tracking-widest" style={{ color: ACCENT }}>Halaman</div>
          <ul className="mt-5 space-y-2 text-sm text-white/80">
            {NAV.map((n) => (<li key={n.label}><a href={n.href} className="hover:text-[#df7224]">{n.label}</a></li>))}
          </ul>
        </div>
        <div>
          <div className="text-sm font-bold uppercase tracking-widest" style={{ color: ACCENT }}>Kontak</div>
          <div className="mt-5 space-y-3 text-sm text-white/80">
            <p className="flex gap-2"><MapPin className="mt-0.5 h-4 w-4 flex-shrink-0" style={{ color: ACCENT }} /> Jl. Nakip 1 Gg Masjid No.75, Tanjung Karang Timur, Bandar Lampung</p>
            <p className="flex items-center gap-2"><Phone className="h-4 w-4" style={{ color: ACCENT }} /> 0853-6682-2978 (Rahma)</p>
            <p className="flex items-center gap-2"><Phone className="h-4 w-4" style={{ color: ACCENT }} /> 0851-1720-2092 (Humairah)</p>
          </div>
        </div>
        <div>
          <div className="text-sm font-bold uppercase tracking-widest" style={{ color: ACCENT }}>Ikuti Kami</div>
          <div className="mt-5 flex gap-3">
            {[Instagram, Facebook, Youtube, Music2].map((Ic, i) => (
              <a key={i} href="#" className="grid h-10 w-10 place-items-center rounded-full bg-white/10 transition hover:bg-[#df7224] hover:text-[#430736]">
                <Ic className="h-4 w-4" />
              </a>
            ))}
          </div>
          <div className="mt-6 rounded-2xl border border-white/15 bg-white/5 p-4 text-xs">
            <div className="font-bold" style={{ color: ACCENT }}>www.rumaquran.org</div>
            <p className="mt-1 text-white/70">Donasi & wakaf disalurkan dengan amanah.</p>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-white/50">
        © 2026 RumaQuran Washilaturrahmah Hidayatullah.
      </div>
    </footer>
  );
}