import "./Projects.sass";
import { ProjectsCarousel } from "./ProjectsCarousel";

export default function Projects() {
  return (
    <div className="projects_toplevel" id="projects">
      <div className="projects">
        <div className="projects_grid1" />
        <div className="projects_grid2">
          <div
            className="projects_grid2_intro fs3"
            style={{ fontWeight: "bold" }}
          >
            Technical Projects
          </div>
          <ProjectsCarousel />
        </div>
      </div>
    </div>
  );
}
