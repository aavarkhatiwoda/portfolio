import React from 'react';
import Gmail_Icon from '../Images/gmail_icon.svg';
import Resume_Icon from '../Images/resume_icon.svg';
import Linkedin_Icon from '../Images/linkedin_icon.svg';
import Github_Icon from '../Images/github_icon.svg';
import Resume from '../Images/Resume.pdf';
import './Icons.scss';


function ShowIcons() {
  const iconslist = [
    {
      name:"gmail",
      img:Gmail_Icon,
      link:"mailto:aavarkhatiwoda@gmail.com"
    },
    {
      name:"resume",
      img:Resume_Icon,
      link:Resume
    },
    {
      name:"linkedin",
      img:Linkedin_Icon,
      link:"https://www.linkedin.com/in/aavarkhatiwoda"
    },
    {
      name:"github",
      img:Github_Icon,
      link:"https://www.github.com/aavarkhatiwoda"
    }
  ];

  return (
    <div className="iconslist_div">
      {iconslist.map(item => (
        <a href={item.link} target="_blank" rel="noopener noreferrer">
          <img className={item.name} src={item.img} alt={item.name} /></a>
      ))}
    </div>
  );
}



function App() {
  return (
    <div className="Icons">

      <ShowIcons />

    </div>
  );
}

export default App;
