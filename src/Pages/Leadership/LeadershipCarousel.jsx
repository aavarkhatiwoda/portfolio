import React, { useState } from "react";
import { CarouselCards } from "../../Components/CarouselCards.jsx";
import CSOS from "../../Components/Images/CSOS.png";
import Mathnasium from "../../Components/Images/Mathnasium.png";

export const LeadershipCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const c = [
    {
      image: CSOS,
      name: "Founding Vice President",
      technologies: [],
      description: "CS OpenSource at Virginia Tech · Career Development Resources",
      description2: "Jan 2024 - May 2024 · Blacksburg, VA",
      link: "https://www.vt.edu",
      content: [
        "▸ Established a new club targeting students’ career developments through their contributions to open source\
        projects.",
        "▸ Created a timeline of goals and held events to target club growth, and introduced 55+ students to\
        collaborative software development.",
        "▸ Introduced collaborative workflow tools [e.g., Git, GitHub, GitLab] and provided resources to help students\
        find meaningful open source projects of interest.",
      ],
    },
    {
      image: Mathnasium,
      name: "Mathematics Tutor",
      technologies: [],
      description: "Mathnasium",
      description2: "Oct 2020 - Jun 2021 · Falls Church, VA",
      link: "https://www.mathnasium.com/fallschurch/schedules",
      content: [
        "▸ Tutored 30+ elementary, middle, and high school students core mathematics course\
        topics [through calc I], in addition to SAT/ACT prep.",
        "▸ Targeted personalized key areas of improvement, emphasizing experimentation of current\
        topics with previously known material.",
        "▸ Helped students reach a higher level of understanding in coursework and advance topics,\
        resulting in higher quiz and test scores post-instruction.",
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
