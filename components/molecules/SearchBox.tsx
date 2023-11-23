"use client"
import React from 'react';
import CrewButton from '../atoms/CrewButton';
import CrewTextField from '../atoms/CrewTextField';
import { useState } from 'react';

const SearchBox: React.FC = () => {
  const [textValue, setTextValue] = useState('');

  const handleTextField = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTextValue(event.target.value);
  };

  const handleButton = () => {
    console.log("Text Value : " + textValue);
  };


  return (
    <div className='align-content: center'>
    <div className="search-box" >
        <CrewTextField value={textValue} onChange={handleTextField} />
        <CrewButton onClick={handleButton} />
    
    </div>
    </div>
  );
};
export default SearchBox;