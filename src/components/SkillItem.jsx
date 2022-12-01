import React from 'react'

const SkillItem = ({image, content}) => {
  return (
    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
        <img src={image} className='w-20 mx-auto' />
        <p className='my-4'>{content}</p>
    </div>
  )
}

export default SkillItem