import React, { FC }  from "react";
import { valueAccordionType } from "../../App";

type SelectType = {
   value:string
   onChange:(value:boolean)=>void
   valueAccordion:valueAccordionType[]
   collapsed: boolean
   onClick:(i:string)=>void

}

export const Select:FC<SelectType> =({value,onChange,valueAccordion,collapsed,onClick}) => {
   return (
      <div>
         <div onClick={()=>onChange(!collapsed)}>{value}</div>
         {!collapsed && valueAccordion.map(el=>{
            return(
               <div onClick={()=>{onClick(el.name)}}>{el.name}</div>
            )
         })}
      </div>
   );
};