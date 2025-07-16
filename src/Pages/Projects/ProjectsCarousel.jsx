import React, { useState } from "react";
import "../../Components/Carousel.sass";
import { CarouselCards } from "../../Components/CarouselCards.jsx";
import PersonalProject from "../../Components/Images/PersonalProject.png";
import VirginiaTech from "../../Components/Images/VirginiaTech.png";

export const ProjectsCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const c = [
    {
      image: PersonalProject,
      name: "Software Engineer Portfolio",
      technologies: ["ReactJS", "JSX", "Sass", "Netlify"],
      description: "Personal Project · k-td.com",
      description2: "2020 - Present · Continuous Development",
      link: "https://github.com/aavarkhatiwoda/portfolio",
      content: [
        "• Self-taught ReactJS [5+ years] and developed software engineer portfolio website to highlight\
        relevant skills, work experience,and research/leadership involvements.",
        "• Emphasized high-quality user interface and user experience through interactive components\
        and visual clarity.",
        "• Crafted for mobile to 4k-resolution displays.",
      ],
    },
    {
      image: VirginiaTech,
      name: "Multimedia Web and Video Server",
      technologies: ["C"],
      description: "Virginia Tech · CS 3214, Computer Systems",
      description2: "Apr 2024 - May 2024",
      link: "https://cs.vt.edu",
      content: [
        "• Built a robust and tested multimedia server with multiple client support and protocol\
        independence using HTTP/1.1 and TCP protocols to serve files and stream MP4 video.",
        "• Authenticated user logins by verifying user-specific JSON web tokens through a\
        token-based authentication API.",
      ],
    },
    {
      image: VirginiaTech,
      name: "Job Control Shells",
      technologies: ["C"],
      description: "Virginia Tech · CS 3214, Computer Systems",
      description2: "Jan 2024 - Feb 2024",
      link: "https://cs.vt.edu",
      content: [
        "• Developed a Unix-based customizable shell with full capabilities of executing basic\
        built-in commands and advanced custom commands, supporting pipes, I/O redirection, and\
        programs requiring exclusive terminal access.",
        "• Utilized posix_spawn to manage child processes for advanced custom commands, ensuring\
        child processes retain necessary terminal control, maintaining support for multithreaded\
        programs.",
        "• Incorporated autonomous signals through the OS Kernel to track foreground and background\
        job status changes (i.e., SIGCHILD, SIGINT, SIGSTOP).",
      ],
    },
    {
      image: PersonalProject,
      name: "Very Articulated Recreational Service [V.A.R.S.]",
      technologies: ["Python", "Google Web Speech API", "BeautifulSoup4"],
      description: "Personal Project",
      description2: "Jul 2023",
      link: "https://github.com/aavarkhatiwoda/vars",
      content: [
        "• Developed J.A.R.V.I.S.-inspired voice assistant to return desired information or go to\
        URLs through web scraping capabilities via Google Web Speech API integration.",
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
