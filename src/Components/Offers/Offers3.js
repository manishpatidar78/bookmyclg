import React from "react";
import "./Offers.css";


// offersList3
const OffersList3 = [
  {
    imgLink:
      "https://in.bmscdn.com/offers/offerlisting/federal-bank-credit-card-offer-fedcc0722.jpg?28062023160008",
    title: "Federal Bank Credit Card Offer",
    dateandtime: "30 sep 2023 23:59",
  },
  {
    imgLink:
      "https://in.bmscdn.com/offers/offerlisting/idfc-first-bank-private-credit-card-offer-idfccc0921.jpg?25042023133424",
    title: "IDFC First Bank Private Credit Card Offer",
    dateandtime: "20 sep 2023 23:59",
  },
  {
    imgLink:
      "https://in.bmscdn.com/offers/offerlisting/dbs-bank-credit-card-offer-dbscc0623.jpg?14072023124123",
    title: "DBS Bank Credit Card Offer",
    dateandtime: "10 Aug 2023 23:59",
  },
  {
    imgLink:
      "https://in.bmscdn.com/offers/offerlisting/hdfc-bank-timescard-offer-htc0314.jpg?27072023091528",
    title: "HDFC Bank Times Card Offer",
    dateandtime: "29 sep 2023 23:59",
  },
  {
    imgLink:
      "https://in.bmscdn.com/offers/offerlisting/indusind-bank-nexxt,-iconia,-duo,-intermiles-credit-card-offer-indbogo.jpg?01062023101736",
    title:
      "IndusInd Bank Credit Cards Buy 1 Get 1 free movie ticket offer (Legend, Nexxt, Duo, Signature, Iconia, Intermiles)",
    dateandtime: "3 sep 2023 23:59",
  },
];

export default function Offers3(){
  return(
    
    <div className="cards">
{
  OffersList3.map((x)=>{
    return(
      <div className="card">
      <img className="offerImg" src={x.imgLink}></img>
      <p className="offerPara"> {x.title}</p>
      <p className="offerPara">Valid till {x.dateandtime}</p>
      </div>
    )
  })
}

    </div>
    
    
    
  
  );
}