import React from 'react';
import {useState} from "react";
interface CrewTextFieldProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
const CrewTextField: React.FC<CrewTextFieldProps> = ({value, onChange}) => {
   
    // const handleButton = () => {
    //   console.log("Text Value : " + textValue);
    // };
//   const handleTextField = (event:any) =>{
//   setTextValue(event.target.value);
// };
return <input type="text" className="crew-textfield" placeholder="Search" onChange={onChange}
  value={value} />; 
};
export default CrewTextField;