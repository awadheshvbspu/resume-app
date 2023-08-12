import React from 'react'
import { contact } from '../data';
import logo from '../assets/img/logo.svg';
import Social from './Social';

export default function Contact() {
  return (
    <section className='section before:content-ornament before:flex before:justify-center lg:before:mb-[44px]' id='contact'>
      <div className='container mx-auto'>
      <h2 className='section-title text-accent'>{contact.title}</h2>
      <h2 className='section-subtitle'>{contact.subtitle}</h2>
      {/* logo */}
      <div className='max-w-[200px] lg:max-w-xs mx-auto mb-28'>
        <img src={logo} alt='' className='w-full'/>
      </div>
      <div className='flex justify-center'>
        <Social/>
      </div>
      </div>
    </section>
  )
}

