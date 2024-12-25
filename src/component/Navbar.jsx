import resume from '../assets/project/Guna-Resume.pdf';
export const Navbar = () => {
  return (
    <div className=" nav  backdrop-blur-sm w-screen fixed  h-20 top-0 left-0 right-0 bg-[rgba(255, 255, 255, 0)]  z-50 text-end pr-24 max-sm:pr-3 flex items-end flex-col justify-center">
      <a  href={resume} class="relative inline-flex items-center justify-center p-3 px-6 py-2 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-white rounded-full shadow-md group">
        <span class="absolute inset-0 flex items-center justify-center w-full h-full text-black duration-300 -translate-x-full bg-white group-hover:translate-x-0 ease">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
        </span>
        <span class="absolute flex items-center justify-center w-full h-full text-gray-300 transition-all duration-300 transform group-hover:translate-x-full ease">Resume</span>
        <span class="relative invisible">Button Text</span>
      </a>
      {/* <a href={resume} className="text-center hover:bg-[rgba(237,236,236,0.94)] px-8 py-2 max-sm:px-4 max-sm:py-[5.5px]  bg-[#fffdfd] rounded-full text-black font-mediam transition duration-200 ease-linear">Resume &nbsp;<i class="fa-solid fa-arrow-right-long"></i> </a> */}
    </div>
  )
}
