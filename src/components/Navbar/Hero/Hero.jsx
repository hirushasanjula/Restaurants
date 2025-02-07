import React from "react";
import Food1 from "../../../assets/biriyani.png";
import Food2 from "../../../assets/burger.png";
import Food3 from "../../../assets/coffe.png";
import bgImg from "../../../assets/bg.png";

const ImageList = [
    {
        id: 1,
        img: Food1,
    },
    {
        id: 2,
        img: Food2,
    },
    {
        id: 3,
        img: Food3,
    }
];

const Hero = () => {
    const [imageId, setImageId] = React.useState(Food1);

    return (
        <div className="min-h-[550px] sm:min-h-[600px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200">
            <div className="container pb-8 sm:pb-0">
                <div className="grid grid-cols-1 sm:grid-cols-2">
                    {/* Left */}
                    <div
                     data-aos="zoom-out"
                     data-aos-duration="400"
                     data-aos-once="true"
                     className="flex flex-col justify-center gap-4 p-10 sm:pt-0 text-center sm:text-left order-2 sm:order-1">
                        <h1 className="text-5xl sm:text-left lg:text-7xl font-bold">
                            Welcome to the Food Zone
                        </h1>
                        <p className="text-sm">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum.
                        </p>
                        <div>
                            <button className="bg-gradient-to-r from-green-500 to-green-700 text-white px-4 py-1 rounded-full hover:scale-105 duration-300 flex items-center gap-3">
                                Order now
                            </button>
                        </div>
                    </div>
                    {/* Right */}
                    <div className="order-1 sm:order-2 min-h-[450px] sm:min-h-[450px] flex justify-center items-center relative">
                        <div className="flex justify-center items-center h-[300px] sm:h-[450px] overflow-hidden">
                            <img
                                data-aos="zoom-in"
                                data-aos-duration="300"
                                data-aos-once="true"
                                src={imageId}
                                alt="Selected Food"
                                className="w-[300px] sm:w-[450px] mx-auto spin"
                            />
                        </div>
                        {/* Image Selector */}
                        <div className="flex flex-row sm:flex-col gap-4 absolute bottom-4 sm:bottom-auto sm:top-1/2
                         sm:-translate-y-1/2 sm:right-4 p-2 bg-white/30 rounded-full shadow-md">
                            {ImageList.map((item) => (
                                <img
                                    data-aos="zoom-in"
                                    data-aos-duration="400"
                                    data-aos-once="true"
                                    key={item.id}
                                    src={item.img}
                                    alt="Food Option"
                                    className="max-w-[60px] sm:max-w-[80px] h-[60px] sm:h-[80px] object-contain cursor-pointer
                                     hover:scale-105 duration-300 rounded-full border border-gray-200 shadow-md"
                                    onClick={() => setImageId(item.img)}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
