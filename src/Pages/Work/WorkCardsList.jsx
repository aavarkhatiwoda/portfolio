import React, { useState } from "react";
import { CardsListCards } from "../../Components/CardsListCards.jsx";
import LockheedMartin from "../../Components/Images/LockheedMartin.png";
import VirginiaTech from "../../Components/Images/VirginiaTech.png";
import NorthropGrumman from "../../Components/Images/NorthropGrumman.png";

export const WorkCardsList = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const c = [
    {
      image: LockheedMartin,
      name: "Software Engineer",
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
        "▸ Continuously enhance internal and client applications through developing, implementing, and maintaining\
        robust and scalable applications and extending functionality of legacy tools.",
        "▸ Reduce downtime of critical tools by enhancing data capture and export of automated and user-requested\
        system logs, aiding in early detection and analysis of failing functionality.",
        "▸ Create and maintain custom system configurations on client applications, ensuring the ability to run\
        specialized tools required toward each individual system.",
        "▸ Improve networking infrastructure by standardizing disjointed hostnaming paradigms across key systems into\
        a unified notation.",
        "▸ Deliver improved high-impact scripting design guidelines to help engineers ensure robustness in coding\
        design practices.",
        "▸ Automate the migration of team’s 160+ critical workflow wikis from Redmine to GitLab to preserve essential\
        documentation ahead of Redmine’s deprecation.",
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
        "▸ Designed a novel 3-step algorithm tailored to specificifations of memory to resolve memory bandwidth\
        limitations of traditional LZ77 and Huffman compression techniques, improving compression and random-acces\
         decompression across 4 diverse memory dumps.",
        "▸ Outperformed the DEFLATE algorithm in compression performance across each tested memory dump.",
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
        "▸ Aided 200+ college students in building a critical understanding of object-oriented programming concepts\
        in Java.",
        "▸ Helped students improve efficiency of code by recommending better implementations of data structures and\
        algorithms.",
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
        "▸ Led team to achieve above-expected story completion targets through effectively coordinating resources\
        toward critical stories of interest, avoiding bottlenecks and expediting team's success as rotating scrum\
        lead.",
        "▸ Enhanced Jenkins CI/CD pipelines through developing new health monitoring tools to better diagnose and\
        prevent build failures before reaching critical stages, implementing health monitoring diagnostic filters on\
        OpenSearch Dashboards.",
        "▸ Increased efficiency of Jenkins pipeline data collection scripts to yield a -20% time overhead in the data\
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
    <div className="cardslist_toplevel">
      <div
        className="cardslist"
        style={{ transform: `translate(-${activeIndex * 100}%)` }}
      >
        {c.map((i) => {
          return <CardsListCards i={i} width={"100%"} />;
        })}
      </div>
    </div>
  );
};
