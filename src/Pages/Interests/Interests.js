import "./Interests.sass";
import "../../Components/Skills.sass";
import Résumé from "../../Components/Images/AavarKhatiwoda_SWE_Resume.pdf";

export default function Interests() {
  return (
    <div className="interests_toplevel">
      <div className="interests">
        {/* LEAVE interests_grid1 BLANK AS IT WILL NOT BE USED */}
        <div className="interests_grid1" />

        <div className="interests_grid2">
          <div className="interests_grid2_text fs2 fc2">
            Nice to meet you! I'm a university student at{" "}
            <a
              href={"https://cs.vt.edu"}
              target="_blank"
              rel="noopener noreferrer"
              className="link fc2 fc3"
            >
              <b>Virginia Tech</b>
            </a>{" "}
            pursuing a bachelor's degree in computer science and a minor in
            mathematics. I am constantly looking for new ways to improve my
            skills as a developer.
            <div className="newline" />
            My main interests are in backend software engineering with Python
            and Java, as well as in memory management through utilizing C and
            C++. I also enjoy crafting engaging websites using ReactJS. I love
            being able to use my skills to achieve real-world results, either by
            myself or with a team.
            <div className="newline" />I was a software engineer intern at{" "}
            <a
              href={"https://www.northropgrumman.com"}
              target="_blank"
              rel="noopener noreferrer"
              className="link fc2 fc3"
            >
              <b>Northrop Grumman</b>
            </a>{" "}
            during Summer 2023 and an{" "}
            <a
              href={"https://cs.vt.edu"}
              target="_blank"
              rel="noopener noreferrer"
              className="link fc2 fc3"
            >
              <b>undergraduate teaching assistant</b>
            </a>{" "}
            for CS 1114, Introduction to Software Design during Fall 2023. I
            currently am an{" "}
            <a
              href={"https://cs.vt.edu"}
              target="_blank"
              rel="noopener noreferrer"
              className="link fc2 fc3"
            >
              <b>undergraduate research assistant</b>
            </a>{" "}
            for the Spring 2024 term.
            <div className="newline" />
            I'm passionate about teaching, especially in being able to explain
            difficult concepts as simply as possible in layman's terms. I would
            love to be able to apply my teaching and communication skills to
            help my team tackle challenging problems with a clear direction in
            mind.
            <div className="newline" />
            <b className="fs1">TECHNOLOGIES I AM FAMILIAR WITH:</b>
            <div className="newline_small" />
            <ShowSkills />
            <div className="newline_small" />
            <b className="fs1">CONTACT AND SOCIALS:</b>
            <div className="newline_small" />
            <ShowSocials />
          </div>
        </div>
      </div>
    </div>
  );
}

function ShowSkills() {
  const s = [
    "Python",
    "JavaScript",
    "Java",
    "C++",
    "C",
    "x86 & RISC-V Assembly",
    "ReactJS",
    "JSX",
    "Sass",
    "Netlify",
    "Ripes",
    "Rars",
    "Bash",
    "GDB",
    "Jenkins",
    "JSON",
    "Groovy Scripts",
    "Docker",
    "OpenSearch [Suite]",
    "Terminal",
    "Linux",
  ];
  return (
    <div className="skills_toplevel">
      {s.map((i) => (
        <a className="skills fs1">{i}</a>
      ))}
    </div>
  );
}

function ShowSocials() {
  const s = [
    { name: "Résumé", link: Résumé },
    { name: "GitHub", link: "https://www.github.com/aavarkhatiwoda" },
    { name: "LinkedIn", link: "https://linkedin.com/in/aavar" },
  ];
  return (
    <div className="skills_toplevel">
      {s.map((i) => (
        <a
          className="skills fs1"
          href={i.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          {i.name}
        </a>
      ))}
    </div>
  );
}
