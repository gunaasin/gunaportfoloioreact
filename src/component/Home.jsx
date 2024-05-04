import img from '../assets/guna.jpg';
export const Home = () => {
    return (
        <section className="home w-screen h-screen  flex flex-col items-center justify-center text-center" >
            <div id="stars3"></div>
            <div className="image">
                <img className="profile-image" src={img} alt="" />
            </div>
            <div className="content-text  font-font-poppins">
                <h2>Hi I'm<span> GUNA</span></h2>
                <p>
                    I'm a seasoned Web Developer with years of extensive experience.
                </p>
                <p className="">My expertise lies in designing, developing, and more..,</p>
                <p>to create impactful websites..</p>
            </div>
            <a href="#end" className=" m-4 text-center hover:bg-[rgba(0,0,0,0.94)] px-8 py-2 bg-[#000000] rounded-full text-white font-light transition duration-200 ease-linear">Connect With Me </a>
        </section>

    )
}
