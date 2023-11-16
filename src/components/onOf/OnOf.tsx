import React from "react";
import './../../App.css';

type OnOfPropsType = {
   status: boolean
}
export const OnOf: React.FC<OnOfPropsType> = ({ status }) => {
   const stuleOn = {
      backgroundColor: "green"
   }
   const stuleOff = {
      backgroundColor: "red"
   }
   
   return (
      <div>
         {status ?<span style={stuleOn} className="on">On</span>:<span  className="off">On</span>}
         {status ?<span className="off">Off</span>:<span style={stuleOff} className="on">Off</span>}
         {status ? <span style={stuleOn} className="lamp"></span>: <span style={stuleOff} className="lamp"></span>}
      </div>
   );
};