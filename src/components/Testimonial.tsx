import React from 'react';
import { Star } from 'lucide-react';
import { cn } from '../lib/utils';

export interface TestimonialProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string
  role: string
  company?: string
  testimonial: string
  rating?: number
  image?: string
}

const Avatar: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => (
  <div className={cn("w-12 h-12 rounded-full bg-secondary-bg border border-border-color flex items-center justify-center overflow-hidden", className)}>
    {children}
  </div>
);

const AvatarImage: React.FC<{ src: string; alt: string; height?: number; width?: number }> = ({ src, alt }) => (
  <img src={src} alt={alt} className="w-full h-full object-cover" />
);

const AvatarFallback: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="text-text-primary font-semibold text-sm">{children}</span>
);

const Testimonial = React.forwardRef<HTMLDivElement, TestimonialProps>(
  ({ name, role, company, testimonial, rating = 5, image, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "relative overflow-hidden rounded-2xl border border-border-color bg-secondary-bg p-6 transition-all hover:shadow-card-hover hover:border-primary-accent/50 md:p-8",
          className
        )}
        {...props}
      >
        <div className="absolute right-6 top-6 text-6xl font-serif text-text-secondary/20">
          "
        </div>

        <div className="flex flex-col gap-4 justify-between h-full">
          {rating > 0 && (
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star
                  key={index}
                  size={16}
                  className={cn(
                    index < rating
                      ? "fill-primary-accent text-primary-accent"
                      : "fill-text-secondary/30 text-text-secondary/30"
                  )}
                />
              ))}
            </div>
          )}

          <p className="text-pretty text-base text-text-secondary leading-relaxed">
            {testimonial}
          </p>

          <div className="flex items-center gap-4 justify-start">
            <div className="flex items-center gap-4">
              {image && (
                <Avatar>
                  <AvatarImage src={image} alt={name} height={48} width={48} />
                  <AvatarFallback>{name[0]}</AvatarFallback>
                </Avatar>
              )}

              <div className="flex flex-col">
                <h3 className="font-semibold text-text-primary">{name}</h3>
                <p className="text-sm text-text-secondary">
                  {role}
                  {company && ` @ ${company}`}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
)
Testimonial.displayName = "Testimonial"

export { Testimonial }