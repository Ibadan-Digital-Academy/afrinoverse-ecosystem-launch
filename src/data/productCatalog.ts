import {PRODUCTS_DATA} from './afrinoverseData';
import {ProductItem} from '../types';

const digitalToolPro: ProductItem = {
  id: 'digital-toolpro',
  name: 'Digital ToolPro',
  websiteUrl: 'https://digitaltools.ng/',
  badge: 'PRODUCTIVITY & TRANSFORMATION',
  version: 'DIGITAL PRODUCTIVITY',
  category: 'Business productivity and workflow solutions',
  metrics: 'Operational efficiency',
  status: 'Product presentation',
  imageUrl: '/favicon.jpg',
  imageAlt: 'Afrinoverse mark',
  description:
    'Digital productivity and business solutions designed to improve operational efficiency, workflow automation and digital transformation.',
  features: [
    {
      title: 'Workflow automation',
      description: 'Simplify recurring work and operational handoffs.',
    },
    {
      title: 'Digital transformation',
      description: 'Help organisations move from manual processes to practical digital tools.',
    },
  ],
  highlights: [
    'Operational workflow automation',
    'Business productivity tools',
    'Practical digital transformation support',
  ],
};

export const PRODUCT_CATALOG: ProductItem[] = [
  PRODUCTS_DATA[0],
  {...PRODUCTS_DATA[1], websiteUrl: 'https://stitchpro.com.ng/'},
  digitalToolPro,
];
