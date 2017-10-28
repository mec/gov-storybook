import React from 'react';

import Label from './label';
import InputText from './input-text';

const Text = ({ labelText, hint }) => (
  <div>
    <Label labelText={labelText} hint={hint}/>
    <InputText />
  </div>
);

export default Text;
