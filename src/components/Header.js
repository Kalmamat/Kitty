import React from 'react';
import {Link} from "react-router-dom"

const Header = () => {
    return (
        <header className="" >

            <nav className="flex items-center justify-between flex-wrap bg-red-500 p-6 ">
                <div className="flex items-center flex-no-shrink text-white mr-6 ">

                    <span className="font-bold text-xl tracking-tight">Hello Kitty</span>
                </div>
                <div className="block lg:hidden">
                    <button
                        className="flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light hover:text-white hover:border-white">
                        <svg className="h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <title>Menu</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
                        </svg>
                    </button>
                </div>
                <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                    <div className="text-sm lg:flex-grow">
                        <Link to="/"
                              className="font-bold block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4">
                            Home
                        </Link>
                        <Link to="/kitty"
                              className="block font-bold mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4">
                            Random kitty
                        </Link>
                        <Link to="/breeds"
                              className="block font-bold mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white">
                            Breeds
                        </Link>
                    </div>
                    <div>
                        <a href="#"
                           className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal hover:bg-green-300 mt-4 lg:mt-0">Download</a>
                    </div>
                </div>
            </nav>
        </header>

    );
};

export default Header;