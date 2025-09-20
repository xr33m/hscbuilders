import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features?: string[];
  price?: string;
  link: string;
  className?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  features,
  price,
  link,
  className = ''
}) => {
  return (
    <div className={`card hover:shadow-card-hover group ${className}`}>
      {/* Icon */}
      <div className="bg-primary-accent/10 rounded-full p-4 w-fit mb-6">
        {icon}
      </div>

      {/* Title */}
      <h3 className="font-heading text-xl font-bold text-text-primary mb-4">
        {title}
      </h3>

      {/* Description */}
      <p className="text-text-secondary leading-relaxed mb-6">
        {description}
      </p>

      {/* Features List */}
      {features && features.length > 0 && (
        <ul className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-text-secondary text-sm">
              <div className="w-2 h-2 bg-primary-accent rounded-full mr-3 flex-shrink-0"></div>
              {feature}
            </li>
          ))}
        </ul>
      )}

      {/* Price */}
      {price && (
        <div className="mb-6">
          <span className="text-2xl font-heading font-bold text-primary-accent">
            {price}
          </span>
        </div>
      )}

      {/* CTA Link */}
      <a
        href={link}
        className="inline-flex items-center text-primary-accent hover:text-hover-accent font-semibold group-hover:translate-x-1 transition-all duration-200"
      >
        Learn More
        <ArrowRight className="w-4 h-4 ml-2" />
      </a>
    </div>
  );
};

export default ServiceCard;