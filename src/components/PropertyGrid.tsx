import PropertyCard from './PropertyCard';

const mockProperties = [
  {
    id: '1',
    title: 'Oceanfront Villa with Infinity Pool',
    location: 'Malibu, California',
    price: 850,
    rating: 4.9,
    reviewCount: 124,
    images: [
      'https://images.unsplash.com/photo-1705672354908-a068661bc81d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop&auto=format'
    ],
    amenities: ['Ocean View', 'Infinity Pool', 'WiFi', 'Kitchen', 'Parking'],
    type: 'Villa',
    isNew: true
  },
  {
    id: '2',
    title: 'Minimalist Beachfront Cabin',
    location: 'Big Sur, California',
    price: 425,
    rating: 4.8,
    reviewCount: 89,
    images: [
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&h=600&fit=crop&auto=format'
    ],
    amenities: ['Beach Access', 'Fireplace', 'WiFi', 'Hot Tub'],
    type: 'Cabin'
  },
  {
    id: '3',
    title: 'Glass House with Ocean Panorama',
    location: 'Monterey Bay, California',
    price: 675,
    rating: 4.9,
    reviewCount: 203,
    images: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop&auto=format'
    ],
    amenities: ['Floor-to-Ceiling Windows', 'Modern Kitchen', 'WiFi', 'Deck'],
    type: 'Modern House'
  },
  {
    id: '4',
    title: 'Scandinavian Seaside Retreat',
    location: 'Half Moon Bay, California',
    price: 395,
    rating: 4.7,
    reviewCount: 67,
    images: [
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&h=600&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop&auto=format'
    ],
    amenities: ['Scandinavian Design', 'Beach Access', 'WiFi', 'Garden'],
    type: 'House'
  },
  {
    id: '5',
    title: 'Cliffside Sanctuary with Private Beach',
    location: 'Carmel-by-the-Sea, California',
    price: 950,
    rating: 5.0,
    reviewCount: 45,
    images: [
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&h=600&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1582063289852-62e3ba2747f8?w=800&h=600&fit=crop&auto=format'
    ],
    amenities: ['Private Beach', 'Spa', 'Chef Kitchen', 'WiFi', 'Concierge'],
    type: 'Luxury Villa',
    isNew: true
  },
  {
    id: '6',
    title: 'Eco-Friendly Beach Cottage',
    location: 'Santa Barbara, California',
    price: 285,
    rating: 4.6,
    reviewCount: 156,
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1600607687644-c7171b42498e?w=800&h=600&fit=crop&auto=format'
    ],
    amenities: ['Eco-Friendly', 'Beach Access', 'WiFi', 'Bike Rental'],
    type: 'Cottage'
  }
];

export default function PropertyGrid() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-slate-900 mb-4">
            Handcrafted Coastal
          </h2>
          <h3 className="text-3xl md:text-4xl font-serif text-primary-600 mb-6">
            Sanctuaries
          </h3>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Each property is thoughtfully curated for its unique character, 
            pristine location, and commitment to sustainable luxury.
          </p>
        </div>

        {/* Property Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {mockProperties.map((property) => (
            <PropertyCard key={property.id} {...property} />
          ))}
        </div>

        {/* Load More Section */}
        <div className="text-center mt-16">
          <p className="text-slate-600 mb-6">Showing 6 of 127 properties</p>
          <button className="inline-flex items-center px-8 py-3 bg-transparent border-2 border-primary-600 text-primary-600 rounded-xl hover:bg-primary-600 hover:text-white smooth-transition font-medium">
            Explore More Properties
          </button>
        </div>
      </div>
    </section>
  );
}