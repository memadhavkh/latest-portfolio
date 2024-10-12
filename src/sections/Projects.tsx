'use client'
import project_1 from '@/assets/images/project-1.png'
import project_3 from '@/assets/images/project-3.png'
import project_2 from '@/assets/images/project_2.png'
import project_4 from '@/assets/images/project_4.png'
import project_5 from '@/assets/images/project_5.png'
import CheckCircleIcon from '@/assets/icons/check-circle.svg'
import ArrowUpRight from '@/assets/icons/arrow-up-right.svg'
import Image from "next/image";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import { useRef } from 'react'

const portfolioProjects = [
  {
    company: "Delhi Eats",
    year: "2024",
    title: "Full Stack Restaurant Order Platform",
    results: [
      { title: "JWT Authentication and Typescript" },
      { title: "OTP Verification and Form Validation" },
      { title: "Dedicated Admin Routes" },
      { title: "Payment Integration With Stripe" },
    ],
    link: "https://delhi-eats.onrender.com/",
    image: project_1,
  },
  {
    company: "Money Vision",
    year: "2023",
    title: "Full Stack Expense Tracker",
    results: [
      { title: "Authentication via Clerk (Core 2)" },
      { title: "Built with Next.js 14" },
      { title: "PostgreSQL & Drizzle ORM" },
      { title: "Income and expense toggle" },
    ],
    link: "https://money-vision-zwmh.vercel.app/",
    image: project_3,
  },
  {
    company: "Code Bharat",
    year: "2024",
    title: "Solve DSA Problems In Javascript",
    results: [
      { title: "Static Side Rendering Powered By Next.js" },
      { title: "Lazy Loading for increasing response time " },
      { title: "Firebase Integration for data management" },
    ],
    link: "https://code-bharat.vercel.app/",
    image: project_2,
  },
  {
    company: "StreamSpot",
    year: "2023",
    title: "Search Any Movie You Want",
    results: [
      { title: "Frontend React Application for Movies" },
      { title: "Infinite Scroll and Recommendations" },
      { title: "Used TMDB API, for the movie and shows collection" },
    ],
    link: "https://movies-app-react-liard.vercel.app/",
    image: project_4,
  },
  {
    company: "Sundown Studio",
    year: "2022",
    title: "A Design Studio",
    results: [
      { title: "Captivating Animations and Smooth Loader" },
      { title: "Responsive for mobile and desktop devices" },
      { title: "Used GSAP And LocomotiveJS" },
    ],
    link: "https://super-cendol-0ad2a4.netlify.app/",
    image: project_5,
  },
];

export const ProjectsSection = () => {
  const projectsRef = useRef(null);
  return (
    <section className="pb-16 lg:py-24" id='projects' ref={projectsRef}>
      <div className="container" >
        <SectionHeader eyebrow="Real World Results" title="Featured Projects" description="See how I transformed concepts into engaging digital experiences"  />
        <div className="flex flex-col mt-10 gap-20 md:mt-20">
          {portfolioProjects.map((project, projectIndex) => (
            <Card className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky" key={projectIndex} style={{
              // TODO
              top: `calc(64px  + ${projectIndex  * 40}px)`
            }}>
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
              <div className="lg:pb-16">
                <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex font-bold uppercase tracking-widest text-sm gap-2 text-transparent bg-clip-text">
                <span>{project.company}</span>
                <span>&bull;</span>
                <span>{project.year}</span>
                </div>
                <h3 className="font-serif text-2xl md:text-4xl mt-2 md:mt-5">{project.title}</h3>
                <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                  {project.results.map((result, idx) => (
                    <li key={idx} className="flex gap-2 text-sm md:text-base text-white/50">
                      <CheckCircleIcon className="size-5 md:size-6 lg:size-6" />
                      <span>{result.title}</span>
                    </li>
                  ))}
                </ul>
                <a href={project.link} target='_blank'>
                <button className="bg-white text-gray-950 h-12 w-full md:w-auto md:px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                  <span>Visit Live Site</span>
                  <ArrowUpRight className="size-4" />
                </button>
               </a>
               </div>
               <div className="relative">
                <Image className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none" src={project.image} alt={project.title} />
               </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
