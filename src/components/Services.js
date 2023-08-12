import React from 'react';

//import data
import { services } from '../data';

export default function Services() {
  return (
    <section className='section' id='services'>
      <div className='conatiner mx-auto'>
       <h2 className='section-title'>{services.title}<span className='dot'></span></h2>
       <p className='section-subtitle'>{services.subtitle}</p>
       {/* services item */}
       <div className='flex flex-col md:flex-row mx-auto items-center gap-y-12 lg:justify-between lg:px-[136px]'>
         {services.skills.map((services,i) =>{
          return(
            <div className='p-[30px] w-full max-w-[417px] flex flex-col text-center lg:text-left hover:bg-white hover:shadow-2xl cursor-crosshair transition-all duration-700'>
              {/* icon */}
              <div className='w-20 h-20 mb-12 mx-auto lg:mx-0'>
                <img src={services.icon} alt='' className=''/>
              </div>
              <h3 className='text-2xl mb-3 font-semibold'>{services.name}</h3>
              {/* services descripton */}
              <p className='tetx-grey text-lg lg:mb-16'>{services.description}</p>
            </div>
          )
         })}
       </div>
      </div>
    </section>
  )
}

