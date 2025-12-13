import "./Projects.sass";
import { ProjectsCardsList } from "./ProjectsCardsList";

export default function Projects() {
  return (
    <div className="projects_toplevel" id="projects">
      <div className="projects">
        <div className="projects_grid1" />
        <div className="projects_grid2">
          <div className="projects_grid2_intro fs3 bold">
            Technical Projects
          </div>
          <ProjectsCardsList />
        </div>
      </div>
    </div>
  );
}
