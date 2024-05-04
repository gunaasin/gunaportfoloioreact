"use client";
import React from "react";
import { HeroParallax } from "./hero-parallax";
import po from '../assets/1.png';
import po1 from '../assets/project/project-two.png';
import po2 from '../assets/project/project-three.png';
import po3 from '../assets/project/project-four.png';
import po4 from '../assets/project/project-five.png';
import po5 from '../assets/project/project-six.png';

 
export const Project = () => {
    const products = [
    {
      title: "Moonbeam",
      link: "https://gomoonbeam.com",
      thumbnail:po1,
    },
    {
      title: "Cursor",
      link: "https://cursor.so",
      thumbnail:po,
    
    },
    {
      title: "Rogue",
      link: "https://userogue.com",
      
      thumbnail:po1,
    },
   
    {
      title: "Editorially",
      link: "https://editorially.org",
      thumbnail:po3,
    },
    {
      title: "Editrix AI",
      link: "https://editrix.ai",
      thumbnail:po2,
    },
    {
      title: "Pixel Perfect",
      link: "https://app.pixelperfect.quest",
      thumbnail:po5,
    },
   
    {
      title: "Algochurn",
      link: "https://algochurn.com",
      thumbnail:po,
    },
    {
      title: "Rogue",
      link: "https://userogue.com",
      
      thumbnail:po4,
    },
   
    {
      title: "Editorially",
      link: "https://editorially.org",
      thumbnail:po2,
    },
    {
      title: "Editrix AI",
      link: "https://editrix.ai",
      thumbnail:po,
    },
    // {
    //   title: "Aceternity UI",
    //   link: "https://ui.aceternity.com",
    //   thumbnail:po1,
    // },
    // {
    //   title: "Tailwind Master Kit",
    //   link: "https://tailwindmasterkit.com",
    //   thumbnail:po1,
    // },
    // {
    //   title: "SmartBridge",
    //   link: "https://smartbridgetech.com",
    //   thumbnail:po1,
    // },
    // {
    //   title: "Renderwork Studio",
    //   link: "https://renderwork.studio",
    //   thumbnail:po1,
    // },
   

  ];
  return (
    
    <HeroParallax products={products} />
 
  )
};
