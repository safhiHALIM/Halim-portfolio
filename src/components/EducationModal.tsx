"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Code2, Database, Globe, Layers, Workflow, Zap, Shield, Target } from "lucide-react";

interface EducationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function EducationModal({ isOpen, onClose }: EducationModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
          >
            <div className="bg-gradient-to-br from-[#0a0a0a] via-[#0f0f1e] to-[#0a0a0a] border border-white/10 rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto overflow-x-hidden pointer-events-auto shadow-2xl relative">
              {/* Background gradient accent */}
              <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-blue-500/10 to-transparent pointer-events-none" />
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors z-50 cursor-pointer"
              >
                <X size={24} />
              </button>

              <div className="p-8 md:p-12 relative z-10">
                {/* Header */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-12"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-1 h-12 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
                    <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                      Professional Profile
                    </h2>
                  </div>
                  <p className="text-gray-300 leading-relaxed text-lg mb-6 font-light">
                    I am an experienced software developer with a strong passion for programming and problem-solving, specialized in Microsoft technologies. My core expertise includes <span className="text-blue-300 font-semibold">C#</span>, <span className="text-blue-300 font-semibold">C</span>, and <span className="text-blue-300 font-semibold">SQL Server</span>, with a solid foundation in building robust, maintainable applications.
                  </p>
                  <div className="mt-6 space-y-4 text-gray-400">
                    <div className="flex gap-3">
                      <Target size={20} className="text-blue-400 flex-shrink-0 mt-1" />
                      <p>
                        I have extensive experience in <span className="text-blue-300 font-semibold">object-oriented</span> and <span className="text-blue-300 font-semibold">event-driven programming</span>, as well as in the development of desktop and enterprise applications using C# and the .NET ecosystem.
                      </p>
                    </div>
                    <div className="flex gap-3">
                      <Zap size={20} className="text-purple-400 flex-shrink-0 mt-1" />
                      <p>
                        Hands-on experience in web development, working with <span className="text-purple-300 font-semibold">Node.js</span>, <span className="text-purple-300 font-semibold">Express.js</span>, and <span className="text-purple-300 font-semibold">MongoDB</span> to design scalable backend solutions and RESTful APIs.
                      </p>
                    </div>
                    <div className="flex gap-3">
                      <Shield size={20} className="text-green-400 flex-shrink-0 mt-1" />
                      <p>
                        Strong skills in software analysis and system design, applying industry-standard methodologies such as <span className="text-green-300 font-semibold">UML</span> and <span className="text-green-300 font-semibold">MERISE</span> to optimize complex systems.
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Technical Skills Grid */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <h3 className="text-3xl font-bold text-white mb-10 flex items-center gap-3">
                    <span className="w-1 h-10 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></span>
                    Technical Skills
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Programming Languages */}
                    <motion.div 
                      whileHover={{ scale: 1.02, translateY: -4 }}
                      className="bg-gradient-to-br from-blue-900/20 to-blue-900/5 rounded-xl p-6 border border-blue-500/30 hover:border-blue-500/50 transition-all cursor-pointer group"
                    >
                      <div className="flex items-center gap-3 mb-4 text-blue-400">
                        <div className="p-2 bg-blue-500/20 rounded-lg group-hover:bg-blue-500/30 transition-colors">
                          <Code2 size={24} />
                        </div>
                        <h4 className="font-bold text-lg">Programming Languages</h4>
                      </div>
                      <ul className="space-y-3 text-gray-300">
                        <li className="flex items-center gap-3"><span className="w-2 h-2 bg-blue-500 rounded-full"></span>C#</li>
                        <li className="flex items-center gap-3"><span className="w-2 h-2 bg-blue-500 rounded-full"></span>C</li>
                      </ul>
                    </motion.div>

                    {/* Microsoft & .NET */}
                    <motion.div 
                      whileHover={{ scale: 1.02, translateY: -4 }}
                      className="bg-gradient-to-br from-purple-900/20 to-purple-900/5 rounded-xl p-6 border border-purple-500/30 hover:border-purple-500/50 transition-all cursor-pointer group"
                    >
                      <div className="flex items-center gap-3 mb-4 text-purple-400">
                        <div className="p-2 bg-purple-500/20 rounded-lg group-hover:bg-purple-500/30 transition-colors">
                          <Layers size={24} />
                        </div>
                        <h4 className="font-bold text-lg">Microsoft & .NET</h4>
                      </div>
                      <ul className="space-y-2 text-gray-300 grid grid-cols-2 gap-3">
                        <li className="flex items-center gap-2"><span className="w-2 h-2 bg-purple-500 rounded-full"></span>.NET Framework</li>
                        <li className="flex items-center gap-2"><span className="w-2 h-2 bg-purple-500 rounded-full"></span>ADO.NET</li>
                        <li className="flex items-center gap-2"><span className="w-2 h-2 bg-purple-500 rounded-full"></span>ASP.NET</li>
                        <li className="flex items-center gap-2"><span className="w-2 h-2 bg-purple-500 rounded-full"></span>Entity Framework</li>
                        <li className="flex items-center gap-2"><span className="w-2 h-2 bg-purple-500 rounded-full"></span>Xamarin</li>
                      </ul>
                    </motion.div>

                    {/* Web & Backend */}
                    <motion.div 
                      whileHover={{ scale: 1.02, translateY: -4 }}
                      className="bg-gradient-to-br from-green-900/20 to-green-900/5 rounded-xl p-6 border border-green-500/30 hover:border-green-500/50 transition-all cursor-pointer group"
                    >
                      <div className="flex items-center gap-3 mb-4 text-green-400">
                        <div className="p-2 bg-green-500/20 rounded-lg group-hover:bg-green-500/30 transition-colors">
                          <Globe size={24} />
                        </div>
                        <h4 className="font-bold text-lg">Web & Backend</h4>
                      </div>
                      <ul className="space-y-3 text-gray-300">
                        <li className="flex items-center gap-3"><span className="w-2 h-2 bg-green-500 rounded-full"></span>Node.js</li>
                        <li className="flex items-center gap-3"><span className="w-2 h-2 bg-green-500 rounded-full"></span>Express.js</li>
                        <li className="flex items-center gap-3"><span className="w-2 h-2 bg-green-500 rounded-full"></span>RESTful APIs</li>
                      </ul>
                    </motion.div>

                    {/* Databases */}
                    <motion.div 
                      whileHover={{ scale: 1.02, translateY: -4 }}
                      className="bg-gradient-to-br from-yellow-900/20 to-yellow-900/5 rounded-xl p-6 border border-yellow-500/30 hover:border-yellow-500/50 transition-all cursor-pointer group"
                    >
                      <div className="flex items-center gap-3 mb-4 text-yellow-400">
                        <div className="p-2 bg-yellow-500/20 rounded-lg group-hover:bg-yellow-500/30 transition-colors">
                          <Database size={24} />
                        </div>
                        <h4 className="font-bold text-lg">Databases</h4>
                      </div>
                      <ul className="space-y-3 text-gray-300">
                        <li className="flex items-center gap-3"><span className="w-2 h-2 bg-yellow-500 rounded-full"></span>SQL Server</li>
                        <li className="flex items-center gap-3"><span className="w-2 h-2 bg-yellow-500 rounded-full"></span>MongoDB</li>
                      </ul>
                    </motion.div>

                    {/* Analysis & Design */}
                    <motion.div 
                      whileHover={{ scale: 1.02, translateY: -4 }}
                      className="bg-gradient-to-br from-red-900/20 to-red-900/5 rounded-xl p-6 border border-red-500/30 hover:border-red-500/50 transition-all cursor-pointer group md:col-span-2"
                    >
                      <div className="flex items-center gap-3 mb-4 text-red-400">
                        <div className="p-2 bg-red-500/20 rounded-lg group-hover:bg-red-500/30 transition-colors">
                          <Workflow size={24} />
                        </div>
                        <h4 className="font-bold text-lg">Analysis & Design</h4>
                      </div>
                      <ul className="space-y-2 text-gray-300 grid md:grid-cols-3 gap-3">
                        <li className="flex items-center gap-2"><span className="w-2 h-2 bg-red-500 rounded-full"></span>UML & MERISE</li>
                        <li className="flex items-center gap-2"><span className="w-2 h-2 bg-red-500 rounded-full"></span>OOD</li>
                        <li className="flex items-center gap-2"><span className="w-2 h-2 bg-red-500 rounded-full"></span>Event-Driven Arch.</li>
                      </ul>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}