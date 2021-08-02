import React from 'react';

import './FormInput.module.scss';

const FormInput = ({ inputType, value, setValue }) => {
  return <input type={inputType} value={value} onChange={(e) => setValue(e.target.value)} />;
};

export default FormInput;
