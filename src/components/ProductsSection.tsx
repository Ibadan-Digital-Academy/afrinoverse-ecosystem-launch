import React from 'react';
import {ArrowRight} from 'lucide-react';
import {PRODUCTS_DATA} from '../data/afrinoverseData';
import {ProductItem} from '../types';

interface ProductsSectionProps { onSelectProduct: (product: ProductItem) => void }

const digitalToolPro: ProductItem = {
  id: 'digital-toolpro', name: 'Digital ToolPro', badge: 'PRODUCTIVITY & TRANSFORMATION', version: 'DIGITAL PRODUCTIVITY', category: 'Business productivity and workflow solutions', metrics: 'Operational efficiency', status: 'Product presentation', imageUrl: '/favicon.jpg', imageAlt: 'Afrinoverse mark',
  description: 'Digital productivity and business solutions designed to improve operational efficiency, workflow automation and digital transformation.',
  features: [{title: 'Workflow automation', description: 'Simplify recurring work and operational handoffs.'}, {title: 'Digital transformation', description: 'Help organisations move from manual processes to practical digital tools.'}],
  highlights: ['Operational workflow automation', 'Business productivity tools', 'Practical digital transformation support'],
};

const products = [PRODUCTS_DATA[0], PRODUCTS_DATA[1], digitalToolPro];

export const ProductsSection: React.FC<ProductsSectionProps> = ({onSelectProduct}) => (
  <section id="products" className="scroll-mt-20 bg-surface-container-low py-section-lg">
    <div className="mx-auto max-w-max-container px-margin-mobile md:px-margin-tablet lg:px-margin-desktop">
      <div className="max-w-3xl">
        <span className="font-kicker-badge text-kicker-badge text-secondary">OUR PRODUCTS</span>
        <h2 className="mt-4 font-headline-xl text-headline-xl text-on-surface">Practical technology for African industries.</h2>
      </div>
      <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
        {products.map((product) => (
          <article key={product.id} className="flex flex-col rounded-3xl bg-surface-container-lowest p-7 shadow-sm">
            <div className="flex h-40 items-center justify-center overflow-hidden rounded-2xl bg-surface-container">
              <img src={product.imageUrl} alt={product.imageAlt} className={product.id === 'digital-toolpro' ? 'h-20 w-20 object-contain' : 'h-full w-full object-cover'} />
            </div>
            <span className="mt-6 font-kicker-badge text-kicker-badge text-secondary">{product.badge}</span>
            <h3 className="mt-3 font-headline-md text-headline-md text-on-surface">{product.name}</h3>
            <p className="mt-4 flex-1 font-body-md text-body-md text-on-surface-variant">
              {product.id === 'fairwaypro' ? 'Golf club management software for memberships, tee-time bookings, billing, events and reporting.' : product.id === 'stitchpro' ? 'A platform supporting vocational skills, creative entrepreneurship, fashion innovation and order workflows.' : product.description}
            </p>
            <button type="button" onClick={() => onSelectProduct(product)} className="mt-7 inline-flex w-fit items-center font-label-md text-label-md text-secondary underline underline-offset-4">
              Explore {product.name} <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </article>
        ))}
      </div>
    </div>
  </section>
);
