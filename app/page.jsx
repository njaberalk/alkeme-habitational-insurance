import HomeContent from './HomeContent';

export const metadata = {
  title: 'Habitational Insurance Solutions',
  description: 'ALKEME Insurance Services provides specialized habitational insurance for apartment buildings, condominiums, rental properties, and property management companies across all 50 states.',
  openGraph: {
    title: 'Habitational Insurance | ALKEME Insurance Services',
    description: 'Specialized habitational insurance for apartment buildings, condos, and rental properties across all 50 states.',
    url: 'https://alkemeins.com/habitational/',
  },
};

export default function HomePage() {
  return (
    <>
      <meta name="author" content="ALKEME Insurance Services" />
      <meta property="article:published_time" content="2025-06-01T00:00:00Z" />
      <meta property="article:modified_time" content="2026-04-01T00:00:00Z" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'InsuranceAgency',
            name: 'ALKEME Insurance Services',
            url: 'https://alkemeins.com',
            telephone: '+18559255363',
            email: 'info@alkemeins.com',
            description: 'ALKEME Insurance Services provides specialized habitational insurance solutions for apartment buildings, condominiums, rental properties, and property management companies across all 50 states.',
            areaServed: { '@type': 'Country', name: 'United States' },
            parentOrganization: { '@type': 'Organization', name: 'ALKEME Insurance Services', url: 'https://alkemeins.com' },
            foundingDate: '2003',
            numberOfEmployees: { '@type': 'QuantitativeValue', value: 100 },
            knowsAbout: ['Habitational Insurance', 'Apartment Building Insurance', 'Condominium Insurance', 'Landlord Insurance'],
            hasCredential: { '@type': 'EducationalOccupationalCredential', credentialCategory: 'Professional License', name: 'Licensed Insurance Brokerage' },
            serviceType: ['Habitational Insurance', 'Apartment Building Insurance', 'Condominium Insurance', 'Rental Property Insurance', 'Property Management Insurance', 'HOA Insurance', 'Flood Insurance'],
            citation: { '@type': 'CreativeWork', name: 'Insurance Information Institute', url: 'https://www.iii.org' },
            about: { '@type': 'Thing', name: 'Habitational Insurance' },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              { '@type': 'Question', name: 'What insurance does a residential property owner need?', acceptedAnswer: { '@type': 'Answer', text: 'At minimum, most property owners need property insurance, general liability, and loss of rental income coverage. Depending on your property type and location, you may also need flood insurance, earthquake coverage, umbrella liability, workers compensation, and environmental liability.' } },
              { '@type': 'Question', name: 'Do you insure both individual landlords and large portfolios?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. We work with individual landlords owning a single rental property as well as institutional investors and management companies with hundreds or thousands of units.' } },
              { '@type': 'Question', name: 'Can you help with HOA and condominium association insurance?', acceptedAnswer: { '@type': 'Answer', text: 'Absolutely. We understand master policy requirements, governing document provisions, and state statutory obligations that HOAs and condo associations must meet.' } },
              { '@type': 'Question', name: 'How quickly can I get a quote?', acceptedAnswer: { '@type': 'Answer', text: 'In most cases, we can provide an initial quote within 24 to 48 hours of receiving your completed property information.' } },
              { '@type': 'Question', name: 'Do you offer flood and earthquake coverage?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. We provide NFIP flood insurance, private flood alternatives, excess flood coverage, and earthquake insurance through specialized carriers.' } },
              { '@type': 'Question', name: 'Can coverage be customized for my specific property?', acceptedAnswer: { '@type': 'Answer', text: 'Every program we place is built around your specific property characteristics. We do not sell generic packages \u2014 we design coverage that fits your actual risk.' } },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Habitational Insurance Solutions',
            datePublished: '2025-06-01',
            dateModified: '2026-04-01',
            author: { '@type': 'Organization', name: 'ALKEME Insurance Services', url: 'https://alkemeins.com' },
            publisher: { '@type': 'Organization', name: 'ALKEME Insurance Services', url: 'https://alkemeins.com' },
          }),
        }}
      />
      <HomeContent />
    </>
  );
}
