import React, { useState } from 'react';
import CrewAlert from '../CrewAlert';
import CrewButton from '../atoms/CrewButton';
import CrewTextField from '../atoms/CrewTextField';


const CrewOrganism = () => {
  const [alertOpen, setAlertOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [clickCount, setClickCount] = useState(0);
  const [email, setEmail] = useState('');

  const handleButtonClick = () => {
    const isEmail = validateEmail(email);
    if (isEmail) {
      setClickCount(clickCount + 1);
      setAlertMessage(`Your Email Id is: ${email}`);
      setAlertOpen(true);
    }
  };

  const handleCloseAlert = () => {
    setAlertOpen(false);
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  return (
    <div className='crew-organism'>
      <CrewTextField value={email} onChange={handleEmailChange} />
      <CrewButton onClick={handleButtonClick} />
      <CrewAlert message={alertMessage} index={clickCount} onClose={handleCloseAlert} open={alertOpen} />
    </div>
  );
};
export default CrewOrganism;
