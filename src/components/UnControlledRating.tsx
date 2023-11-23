import { useState } from "react";

type RatingPropsType = {
   
}

export const UnControlledRating = (props: RatingPropsType) => {
   console.log("Rating rendering");
   const [change ,setChange] = useState(0)
   let value = change
   return (
      <div>
         <Star selected={value > 0} /><button onClick={()=>setChange(1)}>1</button>
         <Star selected={value > 1} /><button onClick={()=>setChange(2)}>2</button>
         <Star selected={value > 2} /><button onClick={()=>setChange(3)}>3</button>
         <Star selected={value > 3} /><button onClick={()=>setChange(4)}>4</button>
         <Star selected={value > 4} /><button onClick={()=>setChange(5)}>5</button>
      </div>
   )
}
type StarPropsType = {
   selected: boolean
}

export const Star = (props: StarPropsType) => {
   console.log("Star rendering");
   if (props.selected === true) {
      return <span><b>Star </b></span>
   } else {
      return <span>Star </span>
   }

};