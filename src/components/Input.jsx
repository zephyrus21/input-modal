import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles({
  inputContainer: {
    gap: '16px',
    backgroundImage: 'linear-gradient(to top, #e6e9f0 0%, #eef1f5 100%)',
    padding: '30px',
    borderRadius: '20px',
    boxShadow: 'rgba(0, 0, 0, 0.4) 0px 3px 8px',
  },
});

const Input = ({ setFinalValue, setOpen }) => {
  const classes = useStyles();
  const [value, setValue] = useState('');
  let error = '';

  const submitHandler = (e) => {
    e.preventDefault();
    if (value === 'yes') {
      setFinalValue('yes');
      setOpen(true);
    }
    if (value === 'no') {
      setFinalValue('no');
      setOpen(true);
    } else {
      alert('Please enter yes or no only!');
    }
    setValue('');
  };

  return (
    <Box
      paddingTop={6}
      display='flex'
      justifyContent='center'
      alignItems='center'>
      <form onSubmit={submitHandler}>
        <Box
          display='flex'
          flexDirection='column'
          alignItems='center'
          className={classes.inputContainer}>
          <TextField
            variant='outlined'
            autoFocus
            label='Input yes or no'
            value={value}
            type='text'
            onChange={(e) => setValue(e.target.value.toLowerCase())}
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
