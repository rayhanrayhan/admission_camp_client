import React from 'react';
import { Link } from 'react-router-dom';

const ReserachCards = ({ paper }) => {
    const { img, date, name, description, author, reports } = paper;

    return (
        <div className=" bg-[#0f0f5a] bg-opacity-90 py-2 rounded-lg antialiased text-gray-900">
            <div>

                <div className='flex justify-center mt-2'>
                    <img src={img} alt=" " className="w-72  rounded-lg shadow-md" />
                </div>


                <div className="relative px-10 -mt-10   ">
                    <div className="bg-white p-2 mb-3 rounded-lg shadow-lg">
                        <div className="flex items-baseline">
                            <span className="bg-teal-200 text-teal-800 text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
                                {date}
                            </span>

                        </div>

                        <h4 className="mt-1 text-xl font-semibold uppercase leading-tight truncate">{author}</h4>

                        <div className="mt-1 text-justify">
                            {description}

                        </div>
                        <div className="mt-4">
                            <Link to={reports}>
                                <button className="py-3 w-full mb-1 px-7 rounded-lg text-xl font-medium text-white bg-[#1c2746] hover:bg-[#0f0f5a]"> Papers Link</button>
                            </Link>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ReserachCards;