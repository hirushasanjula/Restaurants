import React from 'react'
import Slider from 'react-slick'

const testimonialData = [
    {
      id: 1,
      name: "Samuel",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
      img: "https://picsum.photos/101/101",
    },
    {
      id: 2,
      name: "Samuel",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
      img: "https://picsum.photos/101/101",
    },
    {
      id: 3,
      name: "Samuel",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
      img: "https://picsum.photos/101/101",
    },
];

const Testimonial = () => {
    var settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        pauseOnHover: true,
        pauseOnFocus: true,
      };
  return (
    <>
      <div className='data-aos="fade-up" data-aos-duration="300" py-5'>
        <div className='container'>
            <div className='text-center mb-12 max-w-[400px] mx-auto'>
                <p className='text-md bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-green-700'>Testimonial</p>
                <h1 className='text-3xl font-bold'>Testimonial</h1>
                <p className='text-xs text-gray-400'>
                    {" "}
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam blanditiis suscipit, minima placeat quibusdam voluptatibus!
                </p>
            </div>
            {/* testminaol */}
            <div
            data-aos="zoom-in"
            data-aos-duration="300"
            className='grid grid-cols-1 max-w-[600px] mx-auto gap-6'>
                <Slider {...settings}>
                    {testimonialData.map(({ id, name, text, img }) => {
                        return ( 
                            <div key={id} className='my-6'>
                                <div className='flex flex-col justify-center items-center gap-4 text-center
                                shadow-lg p-4 mx-4 rounded-xl bg-green-100 relative
                                '>
                                    <img src={img} alt='' className='rounded-full block mx-auto'/>
                                    <h1 className='text-xl font-bold'>{name}</h1>
                                    <p className='text-gray-400 text-sm'>{text}</p>
                                </div>
                            </div>
                       )
                    })}
                </Slider>
            </div>
        </div>
      </div>
    </>
  )
}

export default Testimonial