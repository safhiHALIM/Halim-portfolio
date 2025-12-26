"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedTitle from "@/components/AnimatedTitle";
import { 
  Code2, 
  Database, 
  Smartphone, 
  Box, 
  Layers, 
  Cpu, 
  Globe, 
  Palette, 
  Terminal, 
  Workflow,
  Braces,
  Server,
  Layout
} from "lucide-react";

type Category = "All" | "Frontend" | "Backend" | "Desktop" | "Databases" | "Design";

interface Skill {
  name: string;
  category: Category;
  icon: React.ReactNode;
}

const skills: Skill[] = [
  { name: "React", category: "Frontend", icon: <Code2 size={24} /> },
  { name: "JavaScript", category: "Frontend", icon: <Braces size={24} /> },
  { name: "HTML/CSS", category: "Frontend", icon: <Palette size={24} /> },
  { name: "Node.js", category: "Backend", icon: <Server size={24} /> },
  { name: "Express", category: "Backend", icon: <Terminal size={24} /> },
  { name: "Python", category: "Backend", icon: <Cpu size={24} /> },
  { name: "C#", category: "Backend", icon: <Code2 size={24} /> },
  { name: "ASP.NET", category: "Backend", icon: <Globe size={24} /> },
  { name: "C#.NET Desktop", category: "Desktop", icon: <Smartphone size={24} /> },
  { name: "Xamarin", category: "Desktop", icon: <Box size={24} /> },
  { name: "ADO.NET", category: "Desktop", icon: <Layers size={24} /> },
  { name: "Entity Framework", category: "Desktop", icon: <Workflow size={24} /> },
  { name: "SQL Server", category: "Databases", icon: <Database size={24} /> },
  { name: "MongoDB", category: "Databases", icon: <Database size={24} /> },
  { name: "UML", category: "Design", icon: <Layout size={24} /> },
  { name: "MERISE", category: "Design", icon: <Workflow size={24} /> },
];

const categories: Category[] = ["All", "Frontend", "Backend", "Desktop", "Databases", "Design"];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const displaySkills = activeCategory === "All" ? skills : skills.filter(s => s.category === activeCategory);

  return (
    <section className="min-h-screen py-20 bg-black/50 relative overflow-hidden flex items-center">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-900/5 to-black pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <AnimatedTitle text="Tech Matrix" className="text-4xl md:text-6xl font-bold text-white" />
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                activeCategory === category
                  ? "bg-white text-black border-white shadow-[0_0_15px_rgba(255,255,255,0.3)]"
                  : "bg-transparent text-gray-400 border-white/10 hover:border-white/30 hover:text-white hover:bg-white/5"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div 
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-5xl mx-auto"
        >
          <AnimatePresence mode="popLayout">
            {displaySkills.map((skill) => (
              <motion.div
                layout
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                className="group relative bg-white/5 border border-white/10 rounded-lg p-4 flex flex-col items-center justify-center gap-3 hover:bg-white/10 transition-all cursor-pointer overflow-hidden backdrop-blur-sm hover:border-blue-500/30"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <span className="text-gray-400 group-hover:text-blue-400 group-hover:scale-110 transition-all duration-300 relative z-10">
                  {skill.icon}
                </span>
                <span className="text-sm font-medium text-gray-400 group-hover:text-white relative z-10">
                  {skill.name}
                </span>
                
                {/* Glow Effect */}
                <div className="absolute -inset-px bg-gradient-to-r from-blue-500/50 to-purple-600/50 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
