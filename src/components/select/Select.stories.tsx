import { action } from '@storybook/addon-actions';

import { Select } from './Select';
import { useState } from 'react';
import { valueAccordionType } from '../../App';

export default {
   component: Select,
};
const valueAccordion: valueAccordionType[] = [
   { id: 1, name: "Stas" },
   { id: 2, name: "Nastya" },
   { id: 3, name: "Archi" },
   { id: 4, name: "Tortile" },
]


export const SelectWorks = () => {
   const [selectValue, setSelectValue] = useState("Cccc")
   const [isSelect, setIsSelect] = useState(true)
   return (
      <Select value={selectValue} onChange={setIsSelect} valueAccordion={valueAccordion} collapsed={isSelect} onClick={setSelectValue} />

   )
}