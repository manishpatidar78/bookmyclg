import React from 'react'

function MovieCards(props) {
  return (
     <div>
            
     <div className="movies-containt">
         <div className="movies">
             <img src={props.img} alt="" />
             <h3>{props.name}</h3>
             <p>{props.para}</p>
         </div>
     </div>

 </div>
  )
}

export default MovieCards;
