'use client';
import { useState, useRef, useEffect } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const faqs = [
  { q: 'What insurance does a residential property owner need?', a: 'At minimum, most property owners need property insurance, general liability, and loss of rental income coverage. Depending on your property type and location, you may also need flood insurance, earthquake coverage, umbrella liability, workers compensation, and environmental liability. We help you identify exactly what your properties require.' },
  { q: 'Do you insure both individual landlords and large portfolios?', a: 'Yes. We work with individual landlords owning a single rental property as well as institutional investors and management companies with hundreds or thousands of units. Our coverage programs scale to match the size and complexity of each portfolio.' },
  { q: 'Can you help with HOA and condominium association insurance?', a: 'Absolutely. We understand the master policy requirements, governing document provisions, and state statutory obligations that HOAs and condo associations must meet. We design programs that comply with all applicable requirements while providing comprehensive protection.' },
  { q: 'How quickly can I get a quote?', a: 'In most cases, we can provide an initial quote within 24 to 48 hours of receiving your completed property information. For more complex accounts or large portfolios, the process may take slightly longer to ensure we explore the best options across our carrier network.' },
  { q: 'Do you offer flood and earthquake coverage?', a: 'Yes. We provide NFIP flood insurance, private flood alternatives, excess flood coverage, and earthquake insurance through specialized carriers. These coverages are excluded from standard property policies and must be addressed separately.' },
  { q: 'Can coverage be customized for my specific property?', a: 'Every program we place is built around your specific property characteristics, including building type, age, construction, location, amenities, and tenant profile. We do not sell generic packages — we design coverage that fits your actual risk.' },
];

function FaqItem({ faq, isOpen, onClick }) {
  const contentRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (isOpen && contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [isOpen]);

  return (
    <div className="border-2 border-ash rounded-[2rem] overflow-hidden" style={{ background: isOpen ? 'rgba(255,255,255,0.5)' : 'transparent', transition: 'background 0.5s ease' }}>
      <button onClick={onClick} className="w-full flex items-center justify-between p-6 text-left group cursor-pointer">
        <span className="text-brand font-bold pr-8 group-hover:text-blue-dark" style={{ fontSize: '1rem', transition: 'color 0.2s' }}>{faq.q}</span>
        <div
          className="w-8 h-8 rounded-full flex items-center justify-center shrink-0"
          style={{
            backgroundColor: isOpen ? '#ffbf3b' : '#25475e',
            transition: 'all 0.5s ease',
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0)',
          }}
        >
          <svg className="w-4 h-4" style={{ color: isOpen ? '#25475e' : '#f4f4ec' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>
      <div
        ref={contentRef}
        style={{
          height: isOpen ? height + 'px' : '0px',
          overflow: 'hidden',
          transition: 'height 0.5s ease',
        }}
      >
        <p className="text-brand/70 px-6 pb-6" style={{ fontSize: '0.9rem', lineHeight: '1.6' }}>{faq.a}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const headerRef = useScrollAnimation();
  const listRef = useScrollAnimation(0.05);

  return (
    <section id="faq" className="bg-stone" style={{ padding: '7rem 0' }}>
      <div className="max-w-[900px] mx-auto px-[60px] max-lg:px-6 max-md:px-4">
        <div ref={headerRef} className="text-center mb-14 fade-in-view">
          <p className="text-blue uppercase tracking-[0.15em] font-bold mb-4" style={{ fontSize: '0.85rem' }}>Frequently Asked Questions</p>
          <h2 className="text-brand font-bold leading-[1.3] tracking-tight" style={{ fontSize: 'clamp(2.2rem, 4vw, 2.6rem)' }}>
            Common Questions About Habitational Insurance
          </h2>
        </div>

        <div ref={listRef} className="space-y-4 stagger-children">
          {faqs.map((faq, i) => (
            <FaqItem key={i} faq={faq} isOpen={openIndex === i} onClick={() => setOpenIndex(openIndex === i ? null : i)} />
          ))}
        </div>
      </div>
    </section>
  );
}
