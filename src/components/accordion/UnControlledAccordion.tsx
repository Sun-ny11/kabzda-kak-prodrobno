import { useReducer, useState } from "react";
import { reducerUnControlledAccordion } from "./reducerUnControlledAccordion";
import React from "react";

type AccordionPropsType = {
   titleValue: string
}




export const UnControlledAccordion1 = (props: AccordionPropsType) => {
   console.log("Accordion rendering");

   const [control, dispatchControl] = useReducer(reducerUnControlledAccordion,{collapsed:true})

   let collapsed = control
   return (
      <div>
         <AccordionTitle title={props.titleValue} onClick={() => dispatchControl({type:"TOGGLE" })} />
         {/* <button onClick={()=>setControl(!control)}>Toggle</button>*/}
         {!control.collapsed && <AccordionBody />}
      </div>
   );
};

export const UnControlledAccordion = React.memo(UnControlledAccordion1)

type AccordionTitlePropsType = {
   title: string
   onClick: () => void
}
export const AccordionTitle = (props: AccordionTitlePropsType) => {
   console.log("AccordionTitle rendering");

   return (
      <h3 onClick={() => props.onClick()}>{props.title}</h3>
   );
};



export const AccordionBody1 = () => {
   console.log("AccordionBody rendering");
   return (
      <ul>
         <li>1</li>
         <li>2</li>
         <li>3</li>
      </ul>
   )
};
export const AccordionBody = React.memo(AccordionBody1)
