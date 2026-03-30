import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Zap, Target, TrendingUp, ChevronRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { cn } from '../../lib/utils';

export function Progress() {
  const stats = [
    { label: 'Workouts', value: '12', icon: Activity, color: 'text-red-600', bg: 'bg-red-50' },
    { label: 'Calories', value: '8.4k', icon: Zap, color: 'text-orange-600', bg: 'bg-orange-50' },
    { label: 'Goals Met', value: '85%', icon: Target, color: 'text-green-600', bg: 'bg-green-50' },
    { label: 'Streak', value: '5 Days', icon: TrendingUp, color: 'text-blue-600', bg: 'bg-blue-50' },
  ];

  return (
    <section id="progress" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-xl border border-slate-100">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1">
              <h2 className="text-sm font-black text-red-600 uppercase tracking-widest mb-2">Member Dashboard</h2>
              <h3 className="text-4xl font-black text-slate-900 uppercase mb-6 leading-tight">
                Track Your <br />
                <span className="italic">Ascent</span>
              </h3>
              <p className="text-slate-500 mb-8">
                Visualize your progress with our integrated tracking system. Sync your Garmin or Apple Watch to stay on top of your game.
              </p>
              <Button className="w-full justify-between rounded-full">
                Go to Full Dashboard
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>

            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {stats.map((stat, idx) => (
                <Card key={idx} className="border-0 bg-slate-50 shadow-none hover:shadow-lg transition-all">
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-black uppercase text-slate-400">{stat.label}</CardTitle>
                    <div className={cn('p-2 rounded-xl', stat.bg)}>
                      <stat.icon className={cn('h-5 w-5', stat.color)} />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="text-4xl font-black text-slate-900">{stat.value}</div>
                    <div className="mt-4 h-2 w-full bg-slate-200 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: '70%' }}
                        transition={{ duration: 1, delay: idx * 0.1 }}
                        className={cn('h-full', stat.color.replace('text', 'bg'))}
                      />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}