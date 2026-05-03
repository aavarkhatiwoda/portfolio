import React from "react";
import "./CardsList.sass";
import "./Skills.sass";

export const CardsListCards = ({ i, width }) => {
  return (
    <div className="cardslist_cards_toplevel" style={{ width: width }}>
      <a
        href={i.link}
        target="_blank"
        rel="noopener noreferrer"
        className="cardslist_cards"
      >
        <img className="cardslist_cards_image" src={i.image} />
        <div className="cardslist_cards_text fontsize1">
          <b className="cardslist_cards_name fontsize2">{i.name}&ensp;</b> {/*➔*/}
          <div>
            {i.description}
          </div>
          <div>
            {i.description2}
          </div>
          <div className="horizontal_line" />
          {i.content.map((j) => (
            <li className="cardslist_cards_bp">{j}</li>
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
