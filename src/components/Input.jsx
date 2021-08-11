import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const Input = ({ setFinalValue, setOpen }) => {
  const [value, setValue] = useState('');

  const submitHandler = (e) => {
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
  };

  return (
    <Box
      marginTop={4}
      display='flex'
      justifyContent='center'
      alignItems='center'>
      <form onSubmit={submitHandler}>
        <Box
          display='flex'
          alignItems='center'
          style={{
            gap: '16px',
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
        </Box>
      </form>
    </Box>
  );
};

export default Input;
