import React, { useState } from 'react';
import Input from './components/Input';
import UserModal from './components/UserModal';

const App = () => {
  const [finalValue, setFinalValue] = useState('');
  const [open, setOpen] = useState(false);

  let body;

  if (finalValue === 'yes' && open) {
    body = <UserModal setOpen={setOpen} />;
  }
  if (finalValue === 'no' && open) {
    body = <UserModal setOpen={setOpen} />;
  }
  return (
    <>
      <Input setFinalValue={setFinalValue} setOpen={setOpen} />
      {body}
    </>
  );
};

export default App;
