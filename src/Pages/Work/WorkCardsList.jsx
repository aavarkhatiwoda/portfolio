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
      description2: "May 2024 - Present, Manassas, VA, Secret Clearance",
      link: "https://www.lockheedmartin.com/en-us/index.html",
      content: [
        "▸ Provide high-fidelity development, implementation, and maintenance of robust and scalable internal/client\
        applications, and extend functionality of legacy tools.",
        "▸ Lead new internal research project focused on transmitting data from specialized equipment to critical\
        systems. Spearhead architecture planning, feature development, story writing, and story execution/completion\
        toward research initiative. Configure hardware and validate hardware communication via tcpump/tcpreplay.",
        "▸ Standardize outdated hostnaming protocols across key systems into a unified notation, improving\
        maintainability of networking infrastructure.",
        "▸ Enhance automated capture and export of classified/unclassified system logs, aiding in early-detection and\
        analysis of failing functionality, reducing downtime of critical system processes and tools."
      ],
    },
    {
      image: VirginiaTech,
      name: "Undergraduate Research Assistant",
      technologies: ["Python", "C++", "C"],
      description: "CS 4994 - Undergraduate Research",
      description2: "Jan 2024 - May 2024, Blacksburg, VA",
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
      description2: "Aug 2023 - Dec 2023, Blacksburg, VA",
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
      description2: "Jun 2023 - Aug 2023, Baltimore, MD, Secret Clearance",
      link: "https://www.northropgrumman.com",
      content: [
        "▸ Led team to achieve above-expected story completion targets through effectively coordinating resources\
        toward critical stories of interest, avoiding bottlenecks and expediting team's success as rotating scrum\
        lead.",
        "▸ Developed new health monitoring tools on the Jenkins pipeline to better diagnose and prevent impending\
        build failures, implementing diagnostic filtering of health data on OpenSearch Dashboards.",
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
      <div className="cardslist">
        {c.map((i) => {
          return <CardsListCards i={i} width={"100%"} />;
        })}
      </div>
    </div>
  );
};
