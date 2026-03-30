import React from 'react';
import { motion } from 'framer-motion';
import { Utensils, Zap, Heart, Leaf } from 'lucide-react';
import { Card, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';

const recipes = [
  {
    title: 'Post-Workout Tilapia',
    desc: 'Lean protein powerhouse with grilled tilapia and steamed kienyeji greens.',
    cals: '450',
    protein: '45g',
    img: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/332babd7-3294-43b3-8743-a693a4e090a7/recipe-1-aaac5cd0-1774850953432.webp',
  },
  {
    title: 'Warrior Ugali Bowl',
    desc: 'Whole grain brown ugali served with lean beef and indigenous sukuma wiki.',
    cals: '620',
    protein: '35g',
    img: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80',
  },
  {
    title: 'Kenyan Nutri-Smoothie',
    desc: 'Avocado, honey, and local peanut butter blend for maximum recovery.',
    cals: '380',
    protein: '12g',
    img: 'https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?auto=format&fit=crop&q=80',
  },
];

export function Nutrition() {
  return (
    <section id="nutrition" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-black text-green-600 uppercase tracking-widest mb-2">Fuel Your Performance</h2>
            <h3 className="text-4xl md:text-5xl font-black text-slate-900 uppercase mb-6 leading-tight">
              Eat Like a <br />
              <span className="text-red-600 italic">Champion</span>
            </h3>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              Fitness is 30% training and 70% nutrition. Our experts have curated recipes that blend traditional Kenyan flavors with modern macro-nutritional science.
            </p>
            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: Zap, title: 'Energy Boost', desc: 'Complex carbs for endurance' },
                { icon: Heart, title: 'Heart Healthy', desc: 'Omega-rich local ingredients' },
                { icon: Leaf, title: 'Indigenous Greens', desc: 'Vitamins & minerals' },
                { icon: Utensils, title: 'Macro Tracking', desc: 'Precise protein ratios' },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="bg-green-50 p-2 rounded-xl h-fit">
                    <item.icon className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <div className="font-black text-slate-900 text-sm uppercase">{item.title}</div>
                    <div className="text-xs text-slate-500">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
            <Button className="mt-10 rounded-full" size="lg">Get Nutrition Plan</Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-full bg-slate-100 absolute inset-0 -z-10 animate-pulse" />
            <img
              src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/332babd7-3294-43b3-8743-a693a4e090a7/recipe-1-aaac5cd0-1774850953432.webp"
              alt="Healthy Platter"
              className="w-full h-full object-cover rounded-[4rem] shadow-2xl rotate-3"
            />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {recipes.map((recipe, idx) => (
            <Card key={idx} className="group overflow-hidden border-0 bg-slate-50">
              <div className="h-48 overflow-hidden relative">
                <img
                  src={recipe.img}
                  alt={recipe.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-black">
                  {recipe.cals} CALS • {recipe.protein} PROTEIN
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl mb-2">{recipe.title}</CardTitle>
                <p className="text-sm text-slate-500">{recipe.desc}</p>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}