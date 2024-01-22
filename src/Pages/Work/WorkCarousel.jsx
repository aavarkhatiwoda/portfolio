import React, { useState } from "react";
import { CarouselCards } from "../../Components/CarouselCards.jsx";

export const WorkCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const c = [
    {
      name: "Virginia Tech",
      technologies: ["C++", "C"],
      description: "Undergraduate Research Assistant",
      description2: "Blacksburg, VA, Jan 2024 - Present",
      link: "https://cs.vt.edu",
      content: [
        "• Undergraduate Research Assistant, Department of Computer Science. More details to be announced soon.",
      ],
    },
    {
      name: "Virginia Tech",
      technologies: ["Java"],
      description: "Undergraduate Teaching Assistant, CS 1114 - Java",
      description2: "Blacksburg, VA, Aug 2023 - Dec 2023",
      link: "https://cs.vt.edu",
      content: [
        "• Helped facilitate student understanding and implementation of object-oriented\
        programming concepts in Java in lab and project coursework.",
        "• Aided students in building good programming habits through effective planning\
        of task requirements, use of JavaDocs, and commenting.",
      ],
    },
    {
      name: "Northrop Grumman",
      technologies: [
        "Python",
        "Jenkins",
        "JSON",
        "Groovy/Jenkinsfile Scripts",
        "Docker",
        "OpenSearch [Suite]",
      ],
      description: "Software Engineer Intern, Secret Clearance",
      description2: "Baltimore, MD, Jun 2023 - Aug 2023",
      link: "https://www.northropgrumman.com",
      content: [
        "• Designed Jenkinsfile sequence diagram to document the anticipated flow\
        of Jenkins pipeline data collection and transfer to OpenSearch toward the\
        end goal of monitoring project health and anticipating build failures\
        through user-specific data visualization metrics on OpenSearch Dashboards.",
        "• Identified collection requirements and developed Python scripts to\
        efficiently retrieve Jenkins pipeline data and store data in\
        team-created JSON layout. Optimized team’s collection scripts to retrieve\
        Jenkins pipeline data 30%+ more efficiently than previous versions.",
        "• Utilized Groovy/Jenkinsfile scripts within Docker to automate\
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
