import React from 'react'

const Card = ({cardData}) => {

  
 
  return (
  <>
  
  <div className="main-container">
    
  {cardData.map((curItem)=>{
    return (
      <div className="card-container" key={curItem.id}>
      <div className="card">
        <img src={curItem.image} alt="" className="image" />
        <div className="cardtitle"><h1>{curItem.name}</h1></div>
        <div className="card-description"></div>
        <div className="price">{curItem.sy}{curItem.price}</div> 
        <button className="btn">Shop Now</button>
      </div>
    </div>
    )
   })}
   
  </div>
  
  </>
  )
}

export default Card
