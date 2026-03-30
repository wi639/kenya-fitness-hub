import React, { useState } from 'react';
import { Clock, Users } from 'lucide-react';
import { Button } from '../ui/button';

const schedule = {
  Mon: [
    { time: '06:00 AM', class: 'Savannah Sprint', trainer: 'Kevin', capacity: '12/20' },
    { time: '09:00 AM', class: 'Yoga Flow', trainer: 'Wanjiru', capacity: '15/15' },
    { time: '05:30 PM', class: 'Power Lifting', trainer: 'Brian', capacity: '8/10' },
    { time: '07:00 PM', class: 'Safari Sculpt', trainer: 'Kevin', capacity: '18/20' },
  ],
  Tue: [
    { time: '06:30 AM', class: 'Kilimanjaro Climb', trainer: 'Brian', capacity: '10/12' },
    { time: '10:00 AM', class: 'Core Blast', trainer: 'Wanjiru', capacity: '20/20' },
    { time: '06:00 PM', class: 'Nairobi Flow', trainer: 'Wanjiru', capacity: '12/15' },
  ],
  Wed: [
    { time: '06:00 AM', class: 'Savannah Sprint', trainer: 'Kevin', capacity: '12/20' },
    { time: '05:30 PM', class: 'HIIT Extreme', trainer: 'Brian', capacity: '15/20' },
  ],
};

export function Schedule() {
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const [activeDay, setActiveDay] = useState('Mon');

  return (
    <section id="schedule" className="py-24 bg-slate-900 text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-red-600/5 -skew-x-12 transform translate-x-1/2" />
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-sm font-black text-red-600 uppercase tracking-widest mb-2">Class Schedule</h2>
            <h3 className="text-4xl md:text-5xl font-black uppercase">
              Plan Your <span className="text-green-500 italic">Grind</span>
            </h3>
          </div>
          <Button variant="secondary" className="rounded-full">Download PDF Schedule</Button>
        </div>

        <div className="flex flex-wrap gap-2 mb-12">
          {days.map((day) => (
            <button
              key={day}
              onClick={() => setActiveDay(day)}
              className={`px-8 py-4 rounded-2xl font-black text-sm uppercase transition-all ${
                activeDay === day 
                ? 'bg-red-600 text-white scale-110 shadow-xl shadow-red-600/20' 
                : 'bg-white/5 text-slate-400 hover:bg-white/10'
              }`}
            >
              {day}
            </button>
          ))}
        </div>

        <div className="grid gap-4">
          {(schedule[activeDay as keyof typeof schedule] || schedule['Mon']).map((item, idx) => (
            <div 
              key={idx}
              className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:bg-white/10 transition-colors"
            >
              <div className="flex items-center gap-6">
                <div className="bg-red-600 p-4 rounded-2xl">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-black">{item.time}</div>
                  <div className="text-slate-400 font-bold uppercase tracking-tighter text-xs">Start Time</div>
                </div>
              </div>

              <div className="flex-1">
                <div className="text-xl font-black uppercase tracking-tight">{item.class}</div>
                <div className="text-slate-400 text-sm">Lead by {item.trainer}</div>
              </div>

              <div className="flex items-center gap-8">
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-green-500" />
                  <span className="font-bold">{item.capacity} Spots</span>
                </div>
                <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 hover:text-white rounded-full">
                  Book Spot
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}