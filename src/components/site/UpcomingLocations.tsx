import { MapPin } from "lucide-react";

const upcoming = [
  {
    no: 1,
    name: "Pahoman",
    city: "Bandar Lampung",
    map: "https://www.google.com/maps/embed/v1/place?key=&q=Pahoman,Bandar+Lampung",
    img: "https://maps.googleapis.com/maps/api/staticmap?center=Pahoman,Bandar+Lampung&zoom=14&size=400x400&maptype=roadmap",
  },
  {
    no: 2,
    name: "Way Halim",
    city: "Bandar Lampung",
    img: "https://maps.googleapis.com/maps/api/staticmap?center=Way+Halim,Bandar+Lampung&zoom=14&size=400x400&maptype=roadmap",
  },
  {
    no: 3,
    name: "Seputaran ITB",
    city: "Bandung",
    img: "https://maps.googleapis.com/maps/api/staticmap?center=ITB,Bandung&zoom=15&size=400x400&maptype=roadmap",
  },
];

export function UpcomingLocations() {
  return (
    <section className="bg-background pb-24 pt-4 md:pb-32">
      <div className="mx-auto max-w-6xl px-6">
        <p className="mx-auto max-w-3xl text-center text-foreground/75 md:text-lg">
          Rencana penambahan lokasi baru, RumaQuran Washilaturrahmah Hidayatullah akan kembali mendirikan lokasi baru di daerah strategis kota Bandar Lampung dan kota Bandung:
        </p>

        <div className="mt-14 grid grid-cols-1 justify-items-center gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {upcoming.map((u) => (
            <div key={u.no} className="flex flex-col items-center">
              <div className="relative">
                <div className="grid h-56 w-56 place-items-center overflow-hidden rounded-full border-[6px] border-primary bg-muted shadow-[var(--shadow-soft)] md:h-64 md:w-64">
                  <div
                    className="h-full w-full bg-cover bg-center"
                    style={{
                      backgroundImage: `url('https://tile.openstreetmap.org/12/3275/2099.png'), linear-gradient(135deg, hsl(0 0% 95%), hsl(0 0% 88%))`,
                      backgroundBlendMode: "multiply",
                    }}
                    aria-hidden
                  >
                    <div className="grid h-full w-full place-items-center">
                      <MapPin className="h-14 w-14 text-primary drop-shadow" fill="currentColor" />
                    </div>
                  </div>
                </div>
                <span className="absolute -top-2 left-4 grid h-10 w-10 place-items-center rounded-full bg-orange text-base font-extrabold text-white shadow-lg ring-4 ring-background">
                  {u.no}
                </span>
              </div>
              <div className="mt-5 rounded-xl bg-gradient-to-b from-[var(--gold)] to-[var(--orange)] px-7 py-2.5 shadow-md">
                <span className="font-display text-sm font-extrabold uppercase tracking-widest text-plum-deep">
                  {u.name}
                </span>
              </div>
              <div className="mt-2 text-xs uppercase tracking-wider text-foreground/60">{u.city}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}