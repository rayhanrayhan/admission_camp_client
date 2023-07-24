import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SearchBar = () => {

    const [searchText, setSearchText] = useState("")

    return (
        <div className='flex items-center gap-1 md:px-3 md:w-52 w-36'>

            <div className="relative">
                <input
                    onChange={(e) => { setSearchText(e.target.value) }}
                    className="appearance-none border-2   pl-10 border-gray-300 hover:border-gray-400 transition-colors rounded-md w-full py-2  text-gray-800 leading-tight focus:outline-none focus:ring-purple-600  focus:border-purple-600 focus:shadow-outline"
                    id="username"
                    type="text"
                    placeholder="       Search..."
                />



                <div className="absolute left-0 inset-y-0 flex items-center">

                    <Link to={`/searchdata/${searchText}`}>
                        <button className=' hover:bg-[#0f0f5a] hover:text-white  ease-in-out duration-300 mx-1 text-black text-sm border px-2 py-1 rounded-2xl '>Search</button>
                    </Link>
                </div>
            </div>
            <div>

            </div>
        </div>
    );
};

export default SearchBar;