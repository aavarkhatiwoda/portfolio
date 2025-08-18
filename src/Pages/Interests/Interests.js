import "./Interests.sass";
import "../../Components/Skills.sass";
import Résumé from "../../Components/Images/aavarkhatiwoda_resume_2025.pdf";

export default function Interests() {
  return (
    <div className="interests_toplevel">
      <div className="interests">
        
        {/* interests_grid1 is blank */}
        <div className="interests_grid1" />

        <div className="interests_grid2">
          <div className="interests_grid2_text fs2">
            Nice to meet you! I'm a level I software engineer at{" "}
            <a
              href={"https://www.lockheedmartin.com/en-us/index.html"}
              target="_blank"
              rel="noopener noreferrer"
              className="link fc3"
            >
              <b>Lockheed Martin</b>
            </a>{" "}
            . I graudated from{" "}
            <a
              href={"https://cs.vt.edu"}
              target="_blank"
              rel="noopener noreferrer"
              className="link fc3"
            >
              <b>Virginia Tech</b>
            </a>{" "}
            with a bachelor's degree in computer science and a minor in
            mathematics.
            <div className="newline" />
            I love being creative, which has guided me to take interest in a wide range of
            technologies and learn as much as I can about these tools.
            My main strengths are in scripting using Python and Bash, and I also enjoy
            object-oriented programming with Java. I am currently learning about the process of
            developing custom game engines using C and C++. In addition, I love crafting engaging
            websites using ReactJS.
            Outside of technology, I love playing music on my piano and guitar. 
            <div className="newline" />
            During my time at Virginia Tech, I was an{" "}
            <a
              href={"https://cs.vt.edu"}
              target="_blank"
              rel="noopener noreferrer"
              className="link fc3"
            >
              <b>undergraduate teaching assistant</b>
            </a>{" "}
            during the Fall 2023 semester and an{" "}
            <a
              href={"https://cs.vt.edu"}
              target="_blank"
              rel="noopener noreferrer"
              className="link fc3"
            >
              <b>undergraduate reaching assistant</b>
            </a>{" "}
            during the Spring 2024 semester. During my time as a URA, I was able
            to cultivate important technical skillsets related to research. In the course,
            my research partner and I designed a novel algorithm which would surpass
            the industry standard, the DEFLATE algorithm, in compressing large data sets
            of varying characteristics. My time in research has led to an interest in
            pursuing a MS in Computer Science starting in Fall 2026.
            <div className="newline" />
            In addition, I'm passionate about teaching, especially in being able to explain
            difficult concepts as simply as possible in layman's terms. I would
            love to be able to apply my teaching and communication skills to
            help my team tackle challenging problems with a clear direction in
            mind.
            <div className="newline" />
            <b className="fs1">TECHNOLOGIES I AM FAMILIAR WITH:</b>
            <ShowSkills />
            <div className="newline_small" />
            <b className="fs1">CONTACT AND SOCIALS:</b>
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
    "Bash",
    "RISC-V Assembly",
    "ReactJS",
    "JSX",
    "Sass",
    "Netlify",
    "Vim",
    "Terminal",
    "Linux / Red Hat Enterprise Linux",
    "Virtual Machines",
    "Jenkins",
    "Jira",
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
    { name: "Instagram", link: "https://www.instagram.com/aavarkhatiwada/" },
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
