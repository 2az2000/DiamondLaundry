import { useState } from "react"

const Test = () => {
    const  [holder , setHolder] = useState([
      {id:1 , },
    ])
    const clickHandler = ()=>{
      setHolder([...holder , {id:holder.length + 1}])
    }
  return (
   <>
    <button onClick={clickHandler}>loser click me</button>
    {holder.map(item=> <component></component>  )}
    </>
  )
}

export default Test