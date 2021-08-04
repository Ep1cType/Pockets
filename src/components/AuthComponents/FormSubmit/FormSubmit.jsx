import cn from 'classnames';
import React from 'react';

import './FormSubmit.scss';

const FormSubmit = ({ value, isLoading }) => (
  <input className={cn('formSubmit', { formSubmit__loading: isLoading })} type="submit" value={value} />
);

export default FormSubmit;
