import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Heart, Share2, Plus } from 'lucide-react';
import { Card } from '../ui/card';

const communityPosts = [
  {
    user: 'Amara K.',
    loc: 'Westlands',
    content: 'Just smashed my PB on the Kilimanjaro Climb session! KaziFit energy is unmatched. 🔥',
    likes: 124,
    comments: 18,
    img: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80',
  },
  {
    user: 'David O.',
    loc: 'Kilimani',
    content: 'New recipe alert! The Warrior Ugali Bowl is a game changer for recovery. Check it out.',
    likes: 89,
    comments: 5,
    img: 'https://images.unsplash.com/photo-1547514701-42782101795e?auto=format&fit=crop&q=80',
  },
  {
    user: 'Faith M.',
    loc: 'Nairobi CBD',
    content: 'Who is joining the 5:30 AM Safari Sculpt tomorrow? Let’s get it! 🇰🇪',
    likes: 210,
    comments: 42,
    img: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&q=80',
  },
];

export function Community() {
  return (
    <section id="community" className="py-24 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-sm font-black text-green-500 uppercase tracking-widest mb-2">Our Community</h2>
            <h3 className="text-4xl md:text-5xl font-black uppercase">
              The <span className="text-red-600 italic">Pride</span> Connect
            </h3>
          </div>
          <button className="flex items-center gap-2 bg-white text-slate-900 px-6 py-3 rounded-full font-black uppercase text-sm hover:bg-red-600 hover:text-white transition-all">
            <Plus className="h-5 w-5" />
            Share Your Journey
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {communityPosts.map((post, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
            >
              <Card className="bg-white/5 border-white/10 hover:bg-white/10 overflow-hidden">
                <div className="h-48 relative">
                  <img src={post.img} alt="Post" className="w-full h-full object-cover opacity-80" />
                  <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold uppercase">
                    {post.loc}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="h-8 w-8 rounded-full bg-red-600 flex items-center justify-center font-black text-xs">
                      {post.user[0]}
                    </div>
                    <span className="font-bold text-sm">{post.user}</span>
                  </div>
                  <p className="text-slate-300 text-sm leading-relaxed mb-6 italic">"{post.content}"</p>
                  <div className="flex items-center justify-between pt-6 border-t border-white/10">
                    <div className="flex gap-4">
                      <button className="flex items-center gap-1.5 text-xs font-bold hover:text-red-500 transition-colors">
                        <Heart className="h-4 w-4" /> {post.likes}
                      </button>
                      <button className="flex items-center gap-1.5 text-xs font-bold hover:text-green-500 transition-colors">
                        <MessageSquare className="h-4 w-4" /> {post.comments}
                      </button>
                    </div>
                    <button className="text-slate-500 hover:text-white transition-colors">
                      <Share2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}