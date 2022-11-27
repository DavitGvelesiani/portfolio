import React from 'react'
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import FireBase from '../assets/firebase.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import ReactNativeImg from '../assets/react-native.png';


const Skills = () => {
  return (
    <div name="skills">
        
        <div>
            <p>Experience</p>
            <p>// These are the technologies I've worked with</p>
        </div>

        <div>
            <img src={HTML} alt="html icon" />
            <p>HTML</p>
        </div>
    </div>
  )
}

export default Skills