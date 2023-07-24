import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import {
    FaShippingFast,
    FaStar,
    FaStarHalfAlt,
    FaRegStar,
} from "react-icons/fa";
import BannerShare from '../../Shared/BannerShare/BannerShare';

const TopClgViewDEtails = () => {

    const viewDetailsData = useLoaderData();
    console.log(viewDetailsData)

    // Helper function to render the rating stars
    const renderRatingStars = (rating) => {
        const stars = [];
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;

        // Full stars
        for (let i = 0; i < fullStars; i++) {
            stars.push(<FaStar key={i} className="inline text-yellow-400" />);
        }

        // Half star
        if (hasHalfStar) {
            stars.push(
                <FaStarHalfAlt key="half" className="inline text-yellow-400" />
            );
        }

        // Empty stars
        const emptyStars = 5 - Math.ceil(rating);
        for (let i = 0; i < emptyStars; i++) {
            stars.push(
                <FaRegStar key={`empty-${i}`} className="inline text-yellow-400" />
            );
        }

        return stars;
    };


    return (

        <div className='py-20 bg-gray-200 mb-16'>
            <BannerShare title='Our College' />
            <div className='w-9/12 mx-auto'>
                <div className='pt-3 '>
                    <div className='px-4 gap-4  sm:px-6 lg:px-8'>
                        <div className=''>
                            <div className='my-8 '>
                                <div className='relative flex hover:shadow-2xl ease-out duration-300  flex-col md:flex-row w-full max-w-[48rem] mx-auto rounded-xl bg-white bg-clip-border text-gray-700 shadow-md'>
                                    <div className='relative m-0 w-full md:w-2/5 shrink-0 overflow-hidden rounded-t-xl md:rounded-xl md:rounded-l-none bg-white bg-clip-border text-gray-700'>
                                        <img
                                            src={viewDetailsData.collegeImg}
                                            alt='image'
                                            className='h-full w-full object-cover'
                                        />
                                    </div>
                                    <div className='p-6 w-full flex flex-col justify-between'>
                                        <div>
                                            <div className='flex justify-between font-sans text-base '>
                                                <h6 className='mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased'>
                                                    <span className='text-black font-bold'>Last Date:</span>{' '}
                                                    {viewDetailsData.date}
                                                </h6>
                                                <p className=" mb-4 text-yellow-400">
                                                    <span className="text-black font-bold">Rating:</span>{" "}
                                                    {renderRatingStars(viewDetailsData.ratings)}
                                                </p>
                                            </div>
                                            <h4 className='mb-2 block font-sans text-2xl font-bold leading-snug tracking-normal text-blue-gray-900 antialiased'>
                                                {viewDetailsData.college_Name}
                                            </h4>
                                            <p className='mb-4 block font-sans text-base  font-bold text-justify leading-relaxed text-block antialiased'>
                                                Admission Process:
                                                <span className='text-justify font-normal line-clamp-3'>
                                                    {viewDetailsData.admission_Process}
                                                </span>
                                            </p>
                                            <p className="mb-4 block font-sans text-base  font-bold  leading-relaxed text-block antialiased">
                                                Sports: {viewDetailsData.sports}
                                            </p>
                                            <p className="mb-4 block font-sans text-base  font-bold  leading-relaxed text-block antialiased">
                                                Sports: {viewDetailsData.sports[0]}
                                            </p>
                                            <p className="mb-4 block font-sans text-base  font-bold  leading-relaxed text-block antialiased">
                                                Number Of Research: {viewDetailsData.research
                                                }
                                            </p>
                                            <p className="mb-4 block font-sans text-base  font-bold  leading-relaxed text-block antialiased">
                                                Research Works: <span className='font-normal'>{viewDetailsData.research_Works
                                                }</span>
                                            </p>
                                        </div>
                                        <Link to={`/admission/${viewDetailsData._id}`}>
                                            < button className='py-3 w-full mb-1 px-7 rounded-lg text-xl font-medium text-white bg-[#1c2746] hover:bg-[#0f0f5a]'>
                                                Admission Now
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default TopClgViewDEtails;
