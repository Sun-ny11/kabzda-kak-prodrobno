import { useState } from "react";

type AccordionPropsType = {
   titleValue: string
}

export const UnControlledAccordion = (props: AccordionPropsType) => {
   console.log("Accordion rendering");

   const [control, setControl] = useState(true)

   let collapsed = control
   return (
      <div>
         <AccordionTitle title={props.titleValue} /> 
         <button onClick={()=>setControl(!control)}>Toggle</button>
         {!collapsed && <AccordionBody />}
      </div>
   );
};

type AccordionTitlePropsType = {
   title: string
}
export const AccordionTitle = (props: AccordionTitlePropsType) => {
   console.log("AccordionTitle rendering");

   return (
      <h3>{props.title}</h3>
   );
};



export const AccordionBody = () => {
   console.log("AccordionBody rendering");
      return (
         <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
         </ul>
      )
};