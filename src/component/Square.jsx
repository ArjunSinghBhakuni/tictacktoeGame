import React from 'react'

export const Square = ({clickedArray,handleClick}) => {
  return (
    <div className='board'>

     {clickedArray.map((item,index)=>{
       if(item === ""){
return(
 <div key={index} className ="square" onClick ={()=> handleClick(index)}>{item} </div>
)
}else {
return(

<div key={index} className ="square clicked" >{item} </div>
)
}

})}
    </div>
  )
}