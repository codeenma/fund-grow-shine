import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen, GraduationCap, HandHeart, Heart, MapPin, Quote, Sparkles, TrendingUp, Users, Wallet, Building2, Droplets, ShieldCheck, Phone, Instagram, Facebook, Youtube, Music2 } from "lucide-react";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo-rumaquran.png";
import heroImg from "@/assets/hero-children.jpg";
import schoolImg from "@/assets/program-school.jpg";
import buildImg from "@/assets/program-build.jpg";
import booksImg from "@/assets/program-books.jpg";
import teacherImg from "@/assets/program-teacher.jpg";
import waterImg from "@/assets/program-water.jpg";

export const Route = createFileRoute("/light")({
  head: () => ({
    meta: [
      { title: "RumaQuran — Versi Light & Clean" },
      { name: "description", content: "Tampilan light & clean RumaQuran dengan infografik program, transaksi, dan transparansi donasi." },
    ],
  }),
  component: LightPage,
});

const fmt = (n: number) => "Rp " + n.toLocaleString("id-ID");

function LightPage() {
  return (
    <main className="min-h-screen bg-[#FBF7F2] text-[#3a1f30]">
      <LightNav />
      <LightHero />
      <LightStats />
      <LightAbout />
      <LightPrograms />
      <LightTransactions />
      <LightInfographic />
      <LightLocations />
      <LightCTA />
      <LightFooter />
    </main>
  );
}

/* ---------------- NAV ---------------- */
function LightNav() {
  const links = [
    { label: "Beranda", href: "#beranda" },
    { label: "Tentang", href: "#tentang" },
    { label: "Program", href: "#program" },
    { label: "Transaksi", href: "#transaksi" },
    { label: "Lokasi", href: "#lokasi" },
  ];
  return (
    <header className="sticky top-0 z-50 border-b border-[#efe3d6]/80 bg-[#FBF7F2]/85 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <a href="#beranda" className="flex items-center gap-3">
          <img src={logo} alt="RumaQuran" className="h-11 w-auto" />
          <span className="hidden font-display text-lg font-bold text-[#5e2347] md:inline">Ruma<span className="text-[#c98a3a]">Quran</span></span>
        </a>
        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="rounded-full px-4 py-2 text-sm font-medium text-[#5e2347]/80 transition hover:bg-white hover:text-[#5e2347]">{l.label}</a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <Link to="/" className="hidden text-xs font-medium text-[#5e2347]/60 underline-offset-4 hover:underline md:inline">versi gelap</Link>
          <Button size="sm" className="rounded-full bg-[#c98a3a] text-white shadow-md hover:bg-[#b3782e]">
            Donasi
          </Button>
        </div>
      </nav>
    </header>
  );
}

/* ---------------- HERO ---------------- */
function LightHero() {
  return (
    <section id="beranda" className="relative overflow-hidden">
      <div className="absolute -right-20 top-20 h-80 w-80 rounded-full bg-[#f7d8a8]/50 blur-3xl" />
      <div className="absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-[#e6c8d8]/50 blur-3xl" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:py-28">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-[#e3c9b3] bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#8a4a32]">
            <Sparkles className="h-3.5 w-3.5" /> Cahaya untuk generasi Qur'ani
          </span>
          <h1 className="mt-5 font-display text-5xl font-extrabold leading-[1.05] text-[#5e2347] md:text-6xl lg:text-7xl">
            Create <span className="italic text-[#c98a3a]">Musyrifah</span>,<br />
            Take the <span className="text-[#a23a78]">Future.</span>
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-[#5e2347]/70 md:text-lg">
            RumaQuran Washilaturrahmah Hidayatullah — rumah belajar para penghafal Quran. Setiap kebaikanmu menjadi cahaya bagi mereka.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Button size="lg" className="rounded-full bg-[#a23a78] px-7 text-white shadow-lg hover:bg-[#892e65]">
              Mulai Berdonasi <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="rounded-full border-[#e3c9b3] bg-white text-[#5e2347] hover:bg-[#fff5e8]">
              Lihat Program
            </Button>
          </div>
        </div>
        <div className="relative">
          <div className="overflow-hidden rounded-[2.5rem] border-8 border-white shadow-2xl">
            <img src={heroImg} alt="Santri RumaQuran" className="aspect-[4/5] w-full object-cover" />
          </div>
          <div className="absolute -left-6 bottom-10 hidden rounded-2xl bg-white p-4 shadow-xl md:block">
            <div className="flex items-center gap-3">
              <div className="grid h-11 w-11 place-items-center rounded-full bg-[#fff5e8] text-[#c98a3a]"><Heart className="h-5 w-5 fill-current" /></div>
              <div>
                <div className="text-xs text-[#5e2347]/60">Donatur Aktif</div>
                <div className="text-lg font-bold text-[#5e2347]">8.500+</div>
              </div>
            </div>
          </div>
          <div className="absolute -right-4 top-10 hidden rounded-2xl bg-white p-4 shadow-xl md:block">
            <div className="flex items-center gap-3">
              <div className="grid h-11 w-11 place-items-center rounded-full bg-[#f3e6ee] text-[#a23a78]"><BookOpen className="h-5 w-5" /></div>
              <div>
                <div className="text-xs text-[#5e2347]/60">Santri Tahfidz</div>
                <div className="text-lg font-bold text-[#5e2347]">450+</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- STATS BAR ---------------- */
function LightStats() {
  const stats = [
    { v: "5", l: "Lokasi RumaQuran", icon: MapPin, color: "#a23a78" },
    { v: "240+", l: "Pengajar & Relawan", icon: Users, color: "#c98a3a" },
    { v: "Rp 12 M", l: "Dana Tersalur", icon: Wallet, color: "#5e8a3a" },
    { v: "8.500", l: "Penerima Manfaat", icon: HandHeart, color: "#3a6f8a" },
  ];
  return (
    <section className="mx-auto -mt-6 max-w-7xl px-6">
      <div className="grid grid-cols-2 gap-4 rounded-3xl border border-[#efe3d6] bg-white p-6 shadow-sm md:grid-cols-4 md:gap-6 md:p-8">
        {stats.map((s) => (
          <div key={s.l} className="flex items-center gap-4">
            <div className="grid h-12 w-12 flex-shrink-0 place-items-center rounded-2xl" style={{ background: `${s.color}18`, color: s.color }}>
              <s.icon className="h-5 w-5" />
            </div>
            <div>
              <div className="text-2xl font-extrabold text-[#5e2347]">{s.v}</div>
              <div className="text-xs text-[#5e2347]/60">{s.l}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------------- ABOUT ---------------- */
function LightAbout() {
  return (
    <section id="tentang" className="mx-auto max-w-7xl px-6 py-24">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-[#f3e6ee] px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#a23a78]">
            <Quote className="h-3.5 w-3.5" /> Profil Yayasan
          </span>
          <h2 className="mt-5 font-display text-4xl font-bold leading-tight text-[#5e2347] md:text-5xl">
            Rumah belajar bagi <span className="text-[#a23a78]">generasi Qur'ani</span>.
          </h2>
          <p className="mt-5 leading-relaxed text-[#5e2347]/70 md:text-lg">
            <strong className="text-[#5e2347]">RumaQuran Washilaturrahmah Hidayatullah (RQWH)</strong> didirikan dalam rangka membangun generasi Qur'ani di tengah keprihatinan atas berbagai kerusakan moral dan akhlak generasi muda saat ini.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-4">
            {[
              { t: "Transparan", d: "Laporan donasi diaudit setiap bulan." },
              { t: "Tepat Sasaran", d: "Survei lapangan sebelum penyaluran." },
              { t: "Berkelanjutan", d: "Pendampingan jangka panjang." },
              { t: "Kolaboratif", d: "240+ relawan & pengajar lokal." },
            ].map((f) => (
              <div key={f.t} className="rounded-2xl border border-[#efe3d6] bg-white p-5">
                <div className="mb-2 h-1 w-8 rounded-full bg-gradient-to-r from-[#c98a3a] to-[#e8b56a]" />
                <h3 className="font-display text-lg font-bold text-[#5e2347]">{f.t}</h3>
                <p className="mt-1 text-sm text-[#5e2347]/65">{f.d}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="aspect-[4/5] overflow-hidden rounded-[2.5rem] border-8 border-white shadow-xl">
            <img src={schoolImg} alt="Profil yayasan" className="h-full w-full object-cover" />
          </div>
          <div className="absolute -bottom-6 left-6 right-6 rounded-2xl bg-white p-5 shadow-xl">
            <div className="flex items-center gap-3">
              <ShieldCheck className="h-8 w-8 text-[#5e8a3a]" />
              <div>
                <div className="text-xs uppercase tracking-widest text-[#5e2347]/60">Tersertifikasi</div>
                <div className="font-bold text-[#5e2347]">Yayasan resmi & akuntabel</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- PROGRAMS (infographic) ---------------- */
const programs = [
  { img: buildImg, tag: "Pembangunan", title: "Bangun 3 Ruang Kelas di NTT", loc: "Sumba, NTT", target: 250_000_000, raised: 178_000_000, donors: 412, icon: Building2 },
  { img: schoolImg, tag: "Beasiswa", title: "Beasiswa Anak Yatim Pelosok", loc: "Garut, Jabar", target: 120_000_000, raised: 96_500_000, donors: 287, icon: GraduationCap },
  { img: booksImg, tag: "Fasilitas", title: "1.000 Al-Quran untuk Santri", loc: "Aceh", target: 80_000_000, raised: 52_000_000, donors: 196, icon: BookOpen },
  { img: teacherImg, tag: "Pengajar", title: "Insentif Guru Honorer 3T", loc: "Papua Barat", target: 200_000_000, raised: 87_000_000, donors: 154, icon: Users },
  { img: waterImg, tag: "Sanitasi", title: "Air Bersih untuk Sekolah Dasar", loc: "Lombok Timur", target: 95_000_000, raised: 41_000_000, donors: 121, icon: Droplets },
];

function LightPrograms() {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <section id="program" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#fff5e8] px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#c98a3a]">Program Aktif</span>
            <h2 className="mt-5 font-display text-4xl font-bold text-[#5e2347] md:text-5xl">Pilih jalan kebaikan.</h2>
            <p className="mt-3 text-[#5e2347]/65 md:text-lg">Geser untuk melihat program berlangsung — donasi tersalur 100% sesuai amanah.</p>
          </div>
        </div>

        <div ref={ref} className="scrollbar-hide mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-6">
          {programs.map((p, i) => {
            const pct = Math.round((p.raised / p.target) * 100);
            const Icon = p.icon;
            return (
              <article key={i} className="group w-[85vw] flex-shrink-0 snap-start overflow-hidden rounded-3xl border border-[#efe3d6] bg-[#FBF7F2] shadow-sm transition hover:-translate-y-1 hover:shadow-lg sm:w-[360px]">
                <div className="relative h-48 overflow-hidden">
                  <img src={p.img} alt={p.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
                  <div className="absolute left-3 top-3 flex items-center gap-2 rounded-full bg-white/95 px-3 py-1.5 shadow">
                    <Icon className="h-3.5 w-3.5 text-[#a23a78]" />
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#5e2347]">{p.tag}</span>
                  </div>
                </div>
                <div className="p-5">
                  <div className="text-xs text-[#5e2347]/60">📍 {p.loc}</div>
                  <h3 className="mt-1 font-display text-lg font-bold leading-snug text-[#5e2347]">{p.title}</h3>
                  <div className="mt-4">
                    <div className="flex items-baseline justify-between">
                      <span className="text-lg font-extrabold text-[#a23a78]">{fmt(p.raised)}</span>
                      <span className="text-sm font-bold text-[#c98a3a]">{pct}%</span>
                    </div>
                    <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-[#f0e2d4]">
                      <div className="h-full rounded-full bg-gradient-to-r from-[#c98a3a] to-[#e8b56a]" style={{ width: `${pct}%` }} />
                    </div>
                    <div className="mt-2 flex justify-between text-[11px] text-[#5e2347]/55">
                      <span>dari {fmt(p.target)}</span>
                      <span>{p.donors} donatur</span>
                    </div>
                  </div>
                  <Button className="mt-4 w-full rounded-full bg-[#a23a78] text-white hover:bg-[#892e65]">
                    Donasi <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------- TRANSACTIONS (live infographic) ---------------- */
const transactions = [
  { name: "Hamba Allah", amount: 500_000, program: "Bangun Kelas NTT", time: "2 menit lalu" },
  { name: "Ahmad R.", amount: 250_000, program: "Beasiswa Yatim", time: "8 menit lalu" },
  { name: "Siti Aminah", amount: 1_000_000, program: "Wakaf Al-Quran", time: "15 menit lalu" },
  { name: "Hamba Allah", amount: 100_000, program: "Air Bersih SD", time: "32 menit lalu" },
  { name: "Keluarga F.", amount: 2_500_000, program: "Insentif Guru 3T", time: "1 jam lalu" },
  { name: "Hamba Allah", amount: 50_000, program: "Beasiswa Yatim", time: "1 jam lalu" },
  { name: "Bayu P.", amount: 750_000, program: "Bangun Kelas NTT", time: "2 jam lalu" },
  { name: "Nur Aisyah", amount: 300_000, program: "Wakaf Al-Quran", time: "3 jam lalu" },
];

function LightTransactions() {
  const totals = { today: 18_450_000, donors: 124, programs: 5 };
  return (
    <section id="transaksi" className="mx-auto max-w-7xl px-6 py-24">
      <div className="text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-[#e9f2e0] px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#5e8a3a]">
          <TrendingUp className="h-3.5 w-3.5" /> Transparansi
        </span>
        <h2 className="mt-5 font-display text-4xl font-bold text-[#5e2347] md:text-5xl">Transaksi Terbaru.</h2>
        <p className="mx-auto mt-3 max-w-2xl text-[#5e2347]/65 md:text-lg">Setiap donasi tercatat dan dapat dipantau secara terbuka.</p>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {/* Summary */}
        <div className="space-y-4">
          <div className="rounded-3xl bg-gradient-to-br from-[#a23a78] to-[#5e2347] p-7 text-white shadow-lg">
            <div className="text-xs uppercase tracking-widest text-white/70">Donasi Hari Ini</div>
            <div className="mt-2 text-4xl font-extrabold">{fmt(totals.today)}</div>
            <div className="mt-3 flex items-center gap-2 text-sm text-white/80">
              <TrendingUp className="h-4 w-4 text-[#f4c200]" /> +18% dari kemarin
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-2xl border border-[#efe3d6] bg-white p-5">
              <Users className="h-5 w-5 text-[#c98a3a]" />
              <div className="mt-3 text-2xl font-extrabold text-[#5e2347]">{totals.donors}</div>
              <div className="text-xs text-[#5e2347]/60">Donatur Hari Ini</div>
            </div>
            <div className="rounded-2xl border border-[#efe3d6] bg-white p-5">
              <HandHeart className="h-5 w-5 text-[#a23a78]" />
              <div className="mt-3 text-2xl font-extrabold text-[#5e2347]">{totals.programs}</div>
              <div className="text-xs text-[#5e2347]/60">Program Aktif</div>
            </div>
          </div>
        </div>

        {/* Transaction list */}
        <div className="lg:col-span-2">
          <div className="rounded-3xl border border-[#efe3d6] bg-white p-2 shadow-sm">
            <div className="flex items-center justify-between px-4 py-3">
              <div className="font-display font-bold text-[#5e2347]">Aliran Donasi</div>
              <span className="flex items-center gap-1.5 rounded-full bg-[#e9f2e0] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#5e8a3a]">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#5e8a3a]" /> Live
              </span>
            </div>
            <div className="max-h-[440px] divide-y divide-[#f5ebe0] overflow-y-auto">
              {transactions.map((t, i) => (
                <div key={i} className="flex items-center gap-4 px-4 py-3.5 transition hover:bg-[#FBF7F2]">
                  <div className="grid h-10 w-10 flex-shrink-0 place-items-center rounded-full bg-[#fff5e8] text-[#c98a3a]">
                    <Heart className="h-4 w-4 fill-current" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-3">
                      <span className="truncate font-semibold text-[#5e2347]">{t.name}</span>
                      <span className="flex-shrink-0 font-bold text-[#5e8a3a]">{fmt(t.amount)}</span>
                    </div>
                    <div className="mt-0.5 flex items-center gap-2 text-xs text-[#5e2347]/55">
                      <span className="truncate">untuk <span className="text-[#a23a78]">{t.program}</span></span>
                      <span>·</span>
                      <span className="flex-shrink-0">{t.time}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- INFOGRAPHIC: distribution & impact ---------------- */
function LightInfographic() {
  const breakdown = [
    { label: "Operasional Pengajaran", pct: 45, color: "#a23a78" },
    { label: "Pembangunan Fasilitas", pct: 25, color: "#c98a3a" },
    { label: "Beasiswa Santri", pct: 18, color: "#5e8a3a" },
    { label: "Distribusi Quran & Buku", pct: 8, color: "#3a6f8a" },
    { label: "Administrasi", pct: 4, color: "#8a6e3a" },
  ];
  // build conic gradient
  let acc = 0;
  const stops = breakdown
    .map((b) => {
      const start = acc;
      acc += b.pct;
      return `${b.color} ${start}% ${acc}%`;
    })
    .join(", ");

  const impact = [
    { v: "120+", l: "Sekolah dibantu", icon: Building2 },
    { v: "1.2K", l: "Quran terdistribusi", icon: BookOpen },
    { v: "450", l: "Santri tahfidz", icon: GraduationCap },
    { v: "32", l: "Sumur air bersih", icon: Droplets },
  ];

  return (
    <section className="bg-[#f5ebe0]/40 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#a23a78]">Infografik</span>
          <h2 className="mt-5 font-display text-4xl font-bold text-[#5e2347] md:text-5xl">Kemana donasimu mengalir?</h2>
        </div>

        <div className="mt-12 grid items-center gap-10 lg:grid-cols-2">
          {/* Pie */}
          <div className="flex flex-col items-center">
            <div
              className="relative h-72 w-72 rounded-full shadow-xl"
              style={{ background: `conic-gradient(${stops})` }}
            >
              <div className="absolute inset-8 grid place-items-center rounded-full bg-white">
                <div className="text-center">
                  <div className="text-xs uppercase tracking-widest text-[#5e2347]/55">Total 2025</div>
                  <div className="mt-1 font-display text-3xl font-extrabold text-[#5e2347]">Rp 12 M</div>
                  <div className="mt-1 text-xs text-[#5e2347]/55">tersalur amanah</div>
                </div>
              </div>
            </div>
          </div>
          {/* Legend */}
          <div className="space-y-3">
            {breakdown.map((b) => (
              <div key={b.label} className="rounded-2xl border border-[#efe3d6] bg-white p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="h-3 w-3 rounded-full" style={{ background: b.color }} />
                    <span className="font-semibold text-[#5e2347]">{b.label}</span>
                  </div>
                  <span className="font-bold text-[#5e2347]">{b.pct}%</span>
                </div>
                <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-[#f5ebe0]">
                  <div className="h-full rounded-full" style={{ width: `${b.pct}%`, background: b.color }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Impact tiles */}
        <div className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-4">
          {impact.map((m) => {
            const Icon = m.icon;
            return (
              <div key={m.l} className="rounded-3xl border border-[#efe3d6] bg-white p-6 text-center shadow-sm">
                <div className="mx-auto grid h-12 w-12 place-items-center rounded-2xl bg-[#fff5e8] text-[#c98a3a]">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="mt-4 font-display text-3xl font-extrabold text-[#5e2347]">{m.v}</div>
                <div className="mt-1 text-xs text-[#5e2347]/60">{m.l}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------- LOCATIONS ---------------- */
const locations = [
  { name: "RumaQuran Utama", address: "Jl. Nakip 1 Gg Masjid No. 75, Kota Baru, Bandar Lampung" },
  { name: "RumaQuran Kota Baru", address: "Jl. Nasir No.144, Kota Baru, Bandar Lampung" },
  { name: "RumaQuran Kedaton", address: "Jl. Kalelawar No. 46, Sidodadi, Kedaton, Bandar Lampung" },
  { name: "RumaQuran Kemiling", address: "Jl. Amethys 6, No. 32, Bukit Kemiling Permai, Bandar Lampung" },
  { name: "RumaQuran Pendopo", address: "Pendopo, Bandar Lampung" },
];

function LightLocations() {
  return (
    <section id="lokasi" className="mx-auto max-w-7xl px-6 py-24">
      <div className="text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-[#f3e6ee] px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#a23a78]">
          <MapPin className="h-3.5 w-3.5" /> Lokasi Kami
        </span>
        <h2 className="mt-5 font-display text-4xl font-bold text-[#5e2347] md:text-5xl">5 Lokasi RumaQuran</h2>
      </div>
      <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {locations.map((l, i) => (
          <article key={i} className="group rounded-3xl border border-[#efe3d6] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[#f3e6ee] text-[#a23a78]">
              <MapPin className="h-5 w-5" />
            </div>
            <h3 className="mt-4 font-display text-lg font-bold text-[#5e2347]">{l.name}</h3>
            <p className="mt-2 text-sm leading-relaxed text-[#5e2347]/65">{l.address}</p>
            <a href="#" className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[#a23a78] hover:underline">
              Lihat di Maps <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

/* ---------------- CTA ---------------- */
function LightCTA() {
  return (
    <section id="donasi" className="mx-auto max-w-7xl px-6 pb-24">
      <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#a23a78] via-[#5e2347] to-[#3a1f30] p-12 text-center text-white shadow-2xl md:p-20">
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#f4c200]/20 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-[#df7224]/30 blur-3xl" />
        <div className="relative">
          <HandHeart className="mx-auto h-12 w-12 text-[#f4c200]" />
          <h2 className="mx-auto mt-5 max-w-2xl font-display text-3xl font-extrabold leading-tight md:text-5xl">
            Mulai dari Rp 10.000, jadi bagian dari cahaya mereka.
          </h2>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Button size="lg" className="rounded-full bg-[#df7224] px-8 text-white shadow-lg hover:bg-[#c66218]">
              Donasi Sekarang <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="rounded-full border-white/30 bg-white/10 text-white backdrop-blur hover:bg-white/20 hover:text-white">
              Jadi Relawan
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- FOOTER ---------------- */
function LightFooter() {
  return (
    <footer className="border-t border-[#efe3d6] bg-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <img src={logo} alt="RumaQuran" className="h-12 w-auto" />
            <div>
              <div className="font-display text-lg font-bold text-[#5e2347]">RumaQuran</div>
              <div className="text-[10px] uppercase tracking-widest text-[#c98a3a]">Create Musyrifah Take the Future</div>
            </div>
          </div>
          <p className="mt-5 text-sm leading-relaxed text-[#5e2347]/65">
            RumaQuran Washilaturrahmah Hidayatullah didirikan untuk membangun generasi Qur'ani yang berakhlak mulia.
          </p>
        </div>
        <div>
          <div className="font-display font-bold text-[#5e2347]">Halaman</div>
          <ul className="mt-4 space-y-2 text-sm text-[#5e2347]/70">
            <li><a href="#beranda" className="hover:text-[#a23a78]">Beranda</a></li>
            <li><a href="#tentang" className="hover:text-[#a23a78]">Tentang</a></li>
            <li><a href="#program" className="hover:text-[#a23a78]">Program</a></li>
            <li><a href="#transaksi" className="hover:text-[#a23a78]">Transaksi</a></li>
            <li><a href="#lokasi" className="hover:text-[#a23a78]">Lokasi</a></li>
          </ul>
        </div>
        <div>
          <div className="font-display font-bold text-[#5e2347]">Kontak</div>
          <div className="mt-4 space-y-3 text-sm text-[#5e2347]/70">
            <p className="flex gap-2"><MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#c98a3a]" /> Jl. Nakip 1 Gg Masjid No.75, Kota Baru, Bandar Lampung</p>
            <p className="flex items-center gap-2"><Phone className="h-4 w-4 text-[#c98a3a]" /> 0853-6682-2978</p>
            <p className="flex items-center gap-2"><Phone className="h-4 w-4 text-[#c98a3a]" /> 0851-1720-2092</p>
          </div>
        </div>
        <div>
          <div className="font-display font-bold text-[#5e2347]">Sosial Media</div>
          <div className="mt-4 flex flex-wrap gap-2">
            {[
              { i: Instagram, c: "#E1306C" },
              { i: Facebook, c: "#1877F2" },
              { i: Music2, c: "#000" },
              { i: Youtube, c: "#FF0000" },
            ].map((s, i) => (
              <a key={i} href="#" className="grid h-10 w-10 place-items-center rounded-full border border-[#efe3d6] bg-white text-[#5e2347] transition hover:scale-110" style={{ color: s.c }}>
                <s.i className="h-4 w-4" />
              </a>
            ))}
          </div>
          <div className="mt-5 rounded-2xl border border-[#efe3d6] bg-[#FBF7F2] p-4 text-xs text-[#5e2347]/65">
            <div className="font-semibold text-[#a23a78]">www.rumaquran.org</div>
            <p className="mt-1">Donasi & wakaf Anda kami salurkan dengan amanah.</p>
          </div>
        </div>
      </div>
      <div className="border-t border-[#efe3d6] py-5 text-center text-xs text-[#5e2347]/50">
        © 2026 RumaQuran Washilaturrahmah Hidayatullah.
      </div>
    </footer>
  );
}