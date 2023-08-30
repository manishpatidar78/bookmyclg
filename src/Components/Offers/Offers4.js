import React from "react";
import "./Offers.css";

// offersList4
const OffersList4 = [
  {
    imgLink:
      "https://in.bmscdn.com/offers/offerlisting/inr-500-off-on-nature%60s-basket-sbi-card-elite-sbinb0422.jpg?23082023122348",
    title: "Nature's Basket SBI Card ELITE",
    dateandtime: "30 sep 2023 23:59",
  },
  {
    imgLink:
      "https://in.bmscdn.com/offers/offerlisting/play-credit-card---monthly-offer-rblplmn222.jpg?14072023165252",
    title: "PLAY Credit Card - Monthly Offer",
    dateandtime: "30 Jan 2023 23:59",
  },
  {
    imgLink:
      "https://in.bmscdn.com/offers/offerlisting/visa-infinite-program-vip0116.jpg?29082023105536",
    title: "Visa Infinite Card Offer",
    dateandtime: "30 Feb 2023 23:59",
  },
  {
    imgLink:
      "https://in.bmscdn.com/offers/offerlisting/yes-first-and-yes-premia-credit-card-25-off-yes0516.jpg?28072023183259",
    title: "YES FIRST and YES Premia Credit Card 25% Off",
    dateandtime: "30 Dec 2023 23:59",
  },
  {
    imgLink:
      "https://in.bmscdn.com/offers/offerlisting/hdfc-bank-diners-club-privilege-credit-card-offer-hdfcdz0623.jpg?24072023152813",
    title: "HDFC Bank Diners Club Privilege Credit Card Offer",
    dateandtime: "30 July 2023 23:59",
  },
];

export default function Offers4(){
  return(
    
    <div className="cards">
{
  OffersList4.map((x) =>{
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
}