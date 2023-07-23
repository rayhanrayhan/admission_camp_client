import React from 'react';
import { GiTeacher } from 'react-icons/Gi';
import { BiBookReader } from 'react-icons/Bi';
import { SiBookstack } from 'react-icons/Si';
import { MdOutlineSportsKabaddi } from 'react-icons/Md';

const Features = () => {
    return (
        <section className='w-9/12 mx-auto'>
            <div className='grid grid-cols-1  text-center md:grid-cols-4 my-6'>
                <div className='border border-yellow-400 text-white border-dashed items-center py-12 bg-[#0f0f5a] px-5  hover:shadow-2xl ease-in-out duration-300 shadow-yellow-400 md:rounded-l-3xl rounded-t-3xl md:rounded-tr-none'>
                    <span className='text-5xl  my-3 flex justify-center'> <GiTeacher /></span>
                    <h4 className='md:text-3xl font-semibold'>Certified Teachers</h4>
                    <p className='text-sm text-justify my-1'> Even the all- powerfull pointing has no control about the blind texts it is an almost unorthographic.  </p>

                </div>

                <div className='border border-yellow-400 text-white border-dashed items-center py-12 bg-gray-700 px-5  hover:shadow-2xl ease-in-out duration-300 shadow-yellow-400 '>
                    <span className='text-5xl  my-3 flex justify-center'><BiBookReader /></span>
                    <h4 className='md:text-3xl font-semibold'>Special Education</h4>
                    <p className='text-sm text-justify my-1'> we are committed to fostering an inclusive and supportive learning environment for all students, including those with special educational needs </p>

                </div>
                <div className='border border-yellow-400 text-white border-dashed items-center py-12 bg-[#0f0f5a] px-5  hover:shadow-2xl ease-in-out duration-300 shadow-yellow-400 '>
                    <span className='text-5xl  my-3 flex justify-center'><SiBookstack /></span>
                    <h4 className='md:text-3xl font-semibold'>Book & library</h4>
                    <p className='text-sm text-justify my-1'> we believe in the transformative power of books and the boundless opportunities that a well-equipped library can offer.  </p>

                </div>
                <div className='border border-yellow-400 text-white border-dashed items-center py-12 bg-gray-700 px-5  hover:shadow-2xl ease-in-out duration-300 shadow-yellow-400 md:rounded-r-3xl md:rounded-bl-none rounded-b-3xl'>
                    <span className='text-5xl  my-3 flex justify-center'><MdOutlineSportsKabaddi /></span>
                    <h4 className='md:text-3xl font-semibold'>Sport Clubs</h4>
                    <p className='text-sm text-justify my-1'> you are a seasoned athlete or a novice looking to explore new athletic endeavors  community and a platform for personal growth. </p>

                </div>
            </div>
        </section>
    );
};

export default Features;