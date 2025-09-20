import ProjectCard, { Project } from "./ProjectCard";

export default function ServiceProjectsSection({
  heading, 
  intro, 
  projects,
}: { 
  heading: string; 
  intro?: string; 
  projects: Project[] 
}) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-10">
      <div className="mb-6 flex items-end justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-text-primary">{heading}</h2>
          {intro && (
            <p className="mt-1 text-sm text-text-secondary">{intro}</p>
          )}
        </div>
      </div>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <ProjectCard key={`${p.title}-${i}`} project={p} />
        ))}
      </div>
    </section>
  );
}