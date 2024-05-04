import resume from '../assets/project/Guna-Resume.pdf';
export const Navbar = () => {
  return (
    <div className=" nav  backdrop-blur-sm w-screen fixed h-20 top-0 left-0 right-0 bg-[rgba(255, 255, 255, 0)]  z-50 text-end pr-24 flex items-end flex-col justify-center">
     <a href ={resume} className="text-center hover:bg-[rgba(237,236,236,0.94)] px-8 py-2 bg-[#fffdfd] rounded-full text-black font-mediam transition duration-200 ease-linear">Resume &nbsp;<i class="fa-solid fa-arrow-right-long"></i> </a>
    </div>
  )
}
