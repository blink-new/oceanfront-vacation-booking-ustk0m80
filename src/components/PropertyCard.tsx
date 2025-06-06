import { Heart, Star, MapPin } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';

interface PropertyCardProps {
  id: string;
  title: string;
  location: string;
  price: number;
  rating: number;
  reviewCount: number;
  images: string[];
  amenities: string[];
  type: string;
  isNew?: boolean;
}

export default function PropertyCard({
  title,
  location,
  price,
  rating,
  reviewCount,
  images,
  amenities,
  type,
  isNew = false
}: PropertyCardProps) {
  return (
    <Card className="group organic-border overflow-hidden bg-white/95 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl smooth-transition">
      <div className="relative overflow-hidden">
        {/* Main Image */}
        <div className="aspect-[4/3] overflow-hidden">
          <img 
            src={images[0]}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 smooth-transition"
          />
        </div>
        
        {/* Overlays */}
        <div className="absolute top-4 left-4 flex gap-2">
          {isNew && (
            <Badge className="bg-primary text-white">New</Badge>
          )}
          <Badge variant="secondary" className="bg-white/90 text-slate-700">
            {type}
          </Badge>
        </div>
        
        <Button
          variant="ghost"
          size="sm"
          className="absolute top-4 right-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white"
        >
          <Heart className="w-4 h-4" />
        </Button>

        {/* Image carousel indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-1">
          {images.slice(0, 5).map((_, index) => (
            <div 
              key={index}
              className="w-2 h-2 rounded-full bg-white/60 hover:bg-white smooth-transition cursor-pointer"
            />
          ))}
        </div>
      </div>

      <CardContent className="p-6">
        {/* Location and Rating */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center text-slate-600">
            <MapPin className="w-4 h-4 mr-1" />
            <span className="text-sm font-medium">{location}</span>
          </div>
          <div className="flex items-center">
            <Star className="w-4 h-4 text-yellow-500 fill-current mr-1" />
            <span className="text-sm font-semibold">{rating}</span>
            <span className="text-sm text-slate-500 ml-1">({reviewCount})</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-lg font-semibold text-slate-900 mb-3 line-clamp-2 leading-tight">
          {title}
        </h3>

        {/* Amenities */}
        <div className="flex flex-wrap gap-1 mb-4">
          {amenities.slice(0, 3).map((amenity, index) => (
            <Badge 
              key={index}
              variant="outline" 
              className="text-xs border-slate-200 text-slate-600"
            >
              {amenity}
            </Badge>
          ))}
          {amenities.length > 3 && (
            <Badge 
              variant="outline" 
              className="text-xs border-slate-200 text-slate-500"
            >
              +{amenities.length - 3} more
            </Badge>
          )}
        </div>

        {/* Price */}
        <div className="flex items-baseline justify-between">
          <div>
            <span className="text-2xl font-bold text-slate-900">${price}</span>
            <span className="text-slate-600 ml-1">/ night</span>
          </div>
          <Button size="sm" className="bg-primary hover:bg-primary/90">
            View Details
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}