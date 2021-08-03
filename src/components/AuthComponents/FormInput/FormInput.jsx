import React from 'react';

const FormInput = ({ inputType, value, setValue }) => {
  return <input type={inputType} value={value} onChange={(e) => setValue(e.target.value)} />;
};

export default FormInput;
