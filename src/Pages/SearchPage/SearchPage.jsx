import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import AllClgCards from '../College/AllClgCards';

const SearchPage = () => {
    const { searchtext } = useParams()
    const clgData = useLoaderData()
    const [searchData, setSearchData] = useState([])

    useEffect(() => {
        const filterclg = clgData.filter(clg => clg.college_Name === searchtext);
        setSearchData(filterclg);
    }, [searchtext, clgData.length]);

    return (
        <section className=''>
            <div className='w-9/12 mx-auto py-16'>

                <div className='grid grid-cols-1 md:grid-cols-3 gap-2'>
                    {searchData.map((college) => (
                        <AllClgCards
                            key={college._id} college={college}
                        ></AllClgCards>
                    ))}
                </div>
            </div>




        </section>
    );
};

export default SearchPage;