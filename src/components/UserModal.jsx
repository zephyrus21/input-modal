import React from 'react';
import Button from '@material-ui/core/Button';

const UserModal = ({ setOpen }) => {
  return (
    <div>
      Hey
      <Button onClick={() => setOpen(false)}>Close</Button>
    </div>
  );
};

export default UserModal;
