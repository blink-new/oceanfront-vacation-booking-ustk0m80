import { useState } from 'react';
import { Search, MapPin, Calendar, Users, Minus, Plus } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';

export default function Hero() {
  const [guests, setGuests] = useState({ adults: 2, children: 0, infants: 0 });

  const updateGuests = (type: 'adults' | 'children' | 'infants', operation: 'add' | 'subtract') => {
    setGuests(prev => ({
      ...prev,
      [type]: operation === 'add' 
        ? prev[type] + 1 
        : Math.max(type === 'adults' ? 1 : 0, prev[type] - 1)
    }));
  };

  const totalGuests = guests.adults + guests.children + guests.infants;

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Text */}
        <div className="mb-12">
          <h1 className="text-5xl md:text-7xl font-light text-white mb-6 text-shadow-strong">
            Find your perfect
          </h1>
          <h2 className="text-4xl md:text-6xl font-serif text-white mb-8 text-shadow-strong">
            oceanfront escape
          </h2>
          <p className="text-xl md:text-2xl text-white/90 font-light max-w-2xl mx-auto text-shadow">
            Discover handcrafted beachfront properties where minimalist luxury meets the infinite horizon
          </p>
        </div>

        {/* Glassmorphic Search Bar */}
        <div className="glass rounded-2xl p-6 md:p-8 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-0 md:divide-x divide-white/20">
            {/* Where */}
            <div className="md:px-6">
              <label className="block text-sm font-medium text-white/80 mb-2">Where</label>
              <div className="relative">
                <MapPin className="absolute left-3 top-3 w-5 h-5 text-white/60" />
                <Input 
                  placeholder="Search destinations"
                  className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-white/40"
                />
              </div>
            </div>

            {/* Check-in */}
            <div className="md:px-6">
              <label className="block text-sm font-medium text-white/80 mb-2">Check in</label>
              <div className="relative">
                <Calendar className="absolute left-3 top-3 w-5 h-5 text-white/60" />
                <Input 
                  type="date"
                  className="pl-10 bg-white/10 border-white/20 text-white focus:border-white/40"
                />
              </div>
            </div>

            {/* Check-out */}
            <div className="md:px-6">
              <label className="block text-sm font-medium text-white/80 mb-2">Check out</label>
              <div className="relative">
                <Calendar className="absolute left-3 top-3 w-5 h-5 text-white/60" />
                <Input 
                  type="date"
                  className="pl-10 bg-white/10 border-white/20 text-white focus:border-white/40"
                />
              </div>
            </div>

            {/* Guests */}
            <div className="md:px-6">
              <label className="block text-sm font-medium text-white/80 mb-2">Who</label>
              <Popover>
                <PopoverTrigger asChild>
                  <div className="relative cursor-pointer">
                    <Users className="absolute left-3 top-3 w-5 h-5 text-white/60" />
                    <Input 
                      value={`${totalGuests} guest${totalGuests !== 1 ? 's' : ''}`}
                      readOnly
                      className="pl-10 bg-white/10 border-white/20 text-white cursor-pointer focus:border-white/40"
                    />
                  </div>
                </PopoverTrigger>
                <PopoverContent className="w-80 p-6">
                  <div className="space-y-4">
                    {[
                      { key: 'adults', label: 'Adults', subtitle: 'Ages 13 or above' },
                      { key: 'children', label: 'Children', subtitle: 'Ages 2-12' },
                      { key: 'infants', label: 'Infants', subtitle: 'Under 2' }
                    ].map(({ key, label, subtitle }) => (
                      <div key={key} className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">{label}</p>
                          <p className="text-sm text-muted-foreground">{subtitle}</p>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => updateGuests(key as 'adults' | 'children' | 'infants', 'subtract')}
                            disabled={key === 'adults' ? guests[key as keyof typeof guests] <= 1 : guests[key as keyof typeof guests] <= 0}
                          >
                            <Minus className="w-4 h-4" />
                          </Button>
                          <span className="w-8 text-center">{guests[key as keyof typeof guests]}</span>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => updateGuests(key as 'adults' | 'children' | 'infants', 'add')}
                          >
                            <Plus className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          </div>

          {/* Search Button */}
          <div className="mt-6 flex justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-12 py-3 rounded-xl">
              <Search className="w-5 h-5 mr-2" />
              Search
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
}