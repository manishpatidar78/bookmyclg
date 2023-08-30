// import React from 'react'

// function Stream() {
//   return (
//     <div>
//           <h1>Stream</h1>
//           <p>
//           Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea minus commodi a quaerat reprehenderit, sapiente omnis corrupti odio expedita voluptatibus, aperiam, nostrum iste? Vel autem exercitationem earum. Mollitia, totam. Unde, tenetur. Officiis reprehenderit aliquam illo blanditiis alias, impedit sunt ut, velit saepe explicabo quo laudantium nihil recusandae non fuga perspiciatis officia amet dolorum? Officia ab repellat unde dignissimos vitae odit sed laudantium commodi quaerat tenetur vero molestias aperiam deserunt dolorem, omnis voluptates natus non quos, nostrum nesciunt velit nam cupiditate. Recusandae dolorum accusantium nesciunt eius dolores asperiores commodi iste non voluptate ab animi ullam iusto maiores aut perferendis laudantium, id molestiae eligendi vitae qui porro possimus. Magni velit distinctio in a aliquid tempora eos vel recusandae. Commodi excepturi a natus ratione voluptate eum praesentium aperiam? Omnis libero praesentium vel totam esse dolor aut quos, veritatis ratione sit doloremque fugiat suscipit possimus, deserunt, similique alias. Dolor voluptatum eveniet hic in, velit corrupti laboriosam atque minima molestiae distinctio debitis itaque excepturi vel mollitia minus? Quisquam atque ipsam rerum mollitia tempore amet qui ducimus, velit illo perferendis numquam quos debitis omnis, id perspiciatis veniam voluptatum repellendus, nostrum quia illum quod saepe repudiandae architecto expedita? Veritatis deleniti quasi suscipit molestiae consequatur corrupti harum numquam cum inventore itaque voluptatibus, voluptatum ducimus ut tenetur enim commodi provident eligendi ad illum aliquam, laborum excepturi. Autem quasi cum numquam velit eligendi aliquid? Rerum consequuntur molestias aut ea totam explicabo laboriosam praesentium commodi assumenda minima, earum est inventore hic iure quas tempora tenetur voluptatem iusto neque rem consequatur nam nihil minus dignissimos. Voluptatibus amet dolorem molestiae perspiciatis magnam labore vitae ipsam quisquam obcaecati quis! Facere accusamus, molestias tempora quas minus quia saepe laborum esse, in qui inventore illo itaque consectetur. Repellendus nihil velit modi rerum aliquid repudiandae earum. Saepe, laboriosam quibusdam aspernatur voluptates commodi nulla sit enim ad accusamus? Incidunt accusantium architecto beatae nam unde dolor quasi vel ea quia numquam, cumque, modi praesentium sit ullam qui ratione quae deserunt voluptate voluptates, eaque eius officia asperiores harum. Ipsum saepe repellendus velit dignissimos voluptatem? Reiciendis laborum, ipsam nesciunt perspiciatis consequuntur similique cumque quidem ad error voluptatem magni, labore nostrum sint quis aut velit, rem harum iure iste saepe adipisci unde provident atque? Excepturi, odit neque omnis ipsum laborum quidem labore eos deleniti eius veritatis, sit laboriosam temporibus ab sunt perspiciatis facere veniam minus maxime fuga inventore dignissimos maiores vero provident! Doloribus at nostrum pariatur dicta laborum voluptatem aspernatur perspiciatis nemo beatae cupiditate! Ab, laborum beatae. Quo laborum neque, ipsa consequatur, autem suscipit explicabo beatae officiis doloremque quae, voluptas inventore tenetur! Sed et cupiditate necessitatibus animi nemo delectus excepturi impedit neque veritatis quia ut, magni quidem laudantium officia pariatur ipsa a dignissimos omnis laborum quod! Repudiandae beatae accusantium modi aspernatur soluta provident, facilis perferendis minus dignissimos reiciendis velit praesentium veritatis magnam incidunt debitis vitae commodi doloremque rem. Excepturi adipisci animi molestiae deserunt quae quidem cupiditate aspernatur eaque doloremque, nisi nam expedita quis laboriosam dolorum hic sequi error inventore omnis iste commodi perspiciatis velit. Possimus eos neque asperiores deleniti quasi natus pariatur.
//           </p>
//     </div>
//   )
// }

// export default Stream

import React, { useState, useEffect } from "react";
import "./Stream.css";
const picture = [
  "https://palacenova.com.au/media/Festivals/French2023/ONEFINEMORNING_landscape_web.jpg",
  "https://images7.alphacoders.com/130/1302009.jpg",
  "https://wallpaperaccess.com/full/9140013.jpg",
  "https://wallpapercave.com/dwp1x/wp11971175.jpg",
  "https://www.screennearyou.com/wp-content/uploads/2023/08/Snoopy-Presents-One-of-a-Kind-Marcie-11.webp",
];
const picture2 = [
  "https://assets-in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/drive-my-car-et00367165-1692183834.jpg",
  "https://assets-in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/one-fine-morning-et00366591-1691584526.jpg",
  "https://assets-in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/somewhere-in-queens-et00366830-1691657748.jpg",
  "https://assets-in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/the-silent-forest-et00366720-1691572411.jpg",
  "https://assets-in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/the-silent-forest-et00366720-1691572411.jpg",
  "https://assets-in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/pui-pui-molcar-s1-et00359297-1683786564.jpg",
  "https://assets-in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/sun-moon-et00367166-1692601839.jpg",
];
var n = picture.length;
function Stream() {
  const [firstcontainerimg, setimageindex] = useState(0);
  function change(event) {
    if (event.target.id === "btn2") {
      setimageindex((firstcontainerimg + 1) % n);
    }
    if (event.target.id === "btn1") {
      setimageindex((firstcontainerimg - 1 + n) % n);
    }
  }
  useEffect(() => {
    const interval = setInterval(() => {
      setimageindex((firstcontainerimg + 1) % n);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [firstcontainerimg]);
  picture.map((item) => {});
  return (
    <div>
      {/* {picture.map((item) => (
        <img key={item} src={item} />
      ))} */}
      <div id="imagecontainer">
        <button id="btn1" onClick={change}>
          <i className="fa-solid fa-arrow-left"></i>
        </button>
        <img id="imga" src={picture[firstcontainerimg]} alt="" />
        <button id="btn2" onClick={change}>
          <i class="fa-solid fa-arrow-right"></i>
        </button>
      </div>
      <div id="container2">
        <div id="imagecontainer2">
          Premer of the week
          <div id="imagevaluecontainer">
            {picture2.map((item, index) => (
              <img id="imga2" key={index} src={item} alt="" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stream;
