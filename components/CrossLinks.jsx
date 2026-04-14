'use client';
import Link from 'next/link';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export function RelatedIndustries({ slugs, title = 'Industries That Need This Coverage' }) {
  const ref = useScrollAnimation();
  if (!slugs?.length) return null;

  const industryNames = {
    'luxury-condominiums': 'Luxury Condominiums', 'multifamily-complexes': 'Multifamily Complexes', 'student-housing': 'Student Housing',
    'senior-living-communities': 'Senior Living', 'mixed-use-properties': 'Mixed-Use Properties', 'homeowners-associations': 'HOA Insurance',
    'property-management': 'Property Management', 'single-family-developments': 'Single-Family Rentals', 'affordable-housing': 'Affordable Housing', 'vacation-rentals': 'Vacation Rentals',
  };

  return (
    <div ref={ref} className="bg-stone fade-in-view" style={{ padding: '5rem 0' }}>
      <div className="max-w-[68rem] mx-auto px-[60px] max-lg:px-6 max-md:px-4">
        <h2 className="text-brand font-bold leading-[1.3] tracking-tight mb-6" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.2rem)' }}>{title}</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {slugs.map(slug => (
            <Link key={slug} href={`/industries/${slug}/`} className="block border-2 border-ash rounded-[2rem] p-5 group no-underline hover:border-blue-dark text-center" style={{ transition: 'all 0.24s' }}>
              <h3 className="text-brand font-bold group-hover:text-blue-dark" style={{ fontSize: '1rem', transition: 'color 0.24s' }}>{industryNames[slug] || slug}</h3>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export function RelatedResourceLinks({ slugs, title = 'Helpful Resources' }) {
  const ref = useScrollAnimation();
  if (!slugs?.length) return null;

  const resourceNames = {
    'habitational-insurance-cost': 'How Much Does Habitational Insurance Cost?',
    'property-insurance-guide': 'Property Insurance Guide',
    'flood-insurance-guide': 'Flood Insurance Guide',
    'landlord-liability-guide': 'Landlord Liability Guide',
    'hoa-insurance-guide': 'HOA Insurance Guide',
    'tenant-liability-guide': 'Tenant Liability & Renters Insurance',
    'certificate-of-insurance-guide': 'Certificate of Insurance Guide',
    'habitational-claims-guide': 'Claims Guide',
    'habitational-insurance-glossary': 'Insurance Glossary',
  };

  return (
    <div ref={ref} className="bg-brand fade-in-view" style={{ padding: '4rem 0' }}>
      <div className="max-w-[68rem] mx-auto px-[60px] max-lg:px-6 max-md:px-4">
        <h2 className="text-stone font-bold mb-6" style={{ fontSize: '1.3rem' }}>{title}</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {slugs.map(slug => (
            <Link key={slug} href={`/resources/${slug}/`} className="block border border-ash/20 rounded-[2rem] p-5 group no-underline hover:border-gold/30" style={{ transition: 'all 0.24s' }}>
              <span className="text-blue uppercase tracking-[0.12em] font-bold block mb-1" style={{ fontSize: '0.6rem' }}>Guide</span>
              <span className="text-stone font-bold group-hover:text-gold block" style={{ fontSize: '0.9rem', transition: 'color 0.24s' }}>{resourceNames[slug] || slug} &rarr;</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export function TopStates({ slugs, title = 'Top States' }) {
  const ref = useScrollAnimation();
  if (!slugs?.length) return null;

  const stateNames = {
    'texas': 'Texas', 'california': 'California', 'florida': 'Florida', 'georgia': 'Georgia',
    'illinois': 'Illinois', 'ohio': 'Ohio', 'pennsylvania': 'Pennsylvania', 'new-york': 'New York',
    'new-jersey': 'New Jersey', 'massachusetts': 'Massachusetts', 'colorado': 'Colorado',
    'washington': 'Washington', 'arizona': 'Arizona', 'tennessee': 'Tennessee',
    'north-carolina': 'North Carolina', 'south-carolina': 'South Carolina',
    'north-dakota': 'North Dakota', 'indiana': 'Indiana',
  };

  return (
    <div ref={ref} className="bg-stone fade-in-view" style={{ padding: '4rem 0' }}>
      <div className="max-w-[68rem] mx-auto px-[60px] max-lg:px-6 max-md:px-4">
        <h2 className="text-brand font-bold mb-6" style={{ fontSize: '1.3rem' }}>{title}</h2>
        <div className="flex flex-wrap gap-3">
          {slugs.map(slug => (
            <Link key={slug} href={`/states/${slug}/`} className="border-2 border-ash rounded-[2rem] px-5 py-2 text-brand font-semibold hover:border-blue-dark hover:text-blue-dark no-underline" style={{ fontSize: '0.85rem', transition: 'all 0.24s' }}>
              {stateNames[slug] || slug}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export function CitiesInState({ stateSlug, stateName }) {
  const ref = useScrollAnimation();
  return null;
}
