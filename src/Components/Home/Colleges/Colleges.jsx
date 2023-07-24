// Colleges.js

import React, { useEffect, useState } from 'react';
import CollegeCards from './CollegeCards';

const Colleges = () => {
    const [colleges, setColleges] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/collegeData')
            .then((res) => res.json())
            .then((data) => setColleges(data));
    }, []);


    const threeColleges = colleges.slice(0, 3);

    return (
        <section className='bg-gray-200 border-emerald-950 shadow-md my-6 '>
            <div className='w-9/12 mx-auto py-16'>
                <div className='flex justify-center'>
                    <h1 className='md:text-5xl font-bold mb-10 py-2 px-3 rounded-lg hover:rounded-xl text-white bg-slate-500 hover:bg-yellow-400 hover:text-green-900'>Top Best Colleges</h1>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-2'>
                    {threeColleges.map((college) => (
                        <CollegeCards key={college._id} college={college}></CollegeCards>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Colleges;
