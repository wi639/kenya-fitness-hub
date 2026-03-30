import React, { useState } from 'react';
import { toast } from 'sonner';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { Calendar, User, Phone, Dumbbell } from 'lucide-react';

export function Booking() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    trainer: '',
    date: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Session Request Sent! Our team in Kilimani will call you shortly.', {
      description: 'Prepare for a transformative experience.',
    });
    setFormData({ name: '', phone: '', trainer: '', date: '' });
  };

  return (
    <section id="booking" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-sm font-black text-red-600 uppercase tracking-widest mb-2">Personal Training</h2>
            <h3 className="text-4xl md:text-5xl font-black text-slate-900 uppercase mb-8">
              Book Your <br />
              <span className="italic">1-on-1 Session</span>
            </h3>
            <p className="text-slate-600 text-lg mb-12">
              Get personalized attention from Nairobi's top trainers. Whether you're training at our Kilimani flagship or Westlands hub, we bring out your best.
            </p>

            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="h-12 w-12 bg-slate-900 text-white rounded-2xl flex items-center justify-center shrink-0">
                  <Dumbbell className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-black uppercase text-slate-900">Customized Routine</h4>
                  <p className="text-slate-500 text-sm">Workouts tailored to your specific Kenyan marathon or physique goals.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="h-12 w-12 bg-red-600 text-white rounded-2xl flex items-center justify-center shrink-0">
                  <Calendar className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-black uppercase text-slate-900">Flexible Scheduling</h4>
                  <p className="text-slate-500 text-sm">Book sessions that fit into your busy Nairobi lifestyle.</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <Card className="p-4 border-2 border-slate-50 shadow-2xl">
              <CardHeader>
                <CardTitle className="text-3xl font-black uppercase text-center">Reservation</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-slate-400">Full Name</label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                      <input
                        required
                        className="w-full bg-slate-50 border-0 rounded-2xl py-4 pl-12 pr-4 text-slate-900 focus:ring-2 ring-red-600 outline-none transition-all"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-slate-400">Phone Number</label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                      <input
                        required
                        type="tel"
                        className="w-full bg-slate-50 border-0 rounded-2xl py-4 pl-12 pr-4 text-slate-900 focus:ring-2 ring-red-600 outline-none transition-all"
                        placeholder="+254 7XX XXX XXX"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-xs font-black uppercase tracking-widest text-slate-400">Trainer</label>
                      <select
                        required
                        className="w-full bg-slate-50 border-0 rounded-2xl py-4 px-4 text-slate-900 focus:ring-2 ring-red-600 outline-none transition-all appearance-none"
                        value={formData.trainer}
                        onChange={(e) => setFormData({ ...formData, trainer: e.target.value })}
                      >
                        <option value="">Select Trainer</option>
                        <option value="kevin">Kevin Omuse</option>
                        <option value="wanjiru">Wanjiru Kamau</option>
                        <option value="brian">Brian Otieno</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-black uppercase tracking-widest text-slate-400">Date</label>
                      <input
                        required
                        type="date"
                        className="w-full bg-slate-50 border-0 rounded-2xl py-4 px-4 text-slate-900 focus:ring-2 ring-red-600 outline-none transition-all"
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      />
                    </div>
                  </div>

                  <Button type="submit" className="w-full py-6 text-lg rounded-full" size="lg">
                    Confirm Booking
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}