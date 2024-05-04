"use client";
import React from "react";
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "../component/text-reveal-card";
export const Contact = () => {
  return (
    <div className="overflow-hidden"  id="end">
      <div id="stars3"></div>
      <div className="flex items-center justify-center  h-[40rem] rounded-2xl w-full">
      <TextRevealCard
        text="guna.asin06@gmail.com"
        revealText="  +91 8838620637"
      >
        <TextRevealCardTitle className={'font-popins'}>
         Contact Us 
        </TextRevealCardTitle>
        <TextRevealCardDescription className={'font-popins'}>
        we're committed to providing timely and helpful responses to all inquiries. Don't hesitate to get in touch – we're here to help !
        </TextRevealCardDescription>
      </TextRevealCard>
    </div>
    <div className="flex items-center justify-center w-screen endofera" >
        <ul className="flex">
          <li className="project-textp text-3xl mx-8 my-4 ease-in duration-200 hover:my-1"><a href="https://www.linkedin.com/in/guna-mn/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><i class="fa-brands fa-linkedin-in"></i></a></li>
          <li className="project-textp text-3xl mx-8 my-4 ease-in duration-200 hover:my-1"><a href="https://github.com/gunaasin"><i class="fa-brands fa-github"></i></a></li>
          <li className="project-textp text-3xl mx-8 my-4 ease-in duration-200 hover:my-1"><a href="mailto:guna.asin06@gmail.com"><i class="fa-solid fa-envelope"></i></a></li>
          <li className="project-textp text-3xl mx-8 my-4 ease-in duration-200 hover:my-1"><a href="https://codepen.io/G-U-N-A"><i class="fa-brands fa-codepen"></i></a></li>
        </ul>
    </div>
    </div>
  )
}
