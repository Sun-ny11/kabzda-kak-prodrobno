import React, { FC } from "react";
import { valueAccordionType } from "../../App";

type SelectType = {
   value: string
   onChange: (value: boolean) => void
   valueAccordion: valueAccordionType[]
   collapsed: boolean
   onClick: (i: string) => void

}



export const Select1: FC<SelectType> = ({ value, onChange, valueAccordion, collapsed, onClick }) => {
   return (
      <div>
         <div onClick={() => onChange(!collapsed)}>{value}</div>
         {!collapsed && valueAccordion.map(el => {

            const onClickHandler = () => {
               onClick(el.name)
               onChange(!collapsed)
            }

            return (
               <div onClick={onClickHandler}>{el.name}</div>
            )
         })}
      </div>
   );
};

export const Select = React.memo(Select1)