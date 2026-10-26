import React from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  { question: 'What services does Grow Marketings offer?', answer: 'Grow Marketings offers SEO, website development, social media marketing, digital marketing, paid advertising, branding and graphic design, and content marketing.' },
  { question: 'Where is Grow Marketings based?', answer: 'Grow Marketings is based in Karaikudi, Tamil Nadu, India, and can discuss projects with businesses across Tamil Nadu and other parts of India.' },
  { question: 'Can you help a business that is just starting online?', answer: 'Yes. We can discuss your current needs and recommend suitable services, from building a website and brand identity to planning digital marketing activities.' },
  { question: 'How do I choose the right digital marketing services?', answer: 'Start by sharing your business goals, target customers and current challenges. We can then discuss which services and deliverables are relevant to your needs.' },
  { question: 'How do I request a quote?', answer: 'Contact Grow Marketings with a short description of your business, the services you need and your goals. We can discuss the project scope and prepare a suitable proposal.' },
];

export const FAQSection: React.FC = () => (
  <section id="faq" className="py-24 bg-black text-white border-t border-neutral-900">
    <div className="container mx-auto px-6 max-w-4xl">
      <div className="text-center mb-12">
        <span className="text-[#6378f7] font-mono text-xs uppercase tracking-widest font-semibold">Need to Know</span>
        <h2 className="text-3xl sm:text-4xl font-extrabold mt-2">Frequently Asked <span className="text-[#6378f7]">Questions</span></h2>
        <p className="mt-4 text-base text-neutral-400">A few helpful details about our services and how to get started.</p>
      </div>
      <div className="space-y-3">
        {faqs.map(({ question, answer }) => (
          <details key={question} className="group rounded-2xl bg-neutral-900/50 border border-neutral-800 open:border-[#2b3785]/70">
            <summary className="list-none cursor-pointer flex items-center justify-between gap-4 p-5 sm:p-6 font-semibold text-white">
              <span>{question}</span>
              <ChevronDown className="w-5 h-5 text-[#8496ff] shrink-0 transition-transform group-open:rotate-180" aria-hidden="true" />
            </summary>
            <p className="px-5 sm:px-6 pb-6 text-sm text-neutral-400 leading-relaxed">{answer}</p>
          </details>
        ))}
      </div>
    </div>
  </section>
);
