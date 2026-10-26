import React from 'react';
import { Search, Palette, MousePointerClick, LineChart } from 'lucide-react';

const playbook = [
  { number: '01', icon: Search, title: 'Understand the Audience', description: 'Start with customer needs, search intent and the questions people ask before choosing a service.' },
  { number: '02', icon: Palette, title: 'Create a Consistent Message', description: 'Align website copy, brand visuals and campaign content so customers receive a clear, recognizable message.' },
  { number: '03', icon: MousePointerClick, title: 'Make the Next Step Clear', description: 'Help visitors understand your offer and find a simple path to contact you, request details or take action.' },
  { number: '04', icon: LineChart, title: 'Learn and Refine', description: 'Review agreed metrics, collect feedback and improve the work based on what the evidence shows.' },
];

export const ModernMarketingCards: React.FC = () => (
  <section id="playbook" className="py-24 bg-neutral-950 text-white border-t border-neutral-900 relative">
    <div className="container mx-auto px-6 max-w-7xl">
      <div className="text-center max-w-3xl mx-auto mb-14">
        <span className="text-[#6378f7] font-mono text-xs uppercase tracking-widest font-semibold">The Way We Work</span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mt-2">The Grow Marketings <span className="text-[#6378f7]">Digital Playbook</span></h2>
        <p className="mt-4 text-base sm:text-lg text-neutral-400">A straightforward framework for connecting strategy, creative work and digital execution—adapted to each business and project scope.</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {playbook.map(({ number, icon: Icon, title, description }) => (
          <article key={number} className="p-6 rounded-2xl bg-neutral-900/50 border border-neutral-800 hover:border-[#2b3785]/60 transition-all">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-[#8496ff] bg-[#2b3785]/25 border border-[#2b3785]/40 px-2.5 py-1 rounded-lg">STEP {number}</span>
              <Icon className="w-5 h-5 text-[#8496ff]" aria-hidden="true" />
            </div>
            <h3 className="text-xl font-bold text-white mt-6">{title}</h3>
            <p className="text-sm text-neutral-400 mt-3 leading-relaxed">{description}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);
