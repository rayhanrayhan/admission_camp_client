import React, { useEffect, useState } from 'react';
import BannerShare from '../../Shared/BannerShare/BannerShare';
import AllClgCards from './AllClgCards';

const College = () => {

    const [colleges, setColleges] = useState([]);

    useEffect(() => {
        fetch('/college.json')
            .then((res) => res.json())
            .then((data) => setColleges(data));
    }, []);


    return (
        <div className='bg-gray-100 mb-14'>
            <BannerShare
                title="Collge"></BannerShare>
            <section className=''>
                <div className='w-9/12 mx-auto py-16'>

                    <div className='grid grid-cols-1 md:grid-cols-3 gap-2'>
                        {colleges.map((college) => (
                            <AllClgCards
                                key={college._id} college={college}
                            ></AllClgCards>
                        ))}
                    </div>
                </div>




            </section>
        </div>
    );
};

export default College;