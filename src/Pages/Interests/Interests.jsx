import "./Interests.sass";
import "../../Components/Skills.sass";
import React from "react";

export default function Interests() {
  return (
    <div className="interests_toplevel">
      <div className="interests">

          <div className="interests_text fontsize2">
            Nice to meet you!
            <div className="newline" /> 
            I'm a software engineer at{" "}
            <a
              href={"https://www.lockheedmartin.com/en-us/index.html"}
              target="_blank"
              rel="noopener noreferrer"
              className="link fontcolor3 bold"
            >
              Lockheed Martin
            </a>{" "}
            . I graduated from{" "}
            <a
              href={"https://cs.vt.edu"}
              target="_blank"
              rel="noopener noreferrer"
              className="link fontcolor3 bold"
            >
              Virginia Tech
            </a>{" "}
            with an undergraduate degree in computer science and a minor in mathematics, and I am
            currently exploring the potential to return to complete my master's. Take a look at my{" "}
            <a
              href={"/resume.pdf"}
              target="_blank"
              rel="noopener noreferrer"
              className="link fontcolor3 bold"
            >
              Résumé
            </a>{" "}
            !
            <div className="newline" />
            I am passionate about driving the success of the team and our products by delivering
            robust and scalable architectures. I have a proven record of leading research teams,
            spearheading research execution, and delivering high-impact solutions to system
            maintenance and analysis. In my free time, I enjoy experimenting with AI automation.
            <div className="newline" /> 
            Outside of technology, I love playing music on my piano and guitar. I enjoy recording
            songs, both covers and random melodies, through Garage Band to see where it takes me
            on my music journey.
            <div className="newline" />
            <div className="newline" />
            <b className="fontsize1">TECHNOLOGIES I AM FAMILIAR WITH:</b>
            <ShowSkills />
            <div className="newline_small" />
            <b className="fontsize1">CONTACT AND SOCIALS:</b>
            <ShowSocials />
          </div>




      </div>
    </div>
  );
}

function ShowSkills() {
  const s = [
    // Progarmming languages
    "Python",
    "JavaScript",
    "Java",
    "C++",
    "C",
    "Bash",
    "RISC-V Assembly",

    // Web development
    "ReactJS",
    "JSX",
    "Sass",

    // Operating systems
    "Linux / Red Hat Enterprise Linux",
    "Virtual Machines",

    // Development tools
    "Terminal",
    "Vim",
    "Git",

    // Online services
    "Jenkins",
    "Jira",
  ];
  return (
    <div className="skills_toplevel">
      {s.map((i) => (
        <a className="skills fontsize1">{i}</a>
      ))}
    </div>
  );
}

function ShowSocials() {
  const s = [
    { name: "Résumé", link: "/resume.pdf" },
    { name: "GitHub", link: "https://www.github.com/aavarkhatiwoda" },
    { name: "LinkedIn", link: "https://linkedin.com/in/aavar" },
    { name: "Instagram", link: "https://www.instagram.com/aavarkhatiwada/" },
  ];
  return (
    <div className="skills_toplevel">
      {s.map((i) => (
        <a
          className="skills fontsize1"
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
