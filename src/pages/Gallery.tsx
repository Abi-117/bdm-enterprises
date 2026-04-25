import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import SectionTitle from "@/components/SectionTitle";
import interior from "@/assets/interier.jpg";


type Item = { src: string; title: string; cat: "Exterior" | "Interior" | "Office" | "Home" };

const items: Item[] = [
  { src: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&q=80", title: "ACP Facade Tower", cat: "Exterior" },
  { src: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&q=80", title: "Commercial Cladding", cat: "Exterior" },
  { src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80", title: "Modern Office", cat: "Office" },
  { src: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1200&q=80", title: "Reception Wall", cat: "Office" },
  { src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80", title: "Living Room WPC", cat: "Home" },
  { src: "https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=1200&q=80", title: "TV Wall PVC", cat: "Interior" },
  { src: interior, title: "Soffit Ceiling", cat: "Interior" },
  { src: "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=1200&q=80", title: "HPL Exterior", cat: "Exterior" },
  { src: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&q=80", title: "Premium Villa", cat: "Home" },
];

const filters = ["All", "Exterior", "Interior", "Office", "Home"] as const;

const Gallery = () => {
  const [active, setActive] = useState<(typeof filters)[number]>("All");
  const [lightbox, setLightbox] = useState<Item | null>(null);
  const filtered = active === "All" ? items : items.filter((i) => i.cat === active);

  return (
    <>
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex px-3 py-1 rounded-full glass text-xs uppercase tracking-[0.3em] text-primary-glow mb-4">Portfolio</div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="text-silver">Projects & </span>
            <span className="text-gradient">Gallery</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">A curated showcase of facades, interiors and architectural finishes delivered by BDM Enterprises.</p>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  active === f ? "bg-gradient-primary text-primary-foreground shadow-glow" : "glass text-foreground/80 hover:text-primary-glow"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <AnimatePresence>
              {filtered.map((item) => (
                <motion.div
                  key={item.src}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  onClick={() => setLightbox(item)}
                  className="group relative aspect-[4/3] cursor-pointer overflow-hidden rounded-2xl glass"
                >
                  <img src={item.src} alt={item.title} className="absolute inset-0 h-full w-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent opacity-80" />
                  <div className="absolute bottom-0 inset-x-0 p-5">
                    <div className="text-xs uppercase tracking-[0.25em] text-primary-glow mb-1">{item.cat}</div>
                    <div className="text-lg font-display font-semibold text-silver">{item.title}</div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            className="fixed inset-0 z-50 bg-background/90 backdrop-blur-xl grid place-items-center p-4"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setLightbox(null)}
                className="absolute -top-12 right-0 h-10 w-10 rounded-full glass-strong grid place-items-center hover:bg-card/60"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>
              <img src={lightbox.src} alt={lightbox.title} className="w-full rounded-2xl shadow-elegant" />
              <div className="mt-4 text-center">
                <div className="text-xs uppercase tracking-[0.25em] text-primary-glow">{lightbox.cat}</div>
                <div className="text-2xl font-display text-silver">{lightbox.title}</div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Gallery;
