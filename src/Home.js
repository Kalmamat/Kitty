import React from 'react';

import Spinner from "./components/Spinner";
import {Link} from "react-router-dom";

const Home = () => {
    return (

    <div>
            <div className="h-screen" style={{backgroundImage: `url(${'https://www.zastavki.com/pictures/originals/2018Animals___Cats_Muzzle_of_a_gray_cat_on_a_red_background_125148_.jpg'}) `}}  >
           <div className="">
               <Link to={`/breeds`}
                   className="inline-block  px-6 py-2 text-xs font-medium leading-6 text-center text-pink-500 uppercase transition bg-transparent border-2 border-pink-500 rounded-full ripple hover:bg-pink-100 focus:outline-none"
               >
                   Click here!!!
               </Link>
           </div>
       </div>
    </div>
    );
};

export default Home;