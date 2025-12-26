"use client";

import { motion } from "framer-motion";
import { Send } from "lucide-react";
import AnimatedTitle from "@/components/AnimatedTitle";

export default function Contact() {
  return (
    <section id="contact" className="min-h-screen py-20 relative flex items-center justify-center overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="max-w-2xl mx-auto bg-black/50 backdrop-blur-md border border-white/10 rounded-2xl p-8 md:p-12 shadow-[0_0_50px_rgba(0,0,0,0.5)]"
        >
          <div className="text-center mb-10">
            <AnimatedTitle text="Let's Work Together" className="text-4xl font-bold mb-2 text-white" />
            <p className="text-gray-400 mt-4">Have a project in mind? I&apos;d love to hear from you.</p>
          </div>

          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Name</label>
                <input 
                  type="text" 
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 focus:bg-white/10 transition-all text-white"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Email</label>
                <input 
                  type="email" 
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 focus:bg-white/10 transition-all text-white"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">Message</label>
              <textarea 
                rows={4}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 focus:bg-white/10 transition-all text-white resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)" }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-4 rounded-lg flex items-center justify-center gap-2 hover:opacity-90 transition-all shadow-lg"
            >
              Send Message <Send size={18} />
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
