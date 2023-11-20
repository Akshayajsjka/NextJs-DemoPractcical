"use client"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {useState} from "react";
export default function Home() {
  const [textValue, setTextValue] = useState('');

  const handleButton = () =>{
   console.log("Text Value : "+textValue);

  };

  const handleTextField = (event) =>{
    setTextValue(event.target.value);
  };
  
  const handleReset = () => {
    setTextValue(''); 
  };
  return (
    <>
    <div className='flex min-h-screen flex-col justify-between items-center text-center  border border-blue-400'>
     <div className='border border-red-600 text-center'>
        <TextField id="outlined-basic"  variant="outlined" placeholder="Enter your name"
        onChange={handleTextField}
        value={textValue}/><br/>&nbsp;
        <Button variant="contained" onClick={handleButton} >Show</Button>&nbsp;
        <Button variant="contained" onClick={handleReset}
        >Reset</Button>
    </div>
    </div>
    </>
    
  )
}
