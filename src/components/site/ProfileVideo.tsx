import { Play, Quote } from "lucide-react";
import { useState } from "react";

export function ProfileVideo() {
  const [playing, setPlaying] = useState(false);
  return (
    <section id="tentang" className="relative overflow-hidden bg-background py-24 md:py-32">
      {/* Decorative */}
      <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full opacity-10 blur-3xl" style={{ background: "var(--magenta)" }} />
      <div className="pointer-events-none absolute -left-32 bottom-0 h-80 w-80 rounded-full opacity-10 blur-3xl" style={{ background: "var(--orange)" }} />

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16">
        {/* Text side */}
        <div className="order-2 lg:order-1">
          <span className="inline-flex items-center gap-2 rounded-full bg-magenta/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-magenta">
            <Quote className="h-3.5 w-3.5" /> Profil Yayasan
          </span>
          <h2 className="mt-5 text-4xl font-bold leading-tight text-plum-deep md:text-5xl lg:text-6xl">
            Membangun generasi <span className="text-magenta">Qur'ani</span> di tengah zaman.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
            <strong className="text-foreground">RumaQuran Washilaturrahmah Hidayatullah (RQWH)</strong> didirikan dalam rangka membangun generasi Qur'ani ditengah suasana keprihatinan atas berbagai kerusakan moral dan akhlak serta berbagai penyimpangan yang terjadi pada generasi muda saat ini.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-5">
            {[
              { t: "Transparan", d: "Laporan donasi diaudit & dipublikasikan setiap bulan." },
              { t: "Tepat Sasaran", d: "Survei lapangan langsung sebelum penyaluran bantuan." },
              { t: "Berkelanjutan", d: "Pendampingan 3-5 tahun bukan sekadar sekali bantuan." },
              { t: "Kolaboratif", d: "Bekerja bersama 240+ relawan & pengajar lokal." },
            ].map((f) => (
              <div key={f.t} className="rounded-2xl border border-border bg-card p-5">
                <div className="mb-2 h-1 w-8 rounded-full" style={{ background: "var(--gradient-warm)" }} />
                <h3 className="font-display text-lg font-bold text-plum-deep">{f.t}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{f.d}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Video side */}
        <div className="order-1 lg:order-2">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] shadow-[var(--shadow-soft)] md:aspect-[4/4]">
            {playing ? (
              <iframe
                className="h-full w-full"
                src="https://www.youtube.com/embed/aqz-KE-bpKQ?autoplay=1"
                title="Profil Yayasan"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            ) : (
              <>
                <video
                  className="h-full w-full object-cover"
                  src="https://cdn.coverr.co/videos/coverr-children-running-in-school-corridor-7042/1080p.mp4"
                  poster=""
                  autoPlay
                  muted
                  loop
                  playsInline
                />
                <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(67,7,54,0.1) 0%, rgba(67,7,54,0.6) 100%)" }} />
                <button
                  onClick={() => setPlaying(true)}
                  className="group absolute inset-0 grid place-items-center"
                  aria-label="Putar video profil"
                >
                  <span className="grid h-20 w-20 place-items-center rounded-full bg-white/95 shadow-2xl transition group-hover:scale-110 md:h-24 md:w-24" style={{ boxShadow: "0 0 0 12px rgba(255,255,255,0.15)" }}>
                    <Play className="ml-1 h-8 w-8 fill-magenta text-magenta" />
                  </span>
                </button>
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="text-xs font-semibold uppercase tracking-widest text-gold">Video Profil</div>
                  <div className="mt-1 font-display text-xl font-bold">Perjalanan Kami</div>
                </div>
              </>
            )}
          </div>

          {/* Floating badge */}
          <div className="relative -mt-8 ml-6 inline-flex items-center gap-3 rounded-2xl bg-plum-deep px-5 py-3 text-white shadow-xl">
            <div className="grid h-10 w-10 place-items-center rounded-full" style={{ background: "var(--gradient-warm)" }}>
              <Play className="h-4 w-4 fill-white text-white" />
            </div>
            <div>
              <div className="text-xs text-white/70">Tonton sekarang</div>
              <div className="text-sm font-bold">Kisah Lapangan 2025</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}