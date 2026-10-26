import React from 'react';
import { Search, HeartHandshake, MousePointerClick, TrendingUp } from 'lucide-react';

const stages = [
  { number: '01', title: 'Get Discovered', icon: Search, description: 'Use SEO, useful content and relevant paid campaigns to help the right audience find your business.' },
  { number: '02', title: 'Build Interest', icon: HeartHandshake, description: 'Communicate your value through consistent social content, brand storytelling and creative design.' },
  { number: '03', title: 'Encourage Action', icon: MousePointerClick, description: 'Make your website clear and easy to use, with relevant information and straightforward calls to action.' },
  { number: '04', title: 'Review and Improve', icon: TrendingUp, description: 'Review available campaign and website data to understand what is working and what needs attention.' },
];

export const MarkeingWhatWeDo: React.FC = () => (
  <section id="what-we-do" className="py-24 bg-black text-white relative overflow-hidden">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[620px] h-[620px] bg-[#2b3785]/10 rounded-full blur-[140px] pointer-events-none" />
    <div className="container mx-auto px-6 max-w-7xl relative z-10">
      <div className="text-center max-w-3xl mx-auto mb-14">
        <span className="text-[#6378f7] font-mono text-xs uppercase tracking-widest font-semibold">Our Approach</span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mt-2">Connect Every Stage of Your <span className="text-[#6378f7]">Customer Journey</span></h2>
        <p className="mt-4 text-base sm:text-lg text-neutral-400">Digital marketing works best when the pieces support one another. We help align discovery, engagement and conversion-focused experiences around your business objectives.</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {stages.map(({ number, title, icon: Icon, description }) => (
          <article key={number} className="p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800 hover:border-[#2b3785]/70 transition-colors">
            <div className="flex items-center justify-between mb-7">
              <span className="text-xs font-mono text-[#8496ff] bg-[#2b3785]/25 border border-[#2b3785]/40 rounded-lg px-2.5 py-1">STAGE {number}</span>
              <Icon className="w-5 h-5 text-[#8496ff]" aria-hidden="true" />
            </div>
            <h3 className="text-xl font-bold text-white">{title}</h3>
            <p className="text-sm text-neutral-400 mt-3 leading-relaxed">{description}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);
