import React, { useContext, useEffect, useState } from 'react';
import { Link, } from 'react-router-dom';
import BannerShare from '../../Shared/BannerShare/BannerShare';
import { AuthContext } from '../../Providors/AuthProvider';


const MyCollege = () => {
    const [myClgData, setMyClgData] = useState([]);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        if (user && user.email) {
            fetch(`https://admission-camp-client.vercel.app/mycollege/${user.email}`)
                .then((res) => res.json())
                .then((data) => setMyClgData(data));
        }
    }, [user]);

    return (
        <div className='py-20 bg-gray-200 mb-16'>
            <BannerShare title='Our College' />
            <div className='w-9/12 mx-auto'>
                <div className='pt-3 '>
                    <div className='px-4 gap-4  sm:px-6 lg:px-8'>
                        <div className=''>
                            {myClgData.map((data) => (
                                <div key={data._id} className='my-8 '>
                                    <div className='relative flex hover:shadow-2xl ease-out duration-300  flex-col md:flex-row w-full max-w-[48rem] mx-auto rounded-xl bg-white bg-clip-border text-gray-700 shadow-md'>
                                        <div className='relative m-0 w-full md:w-2/5 shrink-0 overflow-hidden rounded-t-xl md:rounded-xl md:rounded-l-none bg-white bg-clip-border text-gray-700'>
                                            <img
                                                src={data.collegeImg}
                                                alt='image'
                                                className='h-full w-full object-cover'
                                            />
                                        </div>
                                        <div className='p-6 w-full flex flex-col justify-between'>
                                            <div>
                                                <h4 className='mb-2 block font-sans text-2xl font-bold leading-snug tracking-normal text-blue-gray-900 antialiased'>
                                                    {data.collegeName}
                                                </h4>
                                                <h6 className='mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased'>
                                                    <span className='text-black font-bold'>Last Date:</span>{' '}
                                                    {data.admissionDate}
                                                </h6>
                                                <p className='mb-4 block font-sans text-base  font-bold text-justify leading-relaxed text-block antialiased'>
                                                    Admission Process:
                                                    <span className='text-justify font-normal line-clamp-3'>
                                                        {data.address}
                                                    </span>
                                                </p>
                                            </div>
                                            <Link to=''>
                                                <button className='py-3 w-full mb-1 px-7 rounded-lg text-xl font-medium text-white bg-[#1c2746] hover:bg-[#0f0f5a]'>
                                                    Review
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
        </div >
    );
};

export default MyCollege;