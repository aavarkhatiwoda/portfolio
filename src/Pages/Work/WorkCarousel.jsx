import React, { useState } from "react";
import { CarouselCards } from "../../Components/CarouselCards.jsx";

export const WorkCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const c = [
    {
      name: "Undergraduate Research Assistant",
      technologies: ["C++", "C"],
      description: "VIRGINIA TECH · CS 4994, Undergraduate Research",
      description2: "Jan 2024 - Present · Blacksburg, VA",
      link: "https://cs.vt.edu",
      content: [
        "• Undergraduate Research Assistant, Department of Computer Science. More details to be\
        announced.",
      ],
    },
    {
      name: "Undergraudate Teaching Assistant",
      technologies: ["Java"],
      description: "VIRGINIA TECH · CS 1114, Introduction to Software Design",
      description2: "Aug 2023 - Dec 2023 · Blacksburg, VA",
      link: "https://cs.vt.edu",
      content: [
        "• Facilitated student understanding and implementation of object-oriented\
        programming concepts in lab and project coursework.",
        "• Aided students in building good programming habits through effective planning\
        of task requirements, use of JavaDocs, and commenting.",
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
      description: "NORTHROP GRUMMAN · Secret Clearance",
      description2: "Jun 2023 - Aug 2023 · Baltimore, MD",
      link: "https://www.northropgrumman.com",
      content: [
        "• Designed Jenkinsfile sequence diagrams to document the anticipated flow\
        of Jenkins pipeline data collection and transfer to OpenSearch toward the\
        end goal of monitoring project health to better diagnose build failures through\
        user-specific data visualization metrics on OpenSearch Dashboards.",
        "• Developed Python scripts to efficiently retrieve critical Jenkins pipeline data,\
        and stored data in team-created JSON layout. Optimized team’s collection scripts to\
        retrieve Jenkins pipeline data 30%+ more efficiently than previous versions.",
        "• Utilized Groovy scripts within Docker to automate\
        data collection and transfer to OpenSearch for project health\
        monitoring.",
        "• Spearheaded planning of weekly tasks of team of 4 through serving\
        as team’s scrum master.",
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
