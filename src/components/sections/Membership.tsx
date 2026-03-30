import React from 'react';
import { Check, Zap, Crown, Flame } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '../ui/card';
import { Button } from '../ui/button';

const plans = [
  {
    name: 'Rookie',
    price: '3,500',
    icon: Zap,
    features: ['3 Gym Visits/Week', 'Standard Equipment', 'Locker Room Access', 'App Access'],
    color: 'slate',
    popular: false,
  },
  {
    name: 'Elite Warrior',
    price: '7,500',
    icon: Flame,
    features: ['Unlimited Gym Access', 'All Group Classes', '1 PT Session/Month', 'Sauna Access', 'Nutrition Guide'],
    color: 'red',
    popular: true,
  },
  {
    name: 'Legacy Club',
    price: '15,000',
    icon: Crown,
    features: ['24/7 Priority Access', 'Private Locker', 'Unlimited PT Sessions', 'Guest Passes', 'Recovery Spa'],
    color: 'black',
    popular: false,
  },
];

export function Membership() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-sm font-black text-red-600 uppercase tracking-widest mb-2">Pricing Plans</h2>
          <h3 className="text-4xl md:text-5xl font-black text-slate-900 uppercase mb-4">
            Invest in <span className="italic">Yourself</span>
          </h3>
          <p className="text-slate-500">Flexible plans tailored for every fitness level and budget.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <Card 
              key={idx} 
              className={`relative border-0 shadow-xl ${
                plan.popular ? 'scale-105 ring-4 ring-red-600/20' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-red-600 text-white px-6 py-1 rounded-full text-xs font-black uppercase tracking-widest">
                  Most Popular
                </div>
              )}
              <CardHeader className="text-center pt-12">
                <div className={`mx-auto mb-6 h-16 w-16 rounded-2xl flex items-center justify-center ${
                  plan.color === 'red' ? 'bg-red-600 text-white' : 'bg-slate-900 text-white'
                }`}>
                  <plan.icon className="h-8 w-8" />
                </div>
                <CardTitle className="text-2xl uppercase font-black">{plan.name}</CardTitle>
                <div className="mt-4 flex items-center justify-center gap-1">
                  <span className="text-sm font-bold text-slate-400">KES</span>
                  <span className="text-5xl font-black">{plan.price}</span>
                  <span className="text-sm font-bold text-slate-400">/mo</span>
                </div>
              </CardHeader>
              <CardContent className="px-8 pb-8">
                <div className="space-y-4">
                  {plan.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-3">
                      <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center">
                        <Check className="h-3 w-3 text-green-600" />
                      </div>
                      <span className="text-slate-600 text-sm font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="px-8 pb-8">
                <Button 
                  className="w-full rounded-full" 
                  variant={plan.popular ? 'default' : 'outline'}
                  size="lg"
                >
                  Join Today
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}