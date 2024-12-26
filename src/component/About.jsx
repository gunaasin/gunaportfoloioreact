// import TextGenerateEffect from "./text-generate-effect";

// const words = `Harmonizing the artistry of design with the precision of technology,
// my portfolio reflects a rich tapestry of skills. Seamlessly weaving together web development, 
// photography, design, app creation, video editing, and SEO finesse, I specialize in sculpting immersive digital landscapes. 
// Here, innovation seamlessly merges with functionality, ensuring each project shines amidst the digital cacophony. 
// Whether it's breathing life into dynamic websites or orchestrating strategic SEO maneuvers for organic growth,
//  I'm passionately committed to crafting captivating digital odysseys that resonate with audiences across the globe.
// `;
 
export const About = () => {
  return (
    <div className="flex flex-col w-screen items-center justify-center my-40">
      
        <p className=" autoBlur leading-10 md:text-6xl md:font-semibold sm:text-sm  w-4/5 text-center  tracking-wide  font-tsan project-text-start pg-text-span" >
            {/* <TextGenerateEffect words={words} /> */}
            " Harmonizing the artistry of design with the precision of development, my portfolio showcases a dynamic range of skills. From designing intuitive user interfaces to <span className="pg-text-span">developing robust backend</span> systems, I specialize in creating seamless digital experiences. My expertise spans
        </p>
        <ul className=" list-none md:text-9xl sm:text-2xl uppercase font-semibold w-full flex flex-col justify-center items-center  font-tsan">
          <li className="project-text-end py-4 relative right-10 autoBlur  ">Development </li>
          <li className="project-text-start py-4 relative  autoBlur">Backend +</li>
          <li className="project-text-start py-4 relative left-36 autoBlur">Architecture</li>
          <li className=" project-text-end py-4 relative right-52 autoBlur">Designing </li>
          <li className=" project-text-start py-4 relative left-44 autoBlur">And More.</li>
        </ul>
        <p className="autoBlur md:text-5xl md:font-semibold sm:text-sm  w-4/5 text-center text-slate-200 tracking-wide leading-10 font-tsan project-text-end pg-text-span" >
            {/* <TextGenerateEffect words={words} /> */}
            Every project is a testament to my drive for<span className="pg-text-span"> merging innovation with functionality</span>, delivering solutions that captivate visually and excel technically. From crafting immersive web designs to engineering scalable systems, I am committed to shaping <span className="pg-text-span">impactful digital landscapes</span> that resonate with users worldwide."
            {/* Every project is a testament to my commitment to merging innovation with functionality, delivering solutions that are as visually engaging as they are technically sound. Whether it's crafting immersive web designs or engineering scalable systems, I am dedicated to shaping digital landscapes that leave a lasting impact on users worldwide." */}
        </p>
    </div>
  )
}
