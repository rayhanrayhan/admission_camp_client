import React from 'react';

const CollegeCards = ({ college }) => {
    const { collegeImg, college_Name, admission_Process, events, research_Works, sports } = college;



    return (



        <div className=''>
            <div className=" overflow-hidden rounded-xl relative transform hover:-translate-y-2 transition ease-in-out duration-500 shadow-lg hover:shadow-2xl movie-item text-white " >
                <div className="absolute inset-0 z-10 transition duration-300 ease-in-out bg-gradient-to-t from-[#2c2c7a] via-gray-600 to-transparent"></div>
                <div className="relative cursor-pointer group z-10 px-5 pt-10 space-y-6" data-lity="" href="">
                    <div className="align-self-end w-full">
                        <div className="h-32"></div>
                        <div className="space-y-2 detail_info">
                            <div className="flex flex-col space-y-1 inner">

                                <h3 className="text-2xl font-bold text-white" >{college_Name}</h3>
                                <div className="mb-0 text-lg text-gray-100 line-clamp-2"> <span className='font-semibold  underline'>  Admission Process:</span> {admission_Process}</div>
                            </div>
                            <div className=" ">

                                <div>
                                    <ul className=''>
                                        <span className='font-semibold  underline'> Events:
                                        </span>
                                        {events.map((event, index) => (
                                            <li key={index} className="drop-shadow-lg mx-5">
                                                {event.eventName}
                                            </li>
                                        ))}
                                    </ul>
                                </div>



                            </div>
                            <div className="flex flex-col overview">
                                <div className="flex flex-col"></div>
                                <div className="text-sm font-bold  text-gray-100 mb-2 underline">Research Works:</div>
                                <p className="text-xs line-clamp-3 text-justify text-gray-100 mb-2">
                                    {research_Works}
                                </p>
                                <p className="text-xs text-gray-100 mb-6">
                                    <span className="text-sm font-bold text-gray-100  underline">Sports:  </span>   {sports}
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
                <img className="absolute inset-0 transform w-full -translate-y-4" src={collegeImg} style={{ filter: "grayscale(0)" }} />
                <div className="flex flex-row justify-center relative pb-5 space-x-4 z-10">

                    <button className="py-3 mb-1 px-7 rounded-lg text-xl font-medium text-white bg-[#73767e] hover:bg-[#0f0f5a]">View Details</button>
                </div>
            </div>


        </div>
    );
};

export default CollegeCards;