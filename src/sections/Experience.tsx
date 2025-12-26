"use client";

import { motion } from "framer-motion";
import AnimatedTitle from "@/components/AnimatedTitle";
import { useState } from "react";
import EducationModal from "@/components/EducationModal";
import { GraduationCap } from "lucide-react";

const experiences = [
  {
    company: "Freelance",
    role: "Full Stack Web Developer",
    period: "Jan 2023 - Present",
    description: "Developed web applications using Node.js, Python, Express, and MongoDB. Specialized in scalable backend solutions."
  },
  {
    company: "NATC FMCG",
    role: "GED & Document Management Specialist",
    period: "May 2023 - Aug 2023",
    description: "Expertise in Document Management Systems (DMS) and digital archiving solutions."
  },
  {
    company: "Freelance",
    role: "NFT & Blockchain Developer",
    period: "Jan 2022 - Jan 2023",
    description: "Specialized in NFT ecosystem development and blockchain technologies."
  },
  {
    company: "AXA Assurance Maroc",
    role: "Software Developer",
    period: "Jan 2020 - Mar 2020",
    description: "Built desktop application for managing client contacts using C# and Entity Framework. Implemented efficient database solutions with SQL Server."
  },
  {
    company: "ECA-Assurances",
    role: "Desktop Developer",
    period: "Jul 2022",
    description: "Developed web solutions using JavaScript and modern web technologies."
  }
];

const clients = ["NATC FMCG", "AXA Assurance", "ECA-Assurances", "Freelance Clients"];

const education = [
  {
    school: "Specialized Institute of Applied Technology (ISTA) - Cité de l'Air",
    degree: "Specialized Technician in IT Development",
    period: "Sept 2017 - Oct 2020",
    description: "Focused on software development, programming, and system analysis."
  }
];

const selfTaught = {
  period: "Jan 2021 - Present",
  skills: [
    { name: "MERN Stack", description: "Full-stack development with MongoDB, Express, React, & Node.js." },
    { name: "Selenium", description: "Web browser automation and testing." },
    { name: "Scripting", description: "Task automation with various scripting languages." },
    { name: "Blockchain", description: "Studying decentralized technologies." },
    { name: "Prompt Engineering", description: "Crafting effective prompts for AI models." }
  ]
};

export default function Experience() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="min-h-screen py-16 md:py-24 relative overflow-hidden">
      <EducationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <AnimatedTitle text="Experience & Clients" className="text-4xl md:text-6xl font-bold text-white" />
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Experience Timeline */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-blue-400 flex items-center gap-2">
              <span className="w-2 h-8 bg-blue-500 rounded-full inline-block"></span>
              Career History
            </h3>
            <div className="space-y-12 border-l-2 border-white/10 pl-8 ml-4">
              {experiences.map((exp, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="relative group"
                >
                  <div className="absolute -left-[41px] top-0 w-5 h-5 bg-black border-2 border-blue-500 rounded-full group-hover:scale-125 transition-transform duration-300 shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
                  <span className="text-sm text-gray-400 font-mono bg-white/5 px-2 py-1 rounded">{exp.period}</span>
                  <h4 className="text-xl font-bold mt-2 group-hover:text-blue-300 transition-colors">{exp.role}</h4>
                  <p className="text-blue-300 mb-2 font-medium">{exp.company}</p>
                  <p className="text-gray-400 leading-relaxed">{exp.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Clients, Education, Self-Taught */}
          <div>
            {/* Trusted By */}
            <h3 className="text-2xl font-bold mb-8 text-purple-400 flex items-center gap-2">
              <span className="w-2 h-8 bg-purple-500 rounded-full inline-block"></span>
              Trusted By
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
              {clients.map((client, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                  className="h-24 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center cursor-pointer transition-all hover:border-purple-500/50 hover:shadow-[0_0_15px_rgba(168,85,247,0.2)]"
                >
                  <span className="font-bold text-xl text-gray-300 group-hover:text-white">{client}</span>
                </motion.div>
              ))}
            </div>

            {/* Education */}
            <h3 className="text-2xl font-bold mb-8 text-green-400 flex items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <span className="w-2 h-8 bg-green-500 rounded-full inline-block"></span>
                Education
              </div>
              <button
                onClick={() => setIsModalOpen(true)}
                className="px-4 py-2 bg-green-500/10 hover:bg-green-500/20 border border-green-500/30 rounded-full text-sm text-green-400 flex items-center gap-2 transition-all hover:scale-105"
              >
                <GraduationCap size={16} />
                View Full Profile
              </button>
            </h3>
            <div className="space-y-12 border-l-2 border-white/10 pl-8 ml-4">
              {education.map((edu, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="relative group"
                >
                  <div className="absolute -left-[41px] top-0 w-5 h-5 bg-black border-2 border-green-500 rounded-full group-hover:scale-125 transition-transform duration-300 shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
                  <span className="text-sm text-gray-400 font-mono bg-white/5 px-2 py-1 rounded">{edu.period}</span>
                  <h4 className="text-xl font-bold mt-2 group-hover:text-green-300 transition-colors">{edu.degree}</h4>
                  <p className="text-green-300 mb-2 font-medium">{edu.school}</p>
                  <p className="text-gray-400 leading-relaxed">{edu.description}</p>
                </motion.div>
              ))}
            </div>
            
            {/* Self-Taught Skills */}
            <h3 className="text-2xl font-bold mt-16 mb-8 text-yellow-400 flex items-center gap-2">
                <span className="w-2 h-8 bg-yellow-500 rounded-full inline-block"></span>
                Self-Taught Skills
            </h3>
            <div className="space-y-12 border-l-2 border-white/10 pl-8 ml-4">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="relative group"
                >
                    <div className="absolute -left-[41px] top-0 w-5 h-5 bg-black border-2 border-yellow-500 rounded-full group-hover:scale-125 transition-transform duration-300 shadow-[0_0_10px_rgba(251,191,36,0.5)]" />
                    <span className="text-sm text-gray-400 font-mono bg-white/5 px-2 py-1 rounded">{selfTaught.period}</span>
                    <div className="mt-4 space-y-4">
                        {selfTaught.skills.map((skill, index) => (
                            <div key={index}>
                                <h4 className="text-lg font-bold group-hover:text-yellow-300 transition-colors">{skill.name}</h4>
                                <p className="text-gray-400 leading-relaxed">{skill.description}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
