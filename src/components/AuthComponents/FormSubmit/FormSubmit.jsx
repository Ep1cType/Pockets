import React from 'react';

import s from './FormSubmit.module.scss';

const FormSubmit = ({ value, isLoading }) => {
  return <input className={isLoading ? `${s.button__loading}` : null} type="submit" value={value} />;
};

export default FormSubmit;
