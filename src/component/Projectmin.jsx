import React from 'react';
import po from '../assets/1.png';
import po1 from '../assets/project/project-two.png';
import po2 from '../assets/project/project-three.png';
import po3 from '../assets/project/project-four.png';
import po4 from '../assets/project/project-five.png';
import po5 from '../assets/project/project-six.png';

export const Projectmin = () => {
    const products = [
        {
            title: "IETE Design contest",
            link: "https://fanciful-kitten-2ed1a7.netlify.app/",
            thumbnail: po,
        },
        {
            title: "Nike",
            link: "https://nikeecomerce.vercel.app/",
            thumbnail: po1,
        },
        {
            title: "Game based learning",
            link: "https://learncode-seven.vercel.app/",
            thumbnail: po2,
        },

        {
            title: "Old portfolio",
            link: "https://portfolio-website-gunas-projects-2ae16aeb.vercel.app/",
            thumbnail: po3,
        },

        {
            title: "Pixel Perfect",
            link: "#",
            thumbnail: po5,
        },
        {
            title: "Music & Movie",
            link: "https://songsmoviesmth.vercel.app/",
            thumbnail: po4,
        },
    ];

    return (
        <div className='w-screen flex justify-center items-center flex-col'>
            {products.map((product, index) => (
                <a key={index} href={product.link} className="block my-5 ">
                    <img
                        src={product.thumbnail}
                        height="300"
                        width="300"
                        className=""
                        alt={product.title}
                    />
                    <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
                        {product.title}
                    </h2>
                </a>


            ))}
        </div>
    );
};
