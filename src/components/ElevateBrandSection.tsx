import React from 'react';
import { Target, Palette, BarChart3, Globe } from 'lucide-react';

interface ElevateBrandSectionProps {
  onOpenProposal?: () => void;
}

const benefits = [
  { icon: Target, title: 'Marketing Consultant', description: 'Prioritize marketing activities around your audience, goals and available budget.' },
  { icon: Palette, title: 'Campaign (Growth campaign)', description: 'Create a recognizable brand across your website, social media and marketing materials.' },
  { icon: Globe, title: 'Festival Campaign ', description: 'Help potential customers discover your business through search and digital channels.' },
  { icon: BarChart3, title: 'Branding Stratagy', description: 'Review relevant performance data and refine the work as your business evolves.' },
];

export const ElevateBrandSection: React.FC<ElevateBrandSectionProps> = ({ onOpenProposal }) => (
  <section id="elevate" className="py-24 bg-neutral-950 text-white border-t border-neutral-900 relative overflow-hidden">
    <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#2b3785]/15 rounded-full blur-3xl pointer-events-none" />
    <div className="container mx-auto px-6 max-w-7xl relative">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-[#6378f7] font-mono text-xs uppercase tracking-widest font-semibold">Who We Are</span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-3 tracking-tight">
          A Digital Growth Partner for <span className="text-[#6378f7]">Ambitious Businesses</span>
        </h2>
        <p className="mt-4 text-base sm:text-lg text-neutral-400">
          Grow Marketings brings marketing strategy, creative design and website development together to help businesses strengthen their online presence. Whether you're establishing your brand or improving existing campaigns, we help you focus on the digital work that fits your goals.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {benefits.map(({ icon: Icon, title, description }) => (
          <article key={title} className="p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800 hover:border-[#2b3785]/60 transition-all">
            <div className="w-11 h-11 rounded-xl bg-[#2b3785]/25 border border-[#2b3785]/40 flex items-center justify-center text-[#8496ff]">
              <Icon className="w-5 h-5" aria-hidden="true" />
            </div>
            <h3 className="text-base font-bold text-neutral-100 mt-5">{title}</h3>
            <p className="text-sm text-neutral-400 mt-2 leading-relaxed">{description}</p>
          </article>
        ))}
      </div>
      <div className="mt-10 text-center">
        <p className="text-sm text-neutral-400 mb-4">Based in Karaikudi, Tamil Nadu. Working with businesses across Tamil Nadu and India.</p>
        <button type="button" onClick={onOpenProposal} className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-[#2b3785] hover:bg-[#34449e] text-white text-sm font-bold transition-colors">
          Discuss Your Project <span aria-hidden="true" className="ml-2">→</span>
        </button>
      </div>
    </div>
  </section>
);
