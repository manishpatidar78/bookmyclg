import React, { useState } from 'react'
const basePara = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto omnis tempora maiores a, esse nam ab ullam nisi. Ducimus molestiae natus magni voluptatibus accusantium dolorem inventore animi tempore facere saepe?"
function Example() {
     const [para1, setPara1] = useState(basePara.substring(0,50))
  return (
    <div>
      {para1} 
       <button onClick={() => {para1 === basePara.substring(0,50) ? setPara1(basePara) : setPara1(basePara.substring(0,50)) }}>
       {para1 === basePara.substring(0,50) ? "ReadMore" : "See Less" }
       </button>
    </div>
  )
}

export default Example
