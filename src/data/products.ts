import acp from "@/assets/ACP.png";
import hpl from "@/assets/HPL.png";
import pvc from "@/assets/PVC.png";
import wpc from "@/assets/WPC.png";
import soffit from "@/assets/SOFFIT.png";
import hardware from "@/assets/hardware.jpg";


export type Product = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  applications: string[];
  features: string[];
  image: string;
};

export const products: Product[] = [
  {
    slug: "acp-sheets",
    name: "ACP Sheets",
    tagline: "Aluminium Composite Panels",
    description:
      "Premium ACP sheets from 4MANN, ALUDECOR & ALSTONE — engineered for durability, flatness and a flawless architectural finish across grades Platinum, Pearl & Ruby.",
    applications: ["Exterior Cladding", "Building Facades", "Signage", "Column Cover", "Canopies"],
    features: ["3MM, 4MM & 6MM thickness", "PVDF / HDPE coating", "Fire retardant variants", "100+ shades available"],
    image: acp,
  },
  {
    slug: "hpl-sheets",
    name: "HPL Sheets",
    tagline: "High Pressure Laminate",
    description:
      "Weather-resistant HPL panels for exterior cladding, gates and sliding doors — designed to withstand UV, moisture and impact while delivering a luxurious aesthetic.",
    applications: ["Exterior Cladding", "HPL Gate", "HPL Sliding Door"],
    features: ["UV resistant", "Scratch & impact proof", "Easy to clean", "Wide colour range"],
    image: hpl,
  },
  {
    slug: "pvc-fluted",
    name: "PVC Fluted Panels",
    tagline: "Decorative Wall Panels",
    description:
      "Lightweight PVC fluted panels that bring warmth and texture to interior walls — perfect for office receptions, living rooms and TV background features.",
    applications: ["Office Reception", "Living Room Wall Decor", "TV Background Wall"],
    features: ["Waterproof", "Termite proof", "Easy DIY install", "Wood-like finish"],
    image: pvc,
  },
  {
    slug: "wpc-fluted",
    name: "WPC Fluted Panels",
    tagline: "Wood Plastic Composite",
    description:
      "Durable WPC fluted panels combining the warmth of wood with the resilience of polymer composite — ideal for premium interiors and statement walls.",
    applications: ["Interior Wall", "Office Reception", "Living Room Wall Decor", "TV Units"],
    features: ["Eco-friendly composite", "Moisture resistant", "Premium finish", "Easy to maintain"],
    image: wpc,
  },
  {
    slug: "soffit-panels",
    name: "Soffit Panels",
    tagline: "False Ceiling Solutions",
    description:
      "Architectural soffit panels for elegant false ceiling installations — combining acoustic comfort with a clean modern aesthetic.",
    applications: ["False Ceiling"],
    features: ["Lightweight", "Quick install", "Acoustic friendly", "Modern finish"],
    image: soffit,
  },
  {
    slug: "hardware",
    name: "Hardware Items",
    tagline: "Installation Essentials",
    description:
      "A complete range of installation hardware — from silicone and aluminium channels to screws, L-clamps and PVC wall plugs for a perfect, lasting finish.",
    applications: ["Silicone", "Aluminium Channels", "Masking Tape", "Screws", "L Clamp", "PVC Wall Plug"],
    features: ["Premium grade", "Long lasting", "Trusted brands", "Bulk available"],
    image: hardware,
  },
];
