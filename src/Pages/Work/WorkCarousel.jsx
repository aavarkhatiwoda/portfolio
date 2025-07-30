import React, { useState } from "react";
import { CarouselCards } from "../../Components/CarouselCards.jsx";
import LockheedMartin from "../../Components/Images/LockheedMartin.png";
import VirginiaTech from "../../Components/Images/VirginiaTech.png";
import NorthropGrumman from "../../Components/Images/NorthropGrumman.png";

export const WorkCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const c = [
    {
      image: LockheedMartin,
      name: "Level I Software Engineer",
      technologies: [
        "Python",
        "Java",
        "C++",
        "C",
        "Bash",
        "Vim",
        "Terminal",
        "Linux / Red Hat Enterprise Linux",
        "Virtual Machines",
        "Jenkins",
        "Jira",
      ],
      description: "Lockheed Martin",
      description2: "May 2024 - Present · Manassas, VA · Secret Clearance",
      link: "https://www.lockheedmartin.com/en-us/index.html",
      content: [
        "A little bit of what I've done:",
        "• Facilitate continuous refactorization efforts of the codebase to maintain and enhance modular and scalable\
        platforms, providing impactful improvements to both internal cross-platform and federal client applications.",
        "• Deliver improved high-impact scripting design guidelines to help engineers ensure uniformity and\
        scalability in coding design practices.",
        "• Drive preservation of team’s documentation through migrating 10+ years [200+ wikis] of documents from\
        Redmine to GitLab by developing new scripts to efficiently automate the entire migration process, avoiding\
        error-prone manual workarounds.",
        "• Enhance networking infrastructure by standardizing outdated hostnaming paradigms across key systems into a\
        modern notation, and updating scripts to utilize the new notation to efficiently yield intended system IP\
        addresses.",
      ],
    },
    {
      image: VirginiaTech,
      name: "Undergraduate Research Assistant",
      technologies: ["Python", "C++", "C"],
      description: "CS 4994 - Undergraduate Research",
      description2: "Jan 2024 - May 2024 · Blacksburg, VA",
      link: "https://cs.vt.edu",
      content: [
        "• Designed a novel three-step algorithm to resolve memory bandwidth limitations of traditional compression\
        techniques, improving random-access decompression across four diverse memory dumps.",
        "• Outperformed the DEFLATE algorithm in compression performance across each tested memory dump.",
      ],
    },
    {
      image: VirginiaTech,
      name: "Undergraudate Teaching Assistant",
      technologies: ["Java"],
      description: "CS 1114 - Introduction to Software Design",
      description2: "Aug 2023 - Dec 2023 · Blacksburg, VA",
      link: "https://cs.vt.edu",
      content: [
        "• Aided 200+ college students in building critical understanding of Java programming concepts through\
        (1) helping construct routine study habits and learning plans of object-oriented programming topics,\
        (2) providing important learning resources [both internal to the course and external],\
        (3) recommending new ways to think about previously-tackled problems [e.g., bettering implementation of data\
        structures, reducing redundancy in code, and better conceptualizing simple solutions to complex problems].",
      ],
    },
    {
      image: NorthropGrumman,
      name: "Software Engineer Intern",
      technologies: [
        "Python",
        "JSON",
        "Groovy Scripts",
        "Jenkins",
        "Jira",
        "Docker",
        "OpenSearch Dashboards",
      ],
      description: "Northrop Grumman",
      description2: "Jun 2023 - Aug 2023 · Baltimore, MD · Secret Clearance",
      link: "https://www.northropgrumman.com",
      content: [
        "• Developed new Jenkins health monitoring tools to better diagnose and prevent build failures, implementing\
        the ability to filter key diagnostics criteria through specific data visualization metrics on OpenSearch\
        Dashboards.",
        "• Enhanced scalability of Jenkins pipeline data collection, optimizing scripts to yield a +30% improvement in\
        collection speeds.",
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
