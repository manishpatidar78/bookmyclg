import React from "react";
import "./Offers.css";

// offersList2
const OffersList2 = [
  {
    imgLink:
      "https://in.bmscdn.com/offers/offerlisting/rblmon1216.jpg?17042023075428",
    title:
      "RBL Bank Popcorn, Fun+,Movies & More and Blockbuster Card monthly offers",
    dateandtime: "31 Oct 2024 23:59",
  },
  {
    imgLink:
      "https://in.bmscdn.com/offers/offerlisting/rblmon1216.jpg?17042023075428",
    title:
      "RBL Bank Popcorn, Fun+,Movies & More and Blockbuster Card monthly offers",
    dateandtime: "10 Oct 2024 23:59",
  },
  {
    imgLink:
      "https://in.bmscdn.com/offers/offerlisting/rbl-bank-younique-credit-card-offer-rblyouc520.jpg?17042023075501",
    title: "RBL Bank YOUnique Credit Card Offer",
    dateandtime: "20 oct 2024 23:59",
  },
  {
    imgLink:
      "https://in.bmscdn.com/offers/offerlisting/yes-private-credit-card-offer-yespr0917.jpg?31072023132110",
    title: "Yes Private Credit Card Offer",
    dateandtime: "29 dec 2023 23:59",
  },
  {
    imgLink:
      "https://in.bmscdn.com/offers/offerlisting/aurum-credit-card-offer-sbispr0420.jpg?10072023171252",
    title: "AURUM Credit Card Offer",
    dateandtime: "30 mar 2026 10:52",
  },
];

export default function Offers2(){
  return(
    
    <div className="cards">
    {
      OffersList2.map((x) =>{
        return(
          <div className="card">
          <img className="offerImg" src={x.imgLink}></img>
          <p className="offerPara">{x.title}</p>
          <p className="offerPara">Valid till{x.dateandtime}</p>
          </div>
        )
      })
    }
    </div>
    
  )
};