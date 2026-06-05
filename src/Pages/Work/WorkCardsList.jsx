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
        "Linux / Red Hat Enterprise Linux",
        "Virtual Machines",
        "Terminal",
        "Vim",
        "Git",
        "Jenkins",
        "Jira",
      ],
      company: "Lockheed Martin",
      company_information: "May 2024 - Present, Manassas, VA, Secret Clearance",
      link: "https://www.lockheedmartin.com/en-us/index.html",
      content: [
        "▸ Provide full-lifecycle development, implementation, and maintenance of robust and scalable internal/client\
        applications, and extend functionality of legacy tools.",
        "▸ Lead new project of 10+ engineers and develop data transmission pipelines from specialized hardware to dedicated\
        systems. Coordinate project architecture planning, and development story writing/execution over 6+ months. Configure\
        network hardware and validate traffic through analyzing packet capture and replay.",
        "▸ Promote system maintenance and uptime by developing and integrating Bash scripts to log and export critical tool\
        output to aid in expedited detection and analysis of failing system processes. Promote robustness and modular scalability\
        of system functions.",
      ],
    },
    {
      image: VirginiaTech,
      name: "Undergraduate Research Assistant",
      technologies: ["Python", "C++", "C"],
      company: "CS 4994 - Undergraduate Research",
      company_information: "Jan 2024 - May 2024, Blacksburg, VA",
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
      company: "CS 1114 - Introduction to Software Design",
      company_information: "Aug 2023 - Dec 2023, Blacksburg, VA",
      link: "https://cs.vt.edu",
      content: [
        "▸ Aided 200+ college students in building critical object-oriented programming foundations in Java.",
        "▸ Helped students optimize code by recommending better implementations of data structures and algorithms.",
      ],
    },
    {
      image: NorthropGrumman,
      name: "Software Engineer Intern",
      technologies: [
        "Python",
        "JSON",
        "Groovy Scripts",
        "Terminal",
        "Vim",
        "Git",
        "Jenkins",
        "Jira",
        "Docker",
        "OpenSearch Dashboards",
      ],
      company: "Northrop Grumman",
      company_information: "Jun 2023 - Aug 2023, Baltimore, MD, Secret Clearance",
      link: "https://www.northropgrumman.com",
      content: [
        "▸ Led team to achieve above-expected story completion targets through effectively coordinating resources\
        and prioritizing high-risk stories as rotating scrum lead.",
        "▸ Developed new health monitoring scripts used on the Jenkins pipeline to better diagnose and prevent impending\
        build failures, implementing diagnostic filtering of health data on OpenSearch Dashboards.",
        "▸ Increased efficiency of Jenkins pipeline data collection scripts to yield a 20% time reduction in the data\
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
    <div className="cardslist_work_toplevel">
      <div className="cardslist_work">
        {c.map((i) => {
          return <CardsListCards i={i} width={"100%"} />;
        })}
      </div>
    </div>
  );
};
