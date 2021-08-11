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

  if (finalValue === 'yes' && open) {
    body = <UserModal finalValue={finalValue} setOpen={setOpen} />;
  }
  if (finalValue === 'no' && open) {
    body = <UserModal finalValue={finalValue} setOpen={setOpen} />;
  }
  return (
    <Box className={classes.main}>
      <a
        style={{ position: 'fixed', top: '10px', right: '10px' }}
        href='https://github.com/zephyrus21/input-modal'>
        <img src='https://img.icons8.com/ios-glyphs/40/000000/github.png' />
      </a>
      <Input setFinalValue={setFinalValue} setOpen={setOpen} />
      {body}
    </Box>
  );
};

export default App;
