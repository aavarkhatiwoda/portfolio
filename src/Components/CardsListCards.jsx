import React from "react";
import "./CardsList.sass";
import "./Skills.sass";

export const CardsListCards = ({ i, width }) => {
  return (
    <div className="cardslist_toplevel" style={{ width: width }}>
      <a
        href={i.link}
        target="_blank"
        rel="noopener noreferrer"
        className="cardslist"
      >
        <img className="cardslist_image" src={i.image} />
        <div className="fontsize1">
          <div className="cardslist_text fontsize2" style={{ fontWeight: 'bold' }}>{i.name}&ensp;</div> {/*➔*/}
          <div className="cardslist_text fontsize2" style={{ fontWeight: 'bold' }}>{i.company}</div>
          <div className="cardslist_text">{i.company_information}</div>
          <div className="horizontal_line" />
          {i.content.map((j) => (
            <li className="cardslist_bp">{j}</li>
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
