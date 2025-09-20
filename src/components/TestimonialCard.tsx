import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  location?: string;
  rating: number;
  review: string;
  service?: string;
  className?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  location,
  rating,
  review,
  service,
  className = ''
}) => {
  return (
    <div className={`card hover:shadow-card-hover fade-in ${className}`}>
      {/* Rating Stars */}
      <div className="flex items-center mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-5 h-5 ${
              i < rating ? 'fill-primary-accent text-primary-accent' : 'text-border-color'
            }`}
          />
        ))}
      </div>

      {/* Review Text */}
      <p className="text-text-secondary leading-relaxed mb-6 italic">
        "{review}"
      </p>

      {/* Customer Info */}
      <div className="border-t border-border-color pt-4">
        <h4 className="font-heading font-semibold text-text-primary">
          {name}
        </h4>
        {location && (
          <p className="text-text-secondary text-sm">
            {location}
          </p>
        )}
        {service && (
          <p className="text-primary-accent text-sm font-medium mt-1">
            {service}
          </p>
        )}
      </div>
    </div>
  );
};

export default TestimonialCard;