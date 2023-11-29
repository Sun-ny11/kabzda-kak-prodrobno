import React, { useState } from "react";
import './../../App.css';

type OnOfPropsType = {
   setSwitchOnOff: (value: boolean) => void
   value: boolean
}
export const OnOff: React.FC<OnOfPropsType> = (props) => {

   // const [change, setChange] = useState(true)

   // let switcher = change

   const On = {
      backgroundColor: props.value ? "green" : "white"
   }
   const Off = {
      backgroundColor: props.value ? "white" : "red"
   }
   const lamp = {
      backgroundColor: props.value ? "green" : "red"
   }

   return (
      <div>
         <button onClick={() => props.setSwitchOnOff(!props.value)} style={On} className="on">On</button>
         <button onClick={() => props.setSwitchOnOff(!props.value)} style={Off} className="off">Off</button>
         <span style={lamp} className="lamp"></span>
      </div>
   );
};