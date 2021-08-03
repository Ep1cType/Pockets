import cn from 'classnames';
import React from 'react';

import './FormSubmit.scss';

const FormSubmit = ({ value, isLoading }) => {
  let classname = cn('formSubmit', { formSubmit__loading: isLoading });

  return <input className={classname} type="submit" value={value} />;
};

export default FormSubmit;
