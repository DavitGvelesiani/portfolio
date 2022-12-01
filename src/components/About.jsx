import React from 'react'

const About = () => {
    return (
        <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300 sm:gap-4'>
          <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
              <div className='sm:text-right pb-8 pl-4'>
                <p className='text-4xl font-bold inline border-b-4 border-blue-500'>
                  About
                </p>
              </div>
              <div></div>
              </div>
              <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                <div className='sm:text-right text-4xl font-bold'>
                  <p>Hi. I'm Davit Gvelesiani, nice to meet you. Please take a look around.</p>
                </div>
                <div>
                  <p>I am a beginner web and mobile developer. I am passionate about building applications with exellent user interfaces 
                  that improves the lives of those around me. 
                  I am currently looking for an internship in the mentioned directions, 
                  or anything else related with development, I am always ready to learn something new.
                  if you are interested, I look forward to your suggestions! 
                  </p>  
                </div>
              </div>
          </div>
        </div>
    );

}

export default About