import React, { useState } from "react";
import './../../App.css';

type OnOfPropsType = {

}
export const OnOf: React.FC<OnOfPropsType> = () => {

   const [change, setChange] = useState(true)

   let switcher = change

   const On = {
      backgroundColor: change?"green":"white"
   }
   const Off = {
      backgroundColor: change?"white":"red"
   }
   const lamp = {
      backgroundColor: change?"green":"red"
   }

   return (
      <div>
         <button onClick={()=>setChange(!change)} style={On} className="on">On</button>
         <button onClick={()=>setChange(!change)} style={Off} className="off">Off</button>
         <span style={lamp} className="lamp"></span>
      </div>
   );
};