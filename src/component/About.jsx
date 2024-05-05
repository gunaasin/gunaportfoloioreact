import TextGenerateEffect from "./text-generate-effect";

const words = `Harmonizing the artistry of design with the precision of technology,
my portfolio reflects a rich tapestry of skills. Seamlessly weaving together web development, 
photography, design, app creation, video editing, and SEO finesse, I specialize in sculpting immersive digital landscapes. 
Here, innovation seamlessly merges with functionality, ensuring each project shines amidst the digital cacophony. 
Whether it's breathing life into dynamic websites or orchestrating strategic SEO maneuvers for organic growth,
 I'm passionately committed to crafting captivating digital odysseys that resonate with audiences across the globe.
`;
 
export const About = () => {
  return (
    <div className="flex w-screen items-center justify-center my-40">
        <p className="md:text-xl sm:text-sm w-3/5 text-center project-textp tracking-wide leading-8 font-poppins" >
            {/* <span className=" text-6xl ">
                About &nbsp;
            </span> */}
            <TextGenerateEffect words={words} />
            </p>
    </div>
  )
}
