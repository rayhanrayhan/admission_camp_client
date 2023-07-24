import React, { useEffect, useState } from 'react';

const Review = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://admission-camp-client.vercel.app/reviews')
            .then((res) => res.json())
            .then((data) => setReviews(data));
    }, []);

    return (
        <section className='bg-gray-200 my-28 min-h-screen'>




            <div className='w-9/12 mx-auto '>
                <div className='text-center mt-2 mx-5  md:mx-8'>
                    <h1 className='md:text-5xl font-bold text-white bg-[#0f0f5a]   py-2 rounded-t-2xl'> Review </h1>
                    <p className='bg-yellow-400 px-2 font-bold text-gray-800'>Discover the transformative power of our college through the heartfelt testimonials of our students."!</p>
                </div>




                <div className="pt-3 ">
                    <div className="px-4 grid grid-cols-1 md:grid-cols-3 gap-4 sm:px-6 lg:px-8">
                        {reviews.map((review) => (
                            <div
                                key={review._id}
                                className="max-w-lg px-8 py-5 rounded-md shadow-lg bg-white mb-6"
                            >
                                <div className="flex  space-x-0.5">
                                    {[...Array(5)].map((_, index) => (
                                        <svg
                                            key={index}
                                            className={`w-5 h-5 ${index < parseFloat(review.rating) ? "text-yellow-300" : "text-gray-300"
                                                }`}
                                            fill={index < parseFloat(review.rating) ? "currentColor" : "none"}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path d="M12 2l2.2 6.6h7.3l-5.7 4.2 2.2 6.7-5.7-4.2-5.7 4.2 2.2-6.7L4.5 8.6H11L12 2zm0 2.9L9.7 8.6H3.9l4 2.9-1 3.1 3.9-2.9 3.9 2.9-1-3.1 4-2.9h-5.8L12 4.9zm0 13.4l1.4-4.3h4.6l1.4 4.3-3.5-2.6 1 3 .1.3h-.3l-.3-.1-.8-.6-3.5 2.6z" />
                                        </svg>
                                    ))}
                                </div>
                                <p className="mt-2 text-sm font-medium leading-5 text-gray-500">
                                    {review.date}
                                </p>
                                <div className='flex justify-between mx-2 items-center pb-3'>
                                    <p className="mt-2 text-xl  font-bold  text-gray-900">
                                        {review.author}
                                    </p>
                                    <img className='w-[50px] h-[50px] rounded-full' src={review.img} alt="" />
                                </div>
                                <div className="space-y-1">
                                    <h3 className="font-semibold text-justify text-gray-800">{review.description}</h3>
                                </div>

                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Review;
