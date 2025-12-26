"use client";

import { motion } from "framer-motion";
import HeroScene from "@/components/canvas/HeroScene";
import { ArrowRight, Mail } from "lucide-react";
import AnimatedTitle from "@/components/AnimatedTitle";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden py-20">
      <HeroScene />
      
      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#000000_100%)] opacity-40 pointer-events-none" />

      <div className="container mx-auto px-4 z-10 text-center">
        <div className="mb-6">
          <AnimatedTitle 
            text="Halim Safhi" 
            as="h1"
            className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-gray-400"
          />
          <AnimatedTitle 
            text="Full-Stack Developer" 
            className="text-3xl sm:text-5xl md:text-7xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 mt-2"
          />
        </div>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="text-lg md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto font-light tracking-wide px-4"
        >
          Full-Stack Developer | C# .NET | Node.js | React
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
          className="flex flex-col md:flex-row gap-4 justify-center items-center mb-12"
        >
          <a href="#projects" className="px-8 py-4 bg-white text-black rounded-full font-semibold flex items-center gap-2 hover:scale-105 transition-transform cursor-pointer shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]">
            View Projects <ArrowRight size={20} />
          </a>
          <a href="#about" className="px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/20 text-white rounded-full font-semibold flex items-center gap-2 hover:bg-white/10 transition-all cursor-pointer hover:border-white/40">
            About Me
          </a>
          <a href="#contact" className="px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/20 text-white rounded-full font-semibold flex items-center gap-2 hover:bg-white/10 transition-all cursor-pointer hover:border-white/40">
            Contact Me <Mail size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
