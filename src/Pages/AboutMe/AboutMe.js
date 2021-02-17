import React from 'react';
import './AboutMe.scss';
import SectionHeading from '../../Components/SectionHeading/SectionHeading.js';

/* 'c' is 'container' */
/* 'col' is 'column' */
/* 'b' is 'body' */

function ShowSkills() {
  const technologies = [
    {
      name:"Languages",
      content:["Python","Java","C","HTML / SCSS","JavaScript",""]
    },
    {
      name:"Frameworks",
      content:["React","Flask"]
    },
    {
      name:"Tools",
      content:["Github","Terminal","NEAT Python","Inventor","R / Octave","MATLAB"]
    },
    {
      name:"Additional Skills",
      content:["Data Structures","Algorithms","Web Hosting","Communication","Teaching"]
    }
  ];

  return (
    <div className="aboutme_c_col">
      {technologies.map(item => (
        <div className="aboutme_c_col_contents">
          <div className="aboutme_c_col_title">
            <div className="smalltext">
              {item.name}
            </div>
          </div>
          <div className="aboutme_c_col_b">
            {item.content.map(item2 => (
              <ul>
                <li>
                  <div className="smalltext">
                    {item2}
                  </div>
                </li>
              </ul>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function AboutMe() {
  return (
    <div className="aboutme">
      <SectionHeading name="Technical Skills" />
      <div className="aboutme_c">
        <ShowSkills />
      </div>
    </div>
  );
}

export default AboutMe;
