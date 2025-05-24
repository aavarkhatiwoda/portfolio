import React, { useState } from "react";
import { CarouselCards } from "../../Components/CarouselCards.jsx";

export const WorkCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const c = [
    {
      name: "Level I Software Engineer",
      technologies: ["Python", "Java", "C++", "C", "Bash", "Jira", "Linux", "Virtual Machines", "Jenkins"],
      description: "Lockheed Martin",
      description2: "May 2024 - Present · Manassas, VA · Secret Clearance",
      link: "https://cs.vt.edu",
      content: [
        "• Go-to subject matter expert for scripting-related inquiries, from classified to\
        unclassified systems.",
        "• Upheld best engineering practices to continuously refactor and improve the codebase\
        to assist in maintaining a scalable platform, such as by reducing redundancies in code\
        through developing scripts to automate repetitive intensive tasks.",
        "• Preserved 10+ years of department’s documentation by migrating resources from Redmine\
        to GitLab ahead of Redmine’s deprecation. Developed scripts to extract Redmine AsciiDoc\
        documentation, convert items to Markdown format, fix imperfections of the conversion tool\
        and migrate to GitLab.",
      ],
    },
    {
      name: "Undergraduate Research Assistant",
      technologies: ["Python", "C++", "C"],
      description: "Virginia Tech - CS 4994, Undergraduate Research",
      description2: "Jan 2024 - May 2024 · Blacksburg, VA",
      link: "https://cs.vt.edu",
      content: [
        "• Developed a novel three-step algorithm to resolve memory bandwidth limitations of\
        traditional compression techniques, improving random-access decompression across four\
        diverse memory dumps.",
        "• Outperformed the DEFLATE algorithm in compression performance across each tested\
        memory dump."
      ],
    },
    {
      name: "Undergraudate Teaching Assistant",
      technologies: ["Java"],
      description: "Virginia Tech - CS 1114, Introduction to Software Design",
      description2: "Aug 2023 - Dec 2023 · Blacksburg, VA",
      link: "https://cs.vt.edu",
      content: [
        "• Facilitated student understanding and implementation of object-oriented\
        programming concepts in lab and project coursework.",
        "• Aided 200+ college students in building good programming habits through\
        (1) helping develop routine study habits and learning plans of new Java concepts,\
        (2) providing important learning resources [both internal to the course and external],\
        (3) recommending new ways to think about previously-tackled problems [i.e., bettering\
        implementation of data structures, reducing redundancy in code, and better\
        conceptualizing simple solutions to complex problems].",
      ],
    },
    {
      name: "Software Engineer Intern",
      technologies: [
        "Python",
        "Jenkins",
        "JSON",
        "Groovy Scripts",
        "Docker",
        "OpenSearch [Suite]",
      ],
      description: "Northrop Grumman",
      description2: "Jun 2023 - Aug 2023 · Baltimore, MD · Secret Clearance",
      link: "https://www.northropgrumman.com",
      content: [
        "• Developed new Jenkins health monitoring tools to better prevent and diagnose build\
        failures, implementing the ability to filter diagnostics criteria through user-specific\
        data visualization metrics on OpenSearch Dashboards.",
        "• Optimized Jenkins pipeline data collection scripts, yielding a 30%+ increase in speed\
        in the data collection process.",
      ],
    },
  ];

  const updateIndex = (newIndex) => {
    newIndex = newIndex % c.length;
    if (newIndex < 0) {
      newIndex = c.length - 1;
    }
    setActiveIndex(newIndex);
  };

  return (
    <div className="carousel_toplevel">
      <div
        className="carousel"
        style={{ transform: `translate(-${activeIndex * 100}%)` }}
      >
        {c.map((i) => {
          return <CarouselCards i={i} width={"100%"} />;
        })}
      </div>
    </div>
  );
};
