import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, MessageCircle, Send } from "lucide-react";
import { toast } from "@/components/ui/sonner";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.message) {
      toast.error("Please fill your name and message");
      return;
    }
    const text = `Hi BDM Enterprises,%0A%0AName: ${encodeURIComponent(form.name)}%0AEmail: ${encodeURIComponent(form.email)}%0APhone: ${encodeURIComponent(form.phone)}%0A%0A${encodeURIComponent(form.message)}`;
    toast.success("Redirecting to WhatsApp...");
    setTimeout(() => {
      window.open(`https://wa.me/919884828069?text=${text}`, "_blank");
    }, 600);
  };

  return (
    <>
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute -top-20 -right-20 h-80 w-80 rounded-full bg-primary/20 blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex px-3 py-1 rounded-full glass text-xs uppercase tracking-[0.3em] text-primary-glow mb-4">Get in Touch</div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="text-silver">Let's Build </span>
            <span className="text-gradient">Together</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">Send us your requirement and we'll get back within hours — or chat instantly on WhatsApp.</p>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-5 gap-6">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:col-span-2 space-y-4">
            {[
              // { icon: Mail, label: "Email", value: "bdmenterprise19@gmail.com", href: "mailto:bdmenterprise19@gmail.com" },
              { icon: Phone, label: "Call Us", value: "+91 98848 28069", href: "tel:+919884828069" },
              { icon: MessageCircle, label: "WhatsApp", value: "Chat with us instantly", href: "https://wa.me/919884828069?text=Hi%20I%20need%20ACP%20Sheets%20Details" },
              { icon: MapPin, label: "Office Location", value: "1st Floor,52 State Bank Colony 3rd Street, Abbusali St, Saligramam,Chennai,Tamil Nadu 600092" },
              // { icon: MapPin, label: "Warehouse Location", value: "BDM Enterprises Warehouse, India" },
            ].map((c) => {
              const inner = (
                <div className="flex items-start gap-4">
                  <div className="h-11 w-11 rounded-xl bg-gradient-primary grid place-items-center shrink-0 shadow-glow">
                    <c.icon className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-[0.25em] text-primary-glow mb-0.5">{c.label}</div>
                    <div className="text-foreground/90 break-all">{c.value}</div>
                  </div>
                </div>
              );
              return c.href ? (
                <a key={c.label} href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="block glass-strong rounded-2xl p-5 hover-lift">
                  {inner}
                </a>
              ) : (
                <div key={c.label} className="glass-strong rounded-2xl p-5">{inner}</div>
              );
            })}
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="lg:col-span-3 glass-strong rounded-2xl p-8 space-y-5"
          >
            <h3 className="text-2xl font-display font-bold text-silver mb-2">Send Enquiry</h3>
            <p className="text-sm text-muted-foreground mb-4">Submitting will open WhatsApp with your message pre-filled.</p>

            <div className="grid sm:grid-cols-2 gap-4">
              <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your Name" className="w-full bg-background/40 border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary-glow transition-colors" />
              <input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="Phone" className="w-full bg-background/40 border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary-glow transition-colors" />
            </div>
            <input value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} type="email" placeholder="Email" className="w-full bg-background/40 border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary-glow transition-colors" />
            <textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Tell us about your project requirement..." rows={6} className="w-full bg-background/40 border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary-glow transition-colors resize-none" />

            <button type="submit" className="w-full inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-gradient-primary text-primary-foreground font-semibold shadow-glow hover:scale-[1.02] transition-transform">
              <Send className="h-4 w-4" /> Send via WhatsApp
            </button>
          </motion.form>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-10">
          <div className="glass-strong rounded-2xl overflow-hidden h-96 relative">
            <iframe
              title="Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d189482.20939756487!2d80.04386065343976!3d13.047473316843668!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ea4f7d3361%3A0x6e61a70b6863d433!2sChennai%2C%20Tamil%20Nadu!5e1!3m2!1sen!2sin!4v1777102835125!5m2!1sen!2sin"
              className="w-full h-full opacity-90"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
