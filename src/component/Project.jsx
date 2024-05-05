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
      title: "Nike",
      link: "https://nikeecomerce.vercel.app/",
      thumbnail:po1,
    },
    {
      title: "IETE Design contest",
      link: "https://fanciful-kitten-2ed1a7.netlify.app/",
      thumbnail:po,
    
    },
    {
      title: "Nike",
      link: "https://nikeecomerce.vercel.app/",
      thumbnail:po1,
    },
   
    {
      title: "Old portfolio",
      link: "https://portfolio-website-gunas-projects-2ae16aeb.vercel.app/",
      thumbnail:po3,
    },
    {
      title: "Game based learning",
      link: "https://learncode-seven.vercel.app/",
      thumbnail:po2,
    },
    {
      title: "Pixel Perfect",
      link: "#",
      thumbnail:po5,
    },
   
    {
      title: "IETE Design contest",
      link: "https://fanciful-kitten-2ed1a7.netlify.app/",
      thumbnail:po,
    },
    {
      title: "Music & Movie",
      link: "https://songsmoviesmth.vercel.app/",
      thumbnail:po4,
    },
   
    {
      title: "Game based learning",
      link: "https://learncode-seven.vercel.app/",
      thumbnail:po2,
    },
    {
      title: "IETE Design contest",
      link: "https://fanciful-kitten-2ed1a7.netlify.app/",
      thumbnail:po,
    },
 
  ];
  return (
    
    <HeroParallax products={products} />
 
  )
};
