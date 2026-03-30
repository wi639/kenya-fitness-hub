import React, { useState, useEffect } from 'react';
import { Menu, X, Dumbbell } from 'lucide-react';
import { Button } from '../ui/button';
import { cn } from '../../lib/utils';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Workouts', href: '#workouts' },
    { name: 'Trainers', href: '#trainers' },
    { name: 'Nutrition', href: '#nutrition' },
    { name: 'Schedule', href: '#schedule' },
    { name: 'Community', href: '#community' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 py-4',
        isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="bg-red-600 p-2 rounded-xl">
            <Dumbbell className="text-white h-6 w-6" />
          </div>
          <span className={cn('text-2xl font-black tracking-tighter italic uppercase', isScrolled ? 'text-slate-900' : 'text-white')}>
            KAZI<span className="text-red-600">FIT</span>
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={cn(
                'text-sm font-bold uppercase tracking-wider transition-colors hover:text-red-600',
                isScrolled ? 'text-slate-600' : 'text-white/90'
              )}
            >
              {link.name}
            </a>
          ))}
          <Button variant={isScrolled ? 'default' : 'secondary'} size="sm" className="rounded-full">
            Join Now
          </Button>
        </div>

        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? (
            <X className={cn('h-6 w-6', isScrolled ? 'text-slate-900' : 'text-white')} />
          ) : (
            <Menu className={cn('h-6 w-6', isScrolled ? 'text-slate-900' : 'text-white')} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-t border-slate-100 p-6 flex flex-col gap-4 md:hidden shadow-xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-lg font-bold text-slate-900 hover:text-red-600"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <Button className="w-full rounded-full">Get Started</Button>
        </div>
      )}
    </nav>
  );
}