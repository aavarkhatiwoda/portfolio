import { Link, animateScroll as scroll } from "react-scroll";
import Name from "../../Components/Images/name.svg";
import "./Introduction.sass";

export default function Introduction() {
  return (
    <div className="introduction_toplevel">
      <div className="introduction fontsize2">

          <div>
            <img className="introduction_name_svg" src={Name} />
          </div>
          <div>
            A software engineer
          </div>
          <div>
            and music enthusiast
          </div>
          <ShowMenuLinks />


      </div>
    </div>
  );
}

function ShowMenuLinks() {
  const menulinkslist = [
    { name: "HOME", id: "interests_toplevel" },
    { name: "PROFESSIONAL HISTORY", id: "work" },
    { name: "TECHNICAL PROJECTS", id: "projects" },
    { name: "LEADERSHIP", id: "leadership" },
  ];
  return (
    <div>

      {/* <div className="newline" />
      <div className="newline" />

      <div className="introduction_links">
        {menulinkslist.map((item) => (
          <ul
            key={item.id}
            className="fontsize2 fontcolor2 bold single_link"
          >
            <li>
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
      </div> */}

    </div>
  );
}
