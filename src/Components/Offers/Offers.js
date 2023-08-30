import React from "react";
import "./Offers.css";
import Offers1 from "./Offers1";
import Offers2 from "./Offers2";
import Offers3 from "./Offers3";
import Offers4 from "./Offers4";
import Offers5 from "./Offers5";

export default function Offers() {
  return (
    <>
      <div className="allofferscard">
        <div className="div1"> 
          <Offers1></Offers1>
        </div>
        <div>
          <Offers2></Offers2>
        </div>
        <div>
          <Offers3></Offers3>
        </div>
        <div>
          <Offers4></Offers4>
        </div>
        <div>
          <Offers5></Offers5>
        </div>
        
      </div>
    </>
  );
}
