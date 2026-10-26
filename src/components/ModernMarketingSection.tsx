import React from 'react';
import { Search, Gauge, Smartphone, BarChart3, ArrowRight } from 'lucide-react';

interface ModernMarketingSectionProps { onOpenProposal?: () => void; }

const practices = [
  { icon: Search, title: 'Search-Friendly Structure', description: 'Organize website pages around real customer questions, relevant services and clear navigation.' },
  { icon: Gauge, title: 'Performance-Conscious Builds', description: 'Pay attention to mobile usability, image optimization and a fast, accessible experience.' },
  { icon: Smartphone, title: 'Mobile-First Experiences', description: 'Make service information, navigation and enquiry actions easy to use on smaller screens.' },
  { icon: BarChart3, title: 'Meaningful Measurement', description: 'Use suitable analytics and campaign tracking where configured to review performance against agreed goals.' },
];

export const ModernMarketingSection: React.FC<ModernMarketingSectionProps> = ({ onOpenProposal }) => (
  <section id="modern-marketing" className="py-24 bg-neutral-950 text-white border-t border-neutral-900 relative">
    <div className="container mx-auto px-6 max-w-7xl">
      <div className="text-center max-w-3xl mx-auto mb-14">
        <span className="text-[#6378f7] font-mono text-xs uppercase tracking-widest font-semibold">Thoughtful Digital Execution</span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mt-2">Modern Marketing with a <span className="text-[#6378f7]">Practical Foundation</span></h2>
        <p className="mt-4 text-base sm:text-lg text-neutral-400">Good marketing needs more than attractive visuals. We consider usability, discoverability, clear messaging and measurement when planning digital work for your business.</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {practices.map(({ icon: Icon, title, description }) => (
          <article key={title} className="p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800 hover:border-[#2b3785]/60 transition-colors">
            <div className="w-11 h-11 rounded-xl bg-[#2b3785]/25 border border-[#2b3785]/40 flex items-center justify-center text-[#8496ff]"><Icon className="w-5 h-5" aria-hidden="true" /></div>
            <h3 className="text-lg font-bold text-white mt-5">{title}</h3>
            <p className="text-sm text-neutral-400 mt-3 leading-relaxed">{description}</p>
          </article>
        ))}
      </div>
      <div className="text-center mt-10">
        <button type="button" onClick={onOpenProposal} className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#2b3785] hover:bg-[#34449e] text-white font-bold text-sm transition-colors">
          Talk Through Your Goals <ArrowRight className="w-4 h-4" aria-hidden="true" />
        </button>
      </div>
    </div>
  </section>
);
