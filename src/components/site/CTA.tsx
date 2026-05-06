import { Button } from "@/components/ui/button";
import { ArrowRight, HandHeart } from "lucide-react";

export function CTA() {
  return (
    <section id="donasi" className="relative overflow-hidden py-24 md:py-32">
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
      <div className="absolute -right-20 -top-20 h-96 w-96 rounded-full opacity-30 blur-3xl" style={{ background: "var(--gold)" }} />
      <div className="absolute -bottom-32 -left-20 h-96 w-96 rounded-full opacity-30 blur-3xl" style={{ background: "var(--orange)" }} />
      <div className="relative mx-auto max-w-4xl px-6 text-center text-white">
        <HandHeart className="mx-auto h-12 w-12 text-gold" />
        <h2 className="mt-6 text-4xl font-extrabold leading-tight md:text-6xl">
          Kebaikanmu hari ini, <br />
          <span className="bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-warm)" }}>cahaya mereka esok hari.</span>
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-white/80 md:text-lg">
          Mulai dari Rp 10.000 kamu sudah bisa menjadi bagian dari perjalanan ini.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button size="lg" className="rounded-full bg-orange px-8 text-white shadow-[var(--shadow-glow)] hover:bg-orange/90">
            Donasi Sekarang <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button size="lg" variant="outline" className="rounded-full border-white/40 bg-white/10 text-white hover:bg-white/20 hover:text-white">
            Jadi Relawan
          </Button>
        </div>
      </div>
    </section>
  );
}