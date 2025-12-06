import "./Interests.sass";
import "../../Components/Skills.sass";
import React from "react";
// import Résumé from "../../Components/Images/aavar_active_resume.pdf";

export default function Interests() {
  return (
    <div className="interests_toplevel">
      <div className="interests">
        
        {/* interests_grid1 is blank */}
        <div className="interests_grid1" />

        <div className="interests_grid2">
          <div className="interests_grid2_text fs2">
            Nice to meet you!
            <div className="newline" /> 
            I'm a software engineer at{" "}
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
            I am passionate about driving the success of the team and our products by delivering
            robust and scalable architectures. I have a proven record of delivering high-impact
            solutions to system maintenance and analysis, maintaining & expanding custom system
            configurations across client applications, and preserving & modernizing team
            documentation.
            <div className="newline" /> 
            Outside of technology, I love playing music on my piano and guitar. I enjoy recording
            songs, both covers and random melodies, through Garage Band to see where it takes me
            on my music journey.
            <div className="newline" />
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
    { name: "Résumé", link: "/aavar_active_resume.pdf" },
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
