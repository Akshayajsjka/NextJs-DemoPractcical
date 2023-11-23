import React, { useState } from 'react';

interface CrewButtonProps {
  onClick: () => void;
}

const CrewButton: React.FC<CrewButtonProps> = ({ onClick }) => {

 

return <button className="crew-button" onClick={onClick}>Search</button>;<br/>
};

const btn = () => {
  
};
export default CrewButton;