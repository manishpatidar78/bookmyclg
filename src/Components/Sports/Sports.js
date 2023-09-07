import React, { useState } from "react";
import './Sports.css'


const sportsImages = [
  {
    imageLink: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCAyMiBTZXA%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00361456-qhflttmsal-portrait.jpg",
    title: "MotoGP Bharat 2023",
    description: "Buddh International....",
    category: "Moto GP",
    price: " 800 onwards",
  },
  {
    imageLink: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyNCBTZXA%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00341771-jvkbnkwlyc-portrait.jpg",
    title: "Chatrapati Shivaji Maharaj Marathon",
    description: "Bandra Fort Garden:..",
    category: "Runningf",
    price: "999 On wards",
  },
  {
    imageLink: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCA1IE5vdg%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00342539-ddvyhkxmkc-portrait.jpg",
    title: "Monsoon Mumbai Midnight Cycling",
    description: "Meeting point, Mahalax.",
    price: "Cycling",
    pa: "685 onwards",
  },
  {
    imageLink: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCAxIFNlcCBvbndhcmRz,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00349868-abuwdfvqdb-portrait.jpg",
    title: " Aamchi Mumbai Half Marathon - 4th Edition",
    description: "Bandra Fort Garden:...",
    category: "5k",
    price: "790 onwards",
  },
  {
    imageLink: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-VGh1LCAzMSBBdWc%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00347704-vfjbqvhxkp-portrait.jpg",
    title: "Freedom Virtual Run - Get Medal, Trophy by...",
    description: "Your Place and Your Tim...",
    category: "5k",
    price: "379 onwards",
  },
  {
    imageLink: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-TW9uLCAyOCBBdWcgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00366947-zflfgsyuqr-portrait.jpg",
    title: "Dorangos Chess Night Dorangos Cafe: Bandra",
    description: "Chess",
    category: "199 onwards",
  },

  {
    imageLink: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyNCBTZXA%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00366074-mhzugxzkkv-portrait.jpg",
    title: "Kharghar Half Marathon - Finisher",
    description: "Central Park: Kharghar",
    category: "5k",
    price: "790 onwards",
  },
  {
    imageLink: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-TW9uLCAyOCBBdWcgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00311497-knbmavfwqf-portrait.jpg",

    title: "Online Game - Flight 9032 Murder Mystery",
    description: "Online (Play From Home)",
    category: "E Sports",
    price: "199",
  },
  {
    imageLink: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-TW9uLCAyOCBBdWcgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00311494-mqkeaupfnf-portrait.jpg",
    title: "Monthly Sudoku Challenge by MALSAR",
    description: "Watch on Zoom.",
    category: "Online Games",
    price: "79",
  },
  {
    imageLink: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAxMSBOb3Y%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00336076-xwpudtxkta-portrait.jpg",
    title: "21 Days Walking Challenge (New Year...",
    description: "Watch on Zoom.",
    category: "Online Sports",
    price: "399",
  },
  {
    imageLink: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyIFNlcCBvbndhcmRz,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00341740-zwfvzrgdrv-portrait.jpg",
    title: "Online Game - Lost Treasure of..",
    description: "Online (Play From Home)",
    category: "E Sports:",
    price: "3 199",
  },

  {
    imageLink: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAzIEZlYg%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00339877-aawrawcwqj-portrait.jpg",
    title: "",
    price: "",
  },
  {
    imageLink: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyNCBTZXA%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00348054-bmynwuvtuf-portrait.jpg",
    title: "",
    price: "",
  },
  {
    imageLink: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyNiBOb3Y%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00354868-ksvdkytrrg-portrait.jpg",
    title: "",
    price: "",
  },
  {
    imageLink: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCA5IFNlcCBvbndhcmRz,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00337798-edvrsrujmu-portrait.jpg",
    title: "",
    price: "",
  },
  {
    imageLink: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyMSBPY3Qgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:oi-discovery-catalog@@icons@@bundle-icon-shadow-4x.png,ox-15,oy-15,ow-50:q-80/et00367203-cgnnsaddje-portrait.jpg",
    title: "",
    price: "",
  },
  {
    imageLink: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyMSBPY3Qgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:oi-discovery-catalog@@icons@@bundle-icon-shadow-4x.png,ox-15,oy-15,ow-50:q-80/et00367212-bkjgzmusrq-portrait.jpg",
    title: "",
    price: "",
  },
  {
    imageLink: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyMSBPY3Q%3D,ots-29,otc-FFFFFF,oy-612,ox-24:oi-discovery-catalog@@icons@@bundle-icon-shadow-4x.png,ox-15,oy-15,ow-50:q-80/et00367218-axjfhqnnnw-portrait.jpg",
    title: "",
    price: "",
  },
  {
    imageLink: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCA4IFNlcCBvbndhcmRz,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00359941-fsbugkehec-portrait.jpg",
    title: "",
    price: "",
  },
  {
    imageLink: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAxNiBEZWM%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00336144-ndwuxjrepc-portrait.jpg",
    title: "",
    price: "",
  },
  {
    imageLink: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-TW9uLCA0IFNlcCBvbndhcmRz,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00359255-pmhwfpugtn-portrait.jpg",
    title: "",
    price: "",
  },
  {
    imageLink: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-VHVlLCA3IE5vdg%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:oi-discovery-catalog@@icons@@bundle-icon-shadow-4x.png,ox-15,oy-15,ow-50:q-80/et00367216-vudekrwgyd-portrait.jpg",
  },
];

export default function Sports(){
  const [activeBtn, setActivebtn] = useState([false,false,false,false,false,false,false,false])
  function multiplestate(index){
    const newActiveBtn = activeBtn.map((element, i)=>{
      if(index === i){
        return !element;
      }return false;
    })
    setActivebtn(newActiveBtn);
  }
  return(
    <>
    <div className='maindivs'>
          <div className='filtersDiv'>
               <h2 className='filter'>Filters</h2>
       <div>
          {/* <Accordions /> */}
       </div>
             
          
          </div>
           <div className='Activitiesdiv'>
           <h2 className='activities'>Sports In Mumbai</h2>
             <section className='btn_section'>
               <button className={activeBtn[0] ? `sportBtn activeSportBtn`: `sportBtn`} onClick={()=>{multiplestate(0)}} >Cricket</button>
               <button className={activeBtn[1] ? `sportBtn activeSportBtn`: `sportBtn`} onClick={()=>{multiplestate(1)}} >Online Games</button>
               <button className={activeBtn[2] ? `sportBtn activeSportBtn`: `sportBtn`} onClick={()=>{multiplestate(2)}} >Chess</button>
               <button className={activeBtn[3] ? `sportBtn activeSportBtn`: `sportBtn`} onClick={()=>{multiplestate(3)}} >Running</button>
               <button className={activeBtn[4] ? `sportBtn activeSportBtn`: `sportBtn`} onClick={()=>{multiplestate(4)}} >E-Sports</button>
               <button className={activeBtn[5] ? `sportBtn activeSportBtn`: `sportBtn`} onClick={()=>{multiplestate(5)}} >Cycling</button>
               <button className={activeBtn[6] ? `sportBtn activeSportBtn`: `sportBtn`} onClick={()=>{multiplestate(6)}} >Motorsports</button>
               <button className={activeBtn[7] ? `sportBtn activeSportBtn`: `sportBtn`} onClick={()=>{multiplestate(7)}}>Online Sports</button>
               
           </section>
          <div className='allImages'>
          {
             sportsImages.map((x) =>{
                  return(
                    

                   <div>
                       <img className='Activitiesimages' src={x.imageLink} alt="" />
                       <h2 className='ActivitesPara'>{x.title}</h2>
                       <p className='ActivitesPara'>{x.description}</p>
                       <p className='ActivitesPara'>{x.category}</p>
                       <p className='ActivitesPara'>{x.price}</p>
                   </div>

               
                  )
             })
         }
          </div>

          </div>
      
       </div>
    
    
    </>

  );
}