export const intakeUrl             = 'https://survey.legal/zCRRwKXfujFx';
export const donateUrl             = 'https://www.paypal.com/donate/?hosted_button_id=EB6R3LFLNHMMU';
export const attorneyVolunteerUrl  = 'https://docs.google.com/forms/d/e/1FAIpQLSf8oDvl6n-IhZoJbW6sy2wNis_nLpM-InAAxj5Qt2-8KXkB6Q/viewform';
export const communityVolunteerUrl = 'https://forms.office.com/pages/responsepage.aspx?id=uxcDJQUO0UKJt7hG6DxFEFfa_6f4QLFAoIcuvauSyE9UMUlSVTBTRFhBWjI5MFExNUVTQ0tCMVJORS4u&route=shorturl';
// TODO: verify this is the correct form — the ID matches communityVolunteerUrl above, likely a copy-paste error
export const internUrl             = 'https://forms.office.com/Pages/ResponsePage.aspx?id=uxcDJQUO0UKJt7hG6DxFEFfa_6f4QLFAoIcuvauSyE9UMUlSVTBTRFhBWjI5MFExNUVTQ0tCMVJORS4u';
export const careersApplyUrl       = 'https://wkf.ms/4dOPWWK';

export const quickExitUrl = 'https://weather.com';

// Real site stats — update here to propagate to hero and donate page.
export const siteStats = {
  clientsServed:  '2,000+',
  countiesServed: '16',
  yearsServing:   '40+',
};

// Set quote + attribution to display a testimonial; leave null to hide the block.
export const testimonials: Record<string, { quote: string; attribution: string } | null> = {
  client:    null,
  attorney:  null,
  community: null,
};
