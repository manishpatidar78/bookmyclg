import React from "react";
import "./Offers.css"


// offersList5
const OffersList5 = [
  {
    imgLink:
      "https://in.bmscdn.com/offers/offerlisting/icici-bank-25percent-discount-offer-icicicc520.jpg?17042023080044",
    title: "ICICI Bank Credit Card 25% Discount Offer",
    dateandtime: "30 June 2023 23:59",
  },
  {
    imgLink:
      "https://in.bmscdn.com/offers/offerlisting/indusind-bank-super-premium-and-premium-credit-cards-offer-indspc0523.jpg?10052023124349",
    title:
      "IndusInd Bank Super Premium &amp; Premium Credit Cards Offer (Indulge, Crest, Celesta, Heritage (Non-Metal) , Legacy, Vistara Explorer Co - Branded, Pinnacle)",
    dateandtime: "30 Apr 2023 23:59",
  },
  {
    imgLink:
      "https://in.bmscdn.com/offers/offerlisting/play-credit-card---welcome-offer-rblplwl222.jpg?14072023165458",
    title: "PLAY Credit Card – Welcome Offer",
    dateandtime: "30 March 2023 23:59",
  },
  {
    imgLink:
      "https://in.bmscdn.com/offers/offerlisting/visa-blockbuster-weekends-offer-vsbogo1111.jpg?07082023182343",
    title: "VISA Blockbuster Weekends Offer",
    dateandtime: "30 Nov 2023 23:59",
  },
  {
    imgLink:
      "https://in.bmscdn.com/offers/offerlisting/hsbc-saturday-offer-hsbc0815.jpg?28062023160932",
    title: "HSBC Credit Card Offer",
    dateandtime: "30 Jan 2023 23:59",
  },
];
export default function Offers5(){
  return(
  
   <dic className="cards">
 {
  OffersList5.map((x) =>{
    return(
      <div className="card">
      <img className="offerImg" src={x.imgLink}></img>
      <p className="offerPara">{x.title}</p>
      <p className="offerPara">Valid till{x.dateandtime}</p>
      </div>
    );
  })
 }

   </dic>
   
   
  );
}