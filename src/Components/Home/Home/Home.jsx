import React from 'react';
import Banner from '../Banner/Banner';
import Features from '../Features/Features';
import Colleges from '../Colleges/Colleges';
import CLgGallery from '../ClgGallery/CLgGallery';
import ResearchPaper from '../ResearchPaper/ResearchPaper';




const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Features></Features>
            <Colleges></Colleges>
            <CLgGallery></CLgGallery>
            <ResearchPaper></ResearchPaper>
        </div>
    );
};

export default Home;