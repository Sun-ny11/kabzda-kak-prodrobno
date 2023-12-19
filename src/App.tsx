import React, { useState } from 'react';
import './App.css';
import { Accordion } from './components/accordion/Accordion';
import { Rating, ValueType } from './components/rating/Rating';
import { OnOff } from './components/onOf/OnOff';
import { UnControlledAccordion } from './components/accordion/UnControlledAccordion';
import { UnControlledRating } from './components/UnControlledRating';
import { UnControlledOnOff } from './components/onOf/UnControlledOnOff';





function App() {
  console.log("App render");

  const [ratingValue, setRatingValue] = useState<ValueType>(0)
  const [collapsed, setCollapsed] = useState<boolean>(true)
  const [switchOnOff, setSwitchOnOff] = useState<boolean>(true)

  return (
    <div>
      <AppTitle title={"This is react app"} />
      <Rating value={ratingValue} onClick={setRatingValue} />
      <UnControlledRating />
      <Accordion titleValue={"Menu"} collapsed={collapsed} setCollapsed={setCollapsed} />
      <UnControlledAccordion titleValue={"Control"} />
      <OnOff value={switchOnOff} setSwitchOnOff={setSwitchOnOff} />
      <UnControlledOnOff />{switchOnOff.toString()}
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

