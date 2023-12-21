import { action } from '@storybook/addon-actions';

import { Accordion } from './Accordion';
import { useState } from 'react';

export default {
   component: Accordion,
};



const onChangeHandler = action(`eee `)

export const OpenedAccordion = () => {
   return <Accordion titleValue={"Open"} collapsed={false} setCollapsed={()=>{}} valueAccordion = {[{id:1, name:"1111"}]}  onClick={onChangeHandler}/>

}
export const ClosedAccordion = () => {
   return <Accordion titleValue={"Close"} collapsed={true} setCollapsed={() => { }} valueAccordion = {[{id:2, name:"22222"}]} onClick={onChangeHandler}/>

}
export const AccordionDemo = () => {
   const [collapsed, setCollapsed] = useState(true)
   return <Accordion titleValue={"Accordion"} collapsed={collapsed} setCollapsed={() => { setCollapsed(!collapsed) }} valueAccordion = {[{id:3, name:"33333"},{id:2, name:"22222"} ]} onClick={onChangeHandler}/>

}