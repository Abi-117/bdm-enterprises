import { motion } from "framer-motion";
import { CheckCircle2, MapPin, Target, Eye, Award } from "lucide-react";
import SectionTitle from "@/components/SectionTitle";

const About = () => (
  <>
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute -top-20 -right-20 h-80 w-80 rounded-full bg-primary/20 blur-3xl" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <div className="inline-flex px-3 py-1 rounded-full glass text-xs uppercase tracking-[0.3em] text-primary-glow mb-4">About BDM</div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-silver">Crafting Premium </span>
            <span className="text-gradient">Architectural Finishes</span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            BDM Enterprises is a trusted name in premium ACP & cladding solutions, supplying
            architects, builders and contractors with world-class materials sourced from
            leading manufacturers — 4MANN, ALUDECOR, ALSTONE and more.
          </p>
        </motion.div>
      </div>
    </section>

    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-6">
        {[
          { icon: Target, title: "Our Mission", desc: "To deliver world-class cladding solutions that empower architects to design without compromise — combining engineering precision with aesthetic excellence." },
          { icon: Eye, title: "Our Vision", desc: "To be India's most trusted partner for premium ACP, HPL, WPC and PVC cladding — known for quality, innovation and unwavering customer support." },
        ].map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="glass-strong rounded-2xl p-8 hover-lift"
          >
            <div className="h-14 w-14 rounded-xl bg-gradient-primary grid place-items-center mb-4 shadow-glow">
              <c.icon className="h-7 w-7 text-primary-foreground" />
            </div>
            <h3 className="text-2xl font-display font-bold mb-3 text-silver">{c.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{c.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>

    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionTitle eyebrow="Our Strength" title="Why Choose Us" subtitle="Premium materials, expert guidance, on-time delivery." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { t: "Authorised Dealer", d: "Direct supply from 4MANN, ALUDECOR, ALSTONE." },
            { t: "100+ Shades", d: "Largest range of metallic, solid, wooden, stone & sparkle finishes." },
            { t: "Quality Assured", d: "Every panel tested to ASTM & AAMA standards." },
            { t: "Pan-India Delivery", d: "Reliable logistics network with on-time dispatch." },
            { t: "Expert Consultation", d: "On-site shade matching and technical support." },
            { t: "Best Pricing", d: "Competitive rates without compromising quality." },
          ].map((f, i) => (
            <motion.div
              key={f.t}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass rounded-2xl p-6 hover-lift"
            >
              <CheckCircle2 className="h-7 w-7 text-primary-glow mb-3" />
              <h4 className="text-lg font-display font-semibold mb-2 text-silver">{f.t}</h4>
              <p className="text-sm text-muted-foreground">{f.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* <section className="py-20 bg-card/20 border-y border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionTitle eyebrow="Find Us" title="Office & Warehouse" />
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { t: "Office Location", d: "1st Floor,52 State Bank Colony 3rd Street, Abbusali St, Saligramam,Chennai,Tamil Nadu 600092" },
            // { t: "Warehouse Location", d: "BDM Enterprises Warehouse, India" },
          ].map((l, i) => (
            <motion.div
              key={l.t}
              initial={{ opacity: 0, x: i === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-strong rounded-2xl p-8 hover-lift"
            >
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-xl bg-gradient-primary grid place-items-center shrink-0 shadow-glow">
                  <MapPin className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-[0.25em] text-primary-glow mb-1">{l.t}</div>
                  <div className="text-lg font-display text-silver">{l.d}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section> */}
  </>
);

export default About;
