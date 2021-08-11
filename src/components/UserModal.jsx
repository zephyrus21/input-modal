import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Box, Paper } from '@material-ui/core';
import yes from '../Assets/yes.gif';
import no from '../Assets/no.gif';

const useStyles = makeStyles({
  gap: {
    gap: '20px',
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    color: 'white',
    height: '300px',
    width: '300px',
  },
});

const UserModal = ({ setOpen, finalValue }) => {
  let bgColor;
  let icon;
  if (finalValue === 'yes') {
    bgColor = 'green';
    icon = yes;
  }
  if (finalValue === 'no') {
    bgColor = 'red';
    icon = no;
  }

  const classes = useStyles();
  return (
    <Box
      marginTop={4}
      flexDirection='column'
      display='flex'
      justifyContent='center'
      alignItems='center'
      className={classes.gap}>
      <Paper
        style={{ backgroundColor: `${bgColor}` }}
        className={classes.modal}
        elevation={4}>
        <img src={icon} alt='yes' />
      </Paper>
      <Button
        variant='contained'
        onClick={() => setOpen(false)}
        color='secondary'>
        Close
      </Button>
    </Box>
  );
};

export default UserModal;
