import cnBind from 'classnames/bind';
import React from 'react';

import s from './FormSubmit.module.scss';

const cx = cnBind.bind(s);

const FormSubmit = ({ value, isLoading }) => {
  let classname = cx({
    formSubmit: true,
    formSubmit__loading: isLoading,
  });

  return <input className={classname} type="submit" value={value} />;
};

export default FormSubmit;
