"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface ProjectProps {
  title: string;
  description: string;
  tags: string[];
  image: string;
  liveUrl?: string;
}

export default function ProjectCard({ title, description, tags, image, liveUrl }: ProjectProps) {
  const handleCardClick = () => {
    if (liveUrl) {
      window.open(liveUrl, "_blank");
    }
  };

  return (
    <motion.div
      onClick={handleCardClick}
      className="relative aspect-square w-full rounded-xl bg-gradient-to-br from-white/10 to-white/5 border-2 border-white/20 overflow-hidden cursor-pointer group shadow-2xl shadow-white/10 flex flex-col"
    >
      {/* Image Section - Takes remaining space */}
      <div className="relative flex-1 overflow-hidden bg-black/50">
        <div className="w-full h-full overflow-hidden relative">
          {liveUrl ? (
            <iframe 
              src={liveUrl} 
              className="w-[200%] h-[200%] border-0 transform scale-50 origin-top-left pointer-events-none"
              title={title}
              loading="lazy"
            />
          ) : (
            <div 
              className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
              style={{ backgroundImage: `url(${image})` }}
            >
               <div className="w-full h-full flex items-center justify-center bg-black/30">
                 <span className="text-4xl">🖥️</span>
               </div>
            </div>
          )}
        </div>

        {/* Action Icon */}
        <div className="absolute top-4 right-4 w-12 h-12 bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/20 group-hover:bg-white group-hover:text-black transition-all duration-300">
          <ArrowUpRight size={24} />
        </div>
      </div>
      
      {/* Footer Section - Fixed height or content based */}
      <div className="relative z-10 bg-[#0a0a0a] border-t border-white/10 p-6 flex flex-col justify-between">
        <div>
          <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">{title}</h3>
          <p className="text-gray-400 text-sm line-clamp-2 mb-4">{description}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {tags.map(tag => (
            <span key={tag} className="text-xs px-2 py-1 bg-white/5 border border-white/10 rounded-full text-blue-300">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
