import React from 'react';
import { ArrowUpRight, BriefcaseBusiness, Code2, Palette, Search } from 'lucide-react';

interface ImpactSectionProps { onOpenProposal?: () => void; }

const projectTypes = [
  { icon: Code2, title: 'Business Website Development', category: 'Web solutions', description: 'Responsive website experiences that present services clearly, reflect the brand and make it easy for visitors to enquire.' },
  { icon: Search, title: 'SEO and Content Improvements', category: 'Organic visibility', description: 'Search-focused improvements that help align website structure and useful content with what potential customers are looking for.' },
  { icon: Palette, title: 'Branding and Social Creatives', category: 'Creative services', description: 'A consistent visual direction across brand assets, social media posts and promotional materials.' },
  { icon: BriefcaseBusiness, title: 'Digital Campaign Support', category: 'Digital marketing', description: 'Campaign planning and creative support designed around the business audience, objectives and available budget.' },
];

export const ImpactSection: React.FC<ImpactSectionProps> = ({ onOpenProposal }) => (
  <section id="impact" className="py-24 bg-black text-white relative border-t border-neutral-900">
    <div className="container mx-auto px-6 max-w-7xl">
      <div className="max-w-3xl mb-14">
        <span className="text-[#6378f7] font-mono text-xs uppercase tracking-widest font-semibold">Selected Work</span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mt-2">Creative Work with <span className="text-[#6378f7]">Clear Business Goals</span></h2>
        <p className="mt-4 text-base sm:text-lg text-neutral-400">Our work spans website development, search visibility, social content, branding and digital campaigns. Ask us about relevant examples and project details when discussing your requirements.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        {projectTypes.map(({ icon: Icon, title, category, description }) => (
          <article key={title} className="p-7 sm:p-8 rounded-3xl bg-neutral-900/40 border border-neutral-800 hover:border-[#2b3785]/60 transition-all">
            <div className="flex items-center justify-between gap-4">
              <span className="text-xs font-mono text-[#8496ff] uppercase tracking-wider">{category}</span>
              <Icon className="w-5 h-5 text-[#8496ff]" aria-hidden="true" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mt-5">{title}</h3>
            <p className="mt-3 text-sm text-neutral-400 leading-relaxed">{description}</p>
            <p className="mt-5 text-xs text-neutral-500">Project scope and deliverables depend on the brief.</p>
          </article>
        ))}
      </div>
      <div className="mt-10 rounded-2xl bg-neutral-900/60 border border-neutral-800 p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-5">
        <div>
          <h3 className="text-xl font-bold text-white">Have a project in mind?</h3>
          <p className="text-sm text-neutral-400 mt-2">Tell us what you want to achieve and we'll discuss the right approach.</p>
        </div>
        <button type="button" onClick={onOpenProposal} className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#2b3785] hover:bg-[#34449e] text-white font-bold text-sm transition-colors">
          Discuss Your Project <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
        </button>
      </div>
    </div>
  </section>
);
