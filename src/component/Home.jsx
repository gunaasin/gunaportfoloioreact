import img from '../assets/guna.jpg';
export const Home = () => {
    return (
        <section className="home w-screen h-screen  flex flex-col items-center justify-center text-center" >
            <div id="stars3"></div>
            <div id="stars3"></div>
            <div className="image md:w-64 md:h-64 max-sm:w-48 max-sm:h-48 mt-12 ">
                <img className="profile-image md:w-64 md:h-[290px] sm:w-64 sm:h-64 max-sm:w-48 max-sm:h-56" src={img} alt="" />
            </div>
            <div className="content-text font-popin">
                <h2 className=' md:text-4xl sm:text-2xl font-semibold font-tsan'>Hi, I'm<span className='md:text-6xl max-sm:text-4xl font-tsan constex-span'> GUNA M</span></h2>
                <p className='md:text-2xl sm:text-xs font-semibold pg-text-span'>
                    Delivering dynamic digital experiences through the perfect harmony of <span className='pg-text-span'>design and technology</span>.
                    {/* I’m a seasoned Full-Stack Web Developer specializing in designing and developing seamless digital experiences.From crafting intuitive user interfaces to engineering robust backend systems, I bring creativity and precision to every project I undertake. */}
                </p>
                {/* <p className="  md:text-2xl sm:text-xs w-5/6"> From crafting intuitive user interfaces to engineering robust backend systems, I bring creativity and precision to every project I undertake.</p> */}
                {/* <p className='md:text-xl sm:text-xs w-5/6'>to create impactful websites..</p> */}
            </div>
            {/* <a href="#end" class="  relative top-5 inline-flex items-center justify-start inline-block px-5 py-3 overflow-hidden font-bold rounded-full group">
                <span class="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-slate-300 opacity-[3%]"></span>
                <span class="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8"></span>
                <span class="relative w-full text-left text-gray-400 transition-colors duration-200 ease-in-out  group-hover:text-black font-popin">Connect Me</span>
                <span class="absolute inset-0 border-2 border-black  rounded-full"></span>
            </a> */}
            <a href="#end" className=" md:text-lg  sm:text-xs m-4 text-center hover:bg-[rgba(143,143,143,0.32)]  px-8 py-2 bg-[#000000] rounded-full text-white font-light transition duration-200 ease-linear">Connect With Me</a>
        </section>

    )
}
