// import { Accordion } from '@mui/material';
import { useState } from "react";
import "./Activities.css";
import Accordions from "./Accordions";
 
 

const activities = [
  {
    imageLink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyNyBBdWc%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00365216-wcubsskybw-portrait.jpg",
    title: "Indian Tea Festiwal at Jio World Drive",
    description: "south sky, Jio World drive..",
    category: "Food Festival",
    price: "₹ 249 onwards",
  },
  {
    imageLink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyNyBBdWcgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00318079-puqwfzndpp-portrait.jpg",
    title: "BEST-Operation of Heritage Tour",
    description: "Dr. S.P.M. Chowk",
    category: "Antiques,Heritage,Museums",
    price: "₹ 95 onwards",
  },
  {
    imageLink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyNyBBdWcgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00310275-nrwpwjdwsz-portrait.jpg",
    title: "imagica Water Park",
    description: "imagica Water",
    category: "Adventure",
    price: "₹ 565 onwards",
  },
  {
    imageLink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyNyBBdWcgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00022344-vcazsxezuu-portrait.jpg",
    title: "Mumbai Filmcity Tour",
    description: "Bollywood Park",
    category: "Adventure",
    price: "₹ 999 onwards",
  },
  {
    imageLink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyNyBBdWcgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00127447-zlwbjfsxmt-portrait.jpg",
    title: "BOUNCE Inc Mumbai",
    description: "bounce Inc mumbai",
    category: "Parties",
    price: "₹ 826 onwards",
  },
  {
    imageLink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyNyBBdWcgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00305112-vbwfylrahm-portrait.jpg",
    title: "UribsPrima-Inside the BMc Headquarters",
    description: "Muncipal Corporation",
    category: "Antiques,Heritage,Museums",
    price: "₹ 350 onwards",
  },
  {
    imageLink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyNyBBdWcgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00325467-ffxzjzwpce-portrait.jpg",
    title: "Water Kingdom",
    description: "Warer Kingdom:mumbai",
    category: "Adventure",
    price: "₹ 757 onwards",
  },
  {
    imageLink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyNyBBdWcgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00315217-lqeqtkvpkq-portrait.jpg",
    title: "Hamleys Play Mumbai",
    description: "hamleys play :jio world",
    category: "Park",
    price: "₹ 500 onwards",
  },
  {
    imageLink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCAxNSBTZXAgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00367126-yymqmkdqqd-portrait.jpg",
    title: "Oktoberfest at Jio World Drive",
    description: "South sky jio world drive",
    category: "Food Festival",
    price: "₹ 499 onwards",
  },
  {
    imageLink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyNyBBdWcgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00361621-ajsccwtyxg-portrait.jpg",
    title: "The Crown Jewel of Mumbai" - "Inside CSMT",
    description: "McDonalds opp CSMT..",
    category: "Antiques,Heritage,Museums",
    price: "₹ 100 onwards",
  },
  {
    imageLink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyIFNlcCBvbndhcmRz,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00121822-jeglhkwzeb-portrait.jpg",
    title: "Mumbai Midnight Cycling- Treks & Trails",
    description: "Meeting Points",
    category: "Tourist Attractions",
    price: "₹ 299 onwards",
  },
  {
    imageLink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyNyBBdWcgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00348440-zxnhhlutdn-portrait.jpg",
    title: "No Escape Room(pali Hill Bandra)",
    description: "Dorangos Hall 1: Bandra",
    category: "Quizzes and Competitions",
    price: "₹ 499 onwards",
  },
  {
    imageLink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyNyBBdWcgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00076445-azbcpvphgh-portrait.jpg",
    title: "Snow kingDom Mumbai",
    description: "Snow kingdom mumbai",
    category: "Adventure",
    price: "₹ 650 onwards",
  },
  {
    imageLink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAxNSBPY3Qgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00364985-xcqddsebtg-portrait.jpg",
    title: "Rass Rang Thane",
    description: "Modella Mill Compound",
    category: "Navrathri",
    price: "₹ 300 onwards",
  },
  {
    imageLink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyNyBBdWcgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00359244-wssrzqqgpk-portrait.jpg",
    title: "Mumbai Darshan By Bus",
    description: "Meeting point gateway of mumbai",
    category: "Unique Tour",
    price: "₹ 350 onwards",
  },
  {
    imageLink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyNyBBdWcgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00074418-elyskxdtdv-portrait.jpg",
    title: "Pawna lake Camping",
    description: "Pawna lake camping",
    category: "Tourist Attractions",
    price: "₹ 600 onwards",
  },
  {
    imageLink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCAxNSBTZXA%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00366710-xxurfqlbjm-portrait.jpg",
    title: "Con Biro 2023 - Competition",
    description: "Litile Theatre: NCPA",
    category: "Music compitions",
    price: "₹ 200 onwards",
  },
  {
    imageLink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyNyBBdWcgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00357553-khajknymzd-portrait.jpg",
    title: "EsselWorld Bird Park",
    description: "Birds Park",
    category: "Adventure",
    price: "₹ 518 onwards",
  },
  {
    imageLink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyNyBBdWcgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00302244-qeqgfaqbmg-portrait.jpg",
    title: "Dine in Blu",
    description: "Radisson blu mumbai",
    category: "Moments",
    price: "₹ 1200 onwards",
  },
  {
    imageLink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAxNSBPY3Qgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00367629-sbqcfqccnm-portrait.jpg",
    title: "Rasslella Navrathri 2023",
    description: "The Bombay Presidency",
    category: "Navrathri",
    price: "₹ 499 onwards",
  },
  {
    imageLink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyNyBBdWcgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00356262-qcltaflaee-portrait.jpg",
    title: "Phoniex Entertainment Packages",
    description: "Phoniex maretCity:mumbai",
    category: "Tourist Attractions",
    price: "₹ 301 onwards",
  },
  {
    imageLink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyNyBBdWcgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00019735-mfsfkwwlgs-portrait.jpg",
    title: "KidZaina Mumbai",
    description: "Kidzaina Mumbai",
    category: "Amusement Park",
    price: "₹ 413 onwards",
  },
  {
    imageLink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyNyBBdWcgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00359157-aqhpclpxlm-portrait.jpg",
    title: "Mumbai Heritage walk",
    description: "meeting point",
    category: "Antiques,Heritage,Museums",
    price: "₹ 1000 onwards",
  },
  {
    imageLink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyIFNlcCBvbndhcmRz,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00365386-axquyajqdb-portrait.jpg",
    title: "Kolad Rever Rafting",
    description: "IDFC first bank: Chembur",
    category: "Tourist Attractions",
    price: "₹ 2950 onwards",
  },
  {
    imageLink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyIFNlcCBvbndhcmRz,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00331521-pnvdjrqzlv-portrait.jpg",
    title: "Sondai Fort trek ",
    description: "Meeting Point",
    category: "Monuments",
    price: "₹ 599 onwards",
  },
  {
    imageLink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-VHVlLCAxOSBTZXAgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00367608-lkkraeffcx-portrait.jpg",
    title: "Mumbai Ganesh Pandal Hopping Tour",
    description: "Genral post office:Fort",
    category: "Navratri",
    price: "₹ 1000 onwards",
  },
  {
    imageLink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyNyBBdWcgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00359153-xvvpdaufwf-portrait.jpg",
    title: "Mumbai Dharvi Slum Walk",
    description: "Third Wave Coffie:Mahim",
    category: "Unique Tour",
    price: "₹ 800 onwards",
  },{
    imageLink:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-V2VkLCA2IFNlcCBvbndhcmRz,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00359214-rzexqpmzjn-portrait.jpg",
    title: "Mumbai street Food Tour",
    description: "meeting point",
    category: "Festivals",
    price: "₹ 2500 onwards",
  },
  
  {
    imageLink:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-V2VkLCA2IFNlcCBvbndhcmRz,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00334920-rdvunsbkhl-portrait.jpg",
    title: "No Escape malad",
    description: "Escape gaming",
    category: "Gaming",
    price: "₹ 700 onwards",
  },
  {
    imageLink:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyMSBPY3Q%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00363132-hdksubgdfl-portrait.jpg",
    title: "Durga Pujja",
    description: "Durga Puja Festival",
    category: "Durga Pujja",
    price: "₹ 700 onwards",
  }
];


const categories = [
  "Adventure",
  "Unique Tour",
  "Food Festival",
  "Gaming",
  "Amusement Park",
  "Antiques,Heritage,Museums",
  "Tourist Attractions",
  "Monuments",
   "Navratri",
   "Festivals",
   "Parties",
  "Quizzes and Competitions",
  "Durga Pujja",
]

export default function Activities() {
  const [activeBtn, setActivebtn] = useState([false,false,false,false,false,false,false,false, false,false,false,false,false ]);
  const [newActivitiesArray, setNewActivtiesArray] = useState(activities);

  function multiplestate(index) {
    const newActiveBtn = activeBtn.map((element, i) => {
      if (index === i) {
        return !element;
      }
      return element;
    });
    setActivebtn(newActiveBtn);

    let mapGroupArray = newActiveBtn.map((ele, i) => {
      let filterArray = []
      if(ele){
        filterArray = activities.filter((x) => x.category === categories[i])
      }
      return filterArray;
    })

    mapGroupArray = [
      ...mapGroupArray[0],
      ...mapGroupArray[1],
      ...mapGroupArray[2],
      ...mapGroupArray[3],
      ...mapGroupArray[4],
      ...mapGroupArray[5],
      ...mapGroupArray[6],
      ...mapGroupArray[7],
      ...mapGroupArray[8],
      ...mapGroupArray[9],
      ...mapGroupArray[10],
      ...mapGroupArray[11],
      ...mapGroupArray[12],
    ]

    if (mapGroupArray.length === 0) {
      
      setNewActivtiesArray(activities);
    } else {
      setNewActivtiesArray(mapGroupArray);
    }
  }

  return (
    <>
    
      <div className="singaldiv">
        <img
          className="singalImg"
          src="https://assets-in.bmscdn.com/promotions/cms/creatives/1692181564275_flyzonegandipettrampolinejumpdesktop.jpg"
          alt=""
        />
      </div>
      <div className="maindivs">
        <div className="filtersDiv">
          <h2 className="filter">Filters</h2>
          <div>{<Accordions />}</div>
        </div>
        <div className="Activitiesdiv">
          <h2 className="activities">Activities In Mumbai</h2>
          <div>
          <section className="allbtns">
            <button
              className={
                activeBtn[0]
                  ? `activitiesBtn activeActivitiesBtn`
                  : `activitiesBtn`
              }
              onClick={() => {
                multiplestate(0);
              }}
            >
              Adventure
            </button>
            <button
              className={
                activeBtn[1]
                  ? `activitiesBtn activeActivitiesBtn`
                  : `activitiesBtn`
              }
              onClick={() => {
                multiplestate(1);
              }}
            >
              Unique Tour
            </button>
            <button
              className={
                activeBtn[2]
                  ? `activitiesBtn activeActivitiesBtn`
                  : `activitiesBtn`
              }
              onClick={() => {
                multiplestate(2);
              }}
            >
              Food and Drinks
            </button>
            <button
              className={
                activeBtn[3]
                  ? `activitiesBtn activeActivitiesBtn`
                  : `activitiesBtn`
              }
              onClick={() => {
                multiplestate(3);
              }}
            >
              Gaming
            </button>
            <button
              className={
                activeBtn[4]
                  ? `activitiesBtn activeActivitiesBtn`
                  : `activitiesBtn`
              }
              onClick={() => {
                multiplestate(4);
              }}
            >
              Amusement Park
            </button>
            <button
              className={
                activeBtn[5]
                  ? `activitiesBtn activeActivitiesBtn`
                  : `activitiesBtn`
              }
              onClick={() => {
                multiplestate(5);
              }}
            >
              Antiques,Heritage,Museums
            </button>
            <button
              className={
                activeBtn[6]
                  ? `activitiesBtn activeActivitiesBtn`
                  : `activitiesBtn`
              }
              onClick={() => {
                multiplestate(6);
              }}
            >
              Tourist Attractions
            </button>
            <button
              className={
                activeBtn[7]
                  ? `activitiesBtn activeActivitiesBtn`
                  : `activitiesBtn`
              }
              onClick={() => {
                multiplestate(7);
              }}
            >
              Monuments
            </button>
            <button
              className={
                activeBtn[8]
                  ? `activitiesBtn activeActivitiesBtn`
                  : `activitiesBtn`
              }
              onClick={() => {
                multiplestate(8);
              }}
            >

              Navratri
            </button>
            <button
              className={
                activeBtn[9]
                  ? `activitiesBtn activeActivitiesBtn`
                  : `activitiesBtn`
              }
              onClick={() => {
                multiplestate(9);
              }}
            >
              Festivals
            </button>
            <button
              className={
                activeBtn[10]
                  ? `activitiesBtn activeActivitiesBtn`
                  : `activitiesBtn`
              }
              onClick={() => {
                multiplestate(10);
              }}
            >
    
              Parties
            </button>
            <button
              className={
                activeBtn[11]
                  ? `activitiesBtn activeActivitiesBtn`
                  : `activitiesBtn`
              }
              onClick={() => {
                multiplestate(11);
              }}
            >
          
              Quizzes and Competitions
            </button>
            <button
              className={
                activeBtn[12]
                  ? `activitiesBtn activeActivitiesBtn`
                  : `activitiesBtn`
              }
              onClick={() => {
                multiplestate(12);
              }}
            >
      
            Durga Pujja
            </button>
          </section>
          </div>
          <div className="allImages">
            {newActivitiesArray.map((y) => {
              return (
                <div>
                  <img className="Activitiesimages" src={y.imageLink} alt="" />
                  <h2 className="ActivitesPara">{y.title}</h2>
                  <p className="ActivitesPara">{y.description}</p>
                  <p className="ActivitesPara">{y.category}</p>
                  <p className="ActivitesPara">{y.price}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
