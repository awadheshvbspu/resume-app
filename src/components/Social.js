import React from 'react';

//import data
import { social} from '../data'

export default function Social() {
  return (
    <div className='flex justify-between max-w-[250px] gap-10 mb-[35px]'>
      {social.map((item,i)=>{
        return(
          <a href={item.href} className='text-3xl hover:text-accent duration-300 transition-all' key={i}>{item.icon}</a>
        )
      })}
    </div>
  )
}

