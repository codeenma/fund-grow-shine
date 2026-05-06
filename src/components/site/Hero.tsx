import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-children.jpg";

export function Hero() {
  return (
    <section id="beranda" className="relative min-h-screen overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={heroImg} alt="Anak-anak penerima manfaat program pendidikan" className="h-full w-full object-cover" width={1920} height={1280} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(120deg, rgba(67,7,54,0.92) 0%, rgba(73,40,59,0.78) 45%, rgba(118,26,87,0.35) 100%)" }} />
        <div className="absolute inset-0" style={{ background: "radial-gradient(circle at 80% 20%, rgba(244,194,0,0.18), transparent 50%)" }} />
      </div>

      {/* Decorative blobs */}
      <div className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full opacity-40 blur-3xl" style={{ background: "var(--gradient-warm)" }} />
      <div className="pointer-events-none absolute right-10 top-32 h-72 w-72 animate-float rounded-full opacity-30 blur-3xl" style={{ background: "var(--magenta)" }} />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 pb-20 pt-40">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-gold backdrop-blur">
            <Sparkles className="h-3.5 w-3.5" /> Crowdfunding Pendidikan
          </span>
          <h1 className="mt-6 text-5xl font-extrabold leading-[1.05] text-white md:text-7xl lg:text-8xl">
            Sebar <span className="italic text-gold">Cahaya</span><br />
            untuk Setiap <br />
            <span className="bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-warm)" }}>Generasi.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base text-white/80 md:text-lg">
            Bersama membangun ruang belajar, melengkapi fasilitas, dan mendampingi para pengajar di pelosok negeri. Setiap rupiah yang kamu titipkan menjadi cahaya di masa depan mereka.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button size="lg" className="rounded-full bg-orange px-7 text-white shadow-[var(--shadow-glow)] hover:bg-orange/90">
              Mulai Berdonasi <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="rounded-full border-white/30 bg-white/10 text-white backdrop-blur hover:bg-white/20 hover:text-white">
              Lihat Program
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-14 grid max-w-2xl grid-cols-3 gap-6 border-t border-white/15 pt-6">
            {[
              { v: "120+", l: "Sekolah Dibantu" },
              { v: "8.500", l: "Anak Penerima" },
              { v: "Rp 12 M", l: "Dana Tersalur" },
            ].map((s) => (
              <div key={s.l}>
                <div className="text-2xl font-bold text-gold md:text-4xl">{s.v}</div>
                <div className="mt-1 text-xs text-white/70 md:text-sm">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}