import React from 'react';
import { Link } from 'react-router-dom';
import banner from './../../../src/assets/clg_banner.jpg';

const BannerShare = ({ title }) => {
    return (
        <div style={{ backgroundImage: `url(${banner})` }} className="bg-fixed bg-cover bg-center bg-no-repeat">
            <div className="bg-[#0f0f5a] bg-opacity-30 pb-10 pt-36 text-center">
                <h1 className="text-white font-bold md:text-5xl ">{title}</h1>
                <p className="text-white mt-5">
                    <Link to="/">Home</Link> / <span className="text-white">{title}</span>
                </p>
            </div>
        </div>
    );
};

export default BannerShare;
