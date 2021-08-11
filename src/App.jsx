import React, { useState } from 'react';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Input from './components/Input';
import UserModal from './components/UserModal';

const useStyles = makeStyles({
  main: {
    backgroundImage: 'linear-gradient(to right, #4facfe 0%, #00f2fe 100%)',
    minHeight: '100vh',
  },
});

const App = () => {
  const [finalValue, setFinalValue] = useState('');
  const [open, setOpen] = useState(false);
  const classes = useStyles();

  let body;

  if ((finalValue === 'yes' || finalValue === 'no') && open) {
    body = <UserModal finalValue={finalValue} setOpen={setOpen} />;
  }

  return (
    <Box className={classes.main}>
      <Input setFinalValue={setFinalValue} setOpen={setOpen} />
      {body}
    </Box>
  );
};

export default App;
