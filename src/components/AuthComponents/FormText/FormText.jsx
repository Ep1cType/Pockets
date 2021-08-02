import React from 'react';

import s from './FormText.module.scss';

const FormText = ({ title, subtitle }) => {
  return (
    <div className={s.formText}>
      <div className={s.formText__title}>
        <span>{title}</span>
      </div>
      <div className={s.formText__subtitle}>
        <span>{subtitle}</span>
      </div>
    </div>
  );
};

export default FormText;
