import React from 'react';
import './CrewButton.scss';

interface CrewButtonProps {
  onClick: () => void;
}

const CrewButton: React.FC<CrewButtonProps> = ({ onClick }) => {
  return <button className="crew-button" onClick={onClick}>Search</button>;
};

export default CrewButton;
