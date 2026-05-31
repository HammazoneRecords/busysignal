export const SITE_SLUG = 'busy-signal-official';
export const ARTIST_NAME = 'Busy Signal';

export type PriceTier = { key: string; label: string };
export type Product = { id: string; name: string; desc: string; variants: string[]; priceTiers: PriceTier[] };

const MERCH_TIERS: PriceTier[] = [
  { key: 't1', label: '$30 – $50' },
  { key: 't2', label: '$50 – $80' },
  { key: 't3', label: '$80+' },
  { key: 'any', label: "Price doesn't matter" },
];

export const PRODUCTS: Product[] = [
  {
    id: 'turf-crewneck-navy',
    name: 'TURF Crewneck',
    desc: 'Navy · Busy Signal TURF print · premium fleece',
    variants: ['S', 'M', 'L', 'XL', 'XXL'],
    priceTiers: MERCH_TIERS,
  },
  {
    id: 'turf-tee-red',
    name: 'TURF Tee',
    desc: 'Red · Busy Signal TURF print · premium cotton',
    variants: ['S', 'M', 'L', 'XL', 'XXL'],
    priceTiers: MERCH_TIERS,
  },
  {
    id: 'turf-tee-oatmeal',
    name: 'TURF Tee',
    desc: 'Oatmeal · Busy Signal TURF print · premium cotton',
    variants: ['S', 'M', 'L', 'XL', 'XXL'],
    priceTiers: MERCH_TIERS,
  },
];

const BAG_TIERS: PriceTier[] = [
  { key: 't1', label: '$50 – $100' },
  { key: 't2', label: '$100 – $200' },
  { key: 't3', label: '$200+' },
  { key: 'any', label: "Price doesn't matter" },
];

export const BAG_PRODUCTS: Product[] = [
  {
    id: 'busy-suitcase-set',
    name: 'Busy Signal Suitcase Set',
    desc: 'Premium hardshell carry-on + check-in set — city map print',
    variants: ['Carry-On', 'Check-In', 'Set (both)'],
    priceTiers: BAG_TIERS,
  },
  {
    id: 'busy-duffel-set',
    name: 'Do Not Disturb Duffel',
    desc: 'Travel duffel + gym bag set — Busy Signal edition',
    variants: ['Duffel only', 'Gym bag only', 'Set (both)'],
    priceTiers: BAG_TIERS,
  },
  {
    id: 'busy-backpack',
    name: 'Busy Signal Backpack',
    desc: 'Premium travel backpack — city map print',
    variants: ['One size'],
    priceTiers: BAG_TIERS,
  },
];

export function getProduct(id: string): Product | undefined {
  return [...PRODUCTS, ...BAG_PRODUCTS].find(p => p.id === id);
}
