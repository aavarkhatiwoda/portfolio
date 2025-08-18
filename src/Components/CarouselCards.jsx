import React from "react";
import "./Carousel.sass";
import "./Skills.sass";

export const CarouselCards = ({ i, width }) => {
  return (
    <div className="carousel_cards_toplevel" style={{ width: width }}>
      <a
        href={i.link}
        target="_blank"
        rel="noopener noreferrer"
        className="carousel_cards"
      >
        <img className="carousel_cards_image" src={i.image} />
        <div className="carousel_cards_text fs1">
          <b className="carousel_cards_name fs2">{i.name}&ensp;</b> {/*➔*/}
          <div>
            <i>{i.description}</i>
          </div>
          <div>
            <i>{i.description2}</i>
          </div>
          {i.content.map((j) => (
            <li className="carousel_cards_bp">{j}</li>
          ))}
          <div className="skills_toplevel">
            {i.technologies.map((j) => (
              <a className="skills">{j}</a>
            ))}
          </div>
        </div>
      </a>
    </div>
  );
};
