import { createFileRoute } from "@tanstack/react-router";
import "@fontsource/plus-jakarta-sans/400.css";
import "@fontsource/plus-jakarta-sans/700.css";
import "@fontsource/plus-jakarta-sans/800.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { ProfileVideo } from "@/components/site/ProfileVideo";
import { Programs } from "@/components/site/Programs";
import { Portfolio } from "@/components/site/Portfolio";
import { Marquee } from "@/components/site/Marquee";
import { CTA } from "@/components/site/CTA";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "RumaQuran — Create Musyrifah Take the Future" },
      { name: "description", content: "RumaQuran Washilaturrahmah Hidayatullah (RQWH) — crowdfunding pendidikan & fasilitas untuk membangun generasi Qur'ani." },
    ],
  }),
});

function Index() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <ProfileVideo />
      <Marquee />
      <Programs />
      <Portfolio />
      <CTA />
      <Footer />
    </main>
  );
}
