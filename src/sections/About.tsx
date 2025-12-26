"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import AnimatedTitle from "@/components/AnimatedTitle";
import StyledText from "@/components/ui/StyledText";
import { professionalProfile, technicalSkills, socialLinks, aboutMe } from "@/app/data";

export default function About() {
  const containerRef = useRef(null);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth > 1024);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [0.8, 1]);

  return (
    <section ref={containerRef} id="about" className="min-h-screen py-16 md:py-24 relative overflow-hidden flex flex-col justify-center bg-black/50">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_50%,_rgba(59,130,246,0.1),transparent_70%)]" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          style={{ opacity, scale }}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* Left Column: Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                About Me
              </motion.div>
              
              <AnimatedTitle 
                text="Crafting Digital Excellence" 
                className="text-4xl md:text-6xl font-bold text-white leading-tight"
              />
            </div>

            <div className="space-y-6 text-gray-400 leading-relaxed">
              {professionalProfile.map((paragraph, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-lg md:text-xl"
                >
                  <StyledText text={paragraph} />
                </motion.p>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-wrap gap-3"
            >
              {technicalSkills.slice(0, 8).map((skill, i) => (
                <span 
                  key={i}
                  className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-white/70 text-sm font-medium hover:bg-white/10 hover:border-blue-500/50 transition-all duration-300"
                >
                  {skill}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right Column: Advanced Avatar Display */}
          <div className="relative group lg:order-last order-first mb-12 lg:mb-0">
            <motion.div
              style={{ y: isLargeScreen ? y : 0 }}
              className="relative aspect-[4/5] w-full max-w-[320px] sm:max-w-[400px] lg:max-w-[550px] mx-auto"
            >
              {/* Decorative Rings */}
              <div className="absolute inset-0 rounded-[2rem] border-2 border-blue-500/20 animate-[spin_20s_linear_infinite]" />
              <div className="absolute inset-4 rounded-[1.5rem] border border-purple-500/20 animate-[spin_15s_linear_infinite_reverse]" />
              
              {/* Main Container */}
              <div className="absolute inset-8 rounded-3xl bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-2xl border border-white/10 overflow-hidden group-hover:border-blue-500/50 transition-all duration-700 shadow-2xl flex flex-col">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10 pointer-events-none" />
                
                {/* Avatar Image Container */}
                <div className="flex-1 relative overflow-hidden">
                  <motion.img
                    src={aboutMe.avatar}
                    alt="Avatar"
                    className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-700 ease-out"
                  />
                </div>

                {/* Social Bar - Integrated inside the frame */}
                <div className="h-24 bg-black/40 backdrop-blur-md border-t border-white/10 flex items-center justify-center gap-6 z-20 relative px-4">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <motion.a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.2, y: -5 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-3 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-blue-600 hover:border-blue-500 transition-all duration-300"
                        aria-label={social.label}
                      >
                        <Icon size={22} />
                      </motion.a>
                    );
                  })}
                </div>
              </div>

              {/* Glowing Accents */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl group-hover:bg-blue-500/40 transition-all duration-700 animate-subtle-pulse-blue" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl group-hover:bg-purple-500/40 transition-all duration-700 animate-subtle-pulse-purple" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
