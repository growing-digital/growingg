import React, { useState } from 'react';
import { Check, Sparkles, ArrowRight, ShieldCheck, Zap, Rocket, Star } from 'lucide-react';

interface StartupPricingSectionProps {
  onSelectPlan?: (planName: string, price: string) => void;
}

export const StartupPricingSection: React.FC<StartupPricingSectionProps> = ({ onSelectPlan }) => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'quarterly'>('monthly');

  const plans = [
    {
      id: 'starter-growth',
      name: 'Starter Presence',
      tagline: 'For businesses building a clearer and more consistent online presence.',
      price: '10,000',
      period: '/ month',
      popular: false,
      badge: 'Start Here',
      gradient: 'from-neutral-900 to-neutral-950',
      borderColor: 'border-neutral-800 hover:border-neutral-700',
      features: [
        'Choose a defined set of digital marketing deliverables',
        'SEO, social content or campaign support based on agreed scope',
        'Brand-aligned creative assets as specified in the proposal',
        'Initial planning and priority setting',
        'Periodic review of agreed work',
      ],
      deliverable: 'A clearly scoped starting point matched to your business priorities.',
      cta: 'Discuss Starter Package',
    },
    {
      id: 'growth-accelerator',
      name: 'Growth Partner',
      tagline: 'For businesses ready to coordinate multiple digital channels.',
      price: '15,000',
      period: '/ month',
      popular: true,
      badge: 'Popular Choice',
      gradient: 'from-neutral-900 via-[#2b3785]/20 to-neutral-950',
      borderColor: 'border-[#2b3785] ring-1 ring-[#5970ff]/40 shadow-xl shadow-[#2b3785]/20',
      features: [
        'A coordinated mix of selected marketing services',
        'Website, SEO, social media or paid campaign work by agreement',
        'Content and creative planning within the agreed scope',
        'Campaign or project review checkpoints',
        'Communication and next-step planning',
      ],
      deliverable: 'A coordinated digital marketing plan with defined deliverables.',
      cta: 'Discuss Growth Package',
    },
    {
      id: 'scale-domination',
      name: 'Custom Growth',
      tagline: 'For businesses that need a broader combination of marketing and web services.',
      price: '20,000',
      period: '/ month',
      popular: false,
      badge: 'Expanded Scope',
      gradient: 'from-neutral-900 to-neutral-950',
      borderColor: 'border-neutral-800 hover:border-[#2b3785]/60',
      features: [
        'Broader service scope based on business needs',
        'Website and digital marketing coordination where required',
        'SEO, paid advertising, social media and creative support by agreement',
        'Defined review and optimization priorities',
        'A tailored proposal with scope and deliverables',
      ],
      deliverable: 'A tailored scope for businesses with multiple digital priorities.',
      cta: 'Request Custom Scope',
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-neutral-950 text-white border-t border-neutral-900 relative overflow-hidden">
      {/* Glow ambient background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#2b3785]/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2b3785]/20 border border-[#2b3785]/40 text-[#8496ff] text-xs font-mono font-semibold mb-3">
            <Rocket className="w-3.5 h-3.5" />
            <span>Flexible Service Packages</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Flexible Digital Marketing Packages for <span className="text-[#5970ff]">Growing Businesses</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-400">
            Choose a starting package based on your priorities. Final deliverables, timelines, ad spend and any third-party costs should be confirmed in your written proposal before work begins.
          </p>

          {/* Billing Cycle Pill */}
          <div className="mt-6 inline-flex items-center p-1 rounded-xl bg-neutral-900 border border-neutral-800 text-xs font-semibold">
            <button
              type="button"
              onClick={() => setBillingCycle('monthly')}
              className={`px-4 py-2 rounded-lg transition-all ${
                billingCycle === 'monthly'
                  ? 'bg-[#2b3785] text-white shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Monthly Retainer
            </button>
            <button
              type="button"
              onClick={() => setBillingCycle('quarterly')}
              className={`px-4 py-2 rounded-lg transition-all flex items-center gap-1.5 ${
                billingCycle === 'quarterly'
                  ? 'bg-[#2b3785] text-white shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              <span>Quarterly Sprint</span>
              <span className="text-[10px] bg-emerald-500/20 text-emerald-400 px-1.5 py-0.5 rounded font-mono">15% OFF</span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan) => {
            const finalPrice = billingCycle === 'quarterly' 
              ? Math.round(parseInt(plan.price.replace(',', '')) * 0.85).toLocaleString('en-IN')
              : plan.price;

            return (
              <div
                key={plan.id}
                className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 bg-gradient-to-b ${plan.gradient} border ${plan.borderColor} ${
                  plan.popular ? 'scale-105 z-20 shadow-2xl' : 'hover:-translate-y-1'
                }`}
              >
                {/* Popular Highlight Badge */}
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#2b3785] border border-[#5970ff] text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-lg flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-[#5970ff]" />
                    <span>{plan.badge}</span>
                  </div>
                )}

                <div>
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#8496ff]">
                        {plan.badge}
                      </span>
                      <h3 className="text-2xl font-bold text-white mt-1">{plan.name}</h3>
                    </div>
                  </div>

                  <p className="text-xs text-neutral-400 mt-2 min-h-[36px] leading-relaxed">
                    {plan.tagline}
                  </p>

                  {/* Price */}
                  <div className="mt-6 mb-6 pb-6 border-b border-neutral-800">
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl font-bold text-neutral-400 font-sans">₹</span>
                      <span className="text-4xl sm:text-5xl font-extrabold font-mono text-white tracking-tight">
                        {finalPrice}
                      </span>
                      <span className="text-xs text-neutral-400 font-medium ml-1">
                        {billingCycle === 'quarterly' ? '/ mo (billed qtrly)' : plan.period}
                      </span>
                    </div>
                    <p className="text-[11px] text-neutral-500 mt-1.5 flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Zero setup fee • Cancel anytime with 7 days notice</span>
                    </p>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3">
                    <p className="text-xs font-semibold text-neutral-300 uppercase tracking-wider font-mono">
                      What is included:
                    </p>
                    {plan.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs text-neutral-300">
                        <div className="w-4 h-4 rounded-full bg-[#2b3785]/30 text-[#8496ff] flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3 h-3" />
                        </div>
                        <span className="leading-snug">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom CTA & Deliverable */}
                <div className="mt-8 pt-6 border-t border-neutral-800/80">
                  <div className="p-3 rounded-xl bg-neutral-950/80 border border-neutral-800/80 mb-4 text-[11px] text-neutral-400">
                    <strong className="text-white block font-medium mb-0.5">Primary Outcome:</strong>
                    {plan.deliverable}
                  </div>

                  <button
                    type="button"
                    onClick={() => onSelectPlan && onSelectPlan(plan.name, `₹${finalPrice}/mo`)}
                    className={`w-full py-3.5 px-4 rounded-xl font-bold text-xs transition-all flex items-center justify-center gap-2 cursor-pointer ${
                      plan.popular
                        ? 'bg-[#2b3785] hover:bg-[#34449e] text-white shadow-lg shadow-[#2b3785]/30 hover:scale-[1.02]'
                        : 'bg-white hover:bg-neutral-200 text-black hover:scale-[1.01]'
                    }`}
                  >
                    <span>{plan.cta}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Guarantee banner */}
        <div className="mt-16 p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800 max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#2b3785]/30 border border-[#2b3785]/50 flex items-center justify-center text-[#5970ff] shrink-0">
              <Zap className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Need a customized scope or milestone-based structure?</h4>
              <p className="text-xs text-neutral-400 mt-0.5">
                Every business is different. Final scope, timelines, advertising spend and third-party costs are confirmed in your proposal.
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => onSelectPlan && onSelectPlan('Custom Business Scope', '₹10K - ₹20K')}
            className="whitespace-nowrap px-5 py-2.5 rounded-xl border border-neutral-700 bg-neutral-800 hover:bg-neutral-700 text-white text-xs font-semibold transition-colors cursor-pointer"
          >
            Request Custom Scope
          </button>
        </div>
      </div>
    </section>
  );
};

export default StartupPricingSection;
