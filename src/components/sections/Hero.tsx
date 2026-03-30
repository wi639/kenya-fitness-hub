import React from 'react';
import { motion } from 'framer-motion';
import { Play, ArrowRight, TrendingUp } from 'lucide-react';
import { Button } from '../ui/button';

export function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/332babd7-3294-43b3-8743-a693a4e090a7/hero-bg-7ed2295c-1774850959920.webp"
          alt="Kenyan Fitness Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white mb-6">
            <span className="flex h-2 w-2 rounded-full bg-red-600 animate-pulse" />
            <span className="text-sm font-medium uppercase tracking-widest">Nairobi's Premier Fitness Hub</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-black text-white leading-[0.9] mb-8 uppercase italic">
            Awaken The <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-green-500">
              Lion Within
            </span>
          </h1>

          <p className="text-xl text-slate-300 mb-10 max-w-lg leading-relaxed">
            Elevate your fitness journey with KaziFit. World-class training, Kenyan spirit, and a community that pushes you beyond your limits.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="group rounded-full bg-red-600 hover:bg-red-700">
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" size="lg" className="rounded-full bg-white/5 backdrop-blur-sm border-white/20 text-white hover:bg-white/10">
              <Play className="mr-2 h-5 w-5 fill-current" />
              Watch Video
            </Button>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-8 border-t border-white/10 pt-8 max-w-xl">
            <div>
              <div className="text-3xl font-black text-white">500+</div>
              <div className="text-sm text-slate-400 font-bold uppercase tracking-tighter">Active Members</div>
            </div>
            <div>
              <div className="text-3xl font-black text-white">20+</div>
              <div className="text-sm text-slate-400 font-bold uppercase tracking-tighter">Pro Trainers</div>
            </div>
            <div>
              <div className="text-3xl font-black text-white">15+</div>
              <div className="text-sm text-slate-400 font-bold uppercase tracking-tighter">Daily Classes</div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Floating UI Elements */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="absolute bottom-10 right-10 hidden xl:flex flex-col gap-4"
      >
        <div className="bg-white/10 backdrop-blur-xl p-6 rounded-3xl border border-white/20 shadow-2xl flex items-center gap-4">
          <div className="h-12 w-12 rounded-full bg-green-500 flex items-center justify-center">
            <TrendingUp className="text-white" />
          </div>
          <div>
            <div className="text-white font-bold text-lg">+25% Stamina</div>
            <div className="text-white/60 text-sm">Nairobi Marathon Prep</div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}