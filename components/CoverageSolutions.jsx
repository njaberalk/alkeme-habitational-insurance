'use client';
import Link from 'next/link';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const coverages = [
  { title: 'Property Insurance', slug: 'property-insurance', desc: 'Building coverage, replacement cost, and tenant improvement protection for your residential real estate investment.' },
  { title: 'General Liability', slug: 'general-liability', desc: 'Premises liability protection covering slip-and-fall injuries, common area incidents, and visitor accidents.' },
  { title: 'Umbrella / Excess Liability', slug: 'umbrella-excess', desc: 'Additional liability limits above your underlying policies for catastrophic claims protection.' },
  { title: "Workers' Compensation", slug: 'workers-compensation', desc: 'Wage replacement and medical benefits for maintenance staff, property managers, and leasing agents.' },
  { title: 'Commercial Auto', slug: 'commercial-auto', desc: 'Coverage for maintenance vehicles, shuttle buses, and company cars used in property operations.' },
  { title: 'Flood Insurance', slug: 'flood-insurance', desc: 'NFIP and private market flood protection for buildings in all flood zones.' },
  { title: 'Earthquake Coverage', slug: 'earthquake-coverage', desc: 'Seismic damage protection for buildings in earthquake-prone regions.' },
  { title: "Builders Risk", slug: 'builders-risk', desc: 'Coverage for new construction, major renovations, and tenant improvement projects.' },
  { title: 'Environmental Liability', slug: 'environmental-liability', desc: 'Protection against mold, asbestos, lead paint, and underground storage tank remediation costs.' },
  { title: 'Loss of Rental Income', slug: 'loss-of-rental-income', desc: 'Business interruption coverage replacing rent lost when covered damage makes units uninhabitable.' },
];

export default function CoverageSolutions() {
  const headerRef = useScrollAnimation();
  const gridRef = useScrollAnimation(0.05);

  return (
    <section id="coverage" className="bg-brand" style={{ padding: '8rem 0' }}>
      <div className="max-w-[68rem] mx-auto px-[60px] max-lg:px-6 max-md:px-4">
        <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-16 fade-in-view">
          <p className="text-blue uppercase tracking-[0.15em] font-bold mb-4" style={{ fontSize: '0.85rem' }}>Coverage Solutions</p>
          <h2 className="text-stone font-bold leading-[1.3] tracking-tight mb-5" style={{ fontSize: 'clamp(2.2rem, 4vw, 2.6rem)' }}>Comprehensive Coverage for Every Property</h2>
          <p className="text-cream font-light" style={{ lineHeight: '22px' }}>From building protection to liability defense, we provide the coverage lines that keep your properties and operations secure.</p>
        </div>
        <div ref={gridRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 stagger-children">
          {coverages.map((item) => (
            <Link key={item.title} href={`/coverage/${item.slug}/`} className="block border-2 border-ash/30 rounded-[2rem] p-8 group no-underline" style={{ background: 'rgba(255,255,255,0.04)', transition: 'all 0.24s' }}>
              <h3 className="text-stone font-bold mb-3 group-hover:text-gold" style={{ fontSize: '1.25rem', lineHeight: '1.5', transition: 'color 0.24s' }}>{item.title}</h3>
              <p className="text-cream font-light" style={{ fontSize: '0.85rem', lineHeight: '22px' }}>{item.desc}</p>
              <span className="text-gold text-xs font-semibold uppercase tracking-[0.16em] mt-4 inline-block opacity-0 group-hover:opacity-100" style={{ transition: 'opacity 0.24s' }}>Learn More &rarr;</span>
            </Link>
          ))}
        </div>
        <div className="text-center mt-14">
          <Link href="/#contact" className="inline-flex items-center justify-center border-2 border-gold bg-gold text-brand text-center uppercase tracking-[0.16em] rounded-[2rem] font-semibold hover:border-stone hover:bg-stone hover:text-brand no-underline" style={{ padding: '0.8rem 1.8rem 0.7rem', fontSize: '0.75rem', lineHeight: '2', transition: 'all 0.24s' }}>
            Discuss Your Coverage Needs
          </Link>
        </div>
      </div>
    </section>
  );
}
