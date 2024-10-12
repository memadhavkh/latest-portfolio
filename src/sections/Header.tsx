'use client'
import { useEffect, useState } from "react";
import {Link as ScrollLink, scroller} from 'react-scroll'
import { twMerge } from "tailwind-merge";

export const Header = () => {
  const [activeSection, setActiveSection] = useState<string>('hero')
  useEffect(() => {
    console.log(activeSection);
  }, [activeSection])
  const handleSetActive = (to: string) => {
    setActiveSection(to)
  }
  return (
    <div className="flex justify-center items-center fixed top-3 w-full z-10">
      <nav className="flex gap-1 border p-0.5 border-white/15 rounded-full bg-white/10 backdrop-blur">
        <div className={twMerge(activeSection === 'hero' ? 'bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900': '', 'nav-item')}>
          <ScrollLink offset={-70} className='cursor-pointer' to="hero" smooth={true} duration={500} spy={true} onSetActive={handleSetActive}>Home</ScrollLink>
        </div>
        <div className={twMerge(activeSection === 'projects' ? 'bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900': '', 'nav-item')}>
          <ScrollLink offset={-70} className='cursor-pointer' to="projects" smooth={true} duration={500} spy={true} onSetActive={handleSetActive}>Projects</ScrollLink>
        </div>
        <div className={twMerge(activeSection === 'about' ? 'bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900': '', 'nav-item')}>
          <ScrollLink offset={-70} className='cursor-pointer' to="about" smooth={true} duration={500} spy={true} onSetActive={handleSetActive} onClick={() => setActiveSection('about')}>About</ScrollLink>
        </div>
        <div className={twMerge(activeSection == 'contact' ? 'bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900': '', 'nav-item')}>
          <ScrollLink offset={-70} className='cursor-pointer' to="contact" smooth={true} duration={500} onSetActive={handleSetActive} onClick={() => setActiveSection('contact')}>Contact</ScrollLink>
        </div>
        {/*<a href="#home" className="nav-item">Home</a>
        <a href="#projects" className="nav-item">Projects</a>
        <a href="#about" className="nav-item">About</a>
        <a href="#contact" className="nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900">Contact</a> */}
      </nav>
    </div>
  )
};
