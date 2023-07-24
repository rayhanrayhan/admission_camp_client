import React, { useEffect, useState } from 'react';
import BannerShare from '../../Shared/BannerShare/BannerShare';
import { Link } from 'react-router-dom';

const Admission = () => {
    const [admission, setAdmission] = useState([]);

    useEffect(() => {
        fetch('https://admission-camp-client.vercel.app/collegeData')
            .then((res) => res.json())
            .then((data) => setAdmission(data));
    }, []);

    return (
        <div className='py-20 bg-gray-200 mb-16'>
            <BannerShare title='Admission' />
            <div className='w-9/12 mx-auto'>
                <div className='pt-3 '>
                    <div className='px-4 gap-4  sm:px-6 lg:px-8'>
                        <div className=''>
                            {admission.map((seat) => (
                                <div key={seat._id} className='my-8 '>
                                    <div className='relative flex hover:shadow-2xl ease-out duration-300  flex-col md:flex-row w-full max-w-[48rem] mx-auto rounded-xl bg-white bg-clip-border text-gray-700 shadow-md'>
                                        <div className='relative m-0 w-full md:w-2/5 shrink-0 overflow-hidden rounded-t-xl md:rounded-xl md:rounded-l-none bg-white bg-clip-border text-gray-700'>
                                            <img
                                                src={seat.collegeImg}
                                                alt='image'
                                                className='h-full w-full object-cover'
                                            />
                                        </div>
                                        <div className='p-6 w-full flex flex-col justify-between'>
                                            <div>
                                                <h6 className='mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased'>
                                                    <span className='text-black font-bold'>Last Date:</span>{' '}
                                                    {seat.date}
                                                </h6>
                                                <h4 className='mb-2 block font-sans text-2xl font-bold leading-snug tracking-normal text-blue-gray-900 antialiased'>
                                                    {seat.college_Name}
                                                </h4>
                                                <p className='mb-4 block font-sans text-base  font-bold text-justify leading-relaxed text-block antialiased'>
                                                    Admission Process:
                                                    <span className='text-justify font-normal line-clamp-3'>
                                                        {seat.admission_Process}
                                                    </span>
                                                </p>
                                            </div>
                                            <Link to={`/admission/${seat._id}`}>
                                                <button className='py-3 w-full mb-1 px-7 rounded-lg text-xl font-medium text-white bg-[#1c2746] hover:bg-[#0f0f5a]'>
                                                    Admission Now
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Admission;
