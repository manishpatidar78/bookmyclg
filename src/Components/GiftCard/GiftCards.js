import  './GiftCards.css'

const giftCards = [
  {
    gift: "https://in.bmscdn.com/gv/gift_my_show_24102023031014_480x295.jpg",
  },
  {
    gift: "https://in.bmscdn.com/gv/gift_my_show_24052023030554_480x295.jpg",
  },
  {
    gift: "https://in.bmscdn.com/gv/gift_my_show_02402022094010_480x295.jpg",
  },
  {
    gift: "https://in.bmscdn.com/gv/gift_my_show_02282022102856_480x295.jpg",
  },
  {
    gift: "https://in.bmscdn.com/gv/gift_my_show_02302022103011_480x295.jpg",
  },
  {
    gift: "https://in.bmscdn.com/gv/gift_my_show_02302022123034_480x295.jpg",
  },
  {
    gift: "https://in.bmscdn.com/gv/gift_my_show_02412022124146_480x295.jpg",
  },
  {
    gift: "https://in.bmscdn.com/gv/gift_my_show_02432022124329_480x295.jpg",
  },
  {
    gift: "https://in.bmscdn.com/gv/gift_my_show_02442022124437_480x295.jpg",
  },

  {
    gift: "https://in.bmscdn.com/gv/gift_my_show_02452022124540_480x295.jpg",
  },

  {
    gift: "https://in.bmscdn.com/gv/gift_my_show_02122022101208_480x295.jpg",
  },

  {
    gift: "https://in.bmscdn.com/gv/gift_my_show_25412019034153_480x295.jpg",
  },
  {
    gift: "https://in.bmscdn.com/gv/gift_my_show_27542019095448_480x295.jpg",
  },

  {
    gift: "https://in.bmscdn.com/gv/gift_my_show_27572019095730_480x295.jpg",
  },

  {
    gift: "https://in.bmscdn.com/gv/gift_my_show_18532019025324_480x295.jpg",
  },

  {
    gift: "https://in.bmscdn.com/gv/gift_my_show_18552019025553_480x295.jpg",
  },
  {
    gift: "https://in.bmscdn.com/gv/gift_my_show_18082019040833_480x295.jpg",
  },

  {
    gift: "https://in.bmscdn.com/gv/gift_my_show_18312019023126_480x295.jpg",
  },

  {
    gift: "https://in.bmscdn.com/gv/gift_my_show_18432019024353_480x295.jpg",
  },

  {
    gift: "https://in.bmscdn.com/gv/gift_my_show_18462019024648_480x295.jpg",
  },
  {
    gift: "https://in.bmscdn.com/gv/gift_my_show_18482019024856_480x295.jpg",
  },

  {
    gift: "https://in.bmscdn.com/gv/gift_my_show_18512019025105_480x295.jpg",
  },

  {
    gift: "https://in.bmscdn.com/gv/gift_my_show_18572019025701_480x295.jpg",
  },

  {
    gift: "https://in.bmscdn.com/gv/gift_my_show_05542019115440_480x295.jpg",
  },
  {
    gift: "https://in.bmscdn.com/gv/gift_my_show_30332019123339_480x295.jpg",
  },

  {
    gift: "https://in.bmscdn.com/gv/gift_my_show_30222019022237_480x295.jpg",
  },

  {
    gift: "https://in.bmscdn.com/gv/gift_my_show_30192019031956_480x295.jpg",
  },

  {
    gift: "https://in.bmscdn.com/gv/gift_my_show_30482019034817_480x295.jpg",
  },
  {
    gift: "https://in.bmscdn.com/gv/gift_my_show_05572019115712_480x295.jpg",
  },

  {
    gift: "https://in.bmscdn.com/gv/gift_my_show_16092019040918_480x295.jpg",
  },

  {
    gift: "https://in.bmscdn.com/gv/gift_my_show_06532019115311_480x295.jpg",
  },

  {
    gift: "https://in.bmscdn.com/gv/gift_my_show_22202019042033_480x295.jpg",
  },
  {
    gift: "https://in.bmscdn.com/gv/gift_my_show_30162019031622_480x295.jpg",
  },

  {
    gift: "https://in.bmscdn.com/gv/gift_my_show_06572019115735_480x295.jpg",
  },

  {
    gift: "https://in-aps.bmscdn.com/gv/gift_my_show_04402020084029_480x295.jpg",
  },

  {
    gift: "https://in.bmscdn.com/vouchagram/combo/bms_and_the_beer_cafe_combo_20302018053047.jpg",
  },
  {
    gift: "https://in.bmscdn.com/vouchagram/combo/bms_and_tgi_fridays_combo_20042018040430.jpg",
  },
  {
    gift: "https://in.bmscdn.com/vouchagram/combo/bms_and_speciality_restaurants_combo_20342018043406.jpg",
  },
  {
    gift: "https://in.bmscdn.com/vouchagram/combo/bms_and_vero_moda_combo_08352018123514.jpg",
  },
  {
    gift: "https://in.bmscdn.com/vouchagram/combo/bms_and_levis_combo_07132022031353.jpg",
  },
];

function GiftCards() {
  return (
    <div className="bigcontainer">
      <div className="singleimg">
        <img
          src="https://assets-in.bmscdn.com/promotions/cms/creatives/1692874595339_fdf.jpg"
          alt=""
        />
      </div>
      <div className='allbtn'>
        <p>Pack a card from one of our themes</p>
        <ul className='allul'>
          <li className='btns' >All</li>
          <li className='btns' >Generic</li>
          <li className='btns' >Occasion</li>
          <li className='btns' >Festival</li>
          <li className='btns' >Combos</li>
        </ul>

        
      </div>

      <div className="allimgescard">
        {giftCards.map((x) => {
          return (
            <div>
              <img className="allimges" src={x.gift} alt="" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default GiftCards;
