import React from 'react';
import TextField from '@mui/material/TextField';
import './CrewTextField.scss';
interface CrewTextFieldProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
const CrewTextField: React.FC<CrewTextFieldProps> = ({ value, onChange }) => {
  return <TextField className='crew-textfield' label="Email ID" variant="outlined" value={value} onChange={onChange}  />;
};
export default CrewTextField;
