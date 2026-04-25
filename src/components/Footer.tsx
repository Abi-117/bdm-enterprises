import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import logo from "@/assets/bdm-logo.png";

const Footer = () => (
  <footer className="relative mt-24 border-t border-border/50 bg-card/30 backdrop-blur-xl">
    <div className="absolute inset-0 grid-pattern opacity-20 pointer-events-none" />
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16 grid md:grid-cols-4 gap-10">
      <div className="md:col-span-2">
        <div className="flex items-center gap-3 mb-4">
          <img src={logo} alt="BDM" className="h-12 w-12 object-contain" />
          <div>
            <div className="font-display text-xl text-silver font-bold">BDM Enterprises</div>
            <div className="text-[10px] tracking-[0.3em] text-primary-glow/80 uppercase">Premium Cladding</div>
          </div>
        </div>
        <p className="text-muted-foreground text-sm max-w-md leading-relaxed">
          Transforming spaces with premium ACP, HPL, WPC & PVC cladding solutions.
          Authorised dealers of 4MANN, ALUDECOR & ALSTONE composite panels.
        </p>
      </div>

      <div>
        <h4 className="font-display text-lg mb-4 text-foreground">Quick Links</h4>
        <ul className="space-y-2 text-sm text-muted-foreground">
          {["Home","About","Products","Projects","Tech Specs","Contact"].map((x,i)=>(
            <li key={x}>
              <Link to={["/", "/about","/products","/gallery","/specs","/contact"][i]} className="hover:text-primary-glow transition-colors">{x}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="font-display text-lg mb-4 text-foreground">Reach Us</h4>
        <ul className="space-y-3 text-sm text-muted-foreground">
          {/* <li className="flex gap-2"><Mail className="h-4 w-4 mt-0.5 text-primary-glow shrink-0" /><a href="mailto:bdmenterprise19@gmail.com" className="hover:text-primary-glow break-all">bdmenterprise19@gmail.com</a></li> */}
          <li className="flex gap-2"><Phone className="h-4 w-4 mt-0.5 text-primary-glow shrink-0" /><a href="tel:+919884828069" className="hover:text-primary-glow">+91 98848 28069</a></li>
          <li className="flex gap-2"><MapPin className="h-4 w-4 mt-0.5 text-primary-glow shrink-0" /><span>1st Floor,52 State Bank Colony 3rd Street, Abbusali St, Saligramam,Chennai,Tamil Nadu 600092</span></li>
          <li className="flex gap-2"><MessageCircle className="h-4 w-4 mt-0.5 text-primary-glow shrink-0" /><a href="https://wa.me/919884828069?text=Hi%20I%20need%20ACP%20Sheets%20Details" target="_blank" rel="noreferrer" className="hover:text-primary-glow">WhatsApp Chat</a></li>
        </ul>
      </div>
    </div>
    <div className="border-t border-border/50 py-6 text-center text-xs text-muted-foreground">
      © {new Date().getFullYear()} BDM Enterprises. All rights reserved.
    </div>
  </footer>
);

export default Footer;
