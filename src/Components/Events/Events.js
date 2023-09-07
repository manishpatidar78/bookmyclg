// import { Link } from 'react-router-dom';
import { useState } from "react";
import "./Events.css";

const MoviesData = [
  {
    imageLink: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyIFNlcA%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00364885-nekjbbgudc-portrait.jpg",
    title: "Thinking Out Loud By Manoj Prabakar",
    catagory: "Comedy | English | 12yrs + | 1hr 30mins",
    location: "Madai-Chennai",
  },
  {
    imageLink: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyNiBOb3Y%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00366777-axsacwyste-portrait.jpg",
    title: "Sunburn Arena Ft. Dimitri Vegas &Like Mike-Chennai",
    catagory: "Comedy | English | 12yrs + | 1hr 30mins",
    location: "Madai-Chennai",
  },
  {
    imageLink: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyIFNlcA%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00365986-flzaeetwlm-portrait.jpg",
    title: "Barkha Ritu-Musical Celebration with the Maestro",
    catagory: "Comedy | English | 12yrs + | 1hr 30mins",
    location: "Madai-Chennai",
  },
  {
    imageLink: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCA2IE9jdA%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00355125-jjrdfxrung-portrait.jpg",
    title: "Kisi Ko Batana Mat Ft. Anubhav Singh Bassi",
    catagory: "Comedy | English | 12yrs + | 1hr 30mins",
    location: "Madai-Chennai",
  },
  {
    imageLink: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCA5IFNlcA%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00348301-vhfvztjwde-portrait.jpg",
    title: "Ramkumar Paathi Annachi Meethi",
    catagory: "Comedy | English | 12yrs + | 1hr 30mins",
    location: "Madai-Chennai",
  },
  {
    imageLink: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAxMCBTZXA%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00361122-uzsfngkhrc-portrait.jpg",
    title: "MARAKKUMA NENJAM AR Rahman Live Concert in Chennai",
    catagory: "Comedy | English | 12yrs + | 1hr 30mins",
    location: "Madai-Chennai",
  },
  {
    imageLink: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAxNyBTZXA%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00351918-wfyafagjfj-portrait.jpg",
    title: "Jagane Thandhiram - Tamil Standup Comedy",
    catagory: "Comedy | English | 12yrs + | 1hr 30mins",
    location: "Madai-Chennai",
  },
  {
    imageLink: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyNSBOb3Y%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00365092-rnznqnzwpr-portrait.jpg",
    title: "MindFool India Tour - Vir Das",
    catagory: "Comedy | English | 12yrs + | 1hr 30mins",
    location: "Madai-Chennai",
  },
  {
    imageLink: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyNSBOb3Y%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00358075-rzkwxkshvk-portrait.jpg",
    title: "Praveen Kumar - Family Man Return",
    catagory: "Comedy | English | 12yrs + | 1hr 30mins",
    location: "Madai-Chennai",
  },
  {
    imageLink: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCA4IFNlcCBvbndhcmRz,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00329668-hxpuzsejvt-portrait.jpg",
    title: "AANSPLAINING by Karthik Kumar - TOUR 2023",
    catagory: "Comedy | English | 12yrs + | 1hr 30mins",
    location: "Madai-Chennai",
  },
  {
    imageLink: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-VGh1LCAyOCBEZWM%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00358308-hlaajcelxz-portrait.jpg",
    title: "Sunburn Goa 2023",
    catagory: "Comedy | English | 12yrs + | 1hr 30mins",
    location: "Madai-Chennai",
  },
  {
    imageLink: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyIFNlcA%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00364885-nekjbbgudc-portrait.jpg",
    title: "Thinking Out Loud By Manoj Prabakar",
    catagory: "Comedy | English | 12yrs + | 1hr 30mins",
    location: "Madai-Chennai",
  },
  {
    imageLink: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyIFNlcA%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00364885-nekjbbgudc-portrait.jpg",
    title: "Thinking Out Loud By Manoj Prabakar",
    catagory: "Comedy | English | 12yrs + | 1hr 30mins",
    location: "Madai-Chennai",
  },
  {
    imageLink: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyIFNlcA%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00364885-nekjbbgudc-portrait.jpg",
    title: "Thinking Out Loud By Manoj Prabakar",
    catagory: "Comedy | English | 12yrs + | 1hr 30mins",
    location: "Madai-Chennai",
  },
  {
    imageLink: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyIFNlcA%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00364885-nekjbbgudc-portrait.jpg",
    title: "Thinking Out Loud By Manoj Prabakar",
    catagory: "Comedy | English | 12yrs + | 1hr 30mins",
    location: "Madai-Chennai",
  },
  {
    imageLink: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyIFNlcA%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00364885-nekjbbgudc-portrait.jpg",
    title: "Thinking Out Loud By Manoj Prabakar",
    catagory: "Comedy | English | 12yrs + | 1hr 30mins",
    location: "Madai-Chennai",
  },
  {
    imageLink: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyIFNlcA%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00364885-nekjbbgudc-portrait.jpg",
    title: "Thinking Out Loud By Manoj Prabakar",
    catagory: "Comedy | English | 12yrs + | 1hr 30mins",
    location: "Madai-Chennai",
  },
  {
    imageLink: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyIFNlcA%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00364885-nekjbbgudc-portrait.jpg",
    title: "Thinking Out Loud By Manoj Prabakar",
    catagory: "Comedy | English | 12yrs + | 1hr 30mins",
    location: "Madai-Chennai",
  },
  {
    imageLink: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyIFNlcA%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00364885-nekjbbgudc-portrait.jpg",
    title: "Thinking Out Loud By Manoj Prabakar",
    catagory: "Comedy | English | 12yrs + | 1hr 30mins",
    location: "Madai-Chennai",
  },
  {
    imageLink: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyIFNlcA%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00364885-nekjbbgudc-portrait.jpg",
    title: "Thinking Out Loud By Manoj Prabakar",
    catagory: "Comedy | English | 12yrs + | 1hr 30mins",
    location: "Madai-Chennai",
  },
  {
    imageLink: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyIFNlcA%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00364885-nekjbbgudc-portrait.jpg",
    title: "Thinking Out Loud By Manoj Prabakar",
    catagory: "Comedy | English | 12yrs + | 1hr 30mins",
    location: "Madai-Chennai",
  },
  {
    imageLink: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyIFNlcA%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00364885-nekjbbgudc-portrait.jpg",
    title: "Thinking Out Loud By Manoj Prabakar",
    catagory: "Comedy | English | 12yrs + | 1hr 30mins",
    location: "Madai-Chennai",
  },
  {
    imageLink: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyIFNlcA%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00364885-nekjbbgudc-portrait.jpg",
    title: "Thinking Out Loud By Manoj Prabakar",
    catagory: "Comedy | English | 12yrs + | 1hr 30mins",
    location: "Madai-Chennai",
  },
  {
    imageLink: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyIFNlcA%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00364885-nekjbbgudc-portrait.jpg",
    title: "Thinking Out Loud By Manoj Prabakar",
    catagory: "Comedy | English | 12yrs + | 1hr 30mins",
    location: "Madai-Chennai",
  },
];

function Events() {
    const [activeBtn ,setActivebtn] = useState([false,false,false,false,false,false,false,false]);
    function multiplestate(index){
        const newActiveBtn = activeBtn.map((element ,i)=>{
            if(index === i){
                return !element;
            }
            return false;
        });
        setActivebtn(newActiveBtn);
    }
  return (
    <>
    
      {/* main container start */}
      <div className="singaldiv">
        <img className="singalImg"
          src="https://assets-in.bmscdn.com/promotions/cms/creatives/1693217899163_jonitadesktop.jpg"
          alt=""
        />
      </div>
    <div className="maindivs">
      <div className="filtersDiv">
        <h2 className='filter'> Filter </h2>
    </div>
        <div className='Activitiesdiv'>
           <h2 className='activities'>Event In Mumbai</h2>
           <div>
           <section className="btn_section">
          <button className={activeBtn[0] ? `movieBtn movieActivebtn` : `movieBtn`} onClick={()=>{multiplestate(0)}}>Online Streaming Events</button>
          <button className={activeBtn[1] ? `movieBtn movieActivebtn` : `movieBtn`}onClick={()=>{multiplestate(1)}}>Workshop</button>
          <button className={activeBtn[2] ? `movieBtn movieActivebtn` : `movieBtn`}onClick={()=>{multiplestate(2)}}>Comedy Shows</button>
          <button className={activeBtn[3] ? `movieBtn movieActivebtn` : `movieBtn`} onClick={()=>{multiplestate(3)}}>Music Shows</button>
          <button className={activeBtn[4] ? `movieBtn movieActivebtn` : `movieBtn`} onClick={()=>{multiplestate(4)}}>Kids</button>
          <button className={activeBtn[5] ? `movieBtn movieActivebtn` : `movieBtn`}onClick={()=>{multiplestate(5)}}>Meetups</button>
          <button className={activeBtn[6] ? `movieBtn movieActivebtn` : `movieBtn`}onClick={()=>{multiplestate(6)}}>Spirituality</button>
          <button className={activeBtn[7] ? `movieBtn movieActivebtn` : `movieBtn`}onClick={()=>{multiplestate(7)}}>Exhibitions</button>
        </section>
           </div>
           <div className="allImages">{
      MoviesData.map((x) => {

  
        return (
          <div>
            
            <img className='eventImages' src={x.imageLink} alt="" />
            <h2 className='Cardpara' >{x.title}</h2>
            <p className='Cardpara' >{x.catagory}</p>
            <p className='Cardpara' >{x.location}</p>
          </div>
        )
      }
      )
    }
      </div>
      </div>
    </div>
    
      </>
  )
}

export default Events;
