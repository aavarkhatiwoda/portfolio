import React, { useState } from "react";
import "../../Components/CardsList.sass";
import { CardsListCards } from "../../Components/CardsListCards.jsx";
import PersonalProject from "../../Components/Images/PersonalProject.png";
import VirginiaTech from "../../Components/Images/VirginiaTech.png";

export const ProjectsCardsList = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const c = [
    {
      image: PersonalProject,
      name: "Software Engineer Portfolio",
      technologies: ["ReactJS", "JSX", "Sass", "Netlify"],
      company: window.location.host,
      company_information: "2020 - Present, Continuous Learning & Development",
      link: "https://github.com/aavarkhatiwoda/portfolio",
      content: [
        "▸ Self-taught ReactJS developer with 5+ years of experience. Built custom professional software engineer\
        portfolio page to highlight relevant technical expertise and leadership/research experience.",
        "▸ Emphasize high-quality user interface and user experience through designing fully custom and responsive\
        layouts optimized for common screen sizes up to 4k resolution.",
      ],
    },
    {
      image: VirginiaTech,
      name: "Multimedia Web and Video Server",
      technologies: ["C"],
      company: "Computer Systems / Operating Systems, Course Project",
      company_information: "Apr 2024 - May 2024",
      link: "https://cs.vt.edu",
      content: [
        "▸ Built a robust and tested multimedia server with multiple client support and protocol\
        independence using HTTP/1.1 and TCP protocols to serve files and stream MP4 video.",
        "▸ Authenticated user logins by verifying user-specific JSON web tokens through a\
        token-based authentication API.",
      ],
    },
    {
      image: VirginiaTech,
      name: "Job Control Shells",
      technologies: ["C"],
      company: "Computer Systems / Operating Systems, Course Project",
      company_information: "Jan 2024 - Feb 2024",
      link: "https://cs.vt.edu",
      content: [
        "▸ Developed a Unix-based customizable shell with full capabilities of executing basic\
        built-in commands and advanced custom commands, supporting pipes, I/O redirection, and\
        programs requiring exclusive terminal access.",
        "▸ Utilized posix_spawn to manage child processes for advanced custom commands, ensuring\
        child processes retain necessary terminal control, maintaining support for multithreaded\
        programs.",
        "▸ Incorporated autonomous signals through the OS Kernel to track foreground and background\
        job status changes (i.e., SIGCHILD, SIGINT, SIGSTOP).",
      ],
    },
  ];

  return (
    <div className="cardslist_projects_toplevel">
      <div className="cardslist_projects">
        {c.map((i) => {
          return <CardsListCards i={i} width={"100%"} />;
        })}
      </div>
    </div>
  );
};
