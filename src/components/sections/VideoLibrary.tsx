import React, { useState } from 'react';
import { Play, Search, Lock } from 'lucide-react';
import { Card } from '../ui/card';

const categories = ['All', 'HIIT', 'Strength', 'Yoga', 'Marathon Prep'];

const videos = [
  {
    title: 'Morning Karura Run Prep',
    category: 'Marathon Prep',
    duration: '15:20',
    premium: false,
    thumb: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&q=80',
  },
  {
    title: 'Nairobi Core Blast',
    category: 'HIIT',
    duration: '25:45',
    premium: true,
    thumb: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80',
  },
  {
    title: 'Savannah Stretching',
    category: 'Yoga',
    duration: '30:00',
    premium: false,
    thumb: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80',
  },
  {
    title: 'Elite Power Lifting',
    category: 'Strength',
    duration: '45:10',
    premium: true,
    thumb: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80',
  },
];

export function VideoLibrary() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredVideos = activeCategory === 'All' 
    ? videos 
    : videos.filter(v => v.category === activeCategory);

  return (
    <section id="videos" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-8">
          <div>
            <h2 className="text-sm font-black text-red-600 uppercase tracking-widest mb-2">Video Library</h2>
            <h3 className="text-4xl font-black text-slate-900 uppercase">
              Train <span className="italic">Anywhere</span>
            </h3>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 items-center w-full md:w-auto">
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <input 
                placeholder="Search exercises..."
                className="w-full bg-slate-50 border-0 rounded-full py-3 pl-12 pr-4 text-sm focus:ring-2 ring-red-600 outline-none"
              />
            </div>
            <div className="flex bg-slate-100 p-1 rounded-full overflow-x-auto no-scrollbar w-full sm:w-auto">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-black uppercase transition-all whitespace-nowrap ${
                    activeCategory === cat ? 'bg-white text-red-600 shadow-sm' : 'text-slate-500 hover:text-slate-900'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredVideos.map((video, idx) => (
            <Card key={idx} className="group border-0 overflow-hidden cursor-pointer">
              <div className="relative aspect-video">
                <img src={video.thumb} alt={video.title} className="w-full h-full object-cover transition-transform group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-12 w-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 group-hover:scale-110 transition-transform">
                    {video.premium ? <Lock className="h-5 w-5 text-white" /> : <Play className="h-5 w-5 text-white fill-current" />}
                  </div>
                </div>
                <div className="absolute bottom-3 right-3 bg-black/60 px-2 py-1 rounded text-[10px] font-bold text-white">
                  {video.duration}
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] font-black uppercase text-red-600 tracking-tighter">{video.category}</span>
                  {video.premium && (
                    <span className="text-[10px] font-black uppercase bg-yellow-400 px-1.5 py-0.5 rounded text-yellow-900">Premium</span>
                  )}
                </div>
                <h4 className="font-bold text-slate-900 leading-tight group-hover:text-red-600 transition-colors">{video.title}</h4>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}