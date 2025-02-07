import React from 'react';
import Img1 from "../../assets/biriyani.png";
import Img2 from "../../assets/burger.png";
import Img3 from "../../assets/coffe.png";

const ServicesData = [
    {
        id: 1,
        img: Img1,
        name: "Biryani",
        description:
            "Lorem ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet.",
    },
    {
        id: 2,
        img: Img2,
        name: "Chrispy Chicken Burger",
        description:
            "Lorem ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet",
    },
    {
        id: 3,
        img: Img3,
        name: "Cold Coffee",
        description:
            "Lorem ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet",
    },
];

const Service = () => {
    return (
        <div className='py-10'>
            <div className='container px-4 mx-auto'>
                <div className='text-center mb-12 max-w-[400px] mx-auto'>
                    <p className='text-md bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-green-700'>Our Services</p>
                    <h1 className='text-3xl font-bold'>Services</h1>
                    <p className='text-xs text-gray-400'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam blanditiis suscipit, minima placeat quibusdam voluptatibus!
                    </p>
                </div>
                {/* Card Grid */}
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-10 place-items-center cursor-pointer'>
                    {ServicesData.map(({ id, img, name, description }) => (
                        <div
                        data-aos="zoom-in"
                        data-aos-duration="300"
                         key={id} className='max-w-[300px] rounded-2xl bg-white shadow-lg hover:bg-green-500 transition-all duration-300 p-5 text-center group'>
                            <div className='h-[150px] flex justify-center items-center'>
                                <img 
                                    src={img} 
                                    alt={name} 
                                    className='max-w-[120px] mx-auto block transform group-hover:rotate-6 group-hover:scale-105 duration-300' 
                                />
                            </div>
                            <div className='mt-2 text-center'>
                                <h1 className='text-xl font-bold text-gray-900 group-hover:text-white'>{name}</h1>
                                <p className='text-gray-500 text-sm group-hover:text-white duration-300 line-clamp-2'>{description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Service;
