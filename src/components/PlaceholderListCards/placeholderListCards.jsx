import React from "react";
import './placeholderListCards.css'


export const PlaceholderListCards=()=>{
    return(
        <ul className='row'>
        {[1, 2, 3, 4, 5].map((index) => (
           <li key={index} className="skeleton skeleton-animation">
           <div className='col'>
             <div className="card" id='grey-area'>
               <div className="card-img-top placeholder"></div>
               <div className="card-body">
                 <h5 className="card-title placeholder"></h5>
                 <div className="card-details">
                   <div className="card-link placeholder"></div>
                 </div>
               </div>
             </div>
           </div>
         </li>
        ))}
      </ul>
    );
}