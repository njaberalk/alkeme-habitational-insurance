// Cross-linking maps for dense internal linking
// Coverage → which industries commonly need this coverage
export const coverageToIndustries = {
  'property-insurance': ['multifamily-complexes', 'luxury-condominiums', 'homeowners-associations', 'single-family-developments'],
  'general-liability': ['multifamily-complexes', 'property-management', 'senior-living-communities', 'mixed-use-properties'],
  'umbrella-excess': ['luxury-condominiums', 'multifamily-complexes', 'senior-living-communities', 'mixed-use-properties'],
  'workers-compensation': ['property-management', 'multifamily-complexes', 'senior-living-communities'],
  'commercial-auto': ['property-management', 'multifamily-complexes', 'student-housing'],
  'flood-insurance': ['multifamily-complexes', 'single-family-developments', 'vacation-rentals', 'affordable-housing'],
  'earthquake-coverage': ['luxury-condominiums', 'multifamily-complexes', 'homeowners-associations'],
  'builders-risk': ['single-family-developments', 'multifamily-complexes', 'mixed-use-properties'],
  'environmental-liability': ['affordable-housing', 'senior-living-communities', 'multifamily-complexes'],
  'loss-of-rental-income': ['multifamily-complexes', 'single-family-developments', 'vacation-rentals', 'student-housing'],
};

// Coverage → which resources are most relevant
export const coverageToResources = {
  'property-insurance': ['habitational-insurance-cost', 'property-insurance-guide', 'habitational-insurance-glossary'],
  'general-liability': ['landlord-liability-guide', 'habitational-insurance-cost', 'habitational-insurance-glossary'],
  'umbrella-excess': ['landlord-liability-guide', 'habitational-insurance-cost'],
  'workers-compensation': ['habitational-insurance-cost', 'habitational-insurance-glossary'],
  'commercial-auto': ['habitational-insurance-cost', 'habitational-insurance-glossary'],
  'flood-insurance': ['flood-insurance-guide', 'habitational-insurance-cost', 'property-insurance-guide'],
  'earthquake-coverage': ['property-insurance-guide', 'habitational-insurance-cost'],
  'builders-risk': ['habitational-insurance-cost', 'property-insurance-guide'],
  'environmental-liability': ['landlord-liability-guide', 'habitational-insurance-glossary'],
  'loss-of-rental-income': ['habitational-insurance-cost', 'property-insurance-guide', 'habitational-claims-guide'],
};

// Industry → top states for that industry
export const industryToStates = {
  'luxury-condominiums': ['florida', 'new-york', 'california', 'massachusetts', 'colorado'],
  'multifamily-complexes': ['texas', 'california', 'florida', 'new-york', 'georgia'],
  'student-housing': ['texas', 'california', 'florida', 'pennsylvania', 'ohio'],
  'senior-living-communities': ['florida', 'california', 'texas', 'pennsylvania', 'new-york'],
  'mixed-use-properties': ['new-york', 'california', 'illinois', 'massachusetts', 'washington'],
  'homeowners-associations': ['florida', 'california', 'texas', 'colorado', 'arizona'],
  'property-management': ['texas', 'california', 'florida', 'new-york', 'illinois'],
  'single-family-developments': ['texas', 'florida', 'georgia', 'north-carolina', 'arizona'],
  'affordable-housing': ['california', 'new-york', 'texas', 'illinois', 'pennsylvania'],
  'vacation-rentals': ['florida', 'california', 'colorado', 'tennessee', 'south-carolina'],
};

// Industry → relevant resources
export const industryToResources = {
  'luxury-condominiums': ['habitational-insurance-cost', 'hoa-insurance-guide', 'property-insurance-guide'],
  'multifamily-complexes': ['habitational-insurance-cost', 'property-insurance-guide', 'landlord-liability-guide'],
  'student-housing': ['habitational-insurance-cost', 'tenant-liability-guide', 'landlord-liability-guide'],
  'senior-living-communities': ['habitational-insurance-cost', 'landlord-liability-guide', 'habitational-claims-guide'],
  'mixed-use-properties': ['habitational-insurance-cost', 'property-insurance-guide', 'certificate-of-insurance-guide'],
  'homeowners-associations': ['hoa-insurance-guide', 'habitational-insurance-cost', 'habitational-insurance-glossary'],
  'property-management': ['certificate-of-insurance-guide', 'landlord-liability-guide', 'habitational-insurance-cost'],
  'single-family-developments': ['habitational-insurance-cost', 'property-insurance-guide', 'tenant-liability-guide'],
  'affordable-housing': ['habitational-insurance-cost', 'property-insurance-guide', 'habitational-claims-guide'],
  'vacation-rentals': ['habitational-insurance-cost', 'landlord-liability-guide', 'flood-insurance-guide'],
};
