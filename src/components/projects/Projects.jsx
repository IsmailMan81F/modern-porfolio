import Project from "./project";
import { projects } from "./projects";
import "./projects.css";

export default function Projects(params) {
  const cards = projects.map((project, index) => (
    <Project
      key={index}
      title={project.title}
      description={project.description}
      image={project.picture}
      tech={project.tech}
    />
  ));

  return (
    <section className="projects-section">
      <h2 className="projects-title">
        A small selection of <span>recent projects</span>
      </h2>
      <div className="projects-cards">{cards}</div>
    </section>
  );
}
