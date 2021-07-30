import React from 'react';

import './FormButton.module.scss';

const FormButton = ({ type, value }) => {
  return <input type={type} value={value} />;
};

export default FormButton;
