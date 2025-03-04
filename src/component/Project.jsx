"use client";
import React from "react";
import { HeroParallax } from "./hero-parallax";
import po from '../assets/1.png';
import po1 from '../assets/project/project-two.png';
import po2 from '../assets/project/project-three.png';
import po3 from '../assets/project/project-four.png';
import po4 from '../assets/project/project-five.png';
import po5 from '../assets/project/project-six.png';
import po6 from '../assets/project/project-seven.png';
 
export const Project = () => {
    const products = [
    {
      title: "Yum Zoom",
      link: "https://yumzoom.vercel.app/",
      thumbnail:po5,
    },
    {
      title: "Ai Research Assistant",
      link: "https://airesearchassistant.vercel.app/",
      thumbnail:po1,
    },
    {
      title: "Yum Zoom",
      link: "https://yumzoom.vercel.app/",
      thumbnail:po5,
    },
    {
      title: "Watch-e-Commerce",
      link: "https://watch-e-commerce-rho.vercel.app/",
      thumbnail: po6,
  },
    {
      title: "Game based learning",
      link: "https://learncode-seven.vercel.app/",
      thumbnail:po2,
    },
    {
      title: "Old portfolio",
      link: "https://portfolio-website-gunas-projects-2ae16aeb.vercel.app/",
      thumbnail:po3,
    },
    {
      title: "IETE Design contest",
      link: "https://fanciful-kitten-2ed1a7.netlify.app/",
      thumbnail:po,
    },
    {
      title: "Ai Research Assistant",
      link: "https://airesearchassistant.vercel.app/",
      thumbnail:po1,
    },
    {
      title: "amazon-clone",
      link: "https://amazon-cyan-mu.vercel.app/",
      thumbnail:po4,
    },
   
    {
      title: "Game based learning",
      link: "https://learncode-seven.vercel.app/",
      thumbnail:po2,
    },
    // {
    //   title: "IETE Design contest",
    //   link: "https://fanciful-kitten-2ed1a7.netlify.app/",
    //   thumbnail:po,
    // },
 
  ];
  return (
    
    <HeroParallax products={products} />
 
  )
};
