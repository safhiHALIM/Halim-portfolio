"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const logos = [
  "/logos/Untitled-1-01.svg",
  "/logos/Untitled-1-02.svg",
  "/logos/Untitled-1-03.svg",
  "/logos/Untitled-1-04.svg",
  "/logos/Untitled-1-05.svg",
  "/logos/Untitled-1-06.svg",
];

// Duplicate logos to ensure seamless loop
const marqueeLogos = [...logos, ...logos, ...logos];

export default function TrustedBy() {
  return (
    <section className="py-20 relative overflow-hidden bg-black/10 backdrop-blur-sm border-y border-white/5">
      <div className="container mx-auto px-4 mb-10 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-gray-400 text-sm uppercase tracking-widest font-medium"
        >
          Trusted by Industry Leaders
        </motion.p>
      </div>

      <div className="relative flex overflow-hidden">
        {/* Gradient Masks */}
        <div className="absolute top-0 left-0 h-full w-20 md:w-40 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10" />
        <div className="absolute top-0 right-0 h-full w-20 md:w-40 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10" />

        <motion.div
          className="flex gap-16 md:gap-24 min-w-max px-4"
          animate={{ x: "-50%" }}
          transition={{
            duration: 50,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {[...marqueeLogos, ...marqueeLogos].map((logo, index) => (
            <div
              key={index}
              className="relative w-32 h-16 md:w-40 md:h-20 flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0 group"
            >
              <Image
                src={logo}
                alt={`Client Logo ${index}`}
                fill
                className="object-contain filter drop-shadow-[0_0_15px_rgba(255,255,255,0.1)] group-hover:drop-shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all duration-300"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
