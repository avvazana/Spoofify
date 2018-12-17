import React from 'react';
import { Link } from 'react-router-dom';

 const GridIndexItem = ({ path, element, navpath}) => {
   // path will be playlist, album, or artist
   // navpath will be browse or collection
   let img = '';
   if (Array.isArray(element.photoUrl)) {
     // element.photoUrl = element.photoUrl[0];
     img = (
       <div className="image-combiner">
         <div className="combined-images">
           <img src={element.photoUrl[0]}></img>
           <img src={element.photoUrl[1]}></img>
         </div>
         <div className="combined-images2">
           <img src={element.photoUrl[2]}></img>
           <img src={element.photoUrl[3]}></img>
         </div>
       </div>
     )
   } else {
     img = (<img src={element.photoUrl}></img>)
   }
   return (
     <li className={`${path}-item`} key={element.id}>
       <Link to={`/${navpath}/${path}s/${element.id}`}>
         <div className={`${path}-item-image`}>
           {img}
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
