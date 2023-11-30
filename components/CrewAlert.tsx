import React from 'react';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
interface CrewAlertProps {
  message: string;
  index: number;
  onClose: () => void;
  open: boolean;
}
const CrewAlert: React.FC<CrewAlertProps> = ({ message, index, onClose, open }) => {
  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={onClose}>
      <Alert severity="success" onClose={onClose}> {`${message} - Clicked ${index} time(s)`}
      </Alert>
    </Snackbar>
  );
};

export default CrewAlert;
  