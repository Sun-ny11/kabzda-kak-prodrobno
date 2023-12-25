import React from "react"


export type ValueType = 0 | 1 | 2 | 3 | 4 | 5

type RatingPropsType = {
   value: ValueType
   onClick: (value: ValueType) => void
}

export const Rating1 = (props: RatingPropsType) => {
   console.log("Rating rendering");
   return (
      <div>
         <Star selected={props.value > 0} onClick={props.onClick} value={1} />
         <Star selected={props.value > 1} onClick={props.onClick} value={2} />
         <Star selected={props.value > 2} onClick={props.onClick} value={3} />
         <Star selected={props.value > 3} onClick={props.onClick} value={4} />
         <Star selected={props.value > 4} onClick={props.onClick} value={5} />
      </div>
   )
}
export const Rating = React.memo(Rating1)
type StarPropsType = {
   selected: boolean
   onClick: (value: ValueType) => void
   value: ValueType
}

export const Star1 = (props: StarPropsType) => {
   console.log("Star rendering");
   return <span onClick={() => { props.onClick(props.value) }}>{props.selected ? <b>Star </b> : "Star "}</span>

};
export const Star = React.memo(Star1)