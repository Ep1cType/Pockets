import React from 'react';

import './Input.module.scss';

const FormInput = ({ inputType, value, setValue }) => {
  debugger;
  return <input type={inputType} value={value} onChange={(e) => setValue(e.target.value)} />;
};

export default FormInput;
