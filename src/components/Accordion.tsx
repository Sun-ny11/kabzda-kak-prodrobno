type AccordionPropsType = {
   titleValue: string
   collapsed: boolean
}

export const Accordion = (props: AccordionPropsType) => {
   console.log("Accordion rendering");
   debugger
   return (
      <div>
         <AccordionTitle title={props.titleValue} />
         {!props.collapsed && <AccordionBody />}
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