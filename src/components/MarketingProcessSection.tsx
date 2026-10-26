import React from 'react';
import { Compass, Layers, Rocket, Repeat, CheckCircle2 } from 'lucide-react';

const steps = [
  { number: '01', title: 'Understand', timeframe: 'Discovery', icon: Compass, tagline: 'Get clear on your business and audience', summary: 'We learn about your business, customers, current digital presence and the outcome you want to achieve.', deliverables: ['Business and audience discussion', 'Review of current website or channels', 'Agree on project priorities'] },
  { number: '02', title: 'Plan', timeframe: 'Strategy', icon: Layers, tagline: 'Choose the right scope and priorities', summary: 'We recommend a practical approach, clarify deliverables and align on timing, responsibilities and budget.', deliverables: ['Recommended service mix', 'Scope and deliverables', 'Project timeline and next steps'] },
  { number: '03', title: 'Create & Launch', timeframe: 'Execution', icon: Rocket, tagline: 'Turn the plan into useful digital work', summary: 'We create the agreed website, content, creative assets or campaigns and coordinate the launch with you.', deliverables: ['Website, campaign or content production', 'Review and feedback checkpoints', 'Launch coordination'] },
  { number: '04', title: 'Review & Improve', timeframe: 'Iteration', icon: Repeat, tagline: 'Learn from results and feedback', summary: 'Where measurement is available, we review relevant performance data and discuss sensible improvements for the next cycle.', deliverables: ['Review agreed metrics', 'Identify improvement opportunities', 'Prioritize next steps'] },
];

export const MarketingProcessSection: React.FC = () => (
  <section id="process" className="py-24 bg-black text-white relative">
    <div className="container mx-auto px-6 max-w-7xl">
      <div className="text-center max-w-3xl mx-auto mb-14">
        <span className="text-[#6378f7] font-mono text-xs uppercase tracking-widest font-semibold">How We Work</span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mt-2">A Clear Process from <span className="text-[#6378f7]">Planning to Launch</span></h2>
        <p className="mt-4 text-base sm:text-lg text-neutral-400">A collaborative process keeps your goals, deliverables and next steps clear throughout the project.</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {steps.map(({ number, title, timeframe, icon: Icon, tagline, summary, deliverables }) => (
          <article key={number} className="p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800 hover:border-[#2b3785]/60 transition-colors">
            <div className="flex items-center justify-between mb-6">
              <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-lg bg-[#2b3785]/30 text-[#8496ff] border border-[#2b3785]/40">STEP {number}</span>
              <span className="text-[11px] text-neutral-500">{timeframe}</span>
            </div>
            <div className="w-10 h-10 rounded-xl bg-[#2b3785]/20 border border-[#2b3785]/40 flex items-center justify-center text-[#8496ff]"><Icon className="w-5 h-5" aria-hidden="true" /></div>
            <h3 className="text-xl font-bold text-white mt-4">{title}</h3>
            <p className="text-sm font-medium text-[#8496ff] mt-2">{tagline}</p>
            <p className="text-sm text-neutral-400 mt-3 leading-relaxed">{summary}</p>
            <ul className="mt-5 space-y-2">
              {deliverables.map(item => <li key={item} className="flex gap-2 text-xs text-neutral-300"><CheckCircle2 className="w-4 h-4 text-[#8496ff] shrink-0" aria-hidden="true" /><span>{item}</span></li>)}
            </ul>
          </article>
        ))}
      </div>
    </div>
  </section>
);
