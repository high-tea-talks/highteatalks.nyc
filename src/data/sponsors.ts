type Sponsor = { name?: string; href?: string; tier?: number };

interface Sponsors extends Array<Sponsor> {
  darjeeling?: Sponsor[];
  silverTips?: Sponsor[];
  matcha?: Sponsor[];
  lavendar?: Sponsor[];
}

export const sponsors: Sponsors = [
  {
    name: 'Skillshare',
    href: 'https://www.skillshare.com/careers',
    tier: 0,
  },
  {
    name: 'Vimeo',
    href: 'https://vimeo.com/jobs',
    tier: 0,
  },
  {
    name: 'The Wing',
    href: 'https://www.the-wing.com/careers/',
    tier: 1,
  },
];

const commitments = {
  Darjeeling: 9000,
  Matcha: 300,
  'Silver Tips': 3000,
  Lavendar: 30,
};

function registerTier(thisTier, name) {
  const registered = sponsors.filter(({ tier }) => tier >= thisTier);
  (registered as any).name = name;
  (registered as any).commitment = commitments[name];
  return registered;
}

sponsors.darjeeling = registerTier(4, 'Darjeeling');
sponsors.silverTips = registerTier(2, 'Silver Tips');
sponsors.matcha = registerTier(1, 'Matcha');
sponsors.lavendar = registerTier(3, 'Lavendar');
