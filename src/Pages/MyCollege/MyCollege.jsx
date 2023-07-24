import React, { useContext, useEffect, useState } from 'react';
import { Link, } from 'react-router-dom';
import BannerShare from '../../Shared/BannerShare/BannerShare';
import { AuthContext } from '../../Providors/AuthProvider';


const MyCollege = () => {
    const [myClgData, setMyClgData] = useState([]);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        if (user && user.email) {
            fetch(`http://localhost:5000/mycollege/${user.email}`)
                .then((res) => res.json())
                .then((data) => setMyClgData(data));
        }
    }, [user]);

    return (
        <div className='py-20 bg-gray-200 mb-16'>
            <BannerShare title='Our College' />

            {myClgData.map((data) => (
                <div key={data._id}>
                    <p>Name: {data.name}</p>
                    <p>Address: {data.address}</p>

                </div>
            ))}
        </div >
    );
};

export default MyCollege;