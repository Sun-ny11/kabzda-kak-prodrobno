import React, { useState } from "react";
import './../../App.css';

type OnOfPropsType = {
   setSwitchOnOff: (value: boolean) => void
}
export const UnControlledOnOff: React.FC<OnOfPropsType> = (props) => {

   const [change, setChange] = useState(true)

   let switcher = change

   const On = {
      backgroundColor: change ? "green" : "white"
   }
   const Off = {
      backgroundColor: change ? "white" : "red"
   }
   const lamp = {
      backgroundColor: change ? "green" : "red"
   }

   // change ? props.setSwitchOnOff(change):props.setSwitchOnOff(change)

   return (
      <div>
         <button onClick={() => setChange(!change)} style={On} className="on">On</button>
         <button onClick={() => setChange(!change)} style={Off} className="off">Off</button>
         <span style={lamp} className="lamp"></span>
      </div>
   );
};