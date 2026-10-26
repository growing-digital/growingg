import React from 'react';
import { Search, Code2, Share2, Target, Megaphone, Palette, FileText, ArrowUpRight } from 'lucide-react';

interface MarketingServicesSectionProps {
  onSelectService?: (serviceName: string) => void;
}

const services = [
  { title: 'Search Engine Optimization (SEO)', icon: Search, description: 'Improve your website’s search visibility with keyword research, on-page optimization, technical SEO and useful content.', points: ['Technical and on-page SEO', 'Keyword and content planning', 'Search visibility improvements'] },
  { title: 'Website Development', icon: Code2, description: 'Build a responsive, user-friendly website that explains your offering, showcases your brand and helps visitors take action.', points: ['Responsive website experiences', 'Clear service and contact journeys', 'Performance-conscious implementation'] },
  { title: 'Social Media Marketing', icon: Share2, description: 'Build a consistent social presence through useful content, creative posts and audience-focused communication.', points: ['Content planning', 'Creative posts and campaigns', 'Consistent brand communication'] },
  { title: 'Digital Marketing', icon: Target, description: 'Coordinate your digital channels around your business objectives, target audience and marketing priorities.', points: ['Channel and audience planning', 'Campaign coordination', 'Performance review'] },
  { title: 'Paid Advertising', icon: Megaphone, description: 'Plan and optimize paid campaigns to reach relevant audiences, attract qualified traffic and support your campaign goals.', points: ['Campaign setup and targeting', 'Ad creative coordination', 'Ongoing optimization'] },
  { title: 'Branding & Graphic Design', icon: Palette, description: 'Build a more consistent visual identity with brand assets, promotional graphics and marketing creatives.', points: ['Brand identity assets', 'Campaign and social graphics', 'Visual consistency'] },
  { title: 'Content Marketing', icon: FileText, description: 'Create helpful, audience-focused content that communicates your expertise and supports digital discovery.', points: ['Content topic planning', 'Website and social content', 'Brand-led storytelling'] },
];

export const MarketingServicesSection: React.FC<MarketingServicesSectionProps> = ({ onSelectService }) => (
  <section id="services" className="py-24 bg-black text-white border-t border-neutral-900 relative overflow-hidden">
    <div className="absolute top-1/3 left-0 w-96 h-96 bg-[#2b3785]/10 rounded-full blur-3xl pointer-events-none" />
    <div className="container mx-auto px-6 max-w-7xl relative z-10">
      <div className="max-w-3xl mb-14">
        <span className="text-[#6378f7] font-mono text-xs uppercase tracking-widest font-semibold">What We Do</span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-2 tracking-tight">
          Digital Marketing Services Designed to <span className="text-[#6378f7]">Move Your Business Forward</span>
        </h2>
        <p className="mt-4 text-base sm:text-lg text-neutral-400">
          From improving search visibility to building a professional website and creating consistent brand content, our services help bring your digital activities together around your business goals.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map(({ title, icon: Icon, description, points }) => (
          <article key={title} className="group p-6 sm:p-7 rounded-2xl bg-neutral-900/50 border border-neutral-800 hover:border-[#2b3785]/70 hover:bg-neutral-900/80 transition-all flex flex-col">
            <div className="w-11 h-11 rounded-xl bg-[#2b3785]/25 border border-[#2b3785]/40 flex items-center justify-center text-[#8496ff]">
              <Icon className="w-5 h-5" aria-hidden="true" />
            </div>
            <h3 className="text-xl font-bold text-white mt-5 group-hover:text-[#8496ff] transition-colors">{title}</h3>
            <p className="text-sm text-neutral-400 mt-3 leading-relaxed">{description}</p>
            <ul className="mt-5 space-y-2 text-sm text-neutral-300">
              {points.map(point => <li key={point} className="flex gap-2"><span className="text-[#8496ff]" aria-hidden="true">✓</span><span>{point}</span></li>)}
            </ul>
            <button type="button" onClick={() => onSelectService?.(title)} className="mt-6 pt-4 border-t border-neutral-800 flex items-center justify-between text-sm font-semibold text-[#8496ff] hover:text-white transition-colors text-left">
              Discuss this service <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
            </button>
          </article>
        ))}
      </div>
    </div>
  </section>
);
