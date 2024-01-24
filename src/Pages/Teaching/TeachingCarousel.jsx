import React, { useState } from "react";
//import './Carousel.sass'
import { CarouselCards } from "../../Components/CarouselCards.jsx";

export const TeachingCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const c = [
    {
      name: "Mathematics Tutor",
      technologies: [],
      description: "MATHNASIUM",
      description2: "Oct 2020 - Jun 2021 · Falls Church, VA",
      link: "https://www.mathnasium.com/fallschurch/schedules",
      content: [
        "• Tutored 30+ elementary, middle, and high school students core mathematics course\
        topics [through calc I], in addition to SAT/ACT prep.",
        "• Targeted personalized key areas of improvement, emphasizing experimentation of current\
        topics with previously known material.",
        "• Helped students reach a higher level of understanding in coursework and advance topics,\
        resulting in higher quiz and test scores post-instruction.",
      ],
    },
    {
      name: "Python Instructor",
      technologies: [],
      description: "STEM exCEL",
      description2: "Nov 2019 - Mar 2020 · Fairfax, VA",
      link: "https://stemexcel.org",
      content: [
        "• Instructed 20+ 4th - 6th grade students Python programming, introducing text-based\
        terminal projects such as random password and unique username generators.",
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

      {/*
            <div className="carousel_buttons">
                <button className="carousel_buttons_arrow" onClick={() => { updateIndex(activeIndex - 1); }}>
                    <span class="material-symbols-outlined">arrow_back_ios</span>{" "}
                </button>

                <div className="carousel_buttons_dots">
                    {c.map((i, index) => {
                        return (
                            <button className="carousel_buttons_dots_b" onClick={() => { updateIndex(index); }}>
                                <span className={`material-symbols-outlined
                                    ${index === activeIndex ? "indicator-symbol-active" : "indicator-symbol"}`}>
                                    radio_button_checked
                                </span>
                            </button>
                        );
                    })}
                </div>

                <button className="carousel_buttons_arrow" onClick={() => { updateIndex(activeIndex + 1); }}>
                    <span class="material-symbols-outlined">arrow_forward_ios</span>{" "}
                </button>
            </div>
            */}
    </div>
  );
};
