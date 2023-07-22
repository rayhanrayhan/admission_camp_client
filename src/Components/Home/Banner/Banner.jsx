import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <section className='header-banner'>
            <div className='overlay'>
                <div className='text-center'>
                    <h1 className='md:text-5xl text-xl font-semibold md:pt-[400px] pt-[120px]  mx-10 text-white  md:font-extrabold'>Unlock Your Future <br /> <span>Enroll with Confidence at our Admission Camp!</span></h1>
                    <button className="py-3 my-4 px-7 rounded-lg text-xl font-medium text-white bg-teal-600">Join Now</button>
                </div>
            </div>


        </section>
    );
};

export default Banner;
