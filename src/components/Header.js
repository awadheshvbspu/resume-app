import React, { useEffect, useState } from 'react';
//import nav data
import {nav} from '../data';
//import logo
import logo from '../assets/img/logo.svg';
import { Link } from 'react-scroll';
//import icons
import { RiBarChartHorizontalLine,RiCloseFill } from 'react-icons/ri';

export default function Header() {
  const [bg,setBg] = useState(false);
  const [show,setShow] = useState(false)

  useEffect(()=>{
    window.addEventListener('scroll', () =>{
      return window.scrollY > 40 ? setBg(true) : setBg(false)
    })
  })
  return (
    <header className={`${bg ? 'bg-white shadow-lg py-5' : 'py-9'} fixed left-0 right-0 z-50 transition-all duration-300`}>
      <div className='container mx-auto'>
  <div className='flex justify-between items-center'>
  {/* logo */}
  <Link to='home'>
    <img src={logo} alt='' />
  </Link>
     {/* nav */}
     <ul className={`${show ? 'left-0' : '-left-full'} flex flex-col justify-center items-center bg-accent fixed top-0 text-white text-xl capitalize w-80 h-full gap-y-8 transition-all duration-700`}>
      {nav.map((item,i)=>{
        return(
          <li key={i} className='cursor-pointer'>
            <Link to={item.name} activeClass='active' spy={true} smooth={true} offset={-70} duration={500} className='transition-all'>
            {item.name}
            </Link>
          </li>
        )
      })}
     </ul>
     <div className='cursor-pointer' onClick={()=>setShow(!show)}>
      {show ? <RiCloseFill className='w-8 h-8'/> : <RiBarChartHorizontalLine className='w-8 h-8'/>}
     </div>
  </div>
      </div>
    </header>
  )
}
