import React from 'react'

const everyfriday = [


    {

        imglink: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@bms_premiere_v1.png,oit-false,ofo-bottom_left:q-80/et00355405-uvzapgqrqj-portrait.jpg",
        name: "NO Hard Fellings",
        language: "English"
    },
    {

        imglink: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@bms_premiere_v1.png,oit-false,ofo-bottom_left:q-80/et00367166-eqdqhsgkda-portrait.jpg",
        name: "Sun Moon",
        language: "English"
    },
    {

        imglink: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@bms_premiere_v1.png,oit-false,ofo-bottom_left:q-80/et00367165-lygnshgqpj-portrait.jpg",
        name: "Drive My Car",
        language: "Jaoanese"
    },
    {

        imglink: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@bms_premiere_v1.png,oit-false,ofo-bottom_left:q-80/et00366591-adclasnztt-portrait.jpg",
        name: "One Fine Morning",
        language: "French"
    },
    {

        imglink: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@bms_premiere_v1.png,oit-false,ofo-bottom_left:q-80/et00359297-nuzbxteqct-portrait.jpg",
        name: "Pui Pui Molcar: S1",
        language: "Jaoanese"
    },

]


function Premiere() {
    return (
     <div>
          {/* common code */}
               <div className="premiere">
                         <img src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/premiere-banner-web-collection-202208191200.png" alt="" width={"100%" } />
               </div>
               <div className="premier-heading">
                    <h1 >Premieres </h1>
                    <p>Brand new release every friday</p>
               </div>
          {/* map method */}
               <div className='pre-cantaint'>
                    {/* <div className="premiere">
                         <img src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/premiere-banner-web-collection-202208191200.png" alt="" />
                    </div> */}

                    {
                         everyfriday.map((x)=>{

                              return(

                              <div className='preimg'>
                                   <img src={x.imglink} alt="" />
                                   <h3>{x.name}</h3>
                                   <p>{x.language}</p>
                              </div>
                              )
                         }
                         )
                    }


               </div>
     </div>

)
}

export default Premiere