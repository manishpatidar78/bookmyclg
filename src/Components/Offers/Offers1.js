import React from "react";
import './Offers.css'


const OffersList1 = [
  {
    imgLink:
      "https://in.bmscdn.com/offers/offerlisting/sbi-inr-500-off-on-signature-credit-card-sbi0613.jpg?21082023195825",
    title: "SBI Signature/Elite credit card offer",
    dateandtime: "31 mar 2026 23:59",
  },
  {
    imgLink:
      "https://in.bmscdn.com/offers/offerlisting/kotak-bank-trevor-noah-off-the-record-tour-offer-ktktn0723.jpg?04082023115616",
    title: "Kotak Bank Trevor Noah: Off The Record Tour Offer",
    dateandtime: "1 oct 2023 23:59",
  },
  {
    imgLink:
      "https://in.bmscdn.com/offers/offerlisting/rupay-sunburn-arena-credit-card-offer-rupaycc231.jpg?25082023171440",
    title: "RuPay Sunburn Arena Credit Card Offer",
    dateandtime: "1 oct 2023 23:59",
  },
  {
    imgLink:
      "https://in.bmscdn.com/offers/offerlisting/rupay-sunburn-credit-card-offer-rupay231.jpg?17072023214523",
    title: "RuPay Sunburn Credit Card Offer",
    dateandtime: "1 oct 2023 23:59",
  },
  {
    imgLink:
      "https://in.bmscdn.com/offers/offerlisting/canara-bank-credit-card-offer-canara723.jpg?17072023135020",
    title: "RuPay Sunburn Credit Card Offer",
    dateandtime: "1 oct 2023 23:59",
  },
];






function Offers1() {
  return (
  
    <div className="cards">
      {
        OffersList1.map((x) =>{
          return(
            <div className="card">
            <img className="offerImg" src={x.imgLink}></img>
            <p className="offerPara">{x.title}</p>
            <p className="offerPara">Valid till {x.dateandtime}</p>
            </div>
          );
        })
      }
    </div>
    
  );
}

export default Offers1;
