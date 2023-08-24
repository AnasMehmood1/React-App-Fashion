import React, { useState } from 'react'
import "./style.css";
import Menu from "./menu"
import Card from "./Card"
import Navbar from "./navbar"

const uniqe = [...new Set(Menu.map((curItem)=>{
  return curItem.category
})),
'All'
]
console.log(uniqe)

const Fashion = () => {
 const [cardData, setCardData] = useState(Menu);
 const [menuList,setMenuList] = useState(uniqe)

 const filter = (category)=>{
  if(category === "All"){
   setCardData(Menu)
   return
   
  }
  const update = Menu.filter((curItem)=>{
    return curItem.category === category
  })
  setCardData(update)
 }

  return (
   <>
  <div className="navbar">
<div className="button-group-item">
{menuList.map((curItem)=>{
    return   <button className="button-item"onClick={()=>{filter(curItem)}}>{curItem}</button>
})}
  
</div>
</div>

  {/* //  <Navbar filter = {filter} menuList = {menuList}/> */}
    <Card cardData={cardData}/> </>
  )
  }

export default Fashion
