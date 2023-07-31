import React from 'react'
import { Link } from 'react-router-dom';
import  { useState } from 'react';




import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
const Navbar = () => {
        const [nav, setNav] = useState(false);
        const handleClick = () => setNav(!nav);
      
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#2a2c2a55] text-gray-300'>
    <div className=' font-sans font-weight-bold' >
<h1>SHEUN</h1>
    </div>

       {/* menu */}
       <ul className='hidden md:flex'>
        <li>
          <Link to='/'>
            Home
          </Link>
        </li> 
        <li>
          <a href='about'>About </a>
          
        </li>
        <li>
          <Link to='Portfolio'>
            Portfolio
          </Link>
        </li>
        <li>
          <Link to='Contact'>
            Contact
          </Link>
        </li>
        
      </ul>

 {/* Hamburger */}
 <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>


       {/* Mobile menu */}
       <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
        }
      >
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='/'>
            Home
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='about'>
            About
          </Link>
        </li>
       
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='portfolio'>
            Portfolio
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='contact'>
            Contact
          </Link>
        </li>
      </ul>

       {/* Social icons */}
       <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='/'
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='/'
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='/'
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
         
        </ul>
      </div>
      
      
    </div> 

    
  )
}

export default Navbar
