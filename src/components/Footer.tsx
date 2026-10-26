import React from 'react';
import { ArrowUpRight, MapPin, MessageSquare } from 'lucide-react';
import { GrowingLogo } from './GrowingLogo';

interface FooterProps { onOpenProposal: () => void; }

const whatsappUrl = 'https://wa.me/919994735573?text=Hi%20Grow%20Marketings,%20I%20would%20like%20to%20discuss%20a%20digital%20marketing%20project.';

export const Footer: React.FC<FooterProps> = ({ onOpenProposal }) => (
  <footer id="contact" className="bg-black text-neutral-400 border-t border-neutral-900 pt-16 pb-12">
    <div className="container mx-auto px-6 max-w-7xl">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-neutral-900">
        <div className="lg:col-span-2 space-y-4">
          <a href="#top" className="inline-flex items-center gap-2" aria-label="Grow Marketings home">
            <GrowingLogo size={32} />
            <span className="font-extrabold text-2xl text-white tracking-tight">Grow Marketings<span className="text-[#3d50c2]">.</span></span>
          </a>
          <p className="text-sm text-neutral-400 max-w-md leading-relaxed">
            Grow Marketings helps businesses strengthen their online presence through SEO, website development, social media marketing, paid advertising, branding and content marketing.
          </p>
          <div className="flex items-start gap-2 text-sm text-neutral-400">
            <MapPin className="w-4 h-4 text-[#8496ff] mt-0.5 shrink-0" aria-hidden="true" />
            <span>Second St, Thanthai Periyar Nagar, Kalanivasal, Karaikudi, Tamil Nadu 630002, India</span>
          </div>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-emerald-950/30 border border-emerald-500/30 text-emerald-300 hover:bg-emerald-900/30 transition-colors text-sm font-semibold">
            <MessageSquare className="w-4 h-4" aria-hidden="true" /> WhatsApp: +91 99947 35573
          </a>
        </div>
        <div>
          <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-white mb-4">Services</h2>
          <ul className="space-y-3 text-sm">
            {['SEO', 'Website Development', 'Social Media Marketing', 'Digital Marketing', 'Paid Advertising', 'Branding & Graphic Design', 'Content Marketing'].map(item => (
              <li key={item}><a href="#services" className="hover:text-[#8496ff] transition-colors">{item}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-white mb-4">Explore</h2>
          <ul className="space-y-3 text-sm">
            <li><a href="#elevate" className="hover:text-[#8496ff] transition-colors">About Grow Marketings</a></li>
            <li><a href="#services" className="hover:text-[#8496ff] transition-colors">Our Services</a></li>
            <li><a href="#pricing" className="hover:text-[#8496ff] transition-colors">Packages</a></li>
            <li><a href="#impact" className="hover:text-[#8496ff] transition-colors">Selected Work</a></li>
            <li><a href="#process" className="hover:text-[#8496ff] transition-colors">Our Process</a></li>\n            <li><a href="#faq" className="hover:text-[#8496ff] transition-colors">FAQs</a></li>
            <li><a href="#contact" className="hover:text-[#8496ff] transition-colors">Contact</a></li>
          </ul>
          <button type="button" onClick={onOpenProposal} className="mt-5 inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-[#2b3785] hover:bg-[#34449e] text-white font-bold text-sm transition-colors">
            Discuss Your Project <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
          </button>
        </div>
      </div>
      <div className="pt-7 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 gap-3">
        <p>© {new Date().getFullYear()} Grow Marketings. All rights reserved.</p>
        <p>Digital marketing and web solutions · Karaikudi, Tamil Nadu, India</p>
      </div>
    </div>
  </footer>
);
