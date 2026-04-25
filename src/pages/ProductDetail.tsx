import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, CheckCircle2, MessageCircle } from "lucide-react";
import { products } from "@/data/products";
import { acpSpecs, aludecorSpecs, alstarSpecs, alstoneSpecs } from "@/data/specs";
import siliconeImg from "@/assets/hardware/silicone1.png";
import aluminiumChannelsImg from "@/assets/hardware/aluminium.png";
import maskingTapeImg from "@/assets/hardware/masking.png";
import screwsImg from "@/assets/hardware/srews.png";
import lClampImg from "@/assets/hardware/l-clamp.png";
import pvcWallPlugImg from "@/assets/hardware/pvc.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "@/pages/Specs.css";

const hardwareItems = [
  { name: "Silicone", desc: "Acetic sealant — White, Transparent & Black variants", img: siliconeImg },
  { name: "Aluminium Channels", desc: "Premium-grade structural channels for cladding frames", img: aluminiumChannelsImg },
  { name: "Masking Tape", desc: "Strong adhesion, no-residue painter's tape", img: maskingTapeImg },
  { name: "Screws", desc: "Self-drilling fasteners for ACP & panel installation", img: screwsImg },
  { name: "L Clamp", desc: "Galvanised L-angle brackets for secure mounting", img: lClampImg },
  { name: "PVC Wall Plug", desc: "Heavy-duty wall anchors for screws & fixtures", img: pvcWallPlugImg },
];

const SpecTable = ({ title, headers, rows }: { title: string; headers: string[]; rows: (string | number)[][] }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="glass-strong rounded-2xl p-6 overflow-hidden"
  >
    <h4 className="text-xl font-display font-bold mb-4 text-silver">{title}</h4>
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-border/60">
            {headers.map((h) => (
              <th key={h} className="text-left py-3 px-3 text-primary-glow uppercase text-xs tracking-wider font-semibold whitespace-nowrap">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} className="border-b border-border/30 hover:bg-card/30 transition-colors">
              {r.map((c, j) => (
                <td key={j} className="py-3 px-3 text-foreground/90">{c}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </motion.div>
);

const ProductDetail = () => {
  const { slug } = useParams();
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-32 text-center">
        <h1 className="text-3xl font-display mb-4">Product not found</h1>
        <Link to="/products" className="text-primary-glow underline">Back to Products</Link>
      </div>
    );
  }

  const isAcp = product.slug === "acp-sheets";
  const isHardware = product.slug === "hardware";

  return (
    <>
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute -top-20 -right-20 h-80 w-80 rounded-full bg-primary/20 blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <Link to="/products" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary-glow mb-8">
            <ArrowLeft className="h-4 w-4" /> Back to Products
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="text-xs uppercase tracking-[0.3em] text-primary-glow mb-3">{product.tagline}</div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="text-silver">{product.name.split(" ")[0]} </span>
                <span className="text-gradient">{product.name.split(" ").slice(1).join(" ")}</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">{product.description}</p>
              <div className="flex flex-wrap gap-4">
                <a
                  href={`https://wa.me/919884828069?text=Hi%20I%20need%20${encodeURIComponent(product.name)}%20Details`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-primary text-primary-foreground font-semibold shadow-glow hover:scale-105 transition-transform"
                >
                  <MessageCircle className="h-4 w-4" /> Enquire on WhatsApp
                </a>
                <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass-strong font-semibold hover:bg-card/60">
                  Get Quote <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-primary blur-3xl opacity-20 rounded-full" />
              <img src={product.image} alt={product.name} className="relative w-full aspect-[4/3] object-cover rounded-3xl shadow-elegant" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass-strong rounded-2xl p-8">
            <h3 className="text-2xl font-display font-bold mb-5 text-silver">Applications</h3>
            <ul className="space-y-3">
              {product.applications.map((a) => (
                <li key={a} className="flex items-center gap-3 text-foreground/90">
                  <CheckCircle2 className="h-5 w-5 text-primary-glow shrink-0" /> {a}
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass-strong rounded-2xl p-8">
            <h3 className="text-2xl font-display font-bold mb-5 text-silver">Key Features</h3>
            <ul className="space-y-3">
              {product.features.map((f) => (
                <li key={f} className="flex items-center gap-3 text-foreground/90">
                  <CheckCircle2 className="h-5 w-5 text-primary-glow shrink-0" /> {f}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {isHardware && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-10">
              <div className="inline-flex px-3 py-1 rounded-full glass text-xs uppercase tracking-[0.3em] text-primary-glow mb-3">Catalogue</div>
              <h2 className="text-4xl md:text-5xl font-bold">
                <span className="text-silver">Other Hardware </span>
                <span className="text-gradient">Items</span>
              </h2>
              <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                Premium installation essentials — sealants, channels, fasteners and accessories from trusted brands.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {hardwareItems.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  className="group glass-strong rounded-2xl overflow-hidden hover-lift"
                >
                  <div className="aspect-square bg-white p-6 overflow-hidden">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="h-full w-full object-contain group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5 text-center">
                    <h3 className="text-lg font-display font-bold text-silver mb-1">{item.name}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {isAcp && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
            <div className="text-center mb-10">
              <div className="inline-flex px-3 py-1 rounded-full glass text-xs uppercase tracking-[0.3em] text-primary-glow mb-3">Technical Data</div>
              <h2 className="text-4xl md:text-5xl font-bold">
                <span className="text-silver">Full ACP </span>
                <span className="text-gradient">Specifications</span>
              </h2>
            </div>

            <SpecTable title="4MANN — Product Specifications" headers={acpSpecs.headers} rows={acpSpecs.rows} />

            <div className="grid md:grid-cols-2 gap-6">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass-strong rounded-2xl p-6">
                <h4 className="text-xl font-display font-bold mb-4 text-silver">Available Colours</h4>
                <ul className="space-y-2 text-sm text-foreground/90">
                  <li><strong className="text-primary-glow">Platinum:</strong> Metallic, Solid, Wooden</li>
                  <li><strong className="text-primary-glow">Pearl:</strong> Metallic, Solid, Wooden, Stone, Metallic Flair, Sand, Sparkle, Crystal</li>
                  <li><strong className="text-primary-glow">Ruby:</strong> Metallic, Solid, Wooden, Stone, Metallic Flair, Sand, Sparkle, Crystal</li>
                </ul>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass-strong rounded-2xl p-6">
                <h4 className="text-xl font-display font-bold mb-4 text-silver">Standard Sizes & Tolerance</h4>
                <ul className="space-y-2 text-sm text-foreground/90">
                  <li><strong className="text-primary-glow">Thickness:</strong> 3MM, 4MM, 6MM</li>
                  <li><strong className="text-primary-glow">Sizes:</strong> 1220×2440, 1220×3050, 1220×3660 mm</li>
                  <li><strong className="text-primary-glow">Tolerance:</strong> Width ±2MM | Length ±4MM | Thickness ±0.2MM</li>
                </ul>
              </motion.div>
            </div>

            {/* <SpecTable title="ALUDECOR — Product Specifications" headers={aludecorSpecs.headers} rows={aludecorSpecs.rows} />
            <SpecTable title="ALSTAR 3MM — Physical Tests" headers={alstarSpecs.physical.headers} rows={alstarSpecs.physical.rows} />
            <SpecTable title="ALSTAR 3MM — Mechanical Tests" headers={alstarSpecs.mechanical.headers} rows={alstarSpecs.mechanical.rows} />
            <SpecTable title="ALSTONE 4MM — Physical Tests" headers={alstoneSpecs.physical.headers} rows={alstoneSpecs.physical.rows} />
            <SpecTable title="ALSTONE 4MM — Coating Properties" headers={alstoneSpecs.coating.headers} rows={alstoneSpecs.coating.rows} /> */}
<Swiper
  modules={[Autoplay]}
  slidesPerView={1}
  autoplay={{
    delay: 3000,
    disableOnInteraction: false,
  }}
  speed={800}
  loop
>
  <SwiperSlide>
    <SpecTable
      title="4MANN — Product Specifications"
      headers={acpSpecs.headers}
      rows={acpSpecs.rows}
    />
  </SwiperSlide>

  <SwiperSlide>
    <SpecTable
      title="ALUDECOR — Product Specifications"
      headers={aludecorSpecs.headers}
      rows={aludecorSpecs.rows}
    />
  </SwiperSlide>

  <SwiperSlide>
    <SpecTable
      title="ALSTAR 3MM — Physical Tests"
      headers={alstarSpecs.physical.headers}
      rows={alstarSpecs.physical.rows}
    />
  </SwiperSlide>

  <SwiperSlide>
    <SpecTable
      title="ALSTAR 3MM — Mechanical Tests"
      headers={alstarSpecs.mechanical.headers}
      rows={alstarSpecs.mechanical.rows}
    />
  </SwiperSlide>

  <SwiperSlide>
    <SpecTable
      title="ALSTONE 4MM — Physical Tests"
      headers={alstoneSpecs.physical.headers}
      rows={alstoneSpecs.physical.rows}
    />
  </SwiperSlide>

  <SwiperSlide>
    <SpecTable
      title="ALSTONE 4MM — Coating Properties"
      headers={alstoneSpecs.coating.headers}
      rows={alstoneSpecs.coating.rows}
    />
  </SwiperSlide>
</Swiper>
            <div className="text-center pt-4">
              <Link to="/specs" className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass-strong hover-lift">
                View All Technical Specs <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default ProductDetail;
