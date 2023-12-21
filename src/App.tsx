import React, { useState } from 'react';
import './App.css';
import { Accordion } from './components/accordion/Accordion';
import { Rating, ValueType } from './components/rating/Rating';
import { OnOff } from './components/onOf/OnOff';
import { UnControlledAccordion } from './components/accordion/UnControlledAccordion';
import { UnControlledRating } from './components/UnControlledRating';
import { UnControlledOnOff } from './components/onOf/UnControlledOnOff';
import { Select } from './components/select/Select';



export type valueAccordionType = {
  id: number
  name: string
}


function App() {
  console.log("App render");

  const [ratingValue, setRatingValue] = useState<ValueType>(0)
  const [collapsed, setCollapsed] = useState<boolean>(true)
  const [switchOnOff, setSwitchOnOff] = useState<boolean>(true)
  const [isSelect, setIsSelect] = useState(true)
  const [selectValue, setSelectValue] = useState("Cccc")

  const valueAccordion: valueAccordionType[] = [
    { id: 1, name: "Stas" },
    { id: 2, name: "Nastya" },
    { id: 3, name: "Archi" },
    { id: 4, name: "Tortile" },
  ]

  const onClickHandler = (id: number) => {
    console.log(`eeeeee ${id}`);

  }

  return (
    <div>
      <AppTitle title={"This is react app"} />
      <Rating value={ratingValue} onClick={setRatingValue} />
      <UnControlledRating />
      <Accordion titleValue={"Menu"} collapsed={collapsed} setCollapsed={setCollapsed} valueAccordion={valueAccordion} onClick={onClickHandler} />
      <UnControlledAccordion titleValue={"Control"} />
      <OnOff value={switchOnOff} setSwitchOnOff={setSwitchOnOff} />
      <UnControlledOnOff />{switchOnOff.toString()}
      <Select value={selectValue} onChange={setIsSelect} valueAccordion={valueAccordion} collapsed={isSelect} onClick={setSelectValue} />
    </div>
  );
}

export default App;

type AppTitlePropsType = {
  title: string
}
export const AppTitle = (props: AppTitlePropsType) => {
  console.log("AppTitle rendering");

  return (
    <h1>{props.title}</h1>
  );
};

