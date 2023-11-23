import React from 'react';
import "./Topics.css";
import { frequencies, daw, vocalsProcessing, mixing, mixingConsole, mastering } from "../../assets/index";
import { useState } from 'react';

const CircleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
    <circle cx="4" cy="4" r="4" fill="#E63946" />
  </svg>
);

const Topics = () => {
  const [currentImage, setCurrentImage] = useState(frequencies);

  function handleClick(text) {
    setCurrentImage(text);
  }

  return (
    <section className='topics' id='topics'>
      <div className="wrapper">
        <h1 className="topics-title">
          What will you learn?
        </h1>
        <div className="content-container">
          <ul>
            {[
              { label: 'What are frequencies?', image: frequencies },
              { label: 'Using DAW', image: daw },
              { label: 'Vocals Processing', image: vocalsProcessing },
              { label: 'Mixing', image: mixing },
              { label: 'Mixing Console', image: mixingConsole },
              { label: 'Mastering', image: mastering },
            ].map((topic, index) => (
              <li key={index} onMouseEnter={() => handleClick(topic.image)}>
                <CircleIcon />
                {topic.label}
              </li>
            ))}
          </ul>
          <div className="image-wrapper">
            <img src={currentImage} alt="Current Topic" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Topics;
