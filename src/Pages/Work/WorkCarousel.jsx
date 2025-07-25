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
        "• Facilitate continuous refactorization of the codebase to maintain modular and scalable platforms,\
        such as by consolidating disjoined repetitive tasks across multiple systems and subsystems into common\
        scripts.",
        "• Enhanced networking infrastructure by standardizing outdated hostnaming paradigms across key systems into a\
        modern notation, and updating scripts to utilize the new notation to efficiently yield intended system IP\
        addresses.",
        "• Preserved 10+ years of team documentation by migrating resources from Redmine to GitLab ahead of Redmine’s\
        deprecation. Developed scripts to automate the process of extracting 150+ wikis in Redmine’s AsciiDoc format,\
        converting AsciiDoc to Markdown through an existing tool, fixing imperfections of the conversion tool, and\
        migrating finalized documents to GitLab.",
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
        "• Developed new Jenkins health monitoring tools to better prevent and diagnose build failures, implementing\
        the ability to filter diagnostics criteria through user-specific data visualization metrics on OpenSearch\
        Dashboards.",
        "• Optimized Jenkins pipeline data collection scripts, yielding a 30%+ increase in speed in the data\
        collection process.",
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
