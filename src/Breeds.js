import React, {useState, useEffect} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";
import Spinner from "./components/Spinner";
import Rating from './components/Rating'

const Breeds = () => {
    const [breeds, setBreeds] = useState([])
    const [search, setSearch] = useState('')
    const filteredBreeds = breeds.filter(el => el.name.includes(search))
    const [isLoading, setIsLoading] = useState(true)
    function getBreeds () {
        axios('https://api.thecatapi.com/v1/breeds')
            .then(result =>{
                setBreeds(result.data)
                setIsLoading(false)
            })

    }
    useEffect(() => {
        getBreeds()
    }, [])

    if (isLoading) return <Spinner />
    return (
       <section className="container mx-auto">
           <div className="  my-16">
               <div
                   className="  w-full h-10 pl-3 pr-2 bg-white border rounded-full flex justify-between items-center relative mb-6">
                   <input type="search" name="search" id="search" placeholder="Search"
                          onChange={(e) => setSearch(e.target.value)}
                          className="appearance-none w-full outline-none focus:outline-none active:outline-none"/>
                   <button type="submit" className="ml-1 outline-none focus:outline-none active:outline-none">
                       <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                            stroke-width="2"
                            viewBox="0 0 24 24" className="w-6 h-6">
                           <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                       </svg>
                   </button>
               </div>
               <div className="flex flex-wrap -mx-3">
                   {
                       filteredBreeds.map(item => (
                           <div className="w-1/4 px-3 mb-5">
                               <Link to={`/breeds/${item.id}`}>
                                   <div className=" bg-gray-400 flex justify-center items-center">
                                       <div
                                           className="flex flex-col justify-between w-72 sm:w-96 h-96 bg-white bg-center text-gray-800 shadow-md overflow-hidden cursor-pointer"
                                           style={{background:`url(${item?.image?.url})no-repeat center/contain`}}>
                                           <div className="flex justify-between items-center ml-4 pr-8">
                                               <div
                                                   className="bg-red-600 text-white bg-opacity-95 shadow px-2 py-1 flex items-center font-bold text-xs rounded">Some
                                                   information
                                               </div>
                                               <div
                                                   className="bg-red-600 w-10 h-12 shadow flex flex-col-reverse p-2 text-center font-bold text-white rounded-b-full">*
                                               </div>
                                           </div>
                                           <div
                                               className="bg-white bg-opacity-95 shadow-md rounded-r-xl p-4 flex flex-col mr-4 mb-8">
                                               <h3 className="text-xl font-bold pb-2">{item.name}</h3>
                                               <p className="truncate text-gray-500 text-sm">{item.description}</p>
                                                <Rating rating={item.healt_issues} color="red" />
                                           </div>
                                       </div>
                                   </div>
                               </Link>
                           </div>

                       ))
                   }
               </div>

           </div>
       </section>
    );
};

export default Breeds;








// <section className="test-gray-700 body-font overflow-hidden ">
//     {
//         Object.keys(breeds).length === 0 ? <Spinner /> :
//             <div className="container mx-auto py-10 ">
//                 <div className="flex flex-wrap -py-10 ">
//                     {
//                         breeds.map((el) => (
//
//                             <div className="w-1/4 px-10 mb-5 ">
//
//                                 <Link to={`breeds/${el.id}`}>
//                                     <div className="bg-gray-900 shadow-lg rounded">
//                                         <div className="group relative">
//                                             <img  className="w-full md:w-72 block rounded"
//                                                   src={el?.image?.url}
//                                                   alt=""/>
//                                             <div
//                                                 className="absolute bg-black rounded bg-opacity-0 group-hover:bg-opacity-60 w-full h-full top-0 flex items-center group-hover:opacity-100 transition justify-evenly">
//                                                 <button
//                                                     className="hover:scale-110 text-white opacity-0 transform translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 transition">
//                                                     <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
//                                                          fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
//                                                         <path
//                                                             d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
//                                                     </svg>
//                                                 </button>
//
//                                                 <button
//                                                     className="hover:scale-110 text-white opacity-0 transform translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 transition">
//                                                     <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40"
//                                                          fill="currentColor" className="bi bi-play-circle-fill"
//                                                          viewBox="0 0 16 16">
//
//                                                     </svg>
//                                                 </button>
//                                             </div>
//                                         </div>
//                                         <div className="p-5">
//                                             <h3 className="text-white text-lg">{el.name}</h3>
//                                         </div>
//                                     </div>
//                                 </Link>
//                             </div>
//
//                         ))
//                     }
//                 </div>
//             </div>
//     }
//
// </section>