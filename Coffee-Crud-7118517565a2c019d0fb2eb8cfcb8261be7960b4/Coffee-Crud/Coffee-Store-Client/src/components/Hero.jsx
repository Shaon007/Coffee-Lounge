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
    );
};

export default Hero;