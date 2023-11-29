type AccordionPropsType = {
   titleValue: string
   collapsed: boolean
   setCollapsed: (value: boolean) => void
}

export const Accordion = (props: AccordionPropsType) => {
   console.log("Accordion rendering");
   debugger
   return (
      <div>
         <AccordionTitle title={props.titleValue} onClick={() => props.setCollapsed(!props.collapsed)} />
         {!props.collapsed && <AccordionBody />}
      </div>
   );
};

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