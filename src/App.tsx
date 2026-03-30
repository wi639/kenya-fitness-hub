import React from 'react';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { Workouts } from './components/sections/Workouts';
import { VideoLibrary } from './components/sections/VideoLibrary';
import { Trainers } from './components/sections/Trainers';
import { Schedule } from './components/sections/Schedule';
import { Nutrition } from './components/sections/Nutrition';
import { Progress } from './components/sections/Progress';
import { Membership } from './components/sections/Membership';
import { Booking } from './components/sections/Booking';
import { Community } from './components/sections/Community';
import { Toaster } from 'sonner';
import { Dumbbell, Mail, MapPin, Phone, MessageSquare, Share2, Heart } from 'lucide-react';

function App() {
  return (
    <main className="min-h-screen bg-white font-sans antialiased text-slate-900">
      <Toaster position="top-center" expand={true} richColors />
      <Navbar />
      <Hero />
      <Workouts />
      <VideoLibrary />
      <Trainers />
      <Schedule />
      <Nutrition />
      <Progress />
      <Membership />
      <Booking />
      <Community />

      {/* Footer */}
      <footer className="bg-slate-900 text-white pt-24 pb-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <div className="bg-red-600 p-2 rounded-xl">
                  <Dumbbell className="text-white h-6 w-6" />
                </div>
                <span className="text-2xl font-black tracking-tighter italic uppercase">
                  KAZI<span className="text-red-600">FIT</span>
                </span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                Nairobi's elite fitness community. We don't just build bodies; we build legacies. Join the Pride today and redefine your limits.
              </p>
              <div className="flex gap-4">
                {[Heart, Share2, MessageSquare].map((Icon, idx) => (
                  <a key={idx} href="#" className="h-10 w-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-red-600 transition-all">
                    <Icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-black uppercase tracking-widest mb-6">Explore</h4>
              <ul className="space-y-4 text-sm font-bold text-slate-400">
                <li><a href="#workouts" className="hover:text-red-600 transition-colors">Workouts</a></li>
                <li><a href="#trainers" className="hover:text-red-600 transition-colors">Trainers</a></li>
                <li><a href="#schedule" className="hover:text-red-600 transition-colors">Schedule</a></li>
                <li><a href="#nutrition" className="hover:text-red-600 transition-colors">Nutrition</a></li>
                <li><a href="#videos" className="hover:text-red-600 transition-colors">Video Library</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-black uppercase tracking-widest mb-6">Locations</h4>
              <ul className="space-y-4 text-sm text-slate-400">
                <li className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-red-600 shrink-0" />
                  <span>The Hub, Kilimani, Nairobi</span>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-green-500 shrink-0" />
                  <span>Sarit Centre, Westlands</span>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-yellow-500 shrink-0" />
                  <span>Village Market, Gigiri</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-black uppercase tracking-widest mb-6">Contact</h4>
              <ul className="space-y-4 text-sm text-slate-400">
                <li className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-red-600" />
                  <span>+254 700 000 000</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-red-600" />
                  <span>join@kazifit.co.ke</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-bold text-slate-500 uppercase tracking-widest">
            <p>© 2024 KaziFit Nairobi. All Rights Reserved.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <a href="#" className="hover:text-white">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

export default App;