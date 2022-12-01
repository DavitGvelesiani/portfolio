import React from 'react'
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import FireBase from '../assets/firebase.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import ReactNativeImg from '../assets/react-native.png';
import SkillItem from './SkillItem';


const Skills = () => {
  return (
    <div name="skills" className='w-full h-screen bg-[#0a192f] text-gray-300'>
      
      <div className='max-w-[1000px] p-4 mx-auto flex flex-col justify-center w-full h-full'> 
        
        <div>
            <p className='text-4xl font-bold inline border-b-4 border-blue-500'>Experience</p>
            <p className='py-4'>// These are the technologies I've worked with</p>
        </div>
        
        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
          <SkillItem image={HTML} content={'HTML'} />
          <SkillItem image={CSS} content={'CSS'} />
          <SkillItem image={JavaScript} content={'Javascript'} />
          <SkillItem image={ReactImg} content={'React JS'} />
          <SkillItem image={ReactNativeImg} content={'React Native'} />
          <SkillItem image={Tailwind} content={'Tailwind-CSS'} />
          <SkillItem image={FireBase} content={'Firebase'} />
          <SkillItem image={GitHub} content={'Git/Github'} />
          
        </div>

      </div>
    
    </div>
  )
}

export default Skills