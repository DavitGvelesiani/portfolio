import React, { useState } from 'react';
import Logo from '../assets/logo.png';
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs';
import { Link } from 'react-scroll';
import SocialItem from './SocialItem';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center bg-[#0a192f] text-gray-300">
        <div>
            <img src={Logo} alt='logo image' style={{width: '70px', marginLeft: '15px'}} />
        </div>

        <ul className='hidden md:flex'>
          <li>
            <Link to='home' smooth={true} duration={500}>Home</Link>
          </li>
          <li>
            <Link to='about' smooth={true} duration={500}>About</Link>
          </li>
          <li>
            <Link to='skills' smooth={true} duration={500}>Skills</Link>
          </li>
          <li>
            <Link to='work' smooth={true} duration={500}>Work</Link>
          </li>
          <li>
            <Link to='contact' smooth={true} duration={500}>Contact</Link>
          </li>
        </ul>
        

        <div onClick={handleClick} className='md:hidden z-10'>
          {!nav ? <FaBars /> : <FaTimes />}
        </div>

        {/* mobile */}
        <ul className={!nav ? 'hidden' : 'absolute top-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
            <li className='py-6 text-4xl'>
              <Link onClick={handleClick} to='home' smooth={true} duration={500}>Home</Link>
            </li>
            <li className='py-6 text-4xl'>
              <Link onClick={handleClick} to='about' smooth={true} duration={500}>About</Link>
            </li>
            <li className='py-6 text-4xl'>
              <Link onClick={handleClick} to='skills' smooth={true} duration={500}>Skills</Link>
            </li>
            <li className='py-6 text-4xl'>
              <Link onClick={handleClick} to='work' smooth={true} duration={500}>Work</Link>
            </li>
            <li className='py-6 text-4xl'>
              <Link onClick={handleClick} to='contact' smooth={true} duration={500}>Contact</Link>
            </li>
        </ul>

        {/* social */}
        <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
          <ul>
            <SocialItem 
              style={{backgroundColor: '#2563eb'}}
              link={'https://www.linkedin.com/in/davit-gvelesiani-888670241/'}
              content={<>Linkedin <FaLinkedin size={30} /></>}
            />
            <SocialItem
              style={{backgroundColor: '#333333'}}
              link={'https://github.com/DavitGvelesiani'}
              content={<>Github <FaGithub size={30} /></>}
            />
            <SocialItem
              style={{backgroundColor: '#6fc2b0'}}
              link={'gvelesiani99@gmail.com'}
              content={<>Email <HiOutlineMail size={30} /></>}
            />
            <SocialItem
              style={{backgroundColor: '#565f69'}}
              link={'https://drive.google.com/file/d/12_YGVDeNu0XgKaaTEz49f0kFYeurETAO/view?usp=sharing'}
              content={<>Resume <BsFillPersonLinesFill size={30} /></>}
            />
          </ul>
        </div>
    </div>
  )
}

export default Navbar