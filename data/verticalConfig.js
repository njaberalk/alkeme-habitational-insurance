export const verticalConfig = {
  id: 'habitational', label: 'Habitational Insurance',
  heading: 'Get a Habitational Insurance Quote',
  subtext: 'Answer a few quick questions and our habitational specialists will design coverage for your properties.',
  businessTypes: [
    { value: 'apartment-complex', label: 'Apartment Complex' },
    { value: 'condo', label: 'Condominium' },
    { value: 'hoa', label: 'HOA' },
    { value: 'student-housing', label: 'Student Housing' },
    { value: 'mixed-use', label: 'Mixed-Use Property' },
    { value: 'vacation-rental', label: 'Vacation Rental' },
  ],
  customQuestions: [
    { id: 'property_type', label: 'What type of property?', type: 'select', options: ['Apartment Complex', 'Condo', 'HOA', 'Student Housing', 'Mixed-Use', 'Vacation Rental'] },
    { id: 'unit_count', label: 'How many units?', type: 'select', options: ['1-10', '11-50', '51-100', '101-500', '500+'] },
    { id: 'ownership', label: 'Owned or managed for others?', type: 'select', options: ['Owned', 'Property management', 'Both'] },
  ],
  coverageOptions: ['Property Insurance', 'General Liability', 'Umbrella / Excess', 'Workers\' Compensation', 'Flood Insurance', 'Earthquake Coverage', 'Builders Risk', 'Environmental Liability', 'Loss of Rental Income', 'Not Sure \u2014 Help Me Decide'],
};
