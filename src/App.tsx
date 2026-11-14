import { useState } from 'react';
import {
  ArrowRight,
  Check,
  ChevronDown,
  MessageSquare,
  Phone,
  Tractor,
  Menu,
  X,
} from 'lucide-react';
import {
  FAQ_ITEMS,
  FAILED_SOLUTIONS,
  GUARANTEE_POINTS,
  INCLUDED_ROWS,
  PAIN_POINTS,
  PHONE_DISPLAY,
  STEPS,
  URGENCY_POINTS,
  WHATSAPP_DEFAULT_URL,
} from './data/salesCopy';
import { ImageWithFallback } from './components/ImageWithFallback';
import { RegistrationModal } from './components/RegistrationModal';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openFaqs, setOpenFaqs] = useState<Set<number>>(() => new Set([0, 1]));
  const [logoError, setLogoError] = useState(false);

  const toggleFaq = (index: number) => {
    setOpenFaqs((prev) => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  };

  const allFaqsExpanded = openFaqs.size === FAQ_ITEMS.length;

  const toggleAllFaqs = () => {
    if (allFaqsExpanded) {
      setOpenFaqs(new Set());
    } else {
      setOpenFaqs(new Set(FAQ_ITEMS.map((_, i) => i)));
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#475569]">
      {/* Top Navigation Bar — 3-Zone Contract */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-xs border-b border-[#E2E8F0]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-3 sm:gap-8">
          {/* Zone 1: Brand Wordmark */}
          <a
            href="#"
            aria-label="AgroVision Home"
            className="inline-flex items-center shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0D9488]"
          >
            {logoError ? (
              <span
                className="text-lg sm:text-xl font-bold tracking-tight text-[#102A43] whitespace-nowrap"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                AgroVision
              </span>
            ) : (
              <img
                src="https://i.ibb.co/ZphhYhz5/file-00000000240081f49564ed684cdd5ed3.png"
                alt="AgroVision"
                referrerPolicy="no-referrer"
                onError={() => setLogoError(true)}
                className="h-10 sm:h-11 w-auto object-contain"
              />
            )}
          </a>

          {/* Zone 2: Concise Single-Line Nav Links */}
          <nav
            aria-label="Primary navigation"
            className="hidden md:flex items-center gap-7 text-sm font-medium text-[#475569]"
          >
            <a
              href="#the-problem"
              className="hover:text-[#102A43] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
            >
              The Problem
            </a>
            <a
              href="#how-it-works"
              className="hover:text-[#102A43] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
            >
              How It Works
            </a>
            <a
              href="#whats-included"
              className="hover:text-[#102A43] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
            >
              What&apos;s Included
            </a>
            <a
              href="#faq"
              className="hover:text-[#102A43] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
            >
              FAQ
            </a>
          </nav>

          {/* Zone 3: Single Primary Action + Mobile Menu Trigger */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center justify-center px-4 py-2.5 rounded-lg bg-[#0F766E] text-white text-sm font-semibold hover:bg-[#0D9488] transition-colors cursor-pointer whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0F766E]"
            >
              Register Free
            </button>
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle navigation menu"
              className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg border border-[#E2E8F0] text-[#102A43] hover:bg-[#F4F8F6] transition-colors cursor-pointer"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {isMobileMenuOpen && (
          <nav
            aria-label="Mobile navigation"
            className="md:hidden border-t border-[#E2E8F0] bg-white px-4 py-4 flex flex-col gap-3"
          >
            <a
              href="#the-problem"
              onClick={() => setIsMobileMenuOpen(false)}
              className="py-2 text-base font-medium text-[#102A43] hover:text-[#0D9488]"
            >
              The Problem
            </a>
            <a
              href="#how-it-works"
              onClick={() => setIsMobileMenuOpen(false)}
              className="py-2 text-base font-medium text-[#102A43] hover:text-[#0D9488]"
            >
              How It Works
            </a>
            <a
              href="#whats-included"
              onClick={() => setIsMobileMenuOpen(false)}
              className="py-2 text-base font-medium text-[#102A43] hover:text-[#0D9488]"
            >
              What&apos;s Included
            </a>
            <a
              href="#faq"
              onClick={() => setIsMobileMenuOpen(false)}
              className="py-2 text-base font-medium text-[#102A43] hover:text-[#0D9488]"
            >
              FAQ
            </a>
          </nav>
        )}
      </header>

      <main>
        {/* 1 & 2. HERO SECTION */}
        <section className="bg-white border-b border-[#E2E8F0]">
          <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 py-12 sm:py-20 lg:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 items-stretch">
              <div className="lg:col-span-7 flex flex-col justify-center">
                <p className="text-[15px] sm:text-sm font-semibold text-[#0D9488] tracking-normal mb-3.5 sm:mb-4">
                  AgroVision Farm-to-Market Advantage™
                </p>
                <h1 className="text-[2.125rem] sm:text-[2.75rem] lg:text-[3.375rem] font-extrabold text-[#102A43] leading-[1.15] tracking-tight">
                  You Grew The Food. So Why Does Someone Else Set Your Price?
                </h1>
                <p className="mt-5 sm:mt-6 text-[18px] sm:text-xl text-[#475569] leading-[1.6] max-w-2xl">
                  AgroVision Farm-to-Market Advantage™ connects you to real buyers, fairer prices, and organised transportation — so you sell your harvest on prepared ground, not on panic.
                </p>
                <p className="mt-4 text-[17px] sm:text-lg font-semibold text-[#102A43] leading-[1.6]">
                  Registration is free. Start before your harvest, not after it.
                </p>

                <div className="mt-7 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                  <a
                    href={WHATSAPP_DEFAULT_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-lg bg-[#0F766E] text-white text-base font-semibold hover:bg-[#0D9488] transition-colors sm:whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0F766E]"
                  >
                    <MessageSquare className="w-5 h-5 shrink-0" aria-hidden="true" />
                    Register Free on WhatsApp
                  </a>
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(true)}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg border border-[#E2E8F0] bg-[#F4F8F6] text-[#102A43] text-base font-semibold hover:border-[#0D9488] transition-colors cursor-pointer sm:whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0D9488]"
                  >
                    Register With Simple Form
                    <ArrowRight className="w-4 h-4 text-[#0D9488] shrink-0" aria-hidden="true" />
                  </button>
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-[15px] sm:text-sm text-[#475569] leading-[1.6]">
                  <a
                    href={`tel:${PHONE_DISPLAY}`}
                    className="inline-flex items-center gap-1.5 font-medium text-[#102A43] hover:text-[#0D9488] transition-colors"
                  >
                    <Phone className="w-4 h-4 text-[#0D9488]" aria-hidden="true" />
                    Call: {PHONE_DISPLAY}
                  </a>
                  <span aria-hidden="true" className="text-[#E2E8F0]">
                    ·
                  </span>
                  <span>No smartphone expertise required</span>
                  <span aria-hidden="true" className="text-[#E2E8F0]">
                    ·
                  </span>
                  <span>No upfront registration fee</span>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="h-full min-h-[260px] sm:min-h-[360px] rounded-xl overflow-hidden border border-[#E2E8F0] bg-[#F4F8F6]">
                  <ImageWithFallback
                    src="/src/assets/images/hero_soybean_harvest_1794649621074.jpg"
                    alt="Neatly stacked harvest bags of dried soybeans and maize on a Nigerian farm at morning light"
                    fallbackTitle="Harvest Sacks Ready for Market Preparation"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. OPENING HOOK */}
        <section className="bg-white py-14 sm:py-24">
          <div className="max-w-3xl mx-auto px-5 sm:px-6 lg:px-8">
            <h2 className="text-[24px] sm:text-3xl font-bold text-[#102A43] leading-[1.25] tracking-tight">
              It&apos;s harvest morning.
            </h2>

            <div className="mt-6 space-y-5 text-[17px] sm:text-lg leading-[1.6] text-[#475569]">
              <p>
                Your soybeans are bagged. Your maize is dried and ready. And in two weeks, school fees are due.
              </p>
              <p>
                A buyer arrives at your farm gate. He looks at your bags, mentions something about &quot;the market being slow,&quot; and names a price.
              </p>
              <p>
                You don&apos;t know what soybeans sold for in the city yesterday. You have no way to check. You have fees to pay, workers to settle, and produce that won&apos;t wait forever.
              </p>
              <p className="font-semibold text-[#102A43]">So you sell.</p>
              <p>
                Two weeks later, you hear what your beans fetched in the city market — and your stomach turns. The difference didn&apos;t go to your family. It went to the middle of the chain. The middle where you don&apos;t exist.
              </p>
              <p>
                You&apos;ve lived this season many times. And deep down, you know the truth:
              </p>
            </div>

            <div className="mt-8 rounded-xl bg-[#F4F8F6] border border-[#E2E8F0] p-6 sm:p-8">
              <p className="text-[20px] sm:text-2xl font-bold text-[#102A43] leading-[1.35]">
                You are not a bad farmer. You are a farmer without a market system.
              </p>
              <p className="mt-3 text-[17px] sm:text-lg font-semibold text-[#0D9488] leading-[1.6]">
                That is the part nobody fixed. Until now.
              </p>
            </div>
          </div>
        </section>

        {/* 4. PAIN POINTS */}
        <section id="the-problem" className="bg-[#F4F8F6] border-y border-[#E2E8F0] py-14 sm:py-24">
          <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h2 className="text-[24px] sm:text-4xl font-bold text-[#102A43] leading-[1.25] tracking-tight">
                THIS IS YOUR SEASON, ISN&apos;T IT?
              </h2>
              <p className="mt-4 text-[17px] sm:text-lg text-[#475569] leading-[1.6]">
                If any of these sound like your last harvest, read on:
              </p>
            </div>

            <div className="mt-8 sm:mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {PAIN_POINTS.map((item, idx) => (
                <article
                  key={item.title}
                  className="bg-white border border-[#E2E8F0] rounded-xl p-6 sm:p-7 flex flex-col justify-between"
                >
                  <div>
                    <span
                      className="text-xs font-semibold text-[#0D9488] tabular-nums"
                      style={{ fontFamily: 'var(--font-mono)' }}
                    >
                      0{idx + 1}
                    </span>
                    <h3 className="mt-2 text-[19px] sm:text-xl font-bold text-[#102A43] leading-[1.3]">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-[17px] text-[#475569] leading-[1.6]">
                      {item.body}
                    </p>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-10 max-w-3xl pt-8 border-t border-[#E2E8F0]">
              <p className="text-[19px] sm:text-xl font-bold text-[#102A43] leading-[1.35]">
                None of this is a farming problem. You already know how to farm.
              </p>
              <p className="mt-2.5 text-[17px] sm:text-lg text-[#475569] leading-[1.6]">
                It&apos;s a market-access problem. And it has a structure — which means it can be broken.
              </p>
            </div>
          </div>
        </section>

        {/* 5. FAILED SOLUTIONS */}
        <section className="bg-white py-14 sm:py-24">
          <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-8">
            <h2 className="text-[24px] sm:text-4xl font-bold text-[#102A43] leading-[1.25] tracking-tight">
              YOU&apos;VE ALREADY TRIED
            </h2>
            <p className="mt-4 text-[17px] sm:text-lg text-[#475569] leading-[1.6]">
              You didn&apos;t sit still. You&apos;ve tried:
            </p>

            <div className="mt-8 divide-y divide-[#E2E8F0] border-y border-[#E2E8F0]">
              {FAILED_SOLUTIONS.map((item, idx) => (
                <div
                  key={item.lead}
                  className="py-5 sm:py-6 flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6"
                >
                  <span
                    className="text-sm font-semibold text-[#0D9488] shrink-0 tabular-nums"
                    style={{ fontFamily: 'var(--font-mono)' }}
                  >
                    0{idx + 1}
                  </span>
                  <p className="text-[17px] sm:text-lg text-[#475569] leading-[1.6]">
                    <span className="font-bold text-[#102A43]">{item.lead}</span> — {item.detail}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-9 sm:mt-10 rounded-xl bg-[#F4F8F6] border border-[#E2E8F0] p-6 sm:p-8 space-y-4">
              <p className="text-[19px] sm:text-xl font-bold text-[#102A43] leading-[1.35]">
                Here&apos;s why every one of them failed: they gave you advice, promises, or pressure — but never a system.
              </p>
              <p className="text-[17px] sm:text-lg text-[#475569] leading-[1.6]">
                Nobody organised the path between your farm and a real buyer. Nobody documented the terms. Nobody stayed after the first visit.
              </p>
              <p className="text-[17px] sm:text-lg font-semibold text-[#0D9488] leading-[1.6]">
                That&apos;s the difference. And it&apos;s exactly what AgroVision was built to be.
              </p>
            </div>
          </div>
        </section>

        {/* 6. THE BRIDGE */}
        <section className="bg-[#F4F8F6] border-y border-[#E2E8F0] py-14 sm:py-24">
          <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 items-stretch">
              <div className="lg:col-span-6 order-2 lg:order-1">
                <div className="h-full min-h-[250px] sm:min-h-[260px] rounded-xl overflow-hidden border border-[#E2E8F0] bg-white">
                  <ImageWithFallback
                    src="/src/assets/images/bridge_aggregation_logistics_1794649622540.jpg"
                    alt="Grain sacks being weighed on a platform scale and loaded onto a delivery truck at an agricultural collection point"
                    fallbackTitle="Organised Weighing & Logistics Coordination"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="lg:col-span-6 order-1 lg:order-2 flex flex-col justify-center space-y-4 sm:space-y-5">
                <h2 className="text-[24px] sm:text-4xl font-bold text-[#102A43] leading-[1.25] tracking-tight">
                  The buyers you need already exist.
                </h2>
                <p className="text-[17px] sm:text-lg text-[#475569] leading-[1.6]">
                  Wholesalers. Processors. Food manufacturers. Retail chains. They are looking for reliable produce, in real quantities, delivered to agreed standards, at agreed times.
                </p>
                <p className="text-[17px] sm:text-lg font-semibold text-[#102A43] leading-[1.6]">
                  The problem was never that buyers don&apos;t exist.
                </p>
                <p className="text-[17px] sm:text-lg text-[#475569] leading-[1.6]">
                  The problem is that a farmer alone cannot walk the whole path: find the buyer, prove the quantity, meet the volume, negotiate the price, organise the transport, and collect the money. One farmer, one harvest, one phone — against an entire supply chain.
                </p>
                <p className="text-[18px] font-bold text-[#0D9488] leading-[1.5]">
                  So AgroVision walks the path with you.
                </p>
                <p className="text-[17px] sm:text-lg text-[#475569] leading-[1.6]">
                  We register the farmers. We record the produce. We find the buyers. We pool small harvests into big ones. We put the terms in writing. We coordinate the trucks. We follow the payment.
                </p>
                <p className="text-[19px] sm:text-xl font-bold text-[#102A43] leading-[1.35]">
                  You keep farming. We handle the road between your farm and the market.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 7. PROGRAM INTRODUCTION */}
        <section className="bg-white py-14 sm:py-24">
          <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 items-stretch">
              <div className="lg:col-span-7 flex flex-col justify-center space-y-4 sm:space-y-5">
                <h2 className="text-[24px] sm:text-4xl font-bold text-[#102A43] leading-[1.25] tracking-tight">
                  Introducing: AgroVision Farm-to-Market Advantage™
                </h2>
                <p className="text-[18px] sm:text-xl font-semibold text-[#0D9488] leading-[1.45]">
                  From Farm to Market, Creating Better Opportunities for Every Farmer.
                </p>
                <p className="text-[17px] sm:text-lg text-[#475569] leading-[1.6]">
                  AgroVision Farm-to-Market Advantage™ is a structured market-access and produce-aggregation service for smallholder and medium-scale farmers in Nigeria.
                </p>
                <p className="text-[17px] sm:text-lg text-[#475569] leading-[1.6]">
                  In plain language: you register your farm and your expected harvest with us — and we work to connect you with real buyers, fairer prices, pooled volumes, and organised transportation. Before your harvest arrives, not after.
                </p>
                <p className="text-[17px] sm:text-lg text-[#475569] leading-[1.6]">
                  You register through WhatsApp, a phone call, a simple form, or our field representative who visits your community. No smartphone expertise required. No upfront registration fee.
                </p>
                <p className="text-[17px] sm:text-lg text-[#475569] leading-[1.6]">
                  You are not applying for a loan. You are not joining a cooperative. You are not handing anyone your produce on promises.
                </p>
                <p className="text-[19px] sm:text-xl font-bold text-[#102A43] leading-[1.35]">
                  You are registering your harvest — and putting a market system behind it.
                </p>
              </div>

              <div className="lg:col-span-5">
                <div className="h-full min-h-[260px] sm:min-h-[280px] rounded-xl overflow-hidden border border-[#E2E8F0] bg-[#F4F8F6]">
                  <ImageWithFallback
                    src="/src/assets/images/farmer_market_preparation_1794649621256.jpg"
                    alt="Farmer inspecting clean dried maize and soybeans held in hands above woven harvest sacks"
                    fallbackTitle="Quality Assessment & Pre-Harvest Market Preparation"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 8. HOW IT WORKS — 5 SIMPLE STEPS */}
        <section id="how-it-works" className="bg-[#F4F8F6] border-y border-[#E2E8F0] py-14 sm:py-24">
          <div className="max-w-5xl mx-auto px-5 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h2 className="text-[24px] sm:text-4xl font-bold text-[#102A43] leading-[1.25] tracking-tight">
                HOW IT WORKS — 5 SIMPLE STEPS
              </h2>
            </div>

            <div className="mt-8 sm:mt-10 space-y-5">
              {STEPS.map((step) => (
                <div
                  key={step.stepNumber}
                  className="bg-white border border-[#E2E8F0] rounded-xl p-6 sm:p-8 flex flex-col sm:flex-row gap-3.5 sm:gap-8"
                >
                  <div className="sm:w-28 shrink-0">
                    <span
                      className="inline-block text-sm font-bold text-[#0D9488] tabular-nums"
                      style={{ fontFamily: 'var(--font-mono)' }}
                    >
                      {step.stepNumber}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-[19px] sm:text-xl font-bold text-[#102A43] leading-[1.3]">
                      {step.heading}
                    </h3>
                    <p className="mt-2.5 text-[17px] sm:text-lg text-[#475569] leading-[1.6]">
                      {step.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-white border border-[#E2E8F0] rounded-xl p-6 sm:p-8 space-y-4">
              <p className="text-[17px] sm:text-lg font-medium text-[#102A43] leading-[1.6]">
                Then we stay with you: market updates, buyer demand, farming guidance — and we start preparing your next season before you plant it.
              </p>
              <p className="pt-4 border-t border-[#E2E8F0] text-[17px] sm:text-base text-[#475569] leading-[1.6]">
                <span className="font-bold text-[#102A43]">One honest note:</span> registration does not guarantee an instant buyer match. Buyer connections depend on real demand, your produce, and market conditions. What registration guarantees is this — your market preparation starts today instead of on harvest morning.
              </p>
            </div>
          </div>
        </section>

        {/* 9. WHAT'S INCLUDED — THE FULL ADVANTAGE */}
        <section id="whats-included" className="bg-white py-14 sm:py-24">
          <div className="max-w-5xl mx-auto px-5 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h2 className="text-[24px] sm:text-4xl font-bold text-[#102A43] leading-[1.25] tracking-tight">
                WHAT&apos;S INCLUDED — THE FULL ADVANTAGE
              </h2>
            </div>

            {/* Desktop & Tablet Clean Table */}
            <div className="mt-10 hidden md:block overflow-hidden rounded-xl border border-[#E2E8F0]">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#F4F8F6] border-b border-[#E2E8F0]">
                    <th className="py-4 px-6 text-xs font-bold tracking-wider text-[#102A43]">
                      INCLUDED
                    </th>
                    <th className="py-4 px-6 text-xs font-bold tracking-wider text-[#102A43]">
                      WHAT IT DOES FOR YOU
                    </th>
                    <th className="py-4 px-6 text-xs font-bold tracking-wider text-[#102A43] text-right">
                      VALUE
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E2E8F0] bg-white">
                  {INCLUDED_ROWS.map((row) => (
                    <tr key={row.included} className="hover:bg-[#F4F8F6]/60 transition-colors">
                      <td className="py-4 px-6 text-base font-bold text-[#102A43] align-top w-1/3">
                        {row.included}
                      </td>
                      <td className="py-4 px-6 text-base text-[#475569] leading-[1.6] align-top">
                        {row.benefit}
                      </td>
                      <td
                        className="py-4 px-6 text-base font-semibold text-[#102A43] text-right align-top whitespace-nowrap tabular-nums"
                        style={{ fontFamily: 'var(--font-mono)' }}
                      >
                        {row.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr className="bg-[#F4F8F6] border-t border-[#E2E8F0]">
                    <td
                      colSpan={2}
                      className="py-5 px-6 text-base sm:text-lg font-bold text-[#102A43]"
                    >
                      TOTAL SERVICE VALUE
                    </td>
                    <td
                      className="py-5 px-6 text-lg sm:text-xl font-extrabold text-[#0D9488] text-right whitespace-nowrap tabular-nums"
                      style={{ fontFamily: 'var(--font-mono)' }}
                    >
                      ₦54,500
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>

            {/* Mobile Stacked Value List */}
            <div className="mt-8 md:hidden rounded-xl border border-[#E2E8F0] divide-y divide-[#E2E8F0] overflow-hidden">
              {INCLUDED_ROWS.map((row) => (
                <div key={row.included} className="p-5 sm:p-6 bg-white">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-[18px] font-bold text-[#102A43] leading-[1.35]">
                      {row.included}
                    </h3>
                    <span
                      className="text-[15px] font-bold text-[#0D9488] whitespace-nowrap shrink-0 tabular-nums pt-0.5"
                      style={{ fontFamily: 'var(--font-mono)' }}
                    >
                      {row.value}
                    </span>
                  </div>
                  <p className="mt-2.5 text-[17px] text-[#475569] leading-[1.6]">{row.benefit}</p>
                </div>
              ))}
              <div className="p-5 sm:p-6 bg-[#F4F8F6] flex items-center justify-between gap-4">
                <span className="text-[17px] font-bold text-[#102A43]">TOTAL SERVICE VALUE</span>
                <span
                  className="text-[19px] font-extrabold text-[#0D9488] whitespace-nowrap tabular-nums"
                  style={{ fontFamily: 'var(--font-mono)' }}
                >
                  ₦54,500
                </span>
              </div>
            </div>

            <div className="mt-8 rounded-xl bg-[#F4F8F6] border border-[#E2E8F0] p-6 sm:p-8 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div className="space-y-2.5 max-w-2xl">
                <p className="text-[20px] sm:text-2xl font-bold text-[#102A43] leading-[1.35]">
                  Today, registration and initial market-access support are FREE.
                </p>
                <p className="text-[17px] sm:text-base text-[#475569] leading-[1.6]">
                  We are building our first farmer network — and early farmers are joining at no registration cost. Any future service charges or third-party expenses (like actual transport hire) will be communicated and agreed with you before anything happens. No surprise deductions. Ever.
                </p>
              </div>
              <div className="shrink-0">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-lg bg-[#0F766E] text-white text-base font-semibold hover:bg-[#0D9488] transition-colors cursor-pointer whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0F766E]"
                >
                  Register Free Today
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* 12. URGENCY */}
        <section className="bg-[#F4F8F6] border-y border-[#E2E8F0] py-14 sm:py-24">
          <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-8">
            <h2 className="text-[24px] sm:text-4xl font-bold text-[#102A43] leading-[1.25] tracking-tight">
              THE HARVEST CLOCK IS ALREADY TICKING
            </h2>

            <div className="mt-6 space-y-4 text-[17px] sm:text-lg text-[#475569] leading-[1.6]">
              <p className="font-semibold text-[#102A43]">
                The biggest mistake farmers make is not selling badly.
              </p>
              <p className="font-semibold text-[#102A43]">
                It&apos;s thinking about the market only when the produce is ready.
              </p>
              <p>
                By harvest morning, the clock is against you: the produce is perishable, the fees are due, and the buyers who show up first know it. That&apos;s when prices are dictated — not negotiated.
              </p>
              <p className="pt-2 font-bold text-[#102A43]">
                Here&apos;s what changes when you register before harvest:
              </p>
            </div>

            <div className="mt-6 bg-white border border-[#E2E8F0] rounded-xl divide-y divide-[#E2E8F0]">
              {URGENCY_POINTS.map((point) => (
                <div key={point.lead} className="p-5 sm:p-6 flex items-start gap-4">
                  <span
                    className="mt-1.5 w-5 h-5 rounded-full bg-[#0D9488]/12 text-[#0D9488] flex items-center justify-center shrink-0"
                    aria-hidden="true"
                  >
                    <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                  </span>
                  <p className="text-[17px] sm:text-lg text-[#475569] leading-[1.6]">
                    <span className="font-bold text-[#102A43]">{point.lead}</span> — {point.detail}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 space-y-2.5">
              <p className="text-[17px] sm:text-lg text-[#475569] leading-[1.6]">
                Every season you wait is another harvest sold on panic instead of preparation.
              </p>
              <p className="text-[19px] sm:text-xl font-bold text-[#102A43] leading-[1.35]">
                Your harvest has a date. Your market preparation should start before it.
              </p>
            </div>
          </div>
        </section>

        {/* 13. THE GUARANTEE */}
        <section className="bg-white py-14 sm:py-24">
          <div className="max-w-5xl mx-auto px-5 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h2 className="text-[24px] sm:text-4xl font-bold text-[#102A43] leading-[1.25] tracking-tight">
                OUR TRANSPARENCY &amp; FARMER PROTECTION PROMISE
              </h2>
              <p className="mt-5 text-[17px] sm:text-lg text-[#475569] leading-[1.6]">
                We know why you&apos;re skeptical. You&apos;ve been promised before — by cooperatives, agents, schemes, and projects that arrived loudly and disappeared quietly.
              </p>
              <p className="mt-3.5 text-[19px] sm:text-xl font-bold text-[#102A43] leading-[1.35]">
                So we won&apos;t ask for your trust. We&apos;ll give you control instead.
              </p>
              <p className="mt-4 text-[17px] sm:text-lg font-medium text-[#475569] leading-[1.6]">
                Here is exactly what we stand behind:
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
              {GUARANTEE_POINTS.map((item) => (
                <div
                  key={item.lead}
                  className="bg-[#F4F8F6] border border-[#E2E8F0] rounded-xl p-5 sm:p-6 flex items-start gap-3.5"
                >
                  <span
                    className="mt-1 w-6 h-6 rounded-md bg-[#0D9488] text-white flex items-center justify-center shrink-0"
                    aria-hidden="true"
                  >
                    <Check className="w-4 h-4 stroke-[2.5]" />
                  </span>
                  <p className="text-[17px] sm:text-base text-[#475569] leading-[1.6]">
                    <span className="font-bold text-[#102A43]">{item.lead}</span> — {item.detail}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-9 sm:mt-10 rounded-xl border border-[#E2E8F0] bg-white p-6 sm:p-8 space-y-4">
              <h3 className="text-[20px] sm:text-2xl font-bold text-[#102A43] leading-[1.3]">
                And here is what we will never do — promise what we can&apos;t control.
              </h3>
              <p className="text-[17px] sm:text-lg text-[#475569] leading-[1.6]">
                We do not guarantee an instant buyer, a specific price, or that every harvest will sell. Anybody who promises you that is lying to you — ask the last scheme how theirs went.
              </p>
              <p className="text-[17px] sm:text-lg text-[#102A43] font-semibold leading-[1.6]">
                What we guarantee is the process: no money taken in secret, no produce moved without your understanding and written agreement, and no terms you haven&apos;t seen.
              </p>
              <p className="text-[17px] sm:text-lg text-[#475569] leading-[1.6]">
                Trust is not something we expect you to give us blindly. It is something we intend to earn — through our actions, transparency, and accountability.
              </p>
            </div>
          </div>
        </section>

        {/* 14. FAQ */}
        <section id="faq" className="bg-[#F4F8F6] border-y border-[#E2E8F0] py-14 sm:py-24">
          <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <h2 className="text-[24px] sm:text-4xl font-bold text-[#102A43] leading-[1.25] tracking-tight">
                YOUR QUESTIONS, ANSWERED STRAIGHT
              </h2>
              <button
                type="button"
                onClick={toggleAllFaqs}
                className="self-start sm:self-auto text-[15px] sm:text-sm font-semibold text-[#0F766E] hover:text-[#0D9488] underline underline-offset-4 cursor-pointer whitespace-nowrap shrink-0"
              >
                {allFaqsExpanded ? 'Collapse all' : 'Expand all'}
              </button>
            </div>

            <div className="mt-8 space-y-3.5">
              {FAQ_ITEMS.map((item, idx) => {
                const isOpen = openFaqs.has(idx);
                return (
                  <div
                    key={item.question}
                    className="bg-white border border-[#E2E8F0] rounded-xl overflow-hidden"
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(idx)}
                      aria-expanded={isOpen}
                      className="w-full px-5 sm:px-6 py-5 text-left flex items-center justify-between gap-4 hover:bg-[#F4F8F6]/50 transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-[#0D9488]"
                    >
                      <span className="text-[18px] sm:text-lg font-bold text-[#102A43] leading-[1.4]">
                        {item.question}
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 text-[#0D9488] shrink-0 transition-transform duration-200 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                        aria-hidden="true"
                      />
                    </button>
                    {isOpen && (
                      <div className="px-5 sm:px-6 pb-5 pt-3 text-[17px] sm:text-base text-[#475569] leading-[1.6] border-t border-[#E2E8F0]/70">
                        {item.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 15. FINAL CTA */}
        <section className="bg-white py-14 sm:py-24">
          <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-8">
            <div className="rounded-2xl bg-[#F4F8F6] border border-[#E2E8F0] p-6 sm:p-12">
              <h2 className="text-[24px] sm:text-4xl font-extrabold text-[#102A43] leading-[1.22] tracking-tight">
                Your Harvest Deserves More Than Whoever Shows Up First.
              </h2>

              <div className="mt-6 space-y-4 text-[17px] sm:text-lg text-[#475569] leading-[1.6]">
                <p>
                  You&apos;ve spent months growing it. The early mornings. The weather. The pests. The input costs. The waiting.
                </p>
                <p className="font-semibold text-[#102A43]">
                  Don&apos;t hand all of that to a farm-gate price you never chose.
                </p>
                <p>
                  Register with AgroVision Farm-to-Market Advantage™ today — free — and let your market preparation begin while your crop is still growing. Real buyers, researched and matched. Your produce pooled into buyer-sized volumes. Terms in writing before you commit anything. Transportation coordinated. Payment followed up to completion. A relationship that compounds season after season.
                </p>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <a
                  href={WHATSAPP_DEFAULT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-5 sm:px-6 py-4 rounded-lg bg-[#0F766E] text-white text-[15px] sm:text-base font-bold text-center hover:bg-[#0D9488] transition-colors sm:whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0F766E]"
                >
                  <MessageSquare className="w-5 h-5 shrink-0" aria-hidden="true" />
                  <span>REGISTER FREE ON WHATSAPP — CLICK HERE</span>
                </a>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-lg border border-[#E2E8F0] bg-white text-[#102A43] text-[15px] sm:text-base font-semibold hover:border-[#0D9488] transition-colors cursor-pointer sm:whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0D9488]"
                >
                  Or Register With Form
                </button>
              </div>

              <div className="mt-7 pt-6 border-t border-[#E2E8F0] space-y-3 text-[17px] sm:text-base text-[#102A43] leading-[1.6]">
                <p className="flex items-center gap-2.5 font-semibold">
                  <Phone className="w-4 h-4 text-[#0D9488] shrink-0" aria-hidden="true" />
                  <span>
                    Or call:{' '}
                    <a
                      href={`tel:${PHONE_DISPLAY}`}
                      className="text-[#0F766E] underline underline-offset-4 hover:text-[#0D9488]"
                    >
                      {PHONE_DISPLAY}
                    </a>
                  </span>
                </p>
                <p className="flex items-start sm:items-center gap-2.5 text-[#475569]">
                  <Tractor className="w-4 h-4 text-[#0D9488] shrink-0 mt-1.5 sm:mt-0" aria-hidden="true" />
                  <span>Our field representative can also register you in your community.</span>
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-[#E2E8F0] space-y-2.5">
                <p className="text-[19px] sm:text-lg font-bold text-[#102A43] leading-[1.35]">
                  From Farm to Market, Creating Better Opportunities for Every Farmer.
                </p>
                <p className="text-[17px] sm:text-base text-[#475569] leading-[1.6]">
                  Don&apos;t wait until your harvest is ready before thinking about where to sell it. Start today — while registration is free, and while there&apos;s still time to prepare.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Quiet Footer */}
      <footer className="bg-white border-t border-[#E2E8F0] py-10">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <p
              className="text-[17px] sm:text-base font-bold text-[#102A43]"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              AgroVision Farm-to-Market Advantage™
            </p>
            <p className="mt-1.5 text-[15px] sm:text-sm text-[#475569] leading-[1.6]">
              Market-access and produce-aggregation service for farmers in Nigeria.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[15px] sm:text-sm text-[#475569]">
            <a href="#the-problem" className="hover:text-[#102A43] transition-colors">
              The Problem
            </a>
            <a href="#how-it-works" className="hover:text-[#102A43] transition-colors">
              How It Works
            </a>
            <a href="#whats-included" className="hover:text-[#102A43] transition-colors">
              What&apos;s Included
            </a>
            <a href="#faq" className="hover:text-[#102A43] transition-colors">
              FAQ
            </a>
            <a
              href={`tel:${PHONE_DISPLAY}`}
              className="font-semibold text-[#0F766E] hover:text-[#0D9488]"
            >
              {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </footer>

      <RegistrationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
