import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const Input = ({ setFinalValue, setOpen }) => {
  const [value, setValue] = useState('');

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (value === 'yes') {
            setFinalValue('yes');
            setOpen(true);
          }
          if (value === 'no') {
            setFinalValue('no');
            setOpen(true);
          }
          setValue('');
        }}>
        <TextField
          label='Input'
          value={value}
          type='text'
          onChange={(e) => setValue(e.target.value)}
        />
        <Button variant='contained' color='primary' type='submit'>
          Submit
        </Button>
      </form>
    </div>
  );
};

export default Input;
