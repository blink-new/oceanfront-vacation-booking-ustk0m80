import { ArrowRight, Waves, Sunset, Camera } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';

const experiences = [
  {
    id: 1,
    title: 'Sunrise Yoga Sessions',
    description: 'Begin your day with gentle movement as the sun rises over the Pacific. Our certified instructors guide you through mindful practices.',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    icon: Sunset,
    duration: '60 min',
    price: 45
  },
  {
    id: 2,
    title: 'Ocean Photography Workshop',
    description: 'Capture the ethereal beauty of coastal landscapes with professional photographers. Learn techniques for shooting in natural light.',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    icon: Camera,
    duration: '3 hours',
    price: 125
  },
  {
    id: 3,
    title: 'Private Surfing Lessons',
    description: 'Connect with the ocean through the ancient art of surfing. Professional instructors ensure a safe and inspiring experience.',
    image: 'https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    icon: Waves,
    duration: '2 hours',
    price: 85
  }
];

export default function Experiences() {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-slate-900 mb-4">
            Curated Ocean
          </h2>
          <h3 className="text-3xl md:text-4xl font-serif text-primary-600 mb-6">
            Experiences
          </h3>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Immerse yourself in thoughtfully designed activities that connect you 
            with the natural rhythm of coastal life.
          </p>
        </div>

        {/* Experience Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {experiences.map((experience, index) => {
            const IconComponent = experience.icon;
            return (
              <Card 
                key={experience.id}
                className={`group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl smooth-transition ${
                  index === 1 ? 'md:transform md:scale-105' : ''
                }`}
              >
                {/* Background Image */}
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={experience.image}
                    alt={experience.title}
                    className="w-full h-full object-cover group-hover:scale-110 smooth-transition"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                </div>

                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 mb-4">
                    <div className="flex items-center mb-3">
                      <div className="p-2 bg-primary-500/20 rounded-lg mr-3">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <div className="text-sm opacity-90">
                        {experience.duration}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-semibold mb-2 text-shadow">
                      {experience.title}
                    </h3>
                    
                    <p className="text-sm opacity-90 mb-4 text-shadow">
                      {experience.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="text-lg font-bold">
                        ${experience.price}
                      </div>
                      <Button 
                        size="sm" 
                        className="bg-white text-slate-900 hover:bg-white/90"
                      >
                        Book Now
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-2xl shadow-lg hover:shadow-xl smooth-transition cursor-pointer">
            <span className="font-medium mr-2">Discover All Experiences</span>
            <ArrowRight className="w-5 h-5" />
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary-100 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute left-0 bottom-0 transform -translate-x-1/2 translate-y-1/2 w-64 h-64 bg-primary-200 rounded-full opacity-30 blur-2xl"></div>
    </section>
  );
}