import React from 'react'

const SocialItem = ({link, content, style}) => {
  return (
    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300' style={style}>
        <a className='flex justify-between items-center w-full text-gray-300'
        href={link}>
            {content}
        </a>
    </li>
  )
}

export default SocialItem