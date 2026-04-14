import CoverageNeedsContent from './CoverageNeedsContent';

export const metadata = {
  title: 'Coverage Needs Assessment Tool',
  description: 'Find out exactly what insurance coverage your residential property needs. Select your property type to see recommended coverages, minimum limits, and key considerations.',
  alternates: {
    canonical: 'https://alkemeins.com/habitational/tools/coverage-needs-assessment/',
  },
  openGraph: {
    title: 'Coverage Needs Assessment Tool | ALKEME Insurance Services',
    description: 'Interactive tool to determine your habitational insurance requirements based on property type.',
    url: 'https://alkemeins.com/habitational/tools/coverage-needs-assessment/',
    type: 'website',
  },
};

export default function CoverageNeedsPage() {
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebApplication',
      name: 'Coverage Needs Assessment Tool',
      url: 'https://alkemeins.com/habitational/tools/coverage-needs-assessment/',
      applicationCategory: 'BusinessApplication',
      provider: { '@type': 'InsuranceAgency', name: 'ALKEME Insurance Services', url: 'https://alkemeins.com' },
      description: 'Interactive tool to determine your habitational insurance requirements by property type.',
    },
  ];

  return (
    <>
      {jsonLd.map((ld, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      ))}
      <CoverageNeedsContent />
    </>
  );
}
