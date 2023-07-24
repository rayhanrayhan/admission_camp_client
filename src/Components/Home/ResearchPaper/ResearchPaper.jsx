import React, { useEffect, useState } from 'react';
import ReserachCards from './ReserachCards';

const ResearchPaper = () => {
    const [researchPaper, setResearchPaper] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/research_paper')
            .then((res) => res.json())
            .then((data) => setResearchPaper(data));
    }, []);



    return (
        <div className="container mx-auto mb-32 px-5 py-2 lg:px-32 lg:pt-24">
            <div>
                <div className='text-center my-2 '>
                    <h1 className='md:text-5xl font-bold text-white bg-[#0f0f5a] py-2 rounded-t-2xl'> Research Paper </h1>
                    <p className='bg-yellow-400 font-bold text-gray-800'>Exploring the Impact of Artificial Intelligence on Healthcare: A Comprehensive Review of Applications and Ethical Considerations!</p>
                </div>


                <div className='grid grid-cols-1 gap-3 md:grid-cols-3'>
                    {

                        researchPaper.map((paper) => (
                            <ReserachCards
                                key={paper._id}
                                paper={paper}
                            ></ReserachCards>
                        ))


                    }
                </div>




            </div>

        </div>
    );
};

export default ResearchPaper;