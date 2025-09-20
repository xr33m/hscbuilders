import React from 'react';
import { cn } from '../lib/utils';
import TestimonialCard from './TestimonialCard';

interface TestimonialAuthor {
  name: string;
  location?: string;
  service?: string;
}

interface TestimonialsSectionProps {
  title: string;
  description: string;
  testimonials: Array<{
    author: TestimonialAuthor;
    text: string;
    rating: number;
    href?: string;
  }>;
  className?: string;
}

export function TestimonialsSection({ 
  title,
  description,
  testimonials,
  className 
}: TestimonialsSectionProps) {
  return (
    <section className={cn(
      "bg-primary-bg text-text-primary relative -mt-1",
      "py-12 sm:py-24 md:py-32 px-0",
      className
    )}>
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 text-center sm:gap-16">
        <div className="flex flex-col items-center gap-4 px-4 sm:gap-8">
          <h2 className="max-w-[720px] text-3xl font-heading font-bold leading-tight sm:text-4xl sm:leading-tight text-text-primary">
            {title}
          </h2>
          <p className="text-lg max-w-[600px] font-medium text-text-secondary sm:text-xl">
            {description}
          </p>
        </div>

        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
          <div className="group flex overflow-hidden p-2 [--gap:1rem] [gap:var(--gap)] flex-row [--duration:40s]">
            <div className="flex shrink-0 justify-around [gap:var(--gap)] flex-row group-hover:[animation-play-state:paused] animate-marquee">
              {[...Array(4)].map((_, setIndex) => (
                testimonials.map((testimonial, i) => (
                  <TestimonialCard 
                    key={`${setIndex}-${i}`}
                    name={testimonial.author.name}
                    location={testimonial.author.location}
                    service={testimonial.author.service}
                    rating={testimonial.rating}
                    review={testimonial.text}
                    className="w-80 flex-shrink-0"
                  />
                ))
              ))}
            </div>
          </div>

          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-primary-bg"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-primary-bg"></div>
        </div>
      </div>
    </section>
  );
}

export default function ReviewsSection() {
  const testimonials = [
    {
      author: {
        name: "Sarah Mitchell",
        location: "Glasgow, Scotland",
        service: "Complete Garden Redesign"
      },
      text: "H&C Builders transformed our backyard into an absolute paradise. Their attention to detail and professionalism exceeded all expectations. The team was punctual, clean, and delivered exactly what they promised.",
      rating: 5
    },
    {
      author: {
        name: "James Robertson",
        location: "Edinburgh, Scotland", 
        service: "Patio & Hardscaping"
      },
      text: "Outstanding work on our new patio and walkways. The quality of materials and craftsmanship is exceptional. Our property value has definitely increased, and we couldn't be happier with the results.",
      rating: 5
    },
    {
      author: {
        name: "Emma Thompson",
        location: "Stirling, Scotland",
        service: "Lawn Care & Maintenance"
      },
      text: "After struggling with our lawn for years, H&C Builders brought it back to life. Their weekly maintenance service is reliable, and our grass has never looked better. Highly recommend their expertise.",
      rating: 5
    },
    {
      author: {
        name: "David Wilson",
        location: "Paisley, Scotland",
        service: "Landscape Design"
      },
      text: "The design process was collaborative and creative. They listened to our vision and enhanced it with their professional expertise. The final result is a stunning outdoor space we enjoy every day.",
      rating: 5
    },
    {
      author: {
        name: "Lisa Campbell",
        location: "Hamilton, Scotland",
        service: "Irrigation System"
      },
      text: "Smart irrigation system installation was flawless. Our water bills have decreased while our garden looks healthier than ever. The team explained everything clearly and provided excellent aftercare.",
      rating: 5
    },
    {
      author: {
        name: "Michael Brown",
        location: "Ayr, Scotland",
        service: "Tree Services"
      },
      text: "Professional tree removal and pruning service. They worked safely around our property and left everything spotless. Fair pricing and excellent communication throughout the entire process.",
      rating: 5
    }
  ];

  return (
    <TestimonialsSection
      title="What Our Customers Say"
      description="Don't just take our word for it - hear from satisfied customers across Scotland who have transformed their outdoor spaces with our professional landscaping services."
      testimonials={testimonials}
    />
  );
}