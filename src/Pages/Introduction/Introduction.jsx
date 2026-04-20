import { Link, animateScroll as scroll } from "react-scroll";
import "./Introduction.sass";

export default function Introduction() {
  return (
    <div className="introduction_toplevel">
      <div className="introduction">
        <div className="introduction_grid1">
          <div className="introduction_grid1_text fs3 bold">
            Aavar Khatiwoda
          </div>
          <div className="introduction_grid1_text fs2">
            A software engineer
          </div>
          <div className="introduction_grid1_text fs1">
            and music enthusiast
          </div>
          <ShowMenuLinks />
        </div>

        {/* introduction_grid2 is blank */}
        <div className="introduction_grid2" />
      </div>
    </div>
  );
}

function ShowMenuLinks() {
  const menulinkslist = [
    { name: "HOME", id: "introduction_toplevel" },
    { name: "PROFESSIONAL HISTORY", id: "work_toplevel" },
    { name: "TECHNICAL PROJECTS", id: "projects_toplevel" },
    { name: "LEADERSHIP", id: "leadership_toplevel" },
  ];
  return (
    <div className="introduction_grid1_links_toplevel">
      <div className="newline" />
      <div className="newline" />
      <div>
        {menulinkslist.map((item) => (
          <ul>
            <li className="introduction_grid1_links fs2 fc2 bold">
              <Link
                activeClass="active"
                to={item.id}
                smooth={true}
                duration={1000}
              >
                {item.name}
              </Link>
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
}
