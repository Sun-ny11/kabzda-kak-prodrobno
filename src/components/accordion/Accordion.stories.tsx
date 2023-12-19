import { action } from '@storybook/addon-actions';

import { Accordion } from './Accordion';
import { useState } from 'react';

export default {
   component: Accordion,
};



const onChangeHandler = action("true")

export const OpenedAccordion = () => {
   return <Accordion titleValue={"Open"} collapsed={false} setCollapsed={()=>{}} />

}
export const ClosedAccordion = () => {
   return <Accordion titleValue={"Close"} collapsed={true} setCollapsed={() => { }} />

}
export const AccordionDemo = () => {
   const [collapsed, setCollapsed] = useState(true)
   return <Accordion titleValue={"Accordion"} collapsed={collapsed} setCollapsed={() => { setCollapsed(!collapsed) }} />

}