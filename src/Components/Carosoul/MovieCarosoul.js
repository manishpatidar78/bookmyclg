import React, { useEffect, useState } from 'react'
import './MovieCarosoul.css'


const carosoulImages = [
     "https://assets-in.bmscdn.com/promotions/cms/creatives/1690629469326_webbannernpa.jpg",
     "https://assets-in.bmscdn.com/promotions/cms/creatives/1692710629473_thirumaladesktop.jpg"
   ];
   
   function MovieCarosoul() {
     const [imageIndex , SetImageIndex]= useState(0);
  
     useEffect(() =>{
          const interval = setInterval(() => {
               if(imageIndex === carosoulImages.length - 1){
                    SetImageIndex(0)
               }else{
                    SetImageIndex(imageIndex + 1)
               }},4000);
              // Clearing the interval 
          return () =>{
               clearInterval(interval);
          };
     },[imageIndex]);

     return (
       <>
         <div className='moviecarosoul'>
          <button onClick={() =>{
               if(imageIndex === 0){
                    SetImageIndex(carosoulImages.length - 1) 
               }else{
                    SetImageIndex(imageIndex -1 )
               }
          }}>Prev<i className="fa-solid fa-arrow-left"></i></button>
          <img className='Moviecarosoulimages' src={carosoulImages[imageIndex]} />
          <button onClick={() =>{
               if(imageIndex === carosoulImages.length - 1 ){
                    SetImageIndex(0)
               }else{
                    SetImageIndex(imageIndex + 1)
               }
          }}>Next<i className="fa-solid fa-arrow-right"></i>
          </button>
          
         </div>
       </>
     )
   }
   
   export default MovieCarosoul;
   