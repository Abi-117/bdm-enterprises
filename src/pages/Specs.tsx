import { motion } from "framer-motion";
import SectionTitle from "@/components/SectionTitle";
import { acpSpecs, aludecorSpecs, alstarSpecs, alstoneSpecs } from "@/data/specs";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "@/pages/Specs.css";

const SpecTable = ({
  title,
  headers,
  rows,
}: {
  title: string;
  headers: string[];
  rows: (string | number)[][];
}) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    className="glass-strong rounded-2xl p-6 h-full"
  >
    <h4 className="text-xl font-display font-bold mb-4 text-silver">
      {title}
    </h4>

    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-border/60">
            {headers.map((h) => (
              <th
                key={h}
                className="text-left py-3 px-3 text-primary-glow uppercase text-xs tracking-wider font-semibold whitespace-nowrap"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {rows.map((r, i) => (
            <tr
              key={i}
              className="border-b border-border/30 hover:bg-card/30 transition-colors"
            >
              {r.map((c, j) => (
                <td key={j} className="py-3 px-3 text-foreground/90">
                  {c}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </motion.div>
);

const Specs = () => (
  <>
    {/* HERO */}
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center">
        <div className="inline-flex px-3 py-1 rounded-full glass text-xs uppercase tracking-[0.3em] text-primary-glow mb-4">
          Engineering Data
        </div>

        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          <span className="text-silver">Technical </span>
          <span className="text-gradient">Specifications</span>
        </h1>

        <p className="text-muted-foreground max-w-2xl mx-auto">
          Complete tested specifications for every grade we supply — sourced
          directly from manufacturer technical data sheets.
        </p>
      </div>
    </section>

    {/* CONTENT */}
    <section className="pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">

        {/* 4MANN */}
        <SectionTitle eyebrow="4MANN" title="ACP Grade Specs" center={false} />

        <Swiper 
          modules={[Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{ delay: 6000 }}
          pagination={{ clickable: true }}
          loop
          className="custom-swiper"
        >
          <SwiperSlide>
            <SpecTable
              title="4MANN — Product Specifications"
              headers={acpSpecs.headers}
              rows={acpSpecs.rows}
            />
          </SwiperSlide>
        </Swiper>

        {/* ALUDECOR */}
        <SectionTitle eyebrow="ALUDECOR" title="Panel Specs" center={false} />

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{ delay: 6000 }}
          pagination={{ clickable: true }}
          loop
        >
          <SwiperSlide>
            <SpecTable
              title="ALUDECOR — AL45 / AL43 / AL33"
              headers={aludecorSpecs.headers}
              rows={aludecorSpecs.rows}
            />
          </SwiperSlide>
        </Swiper>

        {/* ALSTAR */}
        <SectionTitle
          eyebrow="ALSTAR 3MM"
          title="Composite Panel Tests"
          center={false}
        />

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{ delay: 6000 }}
          pagination={{ clickable: true }}
          loop
        >
          <SwiperSlide>
            <SpecTable
              title="Physical Tests"
              headers={alstarSpecs.physical.headers}
              rows={alstarSpecs.physical.rows}
            />
          </SwiperSlide>

          <SwiperSlide>
            <SpecTable
              title="Mechanical Tests"
              headers={alstarSpecs.mechanical.headers}
              rows={alstarSpecs.mechanical.rows}
            />
          </SwiperSlide>

          <SwiperSlide>
            <SpecTable
              title="Aluminium Skin Properties"
              headers={alstarSpecs.skin.headers}
              rows={alstarSpecs.skin.rows}
            />
          </SwiperSlide>

          <SwiperSlide>
            <SpecTable
              title="Coating Properties"
              headers={alstarSpecs.coating.headers}
              rows={alstarSpecs.coating.rows}
            />
          </SwiperSlide>
        </Swiper>

        {/* ALSTONE */}
        <SectionTitle
          eyebrow="ALSTONE 4MM"
          title="Composite Panel Tests"
          center={false}
        />

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{ delay: 6000 }}
          pagination={{ clickable: true }}
          loop
        >
          <SwiperSlide>
            <SpecTable
              title="Physical Tests"
              headers={alstoneSpecs.physical.headers}
              rows={alstoneSpecs.physical.rows}
            />
          </SwiperSlide>

          <SwiperSlide>
            <SpecTable
              title="Mechanical Tests"
              headers={alstoneSpecs.mechanical.headers}
              rows={alstoneSpecs.mechanical.rows}
            />
          </SwiperSlide>

          <SwiperSlide>
            <SpecTable
              title="Aluminium Skin Properties"
              headers={alstoneSpecs.skin.headers}
              rows={alstoneSpecs.skin.rows}
            />
          </SwiperSlide>

          <SwiperSlide>
            <SpecTable
              title="Coating Properties"
              headers={alstoneSpecs.coating.headers}
              rows={alstoneSpecs.coating.rows}
            />
          </SwiperSlide>
        </Swiper>

      </div>
    </section>
  </>
);

export default Specs;