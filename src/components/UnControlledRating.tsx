import { useState } from "react";

type RatingPropsType = {

}

export const UnControlledRating = (props: RatingPropsType) => {
   console.log("Rating rendering");
   const [change, setChange] = useState(0)
   let value = change
   return (
      <div>
         <Star selected={value > 0} setChange={()=>setChange(1)} />
         <Star selected={value > 1} setChange={()=>setChange(2)} />
         <Star selected={value > 2} setChange={()=>setChange(3)} />
         <Star selected={value > 3} setChange={()=>setChange(4)} />
         <Star selected={value > 4} setChange={()=>setChange(5)} />
      </div>
   )
}
type StarPropsType = {
   selected: boolean
   setChange:()=>void
}

export const Star = (props: StarPropsType) => {
   console.log("Star rendering");
   return <span onClick={props.setChange}>{props.selected ? <b>Star </b> : "Star"}</span>

};