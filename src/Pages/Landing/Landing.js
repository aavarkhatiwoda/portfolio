import React from 'react';
import './Landing.scss';
import Icons from '../../Components/Icons/Icons.js';
import Heatmap from '../../Components/Images/heatmap.svg';



/* 'c' is 'container' */
/* 'col' is 'column'  */
/* 'b' is 'body' */

function Landing() {
  return (
    <div className="landing">
      <div className="landing_c">

        <div className="landing_c_col">
          <div className="landing_c_col1_c">
            <div className="smalltext">Hello! I'm</div>
              <h1 className="largetext">Aavar Khatiwoda</h1>
              <div className="smalltext">
              A computer science student who<br/>
              loves to explore new technologies<br/><br/>
              I teach Python and math to<br/>
              young students, and love fixing<br/>
              computers and and game systems,<br/>
              and doing Minecraft server hosting<br/><br/>
              <Icons />
              </div>
          </div>
        </div>

        <div className="landing_c_col">
          <div className="landing_c_col2_c">
            <img src={Heatmap} alt="heatmap" className="landing_c_col2_c_image" />
          </div>
        </div>

      </div>
    </div>
  )
}

export default Landing;
