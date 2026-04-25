import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, FileText } from "lucide-react";
import SectionTitle from "@/components/SectionTitle";
import { products } from "@/data/products";

const Products = () => (
  <>
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <div className="inline-flex px-3 py-1 rounded-full glass text-xs uppercase tracking-[0.3em] text-primary-glow mb-4">Our Range</div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="text-silver">Premium </span>
            <span className="text-gradient">Products</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our complete range of cladding panels, decorative wall solutions and installation hardware.
          </p>
        </motion.div>
      </div>
    </section>

    <section className="pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p, i) => (
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
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img src={p.image} alt={p.name} className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                </div>
                <div className="p-6">
                  <div className="text-xs uppercase tracking-[0.25em] text-primary-glow mb-1">{p.tagline}</div>
                  <h3 className="text-2xl font-display font-bold mb-2 text-silver">{p.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{p.description}</p>
                  <div className="inline-flex items-center gap-1 text-sm font-semibold text-primary-glow group-hover:gap-2 transition-all">
                    View Details <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link to="/specs" className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass-strong hover-lift">
            <FileText className="h-4 w-4 text-primary-glow" />
            View Full Technical Specifications
          </Link>
        </div>
      </div>
    </section>
  </>
);

export default Products;
