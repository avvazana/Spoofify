import React from 'react';
import { Link } from 'react-router-dom';

 const GridIndexItem = ({ path, element, navpath}) => {
   // path will be playlist, album, or artist
   // navpath will be browse or collection
   
   if (element.artworkUrl100) {
     
     element.artworkUrl100 = element.artworkUrl100.replace('100x100', '600x600');
   }
   let img = '';
   if (Array.isArray(element.photoUrl || element.artworkUrl100)) {
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
     img = (<img src={element.photoUrl || element.artworkUrl100}></img>)
   }
   return (
     <li className={`${path}-item`} key={element.id || element.collectionId}>
       <Link to={`/${navpath}/${path}s/${element.id || element.collectionId}`}>
         <div className={`${path}-item-image`}>
           {img}
         </div>
         <div className={`${path}-subtext`}>
           <p>{element.title || element.collectionName}</p>
           <span>{element.author || element.name || element.artistName}</span>
         </div>
       </Link>
     </li>
   )
 }

 export default GridIndexItem;
