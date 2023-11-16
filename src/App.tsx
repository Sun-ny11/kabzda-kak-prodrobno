import React from 'react';
import './App.css';
import { Accordion } from './components/Accordion';
import { Rating } from './components/Rating';
import { OnOf } from './components/onOf/OnOf';

function App() {
  console.log("App render");
  return (
    <div>
      <AppTitle title = {"This is react app"}/>
      <Rating value = {2} />
      <Accordion titleValue = {"Menu"} collapsed = {true}/>
      <OnOf status={true}/>
    </div>
  );
}

export default App;

type AppTitlePropsType = {
  title: string
}
export const AppTitle = (props:AppTitlePropsType) => {
  console.log("AppTitle rendering");

  return (
    <h1>{props.title}</h1>
  );
};

