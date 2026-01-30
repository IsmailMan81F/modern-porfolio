import "./projects.css";
import Arrow from "../hero/Arrow";


export default function Projects(params) {
  const data = {
    title: "3D Solar System Planets to Explore",
    description:
      "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
    picture: "project1",
  };

  return (
    <div className="project-card">
      <div className="project-picture"></div>
      <div className="project-info">
        <h2 className="project-title">{data.title}</h2>
        <p className="project-description">{data.description}</p>
        <div className="project-metadata">
          <div className="project-techs">
            
          </div>
          <a href="" className="project-live-link">
            <span>Check Live Site</span>
            <Arrow color="#cbacf9"/>
          </a>
        </div>
      </div>
    </div>
  );
}
