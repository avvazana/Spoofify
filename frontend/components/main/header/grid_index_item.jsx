import React from 'react';
import { Link } from 'react-router-dom';

 const GridIndexItem = ({ path, element, navpath}) => {
   // path will be playlist, album, or artist
   // navpath will be browse or collection
   
   return (
     <li className={`${path}-item`} key={element.id}>
       <Link to={`/${navpath}/${path}s/${element.id}`}>
         <div className={`${path}-item-image`}>
           <img src={element.photoUrl}></img>
         </div>
         <div className={`${path}-subtext`}>
           <p>{element.title}</p>
           <span>{element.author || element.name}</span>
         </div>
       </Link>
     </li>
   )
 }

 export default GridIndexItem;
