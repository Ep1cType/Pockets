import cn from 'classnames';
import React from 'react';

import s from './FormSubmit.module.scss';

const FormSubmit = ({ value, isLoading }) => (
  <input className={cn(s.formSubmit, { [s.formSubmit__loading]: isLoading })} type="submit" value={value} />
);

export default FormSubmit;
