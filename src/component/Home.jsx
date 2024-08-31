import img from '../assets/guna.jpg';
export const Home = () => {
    return (
        <section className="home w-screen h-screen  flex flex-col items-center justify-center text-center" >
            <div id="stars3"></div>
            <div className="image md:w-64 md:h-64 max-sm:w-48 max-sm:h-48 mt-12 ">
                <img className="profile-image md:w-64 md:h-[290px] sm:w-64 sm:h-64 max-sm:w-48 max-sm:h-56" src={img} alt="" />
            </div>
            <div className="content-text  font-font-poppins">
                <h2 className=' md:text-4xl sm:text-2xl'>Hi I'm<span className='md:text-5xl max-sm:text-4xl'> GUNA</span></h2>
                <p className='md:text-xl sm:text-xs w-5/6 '>
                    I'm a seasoned Web Developer with years of extensive experience.
                </p>
                <p className=" md:text-xl sm:text-xs w-5/6">My expertise lies in designing, developing, and more..,</p>
                <p className='md:text-xl sm:text-xs w-5/6'>to create impactful websites..</p>
            </div>
            <a href="#end" className=" md:text-xl  sm:text-xs m-4 text-center hover:bg-[rgba(0,0,0,0.94)] px-8 py-2 bg-[#000000] rounded-full text-white font-light transition duration-200 ease-linear">Connect With Me </a>
        </section>

    )
}
