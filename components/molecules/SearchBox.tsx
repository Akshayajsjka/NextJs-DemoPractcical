"use client"
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

interface SearchBoxProps {
  onButtonClick: () => void;
}

const SearchBox: React.FC<SearchBoxProps> = ({ onButtonClick }) => {
  const [email, setEmail] = useState('');

  const handleInputChange = (e: any) => {
    setEmail(e.target.value);
  };

  return (
    <div>
      <TextField label="Email" variant="outlined" value={email} onChange={handleInputChange}/>
      <Button variant="contained" color="primary" onClick={onButtonClick} disabled={!validateEmail(email)}>Search</Button>
    </div>
  );
};

const validateEmail = (email : any) => {
   return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

export default SearchBox;
