'use client'
import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import JavascriptIcon from '@/assets/icons/square-js.svg'
import HTMLicon from '@/assets/icons/html5.svg'
import CSSicon from '@/assets/icons/css3.svg'
import Chrome from '@/assets/icons/chrome.svg'
import Github from '@/assets/icons/github.svg'
import ReactIcon from '@/assets/icons/react.svg'
import Typescript from '@/assets/images/typescript.svg'
import Database from '@/assets/icons/database.svg'
import Python from '@/assets/icons/python.svg'
import Node from '@/assets/icons/node-js.svg'
import Java from '@/assets/icons/java.svg'
import Firebase from '@/assets/icons/firebase.svg'
import Postgre from '@/assets/icons/postgresql.png'
import Mongo from '@/assets/icons/mongo-icon.svg'
import Next from '@/assets/icons/nextjs.png'
import GraphQL from '@/assets/icons/graphql.png'
import Image from "next/image";
import MapImage from '@/assets/images/mapImage.jpg'
import smileEmoji from '@/assets/images/memoji-smile.png'
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";
import {motion} from 'framer-motion'
import { useRef } from "react";
import bookImage from '@/assets/images/bookImage.jpg'

const toolboxItems = [
  {
    title: "Javascript",
    iconType: JavascriptIcon 
  },
  {
    title: "HTML5",
    iconType: HTMLicon 
  },
  {
    title: "CSS3",
    iconType: CSSicon 
  },
  {
    title: "ReactJS",
    iconType: ReactIcon 
  },
  {
    title: "Chrome",
    iconType: Chrome 
  },
  {
    title: "Github",
    iconType: Github 
  },
  {
    title: "Typescript",
    iconType: Typescript
  },
  {
    title: "Database",
    iconType: Database
  },
  {
    title: "Python",
    iconType: Python
  },
  {
    title: "Node.js",
    iconType: Node
  },
  {
    title: "Java",
    iconType: Java
  },
  {
    title: "Firebase",
    iconType: Firebase
  },
  {
    title: "MongoDB",
    iconType: Mongo
  },
  {
    title: "GraphQL",
    iconType: GraphQL
  },
  {
    title: "NextJS",
    iconType: Next
  },
  {
    title: "PostgreSQL",
    iconType: Postgre
  }

]

const hobbies = [
  {
    title: "Music",
    emoji: "🎧",
    left: "5%",
    top: "5%"
  },
  {
    title: "Nature",
    emoji: "🌳",
    left: "50%",
    top: "5%"
  },
  {
    title: "Travelling",
    emoji: "🧳",
    left: "10%",
    top: "35%"
  },
  {
    title: "Gaming",
    emoji: "🎮",
    left: "35%",
    top: "40%"
  },
  {
    title: "Fitness",
    emoji: "🧘",
    left: "70%",
    top: "45%"
  },
  {
    title: "Reading",
    emoji: "📖",
    left: "5%",
    top: "65%"
  }
]

export const AboutSection = () => {
  const aboutRef = useRef(null)
  const constraintRef = useRef(null)
  return (
    <div className="pt-20 pb-16 lg:py-28">
      <div className="container" id="about" ref={aboutRef}>
      <SectionHeader eyebrow="About Me" title="A Glimpse Into My World" description="Learn more about who I am, what I do, and what inspires me. " />
      <div className="mt-20 flex flex-col gap-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
          <Card className="h-[320px] md:col-span-2 lg:col-span-1">
            <CardHeader title="My Reads" description="Explore Some of My Favourite Books" />
            <div className="w-36 mx-auto mt-2 md:mt-0 relative">
              <Image width={200} height={200} src={bookImage.src} className="rounded-lg" alt="Book Cover" />
            </div>
          </Card>
          <Card className="h-[320px] md:col-span-3 lg:col-span-2">
          <CardHeader title="My Toolbox" description="Explore The technologies and tools I use to create digital experiences." />
            <ToolboxItems items={toolboxItems} itemsWrapperClassName="animate-move-left [animation-duration:15s]" />
            <ToolboxItems items={toolboxItems} className="mt-6" itemsWrapperClassName="animate-move-right [animation-duration:15s]" />
          </Card>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 lg:grid-cols-3">
          <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
            <CardHeader title="Beyond The Code" description="Explore My Interests and hobbies beyond the digital experiences." className="px-6 py-6" />
            <div className="relative flex-1" ref={constraintRef}>
              {hobbies.map((hobby) => (
                <motion.div drag dragConstraints={constraintRef} className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute" key={hobby.title} style={{
                  left: hobby.left,
                  top: hobby.top
                }}>
                  <span className="font-medium text-gray-950">{hobby.title}</span>
                  <span>{hobby.emoji}</span>
                </motion.div>
              ))}
            </div>
          </Card>
          <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
            <div className="absolute bg-gradient-to-r from-emerald-300 to-sky-400 h-full w-full opacity-30"/>
            <Image className="w-full object-cover object-left-top h-[110%]" src={MapImage} alt="map" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/2">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10 animate-ping [animation-duration:2s]"/>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10"/>
              <Image className="size-20" src={smileEmoji} alt="emoji" />
            </div>
          </Card>
        </div>
      </div>
    </div>
    </div>
  )
};
