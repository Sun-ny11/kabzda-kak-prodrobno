import React from "react"
import { valueAccordionType } from "../../App"

type AccordionPropsType = {
   titleValue: string
   collapsed: boolean
   setCollapsed: (value: boolean) => void
   valueAccordion: valueAccordionType[]
   onClick: (el: number) => void
}

export const Accordion1 = (props: AccordionPropsType) => {
   console.log("Accordion rendering");
   debugger
   return (
      <div>
         <AccordionTitle title={props.titleValue} onClick={() => props.setCollapsed(!props.collapsed)} />
         {!props.collapsed && <AccordionBody valueAccordion={props.valueAccordion} onClick={props.onClick} />}
      </div>
   );
};
export const Accordion = React.memo(Accordion1)

type AccordionTitlePropsType = {
   title: string
   onClick: () => void

}
export const AccordionTitle = (props: AccordionTitlePropsType) => {
   console.log("AccordionTitle rendering");

   return (
      <h3 onClick={props.onClick}>{props.title}</h3>
   );
};

type AccordionBodyType = {
   valueAccordion: valueAccordionType[]
   onClick: (el: number) => void
}

export const AccordionBody1 = (props: AccordionBodyType) => {
   console.log("AccordionBody rendering");
   return (
      <ul>
         {props.valueAccordion.map(el => {
            return (
               <li onClick={() => { props.onClick(el.id) }} key={el.id}>{el.name}</li>
            )
         })}
      </ul>
   )
};
export const AccordionBody = React.memo(AccordionBody1)
