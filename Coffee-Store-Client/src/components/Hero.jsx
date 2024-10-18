import React from 'react';
import heroImage from '../assets/images/Hero/hero3.jpg'

const Hero = () => {
    return (
        <div className='relative'>
            <img src={heroImage} alt='image' className='h-screen w-full'/>
            <div className='z-10 absolute top-[70%] left-[2%]'><p className='text-gray-100 shadow-lg font-bold text-9xl'>Coffee</p>
            <p className='text-white font-semibold text-sm text-center mt-5'>Keep yourself Calm !</p>
            </div>
        </div>
        // <div className='w-screen'>
        //     <div className="carousel rounded-box ">
        //         <div className="carousel-item">
        //             <img
        //                 src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp"
        //                 alt="Burger" />
        //         </div>
        //         <div className="carousel-item">
        //             <img
        //                 src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp"
        //                 alt="Burger" />
        //         </div>
        //         <div className="carousel-item">
        //             <img
        //                 src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp"
        //                 alt="Burger" />
        //         </div>
        //         <div className="carousel-item">
        //             <img
        //                 src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp"
        //                 alt="Burger" />
        //         </div>
        //         <div className="carousel-item">
        //             <img
        //                 src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp"
        //                 alt="Burger" />
        //         </div>
        //         <div className="carousel-item">
        //             <img
        //                 src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp"
        //                 alt="Burger" />
        //         </div>
        //         <div className="carousel-item">
        //             <img
        //                 src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp"
        //                 alt="Burger" />
        //         </div>
        //     </div>
        // </div>
    );
};

export default Hero;