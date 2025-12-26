"use client";

import ProjectCard from "@/components/ProjectCard";
import { motion } from "framer-motion";
import AnimatedTitle from "@/components/AnimatedTitle";
import { useState } from "react";
import { Search } from "lucide-react";

const projects = [
  {
    title: "Brand Landing Page",
    description: "High-conversion landing page featuring modern CSS animations, responsive design, and engaging user interactions.",
    tags: ["React", "CSS", "Design"],
    image: "/project3.jpg",
    liveUrl: "https://safhiHALIM.github.io/brandLandingPage/"
  },
  {
    title: "Neo-Safi",
    description: "Personal digital space and portfolio core architecture, demonstrating modern frontend practices with advanced animations.",
    tags: ["Next.js", "React", "Three.js"],
    image: "/project1.jpg",
    liveUrl: "https://safhiHALIM.github.io/Neo-Safi/"
  },
  {
    title: "Personal Portfolio",
    description: "Modern responsive portfolio showcasing projects, experience, and technical expertise with smooth animations and interactive components.",
    tags: ["Next.js", "React", "Framer Motion"],
    image: "/project5.jpg",
    liveUrl: "https://safhiHALIM.github.io/portfolio/"
  },
  {
    title: "Demo 01",
    description: "Interactive web application demonstrating modern web development techniques and responsive design patterns.",
    tags: ["HTML", "CSS", "JavaScript"],
    image: "/project6.jpg",
    liveUrl: "https://safhihalim.github.io/demo01/"
  }
];

export default function Projects() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = projects.filter(project => 
    project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <section id="projects" className="min-h-screen py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/4 left-0 w-full h-1/2 bg-gradient-to-r from-blue-900/5 via-purple-900/5 to-transparent -skew-y-6 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <AnimatedTitle text="Selected Works" className="text-4xl md:text-6xl font-bold mb-4 text-white" />
          <p className="text-xl text-gray-400 max-w-2xl mt-4 mb-8">
            A collection of projects that demonstrate my expertise in frontend architecture, 3D web experiences, and full-stack development.
          </p>

          {/* Search Bar */}
          <div className="relative max-w-md">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-3 border border-white/10 rounded-xl leading-5 bg-white/5 text-gray-300 placeholder-gray-500 focus:outline-none focus:bg-white/10 focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 sm:text-sm transition-all"
              placeholder="Search projects by title, description, or tags..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
          
          {filteredProjects.length === 0 && (
            <div className="col-span-full text-center py-20">
              <p className="text-gray-400 text-lg">No projects found matching your search.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
