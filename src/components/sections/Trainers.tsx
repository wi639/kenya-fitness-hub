import React from 'react';
import { motion } from 'framer-motion';
import { Star, Heart, MessageSquare } from 'lucide-react';
import { Card, CardContent } from '../ui/card';

const trainers = [
  {
    name: 'Kevin Omuse',
    role: 'Head of Performance',
    specialty: 'Marathon & Athletics',
    rating: 4.9,
    img: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/332babd7-3294-43b3-8743-a693a4e090a7/trainer-1-19f6c24a-1774850960427.webp',
  },
  {
    name: 'Wanjiru Kamau',
    role: 'Lead Yoga Instructor',
    specialty: 'Mindfulness & Mobility',
    rating: 5.0,
    img: 'https://images.unsplash.com/photo-1548690312-e3b507d17a4d?auto=format&fit=crop&q=80',
  },
  {
    name: 'Brian "The Hulk" Otieno',
    role: 'Strength Coach',
    specialty: 'Bodybuilding & Power',
    rating: 4.8,
    img: 'https://images.unsplash.com/photo-1567013127542-490d757e51fe?auto=format&fit=crop&q=80',
  },
];

export function Trainers() {
  return (
    <section id="trainers" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-sm font-black text-green-600 uppercase tracking-widest mb-2">The Pros</h2>
          <h3 className="text-4xl md:text-5xl font-black text-slate-900 uppercase">
            Meet Your <span className="text-red-600 italic">Commanders</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {trainers.map((trainer, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="group border-0 shadow-none hover:shadow-none bg-transparent">
                <div className="relative aspect-[4/5] rounded-3xl overflow-hidden mb-6">
                  <img
                    src={trainer.img}
                    alt={trainer.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                    <div className="flex gap-3">
                      <div className="bg-white/20 backdrop-blur-md p-2 rounded-full text-white hover:bg-red-600 transition-colors">
                        <Heart className="h-5 w-5" />
                      </div>
                      <div className="bg-white/20 backdrop-blur-md p-2 rounded-full text-white hover:bg-red-600 transition-colors">
                        <MessageSquare className="h-5 w-5" />
                      </div>
                    </div>
                    <div className="bg-white/90 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1">
                      <Star className="h-3 w-3 text-yellow-500 fill-yellow-500" />
                      <span className="text-xs font-black">{trainer.rating}</span>
                    </div>
                  </div>
                </div>
                <CardContent className="p-0">
                  <h4 className="text-2xl font-black text-slate-900 mb-1">{trainer.name}</h4>
                  <p className="text-red-600 font-bold text-sm uppercase mb-2">{trainer.role}</p>
                  <p className="text-slate-500 text-sm">Specializing in: {trainer.specialty}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}