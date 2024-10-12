'use client'
import ArrowRightIcon from '@/assets/icons/arrow-up-right.svg'
import grainImage from '@/assets/images/grain.jpg'
import { useRef } from 'react';

export const ContactSection = () => {
  const contactRef = useRef(null)
  return (
   <div className='py-16 pt-12 lg:py-24 lg:pt-20' id='contact' ref={contactRef}>
     <div className='container'>
      <div className='bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center relative overflow-hidden z-0 md:text-left'>
        <div className='absolute inset-0 opacity-5 -z-10' style={{
          backgroundImage: `url(${grainImage.src})`
        }}></div>
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 justify-items-center">
          <div>
            <h2 className='font-serif text-2xl md:text-3xl'>Let&apos;s create something amazing together</h2>
            <p className='text-sm mt-2 md:text-base'>Ready to bring your next project to life? Let&apos;s connect and discuss on how I can help you achieve your goals.</p>
          </div>
          <div className='justify-center items-center flex'>
          <a className='text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max border border-gray-950 group cursor-pointer' href='mailto:mkhservices003@gmail.com'>
            <span className='font-semibold'>Contact Me</span>
            <ArrowRightIcon className="size-4 group-hover:rotate-45 transition duration-300" />
          </a> 
          </div>
        </div>
      </div>
    </div>
   </div>
  )
};
