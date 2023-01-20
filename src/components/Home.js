import React from "react";
import { Link } from "react-router-dom";


function Home() {
    return(
        <div>
            <p>This is our homepage</p>
            <ul>
                <li>
                    <Link to="/">{"Home"}</Link>
                </li>
                <li>
                
                     <Link to="/about">{"About"}</Link>
                 </li>
                 <li>

                     <Link to="/contact">{"Contact US"}</Link>
                

                </li>

            </ul>
        </div>

    )
}

export default Home