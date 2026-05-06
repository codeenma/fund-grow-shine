import { BookOpen, Menu } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const links = [
  { label: "Beranda", href: "#beranda" },
  { label: "Tentang", href: "#tentang" },
  { label: "Program", href: "#program" },
  { label: "Portofolio", href: "#portofolio" },
  { label: "Donasi", href: "#donasi" },
  { label: "Berita", href: "#kontak" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-6 pt-6">
        <nav className="flex items-center justify-between rounded-full border border-white/15 bg-white/10 px-4 py-2.5 backdrop-blur-xl">
          <a href="#beranda" className="flex items-center gap-2 pl-2">
            <span className="grid h-9 w-9 place-items-center rounded-full" style={{ background: "var(--gradient-warm)" }}>
              <BookOpen className="h-4 w-4 text-white" />
            </span>
            <span className="font-display text-lg font-bold text-white">Ruma<span className="text-gold">Quran</span></span>
          </a>
          <ul className="hidden items-center gap-1 md:flex">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="rounded-full px-4 py-2 text-sm font-medium text-white/90 transition hover:bg-white/15 hover:text-white">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-2">
            <Button className="hidden rounded-full bg-orange text-white shadow-[var(--shadow-glow)] hover:bg-orange/90 md:inline-flex" size="sm">
              Donasi Sekarang
            </Button>
            <button onClick={() => setOpen(!open)} className="grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white md:hidden" aria-label="Menu">
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </nav>
        {open && (
          <div className="mt-2 rounded-2xl border border-white/15 bg-plum-deep/95 p-4 backdrop-blur-xl md:hidden">
            <ul className="flex flex-col gap-1">
              {links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} onClick={() => setOpen(false)} className="block rounded-lg px-4 py-2.5 text-sm text-white/90 hover:bg-white/10">
                    {l.label}
                  </a>
                </li>
              ))}
              <li className="pt-2"><Button className="w-full rounded-full bg-orange text-white">Donasi Sekarang</Button></li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}