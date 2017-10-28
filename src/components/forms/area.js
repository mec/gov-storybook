import React from 'react';

import Label from './label';
import InputArea from './input-area';

const Text = ({ labelText, hint }) => (
  <div>
    <Label labelText={labelText} hint={hint}/>
    <InputArea />
  </div>
);

export default Text;
