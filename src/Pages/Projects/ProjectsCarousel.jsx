import React, { useState } from "react";
import "../../Components/Carousel.sass";
import { CarouselCards } from "../../Components/CarouselCards.jsx";

export const ProjectsCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const c = [
    {
      name: "Software Engineer Portfolio Website [www.aavarkhatiwoda.com]",
      technologies: ["ReactJS", "JSX", "Sass", "Netlify"],
      description: "Personal Project, Continuous Development",
      link: "https://github.com/aavarkhatiwoda/portfolio",
      content: [
        "• Self-taught ReactJS [5+ years] and developed software engineer portfolio website\
                to highlight relevant skills, work history, and projects.",
        "• Emphasized high-quality user interface and user experience through interactive components\
        and visual clarity.",
        "• Designed for mobile to 4k-resolution displays.",
      ],
    },
    {
      name: "Multimedia Web and Video Server",
      technologies: ["C"],
      description: "CS 3214, Computer Systems",
      link: "https://cs.vt.edu",
      content: [
        "• Built robust and tested multimedia server with multiple client support and protocol\
        independence using HTTP/1.1 and TCP protocols to serve files and stream MP4 video.",
        "• Authenticated user logins by verifying user-specific JSON web tokens through a\
        token-based authentication API.",
      ],
    },
    {
      name: "Very Articulated Recreational Service [V.A.R.S.]",
      technologies: ["Python", "Google Web Speech API", "BeautifulSoup4"],
      description: "Personal Project",
      link: "https://github.com/aavarkhatiwoda/vars",
      content: [
        "• Developed J.A.R.V.I.S.-inspired voice assistant to return desired information or go to\
        URLs through web scraping\
                capabilities via Google Web Speech API integration.",
      ],
    },
    // {
    //   name: "Memory Management System",
    //   technologies: ["Java"],
    //   description: "Data Structures and Algorithms",
    //   link: "https://cs.vt.edu",
    //   content: [
    //     "• Created a memory management system for storing variable-length records (course\
    //       information) in a large memory space.",
    //     /*
    //     "• Employed a closed hash table implemented with double hashing to store, access, and\
    //     delete records.",
    //     "• Utilized a doubly-linked list implementation to track free blocks in the memory\
    //     space, accounting for both free block merges and splits.",
    //     */
    //     "• Utilized multiple data structures in conjunction to provide necessary functionality\
    //    toward storing, retrieving, and deleting records, while keeping track of continuous\
    //    changes in free blocks in the memory space.",
    //     "• Grew memory space, free blocks tracker, and hash table as required for new record\
    //     inserts.",
    //   ],
    // },
    // {
    //   name: "Quicksort with Buffer Pool",
    //   technologies: ["Java"],
    //   description: "Data Structures and Algorithms",
    //   link: "https://cs.vt.edu",
    //   content: [
    //     "• Developed program to sort ascii/binary text files through in-memory quicksort mediated\
    //     through a buffer pool.",
    //     "• Sorted 4-byte records within their respective 4096-byte chunks based on 2-byte key\
    //     comparisons.",
    //     "• Organized buffer pool through a Least Recently Used replacement implementation.",
    //     "• Optimized quicksort and buffer pool functionality to utilize minimal resources to\
    //     increase efficiency.",
    //   ],
    // },
    // {
    //   name: "Artist and Song Graph Project",
    //   technologies: ["Java"],
    //   description: "Data Structures and Algorithms",
    //   link: "https://cs.vt.edu",
    //   content: [
    //     "• Created a program to track artist and song associativity, and get the number of items\
    //     in / the diameter of the largest graph component through Union/Find and Floyd's Algorithm.",
    //     "• Utilized unrelated closed hash tables to store, retrieve, and delete artist and song\
    //     records through quadratic probing.",
    //     "• Linked related artists and songs through a doubly-linked list per-unit-unique-key undirected\
    //     graph representation.",
    //   ],
    // },
    // {
    //   name: "Binary Bomb Lab",
    //   technologies: ["x86 Assembly", "GDB"],
    //   description: "Computer Organization I",
    //   link: "https://cs.vt.edu",
    //   content: [
    //     "• Completed the Bomb Lab project that required careful observation and navigation of\
    //     Assembly code in order\
    //             to successfully diffuse the bomb through the completion of 6 phases.",
    //     "• Extracted executable file contents into Assembly code through objdump, written to a\
    //     text file for analysis. Navigated through Assembly code\
    //             and utilized necessary GDB commands to track program execution and memory location\
    //             contents to discover process by which to solve each required\
    //             phase.",
    //     //"• Received a score of 100/100, being one of 28 students out of 53 to successfully complete\
    //     //the required 6 phases.",
    //   ],
    // },
    // {
    //   name: "Terminal Music Finder & Player for Apple Music",
    //   technologies: ["Python", "Apple Music [macOS]"],
    //   description: "",
    //   link: "https://github.com/aavarkhatiwoda/python/blob/main/musicFinder.py",
    //   content: [
    //     "• Created terminal program to search downloaded artist libraries to find potential song\
    //             matches through string matching and play the intended song after user selection.",
    //     "• Incorporated handling of special characters in the input.",
    //   ],
    // },
    // {
    //   name: "Recursive Sudoku Solver Visualizer",
    //   technologies: ["Python", "PyGame"],
    //   description: "",
    //   link: "https://github.com/aavarkhatiwoda/python/blob/main/sudokuSolver.py",
    //   content: [
    //     "• Developed backtracking sudoku application with solving process shown through the\
    //             graphical user interface.",
    //     "• Implemented handling of unsolvable grids.",
    //   ],
    // },
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
