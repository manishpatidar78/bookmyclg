import React from "react";
import "./Corporate.css";
function Corporate() {
  let images = [
    "https://in.bmscdn.com/webin/corporate/hp-logo.png",
    "https://in.bmscdn.com/webin/corporate/ola-logo.png",
    "https://in.bmscdn.com/webin/corporate/axis-logo.png",
    "https://in.bmscdn.com/webin/corporate/mastercard-logo.png",
    "https://in.bmscdn.com/webin/corporate/icici-logo.png",
  ];
  let text = {
    name: [
      {
        item: "1000+",
        item2: "cities",
      },
      {
        item: "6000",
        item2: "Screens",
      },
    ],
  };

  return (
    <div style={{ backgroundColor: "#F5F5F5" }}>
      <div className="crimg">
        <h4 style={{ textAlign: "center", paddingTop: "25px" }}>
          OUR PARTNERS
        </h4>
        <ul style={{ listStyleType: "none" }}>
          {images.map((item) => {
            return (
              <li>
                <img src={item} alt="" />
              </li>
            );
          })}
        </ul>
      </div>
      <div className="crp">
        {text.name.map((x) => {
          return (
            <div>
              <h4>{x.item}</h4>
              <p>{x.item2}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Corporate;