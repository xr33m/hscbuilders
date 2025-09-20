import BeforeAfterSlider from "./BeforeAfterSlider";
import { useState, useEffect } from "react";

export type Project = {
  title: string;
  location?: string;
  before?: string;
  after: string;
  images?: string[];
  alt?: string;
  aspect?: string;
};

export default function ProjectCard({ project }: { project: Project }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-rotate images if multiple images exist
  useEffect(() => {
    if (project.images && project.images.length > 1) {
      const interval = setInterval(() => {
        setCurrentImageIndex(prev => prev === project.images!.length - 1 ? 0 : prev + 1);
      }, 3000); // Switch every 3 seconds

      return () => clearInterval(interval);
    }
  }, [project.images]);

  return (
    <div className="group rounded-2xl border border-border-color bg-secondary-bg p-3">
      <div className="mb-3">
        {project.before ? (
          <BeforeAfterSlider
            beforeSrc={project.before}
            afterSrc={project.after}
            altBefore={`${project.title} before`}
            altAfter={project.alt ?? `${project.title} after`}
            aspect={project.aspect ?? "aspect-[16/9]"}
          />
        ) : project.images && project.images.length > 1 ? (
          <div className={`relative ${project.aspect ?? "aspect-[16/9]"} overflow-hidden rounded-xl`}>
            {project.images.map((img, imgIndex) => (
              <img
                key={imgIndex}
                src={img}
                alt={`${project.title} ${imgIndex + 1}`}
                className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
                  imgIndex === currentImageIndex ? 'opacity-100' : 'opacity-0'
                }`}
                loading="lazy"
                decoding="async"
              />
            ))}
            {/* Image indicators */}
            <div className="absolute bottom-2 right-2 flex space-x-1">
              {project.images.map((_, imgIndex) => (
                <div
                  key={imgIndex}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    imgIndex === currentImageIndex ? 'bg-white' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        ) : (
          <div className={project.aspect ?? "aspect-[16/9]"}>
            <img 
              src={project.after} 
              alt={project.alt ?? project.title} 
              className="h-full w-full rounded-xl object-cover" 
              loading="lazy" 
              decoding="async" 
            />
          </div>
        )}
      </div>
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-sm font-semibold text-text-primary">{project.title}</h3>
          {project.location && (
            <p className="text-xs text-text-secondary">{project.location}</p>
          )}
        </div>
      </div>
    </div>
  );
}