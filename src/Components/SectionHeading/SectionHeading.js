import React from 'react';
import './SectionHeading.scss';
/*import Icons from '../Icons/Icons.js';*/


/* 'c' is 'container' */

function SectionHeading(props) {
  return (
    <div className="sectionheading">
      <div className="sectionheading_c">
        <h1 className="largetext">{props.name}</h1>
      </div>
    </div>
  );
}

export default SectionHeading;
