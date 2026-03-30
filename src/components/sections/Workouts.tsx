import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle } from '../ui/card';
import { PlayCircle, Clock, Flame, ArrowUpRight } from 'lucide-react';

const programs = [
  {
    title: 'Safari Sculpt',
    desc: 'High-intensity interval training inspired by rhythmic Kenyan movement.',
    level: 'Advanced',
    duration: '45 mins',
    calories: '650',
    img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80',
    color: 'bg-red-600',
  },
  {
    title: 'Kilimanjaro Climb',
    desc: 'Strength and conditioning focused on building explosive lower body power.',
    level: 'Intermediate',
    duration: '60 mins',
    calories: '800',
    img: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&q=80',
    color: 'bg-green-600',
  },
  {
    title: 'Nairobi Flow',
    desc: 'Mobility and yoga session to reset after a long commute in traffic.',
    level: 'All Levels',
    duration: '30 mins',
    calories: '200',
    img: 'https://images.unsplash.com/photo-1518611012118-29a8d63ee0c2?auto=format&fit=crop&q=80',
    color: 'bg-yellow-500',
  },
  {
    title: 'Savannah Sprint',
    desc: 'Elite marathon-style endurance training for future champions.',
    level: 'Elite',
    duration: '90 mins',
    calories: '1200',
    img: 'https://images.unsplash.com/photo-1530143311094-34d807799e8f?auto=format&fit=crop&q=80',
    color: 'bg-slate-900',
  },
];

export function Workouts() {
  return (
    <section id="workouts" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-xl">
            <h2 className="text-sm font-black text-red-600 uppercase tracking-widest mb-2">Our Programs</h2>
            <h3 className="text-4xl md:text-5xl font-black text-slate-900 uppercase">
              Push Your <span className="italic">Limits</span>
            </h3>
          </div>
          <p className="text-slate-600 md:max-w-md">
            From HIIT to marathon prep, our diverse workout programs are designed to get you in the best shape of your life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
            >
              <Card className="overflow-hidden h-full border-0">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={program.img}
                    alt={program.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                  <div className={`absolute top-4 left-4 ${program.color} text-white text-[10px] font-black px-2 py-1 rounded uppercase tracking-tighter`}>
                    {program.level}
                  </div>
                  <button className="absolute bottom-4 right-4 bg-white p-2 rounded-full text-slate-900 shadow-xl opacity-0 group-hover:opacity-100 transition-opacity">
                    <PlayCircle className="h-6 w-6" />
                  </button>
                </div>
                <CardHeader className="p-6">
                  <div className="flex items-center gap-4 text-xs font-bold text-slate-400 mb-2">
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" /> {program.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <Flame className="h-3 w-3 text-red-600" /> {program.calories} Kcal
                    </span>
                  </div>
                  <CardTitle className="text-xl mb-2 flex items-center justify-between">
                    {program.title}
                    <ArrowUpRight className="h-5 w-5 text-slate-300 group-hover:text-red-600 transition-colors" />
                  </CardTitle>
                  <p className="text-sm text-slate-500 line-clamp-2">{program.desc}</p>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}