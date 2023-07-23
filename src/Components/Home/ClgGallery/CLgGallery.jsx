import React from 'react';

const CLgGallery = () => {
    return (
        <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-24">
            <div>
                <div className='text-center my-2 '>
                    <h1 className='md:text-5xl font-bold text-white bg-[#0f0f5a] py-2 rounded-t-2xl'> Gallery </h1>
                    <p className='bg-yellow-400 font-bold text-gray-800'>Welcome to our Gallery.Unlock Your Future
                        Enroll with Confidence at our Admission Camp!</p>
                </div>




                <div className="-m-1 flex flex-wrap md:-m-2 md:-m-t-0">
                    <div className="flex w-1/2 flex-wrap">
                        <div className="w-1/2 p-1 md:p-2">
                            <img
                                alt="gallery"
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src="https://i.ibb.co/mvP9XVP/07.jpg" />
                        </div>
                        <div className="w-1/2 p-1 md:p-2">
                            <img
                                alt="gallery"
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src="https://i.ibb.co/PjwRrBj/01.jpg" />
                        </div>
                        <div className="w-full p-1 md:p-2">
                            <img
                                alt="gallery"
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src="https://i.ibb.co/7vR26tF/03.jpg" />
                        </div>
                    </div>
                    <div className="flex w-1/2 flex-wrap">
                        <div className="w-full p-1 md:p-2">
                            <img
                                alt="gallery"
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src="https://i.ibb.co/yYD7mCR/09.jpg" />
                        </div>
                        <div className="w-1/2 p-1 md:p-2">
                            <img
                                alt="gallery"
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src="https://i.ibb.co/48pdJGR/06.jpg" />
                        </div>
                        <div className="w-1/2 p-1 md:p-2">
                            <img
                                alt="gallery"
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src="https://i.ibb.co/ry7j9mh/04.jpg" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CLgGallery;