import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Award, Building2, Layers, Sparkles, Users } from "lucide-react";
import SectionTitle from "@/components/SectionTitle";
import { products } from "@/data/products";
import logo from "@/assets/bdm-logo.png";

const stats = [
  { icon: Award, value: "15+", label: "Years Experience" },
  { icon: Building2, value: "500+", label: "Projects Delivered" },
  { icon: Users, value: "300+", label: "Happy Clients" },
  { icon: Layers, value: "100+", label: "ACP Shades" },
];

const brands = ["4MANN", "ALUDECOR", "ALSTONE", "ALSTAR"];

const featured = ["acp-sheets", "hpl-sheets", "wpc-fluted", "pvc-fluted", "soffit-panels", "hardware"];

const Index = () => {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div
          className="absolute inset-0 opacity-30 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1920&q=80)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />

        <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-primary/30 blur-3xl animate-float" />
        <div className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-primary-glow/20 blur-3xl animate-float" style={{ animationDelay: "2s" }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-20 grid lg:grid-cols-12 gap-10 items-center w-full">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="lg:col-span-7"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
              <Sparkles className="h-3.5 w-3.5 text-primary-glow" />
              <span className="text-xs uppercase tracking-[0.3em] text-primary-glow">Premium Cladding Solutions</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] mb-6 font-serif">
              <span className="text-silver block">Transforming Spaces</span>
              <span className="text-gradient block">with Premium ACP &</span>
              <span className="text-silver block">Aluminium Cladding</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl mb-8 leading-relaxed">
              BDM Enterprises delivers world-class ACP, HPL, WPC and PVC cladding solutions
              from leading brands — engineered for architectural brilliance.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/products"
                className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-primary text-primary-foreground font-semibold shadow-glow hover:scale-105 transition-transform duration-300"
              >
                Explore Products
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-7 py-3.5 rounded-full glass-strong text-foreground font-semibold hover:bg-card/60 transition-colors"
              >
                Get a Quote
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="lg:col-span-5 hidden lg:flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary blur-3xl opacity-40 animate-glow-pulse rounded-full" />
              <img src={logo} alt="BDM" className="relative h-80 w-80 object-contain drop-shadow-[0_0_40px_hsla(212,95%,52%,0.6)] animate-float" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* STATS */}
      <section className="relative py-16 border-y border-border/50 bg-card/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <s.icon className="h-8 w-8 mx-auto mb-3 text-primary-glow" />
              <div className="text-4xl md:text-5xl font-display font-bold text-gradient mb-1">{s.value}</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="relative py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionTitle
            eyebrow="Our Range"
            title="Featured Products"
            subtitle="Architectural-grade cladding and finishing systems trusted by builders, architects and interior designers."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featured.map((slug, i) => {
              const p = products.find((x) => x.slug === slug)!;
              return (
                <motion.div
                  key={p.slug}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: i * 0.08, duration: 0.6 }}
                >
                  <Link
                    to={`/products/${p.slug}`}
                    className="group relative block overflow-hidden rounded-2xl glass hover-lift h-full"
                  >
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={p.image}
                        alt={p.name}
                        className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                    </div>
                    <div className="absolute bottom-0 inset-x-0 p-6">
                      <div className="text-xs uppercase tracking-[0.25em] text-primary-glow mb-1">{p.tagline}</div>
                      <h3 className="text-2xl font-display font-bold mb-2 text-silver">{p.name}</h3>
                      <div className="inline-flex items-center gap-1 text-sm text-foreground/90 group-hover:text-primary-glow transition-colors">
                        View details <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* APPLICATIONS */}
      <section className="relative py-24 bg-card/20 border-y border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionTitle eyebrow="Where We Shine" title="Applications Showcase" subtitle="From iconic facades to refined interiors." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { t: "Building Facades", img: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80" },
              { t: "Office Interiors", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80" },
              { t: "Residential", img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80" },
              { t: "Commercial", img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80" },
            ].map((a, i) => (
              <motion.div
                key={a.t}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative aspect-[3/4] overflow-hidden rounded-2xl"
              >
                <img src={a.img} alt={a.t} className="absolute inset-0 h-full w-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                <div className="absolute bottom-0 inset-x-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="text-lg font-display font-semibold text-silver">{a.t}</div>
                  <div className="h-0.5 w-10 bg-gradient-primary mt-2" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* BRANDS */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionTitle eyebrow="Trusted Partners" title="Our Brands" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {brands.map((b, i) => (
              <motion.div
                key={b}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass rounded-2xl p-8 text-center hover-lift"
              >
                <div className="text-2xl md:text-3xl font-display font-bold text-silver">{b}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl glass-strong p-10 md:p-16 text-center"
          >
            <div className="absolute inset-0 bg-gradient-primary opacity-10" />
            <div className="absolute -top-20 -right-20 h-60 w-60 bg-primary/40 blur-3xl rounded-full" />
            <h3 className="relative text-3xl md:text-5xl font-display font-bold mb-4">
              <span className="text-silver">Ready to build </span>
              <span className="text-gradient">something premium?</span>
            </h3>
            <p className="relative text-muted-foreground mb-8 max-w-xl mx-auto">
              Get a personalised quote within hours. Our team is ready to help with samples, specs and shade matching.
            </p>
            <Link
              to="/contact"
              className="relative inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-primary text-primary-foreground font-semibold shadow-glow hover:scale-105 transition-transform"
            >
              Get Quote <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Index;
