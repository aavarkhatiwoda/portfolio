import { ProjectsCardsList } from "./ProjectsCardsList";

export default function Projects() {
  return (
    <div className="informationpage_toplevel" id="projects">
      <div className="informationpage">

          <div className="informationpage_title fontsize3 bold">
            Technical Projects
          </div>
          <ProjectsCardsList />

      </div>
    </div>
  );
}