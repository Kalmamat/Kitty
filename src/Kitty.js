import React, {useState, useEffect} from 'react';
import axios from "axios";

const Kitty = () => {
    const [kitty, setKitty] = useState({})



    function test () {
        axios('https://api.thecatapi.com/v1/images/search')
            .then(result => setKitty(result.data[0]))
    }
    useEffect(() => {
        test()

    }, [])
    console.log(kitty)

    return (
        <div className="mx-auto py-16 grid h-screen place-items-center relative bg-gradient-to-r from-red-400 to-yellow-500">
            <div className="absolute h-4/5 w-9/12 transform bg-yellow-200 rounded-full overflow-hidden shadow-xl">
                <div className="absolute h-screen w-96 transform rotate-12 bg-red-500 bottom-0 -left-40">

                </div>
                <div className="absolute h-screen w-96 transform rotate-12 bg-yellow-400 top-0 -right-40">

                </div>
            </div>
            <div className="relative h-96 w-96">
                <div
                    className="card bg-cyan-400 shadow-md inline-block w-96 h-96 rounded-3xl absolute bottom-0 transform -rotate-12">

                </div>
                <div
                    className="card bg-indigo-400 shadow-lg inline-block w-96 h-96 rounded-3xl absolute bottom-0 transform -rotate-6">

                </div>
                <div
                    className="card bg-pink-500 shadow-lg inline-block w-96 h-96 rounded-3xl absolute bottom-0 transform rotate-6">

                </div>
                <div
                    className="card bg-white transition shadow-xl w-96 h-96 rounded-3xl absolute bottom-0 z-10 grid place-items-center">
                    <div className="card bg-white shadow-inner h-4/5 w-3/4 rounded-2xl overflow-hidden relative">
                        <h1 className="shadow-md text-xl font-thin text-center text-red-600 uppercase p-3">Random
                            cats</h1>
                        <img
                            src={kitty.url}
                            alt=""/>
                        <button  onClick={test} type="button"
                                 className="card bg-gray-700 hover:bg-gray-600 transition text-white w-full h-1/6 absolute bottom-0 ">
                            Get Random
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Kitty;